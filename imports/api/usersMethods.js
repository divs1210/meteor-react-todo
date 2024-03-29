import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base'
import { check } from 'meteor/check';

Meteor.methods({
  'users.insert'(username, password) {
    check(username, String);
    check(password, String);

    if (this.userId) {
      throw new Meteor.Error('Already signed in.');
    }

    if (!Accounts.findUserByUsername(username)) {
      Accounts.createUser({ username, password });
    } else 
      throw new Meteor.Error('401', 'username already taken.')
  }
});
