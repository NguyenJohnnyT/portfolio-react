require('dotenv').config();

module.exports = {
  users: [
    {
    "username": "jtn_admin",
    "email": "johnnytrucnguyen@gmail.com",
    "password": process.env.admin_PW,
    "is_admin": true
    },
    {
    "username": "jtn",
    "email": "kwazie@gmail.com",
    "password": "12345678",
    "is_admin": false
    }
  ],
}