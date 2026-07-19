import { useEffect, useState } from 'react'

const TARGET = new Date('2026-08-22T15:00:00').getTime()

function pad(n) {
  return String(n).padStart(2, '0')
}

function compute() {
  const now = Date.now()
  let diff = TARGET - now
  if (diff < 0) diff = 0
  return {
    days: pad(Math.floor(diff / (1000 * 60 * 60 * 24))),
    hours: pad(Math.floor((diff / (1000 * 60 * 60)) % 24)),
    mins: pad(Math.floor((diff / (1000 * 60)) % 60)),
    secs: pad(Math.floor((diff / 1000) % 60)),
  }
}

export function useCountdown() {
  const [time, setTime] = useState(compute)

  useEffect(() => {
    const id = setInterval(() => setTime(compute()), 1000)
    return () => clearInterval(id)
  }, [])

  return time
}
