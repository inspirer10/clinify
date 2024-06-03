import React, { useState } from 'react';
import FAQItem from './FAQItem';

function FAQ() {
    const faqData = [
        {
            question: 'How does Clinify ensure patient consent?',
            answer: 'Clinify ensures patient consent through a combination of digital forms and electronic signatures. Patients are required to review and sign consent forms digitally, which are then securely stored in our system. This ensures that consent is documented and easily accessible for future reference.',
        },
        {
            question: 'Can Clinify integrate with my current PMS?',
            answer: 'Yes, Clinify can integrate with your current Practice Management System (PMS). Our platform supports integration with a variety of popular PMS software through secure APIs. This allows for seamless data transfer and synchronization, ensuring that your patient records and appointments are always up to date.',
        },
        {
            question: 'Is Clinify suitable for non-English consultations?',
            answer: 'Clinify is designed to support multilingual consultations. Our platform includes features such as real-time translation and multilingual interface options, allowing both practitioners and patients to communicate effectively in their preferred languages. This ensures that language barriers do not hinder the quality of care provided.',
        },
        {
            question: 'How does the pricing work for larger clinics?',
            answer: 'For larger clinics, Clinify offers tiered pricing plans based on the number of practitioners and patients. We provide customized solutions to fit the specific needs and budgets of larger medical practices. Additionally, our sales team is available to discuss volume discounts and long-term contract options to ensure you get the best value for your investment.',
        },
    ];

    return (
        <section className='FAQ_section'>
            <h2 className='FAQ-heading'>Frequently Asked Questions</h2>

            <div className='faq'>
                {faqData.map((item, index) => (
                    <FAQItem
                        key={index}
                        question={item.question}
                        answer={item.answer}
                    />
                ))}
            </div>
        </section>
    );
}

export default FAQ;
