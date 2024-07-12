import { MapPin, Calendar, Settings2, ArrowRight } from 'lucide-react'

import { STEPS } from '../index'
import GuestInviteStep from './guest-invite-step'
type StepFormProps = {
  stepForm: STEPS
  setStepForm: (step: STEPS) => void
}

export default function DestinationDateStep({ stepForm, setStepForm }: StepFormProps) {
  return (
    <form className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-inner border border-zinc-700/30 gap-3">
      <div className="flex items-center gap-2 flex-1">
        <MapPin className="size-5 text-zinc-400" />
        <input type="text" placeholder="Para onde você vai?" className="bg-transparent text-lg placeholder-zinc-400 outline-none w-full" disabled={stepForm === STEPS.INVITE_GUESTS} />
      </div>

      <div className="flex items-center gap-2 w-24 lg:w-auto">
        <Calendar className="size-5 text-zinc-400" />
        <input type="text" placeholder="Quando?" className="bg-transparent text-lg placeholder-zinc-400  w-28 outline-none" disabled={stepForm === STEPS.INVITE_GUESTS} />
      </div>

      <div className="w-px h-6 bg-zinc-800 mr-10"></div>

      {stepForm === STEPS.TRIP_DETAILS && (
        <button type="button" onClick={() => setStepForm(STEPS.INVITE_GUESTS)} className="bg-lime-300 text-lime-950 rounded-lg py-2 px-5 font-medium flex items-center gap-2 hover:bg-lime-400">
          Continuar
          <ArrowRight className="size-5" />
        </button>
      )}
      {stepForm === STEPS.INVITE_GUESTS || stepForm === STEPS.SHOW_MODAL ? (
        <button type="button" onClick={() => setStepForm(STEPS.TRIP_DETAILS)} className="bg-zinc-800 text-zinc-200 rounded-lg py-2 px-5 font-medium flex items-center gap-2 hover:bg-zinc-700">
          Alterar local/data
          <Settings2 className="size-5" />
        </button>
      ) : ''}
    </form>

  )
}