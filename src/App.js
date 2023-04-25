import './App.css';
import React from 'react';
import { createHashRouter,RouterProvider,Outlet} from 'react-router-dom';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Product from './pages/Product/Product';
import NavBar from '../src/components/Navbar/Navbar'
import Footer from '../src/components/Footer/Footer'
import ScrollToTop from './scrollToTop/scrollToTop';

function App() {

  const Layout = () => {
    return (
      <React.Fragment>
        <ScrollToTop/>
        <div  className='app'>
          <NavBar/>
          <Outlet/>
          <Footer/>
        </div>
      </React.Fragment>
    )
  }

  const router = createHashRouter([
    {
      path:"/",
      element:<Layout/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/products/",
          element: <Products/>
        },
        {
          path: "/product/:id",
          element: <Product/>
        },
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

// import classNames from "classnames/bind";
// import styles from './Chat.module.scss'
// const cx = classNames.bind(styles)

export default App;
