import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  return (
    // <h1 style={style} className="header">
    //   Fast React Pizza
    // </h1>
    <header className="header">
      <h1>Fast React Pizza co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {pizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from, All
            from our stone oven, all organic, all delicious
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : null}

      {/* <Pizza
        name="pizza focaccia"
        ingredients="Bread with italian olive oil and rosemary"
        photoName="pizzas/focaccia.jpg"
        price={16}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato and sauce"
        photoName="pizzas/funghi.jpg"
        price={10}
      /> */}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  // if (pizzaObj.soldOut) {
  //   return null;
  // }
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""} `}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "Sold Out" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();

  const openHour = 12;
  const closeHour = 22;
  const isOpened = hour >= openHour && hour <= closeHour;

  // if (hour >= openHour && hour <= closeHour) alert("We're currently open");
  // else alert("Sorry we're closed");
  const minute = new Date().getMinutes().toString().padStart(2, 0);
  // return React.createElement("footer", null, "We're currently Open");
  // if (!isOpened)
  //   return (

  //     <p>
  //       We're happy to welsome you between {openHour}:00 and {closeHour}:00
  //     </p>
  //   );
  return (
    <footer className="footer">
      {isOpened ? (
        <Order hour={hour} minute={minute} />
      ) : (
        <p>
          We're happy to welsome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
}

function Order({ hour, minute }) {
  return (
    <div className="order">
      <p>
        {hour}:{minute}.We're currently Open
      </p>
      <button className="btn">Order</button>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
