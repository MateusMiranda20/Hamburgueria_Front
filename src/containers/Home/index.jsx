import { CategoriesCarousel } from "../../components/categoriesCarousel";
import {Banner, Container, Content} from "./styles"

function Home() {
    return (
      <main>
        <Banner>
            <h1>Bem-Vindo(a)</h1>
        </Banner>
        <Container>
        <Content>
            <CategoriesCarousel />
            <div>Carrosel produtos</div>
        </Content>
        </Container>  
      </main>
    );
}

export default Home