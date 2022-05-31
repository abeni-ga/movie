import './signup.styles.scss';

import Input from '../../components/input/Input.component';
import Button from '../../components/button/button.component';

const SignUp = ()=>{
  return(
    <div className="sign-up-container">
      <Input placeholder={"Email"} type={'email'} />
      <Input placeholder={"Password"} type={'password'} />
      <Input placeholder={"Confirm Password"} type={'password'} />
      <Button>Sign UP</Button>
    </div>
  );
}

export default SignUp