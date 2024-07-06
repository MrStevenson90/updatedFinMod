const fee = document.getElementById('fee');
const feeValue = document.getElementById('feeValue');
const players = document.getElementById('players');
const playersValue = document.getElementById('playersValue');
const gamesPerHour = document.getElementById('gamesPerHour');
const gamesPerHourValue = document.getElementById('gamesPerHourValue');
const hoursPerDay = document.getElementById('hoursPerDay');
const hoursPerDayValue = document.getElementById('hoursPerDayValue');
const daysPerYear = document.getElementById('daysPerYear');
const daysPerYearValue = document.getElementById('daysPerYearValue');

const hourlyRevenue = document.getElementById('hourlyRevenue');
const dailyRevenue = document.getElementById('dailyRevenue');
const yearlyRevenue = document.getElementById('yearlyRevenue');

function updateValues() {
    const feeAmount = fee.value / 100;
    const playersAmount = players.value;
    const gamesPerHourAmount = gamesPerHour.value;
    const hoursPerDayAmount = hoursPerDay.value;
    const daysPerYearAmount = daysPerYear.value;

    const hourlyRev = feeAmount * playersAmount * gamesPerHourAmount;
    const dailyRev = hourlyRev * hoursPerDayAmount;
    const yearlyRev = dailyRev * daysPerYearAmount;

    hourlyRevenue.textContent = `$${hourlyRev.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    dailyRevenue.textContent = `$${dailyRev.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    yearlyRevenue.textContent = `$${yearlyRev.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function syncInputs(slider, input) {
    slider.addEventListener('input', () => {
        input.value = slider.value;
        updateValues();
    });

    input.addEventListener('input', () => {
        slider.value = input.value;
        updateValues();
    });
}

syncInputs(fee, feeValue);
syncInputs(players, playersValue);
syncInputs(gamesPerHour, gamesPerHourValue);
syncInputs(hoursPerDay, hoursPerDayValue);
syncInputs(daysPerYear, daysPerYearValue);

updateValues();
