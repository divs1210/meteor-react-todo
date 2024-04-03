import React from 'react';
import { Helmet } from "react-helmet";
import { Task } from './Task';
import { TaskForm } from './TaskForm';
import { Meteor } from 'meteor/meteor';

const toggleChecked = ({ _id, isChecked }) =>
  Meteor.call('tasks.setIsChecked', _id, !isChecked);

const deleteTask = ({ _id }) => 
  Meteor.call('tasks.remove', _id);

export const Tasks = ({tasks, isLoading, hideCompleted, setHideCompleted}) => {
  return (
    <div className="main">
        <Helmet>
          <title>Tasks</title> 
        </Helmet>
          
        <TaskForm />

        <div className="filter">
            <button onClick={() => setHideCompleted(!hideCompleted)}>
                {hideCompleted ? 'Show All' : 'Hide Completed'}
            </button>
        </div>

        {isLoading && <div className="loading">loading...</div>}

        <ul className="tasks">
        {tasks.map(task => (
            <Task
                key={task._id}
                task={task}
                onCheckboxClick={toggleChecked}
                onDeleteClick={deleteTask}
            />
        ))}
        </ul>
    </div>
  );
};
