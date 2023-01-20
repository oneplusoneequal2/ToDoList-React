import '../App.css';
import { useState } from "react"
import Item from "./Item"
import Input from './Input';

function App() {
  const [value, setValue] = useState("");
  const [itemList, setItemList] = useState([]);
  const [checked, setChecked] = useState(false);

  function handleChange(e) {
    setValue(e.target.value)
  }

  function handleClick(e, id) {
    setItemList((prevValue) => {
      return [...prevValue, value];
    })
    setValue("");
  }

  function deleteItem(id){
    setItemList((prevValue) => {
      return prevValue.filter((data, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div className="App">
    <h1>ToDoList</h1>
      <Input handleChange={handleChange} handleClick={handleClick} value={value} />
      <div className='center'>
        <ul>
          {itemList.map((data, index) => {
            return (
              <Item key={index} value={data} id={index} delete={deleteItem}/>
            )
          })}
        </ul>
      </div>

    </div>
  );
}

export default App;
