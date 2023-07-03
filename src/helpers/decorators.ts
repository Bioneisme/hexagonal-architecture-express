import { ConstantsConfig } from "../bootstrap/configs/constants.config";

export function InitializeFromEnv(): Function {
  return function (target: any, propertyKey: string): void {
    const envKey = propertyKey.toUpperCase();
    target[propertyKey] =
      process.env[envKey] ||
      ConstantsConfig[propertyKey] ||
      target[propertyKey];
  };
}

export function ToInt(): Function {
  return function (target: any, propertyKey: string): void {
    target[propertyKey] = parseInt(target[propertyKey]);
  };
}

export function ToBoolean(): Function {
  return function (target: any, propertyKey: string): void {
    target[propertyKey] = target[propertyKey] === "true";
  };
}
