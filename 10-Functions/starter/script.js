'use strict';
// const greet = greeting => 
//      name => console.log(`${greeting} ${name}`);


// const heyCary = greet('Hey');

// heyCary('Cary');
// greet('Hiya')('Diane');

const poll = {
    question: "What is your favourite programming language?", 
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],

    // This generates [0, 0, 0, 0]. More in the next section! 
    answers: new Array(4).fill(0),

    registerNewAnswer () {
    
        const choice = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`));
        typeof choice === 'number' && choice < this.answers.length && this.answers[choice]++ 
        this.displayResults();
        this.displayResults('string');
    },
    
    displayResults (type = 'array'){
        if(type === 'array') {
            console.log(this.answers);
        } else if (type  === 'string') {
            console.log(`Poll results are: ${this.answers.join(', ')}`);
        }
    }
    };

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({answers: [5,2,3]}, 'string');

(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';
    document.querySelector('body').addEventListener('click', function(){ 
        header.style.color = 'blue';
    })
})();
