import styles from './Home.module.css';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'; 
import WorldWebSVG from '../../assets/svg/worldWeb.svg';
import ContactBtns from '../../components/buttons/contact/contact-btns/ContactBtns';

// animation variants
// parent
const homeContainerVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: { 
            delay: 1,
            duration: 0.5,
            when: "beforeChildren",
            staggerChildren: 0.5
        }
    }
}

// child
const childVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1
    }
}

const worldWebVariants = {
    hidden: {
        scale: 0,
        x: "-100vw",
        rotate: 180
    },
    visible: {
        scale: 1,
        x: 0,
        rotate: 0,
        transition: { 
            delay: 2,
            duration: 3
         }
    }
}

// home section
const Home = () => {
    return (
        <section 
            className={ styles.Home }
            id="home">
                <motion.div 
                    id={ styles.homeContainer }
                    variants={ homeContainerVariants }
                    initial="hidden"
                    animate="visible">
                        <h1>I'm Alyssa Rodriguez.</h1>

                        <motion.h2 variants={ childVariants }>
                            Software Developer <FontAwesomeIcon icon={ faLaptopCode } id={ styles.faLaptop }/>
                        </motion.h2>
                        
                        <motion.p variants={ childVariants }>
                            based in San Francisco, CA who is highly skilled and experienced in writing clean, scalable, and efficient code that outputs exceptional digital experiences for the end user. I am passionate about all things technology and love tackling complex problems that make a positive impact on everyday lives.
                        </motion.p>

                        <ContactBtns/>
                </motion.div>

                <motion.img
                    id={ styles.worldWebSVG }
                    src={ WorldWebSVG }
                    alt="World Web SVG"
                    variants={ worldWebVariants }
                    initial="hidden"
                    animate="visible"
                />
        </section>
    );
}
 
export default Home;