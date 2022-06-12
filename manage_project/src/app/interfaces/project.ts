import { Employes } from "./employes";

export interface Project {
    _id?: string;
    name: string;
    startAt: string;
    budget: number;
    leader: string|Employes;
    teams: string[]|Employes[];
    state: boolean
}