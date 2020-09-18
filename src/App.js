import React from 'react';
import './App.css';
import Forma from './components/Forma';
import { Divider, Typography, Avatar } from 'antd';
import GlasaciTabela from './components/GlasaciTabela';
const { Title } = Typography;

function App() {

  const [glasaci, setGlasaci] = React.useState([])

  return (
    <div className="App">
      <div align='middle' justify='center'>
        <Avatar size={70} src="ikonica.jpg" />
        <Title style = {{fontFamily:"courier,arial,helvetica"}}>Izbori 2020.</Title>
      </div>
      <Divider />
      <div align='middle' justify='center'>
        <Forma fun={setGlasaci}></Forma>
      </div>
      <Divider />
      <div align='middle' justify='center'>
        <GlasaciTabela glasaci={glasaci} />
      </div>
    </div>
    
  );
}

export default App;
