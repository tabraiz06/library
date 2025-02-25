import React, { useEffect, useState } from 'react'
const slides = [
  {
    image:
      "https://ideas.demco.com/wp-content/uploads/2022/10/blog_Children_1_024.jpg",
    title: "Welcome to StudySpace",
    description: "Your Perfect Learning Environment",
  },
  {
    image: "https://pcu.edu.in/assets/images/library/library-01.webp",
    title: "Modern Facilities",
    description: "State-of-the-art Infrastructure",
  },
  {
    image:
      "https://tcsclibrary.wordpress.com/wp-content/uploads/2011/02/library11.jpg",
    title: "Expert Guidance",
    description: "Learn from the Best",
  },
];

function MainSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);



  return (
    <section className="relative h-[90vh] min-h-[400px] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            width={1920}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="max-w-xl text-white text-center">
              <h1 className="text-4xl font-bold mb-4">{slide.title}</h1>
              <p className="text-xl">{slide.description}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
export default MainSection

