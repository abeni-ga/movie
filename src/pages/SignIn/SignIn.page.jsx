import { useMutation } from '@apollo/client';
import {useState,useEffect} from 'react';
import './SignIn.styles.scss';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/input/Input.component';
import Button from '../../components/button/button.component';
import { LOG_IN } from '../../queries/logIn.mutation';

const defaultForm = {
  email:'',
  phone:'',
  password:''
}


const SignIn = ()=>{
  const navigate = useNavigate();
  const [formFields,setFormFields] = useState(defaultForm);
  const [logIn, { data, loading, error }] = useMutation(LOG_IN);

  const onChangeHandler =(event)=>{
    const {name,value} = event.target;
    
    setFormFields({
      ...formFields,[name]:value
    })
  }
  useEffect(() => {
        if (data) {
            console.log(`data: ${data}`);
            localStorage.setItem("User", JSON.stringify(data.logIn));
            localStorage.setItem("Token", data.logIn?.token);
        }
    }, [data,navigate]);
  const onSubmitHandler = async(e)=>{
    e.preventDefault();
  await logIn({ variables: { "logIn": {
    "email":formFields.email,
    "phone": formFields.phone,
    "password": formFields.password
  }} });
  setFormFields(defaultForm);
  navigate('/profile')
}
if(error){
  console.log(error)
}
if(loading){
  console.log("loading")
}
if(data){
  console.log(data)
}
  
  return(
    <div className="sign-up-container">
      <form onSubmit={onSubmitHandler}>
      
      <Input placeholder={"Email"} type={'email'} name='email' value={formFields.email} onChange={onChangeHandler}/>
      <Input placeholder={"Phone"} type={'text'} name='phone' value={formFields.phone} onChange={onChangeHandler}/>
      <Input placeholder={"Password"} type={'password'} name='password' value={formFields.password} onChange={onChangeHandler}/>
      <Button type='submit'>Sign In</Button>
      </form>
    </div>
  );
}

export default SignIn