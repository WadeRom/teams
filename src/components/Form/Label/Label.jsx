import "./label.css";

export const Label = ({forId, css, children}) => {
  return(
    <label className={css || 'labelText'} htmlFor={forId}>{children}</label>
  )
}