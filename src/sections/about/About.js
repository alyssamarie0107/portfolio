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
                    viewport={{ once: true }}
                />

                <motion.img
                    id={ styles.sparks2SVG }
                    src={ Sparks2SVG }
                    alt="Sparks2 SVG"
                    variants={ imgVariants }
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true  }}
                />

                <motion.div 
                    id={ styles.aboutHeading }
                    variants={ aboutContainerVariants }
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}>
                        <p>Who am I?</p>
                        <h3>About Me <FontAwesomeIcon icon={ faFemale } id={styles.faFemale } /></h3>
                </motion.div>

                <motion.div 
                    id={ styles.aboutContainer }
                    variants={ aboutContainerVariants }
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}>
                        <div id = { styles.about }>
                            <p>Hello! My name is Alyssa Rodriguez. I am a highly skilled Software Engineer, based in San Francisco, CA who is specializing in frontend web development. I graduated from the University of California, Davis in 2021 with a Bachelor of Science degree in Computer Science. Currently, I am a Code Coach at theCoderSchool, where I teach students between the ages of 6-18 how to code in Scratch, Python, or JavaScript. Recently, I have completed a year-long internship with the University of California, San Francisco (UCSF) as their Front-End Web Developer Intern, where I gained extensive experience in developing frontend web applications.</p>

                            <p>My work philosophy is rooted in the belief that software engineering is an ongoing education, and I constantly endeavor to enhance my skills. I am a proactive learner who stays up-to-date with the latest industry developments and techniques by watching video tutorials, taking online courses, and engaging in personal projects using the latest technologies. Although my specialization is frontend development, I am actively expanding my knowledge of backend technologies such as PHP and SQL to become a full-stack developer.</p>

                            <p>I am currently seeking opportunities as a software engineer to apply my knowledge and skills. My exceptional drive, passion, and expertise makes me an outstanding candidate for any organization seeking a talented and dedicated software engineer.</p>
                        </div>
                </motion.div>
        </section>
    );
}
 
export default About;