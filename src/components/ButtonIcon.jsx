import './ButtonIcon.css';

function ButtonIcon({ label, acao }) {
  return (
    <button className='botaoIcon' onClick={acao}>
      <img src={label} alt='ícone' className='icone' />
    </button>
  );
}

export default ButtonIcon;
