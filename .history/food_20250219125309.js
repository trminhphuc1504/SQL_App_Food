import dotenv from "dotenv";

require('dotenv').config();

const express = require('express')
const my sql = require('mysql2')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT