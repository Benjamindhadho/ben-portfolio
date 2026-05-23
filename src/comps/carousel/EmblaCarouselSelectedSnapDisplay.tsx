import React, { useCallback, useEffect, useState } from 'react'

interface SelectedSnapDisplayProps {
  selectedSnap: number
  snapCount: number
}

export const useSelectedSnapDisplay = (emblaApi: any) => {
  const [selectedSnap, setSelectedSnap] = useState(0)
  const [snapCount, setSnapCount] = useState(0)

  const updateScrollSnapState = useCallback((emblaApi: any) => {
    setSnapCount(emblaApi.snapList().length)
    setSelectedSnap(emblaApi.selectedSnap())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    updateScrollSnapState(emblaApi)
    emblaApi.on('select', updateScrollSnapState)
    emblaApi.on('reinit', updateScrollSnapState)
  }, [emblaApi, updateScrollSnapState])

  return {
    selectedSnap,
    snapCount
  }
}

export const SelectedSnapDisplay: React.FC<SelectedSnapDisplayProps> = ({ 
  selectedSnap, 
  snapCount 
}) => {
  return (
    <div className="carousel-counter">
      <span className="carousel-counter-current">{selectedSnap + 1}</span>
      <span className="carousel-counter-separator">/</span>
      <span className="carousel-counter-total">{snapCount}</span>
    </div>
  )
}