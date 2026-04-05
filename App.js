

    import React from "react";
    import ReactDOM from "react-dom/client";
// import { jsx } from "react/jsx-runtime";

// react.createelement = ReactElements-js objects = HTML Element (render)
// jsx => Babel is transpaile it to      React.create => ReactElement-Js Object => HTMLElement(render)

const Title = () => ( 
    <h1>This is Namaste React Course</h1>
);

    // React Functional component

    const HeadingComponent = () => ( 
        <div id="component"> 
        <Title/>
        <h1 className="heading"> Today i will complidet this epeshoud</h1>
        </div>
    );  



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);