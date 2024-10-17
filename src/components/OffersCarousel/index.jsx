import { useEffect, useState } from "react"
import { Container, Title } from '../OffersCarousel/styles'
import { CardProduct} from '../CardProduct'

import { api } from "../../services/api"
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css'


export function OffersCarrosel() {

  const [oferrs, setOffers] = useState([]);

  useEffect(() => {

    async function loadProducts() {

      const { data } = await api.get('/products');

      const onlyOffers = data.filter(product => product.offer === true)

      setOffers(onlyOffers)

    }

    loadProducts()
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },

    desktop: {
      breakpoint: { max: 3000, min: 1280 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1280, min: 690 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 690, min: 0 },
      items: 2,
    },
  };

  return (
    <Container>
      <Title>Ofertas do dia</Title>
      <Carousel
        responsive={responsive}
        infinite={true}
        partialVisible={false}
        itemClass="carousel-item"


      >
        {oferrs.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </Carousel>
    </Container>
  )
}