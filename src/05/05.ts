export type ManType = {
    name: string
    age: number
}

const people: ManType[] = [
    {name: "Andrei Petrov", age: 33},
    {name: "Alex Gurniv", age: 24},
    {name: "Igor Unov", age: 18}
]

const dimycjTransformator = (man: ManType) => {
    return {
        stack: ["css, html", "js", "tdd", "react"],
        firstNafe: man.name.split(" ")[0],
        lastName: man.name.split(" ")[1]
    }
}

const devs = [
    {
        stack: ["css, html", "js", "tdd", "react"],
        firstNafe: "Andrei", lastName: "Petrov"
    },
    {
        stack: ["css, html", "js", "tdd", "react"],
        firstNafe: "Alex", lastName: "Gurniv"
    },
    {
        stack: ["css, html", "js", "tdd", "react"],
        firstNafe: "Igor", lastName: "Unov"
    },
]

let d1 = dimycjTransformator(people[0])
let d2 = dimycjTransformator(people[1])
let d3 = dimycjTransformator(people[2])

const devs1 = [
    d1, d2, d3
]

const devs2 = [
    dimycjTransformator(people[0]),
    dimycjTransformator(people[1]),
    dimycjTransformator(people[2])
]

const devs3 = people.map(dimycjTransformator)

const devs4 = people.map(man => ({
    stack: ["css, html", "js", "tdd", "react"],
    firstNafe: man.name.split(" ")[0],    //({....}) не тело функции а конструирование объекта
    lastName: man.name.split(" ")[1]
}))


const messeges = people.map(man => `Hello ${man.name.split(" ")[0]}. Welcom to IT-Incubator`)

export const createGreetingMassasge = (people: ManType[]) => {
return people.map(man => `Hello ${man.name.split(" ")[0]}. Welcom to IT-Incubator`)
}