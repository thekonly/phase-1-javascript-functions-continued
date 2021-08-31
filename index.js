// Your code here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

const wrapAdjective = function(character="*") {
    return function(papaya="special") {
        return `You are ${character}${papaya}${character}!`
    }
}