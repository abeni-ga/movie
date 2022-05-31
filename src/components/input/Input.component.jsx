import './Input.styles.scss';

const Input = ({label,...otherProps})=>{
  return(

    <div className="input-container">
      {label && <label>{label}</label>}
    <input type={otherProps.type} placeholder={otherProps.placeholder}/>
  </div>
  )
}

export default Input;