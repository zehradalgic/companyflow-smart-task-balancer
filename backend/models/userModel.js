const users = [];
const companies = [];

let nextUserId = 1;
let nextCompanyId = 1;

function createCompany(name) {
  const company = {
    id: nextCompanyId++,
    name,
  };

  companies.push(company);
  return company;
}

function createUser({ fullName, email, password, role, companyId }) {
  const user = {
    id: nextUserId++,
    fullName,
    email,
    password,
    role,
    companyId,
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