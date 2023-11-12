// script.js

const tableBody = document.getElementById('table-body');
const namaInput = document.getElementById('nama');
const barangInput = document.getElementById('barang');
const tanggalInput = document.getElementById('tanggal');
const hargaInput = document.getElementById('harga');
const fotoInput = document.getElementById('foto');
const previewImage = document.getElementById('preview');

function addData() {
    const nama = namaInput.value;
    const barang = barangInput.value;
    const tanggal = tanggalInput.value;
    const harga = hargaInput.value;
    const foto = fotoInput.files[0];

    // Validasi input
    if (!nama || !barang || !tanggal || !harga || !foto) {
        alert('Silakan lengkapi semua data.');
        return;
    }

    // Simulasikan menyimpan data ke database (dalam contoh ini, disimpan dalam variabel JavaScript)
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${nama}</td>
        <td>${barang}</td>
        <td>${tanggal}</td>
        <td>${harga}</td>
        <td><img src="${URL.createObjectURL(foto)}" alt="Foto" width="50"></td>
        <td>
            <button onclick="editData(this)">Edit</button>
            <button onclick="deleteData(this)">Delete</button>
        </td>
    `;
    tableBody.appendChild(newRow);

    // Reset formulir
    namaInput.value = '';
    barangInput.value = '';
    tanggalInput.value = '';
    hargaInput.value = '';
    fotoInput.value = '';
}

function editData(button) {
    const row = button.parentNode.parentNode;
    const cells = row.children;

    // Implementasi logika pengeditan data
    // Misalnya, isi formulir dengan data yang akan diedit
    namaInput.value = cells[0].textContent;
    barangInput.value = cells[1].textContent;
    tanggalInput.value = cells[2].textContent;
    hargaInput.value = cells[3].textContent;

    // Hapus baris setelah data diedit
    row.remove();
}

function deleteData(button) {
    const row = button.parentNode.parentNode;
    row.remove();

    // Implementasi logika penghapusan data
}
