import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Eror404 from '../../components/error404/Eror404';

function Error404(){
    return(
       <div>
           <Header/>
           <Navbar/>
           <Eror404/>
           <Footer/>
       </div>
    );
}

export default Error404;