import { About } from "../About"
import { Testimonials } from "../Testimonials"
import { Bid } from "../Bid"

import "./styles.scss"


export function Main(){
  return(
    <main className='containerMain'>
        <About/>
        <Testimonials/>
        <Bid/>

        
    </main>
  )
}