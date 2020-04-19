import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { create, edit, deleteTodo, toggleComplete } from './todoSlice';

const Todo = () => {
  const [Input, setInput] = useState('');
  const [isEditingTodo, setIsEditingTodo] = useState(-1);
  const [EditText, setEditText] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(create(Input));
    setInput('');
  };

  const handleDelete = (id) => () => {
    dispatch(deleteTodo(id));
  };
  const handleToggle = (id) => () => {
    dispatch(toggleComplete(id));
  };
  const handleEdit = (id, description) => () => {
    setIsEditingTodo(id);
    setEditText(description);
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(edit({ id: isEditingTodo, description: EditText }));
    setIsEditingTodo(-1);
    setEditText('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={Input} onChange={(e) => setInput(e.target.value)}></input>
        <button type='submit'>Create New</button>
      </form>
      {todos.map((todo) => (
        <div key={todo.id}>
          {isEditingTodo === todo.id ? (
            <form onSubmit={handleUpdate}>
              <input
                value={Input}
                onchange={(e) => setEditText(e.target.value)}
              ></input>
              <button type='submit'>Submit Edit</button>
            </form>
          ) : (
            <>
              {todo.description} {todo.isComplete ? 'DONE' : ''}
              <button onClick={handleDelete(todo.id)}>Delete</button>
              <button onClick={handleToggle(todo.id)}>Toggle</button>
              <button onClick={handleEdit(todo.id)}>Edit</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Todo;
