var db = require('../../config/database');
var Task = {

    getAllTasks: function (callback) {

        return db.query("Select * from todo", callback);

    },
    getTaskById: function (id, callback) {

        return db.query("select * from todo where todo_id=?", [id], callback);
    },
    addTask: function (Task, callback) {       
        return db.query("Insert into todo(todo_desc) values(?)", [ Task.Title], callback);
    },
    deleteTask: function (id, callback) {
        return db.query("delete from todo where todo_id=?", [id], callback);
    },
    updateTask: function (id, Task, callback) {
        return db.query("update todo set todo_desc=?,status=? where todo_id=?", [Task.Title, Task.Status, id], callback);
    }

};
module.exports = Task;