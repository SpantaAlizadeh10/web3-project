'use strict';

// const registerNewAnswer = {
//   1: "javascript",
//   2: "pythons",
//   3: "rust",
//   4: "c++",
// };

// const question = prompt .Number(`c++what is your favourite programing language?0: javascript',1:python2: rust,3:c++`)
// console.log(question);
// if ((question = registerNewAnswer)) {
//   console.log('good job');
// }

const poll = {
  question: 'what is your favourite programing language?',
  options: ['0: javascript', '1:python', '2: rust', '3:c++'],

  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // get answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(write option number)`
      )
    );
    console.log(answer);
    // Register answer

    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;
    // console.log(answer);
    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`poll results are ${this.answers.join(',')}`);
    }
  },
};

// poll.registerNewAnswer();

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
