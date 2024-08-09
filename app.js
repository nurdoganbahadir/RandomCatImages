//*ÖNCE TARİH VE ZAMANI YAZDIRAN FONKSİYONUMUZU AYARLICAZ

function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const day = now.getDate().toString().padStart(2, "0");
  const month = (now.getMonth() + 1).toString().padStart(2, "0"); // Aylar 0-11 arası olduğu için +1 ekliyoruz.
  const year = now.getFullYear();

  const timeString = `${hours}:${minutes}:${seconds}`;
  const dateString = `${day}.${month}.${year}`;

  document.querySelector(".time").textContent = `${timeString} - ${dateString}`;
}
setInterval(updateClock, 1000);
updateClock();

