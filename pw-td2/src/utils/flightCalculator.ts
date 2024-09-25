import type {Planet} from "../Planet.ts";
import type {Starship} from "../Starship.ts";

export function calculateFlightDurationFromEarth(planet: Planet, starship: Starship, unity: 'heures' | 'jours' = 'heures') {
    const time = planet.distanceFromEarth / starship.speed;
    return unity === 'jours' ? time / 24 + " jours" : time + " heures";
}
