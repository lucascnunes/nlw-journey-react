import { FormEvent } from "react";

import { ArrowRight, UserRoundPlus } from "lucide-react";

import { STEPS } from "..";

type StepFormProps = {
  setStepForm: (step: STEPS) => void
  guests: string[]
}

export default function InviteGuestsModal({ setStepForm, guests, }: StepFormProps) {
  return (
    <form className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-inner border border-zinc-700/30 gap-3">
      <div className="flex items-center gap-2 flex-1">
        <UserRoundPlus className="size-5 text-zinc-400" />
        <button type="button" className="bg-transparent text-lg text-zinc-400 outline-none w-full text-left" onClick={() => setStepForm(STEPS.SHOW_MODAL)}>
          {guests.length > 0 ? `${guests.length} pessoa(s) convidada(s)` : 'Quem estará na viagem?'}
        </button>
      </div>

      <button type="button" onClick={() => setStepForm(STEPS.CONFIRM_CREATION)} className="bg-lime-300 text-lime-950 rounded-lg py-2 px-5 font-medium flex items-center gap-2 hover:bg-lime-400">
        Confirmar viagem
        <ArrowRight className="size-5" />
      </button>
    </form>)
}