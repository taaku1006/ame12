import React from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import Home from "./components/pages/Home";
import Page1 from "./components/pages/Page1";
import theme from "./theme/theme";
import {Header} from "./components/organisms/layout/Header";


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/page1" element={<Page1/>}></Route>
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;

