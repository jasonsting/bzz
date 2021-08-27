const crudMethods = require("./crudMethods");

exports.crudController = (modelName) => {
  let methods = {};
  methods.list = async (req, res) => {
    crudMethods.list(modelName, req, res);
  };
  methods.update = async (req, res) => {
    crudMethods.update(modelName, req, res);
  };
  // methods.create = async (req, res) => {
  //   crudMethods.create(modelName, req, res);
  // };

  // methods.read = async (req, res) => {
  //   crudMethods.read(modelName, req, res);
  // };
  // methods.delete = async (req, res) => {
  //   crudMethods.delete(modelName, req, res);
  // };

  // methods.search = async (req, res) => {
  //   crudMethods.search(modelName, req, res);
  // };

  return methods;
};
