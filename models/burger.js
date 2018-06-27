const orm = require(`../config/orm.js`);

const burger = {
  select : (cb) => {
    orm.select(`burgers`,(res) => {
      cb(res);
    });
  },
  insert : (burgerCol,burgerVal,cb) => {
    orm.insert(`burgers`,burgerCol,burgerVal,(res) => {
      cb(res);
    });
  },
  update : (objColVals,condition,cb) => {
    orm.update(`burgers`,objColVals,condition,(res) => {
      cb(res);
    });
  }
};

module.exports = burger;