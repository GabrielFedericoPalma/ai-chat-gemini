export interface IProfile {
  id: string
  created: string
  lastLogin: string
  isActive: boolean
  firstName: string
  lastName: string
  age: string
  location: string
  description: string
  photo: string
  favorites: [{}]
}

export interface IFriend {
  id: string
  created: string
  lastLogin: string
  isActive: boolean
  status: string
  firstName: string
  lastName: string
  age: string
  location: string
  description: string
  photo: string
}
