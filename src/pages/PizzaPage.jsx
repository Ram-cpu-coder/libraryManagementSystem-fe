import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addSauce,
  addToppings,
  clearSauce,
  clearToppings,
  toggleGluten,
} from "../slice/pizzaSlice";

const PizzaPage = () => {
  const pizza = useSelector((store) => store.pizza);
  // const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleOnAddToppings = (tp) => {
    dispatch(addToppings(tp));
  };
  const handleOnAddSauce = (sauce) => {
    dispatch(addSauce(sauce));
  };
  const handleOnClearToppings = () => {
    dispatch(clearToppings());
  };
  const handleOnClearSauce = () => {
    dispatch(clearSauce());
  };
  const handleOnToggleGluten = () => {
    dispatch(toggleGluten());
  };
  // dispatch(addToppings)
  return (
    <div className="text-center">
      <h1>Toppings</h1>
      {pizza.toppings.map((item) => (
        <div>{item}</div>
      ))}
      <hr />
      <div>
        <button onClick={() => handleOnAddToppings("POTATO")}>
          Add POTATO
        </button>
        <button onClick={() => handleOnAddToppings("EGGPLANT")}>
          Add EGGPLANT
        </button>
        <button onClick={() => handleOnAddToppings("ARTICHOKES")}>
          Add ARTICHOKES
        </button>
      </div>
      <button onClick={() => handleOnClearToppings()}>Clear</button>
      <hr />
      <h1>Sauce</h1>
      {pizza.sauce.map((item) => (
        <div>{item}</div>
      ))}
      <hr />
      <div>
        <button onClick={() => handleOnAddSauce("Nduja Sugo")}>
          Add Nduja Sugo
        </button>
        <button onClick={() => handleOnAddSauce("Bolognese")}>
          Add Bolognese
        </button>
      </div>
      <button onClick={() => handleOnClearSauce()}>Clear</button>
      <hr />
      <h1>Gluten</h1>
      {pizza.gluten.toString()}
      <hr />
      <button onClick={() => handleOnToggleGluten()}>Gluten / No-Gluten</button>
    </div>
  );
};

export default PizzaPage;
