import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import { compose } from 'redux';

import store from './redux/redux-store'
import Pereloader from './components/Common/preloader';
import {initializeApp} from './redux/reducers/app-reducer'
import { BrowserRouter , Route } from 'react-router-dom';
import Main from './components/Main/main';
import AboutUs from './components/AboutUs/aboutUs';
import StoreContainer from './components/Store/storeContainer';
import BasketContainer from './components/Basket/BasketContainer';
import itemDescriptionContainer from './components/Store/descroption/itemDescriptionContainer';
import ScrollToTop from './components/Common/ScrollToTop';
import AdminPanel from './AdminPanel/Admin';
import { useAuch } from './AdminPanel/hooks/auth.hook';
import { AuchContext } from './content/content.hook';
import Tables from './AdminPanel/Tables/TablesPanel';
import CreateProduct from './AdminPanel/Tables/CreateProduct/CreateProduct';
import Registration from './AdminPanel/login/registration';
import Product from './AdminPanel/Tables/TableProduct/product/product';
import { ToastProvider } from 'react-toast-notifications'
import Top from './AdminPanel/TOP/Top';
import ShoppingPayment from './components/Shipping&Payment/shoppingPayment';
import ContactUs from './components/ContactUs/contactUs';

class App extends React.Component {
  
  componentDidMount(){
    this.props.initializeApp();
  }


  render(){
    if(!this.props.initialized){
      return <Pereloader /> 
    }

    return(
      <div>
        <ScrollToTop />
        <Route exact path='/Eco-Store/AdminPanel' render={()=><AdminPanel />}/>
        <Route exact path='/Eco-Store/AdminPanel/Tables' render={()=><Tables />}/>
        <Route exact path='/Eco-Store/AdminPanel/CreateProduct' render={()=><CreateProduct />}/>
        <Route exact path='/Eco-Store/AdminPanel/Product/:id' render={()=><Product />}/>
        <Route exact path='/Eco-Store/AdminPanel/Registration' render={()=><Registration />}/>
        <Route exact path='/Eco-Store/AdminPanel/Top' render={()=><Top />}/>
      
        <Route exact path='/' render={()=><Main />}/>
        <Route exact path='/Product' render={ ()=> <StoreContainer />} />
        <Route exact path='/AboutUs' component={AboutUs} />
        <Route exact path='/Shopping&Payment' component={ShoppingPayment} />
        <Route exact path='/ContactUs' component={ContactUs} />
        <Route exact path='/Description/:id'  component = {itemDescriptionContainer} />
        <Route exact path='/Basket'  component={BasketContainer}/>
      </div>
    )
  }
}


let mapStateToProps = (state) => ({
  initialized: state.app.initialized ,
});

let AppContainer =  compose(
  connect(mapStateToProps,{ initializeApp })
  )(App);

export const MainApp = (props) =>{

  const {login, logout, token, userID} = useAuch()
  const isAuthorization = !!token

  return (
      <AuchContext.Provider value={{token,userID,login,logout,isAuthorization}}>
        <BrowserRouter>
          <Provider store={store}>
            <ToastProvider>
              <AppContainer />
            </ToastProvider>
          </Provider>
        </BrowserRouter>
      </AuchContext.Provider>
  );
}

export default MainApp;
