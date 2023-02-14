import { Draw } from "../component/Draw"
import { useGame } from "../hooks/useGame"

type drawScreenProps = {}

export function DrawScreen ({}: drawScreenProps) {
    const {send} = useGame()
    const restart = () => send({type: 'restart'})
    return <div>
        <Draw onRestart={restart}/>
    </div>
}