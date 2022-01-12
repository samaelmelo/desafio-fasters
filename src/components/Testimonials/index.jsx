import ImagePersonTwo from '../../assets/person-one.svg'
import ImagePersonOne from '../../assets/person-two.svg'
import './styles.scss'

export function Testimonials() {
  return (
    <div className="containerTestimonial">
      <div className="testimonialContent">
        <quotation>
          <p>
            “Faço roupas com o Renee Trajar há mais de duas décadas, o serviço é
            impecável em todos os detalhes, desde a costura ao caimento. O Renee
            tem uma equipe de mestre!”
          </p>
          <cite>Nelson Garey</cite>
          <span>Advogado | Nelson Garey Advogados Associados</span>
        </quotation>

        <div className="testimonailImageOne">
          <img src={ImagePersonOne} alt="Nelson Garey" />
        </div>
      </div>

      <div className="testimonialImageTwo">
        <img src={ImagePersonTwo} alt="Nelson Garey" />
      </div>
    </div>
  )
}
