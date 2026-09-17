import React from 'react'

export const DownloadableImage = ({
    src = "/download/image.png",
    fileName = "Gbonhi.jpg",
    title = "Ton affiche souvenir",
    note = "Un petit souvenir à garder pour toujours.",
}) => {
    return (
        <section id="souvenir" className='w-full bg-primary-pale px-6 md:px-16 py-24'>

            <div className='flex flex-col items-center text-center gap-6 max-w-md mx-auto'>

                <span className='inline-flex w-fit items-center gap-2 bg-white text-primary-dark font-semibold px-5 py-2 rounded-full shadow-lg'>
                    ✦ À garder
                </span>

                <h2 className='font-display font-extrabold text-4xl md:text-5xl text-ink'>
                    <span className='font-brittany font-normal text-primary text-5xl md:text-6xl'>Un souvenir</span> pour toi
                </h2>

                <p className='text-ink/70'>{note}</p>

                {/* Image */}
                <div className='w-full rounded-3xl overflow-hidden shadow-2xl'>
                    <img
                        src={src}
                        alt={title}
                        className='w-full object-cover'
                    />
                </div>

                {/* Bouton de téléchargement */}
                <a
                    href={src}
                    download={fileName}
                    className='bg-ink text-white font-semibold px-8 py-3.5 rounded-full shadow-lg hover:-translate-y-0.5 transition-transform inline-flex items-center gap-2'
                >
                    ⬇ Télécharger
                </a>

                <p className='font-brittany text-primary-dark'>Faut garder tchai </p>
            </div>

        </section>
    )
}