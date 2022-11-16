import './CustomButton.css';

function CustomButton(props) {
  return (
    <div className="Custom-button-wrapper">
      <button className="Custom-button">{props.text}</button>
    </div>
  );
}

export default CustomButton;