import { NoNavigationZoneDAO } from "../dao/NoNavigationZoneDAO";
import { NoNavigationZone } from "../models/NoNavigationZone";

export class NoNavZoneRepository
{
    private noNavZoneDao: NoNavigationZoneDAO;
    
    constructor(dao: NoNavigationZoneDAO)
    {
        this.noNavZoneDao = dao;
    }

    async createNoNavZone(noNavZone: NoNavigationZone): Promise<void>
    {
        return this.noNavZoneDao.create(noNavZone);
    }

    async getNoNavZone(id: number): Promise<NoNavigationZone>
    {
        return this.noNavZoneDao.read(id);
    }

    async getAllNoNavZones(): Promise<NoNavigationZone[] | void>
    {
        return this.noNavZoneDao.readAll();
    }

    async updateNoNavZone(noNavZone: NoNavigationZone): Promise<void>
    {
        this.noNavZoneDao.update(noNavZone);
    }

    async deleteNoNavZone(noNavZone: NoNavigationZone): Promise<void>
    {
        this.noNavZoneDao.delete(noNavZone);
    }

}