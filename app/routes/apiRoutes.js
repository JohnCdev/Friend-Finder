var friendsData = require("../data/friends");

module.exports = app => {

  app.get("/api/friends", (req, res) => {
    res.json(friendsData)
  });

  app.post("/api/friends", (req, res) => {
    const newFriend = req.body
    console.log(newFriend)
    let leastDiff = 10000;
    let currentDiff = 0;
    let matchIndex;
    friendsData.forEach( (e, i) => {
      currentDiff = 0
      e.scores.forEach( s => {
        currentDiff += Math.abs(s - (newFriend.scores[i]))
      })
      if (currentDiff < leastDiff) {
        leastDiff = currentDiff;
        matchIndex = i;
      }
    });
    res.json({"match": true,"matchName":matchIndex})
  });


};
