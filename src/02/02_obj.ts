type LoacalCityType = {
    title: string
    countryTitle: string
}
type LocalAddressType = {
    streetTitle: string
    city: LoacalCityType
}
type TechType = {
    id: number
    title: string
}
export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: LocalAddressType
    techologies: Array<TechType>
}

export const student: StudentType = {
    id: 1,
    name: "Alex",
    age: 34,
    isActive: true,
    address: {
        streetTitle: "Dimitrova",
        city: {
            title: "Mogilev",
            countryTitle: "Belarus",
        }
    },
    techologies: [
        {
            id: 1,
            title: "HTML"
        },
        {
            id: 2,
            title: "CSS"
        },
        {
            id: 3,
            title: "REACT"
        }
    ]
}

console.log(student.age)
console.log(student.name)
console.log(student.address.city.title)
console.log(student.techologies[2].title)