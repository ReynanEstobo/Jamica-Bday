import { useState } from 'react'
import { useReveal, revealClass } from '../hooks/useReveal'

export default function RSVP() {
  const [headerRef, headerIn] = useReveal()
  const [formRef, formIn] = useReveal()
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="rsvp">
      <div ref={headerRef} className={revealClass(headerIn)}>
        <div className="eyebrow">Kindly Respond</div>
        <h2 className="sec-title">
          RSVP<span className="font-vibes text-gold-soft text-[1.4em] block mt-1">Before August 10</span>
        </h2>
      </div>
      <form
        ref={formRef}
        className={`glass-card max-w-[640px] mx-auto px-[6%] py-[50px] ${revealClass(formIn)}`}
        onSubmit={handleSubmit}
      >
        <div className="flex gap-[18px] flex-wrap mb-5">
          <div className="flex-1 min-w-[220px] flex flex-col gap-2">
            <label className="form-label">Full Name</label>
            <input className="form-field" type="text" required placeholder="Your full name" />
          </div>
          <div className="flex-1 min-w-[220px] flex flex-col gap-2">
            <label className="form-label">Contact Number</label>
            <input className="form-field" type="tel" required placeholder="09xx xxx xxxx" />
          </div>
        </div>
        <div className="flex gap-[18px] flex-wrap mb-5">
          <div className="flex-1 min-w-[220px] flex flex-col gap-2">
            <label className="form-label">Number of Guests</label>
            <input className="form-field" type="number" min="1" defaultValue={1} required />
          </div>
          <div className="flex-1 min-w-[220px] flex flex-col gap-2">
            <label className="form-label">Attendance</label>
            <select className="form-field" required defaultValue="">
              <option value="">Select one</option>
              <option>Attending</option>
              <option>Not Attending</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-6">
          <label className="form-label">Message</label>
          <textarea
            className="form-field"
            rows={4}
            placeholder="Leave a heartfelt message for Jamaica..."
          />
        </div>
        <button type="submit" className="gold-btn w-full !mt-1.5" disabled={submitted}>
          {submitted ? 'Thank You! 🌹' : 'Send RSVP'}
        </button>
      </form>
    </section>
  )
}
