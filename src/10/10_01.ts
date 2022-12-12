import exp from "constants";

export type UserType = {
    name: string
    hair: number
    address: {
        city: string,
        house?: number
    }
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: Array<string>
}

export type CompanyType = { id: number, title: string };

export type WithCompaniesType = UserType & {
    companies: Array<CompanyType>
}


export function makeHairstyle(u: UserType, power: number) {
    const copy = {
        ...u, hair: u.hair / power
    }

    /*copy.hair = copy.hair / power // copy.hair = u.hair / power*/

    return copy
}

export function moveUser(u: UserWithLaptopType, city: string) {
    return {
        ...u, address: {...u.address, city: city}
    }

    //copy.address = {...copy.address, city: city}
}

export function upgradeUserLaptop(u: UserWithLaptopType, laptop: string) {
    return {
        ...u, laptop: {...u.laptop, title: laptop}
    }
}

export function upgradeUserToHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {
    return {
        ...u, address: {
            ...u.address,
            house: house
        }
    }
}

export function addNewBooksToUser(u: UserWithLaptopType & UserWithBooksType, newBook: string) {
    /*const copy = {
            ...u, books: [...u.books] //в массив ложем копию books
        }
    copy.books.push(newBook)
        return copy*/

    return {...u, books: [...u.books, newBook]}
}

export function updateBooks(u: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) {
    /*  const copy = {
          ...u, books: u.books.map(b => {
              if (b === oldBook) {
                  return newBook
              } else {
                  return b
              }
          })
      }
      return copy*/

    return {...u, books: u.books.map(b => b === oldBook ? newBook : b)}
}

export function removeBook(u: UserWithLaptopType & UserWithBooksType, bookForDelet: string) {
    return {...u, books: u.books.filter(b => b !== bookForDelet)}
}

export const removeBook1 = (u: UserWithLaptopType & UserWithBooksType, bookForDelet: string) => ({
    ...u, books: u.books.filter(b => b !== bookForDelet)
})

/*
export const updateCompanyTitle =(u: UserWithLaptopType & WithCompaniesType, companuIDnumber: number, newTitle: string)=>({
 ...u, companies: u.companies.map(c => c.id === companuIDnumber? {...c, title: newTitle} : c)
})
*/

export const updateCompanyTitle = (user: WithCompaniesType, companuIDnumber: number, newTitle: string) => {
    const copy: WithCompaniesType = {
        ...user,
        companies: user.companies.map(c => {
            if (c.id === companuIDnumber) {
                return {...c, title: newTitle}
            } else {
                return c
            }
        })
    }
    return copy
}

export const updateCompanyTitle2 = (companies: { [key: string]: Array<CompanyType> },
                                    userName: string,
                                    companyID: number,
                                    newTitle: string) => {

    const companyCopy = {...companies}
    companyCopy[userName] = companyCopy[userName].map(c => c.id === companyID ?
        {...c, title: newTitle} : c)

    return companyCopy;
}