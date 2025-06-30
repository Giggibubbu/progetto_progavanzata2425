import { Sequelize } from "sequelize";
import { AppParameters } from '../utils/AppParameters';

export class DatabaseConnection
{
    private static instance:DatabaseConnection;
    private static sequelize: Sequelize;

    private constructor()
    {
        DatabaseConnection.sequelize = new Sequelize(AppParameters.PGDATABASE, AppParameters.PGUSER, AppParameters.PGUSERPSW, {
            host: AppParameters.PGHOST,
            dialect: 'postgres'
        });
    }

    public static getInstance(): Sequelize
    {
        if(!DatabaseConnection.instance) {
            DatabaseConnection.instance = new DatabaseConnection();
        }
        return DatabaseConnection.sequelize;
    }
    public static async authenticate(): Promise<void>
    {
        try
        {
            await DatabaseConnection.sequelize.authenticate();
            console.log('Connection has been established successfully.');
        }
        catch (error)
        {
            console.error('Unable to connect to the database:', error);
        }
    }
}