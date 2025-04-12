'use client';

import { Github, Linkedin, Instagram, Youtube, Facebook, Mail, UserCheck2Icon, UserCircleIcon } from 'lucide-react';

export function FooterContainer() {
  return (
    <footer className="w-full bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Me Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4">About Me</h3>
            <p className="text-gray-700">
              Hi, I'm Chaitanya Shinde, a second-year Computer Engineering student at PICT, Pune, with a CGPA of 9.91. 
              I have a strong passion for full-stack development, specializing in:
              <br />
              <strong>Frontend:</strong> HTML, CSS, JavaScript, React, Next.js
              <br />
              <strong>Backend:</strong> Node.js, PHP, Python, CPP, C
              <br />
              <strong>Database:</strong> MySQL, MongoDB. 
              <br />
              I love solving complex coding challenges, participating in hackathons, and building impactful projects.
              <br />
              Always open to collaborations, discussions, and new opportunities. Let's connect! 🚀
            </p>
          </div>

          {/* Social Media Column */}
          <div className="space-y-4 md:pl-20">
            <h3 className="text-2xl font-bold mb-4">Social Media</h3>
            <div className="space-y-3">
              <a
                href="https://github.com/cts9505"
                className="flex items-center text-gray-700 hover:text-black transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-3" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/chaitanya-shinde-computer/"
                className="flex items-center text-gray-700 hover:text-black transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-3" /> LinkedIn
              </a>
              <a
                href="https://www.instagram.com/_chaitanya_.9505/"
                className="flex items-center text-gray-700 hover:text-black transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="mr-3" /> Instagram
              </a>
              <a
                href="https://www.youtube.com/@chaitanyashindecomputer"
                className="flex items-center text-gray-700 hover:text-black transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="mr-3" /> YouTube
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61551709142982"
                className="flex items-center text-gray-700 hover:text-black transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="mr-3" /> Facebook
              </a>
            </div>
          </div>

          {/* Contact Me Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4">Contact Me</h3>
            <div className="space-y-3">
              <a
                href="mailto:9chaitanyashinde@gmail.com"
                className="flex items-center text-gray-700 hover:text-black transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="mr-3" /> 9chaitanyashinde@gmail.com
              </a>

              <a
                href="https://chaitanyashinde.web.app/"
                className="flex items-center text-gray-700 hover:text-black transition mt-5"
                target="_blank"
                rel="noopener noreferrer"
                
              >
                <UserCircleIcon className="mr-3" /> Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}