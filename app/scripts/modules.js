module.exports.search = function(name , pswd)
{
   for(var i=0 ; i<accounts.users.length; i++){
        if(name === user.users[i].name && pswd === user.users[i].password){
        return true
      }
   }
}