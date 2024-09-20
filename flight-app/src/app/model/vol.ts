import { Avion } from "./avion";
import { Pilote } from "./pilote";

export interface Vol {
    numVol: string;
pilote: Pilote;
avion: Avion;
villeDep: string;
villeArr: string;
heureDep: string;
heureArr: string;
}
