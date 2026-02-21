export const metadata = {
    title: 'About — WebArc Studio',
    description: 'Learn about WebArc Studio, our mission, vision, and why businesses choose us for web development.',
};

const stats = [
    { value: '120+', label: 'Projects Delivered' },
    { value: '80+', label: 'Happy Clients' },
    { value: '5+', label: 'Years Experience' },
    { value: '15+', label: 'Team Members' },
];

const reasons = [
    {
        title: 'Expert Team',
        description: 'Our developers and designers bring years of industry experience to every project.',
    },
    {
        title: 'Modern Tech Stack',
        description: 'We use cutting-edge technologies like React, Next.js, and Node.js for optimal results.',
    },
    {
        title: 'Client-Centric Approach',
        description: 'We prioritize your goals and collaborate closely to deliver exactly what you need.',
    },
    {
        title: 'On-Time Delivery',
        description: 'We follow structured workflows and agile methodologies to meet every deadline.',
    },
];

export default function AboutPage() {
    return (
        <>
            {/* Header */}
            <section className="bg-surface py-24">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                        About Us
                    </span>
                    <h1 className="mt-3 text-4xl md:text-5xl font-bold text-text-primary">
                        Who We Are
                    </h1>
                    <p className="mt-6 text-text-secondary max-w-2xl mx-auto leading-relaxed">
                        WebArc Studio is a modern web development agency dedicated to crafting
                        digital experiences that empower businesses. We combine clean design
                        with robust engineering to deliver solutions that scale.
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="bg-white py-24">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="bg-surface rounded-xl p-10 border border-border">
                        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-accent/10 text-accent mb-6">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-text-primary mb-3">Our Mission</h3>
                        <p className="text-text-secondary leading-relaxed">
                            To empower businesses with high-quality, scalable web solutions that
                            drive growth and create meaningful digital experiences for their users.
                        </p>
                    </div>

                    <div className="bg-surface rounded-xl p-10 border border-border">
                        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-accent/10 text-accent mb-6">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-text-primary mb-3">Our Vision</h3>
                        <p className="text-text-secondary leading-relaxed">
                            To become a trusted global partner for innovative web solutions,
                            setting the standard for quality, creativity, and technical excellence.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="bg-surface py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                            Why Us
                        </span>
                        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-text-primary">
                            Why Choose WebArc Studio
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {reasons.map((reason) => (
                            <div
                                key={reason.title}
                                className="bg-white rounded-xl p-8 border border-border hover-lift text-center"
                            >
                                <h3 className="text-lg font-semibold text-text-primary mb-2">
                                    {reason.title}
                                </h3>
                                <p className="text-sm text-text-secondary leading-relaxed">
                                    {reason.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat) => (
                        <div key={stat.label} className="text-center">
                            <p className="text-4xl md:text-5xl font-bold text-accent">{stat.value}</p>
                            <p className="mt-2 text-sm text-text-secondary">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
