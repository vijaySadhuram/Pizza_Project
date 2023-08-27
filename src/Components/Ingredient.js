import React from 'react';
import { useDrag } from 'react-dnd';

const ItemTypes = {
  INGREDIENT: 'ingredient'
};

function Ingredient({ ingredient, onSelectIngredients, isSelected }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.INGREDIENT,
    item: { type: ItemTypes.INGREDIENT, ingredient }
  }));

  return (
    <div
      ref={drag}
      className={`ingredient-item ${isDragging ? 'dragging' : ''} ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelectIngredients(ingredient)}
    >
      {ingredient}
    </div>
  );
}

export default Ingredient;
