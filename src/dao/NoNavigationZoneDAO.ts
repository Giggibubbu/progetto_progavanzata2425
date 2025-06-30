import { OrmModels } from '../connector/OrmModels';
import { NoNavigationZone } from '../models/NoNavigationZone';
import { IDao } from './IDAO';
export class NoNavigationZoneDAO implements IDao<NoNavigationZone>
{
    private model;
    
    constructor()
    {
        this.model = OrmModels.initModels().noNavigationZone;
        OrmModels.authenticate();
    }

    async create(item: NoNavigationZone): Promise<void> {
        return this.model.create({
            id: item.id,
            operator_id: item.operatorId,
            route: item.route,
            validity_start: item.validityStart,
            validity_end: item.validityEnd
        })
        .then(noNavZone => console.log("NoNavZone created or updated: ", noNavZone.toJSON()))
        .catch(error => console.error(error))
    }
    
    async read(id: number): Promise<NoNavigationZone> {
        return this.model.findByPk(id)
        .then(noNavZone => noNavZone?.toJSON())
        .catch(error => console.error(error))
    }
    
    async readAll(): Promise<NoNavigationZone[] | void> {
        return this.model.findAll()
        .then(noNavZones => noNavZones.map(noNavZone => noNavZone.toJSON()))
        .catch(error => console.error(error));
    }
    
    async update(item: NoNavigationZone): Promise<void> {
        return this.create(item);
    }
    
    async delete(item: NoNavigationZone): Promise<void> {
        return this.model.findByPk(item.id)
        .then(noNavZone => noNavZone?.destroy())
        .catch(error => console.error(error));
    }
}