function formatDate(born, died) {
  const bornDate = new Date(born);
  const diedDate = new Date(died);
  const bornDay = bornDate.getDate();
  const diedDay = diedDate.getDate();
  const bornMonth = bornDate.toLocaleString("default", { month: "short" });
  const diedMonth = diedDate.toLocaleString("default", { month: "short" });
  const bornYear = bornDate.getFullYear();
  const diedYear = diedDate.getFullYear();
  const bornSuffix = getOrdinalSuffix(bornDay);
  const diedSuffix = getOrdinalSuffix(diedDay);
  const age = diedYear - bornYear;

  return `${bornMonth}. ${bornDay}${bornSuffix}, ${bornYear} - ${diedMonth}. ${diedDay}${diedSuffix}, ${diedYear} (${age})`;
}

function getOrdinalSuffix(number) {
  if (number >= 11 && number <= 13) {
    return "th";
  }
  switch (number % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

module.exports = {
  formatDate,
  getOrdinalSuffix,
};
