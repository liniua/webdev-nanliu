module.exports=function(app) {

  //Post calls
  app.post("/api/user", createUsers);

  //GET calls
  app.get("/api/user?username=username", findUserByUsername);
  app.get("/api/user?username=username&password=password", findUserByCredentials);
  app.get("/api/user/:userId", findUserById);

  //Put calls
  app.put("/api/user/:userId", updateUser);

  //delete calls
  app.delete("/api/user/:userId", deleteUser);

  // app.get('/api/hello/user', helloworld);
  // function helloworld(req, res) {
  //   console.log("Get hello api call!");
  //   res.send("Hello world! User");
  // }

  var users = [
    {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonderland"  },
    {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
    {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
    {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
  ];

  function createUsers(req, res) {
    var user = req.body;
    user._id = Math.random().toString();
    users.push(user);
    res.json(user);
    console.log("Create User");
  }

  function findUserByUsername(req, res) {

    var username = req.query["username"];
    console.log(username);
    var user = null;

    if (username){
      user = users.find(function (user) {
        return user.username === username;
      });
    }
    res.json(user);
    console.log(user);
  }

  function findUserByCredentials(req, res) {

    var username = req.query["username"];
    var password = req.query["password"];

    var user = null;

    if (username && password){
      user = users.find(function (user) {
        return user.username === username && user.password === password;
      });
    }
    console.log("find User");
    res.json(user);
  }

  function findUserById(req, res) {

    var userId = req.params["userId"];
    var user = null;

    if (userId){
      user = users.find(function (user) {
        return user._id === userId;
      });
    }
    res.json(user);
  }

  function updateUser(req, res) {

    var userId = req.params['userId'];
    var user = req.body;

    console.log(req.body);
    console.log("update user: " + userId + " " + user.firstName + " " + user.lastName);

    for(var i = 0; i < users.length; i++) {
      if (users[i]._id === userId) {
        users[i].firstName = user.firstName;
        users[i].lastName = user.lastName;

        res.status(200).send(user);
        return;
      }
    }
    res.status(404).send("not found!");
  }

  function deleteUser(req, res) {

    var userId = req.params['userId'];
    var user = null;
    for (const i in users) {
      if (users[i]._id === userId) {
        user = users[i];
        const j = +i;
        users.splice(j, 1);
      }
    }
    res.json(user);
  }

}
