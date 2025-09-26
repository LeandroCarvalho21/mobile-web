import Header from "./componentes/Header";
import Banner from "./componentes/Banner";
import ImgCard from "./componentes/ImgCard";
import Button from "./componentes/Button";
import img1 from "./assets/img-1.jpg";
import img2 from "./assets/img-2.jpg";
import img3 from "./assets/img-3.jpg";
import "./App.css";


function App() {
  const headleClick = () => {
    alert("Olá");
  }

  return (
    <main className="container">

      <Header title="Meu site" />

      <Banner>
        <h1>Bem vindo ao meu site </h1>
        <p>Aqui você encontra as melhores ofertas</p>
      </Banner>

      <ImgCard
        caption="Uma imagem interessante"
        imagem={img1}
        texto="lorem ipsum Popeto"
      />

      <ImgCard
        caption="Imagem 2"
        imagem={img2}
        texto="Popeto"
      />

      <ImgCard
        caption="Imagem 3"
        imagem={img3}
        texto="Popeto Popeto Bangu"
      />

      <Button text="Clique aqui" onclick={headleClick} />

    </main>
  )
}

export default App
