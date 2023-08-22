
// const inner = document.createElement("h1");
// inner.innerHTML="Hello World From JavaScript!";

// document.getElementById("mainContainer").appendChild(inner);

const heading = React.createElement(
    "div",
    { id: "heading" },
    React.createElement(
        "div",
        { id: "heading2" },
        "Hello World From React!"
    )
);

const root = ReactDOM.createRoot(document.getElementById("mainContainer"));
root.render(heading);