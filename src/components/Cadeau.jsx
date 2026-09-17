import React, { useState } from 'react'

export const Cadeau = () => {
    const [revealed, setRevealed] = useState(false)

    return (
        <section id="cadeau" className='w-full bg-primary-pale px-6 md:px-16 py-24'>

            <div className='flex flex-col items-center text-center gap-6 max-w-2xl mx-auto'>

                <span className='inline-flex w-fit items-center gap-2 bg-white text-primary-dark font-semibold px-5 py-2 rounded-full shadow-lg'>
                    ✦ Surprise
                </span>

                <h2 className='font-display font-extrabold text-4xl md:text-5xl text-ink'>
                    Un petit <span className='font-brittany font-normal text-primary text-5xl md:text-6xl'>cadeau</span> pour toi
                </h2>

                {!revealed && (
                    <p className='text-ink/70'>
                        Clique sur le bouton, ça vaut le coup.
                    </p>
                )}

                {!revealed ? (
                    <button
                        onClick={() => setRevealed(true)}
                        className='mt-4 bg-ink text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition-all animate-pulse'
                    >
                        🎁 Clique pour un Cadeau
                    </button>
                ) : (
                    <div className='w-full mt-6 animate-[fadeIn_0.6s_ease-out]'>
                        <div className='relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl'>
                            <video
                                src="/cadeau/surprise.mp4"
                                controls
                                autoPlay
                                className='w-full h-full object-cover'
                            />
                        </div>
                        <p className='text-ink/60 text-sm mt-4'>
                            J'espère que ça te touchera autant que ça m'a touché de le préparer.
                        </p>
                    </div>
                )}

            </div>

            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(12px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>

        </section>
    )
}