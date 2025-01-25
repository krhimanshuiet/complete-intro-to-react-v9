const Pizza = (props) => {
    return React.createElement('div', {},[
        React.createElement('h1', {}, props.name),
        React.createElement('p', {}, props.description),
    ])
}


const App = () => {
    return React.createElement('div', {}, 
        [
            React.createElement('h1', {}, "Padre Gino's"),
            React.createElement(Pizza,{name: "Pepperoni", description: "Pepperoni, cheese, tomato sauce"}),
            React.createElement(Pizza,{name: "The Hawaiian", description: "Pineapple, ham, cheese, tomato sauce"}),
            React.createElement(Pizza,{name:"Americano",description:"french fries, cheese, tomato sauce"}),
            React.createElement(Pizza,{name:"Chicken Pizza",description:"chicken"}),
            React.createElement(Pizza,{name:"Butter pizza",description:"butter"}),
        ]
    );
}

const container = document.getElementById('root');
const root  = ReactDOM.createRoot(container);
root.render(React.createElement(App,{},[]));