import React from 'react';
import './App.css';
import DataCard from "./components/DataCard"
import { Button, Jumbotron, Spinner } from 'reactstrap';


function App() {
  return (
    <div className="App">
      <div>

        <Jumbotron className="jumbo">

          <Jumbotron>
            <h1>Covid-19 Counter</h1>
            <h3>by Brendan Kenney</h3>
          </Jumbotron>

          <DataCard />

          <Spinner color="warning" />

        </Jumbotron>

        <a href="https://app.developer.here.com/coronavirus/"><Button className="btn" color="warning">Click here for a more in depth covid-19 tracker!</Button></a>
      </div>
    </div>
  );
}

export default App;
