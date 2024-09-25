import type { Human } from './types';

export function helloWord(): string {
    return "Hello, World!";
}

export function helloYou(name: string): string {
    if (typeof name !== "string" || name.trim() === "") {
        return "Un nom valide doit être passé en paramètre";
    } else {
        return `Hello, ${name.trim()}!`;
    }
}

export function helloHuman(human: Human): string {
    if (!human.firstname || !human.lastname || !human.birthyear) {
        return "Un objet Human valide doit être passé en paramètre";
    } else {
        const currentYear = new Date().getFullYear();
        const age = currentYear - human.birthyear;
        return `Hello, ${human.firstname.trim()} ${human.lastname.trim()}! You are ${age} years old`;
    }
}

export function repeatHelloYou(n: number, name: string): string {
    if (typeof n !== "number" || n <= 0) {
        return "Veuillez sélectionner un nombre positif supérieur à 0";
    } else if (typeof name !== "string" || name.trim() === "") {
        return "Un nom valide doit être passé en paramètre";
    } else {
        let helloFinal = "";
        for (let i = 0; i < n; i++) {
            helloFinal += helloYou(name) + '\n';
        }
        return helloFinal;
    }
}
