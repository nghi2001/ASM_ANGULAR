import { Employes } from "./employes";

export interface Project {
    _id?: string;
    name: string;
    startAt: string;
    budget: number;
    leader: Employes|string;
    teams: string[]|Employes[]|any;
    state: boolean
}