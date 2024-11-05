let UserReg = require('./UserRegistration');
let userInfo = require('./userInfo');

let userReg = new UserReg(userInfo);
userReg.registerUser();
