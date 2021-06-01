# Pokemon-Terminal-Application

## Task
```
In Kanto, kids are turned loose from their home at the age of 10 to travel across an incredibly safe country alone with their Pokemon. Their mission? To catch them all.

As a retired software engineer living in the region, you have been approached by Professor Oak to assist him in building a digital guide to assist these kids in their travels across the land.

Using the API available at https://pokeapi.co/, design a terminal application to retrieve data about the Pokemon when queried.

The program must have the following functionality:

• Ability to cache the stored information locally (using a text file)
• Ability to search by Pokemon Name or ID.
• Display only the following information
    - Pokemon ID
    - Pokemon Name
    - Pokemon Type(s)
    - Pokemon Encounter Location(s) and method(s) in kanto only
        - If there are no locations in kanto, display ‘-’
    - Pokemon stats (speed, def, etc etc)
• If the stored information is over a week old, the data should be retrieved again from the API. If not, the data should be retrieved from the text file.

The program must also be designed in a object-oriented manner.

No wrapper libraries for PokeAPI are allowed to be used.
```

## Dependency
This API requires open source projects to work;
- chalk
- axios
- Nodejs
- lowdb

## Setup & Installation 
*This project requires NodeJS, after having NodeJs you can start doing the following*
## 1. cd the folder and file at terminal
## 2. install project dependencies if node_modules has not seen) 
$ npm install

,then

```bash
$ npm install chalk
$ npm install axios
$ npm install each-async
$ npm install indent-string
$ npm install lowdb
```
## 3. follow the instructions below to run the project

## Run in Terminal

Avail permission to the pokeAPI file, then run it with the following command.
```bash
$ chmod +x ./pokeapi
$ ./pokeapi
```
