import {StudentType} from "../02/02_obj";
import {addSkill, doseStudentLiveIn, makeStudentActive} from "./03";

let student: StudentType;
beforeEach(() => {
    student = {
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
        technologies: [
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
})

test("new tech skill chould be added to student", () => {
    expect(student.technologies.length).toBe(3);

    addSkill(student, "JS");

    expect(student.technologies.length).toBe(4);
    expect(student.technologies[3].title).toBe("JS");
    expect(student.technologies[3].id).toBeDefined()
})

test("student should be made active", () => {
    expect(student.isActive).toBe(true);

    makeStudentActive(student);

    expect(student.isActive).toBe(false);
})

test("dose student live in sity", () => {

    let rexsult1=doseStudentLiveIn(student, "Mscow");
    let rexsult2=doseStudentLiveIn(student, "Mogilev");

    expect(rexsult1).toBe(false);
    expect(rexsult2).toBe(true)
})