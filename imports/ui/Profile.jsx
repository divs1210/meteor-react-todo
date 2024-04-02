import React from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { Meteor } from 'meteor/meteor';

export const Profile = ({ user }) => {
  const { userId } = useParams();
  const navigate = useNavigate();

  return (
    <div className='main'>
        <ul className='tasks'>
            <li>
                URL param: {userId}
            </li>
            <li>
                Username: {user.username}
            </li>
            <li>
                <a onClick={() => Meteor.logout(err => navigate('/'))}>
                    Logout
                </a>
            </li>
        </ul>
    </div>
  );
};