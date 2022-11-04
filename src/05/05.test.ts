import {createGreetingMassasge, ManType} from "./05";

let people: ManType[] = []

beforeEach(() => {
    people = [
        {name: "Andrei Petrov", age: 33},
        {name: "Alex Gurniv", age: 24},
        {name: "Igor Unov", age: 18}
    ]
})

test("Should get array of greeting maessages", ()=>{

    const messeges = createGreetingMassasge(people)

    expect(messeges.length).toBe(3);
    expect(messeges[0]).toBe("Hello Andrei. Welcom to IT-Incubator");
    expect(messeges[1]).toBe("Hello Alex. Welcom to IT-Incubator");
    expect(messeges[2]).toBe("Hello Igor. Welcom to IT-Incubator");
})

