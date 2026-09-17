import React from 'react'
import { photos } from '../constant/data'

export const Galleries = () => {
    return (
        <section id="galleries" className='w-full bg-white px-6 md:px-16 py-24'>

            {/* En-tête de section */}
            <div className='flex flex-col items-center text-center gap-4 mb-14'>
                <span className='inline-flex w-fit items-center gap-2 bg-primary-pale text-primary-dark font-semibold px-5 py-2 rounded-full'>
                    ✦ Galerie
                </span>
                <h2 className='font-display font-extrabold text-4xl md:text-5xl text-ink'>
                    Nos <span className='font-brittany font-normal text-primary text-5xl md:text-6xl'>plus beaux souvenirs</span>
                </h2>
                <p className='text-ink/70 max-w-md'>
                    Quelques instants capturés qui te definissent,qui nous caracterise tous, moment après moment.
                </p>
            </div>

            {/* Grille de photos */}
            <div className='grid grid-cols-2 md:grid-cols-3 auto-rows-[180px] gap-4 max-w-6xl mx-auto'>
                {photos.map(({ src, alt, span }, i) => (
                    <div
                        key={i}
                        className={`relative overflow-hidden rounded-3xl shadow-lg group ${span}`}
                    >
                        <img
                            src={src}
                            alt={alt}
                            className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                        />
                        <div className='absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500' />
                    </div>
                ))}
            </div>

        </section>
    )
}