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

//*SAYFA YÜKLENDİĞİNDE FETCH METODU ÇALIŞACAK YAPIYI OLUŞTURALIM

function loadPageImages() {
  setTimeout(() => {
    fetch("https://api.thecatapi.com/v1/images/search?limit=10")
      .then((res) => res.json())
      .then((data) => {
        document.querySelector(".row").innerHTML = "";
        data.forEach((cat) => {
          document.querySelector(".row").innerHTML += `
        <div class="col-12 col-sm-6 col-lg-4 mt-3">
            <div style="height:200px;">
                <img src="${cat.url}" class="w-100 h-100" alt="...">
            </div>
        </div>
        `;
        });
      })
      .catch(() => {
        document.querySelector(
          "body"
        ).innerHTML = `<img src="./img/error.gif" class="w-100 h-100" alt="...">`;
      });
  }, 0);
}

loadPageImages();

document.querySelector(".btn").onclick = loadPageImages;
