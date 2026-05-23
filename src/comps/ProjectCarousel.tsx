import { useState, useCallback, useEffect, useRef } from 'react'
import './ProjectCarousel.css'

interface ProjectCarouselProps {
  slug: string
  title: string
  images?: string[]
}

export default function ProjectCarousel({ slug, title, images }: ProjectCarouselProps) {
  const defaultImages = [`/projects/${slug}-cover.jpg`]
  const srcs = images && images.length > 0 ? images : defaultImages
  const single = srcs.length === 1

  const [active, setActive] = useState(0)
  const [direction, setDirection] = useState<'next' | 'prev'>('next')
  const [animating, setAnimating] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const go = useCallback(
    (index: number, dir: 'next' | 'prev') => {
      if (animating || index === active) return
      setDirection(dir)
      setAnimating(true)
      timerRef.current = setTimeout(() => {
        setActive(index)
        setAnimating(false)
      }, 380)
    },
    [active, animating],
  )

  const next = useCallback(() => {
    go((active + 1) % srcs.length, 'next')
  }, [active, srcs.length, go])

  const prev = useCallback(() => {
    go((active - 1 + srcs.length) % srcs.length, 'prev')
  }, [active, srcs.length, go])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [next, prev])

  // Touch / drag support
  const dragStart = useRef<number | null>(null)

  const onPointerDown = (e: React.PointerEvent) => {
    dragStart.current = e.clientX
  }

  const onPointerUp = (e: React.PointerEvent) => {
    if (dragStart.current === null) return
    const delta = e.clientX - dragStart.current
    dragStart.current = null
    if (Math.abs(delta) < 40) return
    delta < 0 ? next() : prev()
  }

  return (
    <section className="carousel" aria-label={`${title} images`}>
      <div
        className={`carousel-track ${animating ? `carousel-exit-${direction}` : ''}`}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        style={{ touchAction: 'pan-y' }}
      >
        <img
          key={active}
          src={srcs[active]}
          alt={`${title} — image ${active + 1} of ${srcs.length}`}
          className="carousel-img"
          draggable={false}
        />
      </div>

      {!single && (
        <>
          <div className="carousel-controls" aria-label="Carousel controls">
            <button
              className="carousel-btn carousel-prev"
              onClick={prev}
              aria-label="Previous image"
              disabled={animating}
            >
              ←
            </button>

            <div className="carousel-dots" role="tablist">
              {srcs.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === active}
                  aria-label={`Go to image ${i + 1}`}
                  className={`carousel-dot ${i === active ? 'carousel-dot--active' : ''}`}
                  onClick={() => go(i, i > active ? 'next' : 'prev')}
                />
              ))}
            </div>

            <button
              className="carousel-btn carousel-next"
              onClick={next}
              aria-label="Next image"
              disabled={animating}
            >
              →
            </button>
          </div>

          <p className="carousel-counter" aria-live="polite">
            {String(active + 1).padStart(2, '0')} / {String(srcs.length).padStart(2, '0')}
          </p>
        </>
      )}
    </section>
  )
}