import React from 'react';
import { Mail } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-white text-center">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-accent font-medium mb-4">Sırada Ne Var?</p>
                <h2 className="text-4xl font-bold text-primary mb-6">İletişime Geçin</h2>
                <p className="text-lg text-secondary mb-10 leading-relaxed">
                    Yeni fırsatlara açığım. Sorularınız veya mesajlarınız için benimle iletişime geçebilirsiniz.
                </p>
                <a
                    href="mailto:aydanaloglu@gmail.com"
                    className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-accent hover:bg-blue-600 transition-all duration-200"
                >
                    <Mail className="mr-2 h-5 w-5" />
                    Merhaba De
                </a>
            </div>
        </section>
    );
};

export default Contact;
