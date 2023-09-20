# Irsx Front End Basic Test (Reactjs)

## Deskripsi
Repository ini berisi serangkaian pertanyaan wawancara teknis yang dirancang untuk menilai kemampuan pelamar dalam Pengembangan Frontend. Melalui pertanyaan-pertanyaan ini, kami bertujuan untuk memperoleh gambaran yang jelas mengenai kemampuan dan keahlian kandidat dalam Pengembangan Frontend.

## Prasyarat
Sebelum memulai tugas ini, pastikan Anda telah memenuhi prasyarat sebagai berikut:

- Sudah memiliki pengetahuan dasar mengenai frontend development
- Sudah mempunyai perangkat komputer yang memenuhi spesifikasi untuk menjalankan aplikasi React
- Sudah menginstal Node.js dan NPM pada komputer Anda

## Instruksi
- Lakukan clone repository ini ke komputer Anda
- Jawab semua pertanyaan yang ada pada file `README.md`
- Simpan perubahan pada file `App.js` dan `README.md` yang sudah Anda buat
- Kirim file `App.js` dan `README.md`  (dalam bentuk zip) yang sudah Anda jawab melalui email ke miftah@aviana.co.id dengan Subject "TEST_FE_[NAMA]"

Pastikan Anda telah membaca dengan cermat instruksi dan pertanyaan yang ada sebelum memulai tugas.
 
---

### Question 1
Apa itu React Hook? Jelaskan masing-masing contoh penggunaannya yang pernah kamu pakai.
### Answer 1
...
### Question 2
Apa itu lifecycle methods di React? Jelaskan urutan lifecycle methods.
### Answer 2
...
### Question 3
Pernahkah kamu menggunakan State Management tool di react? Ceritakan mengapa kamu memakai State Management tool yang kamu pakai?
### Answer 3
...
### Question 4
Tolong tulis pengetahuanmu tentang Search Engine Optimization (SEO)?
### Answer 4
...
### Question 5
Tolong tulis pengetahuanmu tentang Progresive Web Application (PWA)?
### Answer 5
...
### Question 6
Ada beberapa tehnik untuk membangun dan mendeliver sebuah web app, salah satu yang biasa digunakan adalah Client Side Rendering (CSR). Apakah kamu pernah menggunakan tehnik lainnya? Jika pernah berikan penjelasan dan kelebihan dari tehnik yang pernah kamu pakai.
### Answer 6
...
### Question 7
Pernahkan kamu memakai tehnik Lazy Load? Jika pernah apa kelebihan dalam menggunakan tehnik Lazy Load?
### Answer 7
...
### Question 8
Tolong tulis pengetahuanmu tentang Service Worker?
### Answer 8
...
### Question 9
Tolong tulis pengetahuanmu tentang Event Driven?
### Answer 9
...
### Task 1
Sebelumnya jalankan Applikasi React diatas. Dalam page `/` terdapat button `increment` pada `ChildComponent` yang bertujuan untuk menambah Total count pada `ParentComponent`. 

Ketika button `increment` di-klik terjadi delay selama 2 detik dikarenakan `ChildComponent` terdapat "heavy-process" (divisualisasikan menggunakan function `sleep()`).

Kita dapat mengimprove kode ini agar `ChildComponent` tidak melakukan re-render sehingga "heavy-process" tersebut hanya dilakukan sekali.

Improve kode tersebut agar ketika tombol `increment` ditekan tidak terjadi re-render pada `ChildComponent`. Karena ketika `ChildComponent` melakukan re-render maka "heavy-process" akan di jalankan lagi.

Hint: Lihat `Console` pada browser untuk visualisai re-render, React.memo dan useCallback

### Task 2
Anda diberikan sebuah string yang berisi ekspresi matematika sebagai berikut: '(2x5)+10/5x(9-10)' [Result = 8]. Tugas Anda adalah mengevaluasi ekspresi tersebut.

Catatan: Anda tidak boleh menggunakan fungsi eval() atau fungsi sejenis yang ada dalam bahasa pemrograman apapun. Anda harus menyelesaikan tugas ini dengan menggunakan pemrograman yang kreatif.

```javascript
function evaluateExpression(expression) {
  // Langkah-langkah penyelesaian tugas di sini
}

const expression = '(2x5)+10/5x(9-10)';
const result = evaluateExpression(expression);
console.log(result); // 8
```