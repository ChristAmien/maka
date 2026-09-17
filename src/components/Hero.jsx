import React from 'react'

export const Hero = () => {
    return (
        <section className='w-full min-h-screen bg-primary-pale flex items-center justify-center px-6 md:px-16 py-24'>
            <div className='w-full max-w-7xl grid md:grid-cols-2 gap-12 items-center'>

                {/* Texte */}
                <div className='flex flex-col gap-6'>
                    <span className='inline-flex w-fit items-center gap-2 bg-white text-primary-dark font-semibold px-5 py-2 rounded-full shadow-lg'>
                        Joyeux Anniversaire
                    </span>

                    <h1 className='font-display font-extrabold text-5xl md:text-6xl text-ink leading-tight'>
                        Une journée <span className='font-brittany font-normal text-primary text-6xl md:text-7xl'>rien que pour toi</span>
                    </h1>

                    <p className='text-ink/70 text-lg max-w-md'>
                        Chaque année qui passe est une raison de plus de célébrer une personne aussi précieuse que toi. Voici un petit coin rien que pour te le rappeler.
                    </p>

                    <div className='flex flex-wrap gap-4 mt-2'>
                        <a
                            href="#galleries"
                            className='bg-ink text-white font-semibold px-7 py-3.5 rounded-full shadow-lg hover:-translate-y-0.5 transition-transform'
                        >
                            Découvrir la surprise
                        </a>
                        <a
                            href="#nosPensés"
                            className='bg-white text-primary-dark font-semibold px-7 py-3.5 rounded-full border border-primary-light hover:bg-primary-light/30 transition-colors'
                        >
                            Regarder nos souvenirs 🥰
                        </a>
                    </div>
                </div>

                {/* Image / illustration */}
                <div className='relative flex justify-center'>
                    <div className='absolute w-72 h-72 md:w-96 md:h-96 bg-primary-light/50 rounded-full blur-3xl' />
                    <img
                        src="/image.png"
                        alt="Marie Karel"
                        className='relative w-full max-w-md aspect-square object-cover rounded-[2.5rem] shadow-2xl'
                    />
                </div>

            </div>
        </section>
    )
}