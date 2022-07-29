import './Home.styles.scss';

import {Routes,Route} from 'react-router-dom';

import Home from '../../Routes/Home/home.route';
import Authentication from '../../Routes/Authentication/Authentication.routes';

const HomePage = ()=>{
  return(
    <Routes>
      <Route path='/' element={ <Home/>}/>
      <Route path='/auth' element={<Authentication/>}/> 
    </Routes>
  )
}

export default HomePage;