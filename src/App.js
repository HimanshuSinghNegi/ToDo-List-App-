import React,{useState} from "react";
import "./App.css"
import TodoList from './TodoList';

const App =()=>{
  const [inputList,setInputList] =useState("");
  const [item,setItem] = useState([]);

  const ItemEvent = (event) =>{
   setInputList(event.target.value);

  };
  const AddItem =()=>{
    setItem((oldItems)=>{
      return [...oldItems,inputList];
    });
    setInputList('');
    };
    const deleteItem=(id)=>{
      // alert("deleted"+id);
      setItem((oldItems)=>{
        return oldItems.filter((arrElem,index)=>{
          return index !== id;
        })
      })
    };


  return <>
  <div className ="main_div">
    <div className ="center_div">
      <br/>
      <h1> ToDo List </h1>
      <br/>
      <input type ="text" value ={inputList} placeholder="Add Items" onChange={ItemEvent}/>
      <button className="add_btn" onClick={AddItem}> + </button>

      <ol>
     { item.map((itemVal,index)=>{
       return <TodoList key={index} 
       id ={index}
       text={itemVal}
       onSelect ={deleteItem}
       />
     })}
       </ol>

    </div>
    </div>
    </>

};
export default App;