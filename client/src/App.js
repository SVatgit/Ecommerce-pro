import { Box } from "@mui/material";
import Header from "./components/header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import DataProvider from "./context/DataProvider.jsx";
import { BrowserRouter, Routes,Route} from "react-router-dom";
import DetailView from "./components/details/DetailView.jsx";
import { Cart } from "./components/cart/Cart.jsx";
import ListPage from "./components/header/ListPage.jsx";








function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: 54 }}>
          <Routes>
            <Route path='/' element ={<Home/>}/>
            <Route path='/product/:id' element ={<DetailView/>}/>
            <Route path='/cart' element ={<Cart/>}/>
            <Route path='/lastpage' element ={<ListPage/>}/>
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
