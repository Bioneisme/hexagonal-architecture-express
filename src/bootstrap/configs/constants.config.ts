export const ConstantsConfig: { [key: string]: any } = {
  SERVER_PORT: 3000,
  DB_HOST: "localhost",
  DB_PORT: 5432,
  DB_USERNAME: "postgres",
  DB_PASSWORD: "postgres",
  DB_DATABASE: "postgres",
  DB_SYNCHRONIZE: true,
  DB_LOGGING: true,
  DB_ENTITIES:
    process.env.NODE_ENV === "production"
      ? ["dist/modules/**/*.models.js"]
      : ["src/modules/**/*.models.ts"],
};
