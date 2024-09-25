import {Starship} from "./Starship.ts";
import type {Planet} from "./Planet.ts";
import {calculateFlightDurationFromEarth} from "./utils/flightCalculator.ts";
import {Citron} from "./classes/Citron.ts";
import {OliveOil} from "./classes/OliveOil.ts";
import {CherryTomatoes} from "./classes/CherryTomatoes.ts";
import {Cart} from "./classes/Cart.ts";
import {Sugar} from "./classes/Sugar.ts";

//Etape 1
const startShip = new Starship('Prometheuse',100000)


//Etape 3
const planets: Planet[] = [
    { name: 'Mercure', distanceFromEarth: 92000000 },
    { name: 'Venus', distanceFromEarth: 41000000 },
    { name: 'Mars', distanceFromEarth: 78000000 },
    { name: 'Jupiter', distanceFromEarth: 628000000 },
    { name: 'Saturne', distanceFromEarth: 1275000000 },
    { name: 'Uranus', distanceFromEarth: 2724000000 },
    { name: 'Neptune', distanceFromEarth: 4351000000 }
];

console.log("Planète ordre croissant selon distance à la Terre")

planets.sort((a, b) => a.distanceFromEarth - b.distanceFromEarth);
console.log(planets)


console.log("Planète ordre alphabétique croissant")
planets.sort((a, b) => a.name.localeCompare(b.name));
console.log(planets)

console.log("Planète ordre alphabétique décroissant")
planets.sort((a, b) => b.name.localeCompare(a.name));
console.log(planets)

console.log("distance moyenne de la Terre aux 7 autres planètes du système solaire")
const avg = planets.reduce((sum, planet) => sum + planet.distanceFromEarth, 0) / planets.length;
console.log(avg)


//Etape 4
console.log("Durée du trajet nécessaire depuis la planète Terre jusqu'à chaque planète en heures")
planets.forEach((planet) => console.log(planet.name + " : " + calculateFlightDurationFromEarth(planet,startShip)));
console.log("Durée du trajet nécessaire depuis la planète Terre jusqu'à chaque planète en jours")
planets.forEach((planet) => console.log(planet.name + " : " + calculateFlightDurationFromEarth(planet,startShip,"jours")));

const citron = new Citron(0.5);
const oliveOil = new OliveOil(5);
const sugar = new Sugar(3.9);
const cherryTomatoes = new CherryTomatoes(3.5);

const cart = new Cart()
cart.add(citron,2)
cart.add(oliveOil,1.5)
cart.add(sugar,0.5)
cart.add(citron,5)
cart.add(sugar,3)
cart.add(cherryTomatoes,1.5);

console.log(cart.displayDetails())
console.log("Cherry Tomatoes " + cart.calculateAmountByProduct(cherryTomatoes)+" €")
console.log("Total panier " + cart.calculateAmount()+" €")
