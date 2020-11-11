var express = require('express');
var router = express.Router();

const messages_arr = [
   {
     text: "Hi there!",
     user: "Amando",
     added: new Date()
   },
   {
     text: "Hello World!",
     user: "Charles",
     added: new Date()
   }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { messages: messages_arr, title: 'MINI MESSAGE BOARD!', header: 'List of messages' });
});

/* Get New message page. Show the page */
router.get('/new', function(req, res, next) {
  res.render('form', { title: 'MINI MESSAGE BOARD!', header: 'New message page' });
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'MINI MESSAGE BOARD!', header: 'New message page' });
  req.pop(messages);
});

/* Post handele new message post/submission. */
router.post('/new', function(req, res, next) {
  let content = req.body;
  let text = content.text;
  let user = content.user;
  console.log("You have submmited the message. Here is the content: ");
  console.log("Body of message: " + text);
  console.log("User of message: " + user);
  // Create a message object and add a message object to the messages array
  let new_message = {
    text: text,
    user: user,
    added: new Date()
  }
  messages_arr.push(new_message);
  res.redirect('/');
});

module.exports = router;