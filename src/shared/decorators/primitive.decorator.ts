type Target = { [key: string]: any };

export function ToInt(): (target: Target, propertyKey: string) => void {
  return function (target: Target, propertyKey: string): void {
    target[propertyKey] = parseInt(target[propertyKey]);
  };
}

export function ToBoolean(): (target: Target, propertyKey: string) => void {
  return function (target: Target, propertyKey: string): void {
    target[propertyKey] = target[propertyKey] === "true";
  };
}
