export default function two_crystal_balls(breaks: boolean[]): number {
    let jump = Math.floor(Math.sqrt(breaks.length));
    let startIndex = 0;
    let endIndex = jump;

    while (!breaks[endIndex]) {
        if (!breaks[endIndex]) {
            startIndex = endIndex;
            endIndex += jump;
        }
        if (endIndex > breaks.length) return -1;
    }
    for (; startIndex < endIndex; startIndex++) {
        if (breaks[startIndex]) {
            return startIndex;
        }
    }
    return -1;
}

// * Primes solution

function two_balls_of_crystal(breaks: boolean[]): number {
    const jmpAmount = Math.floor(Math.sqrt(breaks.length));

    let i = jmpAmount;
    for (; i < breaks.length; i += jmpAmount) {
        if (breaks[i]) {
            break;
        }
    }

    i -= jmpAmount;

    for (let j = 0; j < jmpAmount && i < breaks.length; ++j, ++i) {
        if (breaks[i]) {
            return i;
        }
    }

    return -1;
}
