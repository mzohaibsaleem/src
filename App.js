import './App.scss';

import Head from '../src/Components/Header/Head';
import Footer from './Components/Footer/Copy';
import Login from './pages/Auth/login/Login';
import Reg from './pages/Auth/reg/Reg';
import Sidbar from './pages/Frontend/Sidebar';
import Lroutes from './pages/Auth/Lroutes';


function App() {
  return(
    <>

  {/* <Head/> */}
   <main>
   <Sidbar/>
    {/* <Login/> */}
    {/* <Reg/> */}
    {/* <Lroutes/> */}
   </main>
  {/* <Footer/> */}
  </>
    );
}

export default App;
