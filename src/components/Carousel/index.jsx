import { Carousel } from 'react-bootstrap'
import {apiCarousel} from "../../services/api"


import './styles.scss'

export function Carroussel() {
  
  return (
    <section className="containerCarousel">
        <h2>Depoimentos</h2>

      <Carousel fade className='containerWrapperCarousel' >
      {apiCarousel.map( item => (
        <Carousel.Item className='carouselItem' >
          <img
            src={item.path}
            alt="First slide"
          />
          <Carousel.Caption className='contentCaption'>
            <bloquote>
              <cite> 
                  {item.text}
               </cite>
            </bloquote>
            <h3>{item.name}</h3>
            <p>{item.local}</p>
          </Carousel.Caption>
        </Carousel.Item>


))}
      </Carousel>
        
    </section>
  )
}
