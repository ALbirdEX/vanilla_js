import {CityType} from "../02/02_02_obj";
import {demolishHousesOnTheStreer, gertBuldingWithStaffCountThen} from "./04_02";

let city: CityType;

beforeEach(() => {
    city = {
        title: "NewYork",
        houses: [
            {
                id: 1, buildedAt: 2012, repaired: false,
                address: {number: 100, street: {title: "White street"}}
            },
            {
                id: 2, buildedAt: 2008, repaired: false,
                address: {number: 100, street: {title: "Happy street"}}
            },
            {
                id: 3, buildedAt: 2020, repaired: false,
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

test("Houses schould be destroyed", () => {
    demolishHousesOnTheStreer(city, "Happy street");

    expect(city.houses.length).toBe(1);
    expect(city.houses[0].id).toBe(1);
})

test("Bulding with correct staff count", ()=>{
    let bildings = gertBuldingWithStaffCountThen(city.governmentBuilding, 500);

    expect(bildings.length).toBe(1);
    expect(bildings[0].type).toBe("FIRE-STATION");
})