
import { Mail, Phone, MapPin, Github, Twitter, Linkedin } from "lucide-react";
import React from "react";
import devImage from '../assets/developer.png'


export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 p-4">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">StudySpace</h3>
            <p className="text-gray-400">
              Providing the perfect environment for focused learning and
              academic success.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick as</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-white">
                  Facilities
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                123 Study Street, Education City
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                +1 234 567 890
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                info@studyspace.com
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Developer Contact</h4>
            <p className="text-gray-400">Designed and developed by John Doe</p>
            <div className="flex flex-col items-center md:flex-row">
              <img
                src={devImage}
                alt="Developer"
                className="rounded-full w-12 h-12 mr-4"
              />
              <p className="text-lg">
                Developed by <span className="font-semibold">Md Tabraiz</span>
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} StudySpace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
