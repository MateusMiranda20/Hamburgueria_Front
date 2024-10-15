import { CategoriesCarousel } from "../../components/categoriesCarousel";
import { OffersCarrosel } from "../../components/OffersCarousel";
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
            <OffersCarrosel />
        </Content>
        </Container>  
      </main>
    );
}

export default Home