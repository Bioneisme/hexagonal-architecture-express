export default class ConstantsConfig {
  static DEFAULT_PORT = 3000;

  static DEFAULT_DB_HOST = "localhost";
  static DEFAULT_DB_PORT = 5432;
  static DEFAULT_DB_USERNAME = "postgres";
  static DEFAULT_DB_PASSWORD = "postgres";
  static DEFAULT_DB_DATABASE = "postgres";
  static DEFAULT_DB_SYNCHRONIZE = true;
  static DEFAULT_DB_LOGGING = true;
  static DEFAULT_DB_ENTITIES = "src/modules/**/*.orm-entity.ts";
}
