import { useEffect, useState } from 'react'

const useCountdown = (targetDate) => {
  const eventDay = new Date(targetDate).getTime()

  const [countDown, setCountDown] = useState(
    eventDay - new Date().getTime()
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(eventDay - new Date().getTime())
    }, 1000)

    return () => clearInterval(interval)
  })

  return getReturnValues(countDown)
}

const getReturnValues = (countDown) => {
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24))
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000)

  return [days, hours, minutes, seconds]
}

export default useCountdown
