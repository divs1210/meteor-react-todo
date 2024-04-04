import React from 'react';
import { renderWithSSR } from "meteor/communitypackages:react-router-ssr";
import { App } from '/imports/ui/App'

Meteor.startup(() => {
    renderWithSSR(<App />);
});