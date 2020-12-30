'use strict';

const game = {
    team1: 'Bayern Munich', 
    team2: 'Borrussia Dortmund', 
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski','Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33, 
        x: 3.25, 
        team2: 6.5,
    }, 
};

// const players1 = game.players[0];
// const players2 = game.players[1];

//1
const [players1, players2] = game.players;

//2
const [gk, ...fieldplayers] = (players1[0], players1);

//3
const allplayers = [...players1, ...players2];

//4
const players1final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

//5
const {odds : {team1, x : draw, teams}} = game;
// const team1 = game.odds.team1;
// const draw = game.odds.x;
// const team2 = game.odds.team2;

//6
game.printGoals = function(...players) {
    for(let i = 0; i < players.length; i++) {
        // console.log(players[i]);
    }
    // console.log(`The number of goals ${players.length}`);
};


// console.log('2 arrays', players1, players2);
// console.log(gk);
// console.log(fieldplayers);
// console.log(allplayers);
// console.log(players1final);
// console.log(team1);
// console.log(draw);
// console.log(team2);
// game.printGoals( 'Davies', 'Muller', 'Lewandowski','Kimmich');
// game.printGoals(...game.scored);
// console.log((team1 < team2 && 'team 1 wins') || (team2 < team1) && 'team 2 wins');


// 1
for(const [num, player] of game.scored.entries()) {
    // console.log(`Goal ${num + 1} was scored by ${player}`);
}

//2
let sum = 0;
const odds = Object.values(game.odds);
for(const odd of odds) {
    sum += odd;
}
// console.log(`The average odd is ${sum / odds.length}`);

//3
const oddsTeams = Object.entries(game.odds);
// console.log(oddsTeams);
for(const [name, odd] of oddsTeams) {
    // console.log(`Odd of ${game[name] ?? 'draw'}: ${odd} `);
}

const gameEvents = new Map([ 
    [17, '⚽ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽ GOAL'],
    [61, '🔁 Substitution'], 
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'], 
    [72, '🔁 Substitution'],
    [76, '⚽ GOAL'], 
    [80, '⚽ GOAL'],
    [92, '🔶 Yellow card' ]
]);

// 1
const events = [...new Set([...gameEvents.values()])];
// console.log(events);

//2
gameEvents.delete(64);
// console.log(gameEvents);

// 3
const average = 90 / gameEvents.size;
// console.log(`An event happened, on average, every ${average} minutes`);

// 4
for(const [time, evnt] of gameEvents.entries()) {
    // time < 46 ? console.log(`[FIRST HALF] ${time}: ${evnt}`) : console.log(`[SECOND HALF] ${time}: ${evnt}`);
}

function convert(names) {
    const str = new String(names);
    const rawVariables= str.split('\n');
}

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const buttons = document.getElementsByTagName('button');

function getVariables(textarea) {
    const input = textarea.split('\n');
    for (const value of input) {
        const str = new String(value).trim().toLowerCase();
        const upped = str.replace(str.indexOf('_')+1).toUpperCase();
       
        console.log(upped);
    }
}
for(let i=0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(evt) {
        //console.log(evt);        
        const textareas = document.getElementsByTagName('textarea');
        for(let x = 0; x < textareas.length; x++) {
            getVariables(textareas[x].value);
        }
    });
}
