import  ImageLogo from "../../assets/logo.svg"

import "./styles.scss"

export function Header() {
  return(
    <header >
      <div className='contentHeader'>

        <img src={ImageLogo} alt="" />

        <nav>
          <ul>
            <li><a href="#">empresa</a></li>
            <li><a href="#">camisaria</a></li>
            <li><a href="#">alfaiataria</a></li>
            <li><a href="#">depoimentos</a></li>
            <li><a href="#">contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}