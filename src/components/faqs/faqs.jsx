import { useState } from "react"
import styles from "./faqs.module.css"

const FAQs = () => {
    const [displayAnswers, setDisplayAnswers] = useState("none");

    const toggleDisplayAnswer = () => {
        setDisplayAnswers((prev) => (prev === "none" ? "block" : "none"));
    }
    const QuestionsAndAnswers = [
        { id: 1, 
            question: 'How can I get started with TechDetect Ventures?', 
            answer: 'To get started, you have to click on the signup button in order to create your TechDetect Ventures account'
        },
        { id: 2, 
            question: 'How is cybersecurity important for my business?', 
            answer: 'It helps to protect sensitive data such as financial records and it also helps to build customers trust ensuring that their information is safe.'
        },
        { id: 3, 
            question: 'What are the common cyber threats that businesses face?', 
            answer: 'Some of the threats that businesses face are phishing attacks, data breaches and malware attack'
        },
        { id: 4, 
            question: 'What measures do you have in place to protect against data breaches?', 
            answer: 'We utilize Data Loss Prevention (DLP) solutions to monitor and prevent unauthorized transmission or leakage of sensitive data.'
        },
        { id: 5, 
            question: 'Does TechDetect Ventures offer regular software updates?', 
            answer: 'We utilize Data Loss Prevention (DLP) solutions to monitor and prevent unauthorized transmission or leakage of sensitive data.'
        },
    ]
    return(
        <>
            <div>
                {QuestionsAndAnswers.map((QandA) => (
                    <div key={QandA.id} className={styles.QuestionsAndAnswersContainer}>
                        <div className={styles.questionPlusSign}>
                            <p>{QandA.question}</p><span onClick={toggleDisplayAnswer}><svg width="14" height="9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m1 1.5 6 6 6-6" stroke="#0D0D0D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
                        </div>
                        
                        <p className={styles.answers} style={{ display: displayAnswers }}>{QandA.answer}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default FAQs