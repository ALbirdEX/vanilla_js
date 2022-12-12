import React, {useState} from 'react';

type StreetType = {
    title: string
}
type AddressType = {
    street: StreetType
}
type LessonType = {
    title: string
    name?: string
}
export type ManType = {
    name: string
    age: number
    lessons: LessonType[]
    address: AddressType
}


type PropsType = {
    title: string
    man: ManType
    car: {model: string}
    food: Array<string>
}

export const ManComponent: React.FC<PropsType> = ({title, man:{name}, ...props}) => {
    //const {title, man, ...restProps} = props // забери title, man, всё остальное запихни в ...restProps
    //const {title, man:{name}} = props
    //const {title} = props;
    //const {name} = props.man;

    const[message, setMessage] = useState<string>("Hi")

    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>
                {name}
            </div>
            <div>
                {props.car.model}
            </div>
            <div>
                {props.food}
            </div>
        </div>
    );
};