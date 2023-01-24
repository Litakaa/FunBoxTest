import * as React from "react";
import Product, {PropsType} from "./Components/Product/Product";
import "./App.scss";

function App() {

    let products:Array<PropsType> = [
        {
            id: 1,
            description: "с фуа-гра",
            species: "10",
            mouse: "",
            text: "мышь в подарок",
            count: "0,5",
            isActive: true
        },
        {
            id: 2,
            description: "с рыбой",
            species: "40",
            mouse: "2",
            text: "мыши в подарок",
            count: "2",
            isActive: true
        },
        {
            id: 3,
            description: 'с курой',
            species: "100",
            mouse: "5",
            text: "мышей в подарок",
            count: "5",
            isActive: false
        }
    ]


    let productElements = products.map(product =>
        <Product id={product.id}
                 description={product.description}
                 species={product.species}
                 mouse={product.mouse}
                 text={product.text}
                 count={product.count}
                 isActive={product.isActive}

        /> )
    return (
        <div className="wrapper">
           <div className="main">
               <div className="center">
                   <header>
                       <h1>Ты сегодня покормил кота?</h1>
                   </header>
                   {productElements}
               </div>
           </div>

        </div>
    );
}

export default App;
