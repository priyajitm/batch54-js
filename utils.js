// Utility Functions

// Export as default
const addTwoNumbers = (num1, num2) => {
    return num1 + num2;
}

const addThreeNumbers = (num1, num2, num3) => {
    return num1 + num2 + num3
}

export default { addTwoNumbers, addThreeNumbers}

// Export as named
export const multiPly = (num1, num2) => num1*num2
export const multiPly2 = (num1, num2, num3) => num1*num2*num3