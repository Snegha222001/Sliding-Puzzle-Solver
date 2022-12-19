
import { Routes,Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";  
import Homepage from './Components/Home';
import Login from './Components/Login';
import Portal from './Components/Portal';
import Mainpage from './Components/Mainpage';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/portal" element={<Portal/>}/>
        <Route path="/Mainpage" element={<Mainpage/>}/>
    </Routes>
  );
}


export default App;
