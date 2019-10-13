const friendsData = require("../data/friends");

module.exports = app => {

  app.get("/api/friends", (req, res) => {
    res.json(friendsData)
  });

  app.post("/api/friends", (req, res) => {
    const newFriend = req.body
    let leastDiff = 10000;
    let currentDiff = 0;
    let matchIndex;
    friendsData.forEach((e, i) => {
      currentDiff = 0
      e.scores.forEach((s, j) => {
        currentDiff += Math.abs(s - (newFriend.scores[j]))
      });
      if (currentDiff < leastDiff) {
        leastDiff = currentDiff;
        matchIndex = i;
      }
    });
    res.json({ "match": true, "matchName": matchIndex })
  });

};
