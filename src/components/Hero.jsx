import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-slate-50 to-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 text-left space-y-6">
                    <p className="text-accent font-medium text-lg">Merhaba, ben</p>
                    <h1 className="text-5xl md:text-7xl font-bold text-primary">
                        Aydan Aloğlu
                    </h1>
                    <h2 className="text-2xl md:text-4xl font-semibold text-secondary opacity-90">
                        Veriyi <span className="text-accent">stratejik kararlara</span> dönüştürüyorum.
                    </h2>
                    <div className="space-y-4">
                        <p className="text-lg text-secondary max-w-xl leading-relaxed opacity-80">
                            Veri analisti olarak, karmaşık veri kümelerini anlamlı içgörülere ve etkili karar destek modellerine dönüştürmeye odaklanıyorum.
                            Veriye dayalı yaklaşımlarla iş problemlerine sürdürülebilir çözümler üretmeyi hedefliyorum.
                        </p>
                        <p className="text-sm font-semibold text-slate-500 tracking-wide uppercase">
                            Python · SQL · Machine Learning · Data Visualization
                        </p>
                    </div>
                    <div className="flex gap-4 pt-4">
                        <a
                            href="#experience"
                            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-accent hover:bg-blue-600 transition-all duration-200"
                        >
                            Projelerimi İncele <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center px-6 py-3 border border-secondary text-base font-medium rounded-md text-secondary hover:bg-slate-50 transition-all duration-200"
                        >
                            İletişime Geç
                        </a>
                    </div>
                </div>

                {/* Abstract shape or placeholder for image */}
                <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center relative">
                    <div className="w-64 h-64 md:w-96 md:h-96 rounded-full bg-gradient-to-tr from-blue-100 to-blue-50 blur-3xl absolute -z-10 opacity-70 animate-pulse"></div>
                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-white shadow-2xl flex items-center justify-center p-4 rotate-3 hover:rotate-0 transition-all duration-500">
                        <span className="text-gray-300 text-center font-light text-xl">
                            Profil fotoğrafım
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
