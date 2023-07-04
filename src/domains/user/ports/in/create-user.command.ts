export class CreateUserCommand {
  constructor(
    private readonly _name: string,
    private readonly _email: string,
    private readonly _phone: string,
    private readonly _password: string
  ) {
    this.validate();
  }

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

  validate() {
    if (!this._name) {
      throw new Error("Name is required");
    }

    if (!this._email) {
      throw new Error("Email is required");
    }

    if (!this._phone) {
      throw new Error("Phone is required");
    }

    if (!this._password) {
      throw new Error("Password is required");
    }
  }
}
