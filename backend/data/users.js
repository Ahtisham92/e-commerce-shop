import bcrypt from "bcryptjs"

const user = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
  },
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: password: bcrypt.hashSync('123456', 10)
  },
  {
    name: 'Jane Jin',
    email: 'jane@example.com',
    password: password: bcrypt.hashSync('123456', 10)
  },
]


export default users