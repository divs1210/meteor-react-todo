import React from 'react';
import { Meteor } from 'meteor/meteor';

export const Navbar = ({user, pendingTasksCount}) => {
    return (
        <header>
            <div className="app-bar">
                <div className="app-header">
                    <h1>
                        📝️ To Do List
                        {pendingTasksCount ? ` (${pendingTasksCount})` : ''}
                    </h1>
                </div>
                {user &&
                <div className="user" onClick={() => Meteor.logout()}>
                    {user.username || user.profile.name} 🚪
                </div>}
            </div>
        </header>
    );
};