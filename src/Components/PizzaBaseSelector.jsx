import React from 'react';
import { useDrag } from 'react-dnd';

const ItemTypes = {
  PIZZA_BASE: 'pizzaBase'
};

function PizzaBaseSelector({ pizzaBases, onSelectBase }) {
  return (
    <div className="selector">
      <h2>Select Pizza Base</h2>
      {pizzaBases.map(base => (
        <PizzaBase key={base} base={base} onSelectBase={onSelectBase} />
      ))}
    </div>
  );
}

function PizzaBase({ base, onSelectBase }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.PIZZA_BASE,
    item: { base }
  }));

  return (
    <div
      ref={drag}
      className={`pizza-base ${isDragging ? 'dragging' : ''}`}
      onClick={() => onSelectBase(base)}
    >
      {base}
    </div>
  );
}

export default PizzaBaseSelector;
