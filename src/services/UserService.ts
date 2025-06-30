import { UserRepository } from "../repositories/UserRepository";
import { User } from "../models/User";

export class UserService
{
    private userRepo: UserRepository;
        
    constructor(repo: UserRepository)
    {
        this.userRepo = repo;
    }
    
    async createUser(user: User): Promise<void>
    {
        return this.userRepo.createUser(user);
    }

    async getUser(id: number): Promise<User>
    {
        return this.userRepo.getUser(id);
    }

    async getAllUsers(): Promise<User[] | void>
    {
        return this.userRepo.getAllUsers();
    }

    async updateUser(user: User): Promise<void>
    {
        this.userRepo.updateUser(user);
    }

    async deleteUser(user: User): Promise<void>
    {
        this.userRepo.deleteUser(user);
    }
    
}