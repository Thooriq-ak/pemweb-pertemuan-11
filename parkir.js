function biayaParkir() {
  let masuk = document.querySelector("#masuk").value;
  let keluar = document.querySelector("#keluar").value;

  let durasi = keluar - masuk;

  let biaya = 3000;

  //looping durasi untuk menghitung biaya
  for (let i = 2; i < durasi; i++) {
    biaya += 1000;
  }

  //tangkap elemen untuk menapilkan hasil
  let hasilDurasi = document.querySelector("#hasilDurasi");
  let totalBiaya = document.querySelector("#totalBiaya");

  // tampilskan hasil
  hasilDurasi.innerHTML = durasi;
  totalBiaya.innerHTML = biaya;
}
