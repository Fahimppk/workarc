export const metadata = {
    title: 'Services — WebArc Studio',
    description: 'Explore our web development services including website development, web apps, UI/UX design, e-commerce, API development, and maintenance.',
};

const services = [
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A9.015 9.015 0 003 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
        ),
        title: 'Website Development',
        description:
            'We build fast, responsive, and SEO-optimized websites that look great on every device. From corporate sites to creative portfolios, we deliver pixel-perfect results.',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
            </svg>
        ),
        title: 'Web App Development',
        description:
            'Complex web applications built with scalable architectures using React, Next.js, and Node.js. We handle everything from dashboards to SaaS platforms.',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
            </svg>
        ),
        title: 'UI/UX Design',
        description:
            'User-centered design that combines aesthetics with usability. We create wireframes, prototypes, and polished interfaces that delight your audience.',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
        ),
        title: 'E-Commerce Solutions',
        description:
            'End-to-end online store development with secure payment integration, inventory management, and a seamless shopping experience for your customers.',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
        ),
        title: 'API Development',
        description:
            'Robust RESTful and GraphQL APIs built with Node.js and Express. We design scalable backend architectures ready for production traffic.',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.384 3.18A1.008 1.008 0 014.5 17.48V6.52a1.008 1.008 0 011.536-.87l5.384 3.18M15.75 12l-5.384 3.18M15.75 12l-5.384-3.18M15.75 12h4.5m-4.5 0a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5z" />
            </svg>
        ),
        title: 'Maintenance & Support',
        description:
            'Ongoing maintenance, performance monitoring, security updates, and feature enhancements to keep your digital products running smoothly.',
    },
];

export default function ServicesPage() {
    return (
        <>
            {/* Header */}
            <section className="bg-surface py-24">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                        Services
                    </span>
                    <h1 className="mt-3 text-4xl md:text-5xl font-bold text-text-primary">
                        What We Offer
                    </h1>
                    <p className="mt-6 text-text-secondary max-w-2xl mx-auto leading-relaxed">
                        We provide end-to-end web development services to take your business from
                        concept to a fully functional digital product.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="bg-white py-24">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className="group bg-white rounded-xl p-8 border border-border hover-lift hover:border-accent/30 transition-colors"
                        >
                            <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-accent/10 text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-text-primary mb-3">
                                {service.title}
                            </h3>
                            <p className="text-sm text-text-secondary leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
