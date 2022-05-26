import './SideButton.styles.scss'

const SideButton = (props)=>{
  return(
    <div className="button-container">
      <button>
        {props.label}
      </button>
    </div>
  );
}

export default SideButton;