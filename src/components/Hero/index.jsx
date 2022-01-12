// import  ImageLogo from "../../assets/logo.svg"
import ImageBanner from "../../assets/banner.png"
import {Header} from "../Header"
import { CommonButton } from "../CommonButton"


import "./styles.scss"

export function Hero() {
  return(
    <section 
      className="containerHero"
      style={{backgroundImage: `url(${ImageBanner})`}}>

      <Header/>

      <div className="contentWrapperHero">
        <div className="contentHero">
          <span className="gold">Elegante é ter um </span>
          <strong>alfaiate</strong>
          <span class="gold">para chamar de seu.</span>

          <span>
            compre hoje, <strong>pague em até 3x <br /> com 12% de desconto</strong> e tenha <br />  10 meses para confeccionar!
          </span>

          <CommonButton 
            text='faça ja um orçamento'
            textTransform='uppercase'
            color='#E5E5E5'
          />


        </div>
      </div>
      
    </section>
  )
}