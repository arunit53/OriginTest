export const updateObject = (oldObject:any, anotherObject:any) => {
    return {
        ...oldObject,
        ...anotherObject
    };
}