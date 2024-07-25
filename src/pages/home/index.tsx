import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import DestinationDateStep from "./_partials/destination-date-step";
import GuestInviteStep from "./_partials/guest-invite-step";
import InviteGuestsModal from "./_partials/invite-guests-modal";
import ConfirmTripCreationModal from "./_partials/confirm-trip-creation-modal";

export enum STEPS {
  TRIP_DETAILS = 0,
  INVITE_GUESTS = 1,
  SHOW_MODAL = 3,
  CONFIRM_CREATION = 4,
}

export default function Home() {
  const navigate = useNavigate()
  const [stepForm, setStepForm] = useState(STEPS.TRIP_DETAILS)
  const [guests, setGuests] = useState<string[]>([])

  function handleInviteGuestList(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const email = data.get('email') as string
    if (!email) return
    if (guests.includes(email)) return
    setGuests((prev) => [...prev, email])
    event.currentTarget.reset()
  }

  function removeGuestFromList(email: string) {
    setGuests((prev) => prev.filter((guest) => guest !== email))
  }

  function handleCreateTrip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    navigate('/trips/1')
  }

  return (
    <div className="h-screen flex justify-center items-center bg-grid-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6  text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <img src="/assets/logo.svg" alt="plann.er" />
          <p className="text-zinc-300 text-lg">Convide seus amigos e planeja sua nova viagem!</p>
        </div>
        <div className="space-y-4">
          <DestinationDateStep stepForm={stepForm} setStepForm={setStepForm} />

          {stepForm === STEPS.INVITE_GUESTS || stepForm === STEPS.SHOW_MODAL ? (
            <GuestInviteStep setStepForm={setStepForm} guests={guests} />
          ) : ''}
        </div>

        <p className="text-zinc-500 text-sm">
          Ao planejar sua viagem pela plann.er você automaticamente concorda <br />com nossos <a href="#" className="underline text-zinc-300">termos de uso</a> e <a href="#" className="underline text-zinc-300">politicas de privacidade</a>
        </p>
      </div>

      {
        stepForm === STEPS.SHOW_MODAL && (
          <InviteGuestsModal setStepForm={setStepForm} guests={guests} removeGuestFromList={removeGuestFromList} handleInviteGuestList={handleInviteGuestList} />
        )
      }

      {
        stepForm === STEPS.CONFIRM_CREATION && (
          <ConfirmTripCreationModal setStepForm={setStepForm} handleCreateTrip={handleCreateTrip} />
        )
      }
    </div >
  )
}
