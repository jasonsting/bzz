var sql = require("mssql");
const methods = require("./crudController");
const endpoints = methods.crudController("Billing_Coverage_Government_New");

delete endpoints["list"];
delete endpoints["update"];
const Model = "Billing_Coverage_Government_New";
endpoints.list = async (req, res) => {
  try {
    const page = req.query.page || 1;

    const limit = parseInt(req.query.items) || 100;
    const skip = page * limit - limit;
    const order = req.query.order || "DESC";
    const filter = req.query.filter || "New";

    //  Query the database for a list of all results
    const { recordset } = await sql.query(
      `select * from ${Model}
      ORDER BY ${filter} ${order} OFFSET ${skip} ROWS FETCH NEXT ${limit} ROWS ONLY`
    );

    const { recordset: arr } = await sql.query(
      `SELECT COUNT(*) from  ${Model}`
    );
    const obj = arr[0];
    const count = obj[""];

    const pages = Math.ceil(count / limit);

    // Getting Pagination Object
    const pagination = { page, pages, count };
    // Getting Pagination Object
    return res.status(200).json({
      success: true,
      result: recordset,
      pagination,
      message: "Successfully found all documents",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      result: [],
      message: "Oops there is error",
      error: err,
    });
  }
};

endpoints.update = async (req, res) => {
  try {
    // Find document by id and updates with the required fields
    const values = req.body;
    const { id } = req.params;
    let valuesQuery = "";
    for (key in values) {
      if (values[key] === "null") {
        valuesQuery += key + "= NULL" + ",";
      } else {
        valuesQuery += key + "='" + values[key] + "',";
      }
    }

    valuesQuery = valuesQuery.slice(0, -1);

    await sql.query(`update ${Model} set ${valuesQuery} where id = ${id}`);

    return res.status(200).json({
      success: true,
      result: {},
      message: "we update this document by this id: " + req.params.id,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      result: null,
      message: "Oops there is an Error",
      error: err,
    });
  }
};

module.exports = endpoints;
