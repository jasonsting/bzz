const app = require("./app");

var sql = require("mssql");

// Make sure we are running node 10.0+
const [major, minor] = process.versions.node.split(".").map(parseFloat);
if (major < 10 || (major === 10 && minor <= 0)) {
  console.log(
    "Please go to nodejs.org and download version 10 or greater. 👌\n "
  );
  process.exit();
}

// import environmental variables from our variables.env file
require("dotenv").config({ path: ".variables.env" });

let dbConfig = {
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  port: 1433,
  options: { encrypt: false },
};

async function connectToDatabase() {
  console.log(`Checking database connection...`);
  try {
    const res = await sql.connect(dbConfig);
    console.log(res)
    console.log("Database connection OK!");
  } catch (error) {
    console.log("Unable to connect to the database:");
    console.log(dbConfig)
    console.log(error);
    process.exit(1);
  }
}
// Start our app!

async function init() {
  console.log("Waiting 1 minute for MSSQL DB to initialize")
  await new Promise(resolve => setTimeout(resolve, 60000));
  await connectToDatabase();

  app.set("port", process.env.PORT || 80);
  const server = app.listen(app.get("port"), () => {
    console.log(
      `Starting Sequelize + Express → On PORT : ${server.address().port}`
    );
  });
}

init();
