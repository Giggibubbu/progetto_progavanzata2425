import { NavigationPlanRequestRepository } from "../repositories/NavPlanReqRepository";
import { NavigationPlanRequest } from "../models/NavigationPlanRequest";

export class NavPlanReqService
{
    private navPlanReqRepo: NavigationPlanRequestRepository;
        
    constructor(repo: NavigationPlanRequestRepository)
    {
        this.navPlanReqRepo = repo;
    }

    async createNavigationPlanRequest(navPlan: NavigationPlanRequest): Promise<void>
    {
        return this.navPlanReqRepo.createNavigationPlanRequest(navPlan);
    }

    async getNavigationPlanRequest(id: number): Promise<NavigationPlanRequest>
    {
        return this.navPlanReqRepo.getNavigationPlanRequest(id);
    }

    async getAllNavigationPlanRequests(): Promise<NavigationPlanRequest[] | void>
    {
        return this.navPlanReqRepo.getAllNavigationPlanRequests();
    }

    async updateNavigationPlanRequest(navPlan: NavigationPlanRequest): Promise<void>
    {
        this.navPlanReqRepo.updateNavigationPlanRequest(navPlan);
    }

    async deleteNavigationPlanRequest(NavigationPlanRequest: NavigationPlanRequest): Promise<void>
    {
        this.navPlanReqRepo.deleteNavigationPlanRequest(NavigationPlanRequest);
    }
}