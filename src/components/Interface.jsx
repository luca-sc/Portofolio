import './Section.css'
import {motion} from "framer-motion"
const Section = (props) =>{
    const {children} = props;

    return(
       <motion.section className="menu-sections"

        initial={{
            opacity:0,
            y:50,
        }}
        whileInView={{
            opacity:1,
            y:0,
            transition:{
                duration:1,
                delay:0.6,
            }
        }}
        >
            {children}
       </motion.section>
       
    )
}

export const Interface=()=>{
    return(
        <div className="menu"> 
       
        <AboutSection/>
        
        <SkillsSection/>
       
        <Section>
            <h1>Projects</h1>
        </Section>
        <Section>
            <h1>Contact</h1>
        </Section>
        
        </div>
    )
}
const AboutSection =()=>{
    return(
    <Section>
        <h1 className="title">
            
            Hi, I'm 
            <br />
            <span>Luca Schmidt</span>
           <motion.p
            initial={{
                opacity:0,
                y:25,
            }}
            whileInView={{
                opacity:1,
                y:0,
            }}
            transition={{
                duration:1,
                delay:1.5,
            }}
           >I am a student and
            <br />
            a junior WebDev
            </motion.p>
            <motion.button
             initial={{
                opacity:0,
                y:25,
            }}
            whileInView={{
                opacity:1,
                y:0,
            }}
            transition={{
                duration:1,
                delay:2,
            }}
            >
               Contact me
            </motion.button>
        </h1>
    </Section>
    )
}
const skills = [
    {
        title: "HTML & CSS",
        level:80,
    },
    {
        title:"React/ReactNative",
        level:50,
    },
    {
        title:"Passion",
        level:100,
    }
]
const languages=[
    {
        title: "English",
        level:60,
    },
   {
     title: "German",
     level:40,
   }
]
const SkillsSection=()=>{
    return(
        <Section>
            <motion.div whileInView={"visible"}>
                <h2 className="skill">Skills</h2>  
                <div className="skills"> 
                    {skills.map((skill,index)=>(
                        <div className="skill-index" key={index}> 
                            <motion.h3 className="skill-title"
                             initial={{
                                    opacity:0,
                                }}
                                variants={{
                                    visible:{
                                        opacity:1,
                                    transition:{
                                    duration:1,
                                    delay:1 +index *0.1,
                                    }
                                } 
                                }}
                               
                               
                            >{skill.title}
                            </motion.h3> 
                            <div className="skill1"> 
                                <motion.div className="skill2"
                                style={{width: `${skill.level}% `}}
                                initial={{
                                    scaleX:0,
                                    originX:0,
                                }}
                                variants={{
                                    visible:{
                                        scaleX:1,
                                     transition:{
                                    duration:1,
                                    delay:1 +index *0.2,
                                    }
                                 }
                                    
                                }}
                               
                                />
                            </div>
                        </div>
                    ) )}
                </div>
            </motion.div>
             <motion.div whileInView={"visible"}>
                <h2 className="skill">Languages</h2>  
                <div className="skills"> 
                    {languages.map((languages,index)=>(
                        <div className="skill-index" key={index}> 
                            <motion.h3 className="skill-title"
                            initial={{
                                    opacity:0,
                                }}
                                variants={{
                                    visible:{
                                        opacity:1,
                                    transition:{
                                    duration:1,
                                    delay:2 +index *0.2,
                                    }
                                } 
                                }}
                            >{languages.title}</motion.h3> 
                            <div className="skill1"> 
                                <motion.div className="skill2"
                                style={{width: `${languages.level}% `}}
                                
                                initial={{
                                    scaleX:0,
                                    originX:0,
                                }}
                                variants={{
                                    visible:{
                                        scaleX:1,
                                    transition:{
                                    duration:1,
                                    delay:2 +index *0.2,
                                    }
                                 }
                                    
                                }}
                                />
                               
                            </div>
                        </div>
                    ) )}
                </div>
            </motion.div>
        </Section>
    )
}