import { useState } from "react";
import Pizza from "./Pizza";
const PIZZA_TYPE_OPTIONS = [
  { id: 1, value: "pepperoni", label: "Pepperoni" },
  { id: 2, value: "margherita", label: "Margherita" },
  { id: 3, value: "hawaiian", label: "Hawaiian" },
  { id: 4, value: "americano", label: "Americano" },
];
export default function Order() {
  const [pizzaType, setPizzaType] = useState("pepperoni");
  const [pizzaSize, setPizzaSize] = useState("M");
  return (
    <div className="order">
      <h2>Create Order</h2>
      <form>
        <div>
          <div>
            <label htmlFor="pizza-type">Pizza Type</label>
            <select
              id="pizza-type"
              name="pizza-type"
              value={pizzaType}
              onChange={(e) => setPizzaType(e.target.value)}
            >
              {PIZZA_TYPE_OPTIONS.map(({ id, label, value }) => (
                <option key={id} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="pizza-size">Pizza Size</label>
            <div>
              <span>
                <input
                  type="radio"
                  checked={pizzaSize === "S"}
                  name="pizza-size"
                  value="S"
                  id="pizza-s"
                  onChange={(e) => setPizzaSize(e.target.value)}
                />
                <label htmlFor="pizza-s">Small</label>
              </span>
              <span>
                <input
                  type="radio"
                  checked={pizzaSize === "M"}
                  name="pizza-size"
                  value="M"
                  id="pizza-m"
                  onChange={(e) => setPizzaSize(e.target.value)}
                />
                <label htmlFor="pizza-m">Medium</label>
              </span>
              <span>
                <input
                  type="radio"
                  checked={pizzaSize === "L"}
                  name="pizza-size"
                  value="L"
                  id="pizza-l"
                  onChange={(e) => setPizzaSize(e.target.value)}
                />
                <label htmlFor="pizza-l">Large</label>
              </span>
            </div>
          </div>
          <button type="submit">Add to Cart</button>
          <div className="order-pizza">
            <Pizza
              name="The Pepperoni Pizza"
              description="Mozzarella Cheese, Pepperoni"
              image="/public/pizzas/pepperoni.webp"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
