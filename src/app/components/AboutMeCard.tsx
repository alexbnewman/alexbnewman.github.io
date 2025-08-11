import Image from "next/image";
import './aboutMe.css'
import { ReactNode } from "react";

interface CardProps {
  title: string
  imageSrc: string
  children: ReactNode
  imageAlt: string
}
export const Card: React.FC<CardProps> = ({
  title,
  imageSrc,
  children,
  imageAlt,
}) => {
  return (
    <div className="card">
      <div className="card-image-container">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={350}
          height={350}
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <div className="card-text">{children}</div>
      </div>
    </div>
  )
}
