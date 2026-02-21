const projects = [
    {
        title: 'Luxe Fashion Store',
        category: 'E-Commerce',
        tags: ['Next.js', 'Stripe', 'Tailwind'],
        color: 'from-indigo-500/10 to-purple-500/10',
    },
    {
        title: 'FinTrack Dashboard',
        category: 'Web Application',
        tags: ['React', 'Node.js', 'Chart.js'],
        color: 'from-emerald-500/10 to-teal-500/10',
    },
    {
        title: 'Flavor & Feast',
        category: 'Restaurant Website',
        tags: ['Next.js', 'Sanity', 'CSS'],
        color: 'from-orange-500/10 to-amber-500/10',
    },
];

export default function FeaturedProjects() {
    return (
        <section className="bg-white py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                        Portfolio
                    </span>
                    <h2 className="mt-3 text-3xl md:text-4xl font-bold text-text-primary">
                        Featured Projects
                    </h2>
                    <p className="mt-4 text-text-secondary max-w-xl mx-auto">
                        A selection of recent work that showcases our expertise and attention to detail.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className="group rounded-xl border border-border overflow-hidden hover-lift"
                        >
                            {/* Image placeholder */}
                            <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                                <span className="text-sm font-medium text-text-secondary/60">
                                    {project.category}
                                </span>
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-semibold text-text-primary mb-2">
                                    {project.title}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 text-xs font-medium text-accent bg-accent/10 rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
