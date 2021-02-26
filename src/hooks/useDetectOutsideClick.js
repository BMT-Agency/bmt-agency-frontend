import { useState, useEffect } from "react"

export function useDetectOutsideClick(el) {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const pageClickEvent = e => {
      //if the active element exists and is clicked outside of
      if (el.current !== null && !el.current.contains(e.target)) {
        setIsActive(!isActive)
      }
    }
    //if the element is active(ie open) then listen for clicks
    if (isActive) {
      window.addEventListener("click", pageClickEvent)
    }
    return () => {
      window.removeEventListener("click", pageClickEvent)
    }
  })
  return [isActive, setIsActive]
}
