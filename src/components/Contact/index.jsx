import {CommonButton} from "../CommonButton"

import "./styles.scss"

export function Contact (){
  return(
    <section className='containerContact'>

      <div className="wrapperAll">

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

          

          <div className="formContact">
            <form action="">
            <label htmlFor="name">Nome</label>
            <input type="text" placeholder="Name" id='name'/>
            <label htmlFor="Email">E-mail</label>
            <input type="email" placeholder="email"/>
            <label htmlFor="mensage"></label>
            <textarea name="mensage" id="mensage" placeholder="mensagem"></textarea>
            <button>Enviar Mensagem</button>
          </form>
          </div>
      </div>
      </div>

    </section>
  )
}