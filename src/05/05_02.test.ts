import {CityType} from "../02/02_02_obj";
import {createdMessages, getStreetTitleOfGovermentsBuildings, getStreetTitleOfHouses} from "./05_02";

let city: CityType;

beforeEach(() => {
    city = {
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

test("List of sreets title of goverments buildings", () => {
    let streetsNames = getStreetTitleOfGovermentsBuildings(
        city.governmentBuilding);

    expect(streetsNames.length).toBe(2);
    expect(streetsNames[0]).toBe("White street");
    expect(streetsNames[1]).toBe("South Str");
})

test("List of sreets title", () => {
    let streets = getStreetTitleOfHouses(city.houses);

    expect(streets.length).toBe(3);
    expect(streets[0]).toBe("White street");
    expect(streets[1]).toBe("Happy street");
    expect(streets[2]).toBe("Happy street");
})

test("Created messages for streets", ()=> {
    let messages = createdMessages(city.houses)

    expect(messages.length).toBe(3);
    expect(messages[0]).toBe("Hello guys from White street");
    expect(messages[1]).toBe("Hello guys from Happy street");
    expect(messages[2]).toBe("Hello guys from Happy street");
})