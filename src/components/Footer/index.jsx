import ImageLogo from '../../assets/logo-black-letter.svg'
import IconArrow from '../../assets/arrow-top.svg'

import './styles.scss'

export function Footer() {
  return (
    <footer className="containerFooter">
      <div className="wrapperFooter">
        <img src={ImageLogo} alt="Logo" />

        <p>Copyright: 2021 © Renee Trajar - Todos os direitos reservados.</p>

        <div className='containerIcon' id='icon'>
          <img src={IconArrow} alt="" />
        </div>
      </div>
    </footer>
  )
}
