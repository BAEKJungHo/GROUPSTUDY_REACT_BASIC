import React from 'react';
import './Todo.css';

const Todo = ({ text }) => {
    return (
        <div className="todo-item">
            <div className="remove">
                &items;
            </div>
            <div className="todo-text">
                <div> { text } </div>
            </div>
        </div>
    );
};

export default Todo;