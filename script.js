const state = {
  home: 0,
  guest: 0,
};

let hasScored = false;

const homeCard = document.querySelector('.team-card[data-team="home"]');
const guestCard = document.querySelector('.team-card[data-team="guest"]');
const statusEl = document.getElementById('statusMessage');
const resetBtn = document.getElementById('resetBtn');

const cards = {
  home: homeCard,
  guest: guestCard,
};

const scores = {
  home: homeCard.querySelector('.score'),
  guest: guestCard.querySelector('.score'),
};

const names = {
  home: homeCard.querySelector('.team-name'),
  guest: guestCard.querySelector('.team-name'),
};

function getTeamName(team) {
  const value = names[team].value.trim();
  if (value) {
    return value;
  }
  return team === 'home' ? 'Home' : 'Guest';
}

function updateScores() {
  scores.home.textContent = state.home;
  scores.guest.textContent = state.guest;

  const isTie = hasScored && state.home === state.guest;
  cards.home.classList.toggle('tied', isTie);
  cards.guest.classList.toggle('tied', isTie);
  cards.home.classList.toggle('leading', !isTie && state.home > state.guest);
  cards.guest.classList.toggle('leading', !isTie && state.guest > state.home);
}

function updateStatus() {
  if (!hasScored) {
    statusEl.textContent = 'Tip-off ready.';
    return;
  }

  if (state.home === state.guest) {
    statusEl.textContent = `Tie game at ${state.home}.`;
    return;
  }

  const leader = state.home > state.guest ? 'home' : 'guest';
  const leadBy = Math.abs(state.home - state.guest);
  statusEl.textContent = `${getTeamName(leader)} leads by ${leadBy}.`;
}

function handleScoreClick(event) {
  const button = event.currentTarget;
  const teamCard = button.closest('.team-card');
  if (!teamCard) {
    return;
  }

  const team = teamCard.dataset.team;
  const points = Number(button.dataset.points);
  if (!team || Number.isNaN(points)) {
    return;
  }

  state[team] += points;
  hasScored = true;
  updateScores();
  updateStatus();
}

function buildFinalMessage() {
  if (!hasScored) {
    return 'Tip-off ready.';
  }

  const homeName = getTeamName('home');
  const guestName = getTeamName('guest');

  if (state.home === state.guest) {
    return `Final: ${homeName} and ${guestName} tie at ${state.home}. New game ready.`;
  }

  const winner = state.home > state.guest ? 'home' : 'guest';
  const winnerName = getTeamName(winner);
  const winnerScore = state[winner];
  const loserScore = state[winner === 'home' ? 'guest' : 'home'];
  return `Final: ${winnerName} win ${winnerScore}-${loserScore}. New game ready.`;
}

function resetGame() {
  const message = buildFinalMessage();
  state.home = 0;
  state.guest = 0;
  hasScored = false;
  updateScores();
  statusEl.textContent = message;
}

document.querySelectorAll('.score-btn').forEach((button) => {
  button.addEventListener('click', handleScoreClick);
});

resetBtn.addEventListener('click', resetGame);

Object.values(names).forEach((input) => {
  input.addEventListener('input', updateStatus);
});

updateScores();
updateStatus();
