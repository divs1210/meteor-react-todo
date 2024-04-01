import React from 'react';
import { Base } from './Base';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';

export const App = () => {
  const user = useTracker(() => Meteor.user());
  return <Base user={user}/>
};