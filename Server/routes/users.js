var express = require("express");
var router = express.Router();
const DB = require("../modulesdB/user");
const { Shopping } = require("../modulesdB/user");

/* GET users listing. */
router.get("/", function(req, res, next) {
  var sessionData = req.session;
  console.log(sessionData);
  res.send("respond with a resource");
});

router.get("/login", function(req, res, next) {
  res.send("login", { title: "login" });
});

router.post("/login", (req, res, next) => {
  console.log(req.body.userEmail);
});

getEmployeeByID = (req, res) => {
  DB.Shopping.findOne({ user_id: req.body.id }).then(user => {
    if (!user) {
      return res.status(404).send();
    }
  });
};

router.get("/giveshoppingItem", (req, res) => {
  DB.Shopping.find(
    { $and: [{ user_id: req.params._id }, { wishListCecked: false }] },
    (error, result) => {
      if (error) {
        res.send("error usually from id");
      } else {
        res.send(result);
      }
    }
  );
});

///////////////////////
// user registration //
///////////////////////
router.post("/insert", (req, res) => {
  const { body } = req;
  const { userName, userPassword, userEmail } = body;

  const userEmails = userEmail.toLowerCase();

  const newUser = new DB.User({
    userName: userName,
    userEmail: userEmail.toLowerCase(),
    userPassword: new DB.User().generateHashCode(userPassword)
  });

  DB.User.findOne({ userEmail: userEmails }, (error, previousUser) => {
    if (error) {
      return res.send({
        messege: "server error"
      });
    }
    if (previousUser) {
      return res.send({ messege: "error : user already exist" });
    } else {
      newUser.save((error, user) => {
        if (error) {
          return res.send({
            messege: "error : server error"
          });
        } else return res.send(user);
      });

      // save new user
    }
  });
});

//////////////////////
/////// Log In ///////
//////////////////////

router.post("/loginInsert", (req, res) => {
  var userEmailss = req.body.userEmail.toLowerCase();
  const uu = new DB.User();
  DB.User.findOne({ userEmail: userEmailss }, (error, user) => {
    if (error) {
      res.send({ messege: "fails server" });
    } else if (user) {
      res.send(user);
      console.log(user._id);
    } else {
      res.send({ messege: "error" });
    }
  });

  var sessionData = req._id;

  const { userPassword, userEmail } = req.body;

  if (!userPassword) {
    return res.send({ messege: "password error" });
  }
  if (!userEmail) {
    return res.send({ messege: "Email error" });
  }

  const userEmails = req.body.userEmail.toLowerCase();

  DB.User.findOne({ userEmail: userEmails }, (error, previousUser) => {
    if (error) res.send({ messege: "error server" });

    if (!previousUser) res.send({ messege: "no user found" });
    if (!previousUser.validPassword(userP)) {
      res.send({ messege: "error Password" });
    }

    res.send(previousUser);

    res.send(previousUser._id);
  });
});

/////////////////////////////////////////
///////// Add Item in shoppingList //////
/////////////////////////////////////////

router.post("/addShoppingList", (req, res) => {
  const { body } = req;
  const { title, price, catgegory } = body;

  const newItem = new DB.Shopping();

  const prices = body.price;

  newItem.catgegory = catgegory;

  newItem.price = price;
  newItem.title = title.toLowerCase();
  newItem.wishListCecked = false;
  const titles = body.title.toLowerCase();
  newItem.user_id = req.body.id;

  // check if Item found

  DB.Shopping.find({ title: titles }, (error, Item) => {
    if (error) {
      return res.send("server error");
    } else if (Item) {
      console.log(prices);
      console.log(Item.price);

      if (Item.price != prices) {
        newItem.save((error, obj) => {
          if (error) {
            return res.send("server error");
          } else {
            console.log("hhhhhhhh");

            res.send("Itemmmmmm saved");
          }
        });
      } else {
        return res.send("Item already exist");
      }
    } else {
      newItem.save((error, obj) => {
        if (error) {
          return res.send("server error");
        } else {
          res.send("Item saveddddd");
        }
      });
    }

    //else {return res.send('Item already saved')}
  });

  // const Ti = await DB.Shopping.findOne({ title: titles });
  // if(Ti)
  // {
  //   const Shop2 = await DB.Shopping.findOne({ price: prices });
  //   if(Shop2) {
  //         if (Shop2.price === prices) { return res.send({ messege: 'Item already exist' }); }
  //     } else
  //      {
  //        DB.newItem.save((error, Item) => {
  //       if (error) {
  //         return res.send({
  //           Succes: false,
  //           messege: 'Server Error'
  //         });
  //       } else if (!Item) {
  //         return res.send({ messege: 'Item Added' });
  //       } else {
  //         return res.send({ messege: 'Invalid' });
  //       }
  //     }
  //     )

  //     }

  // }
});

//////////////////////////////////
////ddelete from shoping list/////
//////////////////////////////////

router.post("/deleteItem", (req, res) => {
  DB.Shopping.remove({ _id: req.body._id }, (error, result) => {
    if (error) {
      res.send("error");
    } else {
      res.send("deleted");
    }
  });
}); //end delete post method

router.post("/deleteWishlist", (req, res) => {
  console.log(req.body);
  DB.wishList.remove(req.body, (error, result) => {
    if (error) {
      res.send("error");
    } else {
      res.send("deleted");
    }
  });
}); //end delete post method

////////////////////////////////
//////// Add in wishList////////
////////////////////////////////

router.post("/addWishList", (req, res) => {
  const { body } = req;
  const { title, price, catgegory } = body;

  const newItem = new DB.wishList();

  const prices = body.price;

  newItem.catgegory = catgegory;

  newItem.price = price;
  newItem.title = title.toLowerCase();
  newItem.wishListCecked = true; //// difference here
  newItem.user_id = req.body._id;
  const titles = body.title.toLowerCase();

  // check if Item found

  DB.wishList.findOne({ title: titles }, (error, Item) => {
    if (error) {
      return res.send("server error");
    } else if (Item) {
      if (Item.price != prices) {
        newItem.save((error, obj) => {
          if (error) {
            return res.send("server error");
          } else {
            res.send("Item saved");
          }
        });
      } else {
        return res.send("Item already saved");
      }
    } else {
      newItem.save((error, obj) => {
        if (error) {
          return res.send("server error");
        } else {
          res.send("Item saved");
        }
      });
    }
  }); //end find one
});

router.get("/giveWishList", (req, res) => {
  DB.wishList.find({ user_id: req.params._id }, (error, result) => {
    if (error) {
      res.send("error usually from id");
    } else {
      res.send(result);
    }
  });
});

/////logout ///////
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/").send({ messege: "directed" });
});

module.exports = router;
