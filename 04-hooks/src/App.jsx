import { createRoot } from "react-dom/client";
import Pizza from "./Pizza"; // defualt export from Pizza.jsx
import Order from "./Order";

const App = () => {
  return (
    <div>
      {/* <h1 className="logo">Padre Gino's - Order Now</h1> */}
      {/* <Pizza
        name="The Pepperoni Pizza"
        description="Mozzarella Cheese, Pepperoni"
        image="/public/pizzas/pepperoni.webp"
      />
      <Pizza
        name="The Hawaiian Pizza"
        description="Sliced Ham, Pineapple, Mozzarella Cheese"
        image="/public/pizzas/hawaiian.webp"
      />
      <Pizza
        name="The Big Meat Pizza"
        description="Bacon, Pepperoni, Italian Sausage, Chorizo Sausage"
        image="/public/pizzas/big_meat.webp"
      /> */}
      <Order />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
// root.render(React.createElement(App));
root.render(<App />);
