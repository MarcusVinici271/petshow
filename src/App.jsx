import './App.css'
import './components/Visual.css'
import Menu from './components/Menu'
import Sugestoes from './components/Sugestoes'
import Amigo from './components/Amigos'
import Feed from './components/Feed'

export default function App() {
  return (
    <main>
      <Menu />
      <div className='caixa'>
        <aside>
          <div className='item1'>
            <Amigo />
          </div>
          <div className='item3'>
            <Sugestoes />
          </div>
        </aside>
        <div className='item2'>
          <Feed />
        </div>

      </div>
    </main>

  )
}
