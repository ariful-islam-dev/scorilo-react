
import Home from '../Pages/Home';
import '../assets/css/bootstrap.min.css'
import '../assets/css/style.css'
import { Helmet } from 'react-helmet';
import Shop from '../Pages/Shop';
import AppRouter from './Router';

function App() {
  return (
    <div className="App">
      <Helmet>
       
        <link href="https://fonts.googleapis.com/css?family=Dosis:200,300,400,500,600,700" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Roboto:200,300,400,500,600,700" rel="stylesheet" />
        <script src="../assets/js/jquery-.js"></script>
        <script src="../assets/js/bootstrap.min.js"></script>
        <script src="../assets/js/anim.js"></script>
        <script type="text/javascript" src="../assets/js/custom.js"></script>
      </Helmet>
      <AppRouter/>
    </div>
  );
}

export default App;
