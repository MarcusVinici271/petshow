import './Visual.css'
import Noticia from './Noticia'


export default function Feed() {
  return (
    <div className="tudo">
      <h2>Feed de Noticias</h2>
      <Noticia
        autor="Gatuno"
        imagem="https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_1280.jpg"
        titulo="Cutuando algumas coisas por aí!!"
        texto= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis magna"
      />
        
      <Noticia
        autor="Tortuga"
        imagem="https://cdn.pixabay.com/photo/2017/04/04/14/24/turtle-2201433_640.jpg"
        titulo="TBT gente..."
        texto= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis magna"
      />
      <Noticia
        autor="Pernalonga"
        imagem="https://cdn.pixabay.com/photo/2016/12/13/00/13/rabbit-1903016_1280.jpg"
        titulo="Adoro cenouras!!"
        texto= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis magna"
      />
      <Noticia
        autor="Pescador"
        imagem="https://cdn.pixabay.com/photo/2017/05/08/13/15/spring-bird-2295434_640.jpg"
        titulo="Fiquei lindo nessa foto!!"
        texto= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis magna"
      />
      <Noticia
        autor="Fox"
        imagem="https://cdn.pixabay.com/photo/2016/11/23/15/26/white-1853508_640.jpg"
        titulo="Uma volta na neve, adorooo"
        texto= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis magna"
      />
      <Noticia
        autor="Foquinha"
        imagem="https://cdn.pixabay.com/photo/2020/03/12/19/56/seal-4926115_640.jpg"
        titulo="Curtindo um sol com meus amigos!!"
        texto= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis magna"
      />

    </div>
  );
}