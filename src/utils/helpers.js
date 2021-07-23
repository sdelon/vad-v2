export const capitalize = (str) => {
    return `${str.slice(0,1).toUpperCase()}${str.slice(1).toLowerCase()}`
}

export const getTags = array => {
    return array.reduce((newArr, currItem) => {
        newArr.push(currItem.data.categorie)
        return newArr
    },[])
}

export const formatDate = date => {
    return date.split(/[-]/).reverse().join('-')
}