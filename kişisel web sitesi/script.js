// Form gönderme olayını dinliyoruz
document.getElementById("personalDataForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Sayfanın yenilenmesini engeller

    // Form alanlarındaki verileri alıyoruz
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    // Verileri tabloya ekle
    const tableBody = document.getElementById("dataTable").querySelector("tbody");
    const newRow = document.createElement("tr");

    newRow.innerHTML = `
        <td>${name}</td>
        <td>${email}</td>
        <td>${phone}</td>
        <td>${message}</td>
    `;

    tableBody.appendChild(newRow); // Yeni satırı tabloya ekle

    // Formu sıfırlıyoruz
    this.reset();

    // Basit bir bildirim
    alert("Veriler tabloya eklendi!");
});
