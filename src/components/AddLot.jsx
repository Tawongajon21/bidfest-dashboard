import React from 'react'
import { useState } from 'react';
function AddLot() {
    let startYear=1900;
    let endYear=new Date().getFullYear();
    let years=Array.from({length:endYear-startYear+1},(_,i)=>startYear+i);
const [selectedYear, setselectedYear] = useState('');
const handleChange=(event)=>{
    setselectedYear(event.target.value)
}
  return (
    <>
    <div class="layout-container">
    <aside id="layout-menu" class="layout-menu menu-vertical menu bg-menu-theme">
 <div class="app-brand demo">
   <a href="index.html" class="app-brand-link">
   
     <span class="app-brand-text demo menu-text fw-bolder ms-2">BidFest</span>
   </a>

   <a href="javascript:void(0);" class="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
     <i class="bx bx-chevron-left bx-sm align-middle"></i>
   </a>
 </div>

 <div class="menu-inner-shadow"></div>

 <ul class="menu-inner py-1">

   <li class="menu-item active">
     <a href="index.html" class="menu-link">
       <i class="menu-icon tf-icons bx bx-home-circle"></i>
       <div data-i18n="Analytics">Dashboard</div>
     </a>
   </li>

 
   <li class="menu-item">
     <a href="javascript:void(0);" class="menu-link menu-toggle">
       <i class="menu-icon tf-icons bx bx-layout"></i>
       <div data-i18n="Layouts">Auctions</div>
     </a>

     <ul class="menu-sub">
       <li class="menu-item">
         <a href="layouts-without-menu.html" class="menu-link">
           <div data-i18n="Without menu">Without menu</div>
         </a>
       </li>
       <li class="menu-item">
         <a href="layouts-without-navbar.html" class="menu-link">
           <div data-i18n="Without navbar">Without navbar</div>
         </a>
       </li>
       <li class="menu-item">
         <a href="layouts-container.html" class="menu-link">
           <div data-i18n="Container">Container</div>
         </a>
       </li>
       <li class="menu-item">
         <a href="layouts-fluid.html" class="menu-link">
           <div data-i18n="Fluid">Fluid</div>
         </a>
       </li>
       <li class="menu-item">
         <a href="layouts-blank.html" class="menu-link">
           <div data-i18n="Blank">Blank</div>
         </a>
       </li>
     </ul>
   </li>


   <li class="menu-item">
     <a href="#" class="menu-link menu-toggle">
       <i class="menu-icon tf-icons bx bx-dock-top"></i>
       <div data-i18n="Account Settings">Users</div>
     </a>
     <ul class="menu-sub">
       <li class="menu-item">
         <a href="pages-account-settings-account.html" class="menu-link">
           <div data-i18n="Account">Account</div>
         </a>
       </li>
       <li class="menu-item">
         <a href="pages-account-settings-notifications.html" class="menu-link">
           <div data-i18n="Notifications">Notifications</div>
         </a>
       </li>
       <li class="menu-item">
         <a href="pages-account-settings-connections.html" class="menu-link">
           <div data-i18n="Connections">Connections</div>
         </a>
       </li>
     </ul>
   </li>
   <li class="menu-item">
     <a href="#" class="menu-link menu-toggle">
       <i class="menu-icon tf-icons bx bx-lock-open-alt"></i>
       <div data-i18n="Authentications">Registered Companies</div>
     </a>
     <ul class="menu-sub">
       <li class="menu-item">
         <a href="auth-login-basic.html" class="menu-link" target="_blank">
           <div data-i18n="Basic">Login</div>
         </a>
       </li>
       <li class="menu-item">
         <a href="auth-register-basic.html" class="menu-link" target="_blank">
           <div data-i18n="Basic">Register</div>
         </a>
       </li>
       <li class="menu-item">
         <a href="auth-forgot-password-basic.html" class="menu-link" target="_blank">
           <div data-i18n="Basic">Forgot Password</div>
         </a>
       </li>
     </ul>
   </li>

 





 </ul>
</aside>
<div className="layout-page">
 
<nav
         class="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
         id="layout-navbar"
       >
         <div class="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
           <a class="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
             <i class="bx bx-menu bx-sm"></i>
           </a>
         </div>

         <div class="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
      
           <div class="navbar-nav align-items-center">
             <div class="nav-item d-flex align-items-center">
               <i class="bx bx-search fs-4 lh-0"></i>
               <input
                 type="text"
                 class="form-control border-0 shadow-none"
                 placeholder="Search..."
                 aria-label="Search..."
               />
             </div>
           </div>
         
           <ul class="navbar-nav flex-row align-items-center ms-auto">
           
             <li class="nav-item lh-1 me-3">
               <a
                 class="github-button"
                 href="https://github.com/themeselection/sneat-html-admin-template-free"
                 data-icon="octicon-star"
                 data-size="large"
                 data-show-count="true"
                 aria-label="Star themeselection/sneat-html-admin-template-free on GitHub"
                 >Star</a
               >
             </li>

       
             <li class="nav-item navbar-dropdown dropdown-user dropdown">
               <a class="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
                 <div class="avatar avatar-online">
                   <img src="../assets/img/avatars/1.png" alt class="w-px-40 h-auto rounded-circle" />
                 </div>
               </a>
               <ul class="dropdown-menu dropdown-menu-end">
                 <li>
                   <a class="dropdown-item" href="#">
                     <div class="d-flex">
                       <div class="flex-shrink-0 me-3">
                         <div class="avatar avatar-online">
                           <img src="../assets/img/avatars/1.png" alt class="w-px-40 h-auto rounded-circle" />
                         </div>
                       </div>
                       <div class="flex-grow-1">
                         <span class="fw-semibold d-block">John Doe</span>
                         <small class="text-muted">Admin</small>
                       </div>
                     </div>
                   </a>
                 </li>
                 <li>
                   <div class="dropdown-divider"></div>
                 </li>
                 <li>
                   <a class="dropdown-item" href="#">
                     <i class="bx bx-user me-2"></i>
                     <span class="align-middle">My Profile</span>
                   </a>
                 </li>
                 <li>
                   <a class="dropdown-item" href="#">
                     <i class="bx bx-cog me-2"></i>
                     <span class="align-middle">Settings</span>
                   </a>
                 </li>
                 <li>
                   <a class="dropdown-item" href="#">
                     <span class="d-flex align-items-center align-middle">
                       <i class="flex-shrink-0 bx bx-credit-card me-2"></i>
                       <span class="flex-grow-1 align-middle">Billing</span>
                       <span class="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">4</span>
                     </span>
                   </a>
                 </li>
                 <li>
                   <div class="dropdown-divider"></div>
                 </li>
                 <li>
                   <a class="dropdown-item" href="auth-login-basic.html">
                     <i class="bx bx-power-off me-2"></i>
                     <span class="align-middle">Log Out</span>
                   </a>
                 </li>
               </ul>
             </li>
          
           </ul>
         </div>
       </nav>
       <div class="content-wrapper">
 
       <div class="container-xxl flex-grow-1 container-p-y">
       <h4 class="fw-bold py-3 mb-4"> Add Lot</h4>


<div class="row">

  <div class="col-xxl">
    <div class="card mb-4">
      <div class="card-header d-flex align-items-center justify-content-between">
        <h5 class="mb-0">Add Information</h5>
       
      </div>
      <div class="card-body">
        <form>
        <div class="mb-3">
                        <label for="exampleFormControlSelect1" class="form-label">Select Auction</label>
                        <select class="form-select" id="exampleFormControlSelect1" aria-label="Default select example">
                          <option selected>Select the Auction</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
         
          <div class=" mb-3">
            <label class="form-label" for="basic-default-company">Car Name</label>
            <div class="">
              <input
                type="text"
                class="form-control"
                id="basic-default-company"
                placeholder="e.g. Nissan Sunny "
              />
            </div>
          </div>
         
          <div class=" mb-3">
            <label class="form-label" for="basic-default-company">Registration Number</label>
            <div class="">
              <input
                type="text"
                class="form-control"
                id="basic-default-company"
                placeholder="e.g. ABC 3489"
              />
            </div>
          </div>
         
          <div class=" mb-3">
            <label class=" col-form-label" for="basic-default-email">Expected Selling Price</label>
            <div class="">
              <div class="input-group input-group-merge">
                <input
                  type="number"
                  id="basic-default-email"
                  class="form-control"
                  placeholder="2000"
                  aria-label="john.doe"
                  aria-describedby="basic-default-email2"
                />
              
              </div>
          
            </div>
          </div>
          <div class=" mb-3">
            <label class=" col-form-label" for="basic-default-email">Add Location</label>
            <div class="">
              <div class="input-group input-group-merge">
              <select class="form-select" id="exampleFormControlSelect1" aria-label="Default select example">
                          <option selected>Select the Auction</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
              
              </div>
          
            </div>
          </div>
   
     
        </form>
      </div>
    </div>
  </div>

  <div class="col-xxl">
  <div class="card mb-4">
      <div class="card-header d-flex align-items-center justify-content-between">
        <h5 class="mb-0">Add Information</h5>
       
      </div>
      <div class="card-body">
        <form>
        <div class="mb-3">
                        <label for="exampleFormControlSelect1" class="form-label">Fuel Type</label>
                        <select class="form-select" id="exampleFormControlSelect1" aria-label="Default select example">
                          <option selected>Select the Fuel Type</option>
                          <option value="1">Petrol</option>
                          <option value="2">Diesel</option>
                          <option value="3">E-10</option>
                        </select>
                      </div>
         
          <div class=" mb-3">
            <label class="form-label" for="basic-default-company">Year</label>
            <div class="">
            <select class="form-select" id="exampleFormControlSelect1" aria-label="Default select example">
                          <option selected>Select the Year</option>
                     {
                        years.map((year)=>(
                            <option key={year} value={year}>
{year}
                            </option>
                        ))
                     }
                        </select>
            </div>
          </div>
         
          <div class=" mb-3">
            <label class="form-label" for="basic-default-company">Description (Please be as elaborate)</label>
            <div class="">
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
          </div>
         
      
       
   
     
        </form>
      </div>
    </div>
    <div class="card mb-4">
      <div class="card-header d-flex align-items-center justify-content-between">
        <h5 class="mb-0">Upload External Images of the Car </h5>
    
      </div>
      <div class="card-body">
        <form>
          <div class="row mb-3">
           
            <div class="">
              <div class="input-group input-group-merge">
                <span id="basic-icon-default-fullname2" class="input-group-text"
                  ><i class="bx bx-user"></i
                ></span>
                <input
                          type="file"
                          class="form-control"
                          id="inputGroupFile04"
                          aria-describedby="inputGroupFileAddon04"
                          aria-label="Upload"
                        />
              </div>
            </div>
          </div>
     
         
  
        </form>
      </div>
    </div>
    <div class="card mb-4">
      <div class="card-header d-flex align-items-center justify-content-between">
        <h5 class="mb-0">Upload Internal Images of the Car </h5>
    
      </div>
      <div class="card-body">
        <form>
          <div class="row mb-3">
           
            <div class="">
              <div class="input-group input-group-merge">
                <span id="basic-icon-default-fullname2" class="input-group-text"
                  ><i class="bx bx-user"></i
                ></span>
                <input
                          type="file"
                          class="form-control"
                          id="inputGroupFile04"
                          aria-describedby="inputGroupFileAddon04"
                          aria-label="Upload"
                        />
              </div>
            </div>
          </div>
     
         
  
        </form>
      </div>
    </div>
  </div>
  <div style={{
    display:"grid",
    justifyContent:"center"
  }} class="row justify-content-center">
            <div class="col-sm-10">
              <button type="submit" class="btn btn-primary">Upload</button>
            </div>
          </div>
</div>      

         
           
         
         
            </div>
 <footer class="content-footer footer bg-footer-theme">
   <div class="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
     <div class="mb-2 mb-md-0">
       ©
       <script>
         {
 new Date().getFullYear()
         }
        
       </script>
       , made with ❤️ by
       <a href="https://themeselection.com" target="_blank" class="footer-link fw-bolder">ThemeSelection</a>
     </div>
     <div>
       <a href="https://themeselection.com/license/" class="footer-link me-4" target="_blank">License</a>
       <a href="https://themeselection.com/" target="_blank" class="footer-link me-4">More Themes</a>
 
       <a
         href="https://themeselection.com/demo/sneat-bootstrap-html-admin-template/documentation/"
         target="_blank"
         class="footer-link me-4"
         >Documentation</a
       >
 
       <a
         href="https://github.com/themeselection/sneat-html-admin-template-free/issues"
         target="_blank"
         class="footer-link me-4"
         >Support</a
       >
     </div>
   </div>
 </footer>
 
 
 <div class="content-backdrop fade"></div>
 </div>
 
</div>

 
     </div>
 </>
  )
}

export default AddLot