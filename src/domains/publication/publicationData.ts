import { Publication } from "./publicationEntity";

const pubData: Array<Publication> = [
  {
    title:
      "Desain dan Implementasi Deteksi Objek Berbasis YOLO dan Formasi Kontrol Quadrotor Berbasis Hybrid VS-APF untuk Meningkatkan Efisiensi Pemantauan Illegal Fishing",
    time: "Sep 27, 2021",
    publisher: "Bandung Institute of Technology",
    abstract:
      "Indonesia merupakan negara dengan potensi perikanan terbesar kedua di dunia. Presiden Joko Widodo mengatakan bahwa, kerugian akibat illegal fishing mencapai 300 triliun yang dimana sangat besar jika dibandingkan dengan keuntungan yang diraup sebesar 65 triliun. Untuk menekan angka kerugian, dilakukan pemantauan disekitar area yang diduga akan terjadi illegal fishing. Namun, pemantauan yang dilakukan kurang efisien. Pemantauan yang dilakukan menggunakan pesawat berawak, jangkauan daerah yang dipantau masih kecil karena hanya menggunakan sebuah pesawat, dan pengenalan objek di area dugaan masih manual, sehingga pemantauan menjadi tidak efisien baik dalam hal biaya dan tenaga. Penelitian ini memperkenalkan metode perancangan untuk meningkatkan efisiensi pemantauan illegal fishing dengan menggunakan formasi quadrotor tanpa awak dan otomasi pengenalan objek. Formasi quadrotor tanpa awak membutuhkan presisi dalam menjaga bentuk formasi sehingga dirancang dengan menggunakan pengontrol formasi dan perencana jalur berbasis algoritma hybrid VS (Virtual Structure) dan APF (Artificial Potential Field). Hasil dari implementasi rancangan tersebut menunjukkan formasi quadrotor tanpa awak yang mampu menghindari obstacle dengan menjaga formasi antar quadrotor serta mencapai posisi tujuan. Pengontrol mampu menjaga jarak antar quadrotor dengan kesalahan absolut rata-rata sebesar 11 hingga 19 % untuk setpoint 1,5 m. Pada rancangan pengenalan objek, digunakan algoritma YOLOv4 (You Only Look Once version 4). Algoritma YOLOv4 dapat memberikan hasil dengan akurasi yang tinggi dan waktu deteksi yang cepat. Rancangan ini terbukti mampu melakukan pengenalan objek dengan mAP (mean Average Precision) lebih dari 90% dan memiliki waktu deteksi dibawah 26 ms/frame. Secara keseluruhan, sistem (kontrol formasi, perencana jalur, dan deteksi objek) dapat berhasil diintegrasikan dan diimplementasikan dengan akurasi sebesar 83% pada peta tanpa obstacle dan akurasi sebesar 77% pada peta dengan obstacle.",
    keywords: "",
  },
  {
    title:
      "PSO-based Optimization of Formation Control and Obstacle Avoidance for Multiple Quadrotors",
    time: "Aug 25, 2021",
    publisher: "",
    abstract:
      "An optimized formation controller for multiple quadrotors is proposed in this paper. The formation control is implemented using a hybrid approach which combines the Virtual Structure and Artificial Potential Field approaches. The Artificial Potential Field technique is applied for path planning optimized using Particle Swarm Optimization (PSO) method, while the Virtual Structure is used to keep the formation in place. In addition, for controlling the altitude and attitude of the quadrotor, an optimized PID type controller based on PSO is also implemented in the overall control structure. The proposed control strategies for formation control of multiple quadrotors are demonstrated through simulation studies. The results show that the quadrotors can effectively keep the formation and   choose the short path to the target point without collision.      Keywords—Virtual Structure, Formation Control, Artificial Potential Field, Particle Swarm Optimization, PID Controller, Quadrotor.",
    keywords: "",
  },
];

export default pubData;
