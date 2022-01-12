import IconQuality from '../../assets/quality.svg'
import IconTrust from '../../assets/trust.svg'
import IconExperience from '../../assets/experience.svg'

import ImageClothing from '../../assets/clothing.svg'
import {CommonButton} from "../CommonButton"

import ImageClothingOne from "../../assets/clothing-one.svg"
import ImageClothingTwo from "../../assets/clothing-two.svg"


import './styles.scss'

export function Bid() {
  return (
    <>
      <section className="containerBid">
        
        <div className="containerContentBid">
          <h1 className="gold">Condição Imperdível</h1>

          <span 
            className="gold">
              Compre hoje e garanta:
          </span>
        
          <ul>
            <li>
              <span>-</span>
              12% de desconto e pagamento em até <strong>3x sem juros</strong> ;
            </li>
            <li>
              <span>-</span>
              Até <strong>10 meses</strong> para confeccionar sua roupa. Não se
              preocupe se suas medidas aumentaram ou diminuíram, estará sempre
              elegante;
            </li>
            <li>
              <span>-</span>
              Condição muito especial por <strong>tempo limitado</strong> ;
            </li>
            <li>
              <span>-</span>
              Poder presentear alguém com uma roupa de alta costura, exclusiva.
            </li>
          </ul>

          <CommonButton 
            text="Garanta essa condição especial! "
            color='#E0E0E0'
            textTransform='none'
          />

        </div>

        <div className="containerImageBid">
          <img src={ImageClothing} alt="Terno de Alfaiataria" />
        </div>
      </section>

      <section className='containerCardClothing'>
        <div className='containerImageClothing'>
            <img src={ImageClothingOne} alt="Roupa de alfaiataria" />
        </div>
        <div className='cardClothing'>
            <h1>Camisaria</h1>
            <span>confeccionadas artesanalmente</span>

            <ul>
              <li>100% Algodão</li>
              <li>Monograma</li>
              <li>Slim</li>
              <li>Nacionais e Importadas</li>
              <li>Tradicionais e Esportivas</li>
              <li>Casamentos</li>
            </ul>

            <CommonButton 
              text="Quero um orçamento"
              color='#E5E5E5'
              textTransform='none'
            />

        </div>
        
      </section>
    
    </>
    
  )
}
