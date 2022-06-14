import React, { memo } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// 自定义
import NavBar from 'c/nav-bar';
import AppHeader from 'c/app-header';
import AppFooter from 'c/app-footer';
import store from '@/store';
import RoutesMap from '@/routes';

const App = memo(() => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <AppHeader />
        <RoutesMap />
        {/* <AppFooter /> */}
      </BrowserRouter>
    </Provider>
  )
})

export default App;