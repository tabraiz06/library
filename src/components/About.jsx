import React from 'react'

const About = () => {
 return (
   <section id="about" className="py-16">
     <div className="container">
       <div className="grid md:grid-cols-2 gap-12 items-center">
         <div className="space-y-4 p-4">
           <img
             src="https://www.shutterstock.com/image-photo/using-laptop-show-icon-address-600nw-2521386695.jpg"
             alt="About Us"
             width={600}
             height={400}
             className="rounded-lg"
           />
         </div>
         <div className="space-y-6">
           <h2 className="text-3xl font-bold">About StudySpace</h2>
           <p className="text-muted-foreground">
             Founded in 2020, StudySpace has been a pioneer in providing premium
             study environments for students. Our founders, Dr. Sarah Johnson
             and Prof. Michael Chen, envisioned a space where students could
             focus on their studies without any distractions.
           </p>
           <p className="text-muted-foreground">
             With over 20 years of combined experience in education, our
             founders understand the importance of a conducive learning
             environment. Their vision has helped thousands of students achieve
             their academic goals.
           </p>
           <p className="text-muted-foreground">
             Today, StudySpace continues to evolve and improve, always putting
             our students' needs first. We're committed to providing the best
             possible study environment for the next generation of learners.
           </p>
         </div>
       </div>
     </div>
   </section>
 );
}

export default About
