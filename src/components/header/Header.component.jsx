import './Header.styles.scss';
import User from '../User/User.component';
import Input from '../input/Input.component';
const Header = () => {
  return(
    <div className="header">
    <ul>
        <li>
            <div>MEDIA APP</div>
        </li>
        {/* then make input component and it should have its own style */}
        <li>
            <Input type={'search'}  placeholder={'search'}/>
        </li>
        {/* accept the name as a prop after you create the header */}
        <li>
            <User name='jack mayor'/>
        </li>
    </ul>
</div>
  );
}

export default Header