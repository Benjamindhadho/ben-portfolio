import React, { useCallback, useEffect, useState } from 'react'

interface ButtonProps {
  onClick: () => void
  disabled: boolean
  children?: React.ReactNode
}

export const usePrevNextButtons = (emblaApi: any) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.goToPrev()
  }, [emblaApi])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.goToNext()
  }, [emblaApi])

  const onSelect = useCallback((emblaApi: any) => {
    setPrevBtnDisabled(!emblaApi.canGoToPrev())
    setNextBtnDisabled(!emblaApi.canGoToNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on('reinit', onSelect).on('select', onSelect)
  }, [emblaApi, onSelect])

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  }
}

export const PrevButton: React.FC<ButtonProps> = (props) => {
  const { onClick, disabled } = props

  return (
    <button
      className="carousel-button carousel-button--prev"
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label="Previous image"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M15 18l-6-6 6-6" />
      </svg>
    </button>
  )
}

export const NextButton: React.FC<ButtonProps> = (props) => {
  const { onClick, disabled } = props

  return (
    <button
      className="carousel-button carousel-button--next"
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label="Next image"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 18l6-6-6-6" />
      </svg>
    </button>
  )
}