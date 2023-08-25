import "./Input.css";
export const Input = ({id, type, css, placeholder, value, changeValue}) => {
  const handleChange = (evn) => changeValue(evn);
  return(
    <input 
      id={id}
      name={id}
      type={type}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      className={css || 'inputText'}
      required
    />
  )
}