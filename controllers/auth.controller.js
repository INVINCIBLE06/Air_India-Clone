const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const db = require('../models');
const config = require('../config/auth.config');

const User = db.user;