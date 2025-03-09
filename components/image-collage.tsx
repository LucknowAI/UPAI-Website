import Image from "next/image"

interface CollageImage {
  src: string
  alt: string
}

interface ImageCollageProps {
  images: CollageImage[]
}

export function ImageCollage({ images }: ImageCollageProps) {
  return (
    <div className="image-collage h-[500px] md:h-[600px] relative">
      {images.map((image, index) => (
        <div key={index} className={`collage-image animate-float`} style={{ animationDelay: `${index * 0.5}s` }}>
          <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
        </div>
      ))}
    </div>
  )
}

