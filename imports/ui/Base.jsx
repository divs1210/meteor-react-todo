import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { Tasks } from './Tasks';
import { Login } from './Login';
import { useTracker } from 'meteor/react-meteor-data';
import { TasksCollection } from '/imports/db/TasksCollection';

export const Base = ({user}) => {
  const [hideCompleted, setHideCompleted] = useState(false);
  const hideCompletedFilter = { isChecked: { $ne: true } };
  const userFilter = user ? { userId: user._id } : {};
  const pendingOnlyFilter = { ...hideCompletedFilter, ...userFilter };
  const { tasks, pendingTasksCount, isLoading } = useTracker(() => {
    const noDataAvailable = { tasks: [], pendingTasksCount: 0 };
    if (!user) {
      return noDataAvailable;
    }
    
    const handler = Meteor.subscribe('tasks');
    if (!handler.ready()) {
      return { ...noDataAvailable, isLoading: true };
    }

    const tasks = TasksCollection.find(
      hideCompleted ? pendingOnlyFilter : userFilter,
      {
        sort: { createdAt: -1 },
      }
    ).fetch();
    const pendingTasksCount = TasksCollection.find(pendingOnlyFilter).count();
    return { tasks, pendingTasksCount };
  });

  return (
      <div className="app">
        <Navbar user={user} pendingTasksCount={pendingTasksCount} />
        {user? 
          <Tasks 
            tasks={tasks} 
            isLoading={isLoading}
            hideCompleted={hideCompleted}
            setHideCompleted={setHideCompleted} /> 
          : <Login />}
      </div>
  );
};