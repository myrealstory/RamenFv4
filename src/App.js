import './App.css'

import './Pages/CSS/FoodMenu.css'
import './Pages/CSS/Cart.css'

import FoodMenu from './Pages/components/FoodMenu'
import MainPage from './Pages/Main'
import Recipe from './Pages/MComponent/Recipe'
import RecipePage1 from './Pages/MComponent/side/RecipePage1'
import RecipePage2 from './Pages/MComponent/side/RecipePage2'
import Nav from './Pages/components/nav'
import Footer from './Pages/components/footer'
import Cart from './Pages/components/CartComponent/Cart'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import TestDraw from './test/TestDraw'
import FileMenuInfo, { LIST_GET_MENUS } from './Pages/Api/MenuApi'
import FileNewsInfo, { LIST_GET_NEWS, LOGIN_API } from './configs/AjaxPath'
import { GlobalScrollProvider } from './Pages/components/hooks/useGlobalScroll'
import { GlobalMouseMoveProvider } from './Pages/components/hooks/useGlobalMouseMove'
import LoginProvider from './Pages/components/LoginComponents/LoginProvider'
import AuthProvider from './Pages/components/LoginComponents/AuthProvider'
import RegisterModal from './Pages/components/LoginComponents/RegisterModal'

import { CartProvider } from './Pages/components/CartComponent/Utils/useCart'
import { secondCartProvider } from './Pages/components/CartComponent/Utils/useSecondCart'
// import 'bootstrap/dist/css/bootstrap.min.css';
// export const getMenuInfo = async () => {
//   const response = await fetch(LIST_GET_NEWS);
//   const responseJson = await response.json();
//   console.log(responseJson);
//   return responseJson;
// };
function Wrapper({ children }) {
  const [activeLogin, setActiveLogin] = useState(false)

  return (
    <AuthProvider>
      <LoginProvider.Provider value={{ activeLogin, setActiveLogin }}>
        <secondCartProvider localStorageKey="secondCart">
          <CartProvider>
            <GlobalScrollProvider>
              <GlobalMouseMoveProvider>{children}</GlobalMouseMoveProvider>
            </GlobalScrollProvider>
          </CartProvider>
        </secondCartProvider>
      </LoginProvider.Provider>
    </AuthProvider>
  )
}

function App() {
  const [menuData, setMenuData] = useState({})
  const [newsData, setNewsData] = useState({})

  const getMenuInfo = async () => {
    const response = await fetch(LIST_GET_MENUS)
    const rNews = await fetch(LIST_GET_NEWS)
    const rNewJson = await rNews.json()
    const responseJson = await response.json()
    setNewsData(rNewJson)
    setMenuData(responseJson)
  }
  useEffect(() => {
    getMenuInfo()
    return () => {}
  }, [])

  return (
    <Router>
      <Wrapper>
        {/* <Nav</Wrapper> /> */}
        <FileNewsInfo.Provider value={[newsData, setNewsData]}>
          <FileMenuInfo.Provider value={[menuData, setMenuData]}>
            <Nav />
            <Routes>
              <Route path="/" element={<MainPage />}></Route>

              <Route path="/FoodMenu" element={<FoodMenu />} />
              <Route path="/Register" element={<RegisterModal />} />
              <Route path="/Cart" element={<Cart />} />

              <Route path="/Recipe" element={<Recipe />}></Route>
              <Route path="ppp" element={<>12313321</>} />
              <Route
                path="/Recipe/RecipePage1"
                element={<RecipePage1 />}
              ></Route>
              <Route
                path="/Recipe/RecipePage2"
                element={<RecipePage2 />}
              ></Route>

              {/* <Route path="/" element={  }></Route> */}
            </Routes>
            {/* <Footer /> */}
          </FileMenuInfo.Provider>
        </FileNewsInfo.Provider>
      </Wrapper>
    </Router>
  )
}

export default App
