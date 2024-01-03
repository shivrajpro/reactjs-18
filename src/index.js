import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';

const pizzaData = [
    {
        name: 'Focaccia',
        ingredients: 'Bread with italian olive oil and rosemary',
        price: 6,
        photoName: 'pizzas/focaccia.jpg',
        soldOut: false
    },
    {
        name: 'Pizza Margherita',
        ingredients: 'Tomato and mozarella',
        price: 10,
        photoName: 'pizzas/margherita.jpg',
        soldOut: false
    },
    {
        name: 'Pizza Spinaci',
        ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
        price: 12,
        photoName: 'pizzas/spinaci.jpg',
        soldOut: false
    },
    {
        name: 'Pizza Funghi',
        ingredients: 'Tomato, mozarella, mushrooms, and onion',
        price: 12,
        photoName: 'pizzas/funghi.jpg',
        soldOut: false
    },
    {
        name: 'Pizza Salamino',
        ingredients: 'Tomato, mozarella, and pepperoni',
        price: 15,
        photoName: 'pizzas/salamino.jpg',
        soldOut: true
    },
    {
        name: 'Pizza Prosciutto',
        ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
        price: 18,
        photoName: 'pizzas/prosciutto.jpg',
        soldOut: false
    }
];

function Header() {
    const style = { fontSize: '24px', color: 'dodgerblue', textTransform: 'uppercase' };
    return (
        <div className="header" >
            <h1 style={style} >leela pizza app</h1>
        </div>
    )
}

function Menu() {
    const pizzas = [...pizzaData];
    // const len = 0;
    return (
        <div className="menu">
            <h2>Our Menu</h2>
            {/* {false ? <p>its true</p> : <p>its false</p>} */}

            {/* {len && <p>we have pizzas</p>} */}
            {/* {len > 0 && <p>we have pizzas</p>} */}
            <ul className="pizzas">
                {pizzas.length ?
                    pizzaData.map(p => {
                        return <Pizza key={p.name} pizzaObj={p} />
                    })
                    :
                    <p>no pizza present</p>
                }
            </ul>

        </div>
    )
}

function Pizza({ pizzaObj }) {
    console.log(pizzaObj);
    return (
        <li className="pizza" >
            <img src={pizzaObj.photoName} alt={pizzaObj.name} />
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>
                <span> {pizzaObj.price} </span>
            </div>
        </li>
    )
}

function Footer() {
    const currentHours = new Date().getHours();
    const openHour = 6;
    const closedHour = 23;

    const isOpen = currentHours >= openHour && currentHours <= closedHour

    if (!isOpen) return <p>we are closed!</p>
    return (
        isOpen && (
            <Order closedHour={closedHour} openHour={openHour} />
        )
    )
}

function Order({ closedHour, openHour }) {
    return <div className="order">
        <p>We are open from {openHour}:00 to {closedHour}:00
        </p>
        <p>Come and visit us or order online</p>
        <button className="btn">Order</button>
    </div>;
}

function App() {
    //can write function Pizza here. Nested components
    return (
        <div className="container">
            <Header />
            <Menu />
            <h1>hello world!!!</h1>
            <Footer />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
