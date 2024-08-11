# Shut the box! game

## Overview
Shut the Box! is a simple game built as a React component, where the goal is to match all the numbers from `2 - 10` using randomly generated numbers. The game is scalable, allowing you to play with numbers from `2 - 12`.

## Instalation
Make sure you have installed all dependencies:
- React Bootstrap

To install, run this command:
```
npm i react-bootstrap
```

## Shut the box Component

This component has two main functions:
- **handleDiceRoll()**: This function generates random numbers and checks if there are any possible combinations with the generated numbers.
- **handleSelectNumber()**: This function updates the state of selected numbers, stores the state of each number, and calculates the player's score.
