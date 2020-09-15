import React from 'react'
import './Todo.css';
import db from './firebase';
import {Button,List,ListItem,ListItemAvatar,ListItemText } from "@material-ui/core";

function Todo(props) {
    return (
      <List className="todo__list">
        <ListItem>
            <ListItemAvatar>

            </ListItemAvatar>
            <ListItemText primary={props.todo.todo} secondary=""></ListItemText>
        </ListItem>
        <Button onClick={event => db.collection('todos').doc(props.todo.id).delete()} >DELETE ME!</Button>
      </List>
    );
}

export default Todo
