import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Faculdade from './pages/Faculdade'
import Noticias from './pages/Noticias'
import DpoLgpd from './pages/DpoLgpd'
import Navbar from './components/Navbar'
import VisualizaNoticia from './pages/VisualizaNoticia'

function App() {

  return (
    <>
      <BrowserRouter>
        <h1> UNIESP </h1>
        <Navbar/>
        <Routes>
          <Route path ='/noticias' element = {<Noticias/>}/>
          <Route path ='/dpo-lgpd' element = {<DpoLgpd/>}/>
          <Route path ='/a-faculdade' element = {<Faculdade/>}/>
          <Route path ='/visualiza-noticia/:id' element = {<VisualizaNoticia/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
