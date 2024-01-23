const date = new Date(1901, 0, 1);
const endDate = new Date(2000, 11, 31);

let firstSundayCount = 0;
while (date <= endDate) {
  if (date.getDay() === 0) {
    firstSundayCount += 1;
  }
  date.setMonth(date.getMonth() + 1);
}

console.log({ firstSundayCount });
