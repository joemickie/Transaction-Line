const express = require('express');
const router = express.Router();
const adminAuth = require('../middlewares/adminAuth');

// Require controller modules
const create_admin = require('../controllers/admin/create_admin').create_admin;
const create_user = require('../controllers/admin/create_user').add_user;
const delete_user = require('../controllers/admin/delete_user').delete_user;
const disable_account = require('../controllers/admin/disable_account').disable_account;
const enable_account = require('../controllers/admin/enable_account').enable_account;
const get_all_admins = require('../controllers/admin/get_all_admins').get_admin_details;
const login_admin = require('../controllers/admin/login_admin').admin_login;
const reverse_transfer = require('../controllers/admin/reverse_transfer').reverse_transfer;
const view_all_users = require('../controllers/admin/view_all_users').view_all_users;

// create a new admin and login routes
router.post('/create_admin', create_admin);
router.post('/admin_login', login_admin);

// protected admin routes
router.get('/get_admin_details', adminAuth, get_all_admins );
router.get('/view_all_users', adminAuth, view_all_users);
router.post('/add_user', adminAuth, create_user );
router.post('/reverse_transfer', adminAuth, reverse_transfer );
router.patch('/disable_account', adminAuth, disable_account );
router.patch('/enable_account', adminAuth, enable_account );
router.delete('/delete_user', adminAuth, delete_user );

module.exports = router;