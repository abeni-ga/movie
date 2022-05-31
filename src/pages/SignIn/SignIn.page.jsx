import './SignIn.styles.scss';

import Input from '../../components/input/Input.component';
import Button from '../../components/button/button.component';

const SignIn = ()=>{
  return(
    <div className="sign-up-container">
      <Input placeholder={"Email"} type={'email'} />
      <Input placeholder={"Password"} type={'password'} />
      <Button>Sign In</Button>
    </div>
  );
}

export default SignIn