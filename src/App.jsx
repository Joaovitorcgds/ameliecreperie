import Logo from "./assets/logo4.jpg"
import FranceFlag from "./assets/franceFlag.png"

export default function App() {
  return (
    <div className="bg-[#901319] text-white w-screen h-screen flex flex-col justify-around items-center px-5 text-center">
      <div className="flex flex-col justify-center items-center mb-3 ">
        <div className="flex justify-center items-center gap-2">
          <img src={FranceFlag} alt="Logo Restaurante" className="rounded-[50%] w-14 h-14 border-2 border-white"/>
          <img src={Logo} alt="Logo Restaurante" className="w-40"/>
        </div>
      <h1 className="font-semibold text-2xl">
        <span>Participe da Campanha promocional e</span><br />
        ganhe um experiência Inesquecível
      </h1>
      </div>

      <div>
        <p className="mb-2 font-semibold text-lg">Para participar siga os seguintes passos</p>
        <ol className="text-lg">
          <li>1. Feche os olhos por 5 segundos.</li>
          <li>2. Bata na mesa 3 vezes com as duas mãos</li>
        </ol>
      </div>
      
      <h2 className="mt-8 font-semibold text-lg">Após isso, aguarde alguns instantes</h2>
    </div>
      
  )
}

