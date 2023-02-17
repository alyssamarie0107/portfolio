import styles from './Contact.module.css';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage } from '@fortawesome/free-solid-svg-icons'; 
import ContactBtn from '../../components/buttons/contact/contact-btn/ContactBtn';
import RoboticHandSVG from '../../assets/svg/robotic-hand.svg';

// animation varirants
const roboticHandVariants = {
    hidden: {
        y: -100
    },
    visible: {
        y: 0,
        transition: {
            duration: 2
        }
    }
}

// contact section code
const Contact = () => {
    return (
        <section
            className={ styles.Contact } 
            id="contact">
                <motion.img
                    id={ styles.roboticHandSVG }
                    src={ RoboticHandSVG }
                    alt="Robotic Hand SVG"
                    variants={ roboticHandVariants }
                    initial="hidden"
                    whileInView="visible"
                />
                
                <div id={ styles.contactHeading }>
                    <p>What's Next?</p>
                    <h3>Get in Touch <FontAwesomeIcon icon={ faMessage } id={ styles.faMessage }/></h3>
                </div>

                <div id={ styles.contactContainer }>
                    <p>I am always looking for opportunities to expand upon my skills and I am currently seeking entry-level full-time software engineering opportunities. My inbox is always open and I'd love to hear from you if you are looking to network or are interested in having me on your team.</p>

                    <ContactBtn id="getInTouchBtn" href="mailto:amrrodriguez@ucdavis.edu">
                        Get in touch
                    </ContactBtn>
                </div>
        </section>
    );
}
 
export default Contact;