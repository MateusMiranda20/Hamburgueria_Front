import { useEffect, useState } from 'react';
import { Container, Banner, CategoryMenu, ProductMenu, CategoryButton } from './styles'
import { api } from '../../services/api';
import { FormatPrice } from '../../utils/FormatPrice'
import { CardProduct } from '../../components/CardProduct'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

function Menu() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [Filterproducts, setFilterproducts] = useState([]);
  

  const navigate = useNavigate()

  const { search } = useLocation();

  const queryParams = new URLSearchParams(search);

  const [ActiveCategory, setActiveCategory] = useState(() => {
    const categoryId = +queryParams.get('/categoria')

    if (categoryId) {
      return categoryId
    } else {
      return 0
    }

  });



  useEffect(() => {

    async function loadCategories() {
      const { data } = await api.get('/categories')

      const newCategory = [{ id: 0, name: 'Todas' }, ...data]

      setCategories(newCategory)
    }

    async function loadProducts() {

      const { data } = await api.get('/products');

      const newProducts = data.map((product) => (
        { currencyValue: FormatPrice(product.price), ...product }
      ))

      setProducts(newProducts)

    }


    loadCategories()
    loadProducts()
  }, []);


  useEffect(() => {
    if (ActiveCategory === 0) {
      setFilterproducts(products)
    } else {
      const newFilterProducts = products.filter(
        (product) => product.category_id === ActiveCategory
      )

      setFilterproducts(newFilterProducts)
    }
  }, [products, ActiveCategory])



  return (
    <Container>
      <Banner>
        <h1>
          O MELHOR
          <br />
          HAMBURGUER
          <br />
          ESTÁ AQUI!
          <br />
          <span>Esse cardápio está irresistível!</span>
        </h1>
      </Banner>

      <CategoryMenu>
        {categories.map((category) => (
          <CategoryButton
            key={category.id}
            $isActiveCategory={category.id === ActiveCategory}
            onClick={() => {

              navigate(
                {
                pathname: '/cardapio',
                search: `/categoria=${category.id}`
              },
                {
                  replace: true
                },
              )
              setActiveCategory(category.id)
            }}

          >{category.name} </CategoryButton>
        ))}
      </CategoryMenu>

      <ProductMenu>
        {Filterproducts.map((product) => (
          <CardProduct product={product} key={product.id} />
        ))}
      </ProductMenu>
    </Container>
  );
}

export default Menu