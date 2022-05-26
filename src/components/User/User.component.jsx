import './User.styles.scss'

const User= (props)=>{
  return(
    <div className="user-identifier">
      <p>{props.name}</p>
    </div>
  )
}

export default User;