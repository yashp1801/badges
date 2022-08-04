import "./App.css";
import Axios from "axios";
import { useState } from "react";
import RecipeCard from "./RecipeCard";

function App() {
  const [query, setquery] = useState("");

  const [recipes, setrecipes] = useState([]);

  const YOUR_APP_ID = "a6b7c94d";
  const YOUR_APP_KEY = "670203654e2295591a342a542694bcd8";
  let url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&health=alcohol-free`;

  async function getRecipes() {
    var results = await Axios.get(url);
    setrecipes(results.data.hits);
    console.log(results.data);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  };

  return (
    <div className="app">
      <div className="app_container">
        <h1>Instant Recipe App 🍔</h1>
        <form className="app_searchForm" onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="enter ingrident"
            value={query}
            onChange={(e) => setquery(e.target.value)}
          />
          <button type="submit" className="Search">Search</button>
        </form>
        <div className="app_recipe">
          {recipes.map((recipe) => {
            return <RecipeCard recipe={recipe} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
