
type UserType = {
    [key: string]: {id: number, name: string}
}
let users:UserType

beforeEach(() => {

    users = {
        '101': {id: 101, name: "Alex"},
        '235101': {id: 235101, name: "Igor"},
        '1': {id: 1, name: "Dima"},
        '201': {id: 201, name: "Petr"},
    }
})

test("should update corresponding user", () => {
    users['1'].name = "Dmitrii"

    expect(users['1'].name).toBe("Dmitrii")
})

test( "should delete corresponding user", () => {
    delete users['1']

    expect(users['1']).toBeUndefined()
})