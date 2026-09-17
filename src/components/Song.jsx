import React from 'react'
import { tracks } from '../constant/data'

export const Music = () => {
    return (
        <section id="musique" className='w-full bg-primary-pale px-6 md:px-16 py-24'>

            {/* En-tête de section */}
            <div className='flex flex-col items-center text-center gap-4 mb-14'>
                <span className='inline-flex w-fit items-center gap-2 bg-white text-primary-dark font-semibold px-5 py-2 rounded-full shadow-lg'>
                    ✦ Playlist
                </span>
                <h2 className='font-display font-extrabold text-4xl md:text-5xl text-ink'>
                    La <span className='font-brittany font-normal text-primary text-5xl md:text-6xl'>bande-son</span> que tu kiffe
                </h2>
                <p className='text-ink/70 max-w-md'>
                    Trois titres qui nous rappel un peu toi et ce qu'on a tous vécu ensemble.
                </p>
            </div>

            {/* Cartes musique */}
            <div className='grid md:grid-cols-3 gap-6 max-w-6xl mx-auto'>
                {tracks.map(({ title, note, embedUrl }, i) => (
                    <div
                        key={i}
                        className='bg-white rounded-3xl shadow-lg p-4 flex flex-col gap-3'
                    >
                        <div>
                            <h3 className='font-display font-bold text-ink'>{title}</h3>
                            <p className='text-ink/60 text-sm'>{note}</p>
                        </div>
                        <iframe
                            title={title}
                            src={embedUrl}
                            width="100%"
                            height="152"
                            style={{ borderRadius: '16px' }}
                            frameBorder="0"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>

        </section>
    )
}