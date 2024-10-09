import {Banner, Container, Content} from "./styles"

function Home() {
    return (
      <main>
        <Banner>
            <h1>Bem-Vindo</h1>
        </Banner>
        <Container>
        <Content>
            <div>Carrosel Categorias</div>
            <div>Carrosel produtos</div>
        </Content>
        </Container>  
      </main>
    );
}

export default Home