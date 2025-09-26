import { useEffect, useState } from 'react'

const storageKey = 'theme'
const lockKey = 'theme_locked'

type Theme = 'light' | 'dark'

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'dark'
  const saved = localStorage.getItem(storageKey) as Theme | null
  if (saved === 'light' || saved === 'dark') return saved
  // Por defecto, tema oscuro
  return 'dark'
}

function getInitialLock(): boolean {
  if (typeof window === 'undefined') return false
  return localStorage.getItem(lockKey) === '1'
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme())
  const [locked, setLocked] = useState<boolean>(getInitialLock())

  // Aplica la clase en <html> y persiste solo si está bloqueado por el usuario
  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    if (locked) {
      localStorage.setItem(storageKey, theme)
    }
  }, [theme, locked])

  // Sigue cambios del sistema SOLO si no hay preferencia del usuario
  useEffect(() => {
    const mql = window.matchMedia('(prefers-color-scheme: dark)')
    const listener = (e: MediaQueryListEvent) => {
      if (!locked && !localStorage.getItem(storageKey)) {
        setTheme(e.matches ? 'dark' : 'light')
      }
    }
    mql.addEventListener('change', listener)
    return () => mql.removeEventListener('change', listener)
  }, [locked])

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    // Al cambiar manualmente, forzamos preferencia del usuario
    setLocked(true)
    localStorage.setItem(lockKey, '1')
    localStorage.setItem(storageKey, next)
  }

  return (
    <button
      type="button"
      aria-label="Cambiar tema"
      onClick={toggle}
      className="cursor-pointer inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 px-3 py-2 text-sm text-neutral-700 dark:text-neutral-200 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
    >
      {theme === 'dark' ? (
        <>
          <i className="fa-solid fa-moon"></i>
          <span>Oscuro</span>
        </>
      ) : (
        <>
          <i className="fa-regular fa-sun"></i>
          <span>Claro</span>
        </>
      )}
    </button>
  )
}
