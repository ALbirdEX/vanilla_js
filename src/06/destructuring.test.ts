import {ManType} from "./Destructuring";

let props: ManType;

beforeEach(() => {
    props = {
        name: "Alex",
        age: 34,
        lessons: [{title: "1"}, {title: "2"}, {title: "3", name: "React"}],
        address: {
            street: {
                title: "Dimitrova"
            }
        }
    }
})

test("distruct", () => {

    /* const age = props.age;
     const lessons = props.lessons;*/

    const {age, lessons} = props;  // переменные age, lessons ищем как свойства props
    const t = props.address.street.title
    const {title} = props.address.street   //{} так как объект


    const a = props.age;
    const l = props.lessons;


    expect(age).toBe(34);
    expect(lessons.length).toBe(3);
    expect(title).toBe("Dimitrova");

    expect(a).toBe(34);
    expect(l.length).toBe(3);
    expect(t).toBe("Dimitrova");
})

test("rest ", () => {
    const l1 = props.lessons[0];
    const l2 = props.lessons[1];

    const [ls1, ls2] = props.lessons  // [] так как массив,  const [,,ls3] = props.lessons если надо 3 элемент
    const [lsn1, ...restLessons] = props.lessons  // взять 1, а остальное запихать в restLessons через ...restLessons rest оператор
    const [, lsn2, ...restLessons1] = props.lessons  // пропускаем первый, берем второй, все остальное в restLessons1

    expect(l1.title).toBe("1")
    expect(l2.title).toBe("2")
    expect(l2.title.length).toBe(1)

    expect(ls1.title).toBe("1")
    expect(ls2.title).toBe("2")
    expect(ls2.title.length).toBe(1)

    expect(lsn1.title).toBe("1")
    expect(restLessons.length).toBe(2)
    expect(restLessons[0].title).toBe("2")

    expect(lsn2.title).toBe("2")
    expect(restLessons1[0].title).toBe("3")
    expect(restLessons1.length).toBe(1)

    expect(restLessons1[0]).toStrictEqual({title: "3", name: "React"})
})
