import styles from './About.module.css';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFemale } from '@fortawesome/free-solid-svg-icons'; 
import Sparks1SVG from '../../assets/svg/sparks1.svg';
import Sparks2SVG from '../../assets/svg/sparks2.svg';

// animation variants
const aboutContainerVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: { delay: 1.3, duration: 1 }
    }
}

const imgVariants = {
    hidden: {
        scale: 0
    },
    visible: {
        scale: 1,
        transition: { duration: 1.5 }
    }
}

// about section
const About = () => {
    return (
        <section
            className={ styles.About }
            id="about">

                <motion.img
                    id={ styles.sparks1SVG }
                    src={ Sparks1SVG }
                    alt="Sparks1 SVG"
                    variants={ imgVariants }
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.7 }}
                />

                <motion.img
                    id={ styles.sparks2SVG }
                    src={ Sparks2SVG }
                    alt="Sparks2 SVG"
                    variants={ imgVariants }
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.7 }}
                />

                <motion.div 
                    id={ styles.aboutHeading }
                    variants={ aboutContainerVariants }
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.7 }}>
                        <p>Who am I?</p>
                        <h3>About Me <FontAwesomeIcon icon={ faFemale } id={styles.faFemale } /></h3>
                </motion.div>

                <motion.div 
                    id={ styles.aboutContainer }
                    variants={ aboutContainerVariants }
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.7 }}>
                        <div id = { styles.about }>
                            <p>Hello! My name is Alyssa Rodriguez. I am a <strong>Software Engineer</strong>, based in San Francisco, CA who is specializing in <strong>frontend web development</strong>. I graduated from the <strong>University of California, Davis</strong> in June of 2021 with a Bachelor of Science degree in Computer Science. Currently, I am working as a <strong>Code Coach </strong>at <strong>theCoderSchool</strong>, where I teach kids between the ages of 6-18 how to code in Scratch, Python, or JavaScript. Recently, I have completed a year long internship with UCSF as their Front-End Web Developer Intern.</p>

                            <p>I strive to write clean, scalable, and efficient code that outputs pixel perfect, interative, and responsive results to the web. I consider work as a developer an ongoing education, and I am continuously working to enhance my skillset and always looking for opportunities to work with those who are willing to share their knowledge as much as I want to learn. I am currently seeking an entry-level, full-time software engineering position at a company that is mission-driven, growing, and truly makes a positive impact or addresses an important problem, for I would be a valuable asset to any team.</p>
                        </div>
                </motion.div>
        </section>
    );
}
 
export default About;