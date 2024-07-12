import { FormEvent } from "react"
import { AtSign, Plus, X } from "lucide-react"

import { STEPS } from "../index"

type ModalProps = {
  setStepForm: (step: STEPS) => void
  guests: string[]
  removeGuestFromList: (email: string) => void
  handleInviteGuestList: (event: FormEvent<HTMLFormElement>) => void
}

export default function InviteGuestsModal({ setStepForm, guests, removeGuestFromList, handleInviteGuestList }: ModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 bg-zinc-900 shadow-inner border border-zinc-700/30 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2>Selecionar convidados</h2>
            <X className="size-5 text-zinc-400 cursor-pointer" onClick={() => setStepForm(STEPS.INVITE_GUESTS)} />
          </div>

          <p className="text-sm text-zinc-400">Os convidados irão receber e-mails para confirmarem a participação na viagem.</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {guests.map((guest) => (
            <div key={guest} className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2 hover:opacity-80">
              <span className="text-zinc-300">{guest}</span>
              <button type="button">
                <X className="size-4 text-zinc-400" onClick={() => removeGuestFromList(guest)} />
              </button>
            </div>
          ))}
        </div>

        <div className="w-full h-px bg-zinc-800" />

        <form onSubmit={handleInviteGuestList} className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
          <AtSign className="size-5 text-zinc-400 ml-4" />
          <input type="email" name="email" placeholder="Digite o e-mail do convidado" className="bg-transparent text-lg h-12 placeholder-zinc-400 outline-none flex-1" />
          <button type="submit" className="bg-lime-300 text-lime-950 rounded-lg py-2 px-5 font-medium flex items-center gap-2 hover:bg-lime-400">
            Convidar
            <Plus className="size-5" />
          </button>
        </form>
      </div>
    </div>
  )
}