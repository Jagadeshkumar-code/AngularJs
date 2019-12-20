var appRouter = function(app) {
    app.get("/", function(req, res) {
        res.send("Hello World");
    });

    var customers = [];

    app.get("/account", function(req, res) {
        var accountMock = {
            "username": "auser",
            "password": "1234",
            "gmail": "abcd@gmail.com",
            "mobileno": "9560012345",
        };
        res.header("Access-Control-Allow-Origin", "*");
        res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
        res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    
        if(!req.query.username || !req.query.password) {
            return res.status(400).send({"status": "error", "message": "missing username or password"});
        } else if(req.query.username != accountMock.username) {
            return res.status(400).send({"status": "error", "message": "wrong username"});
        } else if(req.query.password != accountMock.password) {
            return res.status(400).send({"status": "error", "message": "wrong password"});
        } else {
            return res.send(accountMock);
        }
    });

    app.post("/api/customers/save", function(req,res){
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        console.log('Post a Customer: ' + JSON.stringify(req.body));
        var customer = {};
        customer.firstname = req.body.firstname;
        customer.lastname = req.body.lastname;
        customers.push(customer);
        
        return res.json((customer));
      });

      app.get("/api/customers/all", function(req,res){
        res.header("Access-Control-Allow-Origin", "*");
        res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
        res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        return res.send(customers);
      });
}

module.exports = appRouter;