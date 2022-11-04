test("Should take old men older then 90", () => {
    const ages = [1, 12.33, 58, 90, 100, 91, 58,];

    const oldAges = ages.filter(age => age > 90);

    expect(oldAges.length).toBe(2);
    expect(oldAges[0]).toBe(100)
    expect(oldAges[1]).toBe(91)
})

test("Should take curses chipper 160", () => {
    const courses = [
        {title: "CSS", price: 110},
        {title: "JS", price: 200},
        {title: "React", price: 150}
    ]

    const chipCourses = courses.filter(c => c.price < 160);
    /*const chipCourses = courses.filter((c) => c.price < 160);*/

    /*const chipPredicate = (course: CoursesType) => {
        return course.price < 160;
    }

    const chipCourses = courses.filter(chipPredicate);*/

    expect(chipCourses.length).toBe(2);
    expect(chipCourses[0].price).toBe(110);
    expect(chipCourses[1].price).toBe(150)
})

test("Get only complited tascks", ()=>{
    const tasks = [
        {id:1, title: "Bred", isDone: false },
        {id:2, title: "Milk", isDone: true },
        {id:3, title: "Pepsi", isDone: true },
        {id:4, title: "Sold", isDone: true }
    ]

    const completedTasks = tasks.filter(task => task.isDone)

    expect(completedTasks.length).toBe(3);
    expect(completedTasks[0].title).toBe("Milk");
    expect(completedTasks[1].title).toBe("Pepsi");
    expect(completedTasks[2].title).toBe("Sold");
    expect(completedTasks[2].id).toBe(4);
    expect(completedTasks[1].id).toBe(3);
})

test("Get only uncomplited tascks", ()=>{
    const tasks = [
        {id:1, title: "Bred", isDone: false },
        {id:2, title: "Milk", isDone: true },
        {id:3, title: "Pepsi", isDone: true },
        {id:4, title: "Sold", isDone: true }
    ]

    const uncompletedTasks = tasks.filter(task => !task.isDone)

    expect(uncompletedTasks.length).toBe(1);
    expect(uncompletedTasks[0].title).toBe("Bred");
    expect(uncompletedTasks[0].id).toBe(1);
})