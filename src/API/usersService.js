export function init() {
  const users = {};

  users["admin"] = {
    password: "admin",
    isAdmin: true,
    cityList: [{name:"Воркута", id:1486910}, {name:"Ашхабад", id:162183}],
  };

  users["user"] = {
    password: "",
    isAdmin: false,
    cityList: [{name:"Муром", id:524294}, {name:"Вашингтон", id:5815135}],
  };

  localStorage.setItem("users", JSON.stringify(users));
}

export function getUsers() {
  const users = JSON.parse(localStorage.users);
  return users;
}

export function getUserData(name) {
  const users = JSON.parse(localStorage.users);
  if (users[name]) {
    const user = {
      name: name,
      password: users[name].password,
      isAdmin: users[name].isAdmin,
      cityList: users[name].cityList,
    };
    return user;
  }
  return null;
}

export function addUser(name, password) {
  const users = JSON.parse(localStorage.users);
  users[name] = { password: password, cityList: [] };
  localStorage.setItem("users", JSON.stringify(users));
}

export function addCity(name, city){
  console.log('name: ' +name+ ' addCity: '+ city );
}

export function changeAccess(name, isAdmin) {
  const users = JSON.parse(localStorage.users);
  users[name] = { isAdmin: isAdmin };
  localStorage.setItem("users", JSON.stringify(users));
}

export * as usersService from "./usersService";
