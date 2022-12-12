export const userArray = ['Dim', 'Nata', 'Val', 'Kat']

export const userObj = {
    '1': "Alex",
    '2': "Rata",
    '3': "igor"
}

type UserType = {
    [key: string]: {id: number, name: string}
}

export const users:UserType = {
    '101': {id: 101, name: "Alex"},
    '235101': {id: 235101, name: "Igor"},
    '1': {id: 1, name: "Dima"},
    '201': {id: 201, name: "Petr"},
}

//users[201]
var user = {id: 100500, name: "Igor"}
users[user.id] = user;
delete users[user.id]
users[user.id].name = 'Victor'

export const usersArray = [
    {id: 101, namex: "Alex"},
    {id: 235101, name: "Igor"},
    {id: 1, name: "Dima"},
    {id: 201, name: "Petr"},
]


//usersArray.find(u => u.id === 201)
//userArray.push = [...userArray.filter(), user]
//var users = usersArray.filter(u => u.id !== user.id)

