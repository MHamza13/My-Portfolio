export interface Project {
  id: string
  title: string
  shortDescription: string
  priority: number
  cover?: string | StaticImageData
  livePreview?: string
  githubLink?: string
  visitors?: string
  earned?: string
  githubStars?: string
  ratings?: string
  numberOfSales?: string
  type?: string
  siteAge?: string
  category?: string
}

export interface Heading {
  id: string
  title: string
  items: Heading[]
}

export interface Testimonial {
  name: string
  title?: string
  feedback: string
  image: string
  stars: number
  createdAt: string
  company: string
}
