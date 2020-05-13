const db = require("../data/db-config");

module.exports = {
  find,
  findById,
  //   findSteps,
  add,
  update,
  remove,
};

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes").where({ id }).first();
}

function add(data) {
  return db("schemes").insert(data, "id");
}

function update(changes, id) {
  return db("schemes").where({ id }).update(changes);
}

function remove(id){
    return db('schemes').where({id}).del();
}
