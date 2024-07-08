export interface IPhoto {
  id: number
  title: string
  url: string
  thumbnailUrl: string
}

export interface IRandomPhoto {
  id: number
  albumId: number
  title: string
  url: string
  thumbnailUrl: string
}

export interface IAlbum {
  id: number
  title: string
  userId: number
}

export interface IUserList {
  id: number
  name: string
}

export interface IUser {
  id: number
  username: string
  name: string
  email: string
  company: {
    name: string
  }
}
