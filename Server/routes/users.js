var express = require('express');
var router = express.Router();
const DB = require('../modulesdB/user');
const { Shopping } = require('../modulesdB/user');



/* GET users listing. */
router.get('/', function (req, res, next) {
  var sessionData = req.session;
  console.log(sessionData);
  res.send('respond with a resource');
});

router.get('/login', function (req, res, next) {
  res.send('login', { title: 'login' })
});

router.post('/login', (req, res, next) => {
  console.log(req.body.userEmail);
});

///////// git user by id ////////
/////////////////////////////////


getEmployeeByID  = (req, res) => {

        
  
  DB.Shopping.findOne({user_id : req.body.id}).then((user) => {
  
  if (!user) {
  
  return  res.status(404).send()
  
  }         
  
  res.send(user);
  
  }).catch((error) => {  /////question
  
  res.status(500).send(error)
  
  })    
  }
router.get('/shopping',getEmployeeByID);




///////////////////////
// user registration //
///////////////////////
router.post('/insert', (req, res) => {
  const { body } = req
  const { userName, userPassword, userEmail } = body;

  const userEmails = userEmail.toLowerCase();

  const newUser = new DB.User();
  newUser.userName = userName;
  newUser.userEmail = userEmail.toLowerCase();
  newUser.userPassword = userPassword;



  DB.User.findOne({ userEmail: userEmails }, (error, previousUser) => {
    if (error) {
      return res.send(
        {
          sucsses: false, messege: 'server error'
        }
      )
    }
    if (previousUser) {

      return res.send({ sucsses: false, messege: 'error : user already exist' })
    }
    else {

      newUser.save((error, user) => {
        if (error) {
          return res.send(
            {
              sucsses: false, messege: 'error : server error'
            })

        } else
          return res.send({ sucsses: true, messege: 'signed up' });

      }
      );
      // save new user
    }

  });




});



//////////////////////
/////// Log In ///////
//////////////////////





router.post('/loginInsert', (req, res) => {


  ////////////////////////////////

  var userEmailss = req.body.userEmail.toLowerCase();
  const uu = new DB.User();
  DB.User.findOne({ userEmail: userEmailss }, (error, user) => {
    if (error) {
      res.send('fffffffails server')
    } else if (user) {
      console.log(user._id);
    } else { res.send('error') }
  });













  ///////////////////////////////

  var sessionData = req._id


  const { userPassword, userEmail } = req.body;


  if (!userPassword) {
    return res.send(
      { messege: 'password error' }
    )
  }
  if (!userEmail) {
    return res.send(
      { messege: 'Email error' }
    )
  }

  const userEmails = req.body.userEmail.toLowerCase();

  DB.User.findOne({ userEmail: userEmails }, (error, previousUser) => {

    if (error) {
      return res.send({ messege: 'server error' });
    } else
      if (previousUser)
        res.send(previousUser);
      else {
        return res.send({
          messege: " user not found"
        });
      }




      res.redirect('/shopping/' + previousUser._id);


  })
})
/////////////////////////
///////// Add Item //////
/////////////////////////

router.post('/WishList', async (req, res) => {
  const { body } = req;
  const { title, price, catgegory } = body;

  // if (!catgegory) {
  //   return res.send(
  //     { messege: 'password error' }
  //   )
  // }
  // if (!price) {
  //   return res.send(
  //     { messege: 'Email error' }
  //   )
  // }
  // if (!title) {
  //   return res.send(
  //     { messege: 'Email error' }
  //   )
  // }

  const newItem = new DB.Shopping();

  const prices = body.price;

  newItem.catgegory = catgegory;

  newItem.price = price;
  newItem.title = title.toLowerCase();
  const titles = body.title.toLowerCase();
  newItem.user_id = req.body.id

  // check if Item found


  DB.Shopping.findOne({ title: titles }, (error, Item) => {
    if (error) {
      return res.send('server error');
    } else if (Item) {
      if (Item.price != prices) {

        newItem.save((error, obj) => {
          if (error) {
            return res.send('server error');
          } else {
            res.send('Item saved');
          }
        })
      } else { return res.send('Item already saved') }

    } else {
      newItem.save((error, obj) => {
        if (error) {
          return res.send('server error');
        } else {
          res.send('Item saved');
        }
      })
    }

    //else {return res.send('Item already saved')}
  })

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




}
)






module.exports = router;
