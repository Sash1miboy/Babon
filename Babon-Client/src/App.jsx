import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Add from "./pages/add/Add";
import Cart from "./pages/cart/Cart";
import Category from "./pages/category/Category";
import Chat from "./pages/chat/Chat";
import Chats from "./pages/chats/Chats";
import Help from "./pages/help/Help";
import History from "./pages/history/History";
import Order from "./pages/order/Order";
import Payment from "./pages/payment/Payment";
import Profile from "./pages/profile/Profile";
import ServiceDetails from "./pages/serviceDetails/ServiceDetails";
import ServiceProvider from "./pages/serviceProvider/ServiceProvider";
import ServiceList from "./pages/serviceList/ServiceList";
import Services from "./pages/services/Services";
import OrderList from "./pages/orderList/OrderList";
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import "./app.scss";

import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Success from "./pages/success/Success";

function App() {

  const Layout =()=>{
    return(
      <div className="app">
        <Navbar/>
        <ScrollToTop/>
        <Outlet/>
        <Footer/>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/add",
          element:<Add/>
        },
        {
          path:"/cart",
          element:<Cart/>
        },
        {
          path:"/chat/:id",
          element:<Chat/>
        },
        {
          path:"/chats",
          element:<Chats/>
        },
        {
          path:"/category",
          element:<Category/>
        },
        {
          path:"/help",
          element:<Help/>
        },
        {
          path:"/history",
          element:<History/>
        },
        {
          path:"/order",
          element:<Order/>
        },
        {
          path:"/payment",
          element:<Payment/>
        },
        {
          path:"/profile",
          element:<Profile/>
        },
        {
          path:"/orderList",
          element:<OrderList/>
        },
        {
          path:"/serviceDetails/:id",
          element:<ServiceDetails/>
        },
        {
          path:"/serviceList",
          element:<ServiceList/>
        },
        {
          path:"/serviceProvider",
          element:<ServiceProvider/>
        },
        {
          path:"/services",
          element:<Services/>
        },
        {
          path:"/success",
          element:<Success/>
        }
      ]
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/register",
      element:<Register/>
    }
  ]);
  

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
