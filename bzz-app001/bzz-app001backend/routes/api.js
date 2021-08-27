const express = require("express");
const { catchErrors } = require("../handlers/errorHandlers");

const router = express.Router();

// const adminController = require("../controllers/adminController");
const wq5508Controller = require("../controllers/wq5508Controller");
const irbController = require("../controllers/irbController");
const coverageGovermentController = require("../controllers/coverageGovermentController");

//_______________________________ Admin management_______________________________

// router.route("/admin/create").post(catchErrors(adminController.create));
// router.route("/admin/read/:id").get(catchErrors(adminController.read));
// router.route("/admin/update/:id").patch(catchErrors(adminController.update));
// router.route("/admin/delete/:id").delete(catchErrors(adminController.delete));
// router.route("/admin/search").get(catchErrors(adminController.search));
// router.route("/admin/list").get(catchErrors(adminController.list));

// router
//   .route("/admin/password-update/:id")
//   .patch(catchErrors(adminController.updatePassword));
// //list of admins ends here

//_____________________________________ API for wq5508 __________________________
// router.route("/wq5508/create").post(catchErrors(wq5508Controller.create));
// router.route("/wq5508/read/:id").get(catchErrors(wq5508Controller.read));
router.route("/wq5508/update/:id").patch(catchErrors(wq5508Controller.update));
// router.route("/wq5508/delete/:id").delete(catchErrors(wq5508Controller.delete));
// router.route("/wq5508/search").get(catchErrors(wq5508Controller.search));
router.route("/wq5508/list").get(catchErrors(wq5508Controller.list));

//_____________________________________ API for irbs ___________________________
// router.route("/irb/create").post(catchErrors(irbController.create));
// router.route("/irb/read/:id").get(catchErrors(irbController.read));
router.route("/irb/update/:id").patch(catchErrors(irbController.update));
// router.route("/irb/delete/:id").delete(catchErrors(irbController.delete));
// router.route("/irb/search").get(catchErrors(irbController.search));
router.route("/irb/list").get(catchErrors(irbController.list));

//_____________________________________ API for coverageGoverments ___________________________
// router
//   .route("/coverageGoverment/create")
//   .post(catchErrors(coverageGovermentController.create));
// router
//   .route("/coverageGoverment/read/:id")
//   .get(catchErrors(coverageGovermentController.read));
router
  .route("/coverageGoverment/update/:id")
  .patch(catchErrors(coverageGovermentController.update));
// router
//   .route("/coverageGoverment/delete/:id")
//   .delete(catchErrors(coverageGovermentController.delete));
// router
//   .route("/coverageGoverment/search")
//   .get(catchErrors(coverageGovermentController.search));
router
  .route("/coverageGoverment/list")
  .get(catchErrors(coverageGovermentController.list));

module.exports = router;
