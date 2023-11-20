export default function bs_list(haystack: number[], needle: number): boolean {
    let startIndex = 0;
    let endIndex = haystack.length;
    do {
        const middleIndex =
            startIndex + Math.floor((endIndex - startIndex) / 2);

        if (haystack[middleIndex] === needle) return true;
        if (needle < haystack[middleIndex]) {
            endIndex = middleIndex;
        } else {
            startIndex = middleIndex + 1;
        }
    } while (startIndex < endIndex);
    return false;
}
