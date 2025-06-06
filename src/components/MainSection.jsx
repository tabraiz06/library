import React, { useEffect, useState } from "react";

const slides = [
  {
    image:
      "https://ideas.demco.com/wp-content/uploads/2022/10/blog_Children_1_024.jpg",
    title: "Welcome to Maa Laxmi Library",
    description:
      "Maa Laxmi Library's aims to provide a peacefull place for the student of dhanbad to get a better a education.",
  },
  {
    image: "https://pcu.edu.in/assets/images/library/library-01.webp",
    title: "📖 The Biggest Library in Dhanbad – A Haven for Learners!",
    description:
      "Located in the heart of Dhanbad, StudySpace is set to become the city's largest and most advanced library. Designed for students, researchers, and professionals, we offer a peaceful and fully equipped study environment. With high-speed internet, private study desks, and 24/7 power backup, we ensure a distraction-free zone where knowledge thrives. Join us and be part of Dhanbad's biggest learning hub!",
  },
  {
    image:
      "https://tcsclibrary.wordpress.com/wp-content/uploads/2011/02/library11.jpg",
    title: "📚 Unlock Your Potential at StudySpace",
    description:
      "Step into a world of limitless learning with StudySpace! Our library is designed for focused study, innovation, and personal growth. With high-speed internet, peaceful surroundings, and modern facilities, we provide the perfect environment for students and professionals alike. Elevate your learning experience today!",
  },
];

function MainSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-[100vh] min-h-[400px] w-full overflow-hidden">
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
              <p className="text-xl text-white">{slide.description}</p>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full ${
              currentSlide === index ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}

export default MainSection;
