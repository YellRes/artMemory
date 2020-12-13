import React, {FC} from 'react';
import { HashRouter } from 'react-router-dom';
import SingerModal from './pages/singerdetail/index';
import { Button } from 'antd'


import './App.css';

function dd () {
  console.log('ddddddddddd');
  
}

const App: FC = () => (
  <HashRouter>

    <div className="App">
      <h1>more music, more than music</h1>
      <Button onClick={dd}>button</Button>
      <div className="main_container">
        <SingerModal/>
      </div>
    </div>
 

  </HashRouter>
);

export default App;
