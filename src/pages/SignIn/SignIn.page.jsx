import {useState} from 'react';
import './SignIn.styles.scss';

import Input from '../../components/input/Input.component';
import Button from '../../components/button/button.component';

const defaultForm = {
  email:'',
  password:''
}


const SignIn = ()=>{
  const [formFields,setFormFields] = useState(defaultForm);
  const onChangeHandler =(event)=>{
    const {name,value} = event.target;
    
    setFormFields({
      ...formFields,[name]:value
    })
  }
  const onSubmitHandler = ()=>{
    
  }
  
  return(
    <div className="sign-up-container">
      <form onSubmit={onSubmitHandler}>
      <Input placeholder={"Email"} type={'email'} name='email' value={formFields.email} onChange={onChangeHandler}/>
      <Input placeholder={"Password"} type={'password'} name='password' value={formFields.password} onChange={onChangeHandler}/>
      <Button type='submit'>Sign In</Button>
      </form>
    </div>
  );
}

export default SignIn