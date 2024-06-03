import React from 'react';

function DoctorsRecomendations() {
    const recomendations = [
        {
            image: 'doctor3.png',
            name: 'Dr. John Doe',
            role: 'Family Physician',
            recomendationText: `Introducing Clinily into our daily workflow has changed
                        the way we approach medical documentation. It's not just
                        about time efficiency, but about significantly improving
                        the quality of care we provide to our patients.`,
        },
        {
            image: 'doctor1.png',
            name: 'Dr. Mark Liu',
            role: 'Cardiologist',
            recomendationText: `Clinify's real-time transcription has been a
                        game-changer for my practice. Even with my heavy accent,
                        the accuracy is remarkable. It's freed up hours of my
                        day and let me focus more on my patient's needs. I can't
                        imagine going back to the old way of doing things.`,
        },
        {
            image: 'doctor2.png',
            name: 'Dr. Alicia Mendez',
            role: 'Pediatrician',
            recomendationText: `Using Clinily has revolutionized the way we manage
                        patient documentation. It's not just about saving time
                        it's about improving the quality our interactions and
                        care.`,
        },
        {
            image: 'doctor4.png',
            name: 'Dr. John Backer',
            role: 'Orthopedist',
            recomendationText: `Using Clinily has completely transformed how we manage
                        patient records. It's not just about saving time, but
                        about enhancing the quality of our interactions and
                        care.`,
        },
        {
            image: 'doctor6.png',
            name: 'Dr. Becky Agile',
            role: 'Pediatrician',
            recomendationText: `Implementing Clinily in our practice has greatly
                        improved our documentation process. The ability to
                        quickly and accurately record patient information has
                        enhanced our workflow and the quality of care we
                        provide.`,
        },

        {
            image: 'doctor5.png',
            name: 'Dr. Emily Tan',
            role: 'Family Physician',
            recomendationText: `Clinily's real-time transcription has revolutionized my
                        practice. Even with my strong accent, the accuracy is
                        incredible. It has freed up hours of my day, allowing me
                        to focus more on my patients' needs. I can't imagine
                        going back to the old methods.`,
        },
    ];

    return (
        <section className='doctorsRecomendations__section'>
            <h2 className='doctorsRecomendations-heading'>
                Why doctors love Clinify
            </h2>

            <p className='doctorsRecomendations-description'>
                Choose the Perfect Plan to fit your needs - from Individual
                Clinicians to Large Healthcare Organizations.
            </p>

            <article className='recomendations-container'>
                {recomendations.map((doctor) => (
                    <div className='doctor-recomendation'>
                        <div className='recomendation-heading'>
                            <img
                                className='doctor-thumbnail'
                                src={doctor.image}
                                alt='photo of doctor'
                            />
                            <div className='heading-text'>
                                <p className='doctor-name'>{doctor.name}</p>
                                <p className='doctor-role'>{doctor.role}</p>
                            </div>
                        </div>
                        <p className='recomendation-text'>
                            {doctor.recomendationText}
                        </p>
                    </div>
                ))}
            </article>
        </section>
    );
}

export default DoctorsRecomendations;
