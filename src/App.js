import React from 'react';
import './App.css';
import Forma from './components/Forma';
import { Divider, Typography, Avatar } from 'antd';
import GlasaciTabela from './components/GlasaciTabela';
import axios from 'axios';
const { Title } = Typography;

function App() {

  const [glasaci, setGlasaci] = React.useState([])

  React.useEffect(()=>{
    axios.get("http://lauda98-002-site1.ftempurl.com/api/Glasac")
    .then(res=>{console.log(res.data);setGlasaci(JSON.parse(res.data))})
    .catch(err=>console.log(err));
},[])

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
