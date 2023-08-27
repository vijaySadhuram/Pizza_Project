import React from 'react';
import { useDrop } from 'react-dnd';

const ItemTypes = {
  PIZZA_BASE: 'pizzaBase',
  INGREDIENT: 'ingredient'
};

function PizzaPreview({ base, ingredients, onSelectIngredients, pizzaImage }) {
  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: [ItemTypes.PIZZA_BASE, ItemTypes.INGREDIENT],
    drop: (item) => {
      if (item.type === ItemTypes.PIZZA_BASE) {
        onSelectIngredients([]);
      } else if (item.type === ItemTypes.INGREDIENT) {
        onSelectIngredients([...ingredients, item.ingredient]);
      }
    },
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  }));

  const generatePizzaImage = () => {
    const pizzaWithIngredients = [base, ...ingredients].join('-');
    return `${pizzaImage}?ingredients=${encodeURIComponent(pizzaWithIngredients)}`;
  };

  return (
    <div className="preview">
      <h2>Pizza Preview</h2>
      <div className="pizza">
        <div className={`empty-circle ${isOver && canDrop ? 'hovered' : ''}`} ref={drop}>
          {base ? base : 'Drag Pizza Base Here'}
        </div>
        {base && (
          <div className="ingredient-list">
            <h3>Selected Ingredients</h3>
            {ingredients.map((ingredient, index) => (
              <div key={index} className="ingredient-item">
                {ingredient}
              </div>
            ))}
          </div>
        )}
        <div className="pizza-image">
          <div className="circle">
            <img src={generatePizzaImage()} alt="Pizza" />
            <div className="ingredient-overlay">
              {ingredients.map((ingredient, index) => (
                <div key={index} className="ingredient-label">
                  {ingredient}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PizzaPreview;
