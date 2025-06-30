import { NavigationPlanRequestDAO } from "../dao/NavigationPlanRequestDAO";
import { NavigationPlanRequest } from "../models/NavigationPlanRequest";

export class NavigationPlanRequestRepository
{
    private navPlanReqDao: NavigationPlanRequestDAO;
    
    constructor(dao: NavigationPlanRequestDAO)
    {
        this.navPlanReqDao = dao;
    }

    async createNavigationPlanRequest(navPlan: NavigationPlanRequest): Promise<void>
    {
        return this.navPlanReqDao.create(navPlan);
    }

    async getNavigationPlanRequest(id: number): Promise<NavigationPlanRequest>
    {
        return this.navPlanReqDao.read(id);
    }

    async getAllNavigationPlanRequests(): Promise<NavigationPlanRequest[] | void>
    {
        return this.navPlanReqDao.readAll();
    }

    async updateNavigationPlanRequest(navPlan: NavigationPlanRequest): Promise<void>
    {
        this.navPlanReqDao.update(navPlan);
    }

    async deleteNavigationPlanRequest(NavigationPlanRequest: NavigationPlanRequest): Promise<void>
    {
        this.navPlanReqDao.delete(NavigationPlanRequest);
    }




}