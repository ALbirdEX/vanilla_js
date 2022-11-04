import {GovernmentBuildingType, HouseType} from "../02/02_02_obj";

export const getStreetTitleOfGovermentsBuildings = (building: Array<GovernmentBuildingType>) => {
    return building.map(b => b.address.street.title)
}

export function getStreetTitleOfHouses(houses: HouseType[]) {
    return houses.map((h => h.address.street.title))
}

export const createdMessages = (houses: Array<HouseType>)=>{
    return houses.map(h => `Hello guys from ${h.address.street.title}`)
}