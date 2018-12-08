import { MonsterModel } from './monster-model';

export class MonsterGroupModel {
    private _id: String;
    private _name: String;
    private _quantity: Number;
    private _initiativeBonus: Number;
    private _monsters: MonsterModel[];

    constructor(id, quantity, name, initiativeBonus) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.initiativeBonus = initiativeBonus;
        this.monsters = new Array<MonsterModel>(quantity);
    }

    public addMonster(monster : MonsterModel) {
        this.monsters.push(monster);
    }

    public get id(): String {
        return this._id;
    }
    public set id(value: String) {
        this._id = value;
    }
    public get name(): String {
        return this._name;
    }
    public set name(value: String) {
        this._name = value;
    }
    public get quantity(): Number {
        return this._quantity;
    }
    public set quantity(value: Number) {
        this._quantity = value;
    }
    public get initiativeBonus(): Number {
        return this._initiativeBonus;
    }
    public set initiativeBonus(value: Number) {
        this._initiativeBonus = value;
    }
    public get monsters(): MonsterModel[] {
        return this._monsters;
    }
    public set monsters(value: MonsterModel[]) {
        this._monsters = value;
    }
}
