import "./button.css"

export const PrimaryButton = ({id, type, css, children, clickHandle}) => {
  return(
    <button 
      id={id} 
      type={type || 'button'} 
      className={ css || 'primaryBtn'}
      onClick={clickHandle}
    >
      {children}
    </button>
  )
}