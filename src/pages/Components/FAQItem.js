import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`faq-item ${isOpen ? 'active' : ''}`}>
            <div
                className='faq-question'
                onClick={() => setIsOpen(!isOpen)}
                id={isOpen ? 'opened' : ''}
            >
                {question}
                <span className='faq-toggle'>+</span>
            </div>
            {true && (
                <div className='faq-answer'>
                    <div className='faq-answer-inner'>{answer}</div>
                </div>
            )}
        </div>
    );
};

export default FAQItem;
