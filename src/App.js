import './App.css';
import Container from './components/Container/Container';
import Master from './components/Master/Master';
import RespectComp from './components/RespectComp/RespectComp';
import Run from './components/Run/Run';
// import Swiper from './components/Swiper/Swiper';
import ToPul from './components/ToPull/ToPul';
import Banner from './components/banner/Banner';
import CenterText from './components/centerText/CenterText';
// import Footer from './components/footer/Footer';
// import Navbar from './components/navbar/Navbar';
import Product from './components/product/Product';
import Textarea from './components/textarea/Textarea';
import Texts from './components/TextsDiv/Texts';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Product />
      <Banner />
      {/* <Swiper /> */}
      <Textarea />
      <ToPul />
      <RespectComp />
      <Master />
      <Container />
      <Run />
      <Texts />
      <CenterText />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
