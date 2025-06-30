import { NoNavZoneRepository } from "../repositories/NoNavZoneRepository";
import { NoNavigationZone } from "../models/NoNavigationZone"

export class NoNavZoneService
{
    private noNavZoneRepo: NoNavZoneRepository;
        
    constructor(dao: NoNavZoneRepository)
    {
        this.noNavZoneRepo = dao;
    }

    async createNoNavZone(noNavZone: NoNavigationZone): Promise<void>
    {
        return this.noNavZoneRepo.createNoNavZone(noNavZone);
    }

    async getNoNavZone(id: number): Promise<NoNavigationZone>
    {
        return this.noNavZoneRepo.getNoNavZone(id);
    }

    async getAllNoNavZones(): Promise<NoNavigationZone[] | void>
    {
        return this.noNavZoneRepo.getAllNoNavZones();
    }

    async updateNoNavZone(noNavZone: NoNavigationZone): Promise<void>
    {
        this.noNavZoneRepo.updateNoNavZone(noNavZone);
    }

    async deleteNoNavZone(noNavZone: NoNavigationZone): Promise<void>
    {
        this.noNavZoneRepo.deleteNoNavZone(noNavZone);
    }
}