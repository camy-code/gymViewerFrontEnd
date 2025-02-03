const colorArr = ["#A49E8D", "#504136", "#689689"];  // This would be our color array
    // The following are the colours I got from the color picking
    // Website: https://coolors.co/visualizer/f5e0b7-d6ba73-8bbf9f

    // The purpose of these methods are to avoid copy pasting long
    // color codes

const getColor = () => {
    return colorArr;
}

const getPrimary = () => {
    if (colorArr.length < 0) {
        return null;
    }


    return colorArr[0];
}

const getSecondary = () => {
    if (colorArr.length < 1) {
        return null;
    }
    return colorArr[1]
}


const getThird = () => {
    if (colorArr.length < 2) {
        return null;
    }
    return colorArr[1]
}

const getWhite = () => {
    return "white"
}


export default {getColor, getPrimary, getSecondary, getThird, getWhite}
// This could be used for more colors, this seems like an easy shortcut