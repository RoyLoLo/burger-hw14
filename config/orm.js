const conn = require(`./connection.js`);

pQM = (numb) => {
  let arr = [];
  for (i=0; i< numb;i++){
    arr.push(`?`);
  };
  return arr.toString();
}

oTS = (ob) => {
  let arr = [];
  for (var key in ob){
    let value = ob[key];

    if (Object.hasOwnProperty.call(ob,key)){
      if (typeof value === `string` && value.indexOf(` `) >= 0){
        value = `'` + value + `'`
      }
    }
    arr.push(`${key}=${value}`);
  }
  return arr.toString;
}


const orm = {
  select : (burgerTab,cb) => {
    let qS = `SELECT * FROM ??`;
    conn.query(qS,[burgerTab],(err,result) => {
      if (err){
        throw err;
      }
      cb(result);
    });
  },
  insert : (burgerTab,burgerCol,burgerVal,cb) => {
    let qS = `INSERT INTO ${burgerTab}`;
    
    qS += ` (`;
    qS += burgerCol.toString();
    qS += `) `;
    qS += `VALUES (`;
    qS += pQM(burgerVal.length);
    
    conn.query(qS,burgerVal,(err,result) => {
      if (err){
        throw err;
      }
      cb(result);
    });
  },
  update : (burgerTab,objColVals,condition,cb) => {
    let qS = `UPDATE ${burgerTab}`;
    
    qS += `SET `;
    qS += oTS(objColVals);
    qS += ` WHERE `;
    qS += condition;
    
    conn.query(qS, (err,result) => {
      if (err) {
        throw err;
      }
      cb(result);
  });
  }
};//end of orm{}

module.exports = orm;