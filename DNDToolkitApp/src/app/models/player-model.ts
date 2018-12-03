import { CombatantModel } from './combatant-model';

export class PlayerModel extends CombatantModel {
    private _characterName: String;
    
    public get characterName(): String {
        return this._characterName;
    }
    public set characterName(value: String) {
        this._characterName = value;
    }
}
