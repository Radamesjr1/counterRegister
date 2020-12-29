module.exports = {
    type: "postgres",
    host: "localhost",
    port: "5432",
    username: "postgres",
    password: "docker",
    database: "counterPostgres",
    entities: ["./src/entity/*.ts"],
    migrations: ["./src/migrations/*.ts"],
    cli: { migrationsDir: "./src/migrations" }
}
