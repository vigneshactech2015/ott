import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Suspense } from 'react';
import loaderImage from "../loader.gif"

const LoginComponent = React.lazy(()=>import('../components/login/Login'))
const AdminDashboard = React.lazy(()=>import('../components/admin/AdminDashboard'))
const CustomerDashboard = React.lazy(()=>import('../components/customer/CustomerDashboard'));
const ErrorComponent = React.lazy(()=>import('../components/Error/ErrorComponent'))
const Details = React.lazy(()=>import('../components/customer/Details'))
function Router() {
  return (
    <div>
    <BrowserRouter>
    <Suspense fallback={<img style={{marginLeft:"15%",marginTop:"5%"}} src={loaderImage} alt="Loading...."/>}>
    <Routes>
    <Route exact path="/" element={<LoginComponent/>}/>
    <Route exact path="/admin" element={<AdminDashboard/>}/>
    <Route exact path="/customer" element={<CustomerDashboard/>}/>
    <Route exact path="/customer/details" element={<Details/>}/>
    <Route exact path="*" element={<ErrorComponent/>}/>
    </Routes>
    </Suspense>
    </BrowserRouter>
    </div>
  )
}

export default Router
