import { prevent } from "../../func/dom"
import { canStartGameGuard } from "../../machine/guards"
import { PlayerColor } from "../../types"
import { ColorSelector } from "../component/ColorSelector"
import NameSelector from "../component/NameSelector"
import { useGame } from "../hooks/useGame"

type lobbyScreenProps = {}

export function LobbyScreen ({}: lobbyScreenProps) {
    const {send, context, can} = useGame()
    const colors = [PlayerColor.YELLOW, PlayerColor.RED]

    const joinGame = (name: string) => send({type: 'join', name: name,
    playerId: name})
    const chooseColor = (color: PlayerColor) => send({type: 'chooseColor', color,
    playerId: color === PlayerColor.YELLOW ?'John' : 'Marc'})
    const StartGame = () => send({type: 'start'})

    const canStart = can({type: 'start'})

    return <div>
        <NameSelector onSelect={joinGame} />
        <ColorSelector onSelect={chooseColor} players={context.players} colors={colors} />
        <p>
            <button disabled={!canStart} className="button" onClick={prevent(StartGame)}>Démarrer</button>
        </p>
    </div>
}