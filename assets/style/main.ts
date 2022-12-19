class Khalid{
    private _id: number;
    private _nom : string;
    private _prenom : string;

    public constructor(id: number, nom: string, prenom: string) {
        this._id = id;
        this._nom = nom;
        this._prenom =prenom;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get nom(): string {
        return this._nom;
    }

    set nom(value: string) {
        this._nom = value;
    }

    get prenom(): string {
        return this._prenom;
    }

    set prenom(value: string) {
        this._prenom = value;
    }
}

const alo = new Khalid(2, "khalid", "fifel");
console.log(alo.id)
console.log(alo.nom)
console.log(alo.prenom)