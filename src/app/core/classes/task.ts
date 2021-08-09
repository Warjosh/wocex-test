export class Task {

    /** Class attribute description. */
	private _id: string;
	set id(_id: string) { this._id = _id };
	get id(): string { return this._id };

    /** Class attribute description. */
	private _name: string;
	set name(_name: string) { this._name = _name };
	get name(): string { return this._name };
    
    /** Class attribute description. */
	private _description: string;
	set description(_description: string) { this._description = _description };
	get description(): string { return this._description };
    
    /** Class attribute description. */
	private _status: string;
	set status(_status: string) { this._status = _status };
	get status(): string { return this._status };

    constructor(id: string, name: string, description: string, status: string){
        this._id = id;
        this._name = name;
        this._description = description;
        this._status = status;
    }
}