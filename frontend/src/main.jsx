import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home.jsx';
import About from './about.jsx';
import Register from './Register.jsx';
import Login from './Login.jsx';
import Dashboard from './Dashboard.jsx'; // Import your Dashboard component
import Billing from './Billing';

import EditVehicle from './EditVehicle'; // Import the new component
import PaymentUser from './PaymentUser';  // Import PaymentUser component


import BalerDetails from './BalerDetails.jsx';
import MinivatorDetails from './MinivatorDetails.jsx';
import ArmDetails from './ArmDetails.jsx';
import ArmsDetails from './ArmsDetails.jsx';
import RidgerDetails from './RidgerDetails.jsx';

import Tractor1 from './Tractor1'; 
import Tractor3 from './Tractor3'; 
import Tractor4 from './Tractor4'; // Import your Tractor1 component

import Tractor2 from './Tractor2'; // Import your Tractor1 component
import Jcb from './Jcb'; // Import your Tractor1 component
import Lorry from './Lorry'; // Import your Tractor1 component
import MyOrders from './MyOrders'; // Import the MyOrders component



import Order from './Order.jsx';  // Import the Booking component

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/app" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/BalerDetails" element={<BalerDetails />} />
        <Route path="/MinivatorDetails" element={<MinivatorDetails />} />
        <Route path="/ArmDetails" element={<ArmDetails />} />
        <Route path="/ArmsDetails" element={<ArmsDetails />} />
        <Route path="/RidgerDetails" element={<RidgerDetails />} />
        <Route path="/Order" element={<Order />} />  {/* Add this line */}
        <Route path="/myorders" element={<MyOrders />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/billing" element={<Billing />} />

        <Route path="/edit-vehicle" element={<EditVehicle />} />
        <Route path="/paymentuser" element={<PaymentUser />} />  {/* Add the new route */}

        <Route path="/Tractor1" element={<Tractor1 />} />
        <Route path="/Tractor2" element={<Tractor2 />} />
        <Route path="/Tractor3" element={<Tractor3 />} />
        <Route path="/Tractor4" element={<Tractor4 />} />
        <Route path="/Jcb" element={<Jcb />} />
        <Route path="/Lorry" element={<Lorry />} />



        

      </Routes>
    </BrowserRouter> 
  </React.StrictMode>
);
