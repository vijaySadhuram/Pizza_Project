import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import PizzaBaseSelector from './Components/PizzaBaseSelector';
import IngredientsSelector from './Components/IngredientsSelector';
import PizzaPreview from './Components/PizzaPreview';
import pizzaImage from './images/pizzaimage.png'; // Path to your pizza image
import './App.css';
const pizzaBases = ['Thin Crust', 'Thick Crust'];
const ingredients = ['Cheese', 'Pepperoni', 'Mushrooms'];

function App() {
  const [selectedBase, setSelectedBase] = useState(null);
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const handleSelectIngredients = ingredient => {
    if (selectedIngredients.length < 3) {
      setSelectedIngredients([...selectedIngredients, ingredient]);
    }
  };

  return (
    <div className="app">
      <DndProvider backend={HTML5Backend}>
        <PizzaBaseSelector pizzaBases={pizzaBases} onSelectBase={setSelectedBase} />
        <IngredientsSelector
          ingredients={ingredients}
          onSelectIngredients={handleSelectIngredients}
          selectedIngredients={selectedIngredients}
        />
        <PizzaPreview
          base={selectedBase}
          ingredients={selectedIngredients}
          pizzaImage={pizzaImage}
          onSelectIngredients={handleSelectIngredients}
        />
      </DndProvider>
    </div>
  );
}

export default App;

