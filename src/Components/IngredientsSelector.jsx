import React from 'react';
import Ingredient from './Ingredient'; // Import Ingredient component

function IngredientsSelector({ ingredients, onSelectIngredients, selectedIngredients }) {
  return (
    <div className="selector">
      <h2>Select Ingredients</h2>
      {ingredients.map(ingredient => (
        <Ingredient
          key={ingredient}
          ingredient={ingredient}
          onSelectIngredients={onSelectIngredients}
          isSelected={selectedIngredients.includes(ingredient)}
        />
      ))}
    </div>
  );
}

export default IngredientsSelector;
