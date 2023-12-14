import './Visual.css'
import Button from './Button';


export default function Amigo() {
  const defineFuncao = () => {
    alert("Estou ocupado!");
  };
  return (
    <div className='tudo'>
      <h2>Amigos</h2>
      <img src="https://cdn.pixabay.com/photo/2017/01/14/12/59/iceland-1979445_1280.jpg" alt="foto" className='amigo'></img>
      <p className='nomes'>Fox</p>
      <p>15 amigos em comum</p>
      <Button
        label="Iniciar Chat"
        action={defineFuncao}
      />
      <img src="https://cdn.pixabay.com/photo/2017/05/31/18/38/sea-2361247_1280.jpg" alt="foto" className='amigo'></img>

      <p className='nomes'>Tortuga</p>
      <p>22 amigos em comum</p>
      <Button
        label="Iniciar Chat"
        action={defineFuncao}
      />
      <img src="https://cdn.pixabay.com/photo/2016/12/13/00/13/rabbit-1903016_1280.jpg" alt="foto" className='amigo'></img>
      <p className='nomes'>Pernalonga</p>
      <p>3 amigos em comum</p>
      <Button
        label="Iniciar Chat"
        action={defineFuncao}
      />
      <img src="https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453_1280.jpg" alt="foto" className='amigo'></img>
      <p className='nomes'>Pescador</p>
      <p>55 amigos em comum</p>
      <Button
        label="Iniciar Chat"
        action={defineFuncao}
      />
      <img src="https://cdn.pixabay.com/photo/2017/01/01/22/04/crawl-1945633_640.jpg" alt="foto" className='amigo'></img>
      <p className='nomes'>Foquinha</p>
      <p>30 amigos em comum</p>
      <Button
        label="Iniciar Chat"
        action={defineFuncao}
      />
    </div>
  )
}