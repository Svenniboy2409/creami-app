import { createContext, useContext } from 'react'

export const ToastContext = createContext<(message: string) => void>(() => {})

/** Shows a short message above the bottom bar, e.g. "Saved to favorites". */
export const useToast = () => useContext(ToastContext)
