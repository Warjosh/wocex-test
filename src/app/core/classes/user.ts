export class User {

    /** Class attribute description. */
	private _email: string;
	set email(_email: string) { this._email = _email };
	get email(): string { return this._email };

    /** Class attribute description. */
	private _password: string;
	set password(_password: string) { this._password = _password };
	get password(): string { return this._password };

    constructor(email: string, password: string){
        this._email = email;
        this._password = password;
    }
}