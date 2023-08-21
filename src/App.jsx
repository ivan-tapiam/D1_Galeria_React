import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './assets/Components/Header'
import Footer from './assets/Components/Footer'
import Mycard from './assets/Components/Mycard'
import gato1 from "./assets/img/gato1.jpg"
import gato2 from "./assets/img/gato2.jpg"
import gato3 from "./assets/img/gato3.jpg"

function App() {
  return (
    <>
    <Header title="Galeria de Imagenes con React" />
    
    <Mycard
    image ={gato1}
    text ="Gato Chileno"
    description ="El gato chileno se caracteriza por robar comida y decir 'po' al final de cada maullido."
    />
    
    <Mycard
    image ={gato2}
    text ="Gato Aleman"
    description ="Gato de Origen Vikingo, llegó a alemania luego de cruzar montañas y mares."
    />
    
    <Mycard
    image ={gato3}
    text ="Gato Japones"
    description ="Gato Japones, se coloca feliz luego de comer Ramen y ver anime con sus dueños, es el mas kawai."
    />

    <Footer end="El gato doméstico es una especie de mamífero carnívoro de la familia Felidae"/>
    </>
  )
}

export default App
