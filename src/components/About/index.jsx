import ImgQuotation from '../../assets/quotation.svg'
import ImgRenee from '../../assets/renee.svg'
import { CommonButton } from '../CommonButton'

import './styles.scss'

export function About() {
  return (
    <section className="containerAbout">
      <div className="containerImage">
        <img src={ImgRenee} alt="" />
      </div>

      <div className="content">
        <h1>Renee Trajar</h1>
        <p>
          Com mais de 35 anos de experiência em camisas, calças e ternos sob
          medida, possuímos profissionais experientes e altamente qualificados.
        </p>
        <p>
          Cada cliente tem seu molde exclusivamente desenvolvido para seu
          biotipo através das medidas tiradas pelo próprio Sr. Renee, no
          escritório ou residência do cliente.
        </p>

        <blockquote>
          <p>
            “Nosso objetivo é superar a expectativa do cliente
            proporcionando-lhe satisfação ao usar nossos produtos, aliado a um
            relacionamento franco e honesto, valorizando o ser humano.”
          </p>

          <cite>Renee Trajar</cite>

          <img src={ImgQuotation} alt="Double quotaion" />
        </blockquote>

        <CommonButton
          text="Agende uma visita!"
          textTransform="none"
          color="rgba(229, 229, 229, 1)"
        />
      </div>
    </section>
  )
}
