import React, { useState } from 'react';
import ButtonIcon from './ButtonIcon';
import './Noticia.css'


export default function Noticia({ autor, imagem, titulo, texto }) {
  const [curtidas, setCurtidas] = React.useState(0);
  const [compartilhamentos, setCompartilhamentos] = useState(0);
  const [postagem, setPostagem] = useState('');
  const [posts, setPosts] = useState([]);

  const curtir = () => {
    setCurtidas(curtidas + 1);
  };

  const compartilhar = () => {
    setCompartilhamentos(compartilhamentos + 1);
  };

  const handlePostagem = () => {
    if (postagem.trim() !== '') {
      setPosts([...posts, postagem]);
      setPostagem('');
    }
  };

  return (
    <div className='noticia'>
      <p className='autor'>{autor}</p>
      <img src={imagem} alt="foto" className='fotofeed' />
      <div className='detalhes'>
        <span>25/11/2023</span>
        <ButtonIcon label='https://cdn-icons-png.flaticon.com/128/833/833472.png?ga=GA1.1.1521184189.1700956683&semt=ais' acao={curtir} />
        <span>{curtidas}</span>
        <ButtonIcon label='https://cdn-icons-png.flaticon.com/128/929/929539.png?ga=GA1.1.1521184189.1700956683&semt=ais' acao={compartilhar} />
        <span>{compartilhamentos}</span>
      </div>
      <h4>{titulo}</h4>
      <p>{texto}</p>
      <div className='campo-postagem'>
        <input
          type="text"
          value={postagem}
          onChange={(e) => setPostagem(e.target.value)}
          placeholder="Escreva seu post..."
          className="input-postagem"
        />
        <button onClick={handlePostagem} className="botaoPostar">PET</button>
      </div>
      <div className='posts'>
        <div className='post'>
          <textarea
            value={posts.join('\n')}
            readOnly
            className="area-posts"
          />
        </div>

      </div>
    </div>
  );
}






