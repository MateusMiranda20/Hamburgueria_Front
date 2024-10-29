import { useEffect, useState } from 'react';
import { Container, Banner, CategoryMenu, ProductMenu, CategoryButton } from './styles'
import { api } from '../../services/api';
import { FormatPrice } from '../../utils/FormatPrice'
import { CardProduct } from '../../components/CardProduct'

function Menu() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
        
    async function loadCategories() {
        const { data } = await api.get('/categories')

        const newCategory = [{id: 0, name:'Todas'}, ...data]

        setCategories(newCategory)
    }

    async function loadProducts() {

      const { data } = await api.get('/products');

      const newProducts = data.map((product) => (
        {currencyValue: FormatPrice(product.price), ...product}
      ))

      setProducts(newProducts)

    }

   
    loadCategories()
    loadProducts()
    }, []);



    return (
      <Container>
        <Banner>
          <h1>
            O MELHOR 
            <br/>
            HAMBURGUER
            <br/>
            ESTÁ AQUI!
            <br/>
            <span>Esse cardápio está irresistível!</span>
          </h1>
        </Banner>

        <CategoryMenu>
          {categories.map((category) =>(
            <CategoryButton key={category.id}> {category.name} </CategoryButton>
          ))}
        </CategoryMenu>

        <ProductMenu>
        { products.map((product) => (
          <CardProduct product={product} key={product.id}/>
        ))}
        </ProductMenu>
      </Container>
    );
  }
  
  export default Menu