import Link from 'next/link';

const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/reviews', label: 'Reviews' },
    { href: '/contact', label: 'Contact' },
];

const services = [
    'Website Development',
    'Web App Development',
    'UI/UX Design',
    'E-Commerce Solutions',
    'API Development',
    'Maintenance & Support',
];

export default function Footer() {
    return (
        <footer className="bg-text-primary text-gray-300">
            <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Brand */}
                <div>
                    <h3 className="text-xl font-bold text-white mb-4">
                        Web<span className="text-accent-light">Arc</span> Studio
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-400">
                        We craft modern, scalable web solutions that help businesses grow and
                        stand out in the digital world.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                        Quick Links
                    </h4>
                    <ul className="space-y-2">
                        {quickLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="text-sm text-gray-400 hover:text-accent-light transition-colors"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                        Services
                    </h4>
                    <ul className="space-y-2">
                        {services.map((s) => (
                            <li key={s} className="text-sm text-gray-400">
                                {s}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-gray-700">
                <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-gray-500">
                        &copy; {new Date().getFullYear()} WebArc Studio. All rights reserved.
                    </p>
                    <div className="flex items-center gap-5">
                        {['Twitter', 'LinkedIn', 'GitHub'].map((s) => (
                            <a
                                key={s}
                                href="#"
                                className="text-xs text-gray-500 hover:text-accent-light transition-colors"
                            >
                                {s}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
