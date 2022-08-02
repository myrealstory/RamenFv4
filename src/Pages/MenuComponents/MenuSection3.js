import React ,{useState, useEffect ,useContext}from 'react'

import FileMenuInfo from "../Api/MenuApi";

function MenuSection3() {
    const [arrayData , setArrayData] = useState([]);

    const [menuData] = useContext(FileMenuInfo);
    console.log("MenuSec2:", menuData);
  return (
    <>
        
    </>
  )
}

export default MenuSection3