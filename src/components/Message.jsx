import React from 'react'
import { messages } from '../constant/data'

export const Messages = () => {
    return (
        <section id="nosPensés" className='w-full bg-white px-6 md:px-16 py-24'>

            {/* En-tête de section */}
            <div className='flex flex-col items-center text-center gap-4 mb-14'>
                <span className='inline-flex w-fit items-center gap-2 bg-primary-pale text-primary-dark font-semibold px-5 py-2 rounded-full'>
                    ✦ Pour toi
                </span>
                <h2 className='font-display font-extrabold text-4xl md:text-5xl text-ink'>
                    Des <span className='font-brittany font-normal text-primary text-5xl md:text-6xl'>petits mots</span> pour toi
                </h2>
                <p className='text-ink/70 max-w-md'>
                    Tout le monde avait quelque chose à te dire pour ce jour spécial.
                </p>
            </div>

            {/* Grille de messages */}
            <div className='columns-1 sm:columns-2 lg:columns-3 gap-6 max-w-6xl mx-auto'>
                {messages.map(({ id, name, avatar, text, photo }) => (
                    <div
                        key={id}
                        className='break-inside-avoid mb-6 bg-primary-pale rounded-3xl p-5 flex flex-col gap-4 shadow-sm'
                    >
                        {/* Auteur */}
                        <div className='flex items-center gap-3'>
                            <img
                                src={avatar}
                                alt={name}
                                className='w-11 h-11 rounded-full object-cover border-2 border-white shadow'
                            />
                            <h3 className='font-display font-bold text-ink'>{name}</h3>
                        </div>

                        {/* Texte du message */}
                        <p className='text-ink/80 text-sm leading-relaxed'>
                            {text}
                        </p>

                        {/* Photo jointe (optionnelle) */}
                        {photo && (
                            <img
                                src={photo}
                                alt={`Souvenir avec ${name}`}
                                className='w-full rounded-2xl object-cover shadow'
                            />
                        )}
                    </div>
                ))}
            </div>

        </section>
    )
}