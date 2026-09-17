import { useState } from "react"
import { links } from "../constant/data"

const linkClass = 'flex items-center rounded-full hover:bg-white/20 transition-colors whitespace-nowrap text-white font-semibold px-5 py-2.5 text-sm md:text-base'

export const Navbar = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className='w-full flex font-display justify-center items-center px-4 md:px-16 py-6 md:py-8'>
            <nav className='bg-primary rounded-3xl md:rounded-full shadow-lg px-4 py-3 md:px-2 md:py-2 w-full max-w-xs md:w-auto md:max-w-none transition-all'>

                {/* Barre du haut : visible uniquement en dessous de md */}
                <div className='flex items-center justify-between md:hidden'>
                    <span className='text-white font-semibold text-sm'>Menu</span>
                    <button
                        onClick={() => setOpen(!open)}
                        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
                        className='text-white p-1'
                    >
                        {open ? (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        ) : (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <line x1="3" y1="12" x2="21" y2="12" />
                                <line x1="3" y1="18" x2="21" y2="18" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Liste des liens */}
                <ul
                    className={`flex-col gap-1 mt-3 ${open ? "flex" : "hidden"}
                    md:flex md:flex-row md:items-center md:gap-2 md:mt-0`}
                >
                    {links.map(({ href, label }) => (
                        <li key={href}>
                            <a
                                href={href}
                                onClick={() => setOpen(false)}
                                className={`${linkClass} justify-center md:justify-start`}
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}