import {CommonButton} from "../CommonButton"

import "./styles.scss"

export function Contact (){
  return(
    <section className='containerContact'>
      <h2>Contato</h2>  


      <div className='containerWrapperContact'>

          <div className="contacts">

              <span className='blue-1'>Telefones</span>
              <span className='gray'>+55 (11) 3088-0757</span>
              <span className='blue-1'>E-mail</span>
              <span className='gray'>renee@reneetrajar.com.br</span>
              <span className='blue-1'>Atendimento Personalizado</span>

              <CommonButton 
                textTransform={'none'}
                color='#014561'
                text='Clique aqui!'
              />
            
          </div>

          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, facilis est! Nostrum doloremque quae animi pariatur modi eum, unde atque facere? Nam omnis quidem quos! Voluptate enim reiciendis blanditiis repudiandae!
          </div>


      </div>

    </section>
  )
}