const getPuzzle = (wordCount) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch puzzle')
        }
    }).then((data) => {
        return data.puzzle 
    })
}

// const getCountry = (countryCode) => {
//     return fetch('http://restcountries.eu/rest/v2/all').then((response) => {
//         if (response.status === 200) {
//             return response.json()
//         } else {
//             throw new Error('Unable to fetch data')
//         }
//     }).then((data) => {
//         return data.find((country) => country.alpha2Code === countryCode)
//     })
// }



const getCountry = async ()=>{
    const response = await fetch('https://ipinfo.io/json?token=4118fa116459b8')
    if(response.status === 200) {
        const data = await response.json()
        return data
    }else{
        throw new Error('Unable to fetch data')
    }

}