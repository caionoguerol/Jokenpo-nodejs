# Jokenpo-nodejs

# Jokenpo rules

- Stone ties with stone and wins scissors
- Scissors ties with scissors and wins paper
- Paper ties with paper and wins stone

# Description

API to run jokenpo rules. It was developed on node.js and contains a test suite.

# Getting started

- Clone repository https://github.com/caionoguerol/Jokenpo-nodejs/
- Go to folder cd Jokenpo-nodejs
- On terminal run: npm install
- On terminal run: npm start
- The server is running on http://localhost:9500/
- To use you need to use the path http://localhost:9500/jokenpo with parameters:
    Example:   http://localhost:9205/jokenpo?playerOne=paper&playerTwo=rock 
- Your parameters must be like:{playerOne:$YOURVALUE, playerTwo: $YOURVALUE}
- Change the values (paper, rock, scissors) of paramaters to get other results
- You can use on postman or browser 

# Running tests
- On terminal run: npm test

# API

- GET:
   
   /jokenpo (param: playerOne, playerTwo) 

