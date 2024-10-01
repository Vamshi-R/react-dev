import React, {createElement} from "react";
import {createRoot} from "react-dom/client";

// React.createElement => converted into (React Element - JS Object) = (rendered as html element)HTML Element (render)

//core react
// const heading = createElement("div",{id:"parent"},
//     createElement("div",{id:"child"},[
//        createElement("h1",{},"I am h1 tag"),
//         createElement("h2",{},"I am h2 tag")
//     ])
// );
// console.log(heading); //object

//JSx => convertrf to React Element using babel(JS compiler) - JS Object => HTML Element (render)
// const jsxHeading = <h1>Hello JSX !</h1>
// console.log(jsxHeading); //object

// const root = createRoot(document.getElementById("root"));
// root.render(heading); //it will everything inside root with heading it wont append

const arr = [1,2,3];
const elem = <span>React Element !</span>
//normal js variable
const title = (
  <div>
    <h1>Name React 1</h1>
    {elem} // putting react element inside another react element
    <p>I am title paragraph</p>
  </div>
);
const Title = () => {return <h1>Namste React !</h1>};
const Heading = () => (
    <div>
            {
                arr.map(ele => console.log(ele))
            }
            {title}
            {Title()}
            <Title />
            <h1>Heading Component !</h1>
    </div>
);
const root = createRoot(document.getElementById("root"));
root.render(<Heading />); 