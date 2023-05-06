import React from "react";
import Image from "../assets/avatar.png";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const fadeIn = (direction, delay) => {
    return {
      hidden: {
        y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
        opacity: 0,
        x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
      },
      show: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
          type: 'tween',
          duration: 1.2,
          delay: delay,
          ease: [0.25, 0.25, 0.25, 0.75],
        },
      },
    };
};

const Banner = () => {
    return (
        <section className="min-h-[85vh] lg:min-h-[78vh] flex items-center" id="home">
            <div className="container mx-auto">
                <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
                    <div className="flex-1 text-center font-secondary lg:text-left">
                        <motion.h1 
                            variants={fadeIn('up',0.3)} 
                            initial="hidden" 
                            whileInView={'show'} 
                            viewport={{once: false, amount: 0.7}} 
                            className="text-[40px] font-bold leading-[0.8] lg:text-[90px]">
                            HIRUSHAN <span>WANIGASINGHE</span>
                        </motion.h1>
                        <motion.div 
                            variants={fadeIn('up',0.4)} 
                            initial="hidden" 
                            whileInView={'show'} 
                            viewport={{once: false, amount: 0.7}} 
                            className="mb-6 text-[36px] lg:text-[60px] text-center lg:text-left font-secondary font-semibold uppercase leading-[1]">
                            <span className="mr-4">I am a</span>
                            <TypeAnimation
                                sequence={["Developer", 2000, "Traveler", 2000]}
                                speed={50}
                                className="text-accent"
                                wrapper="span"
                                repeat={Infinity}
                            />
                        </motion.div>
                        <motion.p 
                            variants={fadeIn('up',0.5)} 
                            initial="hidden" 
                            whileInView={'show'} 
                            viewport={{once: false, amount: 0.7}} 
                            className="mb-8 max-w-lg mx-auto lg:mx-0">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                        </motion.p>
                        <motion.div 
                            variants={fadeIn('up',0.6)} 
                            initial="hidden" 
                            whileInView={'show'} 
                            viewport={{once: false, amount: 0.7}} 
                            className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
                            <button className="btn btn-lg">Contact me</button>
                            <a href="#" className="text-gradient btn-link">
                                My Portfollio
                            </a>
                        </motion.div>
                        <motion.div 
                            variants={fadeIn('up',0.7)} 
                            initial="hidden" 
                            whileInView={'show'} 
                            viewport={{once: false, amount: 0.7}} 
                            className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
                            <a href="#">
                                <FaGithub />
                            </a>
                            <a href="#">
                                <FaLinkedin />
                            </a>
                            <a href="#">
                                <FaTwitter />
                            </a>
                        </motion.div>
                    </div>
                    <motion.div
                        variants={fadeIn('down',0.3)} 
                        initial="hidden" 
                        whileInView={'show'} 
                        className="hidden lg:flex flex-1 max-w-[320px] lg:w-max-[480px]">
                        <img src={Image} alt="" />
                    </motion.div>
                </div>

                
            </div>
        </section>
    );
};

export default Banner;
