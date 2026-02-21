import Link from 'next/link';

export const metadata = {
    title: 'Portfolio — WebArc Studio',
    description: 'Browse our portfolio of web development projects including e-commerce stores, dashboards, and corporate websites.',
};

const projects = [
    {
        title: 'Luxe Fashion Store',
        category: 'E-Commerce',
        description: 'A premium online fashion store with real-time inventory, Stripe checkout, and a sleek editorial design.',
        tags: ['Next.js', 'Stripe', 'Tailwind CSS'],
        color: 'from-indigo-500/10 to-purple-500/10',
    },
    {
        title: 'FinTrack Dashboard',
        category: 'Web Application',
        description: 'An analytics dashboard for financial data with real-time charts, data export, and role-based access.',
        tags: ['React', 'Node.js', 'Chart.js'],
        color: 'from-emerald-500/10 to-teal-500/10',
    },
    {
        title: 'Flavor & Feast',
        category: 'Restaurant Website',
        description: 'A modern restaurant website with online reservations, dynamic menu management, and a beautiful gallery.',
        tags: ['Next.js', 'Sanity CMS', 'CSS Modules'],
        color: 'from-orange-500/10 to-amber-500/10',
    },
    {
        title: 'MediCare Portal',
        category: 'Healthcare Platform',
        description: 'A patient portal with appointment booking, secure messaging, and electronic health records integration.',
        tags: ['React', 'Express', 'PostgreSQL'],
        color: 'from-sky-500/10 to-cyan-500/10',
    },
    {
        title: 'EduLearn LMS',
        category: 'EdTech Platform',
        description: 'A full-featured learning management system with video courses, quizzes, progress tracking, and certificates.',
        tags: ['Next.js', 'MongoDB', 'AWS S3'],
        color: 'from-violet-500/10 to-fuchsia-500/10',
    },
    {
        title: 'GreenGrid Energy',
        category: 'Corporate Website',
        description: 'A corporate site for a renewable energy company with interactive data visualizations and a blog.',
        tags: ['Next.js', 'D3.js', 'Tailwind CSS'],
        color: 'from-lime-500/10 to-green-500/10',
    },
];

export default function PortfolioPage() {
    return (
        <>
            {/* Header */}
            <section className="bg-surface py-24">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                        Portfolio
                    </span>
                    <h1 className="mt-3 text-4xl md:text-5xl font-bold text-text-primary">
                        Our Work
                    </h1>
                    <p className="mt-6 text-text-secondary max-w-2xl mx-auto leading-relaxed">
                        A curated collection of projects that demonstrate our capability to deliver
                        exceptional digital experiences across industries.
                    </p>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="bg-white py-24">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className="group rounded-xl border border-border overflow-hidden hover-lift"
                        >
                            {/* Image placeholder */}
                            <div className={`h-52 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                                <span className="text-sm font-medium text-text-secondary/50">
                                    {project.category}
                                </span>
                                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors" />
                            </div>

                            <div className="p-6">
                                <h3 className="text-lg font-semibold text-text-primary mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-5">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 text-xs font-medium text-accent bg-accent/10 rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <Link
                                    href="#"
                                    className="inline-flex items-center text-sm font-medium text-accent hover:text-accent-dark transition-colors gap-1"
                                >
                                    View Project
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
