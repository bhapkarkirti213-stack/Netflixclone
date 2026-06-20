import { useState } from "react";

function FAQ() {
    const [open, setOpen] = useState(null);

    const faqs = [
        {
            question: "What is Netflix?",
            answer:
                "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more on thousands of internet-connected devices.",
        },
        {
            question: "How much does Netflix cost?",
            answer:
                "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device for one fixed monthly fee.",
        },
        {
            question: "Where can I watch?",
            answer:
                "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly.",
        },
        {
            question: "How do I cancel?",
            answer:
                "Netflix is flexible. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."

        },
        {
            question: "What can I wath on Netflix?",
            answer: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
        },
        {
            question: "Is Netflix good for kids?",
            answer: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space."
        }
    ];

    return (
        <div className="faq">
            <h2>Frequently Asked Questions</h2>

            {faqs.map((faq, index) => (
                <div key={index}>
                    <div
                        className="faq-item"
                        onClick={() => setOpen(open === index ? null : index)}
                    >
                        <span>{faq.question}</span>
                        <span>{open === index ? "×" : "+"}</span>
                    </div>

                    {open === index && (
                        <div className="faq-answer">
                            {faq.answer}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default FAQ;