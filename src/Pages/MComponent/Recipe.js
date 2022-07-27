import React from 'react'
import Main from './side/RecipeMain'
import RecipePage1 from './side/RecipePage1';
import RecipePage2 from './side/RecipePage2';
import NAV from '../components/nav'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";


const Recipe = () => {
  return (
    <>
          <NAV />
          <Main />
    </>
  );
}

export default Recipe