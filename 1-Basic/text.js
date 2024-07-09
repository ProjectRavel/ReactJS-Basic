const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
// root.render(
//     <>
//     <h1>Belajar React Bareng Aku!!</h1>
//     <img src="img/kitsu.png" width="80" alt="My Image" />
//     <p onClick={e => {
//         alert("ok")
//     }}>Belajar React bareng aku di repo </p>
//     </>
// )

// Peraturan JSX,
//1. Selalu mengembalikan satu element,
//2. Selalu tutup semua tag,
//3. Gunakan camelCase untuk atribut

// *** KONSEP UTAMA PADA REACT ***

// *** COMPONENTS ***
// Components adalah blok bangunan utama dalam aplikasi React. Mereka adalah potongan-potongan kode yang dapat digunakan kembali
// yang mengembalikan elemen-elemen React untuk ditampilkan di layar.
// Ada dua jenis komponen:
// 1. Functional Components: Komponen yang didefinisikan sebagai fungsi. Mereka mengambil props sebagai argumen dan mengembalikan elemen React. Contoh:
// function Menyapa(props){
//     return (
//         <h1>Hello, {props.nama}~</h1>
//     )
// }

// root.render(<Menyapa nama="Rafael"/>)
//
// 2. Class Components: Komponen yang didefinisikan sebagai kelas ES6 yang memperluas React.Component.
// Mereka memiliki metode render yang mengembalikan elemen React. Contoh:
// class Greeting extends React.Component {
//     render() {
//       return <h1>Hello, {this.props.name}!</h1>;
//     }
//   }

// *** PROPS ***
// Props (singkatan dari "properties") adalah cara untuk mengirim data dari satu komponen ke komponen lainnya.
// Mereka digunakan untuk mengkonfigurasi komponen dan dikirim sebagai atribut pada elemen komponen. Props bersifat read-only,
// artinya komponen tidak dapat mengubah nilai dari props yang diterimanya. Contoh:
// function Greeting(props){
//     return (
//         <h1>Hello, {props.name}!</h1>
//     )
// }

// root.render(<Greeting name="Pelski" />)

// *** STATES ***
// State adalah objek khusus yang memungkinkan komponen untuk melacak data dinamis atau data yang dapat berubah seiring waktu. Tidak seperti props,
// state bersifat lokal untuk komponen dan dapat diubah menggunakan metode setState (untuk class components)
// atau hook useState (untuk functional components.

function MainText() {
  return <h1>Ayo kita belajar bareng</h1>;
}

const DataSiswa = ["Rafael", "Pandu", "Sumanti"];

function Homepage() {
  const [likes, setLikes] = React.useState(0);

function Updatelike(){
    setLikes(likes + 1)
}

  return (
    <>
      <MainText />

      <ul>
        {DataSiswa.map((siswa) => {
          return <li key={siswa}>{siswa}</li>;
        })}
      </ul>

      <button onClick={Updatelike}>Like({likes})</button>
    </>
  );
}

root.render(<Homepage />);
