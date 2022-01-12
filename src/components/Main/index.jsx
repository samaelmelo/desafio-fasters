import { About } from "../About"
import { Testimonials } from "../Testimonials"

import "./styles.scss"


export function Main(){
  return(
    <main className='containerMain'>
        <About/>
        <Testimonials/>
        
    </main>
  )
}