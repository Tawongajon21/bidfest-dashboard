import {applyMiddleware, combineReducers, compose} from 'redux';
import { legacy_createStore as createStore } from 'redux';
import {thunk} from 'redux-thunk';

import { shopOwnerRegisterReducer,shopOwnerLoginReducer } from './reducers/shopownerReducer';
import Cookie from 'js-cookie';
import { getProductReducer,getProductsReducer,updateProductReducer,deleteProductReducer,createProductsReducer } from './reducers/productReducer';
import { getShopsReducer,getShopReducer,updateShopReducer,deleteShopReducer,createShopReducer } from './reducers/shopReducer';
import { getBranchReducer,getBranchesReducer,updateBranchReducer,deleteBranchReducer,createBranchReducer } from './reducers/branchReducer';
import { getStoreKeeperReducer,getStoreKeepersReducer,updateStoreKeeperReducer,deleteStoreKeeperReducer,storeKeeperLoginReducer,storeKeeperRegisterReducer } from './reducers/storeKeeperReducer';
import {cartReducer} from "./reducers/cartReducer";
import { weeklySalesReducer,dailySalesReducer,monthlySalesReducer,cumulativeSalesReducer,yearlySalesReducer } from './reducers/aggregationsReducer';
import { createSaleReducer,getSalesReducer,getStorekeeperSalesReducer } from './reducers/salesReducer';
import { developerLoginReducer,developerRegisterReducer } from './reducers/developerReducer';
import {deleteManagerPasswordReducer,updateManagerPasswordReducer,managerLoginReducer,managerRegisterReducer ,getManagerReducer,getManagersReducer,updateManagerReducer} from './reducers/managerReducer';
import {updateAdminReducer,adminLoginReducer,adminRegisterReducer ,getAdminReducer,getAdminsReducer,deleteAdminReducer} from './reducers/adminReducer';
import {cashierLoginReducer,cashierRegisterReducer,getCashierReducer,getCashiersReducer,updateCashierReducer,deleteCashierReducer } from './reducers/cashierReducer';

import {getBankReducer,getBanksReducer,createBankReducer,updateBankReducer,deleteBankReducer } from './reducers/bankReducer';
import {getQuotationReducer,getQuotationsReducer,createQuotationReducer,updateQuotationReducer,deleteQuotationReducer } from './reducers/quotationReducer';
import {getInvoiceReducer,getInvoicesReducer,updateInvoiceReducer,deleteInvoiceReducer,createInvoiceReducer } from './reducers/invoice';
import {getPoReducer,getPosReducer,updatePoReducer,createPoReducer,deletePoReducer } from './reducers/poReducer';
import {getExpensesReducer,getExpenseReducer,updateExpenseReducer,deleteExpenseReducer,createExpenseReducer } from './reducers/expenseReducer';
import { getUsersReducer,getCompanyUsersReducer } from './reducers/adminReducer';
import { addAuctionReducer ,getAuctionsReducer,getAuctionReducer,updateAuctionReducer,deleteAuctionReducer} from './reducers/auctionReducer';
import { toastReducer } from './reducers/toastReducer';
import { loadingReducer } from './reducers/loadingReducer';
import { addLotReducer,getLotsReducer,deleteLotReducer,updateLotReducer } from './reducers/lotReducer';
import { getBidsReducer } from './reducers/bidReducer';
import {routeReducer} from "./reducers/routeReducer"
const storeKeeperInfo = localStorage.getItem('storeKeeperInfo') ? JSON.parse(localStorage.getItem('storeKeeperInfo')): null
const cartItems = Cookie.get('cartItems') ? JSON.parse(Cookie.get("cartItems")):[];
let shopOwnerInfo= localStorage.getItem('shopOwnerInfo') ? JSON.parse(localStorage.getItem('shopOwnerInfo')): null
let devInfo= localStorage.getItem('devInfo') ? JSON.parse(localStorage.getItem('devInfo')): null;
let managerInfo= localStorage.getItem('managerInfo') ? JSON.parse(localStorage.getItem('managerInfo')): null;
let adminInfo= localStorage.getItem('adminInfo') ? JSON.parse(localStorage.getItem('adminInfo')): null;
let cashierInfo= localStorage.getItem('cashierInfo') ? JSON.parse(localStorage.getItem('cashierInfo')): null;

const initialState={

    devSignin:{
      
        devInfo
    },
    managerSignin:{
      
        managerInfo
    },
    adminSignin:{
      
        adminInfo
    },
 


};



 const reducer= combineReducers({
    devSignin:developerLoginReducer,
    devSignup:developerRegisterReducer,
    managerSignin:managerLoginReducer,
    managerSignup:managerRegisterReducer,
    adminSignin:adminLoginReducer,
    adminSignup:adminRegisterReducer,
    getUsers:getUsersReducer,
    getAdmins:getAdminsReducer,
    getAdmin:getAdminReducer,
    deleteAdmin:deleteAdminReducer,
    updateAdmin:updateAdminReducer,
    addAuction:addAuctionReducer,
    getAuctions:getAuctionsReducer,
    getAuction:getAuctionReducer,
    updateAuction:updateAuctionReducer,
    deleteAuction:deleteAuctionReducer,
    toast:toastReducer,
    addLot:addLotReducer,
    loading:loadingReducer,
    getLots:getLotsReducer,
    deleteLot:deleteLotReducer,
    updateLot:updateLotReducer,
    getCompanyUsers:getCompanyUsersReducer,
    getBids:getBidsReducer,
    route:routeReducer



   
});

const composeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose
 const store= createStore(reducer,initialState,compose(applyMiddleware(thunk)));


 export default store