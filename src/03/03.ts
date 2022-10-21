import {StudentType} from "../02/02_obj";
import {GovernmentBuildingType, HouseType} from "../02/02_02_obj";

/*
export const sum = (a: number, b: number) => {
    return a + b
}
*/
export const addSkill = (st: StudentType, skill: string) => {
    st.techologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export const makeStudentActive = (s: StudentType) => {
    s.isActive = false;
}

export const doseStudentLiveIn = (stu: StudentType, cityName: string) => {
    return stu.address.city.title === cityName;
}

export const addMoneyBudget = (building: GovernmentBuildingType, budget: number) => {
    return building.budget += budget;
}

export const repairHouse = (houseType: HouseType) => {
    return houseType.repaired = true;
}

export const toFireStaff = (building: GovernmentBuildingType, staffCountToFire: number) => {
    return building.staffCount -= staffCountToFire;
}

export function toHireStaff(building: GovernmentBuildingType, staffCountToHire: number) {
    return building.staffCount += staffCountToHire;
}