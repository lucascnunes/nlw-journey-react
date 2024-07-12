import { FormEvent } from "react"

import { AtSign, User, X } from "lucide-react"

import { STEPS } from "../index"

type ModalProps = {
  setStepForm: (step: STEPS) => void
  handleCreateTrip: (event: FormEvent<HTMLFormElement>) => void
}

export default function ConfirmTripCreationModal({ setStepForm, handleCreateTrip }: ModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 bg-zinc-900 shadow-inner border border-zinc-700/30 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2>Confirmar criação da viagem</h2>
            <X className="size-5 text-zinc-400 cursor-pointer" onClick={() => setStepForm(STEPS.INVITE_GUESTS)} />
          </div>

          <p className="text-sm text-zinc-400">Para concluir a criação da viagem para <span className="font-semibold text-zinc-100">Destino</span> nas datas de <span className="font-semibold text-zinc-100">Datas</span> preencha seus dados abaixo.</p>
        </div>

        <form onSubmit={handleCreateTrip} className="flex flex-col gap-2">
          <div className="py-2.5 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <User className="size-5 text-zinc-400" />
            <input type="text" name="name" placeholder="Seu nome completo" className="bg-transparent text-lg h-14 placeholder-zinc-400 outline-none flex-1" />
          </div>
          <div className="py-2.5 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <AtSign className="size-5 text-zinc-400" />
            <input type="email" name="email" placeholder="Seu e-mail pessoal" className="bg-transparent text-lg h-14 placeholder-zinc-400 outline-none flex-1" />
          </div>

          <div className="mt-2">
            <button type="submit" className="bg-lime-300 text-lime-950 rounded-lg py-2 px-5 font-medium flex justify-center items-center gap-2 hover:bg-lime-400 w-full h-11">
              Confirmar criação da viagem
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}