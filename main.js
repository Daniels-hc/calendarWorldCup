function createGame(player1, hour, player2) {
  return `
    <li>
      <img
        src="./assets/icon-${player1}.svg"
        alt="Bandeira da ${player1}"
      />
      <strong>${hour}</strong>
      <img
        src="./assets/icon-${player2}.svg"
        alt="Bandeira de ${player2}"
      />
    </li>
  `
}

let delay = -0.3
function createCard(date, day, games) {
  delay += 0.3
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard(
    "24/11",
    "quinta",
    createGame("switzerland", "07:00", "cameroon") +
      createGame("colombia", "20:00", "japan") +
      createGame("southKorea", "10:00", "ghana")
  ) +
  createCard("28/11", "segunda", createGame("switzerland", "13:00", "brazil")) +
  createCard("02/11", "sexta", createGame("switzerland", "16:00", "serbia"))
