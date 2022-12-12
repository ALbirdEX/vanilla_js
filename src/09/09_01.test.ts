function incAge(u: useType) {
    u.age++; //user.age = user.age +1
}

export type useType = {
    name: string
    age: number
    address: { title: string }
}

test("reference type test", () => {
    let user = {
        name: "Alex",
        age: 34,
        address: {
            title: "Mogileva"
        }
    }
    incAge(user)

    expect(user.age).toBe(35)

    const superman = user
    superman.age = 1000

    expect(user.age).toBe(1000)
})

test("array reference type test", () => {
    let users = [
        {
            name: "Alex",
            age: 34
        },
        {
            name: "Igor",
            age: 34
        }
    ]

    let admin = users
    admin.push({name: "Melkai", age: 10})

    expect(users[2]).toEqual({name: "Melkai", age: 10})

})

test("value type test", () => {
    let usersCount = 100;

    let adminsCout = usersCount

    adminsCout = adminsCout + 1

    expect(adminsCout).toBe(101)
    expect(usersCount).toBe(100)

})

test("reference test", () => {
    let user = {
        name: "Alex",
        age: 34,
        address: {
            title: "Mogilev"
        }
    }

    //let add = user.address

    let user2 = {
        name: "Veronika",
        age: 34,
        address: user.address
    }

    user2.address.title = "Gavai"

    //expect(user2.address.title).toBe("Mogilev");
    expect(user.address.title).toBe("Gavai")
})

test("reference array test", () => {

    let address = {
        title: "Mogilev"
    }

    let user = {
        name: "Alex",
        age: 34,
        address: address
    }
    let user2 = {
        name: "Veronika",
        age: 34,
        address: address
    }

    let users = [user, user2, {name: "Sasha", age: 4, address: address}]

    const admins = [user, user2]
    admins[0].name = "Alexsandr"   //меняем в admins => меняется в user - ссылка

    //expect(user2.address.title).toBe("Mogilev");
    expect(user.address.title).toBe("Mogilev")
    expect(user["name"]).toBe("Alexsandr")
    expect(user.name).toBe("Alexsandr")
    expect(users[2].name).toBe("Sasha")
})

