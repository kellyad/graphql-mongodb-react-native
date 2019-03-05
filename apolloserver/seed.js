const request = require('request-promise');
const President = require('./model');
const User = require('./userModel');

const seed = () => {
  request('https://mysafeinfo.com/api/data?list=presidents&format=json')
    .then(res => JSON.parse(res))
    .then((res) => {
      const data = res.map((r) => {
        const obj = {};
        obj.name = r.nm;
        obj.party = r.pp;
        obj.term = r.tm;
        return obj;
      });
      data.forEach((d) => {
        const president = new President(d);
        president.save((err, item) => {
          console.log('saved:', item);
        });
      });
    })
    .catch((err) => {
      console.log('err:', err);
    });
    
  request('https://reqres.in/api/users')
  .then(res => JSON.parse(res))
  .then((res) => {
    const data = res.data.map((r) => {
      const obj = {
        ...r
      };
      return obj;
    });
    data.forEach((d) => {
      const user = new User(d);
      user.save((err, item) => {
        console.log('saved:', item);
      });
    });
  })
  .catch((err) => {
    console.log('err:', err);
  });
};

module.exports = seed;
