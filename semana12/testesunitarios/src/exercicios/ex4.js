export function removeItensDuplicados(array) {
    return array.filter((a, b)=> array.indexOf(a) === b)
}
