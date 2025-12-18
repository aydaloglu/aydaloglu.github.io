import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white py-8 border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
                <div className="flex space-x-6 mb-4">
                    <a
                        href="https://github.com/aydaloglu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-accent transition-colors"
                    >
                        <Github size={24} />
                        <span className="sr-only">GitHub</span>
                    </a>
                    <a
                        href="https://linkedin.com/in/aydaloglu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-accent transition-colors"
                    >
                        <Linkedin size={24} />
                        <span className="sr-only">LinkedIn</span>
                    </a>
                </div>
                <p className="text-sm text-slate-500">
                    © 2025 Aydan Aloğlu
                </p>
            </div>
        </footer>
    );
};

export default Footer;
