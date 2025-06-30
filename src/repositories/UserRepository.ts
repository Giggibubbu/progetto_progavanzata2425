import { UserDAO } from "../dao/UserDAO";
import { User } from "../models/User";

export class UserRepository
{
    private userDao: UserDAO;
    
    constructor(dao: UserDAO)
    {
        this.userDao = dao;
    }

    async createUser(user: User): Promise<void>
    {
        return this.userDao.create(user);
    }

    async getUser(id: number): Promise<User>
    {
        return this.userDao.read(id);
    }

    async getAllUsers(): Promise<User[] | void>
    {
        return this.userDao.readAll();
    }

    async updateUser(user: User): Promise<void>
    {
        this.userDao.update(user);
    }

    async deleteUser(user: User): Promise<void>
    {
        this.userDao.delete(user);
    }




}