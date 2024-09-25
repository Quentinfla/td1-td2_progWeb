import { helloWord } from '../src/hello-funcs';
import { expect, test } from "bun:test";

test('La fonction retourne bien "Hello, World!"', () => {
    const result = helloWord();
    expect(result).toBe("Hello, World!");
});
