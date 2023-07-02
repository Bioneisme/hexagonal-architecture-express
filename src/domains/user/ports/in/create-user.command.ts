export class CreateUserCommand {
  constructor(
    private readonly _name: string,
    private readonly _email: string,
    private readonly _phone: string,
    private readonly _password: string
  ) {}

  get name(): string {
    return this._name;
  }

  get email(): string {
    return this._email;
  }

  get phone(): string {
    return this._phone;
  }

  get password(): string {
    return this._password;
  }
}
