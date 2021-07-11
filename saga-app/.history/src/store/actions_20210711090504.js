export function ageUp(){

    return {
        type: "up_async",
        payload: 1,
    }
}

export function ageDown(){

    return {
        type: "down",
        payload: 1,
    }
}

