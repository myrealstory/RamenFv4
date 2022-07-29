import React from 'react'
import { Link} from 'react-router-dom'

const RecipeMain = () => {
  return (
    <>
      <button>
        <Link to="/Recipe/RecipePage1"> page1 </Link>
      </button>
      <button>
        <Link to="/Recipe/RecipePage2"> page2 </Link>
      </button>
    </>
  );
}

export default RecipeMain