import React,{useState,useEffect} from 'react';
import { Button,FormControl,Input,InputLabel } from "@material-ui/core";
import './App.css';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';
function App() {
  const [todos, setTodos] = useState([]);
  const [input,setInput] = useState('');
  //when the app loads we need to listen database and fetch the new todos as they add/removed 
  useEffect(()=>{
    //this code here runs when app.js load
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id:doc.id,todo:doc.data().todo})))
    })
  },[]);
  const addTodo = (event)=>{
    //will stop refreshingwhile submitting page gets refresh and state holds data for temporary so 
    event.preventDefault();
    db.collection('todos').add({
      todo:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
    })
    setInput('');//clear up the input after submitting
  }
  return (
    <div className="App">
      <h1>Epic Todo App!</h1>
      <form>
        <FormControl>
          <InputLabel>Write a Todo!</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>
        <Button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
        >
          Add Todo
        </Button>
      </form>
      <ul>
        {todos.map(todo => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
