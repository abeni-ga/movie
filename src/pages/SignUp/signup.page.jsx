import './signup.styles.scss';

import Input from '../../components/input/Input.component';
import Button from '../../components/button/button.component';
import { useState } from 'react';

const SignUp = ()=>{

  const defaultForm ={
    name:'',
    email:'',
    password:'',
    confirmPassword:''
  }

  const [formFields,setFormFields] = useState(defaultForm);
  const onSubmitHandler = ()=>{
  
  }

  const onChangeHandler = (event)=>{
    const {name,value} = event.target;
    setFormFields({...formFields,[name]:value})
  }
  return(
    <div className="sign-up-container">
      <form onSubmit={onSubmitHandler}>
      <Input placeholder="name" type='text' name='name' value={formFields.name} onChange={onChangeHandler} name='name'/>
      <Input placeholder="Email" type='email' name='email' value={formFields.email} onChange={onChangeHandler} name='email'/>
      <Input placeholder="Password" type='password' name='password' value={formFields.password} onChange={onChangeHandler} name='password'/>
      <Input placeholder="Confirm Password" type='password' name='confirmPassword' value={formFields.confirmPassword} onChange={onChangeHandler} name='confirmPassword'/>
      <Button type='submit'>Sign UP</Button>
      </form>
    </div>
  );
}

export default SignUp