document.getElementById('addPlayers').addEventListener('click', () => {
    const playerInputs = document.getElementById('playerInputs');
    playerInputs.innerHTML = '';
    for (let i = 1; i <= 11; i++) {
        playerInputs.innerHTML += `
            <label for="player${i}">Player ${i} Name:</label>
            <input type="text" id="player${i}">
        `;
    }
});

document.getElementById('startInnings').addEventListener('click', () => {
    const players = [];
    for (let i = 1; i <= 11; i++) {
        const playerName = document.getElementById(`player${i}`).value;
        players.push({ name: playerName, runs: 0, balls: 0 });
    }

    const teamA = document.getElementById('teamA').value;
    const teamB = document.getElementById('teamB').value;
    const battingTeam = document.getElementById('battingTeam').value.toUpperCase() === 'A' ? teamA : teamB;
    const overs = parseInt(document.getElementById('overs').value);

    let currentRuns = 0;
    let totalWickets = 0;
    let currentOver = 0;
    let currentBall = 0;
    const scoreboard = document.getElementById('scoreboard');
    const striker = document.getElementById('striker').value;
    const nonStriker = document.getElementById('nonStriker').value;

    function updateScoreboard() {
        scoreboard.innerHTML = `
            <h3>Scoreboard</h3>
            <p>Current Runs: ${currentRuns}</p>
            <p>Wickets: ${totalWickets}</p>
            <p>Overs: ${currentOver}.${currentBall}</p>
        `;
        players.forEach(player => {
            scoreboard.innerHTML += `<p>${player.name}: ${player.runs} runs, ${player.balls} balls</p>`;
        });
    }

    function swapBatsmen() {
        const temp = striker;
        striker = nonStriker;
        nonStriker = temp;
    }

    function playBall(event) {
        if (currentOver >= overs) {
            document.removeEventListener('keydown', playBall);
            alert('Innings Over!');
            return;
        }

        const ball = event.key;
        switch (ball) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '6':
                currentBall++;
                currentRuns += parseInt(ball);
                players.find(p => p.name === striker).runs += parseInt(ball);
                players.find(p => p.name === striker).balls += 1;
                if (ball === '1' || ball === '3') {
                    swapBatsmen();
                }
                break;
            case 'W':
            case 'w':
                totalWickets++;
                currentBall++;
                if (totalWickets >= 10) {
                    document.removeEventListener('keydown', playBall);
                    alert('All Out!');
                    break;
                }
                break;
            case 'D':
            case 'd':
                currentRuns++;
                break;
            case 'N':
            case 'n':
                currentRuns++;
                break;
        }

        if (currentBall >= 6) {
            currentOver++;
            currentBall = 0;
            swapBatsmen();
        }

        updateScoreboard();
    }

    document.addEventListener('keydown', playBall);
    updateScoreboard();
});
