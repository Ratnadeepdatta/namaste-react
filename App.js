// const heading = React.createElement("h1", 
//     {id:"heading"},
//      "Hello World From React");


import React from "react";
// import ReactDOM from "react-dom";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("div", { id: "parent" }, [
//   React.createElement(
//     "div",
//     { id: "child", key: "child1" },  
//     [
//       React.createElement("h1", { key: "h1-1" }, "This is nested heading"),
//       React.createElement("h2", { key: "h2-1" }, "This nested FOR Multipull Elements")
//     ]
//   ),

//   React.createElement(
//     "div",
//     { id: "child2", key: "child2" },
//     [
//       React.createElement("h1", { key: "h1-2" }, "This is h1 heading"),
//       React.createElement("h2", { key: "h2-2" }, "This nested FOR Multipull Elements")
//     ]
//   )
// ]);
const heading = React.createElement("div", {id:"parent"},[
     React.createElement("div", {id: "child", key: "child1"}, 
    [ React.createElement("h1", {key: "h1-1"}, "This is nested heading"),
        React.createElement("h2", {key: "h2-1"}, "This  nested FOR Multipull Elements")]),

        React.createElement("div", {id: "child2", key: "child2"}, 
    [ React.createElement("h1", {key: "h1-2"}, "This is h1 heading"),
        React.createElement("h2", {key: "h2-2"}, "This  nested FOR Multipull Elements")])
]);     


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);