import React, { useState } from "react";

function TounamentForm() {
    const [player, setPlayer] = useState("");
    const [tournament_name, setTournamentName] = useState("");
    const [starting_stack, setStartingStack] = useState("");
    async function registTournament(formData) {
        // await 
    }
    return (
        <form onSubmit={registTournament}>
            <input 
            id="player"
            type="text"
            name="player"
            onChange={(e) => setPlayer(e.target.value)} />
            <input 
            id="tournament_name"
            name="tournament_name"
            onChange={(e) => setTournamentName(e.target.value)} />
            <input 
            id="starting_stack"
            name="starting_stack"
            onChange={(e) => setStartingStack(e.target.value)} />
            <button type={submit}>登録</button>
        </form>
    )
}

export default TounamentForm;