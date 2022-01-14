import ImageLogo from '../../assets/logo-black-letter.svg'
import IconArrow from '../../assets/arrow-top.svg'

import './styles.scss'

export function Footer() {

  function backToTop(ev){
    if(ev.target.className === 'containerIcon' || ev.target.className === 'img'){
      window.scrollTo(0,0)
    }

  }
  return (
    <footer className="containerFooter">
      <div className="wrapperFooter">
        <img src={ImageLogo} alt="Logo" />

        <p>Copyright: 2021 © Renee Trajar - Todos os direitos reservados.</p>

        <div className='containerIcon' id='icon' onClick={ (ev) => backToTop(ev)}>
          <img src={IconArrow} alt="icone de seta" className='img'/>
        </div>
      </div>
    </footer>
  )
}
