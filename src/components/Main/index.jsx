import { About } from "../About"
import { Testimonials } from "../Testimonials"
import { Bid } from "../Bid"
import {Carroussel} from "../Carousel"
import {Contact} from "../Contact"

import "./styles.scss"


export function Main(){
  return(
    <main className='containerMain'>
        <About/>
        <Testimonials/>
        <Bid/>
        <Carroussel/>
        <Contact/>
        
    </main>
  )
}