import React from 'react'

const About = () => {
 return (
   <section
     
     className="py-16 relative bg-gray-100"
    //  style={{
    //    backgroundImage:
    //      'url("https://ideas.demco.com/wp-content/uploads/2022/10/blog_Children_1_024.jpg")',
    //    backgroundSize: "cover",
    //    backgroundPosition: "center",
    //    opacity: 0.9,

    //  }}
   >
     <div className="container" id='about'>
       <div className="grid md:grid-cols-2 gap-12 items-center p-4">
         <div className="space-y-4 p-4">
           <img
             src="https://www.shutterstock.com/image-photo/using-laptop-show-icon-address-600nw-2521386695.jpg"
             alt="About Us"
             width={600}
             height={400}
             className="rounded-lg"
           />
         </div>
         <div className="space-y-6 p-4">
           <h2 className="text-3xl font-bold text-black">About StudySpace</h2>
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
       <div className="grid md:grid-cols-2 gap-12 items-center p-4">
         <div className="space-y-6 p-4">
           <h2 className="text-3xl font-bold text-black">About StudySpace</h2>
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
         <div className="space-y-4 p-4">
           <img
             src="https://www.shutterstock.com/image-photo/using-laptop-show-icon-address-600nw-2521386695.jpg"
             alt="About Us"
             width={600}
             height={400}
             className="rounded-lg"
           />
         </div>
       </div>
     </div>
   </section>
 );
}

export default About
