import { ConstantsConfig } from "../../bootstrap/configs/constants.config";

type Target = { [key: string]: any };

export function InitializeFromEnv(): (
  target: Target,
  propertyKey: string
) => void {
  return function (target: Target, propertyKey: string): void {
    const envKey = propertyKey.toUpperCase();
    target[propertyKey] =
      process.env[envKey] ||
      ConstantsConfig[propertyKey] ||
      target[propertyKey];
  };
}
