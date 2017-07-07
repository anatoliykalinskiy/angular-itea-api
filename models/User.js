var db = require('../dbconnection');

var User = {
    
    getAllUsers: function(callback) {
        return db.query('select * from users', callback);
    },
    
    getUserById: function(id, callback) {
        return db.query('select * from users where Id=?', [id], callback);
    },
    
    addUser: function(User, callback) {
        return db.query("Insert into users values(?,?,?,?)", [User.FirstName, User.LastName, User.Email, User.Password],callback);
    },
    
    deleteUser:function(id, callback) {
        return db.query("delete from users where Id=?",[id],callback);
    },

    updateUser: function(id, User, callback) {
        return  db.query("update users set FirstName=?,LastName=?,Email=?,Password=? where Id=?", [User.FirstName, User.LastName, User.Email, User.Password],callback);
    },
    
    deleteAllUsers: function(item, callback) {
        var delarr = [];
        for(i = 0; i < item.length; i++) {
            delarr[i] = item[i].Id;
        }
        return db.query("delete from user where Id in (?)", [delarr], callback);
    }
};

module.exports = User;