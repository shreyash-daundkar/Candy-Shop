import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import CandyList from './components/Main/Candy-List/CandyList';
import CartContextProvider from './contexts/CartContextProvider';
import AddCandyForm from './components/Main/Add-Candy/AddCandyForm';
import Main from './components/Main/Main';

function App() {
  return (
   <CartContextProvider>
   <Cart />
   <Header />
   <Main />
   </CartContextProvider>
  );
}

export default App;
