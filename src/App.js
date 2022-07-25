
import "./App.css";
import FoodMenu from './Pages/components/FoodMenu'
import MainPage  from "./Pages/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState,useEffect } from 'react'
import TestDraw from "./test/TestDraw";
import FileMenuInfo, { LIST_GET_MENUS } from "./Pages/Api/MenuApi";
import FileNewsInfo, { LIST_GET_NEWS } from "./configs/AjaxPath";
// import 'bootstrap/dist/css/bootstrap.min.css';
// export const getMenuInfo = async () => {
//   const response = await fetch(LIST_GET_NEWS);
//   const responseJson = await response.json();
//   console.log(responseJson);
//   return responseJson;
// };


function App() {

  const [menuData, setMenuData] = useState({});
  const [newsData, setNewsData] = useState({});
    
  const getMenuInfo = async () => { 
    const response = await fetch(LIST_GET_MENUS);
    const rNews = await fetch(LIST_GET_NEWS);
    const rNewJson = await rNews.json();
    const responseJson = await response.json();
    setNewsData(rNewJson);
    setMenuData(responseJson);
  }
  useEffect(() => {
    getMenuInfo();
    return () => {
     
    }
  }, [])
  

    return (
      <Router>
        {/* <Nav /> */}
        <FileNewsInfo.Provider value={[newsData, setNewsData]}>
          <FileMenuInfo.Provider value={[menuData, setMenuData]}>
            <Routes>
              <Route path="/" element={<MainPage />}></Route>
              <Route path="/FoodMenu" element={<FoodMenu />}></Route>
              <Route path="/testDraw" element={<TestDraw />}></Route>
              {/* <Route path="/" element={  }></Route> */}
            </Routes>
          </FileMenuInfo.Provider>
        </FileNewsInfo.Provider>
      </Router>
    );
}

export default App;
