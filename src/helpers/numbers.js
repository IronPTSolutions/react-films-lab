export const meanRatings = (rates) => {
    return ((rates.reduce((acc, curr) => acc + curr)) / rates.length).toFixed(1)
}