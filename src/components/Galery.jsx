import React from 'react'
import DomeGallery from './DomeGallery'
import { photos } from '../constant/data'

export const Galleries = () => {
    // On transforme tes données existantes au format attendu par DomeGallery
    const galleryImages = photos.map(({ src, alt }) => ({ src, alt }))

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
                    Quelques instants capturés qui te definissent, qui nous caracterise tous, moment après moment.
                </p>
            </div>

            {/* Dôme 3D à la place de la grille */}
            <div className='w-full max-w-6xl mx-auto h-[600px] md:h-[700px] rounded-3xl overflow-hidden shadow-lg'>
                <DomeGallery
                    images={galleryImages}
                    fit={0.8}
                    minRadius={600}
                    maxVerticalRotationDeg={0}
                    segments={34}
                    dragDampening={2}
                    grayscale={false}
                    overlayBlurColor="#ffffff"
                />
            </div>

        </section>
    )
}