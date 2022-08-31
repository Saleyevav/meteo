export function init() {
  const users = {};

  users["admin"] = {
    password: "admin",
    isAdmin: true,
    cityes: ["Москва", "Ашхабад"],
  };

  users["Василий"] = {
    password: "",
    isAdmin: false,
    cityes: ["Москва", "Ашхабад"],
  };

  localStorage.setItem("users", JSON.stringify(users));
}

export function getUsers() {
  const users = JSON.parse(localStorage.users);
  return users;
}

export function getUser(name) {
  const users = JSON.parse(localStorage.users);
  if (users[name]) {
    const user = {
      name: name,
      password: users[name].password,
      isAdmin: users[name].isAdmin,
      cityes: users[name].cityes,
    };
    return user;
  }
  return null;
}

export function addUser(name, password) {
  const users = JSON.parse(localStorage.users);
  users[name] = { password: password, cities: [] };
  localStorage.setItem("users", JSON.stringify(users));
}

export function changeAccess(name, isAdmin) {
  const users = JSON.parse(localStorage.users);
  users[name] = { isAdmin: isAdmin };
  localStorage.setItem("users", JSON.stringify(users));
}

export * as usersService from "./usersService";
