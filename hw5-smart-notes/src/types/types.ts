export interface Note {
  id: string
  title: string
  text: string
  tagId?: string
  updated: string
  created: string
}

export interface Tag {
  id: string
  name: string
  count: number
}
