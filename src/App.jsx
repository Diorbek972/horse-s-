import './app.css'
//botstreapni css
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import bacraund from './assets/foto/background.png'
//componentalar
import MainNavbar from './components/MainNavbar';
import Baner from './components/banner'
function App() {
  return (
<div className='backrasm '>
  <Navbar/>
<MainNavbar/>
<Baner/>

</div>
  )
}

export default App
