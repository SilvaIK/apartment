import './App.css';
import React, {Component} from 'react'; 
import Com from './components/Com';
import Sidebar from './components/sidebar';
import Button from './components/Button';
import TopBar from './components/topbar';
import Second from './components/second';
import SecButton from './components/SecButton';


class App extends Component{
  render(){
    return (
      <main>
        <div>
          <TopBar/>
        </div>
      <div className="App">
        <Sidebar />

        <Com/>
        <Button/>

        {/* <Second/>
        <SecButton/> */}


      </div>
      </main>
    );
    
  }

}

export default App;
