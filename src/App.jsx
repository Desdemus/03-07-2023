import { useState } from "react";
import "./App.css";
import "./App.scss";
import { Button } from "./components/buttons";
function App() {
  const [isButtonXl, setIsButtonXl] = useState(false);
  const toggleButtonXl = () => {
    setIsButtonXl(!isButtonXl);
  };
  //this will be a component
  return (
    <>
      <h1 className='heading1'>Welcome</h1>
      <div className='container'>
        <ul className='NavBar'>
          <li>Home</li>
          <li>Products</li>
          <li>News</li>
          <li>Contacts</li>
        </ul>
      </div>
      <div className="wrapper">
        <div className="row">
          <div className="col-1">col1</div>
          <div className="col-1">col1</div>
          <div className="col-1">col1</div>
          <div className="col-1">col1</div>
          <div className="col-1">col1</div>
          <div className="col-1">col1</div>
          <div className="col-1">col1</div>
          <div className="col-1">col1</div>
          <div className="col-1">col1</div>
          <div className="col-1">col1</div>
          <div className="col-1">col1</div>
          <div className="col-1">col1</div>
        </div>
        <div className="row">
          <div className="col-2">col2</div>
          <div className="col-2">col2</div>
          <div className="col-2">col2</div>
          <div className="col-2">col2</div>
          <div className="col-2">col2</div>
          <div className="col-2">col2</div>
        </div>
        <div className="row">
          <div className="col-3">col3</div>
          <div className="col-3">col3</div>
          <div className="col-3">col3</div>
          <div className="col-3">col3</div>
        </div>
        <div className="row">
          <div className="col-4">col4</div>
          <div className="col-4">col4</div>
          <div className="col-4">col4</div>
        </div>
        <div className="row">
          <div className="col-5">col5</div>
          <div className="col-7">col7</div>
        </div>
        <div className="row">
          <div className="col-12">col12</div>
        </div>
        <div className="row">
          <div className="col-3">col3</div>
          <div className="col-3">col3</div>
          <div className="col-6">col6</div>
        </div>
        <div className="row space-between">
          <div className="col-1">col1</div>
          <div className="col-1">col1</div>
        </div>
        <div className="row">
          <div className="col-4">col4</div>
          <div className="col-8">col8</div>
        </div>
        <div className="row">
          <div className="col-xs-1">Col-xs-1</div>
        </div>

        <hr />
        <hr />
        <hr />
        <hr />
        <div className="row">
          <div className="col-xs-6 col-sm-2 col-md-4">A</div>
          <div className="col-xs-6 col-sm-6 col-md-4">B</div>
          <div className="col-xs-12 col-sm-4 col-md-4">C</div>
        </div>

        <div className="row-g">
          <div className="col-g-1">A</div>
          <div className="col-g-1">B</div>
        </div>
      </div>

      <div className="Button_box" onClick={() => toggleButtonXl()}>
        <Button label="go to" icon iconLeft size="sm" square />
      </div>
      <div>
        <Button label="go to" icon outline size="md" />
      </div>
      {isButtonXl && (
        <div>
          <Button label="go to" outline size="xl" />
        </div>
      )}
    </>
  )
}

export default App
