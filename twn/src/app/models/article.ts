export type ArticleType = {
    id: string
    boolean: boolean
    phone: string
    date: number
    tags: string[]
    sex: string
    firstname: string
    surname: string
    email: string
    title: string
    intro: string
    body: string
    personal_code: number
    image: Image
    images: Image[]
}

export type Image = {
    large: string
    medium: string
    small: string
    alt: string
    title: string
}