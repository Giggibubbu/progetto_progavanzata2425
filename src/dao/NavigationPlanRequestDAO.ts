import { OrmModels } from '../connector/OrmModels';
import { NavigationPlanRequest } from '../models/NavigationPlanRequest';
import { IDao } from './IDAO';
export class NavigationPlanRequestDAO implements IDao<NavigationPlanRequest>
{
    private model;
    
    constructor()
    {
        this.model = OrmModels.initModels().navigationRequest;
        OrmModels.authenticate();
    }

    async create(item: NavigationPlanRequest): Promise<void> {
        return this.model.create({
            id: item.id,
            user_id: item.userId,
            status: item.status,
            submitted_at: item.submittedAt,
            date_start: item.dateStart,
            date_end: item.dateEnd,
            drone_id: item.droneId,
            navigation_plan: item.navigationPlan,
            motivation: item.motivation
        })
        .then(navPlan => console.log("User created or updated: ", navPlan.toJSON()))
        .catch(error => console.error(error))
    }

    async read(id: number): Promise<NavigationPlanRequest> {
        return this.model.findByPk(id)
        .then(navPlan => navPlan?.toJSON())
        .catch(error => console.error(error))
    }

    async readAll(): Promise<NavigationPlanRequest[] | void> {
        return this.model.findAll()
        .then(navPlans => navPlans.map(navPlan => navPlan.toJSON()))
        .catch(error => console.error(error));
    }

    async update(item: NavigationPlanRequest): Promise<void> {
        return this.create(item);
    }

    async delete(item: NavigationPlanRequest): Promise<void> {
        return this.model.findByPk(item.id)
        .then(navPlan => navPlan?.destroy())
        .catch(error => console.error(error));
    }

}