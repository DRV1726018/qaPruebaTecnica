# qaPruebaTecnica
David Ramírez - Technical interview 
This is an automation technical interview based on Cypress.

## Installation

Before forking this repository you need [Node.js](https://nodejs.org/en/) and [cypress](https://www.cypress.io/), click in to the links to be redirected to the official page, or use the next command in the terminal to install cypress.

```bash
npm install cypress
```
## Initialization

For running the server use the following command in to the terminal.

```bash
npx cypress open
```
Once you have installed the repository in your local you will find the next folders and files.

### Folder -> File

e2e -> Wingo.cy.js

This folder contain a file that have the two test. The first test contains the assertions required.

fixtures -> data.json

This folder contains a jason file that have all the dummy data for two passengers, the flight destiny, origin and the date of the flight.

pages -> js files

This folder contains the different classes and locators that cypress uses to interact with the website. The project was organized using POM (Page Object Model) for reusing of the classes and easy understanding of the other members of the team.

### Test Cases

The test cases that have been used in this project had been wrote in the test_cases.txt file using GHERKIN languaje in order to ease the understanding of the clients and the project manager...
