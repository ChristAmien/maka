import React, { useState } from 'react'
import { outings } from '../constant/data'

export const Sorties = () => {
    const [selected, setSelected] = useState(null)
    const [confirmed, setConfirmed] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const handleConfirm = async () => {
    if (!selected) return
    const choice = outings.find(o => o.id === selected)

    setLoading(true)
    setError(false)

    try {
        const res = await fetch('https://formspree.io/f/mwlpkevk', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                message: `Karel a choisi : ${choice?.title}`,
                id: choice?.id,
                date: new Date().toLocaleString('fr-FR'),
            }),
        })

        if (!res.ok) throw new Error('Envoi échoué')
        setConfirmed(true)
    } catch (err) {
        console.error(err)
        setError(true)
    } finally {
        setLoading(false)
    }
}

    return (
        <section id="Sorties" className='w-full bg-white px-6 md:px-16 py-24'>

            <div className='flex flex-col items-center text-center gap-4 mb-14'>
                <span className='inline-flex w-fit items-center gap-2 bg-primary-pale text-primary-dark font-semibold px-5 py-2 rounded-full'>
                    ✦ À toi de choisir
                </span>
                <h2 className='font-display font-extrabold text-4xl md:text-5xl text-ink'>
                    Où veux-tu qu'ont <span className='font-brittany font-normal text-primary text-5xl md:text-6xl'>partent</span> ?
                </h2>
                <p className='text-ink/70 max-w-md'>
                    Choisis l'endroit qui te fait envie, ont s'occupe du reste.
                </p>
            </div>

            {!confirmed ? (
                <>
                    <div className='grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto'>
                        {outings.map(({ id, title, desc, image }) => (
                            <button
                                key={id}
                                onClick={() => setSelected(id)}
                                className={`text-left flex flex-col overflow-hidden rounded-3xl border-2 transition-all
                                    ${selected === id
                                        ? 'border-primary shadow-lg'
                                        : 'border-primary-light/50 hover:border-primary-light'
                                    }`}
                            >
                                <div className='relative h-40 w-full'>
                                    <img
                                        src={image}
                                        alt={title}
                                        className='absolute inset-0 w-full h-full object-cover'
                                    />
                                    <div className={`absolute inset-0 transition-colors
                                        ${selected === id ? 'bg-primary/30' : 'bg-black/10'}`}
                                    />
                                    {selected === id && (
                                        <span className='absolute top-3 right-3 bg-white text-primary text-lg w-8 h-8 flex items-center justify-center rounded-full shadow'>
                                            ✓
                                        </span>
                                    )}
                                </div>

                                <div className={`flex flex-col gap-2 p-5 ${selected === id ? 'bg-primary-pale' : 'bg-white'}`}>
                                    <h3 className='font-display font-bold text-ink'>{title}</h3>
                                    <p className='text-ink/60 text-sm'>{desc}</p>
                                </div>
                            </button>
                        ))}
                    </div>

                    <div className='flex flex-col items-center gap-3 mt-10'>
                        <button
                            onClick={handleConfirm}
                            disabled={!selected || loading}
                            className='bg-ink text-white font-semibold px-8 py-3.5 rounded-full shadow-lg hover:-translate-y-0.5 transition-transform disabled:opacity-40 disabled:hover:translate-y-0'
                        >
                            {loading ? 'Envoi...' : 'Confirmer mon choix'}
                        </button>
                        {error && (
                            <p className='text-red-500 text-sm'>
                                Oups, une erreur est survenue, réessaie 🙏
                            </p>
                        )}
                    </div>
                </>
            ) : (
                <div className='flex flex-col items-center text-center gap-4 max-w-md mx-auto'>
                    <span className='text-5xl'>🎉</span>
                    <h3 className='font-display font-bold text-2xl text-ink'>
                        C'est noté !
                    </h3>
                    <p className='text-ink/70'>
                        On part faire : <span className='text-primary font-semibold'>
                            {outings.find(o => o.id === selected)?.title}
                        </span>
                    </p>
                </div>
            )}

        </section>
    )
}