import { Player, PlayerColor } from "../../types";
import { disColorClass } from "../../func/color";

type ColorSelectorProps = {
    onSelect: (color: PlayerColor) => void,
    players: Player[],
    colors: PlayerColor[],
}
 
export function ColorSelector ({ onSelect, players, colors}: ColorSelectorProps) {
    
    return <>
        <div className="players">
            {players.map(player =>  <div key={player.id} className="player">
                {player.name}
                {player.color && <div className={disColorClass(player.color)}></div>}
            </div>)}
        </div>
        <h3>Selectionner une couleur</h3>
        <div className="selector">
            {colors.map(color => <button className={disColorClass(color)} key={color}
            onClick={() => onSelect(color)}></button>
            )}
        </div>
    </>
    }
    
    
    