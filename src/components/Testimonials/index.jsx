import ImagePersonTwo from '../../assets/person-one.svg'
import ImagePersonOne from '../../assets/person-two.svg'

import IconQuality from '../../assets/quality.svg'
import IconTrust from '../../assets/trust.svg'
import IconExperience from '../../assets/experience.svg'

import './styles.scss'

export function Testimonials() {
  return (
    <>
      <section className="containerTestimonial">
        <div className="wrapperTestmonial">
          <div className="testimonialContent">
            <blockquote>
              <p>
                “Faço roupas com o Renee Trajar há mais de duas décadas, o
                serviço é impecável em todos os detalhes, desde a costura ao
                caimento. O Renee tem uma equipe de mestre!”
              </p>
              <cite>Nelson Garey</cite>
              <span>Advogado | Nelson Garey Advogados Associados</span>
            </blockquote>


            <div className="containerImageTwo">
              <div className='containerImg'>
                <img src={ImagePersonOne} alt="Nelson Garey" />
              </div>
              <div className='containerImg'>
                  <img src={ImagePersonTwo} alt="Nelson Garey" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='sectionCards'>
        <div className="containerCards">
        
        <div className="card">
          <img src={IconQuality} alt="Ícone de qualidade" />
          <strong>Qualidade</strong>
          <span>Camisaria e Alfaiataria 100% artesanal.</span>
        </div>

        <div className="card">
          <img src={IconTrust} alt="Ícone de confiança" />
          <strong>Confiança</strong>
          <span>Atendimento personalizado no escritório ou residência.</span>
        </div>

        <div className="card">
          <img src={IconExperience} alt="Ícone de experiencia" />
          <strong>Confiança</strong>
          <span>Tradição e modernidade proporcionando elegância.</span>
        </div>
        </div>
      </section>
    </>
  )
}
