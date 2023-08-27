import React from 'react';
import { useDrop } from 'react-dnd';

const PizzaBase = ({ selectedBase, selectedIngredients, onDropIngredient }) => {
  const [, drop] = useDrop(() => ({
    accept: 'INGREDIENT',
    drop: item => {
      onDropIngredient(item.ingredient);
    },
  }));

  return (
    <div ref={drop} className="selected-base">
      {selectedBase ? <div className="base">{selectedBase}</div> : 'Select a base'}
      <div className="pizza-image">
        <div className="pizza-base-image"></div>
        {selectedIngredients.length > 0 && (
          <div className="ingredients">
            {selectedIngredients.map((ingredient, index) => (
              <div key={index} className={`ingredient ingredient-${index + 1}`}>
                {ingredient}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PizzaBase;
