import { helloWord } from './hello-funcs.ts';
import { helloYou } from './hello-funcs.ts';
import { helloHuman } from './hello-funcs.ts';
import {repeatHelloYou} from "./hello-funcs.ts";
import type { Human } from './types';


// const message = helloWord();
// console.log(message)
const human: Human = {
    firstname: "John",
    lastname: "Doe",
    birthyear: 1990
};


try {
    //Correct
    console.log(helloYou("Alice"));
    console.log(helloHuman(human));
    console.log(repeatHelloYou(3, "Bob"));

    //Erreur
    console.log(helloYou(""));
    console.log(helloHuman({ firstname: "", lastname: "", birthyear: 1990 }));
    console.log(repeatHelloYou(-1, "Bob"));
} catch (error) {
    console.error(error);
}
