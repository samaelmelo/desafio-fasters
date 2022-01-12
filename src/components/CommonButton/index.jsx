import "../../styles/global.scss"

export function CommonButton({text, textTransform, color}){
  return(
    <a 
      href="/" 
      className="commonButton"
      style={{textTransform: textTransform, color: color}} 
      >
        {text}
    </a>
  )
}