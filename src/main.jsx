import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GetStarted from './pages/RidersPage/GetStarted.jsx';
import Rider from './pages/RidersPage/Rider.jsx';
import Login from './pages/RidersPage/Login.jsx';
import Register from './pages/RidersPage/Register.jsx';
import OfflineDashboard from './pages/RidersPage/Dashbord/OfflineDashboard.jsx';
import OnlineDashboard from './pages/RidersPage/Dashbord/OnlineDashboard.jsx';
import Insights from './pages/RidersPage/Insights.jsx';
import Wallet from './pages/RidersPage/Wallet.jsx';
import OrderDetails from './pages/RidersPage/OrderDetails.jsx';
import Profile from './pages/RidersPage/Profile.jsx';
import Deduction from './pages/RidersPage/Deduction.jsx';
import OrderDelivery from './pages/RidersPage/OrderDelivery.jsx';
import Delivery from './pages/RidersPage/Delivery.jsx';
import Notification from './pages/RidersPage/Notification.jsx';
import MeetingSpot from './pages/RidersPage/MeetingSpot.jsx';
import PickUp from './pages/RidersPage/PickUp.jsx';
import DeliveryLocation from './pages/RidersPage/DeliveryLocation.jsx';
import DeliveryDone from './pages/RidersPage/DeliveryDone.jsx';
import PaymentPage from './pages/RidersPage/PaymentPage.jsx';

const router = createBrowserRouter([
  // Public routes with LandingPage as a layout component
  
    
      { path: "/", element: <App /> },


  // Authentication routes with Auth as a layout component
  {
    element: <Rider />,
    children: [
      { path: "/rider/home", element: <GetStarted /> },
      { path: "/rider/login", element: <Login/> },
      { path: "/rider/register", element: <Register/> },
      { path: "/rider/dashboard", element: <OfflineDashboard/> },
      { path: "/rider/onlinedashboard", element: <OnlineDashboard/>},
      { path: "/rider/insights", element: <Insights/>},
      { path: "/rider/wallet", element: <Wallet/>},
      { path: "/rider/orders", element: <OrderDetails/>},
      { path: "/rider/profile", element: <Profile/>},
      { path: "/rider/deduction", element: <Deduction/>},
      { path: "/rider/orderdelivery", element: <OrderDelivery/>},
      { path: "/rider/delivery", element: <Delivery/>},
      { path: "/rider/notification", element: <Notification/>},
      { path: "/rider/meeting", element: <MeetingSpot/>},
      { path: "/rider/pickup", element: <PickUp/>},
      { path: "/rider/deliverylocation", element: <DeliveryLocation/>},
      { path: "/rider/deliverydone", element: <DeliveryDone/>},
      { path: "/rider/payment", element: <PaymentPage/>},
      

      
    ],
  },
]);




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
