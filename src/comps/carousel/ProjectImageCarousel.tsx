import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import {
  SelectedSnapDisplay,
  useSelectedSnapDisplay
} from './EmblaCarouselSelectedSnapDisplay'
import './ProjectImageCarousel.css'

interface ProjectImage {
  src: string
  alt: string
  caption?: string
}

interface ProjectImageCarouselProps {
  images: ProjectImage[]
  projectTitle: string
}

const ProjectImageCarousel: React.FC<ProjectImageCarouselProps> = ({ 
  images, 
  projectTitle 
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    skipSnaps: false,
    dragFree: false,
  })

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi)

  if (!images || images.length === 0) {
    return null
  }

  return (
    <div className="project-carousel">
      <div className="project-carousel__viewport" ref={emblaRef}>
        <div className="project-carousel__container">
          {images.map((image, index) => (
            <div className="project-carousel__slide" key={index}>
              <div className="project-carousel__slide-inner">
                <img
                  src={image.src}
                  alt={image.alt || `${projectTitle} - Image ${index + 1}`}
                  className="project-carousel__image"
                  loading="lazy"
                />
                {image.caption && (
                  <div className="project-carousel__caption">
                    <p>{image.caption}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {images.length > 1 && (
        <div className="project-carousel__controls">
          <div className="project-carousel__buttons">
            <PrevButton 
              onClick={onPrevButtonClick} 
              disabled={prevBtnDisabled} 
            />
            <NextButton 
              onClick={onNextButtonClick} 
              disabled={nextBtnDisabled} 
            />
          </div>

          <SelectedSnapDisplay
            selectedSnap={selectedSnap}
            snapCount={snapCount}
          />
        </div>
      )}
    </div>
  )
}

export default ProjectImageCarousel