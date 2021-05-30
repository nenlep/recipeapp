// import './key';
import './index.css'
import './App.css';
import Axios from "axios"
import { useState } from 'react';
import RecipeGrid from './RecipeGrid';

function App() {
  const [query,setQuery] = useState("")
  const [recipes, setrecipes] = useState([])

  const APP_ID = '2b306fef'
  const APP_KEY = '238c99bad99388fc658b35e5ad8ba828	'
  var url =  `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&health=alcohol-free`
  
 async  function getRecipes(){
    var result = await Axios.get(url)
    setrecipes(result.data.hits)
    console.log(result.data)
  }

  const onSubmit = (e)=>{
    e.preventDefault()
    getRecipes()
  }

  return (
    <div className="app">
      <p style={{cursor: "pointer"}} >Recipe App</p>
      <form className="searchForm" onSubmit={onSubmit}>
        <input 
          type="text" 
          className="searchInput"
          placeholder="Enter ingredient"
          value={query} 
          onChange={(e)=>setQuery(e.target.value)}
        />
        <input type="submit" value="search" onClick={getRecipes} className="searchBtn"/>
      </form>
      <div className="recipes">
        {recipes.map((recipe) => {
         return <RecipeGrid  recipe={recipe}/>
        })}
      </div>
    </div>
  );
}

export default App;
