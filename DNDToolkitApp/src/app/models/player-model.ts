import { CombatantModel } from './combatant-model';

export class PlayerModel extends CombatantModel {
    private _playerName: String;
    
    public get playerName(): String {
        return this._playerName;
    }
    public set playerName(value: String) {
        this._playerName = value;
    }
}
