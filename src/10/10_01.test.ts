import {
    addNewBooksToUser,
    makeHairstyle,
    moveUser,
    removeBook1,
    updateBooks,
    updateCompanyTitle, updateCompanyTitle2,
    upgradeUserLaptop,
    upgradeUserToHouse,
    UserType,
    UserWithBooksType,
    UserWithLaptopType,
    WithCompaniesType
} from "./10_01";

test("referens type test", () => {
    let user: UserType = {
        name: "Alex",
        hair: 32,
        address: {
            city: "Mogilev"
        }
    }
    const awesomeUser = makeHairstyle(user, 2)

    expect(awesomeUser.hair).toBe(16)
    expect(user.hair).toBe(32)
})

test("change address", () => {
    let user: UserWithLaptopType = {
        name: "Alex",
        hair: 32,
        address: {
            city: "Mogilev",
            house: 12
        },
        laptop: {
            title: "Lenovo"
        }
    }
    const movedUser = moveUser(user, "Kiev")

    expect(user.hair).not.toBe(16)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe("Kiev")
})

test("upgrade laptop to macbook", () => {
    let user: UserWithLaptopType = {
        name: "Alex",
        hair: 32,
        address: {
            city: "Mogilev",
            house: 12
        },
        laptop: {
            title: "Lenovo"
        }
    }
    const copyUser = upgradeUserLaptop(user, "Macbook")

    expect(user).not.toBe(copyUser)
    expect(user.address).toBe(copyUser.address)
    expect(user.laptop).not.toBe(copyUser.laptop)
    expect(copyUser.laptop.title).toBe("Macbook")
    expect(user.laptop.title).toBe("Lenovo")
})

test("upgrade house", () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Alex",
        hair: 32,
        address: {
            city: "Mogilev",
            house: 12
        },
        laptop: {
            title: "Lenovo"
        },
        books: ["CSS", "js", "react"]
    }
    const copyUser = upgradeUserToHouse(user, 99)

    expect(user).not.toBe(copyUser)
    expect(user.books).toBe(copyUser.books)
    expect(user.laptop).toBe(copyUser.laptop)
    expect(user.address).not.toBe(copyUser.address)
    expect(copyUser.address.house).toBe(99)
})

test("add new books users", () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Alex",
        hair: 32,
        address: {
            city: "Mogilev",
            house: 12
        },
        laptop: {
            title: "Lenovo"
        },
        books: ["CSS", "js", "react"]
    }
    const copyUser = addNewBooksToUser(user, 'ts')

    expect(user).not.toBe(copyUser)
    expect(user.books).not.toBe(copyUser.books)
    expect(user.laptop).toBe(copyUser.laptop)
    expect(user.address).toBe(copyUser.address)
    expect(copyUser.books[3]).toBe("ts")
})

test("update js to ts books users", () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Alex",
        hair: 32,
        address: {
            city: "Mogilev",
            house: 12
        },
        laptop: {
            title: "Lenovo"
        },
        books: ["CSS", "js", "react"]
    }
    const copyUser = updateBooks(user, "js", "ts")

    expect(user).not.toBe(copyUser)
    expect(user.books).not.toBe(copyUser.books)
    expect(user.laptop).toBe(copyUser.laptop)
    expect(user.address).toBe(copyUser.address)
    expect(copyUser.books[1]).toBe("ts")
})

test("remove js book", () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Alex",
        hair: 32,
        address: {
            city: "Mogilev",
            house: 12
        },
        laptop: {
            title: "Lenovo"
        },
        books: ["CSS", "js", "react"]
    }
    const copyUser = removeBook1(user, "js",)

    expect(user).not.toBe(copyUser)
    expect(user.books).not.toBe(copyUser.books)
    expect(user.laptop).toBe(copyUser.laptop)
    expect(user.address).toBe(copyUser.address)
    expect(copyUser.books[1]).toBe("react")
})

test("companies work", () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: "Alex",
        hair: 32,
        address: {
            city: "Mogilev",
            house: 12
        },
        laptop: {
            title: "Lenovo"
        },
        companies: [{id: 1, title: "ЕПАМ"}, {id: 2, title: "IT-INCUBATOR"}]
    }
    const copyUser = updateCompanyTitle(user, 1, "EPAM") as UserWithLaptopType & WithCompaniesType

    expect(user).not.toBe(copyUser)
    expect(user.address).toBe(copyUser.address)
    expect(user.companies).not.toBe(copyUser.companies)
    expect(copyUser.companies[0].title).toBe("EPAM")

})

test("update companies", () => {
    let companies = {
        "Dimych": [{id: 1, title: "ЕПАМ"}, {id: 2, title: "IT-INCUBATOR"}],
        "Artem": [{id: 2, title: "IT-INCUBATOR"}],
    }

    const copy = updateCompanyTitle2(companies, "Dimych", 1, "EPAM")

    expect(copy["Dimych"]).not.toBe(companies["Dimych"])
    expect(copy["Artem"]).toBe(companies["Artem"])
    expect(copy["Dimych"][0].title).toBe("EPAM")

})