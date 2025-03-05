import { CategoriesCarousel } from "../../../src/components/CategoriesCarousel";
import { OffersCarrosel } from "../../../src/components/OffersCarousel";
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