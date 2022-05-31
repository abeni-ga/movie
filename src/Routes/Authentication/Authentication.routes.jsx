import './Authentication.styles.scss';
import SignIn from '../../pages/SignIn/SignIn.page';
import SignUp from '../../pages/SignUp/signup.page';


const Authentication = ()=>{
  return(
  <div className="auth-container">
    {/* <SignUp/>
    <SignIn/> */}
    <div className="left"><SignUp/></div>
    <div className="right"><SignIn/></div>
  </div>
  )
}

export default Authentication;