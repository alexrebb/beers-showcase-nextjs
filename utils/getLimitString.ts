export const getLimitString = (str: string | undefined) => {
    if (!str) return
    if (str.length < 140) return str
    let res = ''
    for (let i = 0; i < 140; i++) {
        res += str[i]
    }
    return res + '...'
}
