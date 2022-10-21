import {CityType} from "../02/02_02_obj";
import {addMoneyBudget} from "./03";

let city2: CityType;
beforeEach(()=>{
    city2 = {
        title: "NewYork",
        houses: [
            {
                buildedAt: 2012, repaired: false,
                address: {number: 100, street: {title: "White street"}}
            },
            {
                buildedAt: 2008, repaired: false,
                address: {number: 100, street: {title: "Happy street"}}
            },
            {
                buildedAt: 2020, repaired: false,
                address: {number: 101, street: {title: "Happy street"}}
            },],
        governmentBuilding: [
            {
                type: "HOSPITAL", budget: 200000, staffCount: 200,
                address: {
                    street: {
                        title: "White street"
                    }
                }
            },
            {
                type: "FIRE-STATION", budget: 500000, staffCount: 1000,
                address: {
                    street: {
                        title: "South Str"
                    }
                }
            }
        ],
        citizenNumber: 1000000
    }
})

test("Budget should be changed for HOSPITAL", ()=>{
    addMoneyBudget(city2.governmentBuilding[0], 100000);

    expect(city2.governmentBuilding[0].budget).toBe(300000);
})

test("Budget should be changed for FIRE-STATION", ()=>{
    addMoneyBudget(city2.governmentBuilding[1], -100000);

    expect(city2.governmentBuilding[1].budget).toBe(400000);
})
