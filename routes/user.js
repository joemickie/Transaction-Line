const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");

// User Model
const user_deposit = require("../controllers/user/user_deposit").deposit;
const user_withdraw = require("../controllers/user/user_withdrawal").withdrawal;
const user_transfer = require("../controllers/user/user_transfer").transfer;
const user_transaction = require("../controllers/user/user_transactions").transactions;
const user_login = require("../controllers/user/user_login").login;

// user route handler
router.post("/login", user_login);

// protected routes
router.post("/deposit/", auth, user_deposit);
router.post("/withdrawal", auth, user_withdraw);
router.post("/transfer/", auth, user_transfer);
router.get("/transactions", auth, user_transaction);

module.exports = router;
