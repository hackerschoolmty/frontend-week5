import fireDatabase from './firebase';
import shortId from 'shortid';

const users = fireDatabase.ref('users');
const messages = fireDatabase.ref('messages');

function setNewUser(username) {
  if (!userExists(username)) {
    fireDatabase.ref(`users/${username}`).set({
      username: username
    });
  }
}

function userExists(username) {
  users.once('value', (snapshot) => (snapshot.hasChild(username)));
}

function getUser(userId) {
  users.once('value', (snapshot) => (snapshot.hasChild(username)));
}

function updateUser() {

}

function sendMessage() {

}

function retrieveMessage() {

}

function deleteChat() {

}

function createNewChat() {

}
