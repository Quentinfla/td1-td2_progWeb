import {v4 as uuidv4} from "uuid";
import validator from "validator";
import {StarshipStatus} from "./StarshipStatus.ts";

export class Starship{
    public ref : string
    public speed : number
    public status : StarshipStatus
    public id : string | undefined

    constructor(ref: string, speed: number, id? : string) {
        this.ref =  ref
        this.speed = speed
        this.status = StarshipStatus.PARKED
        if(id && validator.isUUID(id)){
            this.id = id
        }
        else{
            this.id = uuidv4();
        }
    }

}

export function takeOff(startShip : Starship ) {
    if(startShip.status == "PARKED"){
        startShip.status = StarshipStatus.TAKING_OFF;
    }else{
        throw new Error("un avion qui n'est pas stationné ne peut pas être en cours de décollage");
    }
}

export function park(startShip : Starship ) {
    if(startShip.status == "LANDING"){
        startShip.status = StarshipStatus.PARKED;
    }else{
        throw new Error("un avion qui n'est pas en cours d'atterisage ne peut pas stationné");
    }
}

export function fly(startShip : Starship ) {
    if(startShip.status == "TAKING_OFF"){
        startShip.status = StarshipStatus.FLYING;
    }else{
        throw new Error("un avion qui n'est pas en cours de décollage ne peut pas s'envoler");
    }
}

export function land(startShip : Starship ) {
    if(startShip.status == "FLYING"){
        startShip.status = StarshipStatus.LANDING;
    }else{
        throw new Error("un avion qui n'est pas en vol ne peut pas être en cours d'atterissage");
    }
}
