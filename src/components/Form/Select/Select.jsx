import "./select.css";

export const SelectInput = ({ name, id, options, css, changeValue, initVal}) => {
  const updateState = (evn) => changeValue(evn);
  if (!options) return null;
  return (
    options &&     
    <select value={initVal} name={name} id={id} className={css || 'inputSelect'} onChange={updateState}>
      <option value='' defaultValue="" hidden>Select</option>
      {options.map((option, index) =>
        <option key={index} value={option}>{option}</option>
      )}
    </select>
  )
}
