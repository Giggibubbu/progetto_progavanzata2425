import { OrmModels } from '../connector/OrmModels';
import { User } from '../models/User';
import { IDao } from './IDAO';
export class UserDAO implements IDao<User>
{
    private model;
    
    constructor()
    {
        this.model = OrmModels.initModels().user;
        OrmModels.authenticate();
    }

    async create(item: User): Promise<void> {
        return this.model.create({
            id: item.id,
            email: item.email,
            role: item.role,
            tokens: item.tokens
        })
        .then(user => console.log("User created: ", user.toJSON()))
        .catch(error => console.error(error))
    }
    
    async read(id: number): Promise<User> {
        return this.model.findByPk(id)
        .then(user => user?.toJSON())
        .catch(error => console.error(error))
    }
    
    async readAll(): Promise<User[] | void> {
        return this.model.findAll()
        .then(users => users.map(user => user.toJSON()))
        .catch(error => console.error(error));
    }
    
    async update(item: User): Promise<void> {
        try
        {
            const user = await this.read(item.id);
            if(user !== null)
                {
                    await this.model.build({
                        id: item.id,
                        email: item.email,
                        role: item.role,
                        tokens: item.tokens
                    }).save()
                }
            else
            {
                console.log("No existing user with id: ", item.id)
            }

        }
        catch(error)
        {
            console.error(error);
        }
        
    }
    
    async delete(item: User): Promise<void> {
        return this.model.findByPk(item.id)
        .then(user => user?.destroy())
        .catch(error => console.error(error));
    }
}