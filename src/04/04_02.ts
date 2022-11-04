import {CityType, GovernmentBuildingType} from "../02/02_02_obj";

export function demolishHousesOnTheStreer(city: CityType, street: string) {
    city.houses = city.houses.filter(h => h.address.street.title !== street)
}

export function gertBuldingWithStaffCountThen(building:GovernmentBuildingType[], staffCount: number) {
  return building.filter(b => b.staffCount > staffCount)
}