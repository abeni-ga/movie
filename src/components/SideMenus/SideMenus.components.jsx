import './SideMenus.styles.scss';
import SideButton from '../SideButton/SideButtton.component';

const SideMenus = (props)=>{
  return(
  <div className="sidemenu-container">
    <ul>
      {props.sidebarContents.map((content)=><SideButton key={content.id} label={content.label}/>)}
    </ul>
  </div>
  )
}

export default SideMenus