export class AppParameters
{

    static APP_PORT = process.env.APP_PORT || 3000;
    static PGDATABASE = process.env.PGDATABASE || "pa2425";
    static PGHOST = process.env.PGHOST || "localhost";
    static PGPORT = process.env.PGPORT || 5432;
    static PGUSER = process.env.PGUSER || "postgres";
    static PGUSERPSW = process.env.PGUSERPSW || "postgres";

}
