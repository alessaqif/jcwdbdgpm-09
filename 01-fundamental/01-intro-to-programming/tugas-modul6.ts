function hitungDataSiswa(siswaArray) {
  if (!siswaArray || siswaArray.length === 0) {
    return { Nilai: {}, Umur: {} };
  }

  // Ambil tahun sekarang
  const tahunSekarang = new Date().getFullYear();

  // Ubah tanggal lahir menjadi umur (dalam tahun)
  const umur = siswaArray.map(s => tahunSekarang - new Date(s.Umur).getFullYear());
  const nilai = siswaArray.map(s => s.Nilai);

  // Fungsi untuk menghitung statistik
  const hitungStatistik = arr => ({
    Tertinggi: Math.max(...arr),
    Terendah: Math.min(...arr),
    RataRata: arr.reduce((a, b) => a + b, 0) / arr.length
  });

  return {
    Nilai: hitungStatistik(nilai),
    Umur: hitungStatistik(umur)
  };
}

// Contoh data siswa
const dataSiswa = [
  { Nama: "Andi", Email: "andi@mail.com", Umur: "2002-06-10", Nilai: 85 },
  { Nama: "Budi", Email: "budi@mail.com", Umur: "2000-02-15", Nilai: 90 },
  { Nama: "Citra", Email: "citra@mail.com", Umur: "2004-09-22", Nilai: 78 }
];

// Contoh pemanggilan fungsi
console.log(hitungDataSiswa(dataSiswa));

{
  // Kelas Produk
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

// Kelas Transaksi
class Transaction {
  constructor() {
    this.products = []; // daftar produk di keranjang
    this.total = 0;     // total harga
  }

  // Tambah produk ke keranjang
  addToCart(product, qty) {
    this.products.push({
      product: product,
      qty: qty,
      subtotal: product.price * qty
    });
    console.log(`${qty}x ${product.name} berhasil ditambahkan ke keranjang.`);
  }

  // Tampilkan total sementara
  showTotal() {
    this.total = this.products.reduce((sum, item) => sum + item.subtotal, 0);
    console.log(`Total sementara: Rp${this.total.toLocaleString()}`);
  }

  // Checkout transaksi
  checkout() {
    this.showTotal();
    console.log("=== Transaksi Selesai ===");
    return {
      Produk: this.products.map(p => ({
        Nama: p.product.name,
        Harga: p.product.price,
        Jumlah: p.qty,
        Subtotal: p.subtotal
      })),
      Total: this.total
    };
  }
}

// === Contoh penggunaan ===

// Buat beberapa produk
const produk1 = new Product("Indomie Goreng", 3500);
const produk2 = new Product("Teh Botol", 5000);
const produk3 = new Product("Coklat SilverQueen", 15000);

// Buat transaksi baru
const transaksi1 = new Transaction();

// Tambahkan produk ke keranjang
transaksi1.addToCart(produk1, 4);
transaksi1.addToCart(produk2, 2);
transaksi1.addToCart(produk3, 5);

// Lihat total sementara
transaksi1.showTotal();

// Checkout transaksi
const hasilTransaksi = transaksi1.checkout();
console.log(hasilTransaksi);

}
