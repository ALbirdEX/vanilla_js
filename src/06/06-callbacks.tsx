import React, {ChangeEvent, MouseEvent} from "react";

/*
const callback = (): number => {
    alert('hay')
    return 12;
}

window.setTimeout(callback, 1000)
*/

export const User = () => {

    const search = (event: MouseEvent<HTMLButtonElement>) => {
        alert(event.currentTarget.name)
    }

    const onNameChanged = () => {
        console.log('name canged')
    }

    const onAgeChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log('age changed' + event.currentTarget.value)

    }

    const focusLostHamdler = () => {
        console.log('focus lost')
    }

    return <div>
        <textarea
            onChange={onNameChanged}
            onBlur={focusLostHamdler}>
            Dimych
        </textarea>
        <input onChange={onAgeChange} type={"number"}/>
        <button name={'search in Google'} tabIndex={1} onClick={search}>Google</button>
    </div>
}