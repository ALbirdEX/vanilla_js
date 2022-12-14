import {CityType} from "./02_02_obj";

let city2: CityType;

beforeEach(() => {
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

test("city should contains 3 house", () => {
    expect(city2.houses.length).toBe(3);

    expect(city2.houses[0].buildedAt).toBe(2012);
    expect(city2.houses[0].repaired).toBe(false);
    expect(city2.houses[0].address.number).toBe(100);
    expect(city2.houses[0].address.street.title).toBe("White street");

    expect(city2.houses[1].buildedAt).toBe(2008);
    expect(city2.houses[1].repaired).toBe(false);
    expect(city2.houses[1].address.number).toBe(100);
    expect(city2.houses[1].address.street.title).toBe("Happy street");

    expect(city2.houses[2].buildedAt).toBe(2020);
    expect(city2.houses[2].repaired).toBe(false);
    expect(city2.houses[2].address.number).toBe(101);
    expect(city2.houses[2].address.street.title).toBe("Happy street");
})

test("city should contains hospital and station", () => {
    expect(city2.governmentBuilding.length).toBe(2);

    expect(city2.governmentBuilding[0].type).toBe("HOSPITAL");
    expect(city2.governmentBuilding[0].budget).toBe(200000);
    expect(city2.governmentBuilding[0].staffCount).toBe(200);
    expect(city2.governmentBuilding[0].address.street.title).toBe("White street");

    expect(city2.governmentBuilding[1].type).toBe("FIRE-STATION");
    expect(city2.governmentBuilding[1].budget).toBe(500000);
    expect(city2.governmentBuilding[1].staffCount).toBe(1000);
    expect(city2.governmentBuilding[1].address.street.title).toBe("South Str");
})