import React from 'react';
import { Link } from "react-router-dom";

export const Navbar = ({user, pendingTasksCount}) => {
    return (
        <header>
            <div className="app-bar">
                <div className="app-header">
                    <Link to='/'>
                        <h1>
                            📝️ To Do List
                            {pendingTasksCount ? ` (${pendingTasksCount})` : ''}
                        </h1>
                    </Link>
                </div>
                {user &&
                    <div className="user">
                        <Link to={`/users/${user._id}`}>
                            {user.username || user.profile.name} 🚪
                        </Link>
                    </div>}
            </div>
        </header>
    );
};