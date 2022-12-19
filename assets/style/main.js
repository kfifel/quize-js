var Khalid = /** @class */ (function () {
    function Khalid(id, nom, prenom) {
        this._id = id;
        this._nom = nom;
        this._prenom = prenom;
    }
    Object.defineProperty(Khalid.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Khalid.prototype, "nom", {
        get: function () {
            return this._nom;
        },
        set: function (value) {
            this._nom = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Khalid.prototype, "prenom", {
        get: function () {
            return this._prenom;
        },
        set: function (value) {
            this._prenom = value;
        },
        enumerable: false,
        configurable: true
    });
    return Khalid;
}());
var alo = new Khalid(2, "khalid", "fifel");
console.log(alo.id);
console.log(alo.nom);
console.log(alo.prenom);
