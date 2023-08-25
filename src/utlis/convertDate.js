export default function convertDate(date) {
  let day = date.getDate();
  let month = date.getMonth() + 1; // Adding 1 to get the correct month
  const year = date.getFullYear();

  if (day < 10) {
    day = '0' + day;
  }

  if (month < 10) {
    month = '0' + month;
  }

  return `${day}/${month}/${year}`;
}
