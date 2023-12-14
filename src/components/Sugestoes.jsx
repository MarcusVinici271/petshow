import './Visual.css';
import Button from './Button';

export default function Sugestoes() {
  const aceito = () => {
    alert("Aceito!");
  };

  const naoAceito = () => {
    alert("Talvez na próxima!");
  };

  return (
    <div className='tudo'>
      <h2>Sugestões de Amizade</h2>
      <img src="https://cdn.pixabay.com/photo/2017/01/16/19/54/ireland-1985088_1280.jpg" alt="foto" className='amigo'></img>
      <p className='nomes'>Larica</p>
      <p>Amigo de Pernalonga</p>
      <Button
        label="Aceitar"
        action={aceito}
      />
      <Button
        label="Negar"
        action={naoAceito}
      />
      <img src="https://cdn.pixabay.com/photo/2012/03/04/00/09/lions-21787_1280.jpg" alt="foto" className='amigo'></img>
      <p className='nomes'>Lila</p>
      <p>Amigo de Pernalonga</p>
      <Button
        label="Aceitar"
        action={aceito}
      />
      <Button
        label="Negar"
        action={naoAceito}
      />
      <img src="https://cdn.pixabay.com/photo/2021/07/06/21/55/meerkat-6392737_640.jpg" alt="foto" className='amigo'></img>
      <p className='nomes'>Jorginho</p>
      <p>Amigo de Tortuga</p>
      <Button
        label="Aceitar"
        action={aceito}
      />
      <Button
        label="Negar"
        action={naoAceito}
      />

    </div>
  )
}