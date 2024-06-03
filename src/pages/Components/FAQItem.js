import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='faq-item'>
            <div
                className='faq-question'
                onClick={() => setIsOpen(!isOpen)}
                id={isOpen ? 'opened' : ''}
            >
                {question}
                <span className='faq-toggle'>{isOpen ? '-' : '+'}</span>
            </div>
            {isOpen && <div className='faq-answer'>{answer}</div>}
        </div>
    );
};

export default FAQItem;
