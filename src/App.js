import logo from './logo.svg';
import './App.css';
import UserFrom from './Component/UserForm/UserForm';
import UserFormTable from './Component/UserFormTable/UserFormTable';
import { useState } from 'react';

function App() {
  const [tableData, setTableData] = useState([]);
  
  const addUser=(newUser)=>{
    setTableData([...tableData,newUser])
    console.log(tableData);

  }
  return (
    <div className="App">
        <UserFrom addUser={addUser}/> 
      <UserFormTable tableData={tableData} />
      </div>
  );
}

export default App;
