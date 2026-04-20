const { randomUUID } = require("crypto");

const users = [];
const companies = [];

function createCompany(name, ownerId) {
  const company = {
    id: randomUUID(),
    name,
    ownerId,
  };

  companies.push(company);
  return company;
}

function createUser({ fullName, email, password, role, companyName }) {
  const user = {
    id: randomUUID(),
    fullName,
    email,
    password,
    role,
    companyName,
  };

  users.push(user);
  return user;
}

function findUserByEmail(email) {
  return users.find((user) => user.email === email);
}

function findUserById(id) {
  return users.find((user) => user.id === id);
}

module.exports = {
  users,
  companies,
  createCompany,
  createUser,
  findUserByEmail,
  findUserById,
};