export class CombatantModel {
    private _id: String;
    private _combatantName: String;
    private _initiative: Number;
    private _initiativeBonus: Number;
    private _maximumHitPoints: Number;
    private _currentHitPoints: Number;
    private _temporaryHitPoints: Number;
    private _myTurn: Boolean;

    constructor() {
        this.id = "";
        this.combatantName = "";
        this.initiative = 0;
        this.initiativeBonus = 0;
        this.maximumHitPoints = 0;
        this.currentHitPoints = 0;
        this.myTurn = false;
    }

    public get id(): String {
        return this._id;
    }
    public set id(value: String) {
        this._id = value;
    }

    public get combatantName(): String {
        return this._combatantName;
    }
    public set combatantName(value: String) {
        this._combatantName = value;
    }

    public get initiative(): Number {
        return this._initiative;
    }
    public set initiative(value: Number) {
        this._initiative = value;
    }

    public get initiativeBonus(): Number {
        return this._initiativeBonus;
    }
    public set initiativeBonus(value: Number) {
        this._initiativeBonus = value;
    }

    public get maximumHitPoints(): Number {
        return this._maximumHitPoints;
    }
    public set maximumHitPoints(value: Number) {
        this._maximumHitPoints = value;
    }

    public get currentHitPoints(): Number {
        return this._currentHitPoints;
    }
    public set currentHitPoints(value: Number) {
        this._currentHitPoints = value;
    }

    public get temporaryHitPoints(): Number {
        return this._temporaryHitPoints;
    }
    public set temporaryHitPoints(value: Number) {
        this._temporaryHitPoints = value;
    }

    public get myTurn(): Boolean {
        return this._myTurn;
    }
    public set myTurn(value: Boolean) {
        this._myTurn = value;
    }
}
