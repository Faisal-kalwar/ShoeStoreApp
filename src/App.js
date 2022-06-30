import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Header from './components/Sections/Header'
import Section from './components/Sections/Section'
import {DataProvider} from './components/Sections/context'


class App extends React.Component{
  render(){
    return(
      <DataProvider>
        <div className="app">
          <Router>
            <Header />
            <Section />
          </Router>
        </div>
      </DataProvider>
    );
  }
}

export default App;