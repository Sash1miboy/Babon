import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Add from "./pages/add/Add";
import Cart from "./pages/cart/Cart";
import Message from "./pages/message/Message";
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
import Login from "./pages/login/Login";
import Register from "./pages/register/Register"
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import Success from "./pages/success/Success";
import "./app.scss";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';

import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

function App() {

  const queryClient = new QueryClient();

  const Layout =()=>{
    return(
      <div className="app">
        <QueryClientProvider client={queryClient}>
          <Navbar/>
          <ScrollToTop/>
          <Outlet/>
          <Footer/>
        </QueryClientProvider>
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
          path:"/message/:id",
          element:<Message/>
        },
        {
          path:"/chats",
          element:<Chats/>
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
          path:"/payment/:id",
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
