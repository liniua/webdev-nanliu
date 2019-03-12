module.exports=function(app) {
  // app.get('/api/website', helloworld);
  //
  // function helloworld(req, res) {
  //   console.log("Get hello website!");
  //   res.status(200).send("Hello world...");
  // }

  var websites = [
  {_id: "321", name: "Facebook", developerId: "123"},
  {_id: "432", name: "Twitter", developerId: "234"},
  {_id: "234", name: "Amazon", developerId: "345"},
  {_id: "333", name: "MyWebSite", developerId: "123"}
];

  // post
  app.post("/api/user/:userId/website", createWebsite);

  // GET
  app.get("/api/user/:userId/website", findAllWebsitesForUser);
  app.get("/api/user/:userId/website/:websiteId", findWebsiteById);

  //DELETE
  app.delete("/api/user/:userId/website/:websiteId", deleteWebsite);

  //PUT
  app.put("/api/user/:userId/website/:websiteId", updateWebsite);

  function createWebsite(req, res){
    var userId = req.params['userId'];
    var website = req.body;
    website._id = (new Date()).getTime() + "";
    website.developerId = userId;
    websites.push(website);
    var websites_temp = getWebsitesForUserId(userId);
    res.json(websites_temp);
  }

  function getWebsitesForUserId(userId) {
    var websites_res=[];

    for(var i = 0; i < websites.length; i++) {
      if (websites[i].developerId === userId) {
        websites_res.push(websites[i]);
      }
    }
    return websites_res;
  }

  function findAllWebsitesForUser(req, res) {
    var userId = req.params['userId'];
    var websites_temp = getWebsitesForUserId(userId);
    res.json(websites_temp);
  }

  function findWebsiteById(req, res){
    var userId = req.params['userId'];
    var websiteId = req.params['websiteId'];
    var website = null;
    for(var i = 0; i < websites.length; i++) {
      if (websites[i]._id === websiteId) {
        website = websites[i];
      }
    }
    res.json(website);
  }

  function updateWebsite(req, res){
    var userId = req.params['userId'];
    var websiteId = req.params['websiteId'];
    var newWebSite = req.body;
    for(var i = 0; i < websites.length; i++) {
      if (websites[i]._id === websiteId) {
        websites[i] = newWebSite;
        break;
      }
    }
    res.json(getWebsitesForUserId(userId));
  }

  function deleteWebsite(req, res) {
    var userId = req.params['userId'];
    var websiteId = req.params['websiteId'];
    for (var i = 0; i < websites.length; i++) {
      if (websites[i]._id === websiteId) {
        websites.splice(i, 1);
        var websites_temp = getWebsitesForUserId(userId);
        res.json(websites_temp);
        return;
      }
    }
  }
}
