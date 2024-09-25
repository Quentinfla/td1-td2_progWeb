import { helloHuman } from '../src/hello-funcs';
import { expect, test } from "bun:test";

const validHuman = {
    firstname: "John",
    lastname: "Doe",
    birthyear: 1990
};

test('La function retourne bien "Hello, John Doe! You are X years old"' , () => {
    const result = helloHuman(validHuman);
    const currentYear = new Date().getFullYear();
    const age = currentYear - validHuman.birthyear;
    expect(result).toBe(`Hello, John Doe! You are ${age} years old`);
});

test('La fonction retourne bien une erreur si le Human passé en paramètre n\'est pas correct', () => {
    const result = helloHuman({ firstname: "", lastname: "Doe", birthyear: 1990 });
    expect(result).toBe("Un objet Human valide doit être passé en paramètre");
});

