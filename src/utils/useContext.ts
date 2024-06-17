import { createContext } from 'react'
export interface Ctx {
  navigation: {
    navigate: {
      (val: any): void
    }
  }
}
export default createContext(null as any)
