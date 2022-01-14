import { Carousel } from 'react-bootstrap'
import {apiCarousel} from "../../services/api"


import './styles.scss'

export function Carroussel() {
  
  return (
    <section className="containerCarousel">
      <div className="wrapperCarousel">

        <h2>Depoimentos</h2>

      <Carousel fade className='containerWrapperCarousel' >
      {apiCarousel.map( item => (
        <Carousel.Item className='carouselItem' key={item.name}>
          <img
            src={item.path}
            alt="First slide"
          />
          <Carousel.Caption className='contentCaption'>
            <blockquote>
              <cite> 
                  {item.text}
               </cite>
            </blockquote>
            <h3>{item.name}</h3>
            <p>{item.local}</p>
          </Carousel.Caption>
        </Carousel.Item>


))}
      </Carousel>
      </div>
        
    </section>
  )
}
