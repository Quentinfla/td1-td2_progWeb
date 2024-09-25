import { repeatHelloYou } from '../src/hello-funcs';
import { expect, test } from "bun:test";

test('La function retourne bien "Hello, Bob! 3 fois', () => {
    const result = repeatHelloYou(3, "Bob");
    expect(result).toBe("Hello, Bob!\nHello, Bob!\nHello, Bob!\n");
});

test('La fonction retourne bien une erreur si le nombre passé en paramètre n\'est pas supérieur à 0', () => {
    const result = repeatHelloYou(-1, "Bob");
    expect(result).toBe("Veuillez sélectionner un nombre positif supérieur à 0");
});

test('La fonction retourne bien une erreur si le nom n\'est pas passé en paramètre', () => {
    const result = repeatHelloYou(3, "");
    expect(result).toBe("Un nom valide doit être passé en paramètre");
});
