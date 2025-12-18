import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Database, TrendingUp, Zap, Map as MapIcon } from 'lucide-react';

const Experience = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    // Lock body scroll when drawer is open
    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [selectedProject]);

    const projects = [
        {
            id: 1,
            title: "Spor Bahis Platformlarında Churn & Finansal Değer Analizi",
            shortDesc: "Kullanıcı terkini önceden tahmin eden, müşteri değerini ve gelir etkisini analiz eden veri odaklı erken uyarı sistemi.",
            tags: ["Churn Prediction", "LTV", "Machine Learning", "FinTech"],
            icon: TrendingUp,
            color: "bg-blue-50 text-blue-600",
            details: {
                aim: "Kullanıcı terkini gerçekleşmeden önce tahmin ederek gelir kaybını azaltmak ve müşteri yaşam boyu değerini artırmak.",
                approach: "Kullanıcı davranışları, bahis geçmişi ve finansal metrikler analiz edilerek churn tahmin modeli geliştirildi. Müşteriler risk seviyelerine göre segmentlere ayrıldı.",
                output: "Erken uyarı churn skoru, LTV bazlı müşteri segmentleri ve aksiyon odaklı karar destek içgörüleri.",
                tech: ["Python", "SQL", "Makine Öğrenmesi"]
            }
        },
        {
            id: 2,
            title: "Yeni Ürün Lansmanı için Veri Tabanlı Müşteri Segmentasyonu",
            shortDesc: "Büyük veri analizi ve çok kriterli karar verme yöntemleriyle, yeni ürün lansmanı için stratejik müşteri segmentleri oluşturuldu.",
            tags: ["Customer Segmentation", "Big Data", "Decision Support", "Strategy"],
            icon: Database,
            color: "bg-purple-50 text-purple-600",
            details: {
                aim: "Yeni ürün lansmanında doğru müşteri gruplarını belirleyerek pazarlama ve kaynak kullanımını optimize etmek.",
                approach: "Büyük veri setleri üzerinden müşteri segmentasyonu yapıldı. Çok kriterli karar verme yöntemleri kullanılarak segmentler stratejik önceliklere göre sıralandı.",
                output: "Lansman için öncelikli müşteri segmentleri ve veri destekli stratejik karar matrisi.",
                tech: ["Python", "Kümeleme Algoritmaları", "AHP–TOPSIS"]
            }
        },
        {
            id: 3,
            title: "Elektrik Dağıtımında Kesinti Tahmini",
            subtitle: "İzmir & Manisa",
            shortDesc: "Elektrik şebekelerinde oluşabilecek kesintileri öngörmek için veri madenciliği ve sınıflandırma modelleri geliştirildi.",
            tags: ["Data Mining", "Classification", "Energy Analytics", "Predictive Modeling"],
            icon: Zap,
            color: "bg-yellow-50 text-yellow-600",
            details: {
                aim: "Elektrik dağıtım şebekelerinde oluşabilecek kesintileri önceden tahmin ederek operasyonel verimliliği artırmak.",
                approach: "Bölgesel altyapı, çevresel ve geçmiş kesinti verileri kullanılarak sınıflandırma modelleri geliştirildi.",
                output: "Kesinti olasılığı tahmin modeli ve bölge bazlı risk profilleri.",
                tech: ["Python", "Veri Madenciliği", "Sınıflandırma Modelleri"]
            }
        },
        {
            id: 4,
            title: "Türkiye Açık Veri İhtiyaç Atlası",
            shortDesc: "Türkiye’de açık veri ekosistemindeki eksik alanları belirleyen, sektör bazlı ve paydaş odaklı bir veri ihtiyaç haritası.",
            tags: ["Open Data", "Public Policy", "Data Mapping", "Research"],
            icon: MapIcon,
            color: "bg-emerald-50 text-emerald-600",
            details: {
                aim: "Türkiye’de açık veri ekosisteminde eksik, güncel olmayan veya erişimi sınırlı veri alanlarını ortaya koymak.",
                approach: "Kamuya açık veri setleri analiz edilerek sektör bazlı ihtiyaç haritalaması yapıldı. Paydaş görüşleriyle ihtiyaçlar doğrulandı.",
                output: "Araştırmacılar ve STK’lar için yol gösterici, dinamik bir açık veri ihtiyaç haritası.",
                tech: ["Açık Veri Kaynakları", "Veri Analizi", "Haritalama"]
            }
        }
    ];

    return (
        <section id="experience" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">Projeler</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Veri analitiği ve makine öğrenmesi alanında gerçekleştirdiğim seçilmiş çalışmalar.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            layoutId={`card-${project.id}`}
                            className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full group cursor-pointer"
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div className={`p-3 rounded-xl ${project.color} transition-colors duration-300`}>
                                    <project.icon size={28} strokeWidth={1.5} />
                                </div>
                                <span className="inline-flex items-center text-sm font-semibold text-slate-400 group-hover:text-blue-600 transition-colors">
                                    Projeyi İncele <ArrowRight size={16} className="ml-1" />
                                </span>
                            </div>

                            <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                                {project.title}
                            </h3>
                            {project.subtitle && (
                                <span className="text-sm font-semibold text-slate-500 mb-3 block uppercase tracking-wide">
                                    {project.subtitle}
                                </span>
                            )}

                            <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                                {project.shortDesc}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tags.map((tag, idx) => (
                                    <span key={idx} className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Slide-over Drawer */}
            <AnimatePresence>
                {selectedProject && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50"
                        />

                        {/* Drawer Panel */}
                        <motion.div
                            layoutId={`drawer-${selectedProject.id}`}
                            initial={{ x: "100%", opacity: 0.5 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: "100%", opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed inset-y-0 right-0 w-full md:w-[600px] bg-white z-[51] shadow-2xl overflow-y-auto"
                        >
                            <div className="p-8 md:p-12 relative min-h-full">
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-colors"
                                >
                                    <X size={24} />
                                </button>

                                <div className={`inline-flex p-3 rounded-xl ${selectedProject.color} mb-8`}>
                                    <selectedProject.icon size={32} strokeWidth={1.5} />
                                </div>

                                <motion.h3
                                    className="text-3xl font-bold text-slate-900 mb-2 leading-tight"
                                >
                                    {selectedProject.title}
                                </motion.h3>

                                {selectedProject.subtitle && (
                                    <span className="text-lg font-medium text-slate-500 mb-8 block uppercase tracking-wide">
                                        {selectedProject.subtitle}
                                    </span>
                                )}

                                <div className="space-y-10 mt-10">
                                    <div className="space-y-4">
                                        <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
                                            Projenin Amacı
                                        </h4>
                                        <p className="text-slate-600 leading-relaxed text-lg">
                                            {selectedProject.details.aim}
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
                                            Yaklaşım
                                        </h4>
                                        <p className="text-slate-600 leading-relaxed text-lg">
                                            {selectedProject.details.approach}
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
                                            Çıktı
                                        </h4>
                                        <p className="text-slate-600 leading-relaxed text-lg">
                                            {selectedProject.details.output}
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
                                            Teknolojiler
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.details.tech.map((tech, idx) => (
                                                <span key={idx} className="px-4 py-2 rounded-lg text-sm font-semibold bg-slate-50 text-slate-700 border border-slate-200">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Experience;
