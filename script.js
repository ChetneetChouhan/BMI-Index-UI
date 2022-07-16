'use strict';

// part 2: index calculation
// BMI Index formula, weight (kg) and height (meters)
function bmiCalculator(userWeight, userHeight) {
    const bmiIndex = userWeight / (userHeight * userHeight);
    return bmiIndex;
}

// real code starts here...

// part 1: capturing the value
document.querySelector(`.check`).addEventListener(`click`, function () {
    const yehiHai = bmiCalculator(document.querySelector(`.userWeight`).value, document.querySelector(`.userHeight`).value)
    console.log(`haa naya button chal raha hai bharwe`)
    // part 3: what does the number means?

    if (yehiHai <= 18.5) {
        document.querySelector('.label-score').textContent = `You are overweight, your BMI index is ${yehiHai}`
        console.log(`You are Underweight, your BMI index is only ${yehiHai}`);

    } else if (yehiHai >= 24.9) {
        document.querySelector('.label-score').textContent = `You are overweight, your BMI index is ${yehiHai}`
        console.log(`You are overweight, your BMI index is ${yehiHai}`);

    } else if ((!yehiHai))
        // if client not adds any input
        document.querySelector('.label-score').textContent = `please add value`
    // console.log(`add value yarrr, what are you doing with your life?`);

    else {
        // if client's bmi index is healthy
        document.querySelector('.label-score').textContent = `You are Healthy, your BMI index is ${yehiHai}`

        console.log(`You are Healthy, your BMI index is ${yehiHai}`);

        document.querySelector(`body`).style.backgroundColor = `#60b347`;
    }

})

// to feature into label-score change into exact it.

// console.log(userBmiIndex);

// const userBmiIndex = document.querySelector(`.check`).addEventListener(`click`, function () {
//testing
// bmiCalculator(document.querySelector(`.userWeight`).value, document.querySelector(`.userHeight`).value)
// });




// if !useWeight

//      if more than range, red,

//      elseif less than that range, red, 

//      else in between that range, its then green