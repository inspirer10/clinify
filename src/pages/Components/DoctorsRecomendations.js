import React from 'react';

function DoctorsRecomendations() {
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
                <div className='doctor-recomendation'>
                    <div>
                        <img src='' alt='' />
                        <div>
                            <p>Dr. Mark Liu</p>
                            <p>Cardiologist</p>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    );
}

export default DoctorsRecomendations;
