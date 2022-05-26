import './Input.styles.scss';

const Input = (props)=>{
  return(
    <div className="input-container">
    <input type={props.type} placeholder={props.placeholder}/>
  </div>
  )
}

export default Input;