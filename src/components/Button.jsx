import './Button.css'

const Button = (props) => {
  const { label, action } = props;

  return (
    <button className='botao' onClick={action} >
      {label}
    </button>
  );
};

export default Button;