import { CategoriesCarousel } from "../../components/categoriesCarousel";
import { OffersCarrosel } from "../../components/OffersCarousel";
import { Banner, Container } from "./styles"

function Home() {
  return (
    <main>
      <Banner>
        <h1>Bem-Vindo(a)</h1>
      </Banner>
      <Container>
        <CategoriesCarousel />
        <OffersCarrosel />
      </Container>
    </main>
  );
}

export default Home