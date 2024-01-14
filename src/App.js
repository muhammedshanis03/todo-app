import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Todo from './components/Todo';

function App() {

  const[todo,setTodo] = useState('HI')
  const [todoList,setTodoList] = useState ([])
  const heandleChange = (e) => {
    setTodo(e.target.value)

  }

  const addNewTodo = () => {

    setTodoList([...todoList,{text:todo, done:false,id:Date.now()}])

  }

  const handleDone = (index) => {
    const clonedcopy = JSON.parse(JSON.stringify(todoList))
    clonedcopy[index].done=true
    setTodoList(clonedcopy)

  }

  const handleDelete = (id) => {
    const newData = todoList.filter((ele) => ele.id !== id);
    setTodoList(newData);
  };



  return (
    <>
    <div className='container'>
      <div className='todo-box'>
        <div className='Todo-list-container'>
        <input type="text" placeholder='Add Your ToDo Here' value={todo} onChange={heandleChange} />
        <span onClick={addNewTodo}> <Button label={'Ok'}/> </span>


        </div>

    {todoList.map((element,index) => 
    <div className='Todo-list-container'>

    <Todo data={element} slno = {index+1}/>
    {element.done?null :<span onClick={()=>{handleDone(index)}}> <Button label = {'Done'} color = {'green'}/></span>}
    <span onClick={()=>handleDelete(element.id)}><Button label = {'Delete'} color = {'red'}/></span>


    </div>
    )}
     
     
      </div>

    </div>
      
    </>
  );
}

export default App;
