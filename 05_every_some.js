function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
      //console.log("goodUsers",goodUsers);
      //console.log("submittedUsers",submittedUsers);
      let ans = submittedUsers.map((x)=>{
        return goodUsers.some(y=>{
          return x.id == y.id;
        });
      });
      return ans.every(x=>x);
    };
  }

  /*var goodUsers = [
    { id: 1 },
    { id: 2 },
    { id: 3 }
  ]*/

// `checkUsersValid` is the function you'll define
//var testAllValid = checkUsersValid(goodUsers);

/*testAllValid([
    { id: 2 },
    { id: 1 }
]);*/


  // => true

  /*testAllValid([
    { id: 2 },
    { id: 4 },
    { id: 1 }
  ])*/

  module.exports = checkUsersValid