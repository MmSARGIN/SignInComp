const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'melih',
  port: 5432,
});


const getUsers = () => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM users')
      .then(res => {
        console.log(res.rows)
        resolve(res.rows);
      })
      .catch(e => console.error(e.stack))
    }) 
  }
  const getUsersNames = () => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT name FROM users')
      .then(res => {
        console.log(res.rows)
        resolve(res.rows);
      })
      .catch(e => console.error(e.stack))
    }) 
  }
  const getUsersLastName = () => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT lastname FROM users')
      .then(res => {
        console.log(res.rows)
        resolve(res.rows);
      })
      .catch(e => console.error(e.stack))
    }) 
  }
  const getUsersEmails = () => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT email FROM users')
      .then(res => {
        console.log(res.rows)
        resolve(res.rows);
      })
      .catch(e => console.error(e.stack))
    }) 
  }
  const getUsersPass = () => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT password FROM users')
      .then(res => {
        console.log(res.rows)
        resolve(res.rows);
      })
      .catch(e => console.error(e.stack))
    }) 
  }
  const createUser = (body) => {
  
    return new Promise(function(resolve, reject) {
      const { firstName, email , lastName, password } = body
      
      pool.query('INSERT INTO users (name, email, lastname, password) VALUES ($1, $2, $3, $4) RETURNING *', [firstName, email, lastName, password])
      .then(res =>  console.log('kanka' , res))
      .catch(e => console.error(e.stack))
      resolve(`User created `)
    })
  }
  const deleteUser = (id) => {
    return new Promise(function(resolve, reject) {
      
      const body = parseInt(id);
      console.log(id);
      
      pool.query('DELETE FROM users WHERE id = $1', [body])
      .then(res => console.log(res))
      .catch(e => console.error(e.stack))
      resolve(`User deleted with ID: ${body}`)
    })
  }
  const takeData = () => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM users')
      .then(res => {
        console.log(res.rows)
        resolve(res.rows);
      })
      .catch(e => console.error(e.stack))
    }) 
  }
  module.exports = {
    getUsers,
    createUser,
    deleteUser,
    takeData,
    getUsersNames,
    getUsersLastName,
    getUsersEmails,
    getUsersPass
  }
