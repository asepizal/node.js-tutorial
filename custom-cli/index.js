#!/usr/bin/env node

// melihat argumen/option pada cli
// console.log(process.argv)
// untuk mengelola dengan mudah gunakan package yargs
// const yargs = require('yargs')
// const {argv} = yargs(process.argv)

// interactive CLI
// salah satu package untuk membuat cli kita interaktif adalah inquirer
// gunakan versi 8.2.5 karena v.9 harus sudah versi moduleJS

const inquirer = require('inquirer')

const printFiveMoves = async (pokemonName) => {
    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    )
    const pokemon = await response.json()
    const moves = pokemon.moves.map(({move}) => move.name)
    console.log(moves.slice(0,5))
}
// printFiveMoves(argv.pokemon)

const prompt = inquirer.createPromptModule()
prompt([
    {
        type: "input",
        name: "pokemon",
        message: "Enter a pokemon name to view 5 action ?"
    }
]).then((answer) => {
    const pokemon = answer.pokemon
    printFiveMoves(pokemon)
})
