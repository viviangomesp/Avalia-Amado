import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Home from './components/pages/Home'
import MeuPerfil from './components/pages/MeuPerfil'
import AlterarDados from './components/pages/AlterarDados'
import Cadastro from './components/pages/Cadastro'
import Login from './components/pages/Login'
import AgendaEventos from './components/pages/AgendaEventos'
import CadastroEvento from './components/pages/CadastroEvento' 
import CadastrarServico from './components/pages/CadastrarServico'
import CriarAvaliacao from './components/pages/CriarAvaliacao'   
import MinhasAvaliacoes from './components/pages/MinhasAvaliacoes'
import SobreNos from './components/pages/SobreNos'
import Evento from './components/pages/Evento'
import Servico from './components/pages/Servico'
import EditarServico from './components/pages/EditarServico'

import Container from './components/layout/Container'
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'


function App() {
  return (
    <div >
      <Router> 
        <NavBar />
        <Container customClass="min-height">
          <Routes>
            <Route path = "/" element = {<Home />} />
            <Route path = "/MeuPerfil" element = {<MeuPerfil />} />
            <Route path = "/AlterarDados" element = {<AlterarDados />} />
            <Route path = "/Cadastro" element = {<Cadastro />} />
            <Route path = "/Login" element = {<Login />} />
            <Route path = "/AgendaEventos" element = {<AgendaEventos />} />
            <Route path = "/CadastroEvento" element = {<CadastroEvento />} />
            <Route path = "/CadastrarServico" element = {<CadastrarServico />} />
            <Route path="/CriarAvaliacao/evento/:eventoId" element={<CriarAvaliacao />} />
            <Route path="/CriarAvaliacao/servico/:servicoId" element={<CriarAvaliacao />} />
            <Route path = "/MinhasAvaliacoes" element = {<MinhasAvaliacoes />} />
            <Route path = "/SobreNos" element = {<SobreNos />} />
            <Route path="/evento/:id" element={<Evento />} />
            <Route path="/servico/:id" element={<Servico />} />
            <Route path="/EditarServico/:id" element={<EditarServico/>} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </div>
  )
}
export default App;

