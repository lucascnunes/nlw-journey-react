import { ArrowRight, Calendar, MapPin } from "lucide-react";

export default function App() {
  return (
    <div className="h-screen flex justify-center items-center bg-grid-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6  text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <img src="/assets/logo.svg" alt="plann.er" />
          <p className="text-zinc-300 text-lg">Convide seus amigos e planeja sua nova viagem!</p>
        </div>

        <form className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-inner border border-zinc-700/30 gap-3">
          <div className="flex items-center gap-2 flex-1">
            <MapPin className="size-5 text-zinc-400" />
            <input type="text" placeholder="Para onde você vai?" className="bg-transparent text-lg placeholder-zinc-400 outline-none" />
          </div>

          <div className="flex items-center gap-2">
            <Calendar className="size-5 text-zinc-400" />
            <input type="text" placeholder="Quando?" className="bg-transparent text-lg placeholder-zinc-400  w-28 outline-none" />
          </div>

          <div className="w-px h-6 bg-zinc-800 mr-10"></div>

          <button className="bg-lime-300 text-lime-950 rounded-lg py-2 px-5 font-medium flex items-center gap-2 hover:bg-lime-400">
            Continuar
            <ArrowRight className="size-5" />
          </button>
        </form>

        <p className="text-zinc-500 text-sm">
          Ao planejar sua viagme pela plann.er você automaticamente concorda <br />com nossos <a href="#" className="underline text-zinc-300">termos de uso</a> e <a href="#" className="underline text-zinc-300">politicas de privacidade</a>.
        </p>
      </div>
    </div>
  )
}