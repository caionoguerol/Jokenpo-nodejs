const chai = require('chai');
const {expect}  = chai;
const getResult = require('../controller/jokenpocontroller')

describe('Game test', ()=>{
    it('Should return "Player One wins" (rock>scissors)', async()=>{
        getResult({ playerOne: 'rock', playerTwo: 'scissors' }, function (err, data) { 
            expect(data).to.equal('Player One wins!')})
    });
    it('Should return "Player Two wins" (scissors<rock)', async()=>{
        getResult({ playerOne: 'scissors', playerTwo: 'rock' }, function (err, data) { 
            expect(data).to.equal('Player Two wins!')})
    });
    it('Should return "Player One wins" (paper>rock)', async()=>{
        getResult({ playerOne: 'paper', playerTwo: 'rock' }, function (err, data) { 
            expect(data).to.equal('Player One wins!')})
    });
    it('Should return "Player Two wins" (rock<paper)', async()=>{
        getResult({ playerOne: 'rock', playerTwo: 'paper' }, function (err, data) { 
            expect(data).to.equal('Player Two wins!')})
    });
    it('Should return "Player Two wins" (paper<scissors)', async()=>{
        getResult({ playerOne: 'paper', playerTwo: 'scissors' }, function (err, data) { 
            expect(data).to.equal('Player Two wins!')})
    });
    it('Should return "Player One wins" (scissors>paper)', async()=>{
        getResult({ playerOne: 'scissors', playerTwo: 'paper' }, function (err, data) { 
            expect(data).to.equal('Player One wins!')})
    });

    it('Should return "Game Tied" (scissors===scissors)', async()=>{
        getResult({ playerOne: 'scissors', playerTwo: 'scissors' }, function (err, data) { 
            expect(data).to.equal('Game tied!')})
    });
    it('Should return "Game Tied" (paper===paper)', async()=>{
        getResult({ playerOne: 'paper', playerTwo: 'paper' }, function (err, data) { 
            expect(data).to.equal('Game tied!')})
    });
    it('Should return "Game Tied" (rock===rock)', async()=>{
        getResult({ playerOne: 'rock', playerTwo: 'rock' }, function (err, data) { 
            expect(data).to.equal('Game tied!')})
    });

    it('Should return "Type one of these options for each player (playerOne, playerTwo): paper, rock, scissors" ', async()=>{
        getResult({ playerOne: 'aaaaa', playerTwo: 'sssss' }, function (err, data) { 
            expect(err).to.equal('Type one of these options for each player (playerOne, playerTwo): paper, rock, scissors')})
    });

    it('Should return "Type one of these options for each player (playerOne, playerTwo): paper, rock, scissors" ', async()=>{
        getResult({ playerOne: '', playerTwo: '' }, function (err, data) { 
            expect(err).to.equal('Type one of these options for each player (playerOne, playerTwo): paper, rock, scissors')})
    });

})
