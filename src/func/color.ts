import { CellState, PlayerColor } from "../types";

export function disColorClass (color: CellState) {
    if(color === 'E') {
        return 'disc'
    }
    return `disc disc-${color === PlayerColor.YELLOW ? 'yellow' : 'red'}`
}
