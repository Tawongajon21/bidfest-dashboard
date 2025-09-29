import './App.css';
import {Routes,Route} from "react-router-dom"
import Sidebar from "./components/Sidebar"
import Navbar from './components/Navbar';
import Home from './components/Home';
import Auctions from './components/Auctions';
import Lots from './components/Lots';
import AddAuction from './components/AddAuction';
import AddLot from './components/AddLot';
import Login from './components/Login';
import AppLayout from './components/common/AppLayout';
import Register from "./components/Register"
import PageNotFound from './components/common/PageNotFound';
import Dashboard from './components/dashboard';
import Admins from './components/Admins';
import AddAdmin from './components/AddAdmin';
import CompanyUsers from './components/CompanyUsers';
import Auction from './components/Auction';
import Bidders from './components/Bidders';
import { useSelector } from 'react-redux';
import RouteTracker from "./components/common/RouteTracker"
function App() {
  const devSignin= useSelector((state)=>state.devSignin);
  const devInfo=devSignin.devInfo;
  const adminSignin= useSelector((state)=>state.adminSignin);
  const adminInfo=adminSignin.adminInfo;
  let data;
  if (devInfo) {
    data=devInfo
  }
  if (adminInfo) {
    data=adminInfo
  }

  return (

    <>

<RouteTracker/>
    <Routes>
    <Route path='/dev-register' element={ <Register/>}/> 
    <Route path='/login' element={ <Login/>}/> 
    <Route path='/home'  element={<AppLayout data={data} />} >
<Route path="/home/auctions" element={<Auctions data={data}/>}/>
<Route path="/home/auction/:id" element={<Auction data={data}/>}/>
<Route path="/home/users" element={<CompanyUsers data={data}/>}/>
<Route path="/home/admins" element={<Admins data={data}/>}/>
<Route path="/home/add-admin" element={<AddAdmin data={data}/>}/>
<Route path="/home/add-auction" element={<AddAuction data={data}/>}/>
<Route path="/home/lots" element={<Lots/>}/>
<Route path="/home/add-lot" element={<AddLot/>}/>
<Route path="/home/bidders/:id" element={<Bidders data={data}/>}/>

    <Route index  element={<Dashboard  data={data} />}/> 

   
    </Route>

   
    <Route path='*' element={<PageNotFound data={data} to="/" replace/>}/>
   </Routes> 

   </>
  
  );
}

export default App;
// <Route path='/template/:id'  element={<Template userData={userData}/>} />

{
  /**
   *     <>
  
    <div class="layout-container">



    </div>
    </>
   * 
   *   <Routes>
    <Route path='/developer-register' element={ <DeveloperRegister/>}/> 
    <Route path='/developer-signin' element={ <DeveloperSignin/>}/> 
    <Route path='/manager-signin' element={ <ManagerSignin/>}/> 
    <Route path='/admin-signin' element={ <AdminSignin/>}/> 
    <Route path='/cashier-signin' element={  <CashierSignin/>}/> 
    <Route path='/home'  element={<AppLayout data={data}/>} >
    <Route path='/home/products'  element={<Products userData={userData}/>} />
    <Route path='/home/users/register-manager'  element={<ManagerRegister userData={userData}/>} />
    <Route path='/home/users/managers'  element={<Managers userData={userData}/>} />
    <Route path='/home/users/admins'  element={<Admins userData={userData}/>} />
    <Route path='/home/users/cashiers'  element={<Cashiers userData={userData}/>} />
    <Route path='/home/users/add-cashier'  element={<CashierRegister userData={userData}/>} />
    <Route path='/home/users/update-cashier/:id'  element={<UpdateCashier userData={userData}/>} />
    <Route path='/home/users/admin/:id'  element={<Admin userData={userData}/>} />
    <Route path='/home/users/register-admin'  element={<AdminRegister userData={userData}/>} />
    <Route path='/home/users/manager/:id'  element={<Manager userData={userData}/>} />
    <Route path='/home/users/manager/update/:id'  element={<UpdateManager userData={userData}/>} />
    <Route path='/home/users/admin/update/:id'  element={<UpdateAdmin userData={userData}/>} />
    <Route path='/home/products/add-product'  element={<AddProduct userData={userData}/>} />
    <Route path='/home/product/:id'  element={<Product userData={userData}/>} />
    <Route path='/home/products/update-product/:id'  element={<UpdateProduct userData={userData}/>} />
    <Route path='/home/banks'  element={<Banks userData={userData}/>} />
    <Route path='/home/banks/add-bank'  element={<AddBank userData={userData}/>} />
    <Route path='/home/banks/update-bank/:id'  element={<UpdateBank userData={userData}/>} />
    <Route path='/home/quotations'  element={<Quotations userData={userData}/>} />
    <Route path='/home/invoices'  element={<Invoices userData={userData}/>} />
    <Route path='/home/pos'  element={<PurchaseOrders userData={userData}/>} />
    <Route path='/home/expenses'  element={<Expenses userData={userData}/>} />
    <Route path='/home/expense/:id'  element={<Expense userData={userData}/>} />
    <Route path='/home/quotations/create-quotation'  element={<CreateQuotation userData={userData}/>} />
    <Route path='/home/purchase-order/create-po'  element={<CreatePo userData={userData}/>} />
    <Route path='/home/expense/create-expense'  element={<CreateExpense userData={userData}/>} />
    <Route path='/home/purchase-order/get-po/:id'  element={<PoTemplate userData={userData}/>} />
    <Route path='/home/template/:id'  element={<Template userData={userData}/>} />
    <Route path='/home/invoice-template/:id'  element={<InvoiceTemplate userData={userData}/>} />
    <Route path='/home/cashier-page'  element={<CashierPage userData={userData}/>} />
 
    <Route index element={<Dashboard   userData={userData}/>}/> 
    </Route>

    <Route path='/template/:id'  element={<Template userData={userData}/>} />
    <Route path='*' element={<NotFoundPage to="/" replace/>}/>
   </Routes> */

    /*
  const devSignin= useSelector((state)=>state.devSignin);
  const managerSignin= useSelector((state)=>state.managerSignin);
  const adminSignin= useSelector((state)=>state.adminSignin);
  const cashierSignin= useSelector((state)=>state.cashierSignin);
  const devInfo=devSignin.devInfo;
  const managerInfo=managerSignin.managerInfo
  const adminInfo=adminSignin.adminInfo
  const cashierInfo=cashierSignin.cashierInfo
  let data;
  if (devInfo) {
    data=devInfo
  }
  else if (managerInfo) {
    data=managerInfo
  }else if(adminInfo){
data=adminInfo
  }else  {
    data= cashierInfo
  }
  let userData=data
  */
}
