import { Container, Banner, CategoryMenu, ProductMenu } from './styles'



function Menu() {
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

        <CategoryMenu></CategoryMenu>

        <ProductMenu></ProductMenu>
      </Container>
    );
  }
  
  export default Menu