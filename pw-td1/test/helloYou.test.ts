import { helloYou } from '../src/hello-funcs';
import { expect, test } from "bun:test";

test('La fonction retourne bien "Hello, Alice!"', () => {
    const result = helloYou("Alice");
    expect(result).toBe("Hello, Alice!");
});

test('La fonction retourne bien une erreur si le nom n\'est pas passé en paramètre', () => {
    const result = helloYou("");
    expect(result).toBe("Un nom valide doit être passé en paramètre");
});

test('La fonction retourne bien une erreur si le nom n\'est pas passé en paramètre', () => {
    const result = helloYou(123);
    expect(result).toBe("Un nom valide doit être passé en paramètre");
});
