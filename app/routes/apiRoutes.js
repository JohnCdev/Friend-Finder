var friendsData = require("../data/friends");

module.exports = app => {

  app.get("/api/friends", (req, res) => {
    res.json(friendsData)
  });

  app.post("/api/friends", (req, res) => {
    const newFriend = req.body
    console.log(newFriend)
    // friendsData.forEach( e => {
    //   e.scores.forEach( s => {
    //     diff = Math.abs(s - (q1.score))
    //     //do stuff
    //   })
    // });
    res.json({"match":true})
  });


};
