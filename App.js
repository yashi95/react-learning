import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("div", { id: "title" }, [
  React.createElement("h1", {}, "hello H1"),
  React.createElement("h2", {}, "hello H2"),
  React.createElement("h3", {}, "hello H3"),
]);

const JSXHeading = (
  <>
    <div id="title">
      <h1>hello H1 in JSX</h1>
      <h2>hello H2 in JSX</h2>
      <h3>hello H3 in JSX</h3>
    </div>
  </>
);

const FirstComponent = () => {
  return <h1> This is my component which is Inside another component..!</h1>;
};
const CompositionComponent = () => {
  return <div> This is my First component Inside second component..!</div>;
};

const SecondComponent = () => (
  //component composition
  <div>
    <CompositionComponent>
      <FirstComponent />
    </CompositionComponent>
    {FirstComponent()}
    <h1>hello H1 in JSX</h1>
    <h2>hello H2 in JSX</h2>
    <h3>hello H3 in JSX</h3>
  </div>
);

const Header = () => (
  <>
    <header className="header">
      <h1>Header</h1>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJOzP33YEpqlHMBoLmXcZWDgA8T8haRLh0tQ&usqp=CAU"
        className="logo"
        alt="CompanyLogo"
      />
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Search for products..."
        />
        <button className="search-btn">Search</button>
      </div>
      <nav>
        <a href="#home">Home |</a>
        <a href="#contact">Contact | </a>
        <a href="#about">About</a>
      </nav>
    </header>
  </>
);
const root = ReactDOM.createRoot(document.getElementById("mainContainer"));
root.render(<Header />);

// root.render(heading);
