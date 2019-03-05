const PresidentModel = require('./model');
const UserModel = require('./userModel');

class President {
  constructor() {
    this.findPresident = (name) => {
      const person = PresidentModel.findOne({ name }, (error, data) => {
        return data;
      });
      return person;
    };
  }
}
class User {
  constructor() {
    this.findUser = (first_name) => {
      const person = UserModel.findOne({ first_name }, (error, data) => {
        return data;
      });
      return person;
    };
  }
}
module.exports = { President, User };
