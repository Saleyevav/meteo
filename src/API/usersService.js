export function init() {
  const users = {};

  users["admin"] = {
    password: "admin",
    isAdmin: true,
    cityes: [{name:"Воркута", id:1486910}, {name:"Ашхабад", id:162183}],
  };

  users["Василий"] = {
    password: "",
    isAdmin: false,
    cityes: [{name:"Муром", id:524294}, {name:"Вашингтон", id:5815135}],
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
