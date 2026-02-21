import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-white">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.06),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.04),transparent_50%)]" />

            <div className="relative max-w-7xl mx-auto px-6 py-28 md:py-40 text-center">
                <span className="inline-block px-4 py-1.5 text-xs font-semibold text-accent bg-accent/10 rounded-full mb-6 animate-fade-in-up">
                    Web Development Agency
                </span>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-text-primary animate-fade-in-up-delay-1">
                    We Build Modern &<br />
                    <span className="text-accent">Scalable</span> Web Solutions
                </h1>

                <p className="max-w-2xl mx-auto mt-6 text-lg text-text-secondary leading-relaxed animate-fade-in-up-delay-2">
                    From sleek landing pages to powerful web applications, we help brands
                    create digital experiences that engage, convert, and grow.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 animate-fade-in-up-delay-3">
                    <Link
                        href="/services"
                        className="px-8 py-3 text-sm font-medium text-white bg-accent rounded-lg hover:bg-accent-dark transition-colors shadow-md shadow-accent/20"
                    >
                        View Services
                    </Link>
                    <Link
                        href="/contact"
                        className="px-8 py-3 text-sm font-medium text-text-primary bg-white border border-border rounded-lg hover:border-accent hover:text-accent transition-colors"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </section>
    );
}
