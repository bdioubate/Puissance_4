import { describe, beforeEach, it, expect } from "vitest";
import { interpret, InterpreterFrom } from "xstate";
import { GameMachine, GameModel } from "../../src/machine/GameMachine"

describe("machine/guards", () => {

    describe("canJoinGame", () => {
        let machine: InterpreterFrom<typeof GameMachine>

        beforeEach(() => {
            machine = interpret(GameMachine).start()
        })

        it('should let a player join', () => {
            expect(machine.send(GameModel.events.join("1", "1")).changed).toBe(true)
            expect(machine.state.context.players).toHaveLength(1)
            expect(machine.send(GameModel.events.join("2", "2")).changed).toBe(true)
            expect(machine.state.context.players).toHaveLength(2)
        })

        it('should no let me join a game twice', () => {
            expect(machine.send(GameModel.events.join("1", "1")).changed).toBe(true)
            expect(machine.send(GameModel.events.join("1", "1")).changed).toBe(false)
        })
    })
})