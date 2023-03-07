let array = [12, 151, 145, false, true, 45, undefined, "text", 45]
let firstNumber = 5;
let secondNumber = 6;
debugger
let newArray = array.filter(function (num) {
    return typeof num === "number"

})
let Result = function (val) {
    let fisrtQuantity = 0;
    let secondQuantity = 0;
    for (i = 0; i <= newArray.length; i++) {
        if (val[i] % firstNumber === 0) {
            fisrtQuantity++
        } if (val[i] % secondNumber === 0) {
            secondQuantity++
        }
    }
    if (fisrtQuantity > secondQuantity) {
        let finish = val.filter(function (bar) {
            return bar % firstNumber === 0
        })
        finish.push(firstNumber)
        return finish


    } else {
        let finish = val.filter(function (bar) {
            return bar % secondNumber === 0
        })
        finish.push(secondNumber)
        return finish
    }
}
alert(Result(newArray))

