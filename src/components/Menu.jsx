import React, { useEffect } from 'react';
import './Menu.css';

export default function Menu() {
  useEffect(() => {
    const menuAtivo = document.querySelector('.menu');
    const menuNormal = document.querySelector('.setaDesce');

    const handleClick = () => {
      if (menuAtivo.classList.contains('active')) {
        menuAtivo.classList.remove('active');
      } else {
        menuAtivo.classList.add('active');
      }
    };

    if (menuNormal) {
      menuNormal.addEventListener('click', handleClick);
    }

    return () => {
      if (menuNormal) {
        menuNormal.removeEventListener('click', handleClick);
      }
    };
  }, []);

  return (
    <nav>
      <ul className='menu'>
        <li><img src='https://cdn-icons-png.flaticon.com/128/2298/2298538.png?ga=GA1.1.1521184189.1700956683&semt=ais' alt='logo' className='logo'></img><h1>PETSHOW</h1></li>
        <li className="item"><a href="#">Inicio</a></li>
        <li className="item"><a href="#">Amigos</a></li>
        <li className="item"><a href="#">Fotos</a></li>
        <li className="item"><a href="#">Configurações</a></li>
        <li className="item"><a href="#">Ajuda</a></li>
        <li className="item"><a href="#">Sair</a></li>
        <li className='setaDesce'>☰</li>
      </ul>

    </nav>
  );
}
