import logo from './logo.svg';
import './App.css';
import ExpenseComponent from './components/ExpenseComponent';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import API from './Apicall/PostApi'
import Product from './UseReducerProblem/Product';

function App() {
  return (<>
  <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  <ExpenseComponent/>
   <ToastContainer/>
   {/* <API/> */}
   {/* <Product/> */}
  </>
  );
}

export default App;
