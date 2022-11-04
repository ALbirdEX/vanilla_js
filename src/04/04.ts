const ages = [1, 12.33, 58, 90, 100, 91, 58,];

const predicate = (age: number) => {
    return age > 90;
}

const oldAges = [100, 91];

type CoursesType = {
    title: string
    price: number
}

const courses = [
    {title: "CSS", price: 110},
    {title: "JS", price: 200},
    {title: "React", price: 150}
]

const chipPredicate = (course: CoursesType) => {
return course.price < 160;
}
const chipCourses = [
    {title: "CSS", price: 110},
    {title: "React", price: 150}
]