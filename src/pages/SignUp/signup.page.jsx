import { useMutation } from '@apollo/client';
import './signup.styles.scss';

import Input from '../../components/input/Input.component';
import Button from '../../components/button/button.component';
import { useState } from 'react';
import { SIGN_UP } from '../../queries/signUp.mutation';

const SignUp = ()=>{
    const [signUp, { data, loading, error }] = useMutation(SIGN_UP);


  const defaultForm ={
    name:'',
    email:'',
    phone:'',
    password:''
  }

  const [formFields,setFormFields] = useState(defaultForm);
  const onSubmitHandler = (e)=>{
  e.preventDefault();
  signUp({ variables: { "signUp":{
  "name":formFields.name,
  "email":formFields.email,
  "phone":formFields.phone,
  "password":formFields.password,
  "bio":"ljlksdjksdlj",
  "description":"empty"
	} } });
  setFormFields(defaultForm);
  console.log(data);
  }

  const onChangeHandler = (event)=>{
    const {name,value} = event.target;
    setFormFields({...formFields,[name]:value})
  }
  return(
    <div className="sign-up-container">
      <form onSubmit={onSubmitHandler}>
      <Input placeholder="name" type='text' name='name' value={formFields.name} onChange={onChangeHandler}/>
      <Input placeholder="Email" type='email' name='email' value={formFields.email} onChange={onChangeHandler}/>
      <Input placeholder="Phone" type='text' name='phone' value={formFields.phone} onChange={onChangeHandler}/>
      <Input placeholder="Password" type='password' name='password' value={formFields.password} onChange={onChangeHandler}/>
      <Button type='submit'>Sign UP</Button>
      </form>
    </div>
  );
}

export default SignUp