export const updateObject = (oldObject:any, anotherObject:any) => {
    return {
        ...oldObject,
        ...anotherObject
    };
}

export const updateListTaskItem = ( allList:any,newData:any) => {
    console.log('@@@ state', allList);
    console.log('@@@ newData', newData);
    const listItems = allList;
    if(listItems !== undefined && listItems.length >0) {
      listItems.forEach((item:any) => {
            if(item.id === newData.id) {
                item.done = !item.done;
            }
        });
    }
    console.log('@@@ updated', listItems);
    return listItems;
}