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
import Cart01 from './Pages/components/CartComponent/Cart01'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React, { useState, useEffect, useContext } from 'react'
import TestDraw from './test/TestDraw'
import FileMenuInfo, { LIST_GET_MENUS } from './Pages/Api/MenuApi'
import FileNewsInfo, {
  LIST_GET_NEWS,
  LOGIN_API
} from './configs/AjaxPath'
import { GlobalScrollProvider } from './Pages/components/hooks/useGlobalScroll'
import { GlobalMouseMoveProvider } from './Pages/components/hooks/useGlobalMouseMove'
import LoginProvider from './Pages/components/LoginComponents/LoginProvider'
import LoginModal from './Pages/components/LoginComponents/LoginModal'
import AuthProvider from './Pages/components/LoginComponents/AuthProvider'
import RegisterModal from './Pages/components/LoginComponents/RegisterModal'
import MemberProvider,{LIST_GET_MEMBER} from './Pages/components/LoginComponents/MemberProvider'

import { CartProvider } from './Pages/components/CartComponent/Utils/useCart'
import { SecondCartProvider } from './Pages/components/CartComponent/Utils/useSecondCart'
import Testing from './testing'
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
        <SecondCartProvider localStorageKey="secondCart">
          <CartProvider>
            <GlobalScrollProvider>
              <GlobalMouseMoveProvider>{children}</GlobalMouseMoveProvider>
            </GlobalScrollProvider>
          </CartProvider>
        </SecondCartProvider>
      </LoginProvider.Provider>
    </AuthProvider>
  )
}

function App() {
  // const { activeLogin, setActiveLogin } = useContext(LoginProvider);
  const [menuData, setMenuData] = useState({})
  const [newsData, setNewsData] = useState({})
  const [memberData, setMemberData] = useState({})

  const getMenuInfo = async () => {
    const response = await fetch(LIST_GET_MENUS)
    const rNews = await fetch(LIST_GET_NEWS)
    const rMember = await fetch(LIST_GET_MEMBER)
    const rNewJson = await rNews.json()
    const responseJson = await response.json()
    const rMemberJson = await rMember.json()
    setNewsData(rNewJson)
    setMenuData(responseJson)
    setMemberData(rMemberJson)
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
            <MemberProvider.Provider value={[memberData, setMemberData]}>
              {/* <LoginModal trigger={activeLogin} setTrigger={ setActiveLogin} /> */}
              <Nav />
              <Routes>
                <Route path="/" element={<MainPage />}></Route>
                <Route path="/FoodMenu" element={<FoodMenu />} />
                <Route path="/Register" element={<RegisterModal />} />
                <Route path="/Cart" element={<Cart />} />
                <Route path="/Recipe" element={<Recipe />}></Route>
                <Route path="/ppp" element={<Testing />} />
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
            </MemberProvider.Provider>
          </FileMenuInfo.Provider>
        </FileNewsInfo.Provider>
      </Wrapper>
    </Router>
  )
}

export default App
