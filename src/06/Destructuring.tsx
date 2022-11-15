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
}

export const ManComponent: React.FC<PropsType> = (props) => {

    const {title} = props;
    const {name} = props.man;

    const [message, setMessage] = useState<string>("hello")

    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>
                {name}
            </div>
        </div>
    );
};