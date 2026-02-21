export const metadata = {
    title: 'Reviews — WebArc Studio',
    description: 'Read what our clients say about working with WebArc Studio.',
};

function StarRating({ rating }) {
    return (
        <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
                <svg
                    key={star}
                    className={`w-5 h-5 ${star <= rating ? 'text-amber-400' : 'text-gray-200'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
}

const reviews = [
    {
        name: 'Sarah Johnson',
        role: 'CEO, BrightPath Inc.',
        rating: 5,
        text: 'WebArc Studio delivered a stunning website that exceeded our expectations. Their attention to detail and communication throughout the project was outstanding. We saw a 40% increase in leads within the first month.',
    },
    {
        name: 'Michael Chen',
        role: 'Founder, TechVista',
        rating: 5,
        text: 'The web application they built for us is fast, reliable, and beautifully designed. The team understood our vision from day one and turned it into reality. Truly world-class development.',
    },
    {
        name: 'Emily Rodriguez',
        role: 'Marketing Director, Bloom Co.',
        rating: 5,
        text: 'Working with WebArc Studio was an absolute pleasure. They redesigned our entire online presence and the results speak for themselves — our bounce rate dropped by 35% and conversions doubled.',
    },
    {
        name: 'David Okafor',
        role: 'CTO, FinEdge Solutions',
        rating: 4,
        text: 'We needed a complex dashboard with real-time analytics, and WebArc Studio delivered on every front. The codebase is clean, well-documented, and easy to maintain. Highly recommend their technical expertise.',
    },
    {
        name: 'Lisa Patel',
        role: 'Owner, Crafted & Co.',
        rating: 5,
        text: 'Our e-commerce store looks and feels premium thanks to WebArc Studio. They integrated Stripe payments seamlessly, and the user experience is incredibly smooth. Sales have been climbing ever since launch.',
    },
    {
        name: 'James Wilson',
        role: 'Product Manager, HealthSync',
        rating: 5,
        text: 'The patient portal they developed for us is intuitive, secure, and exactly what we needed. Their team was responsive, professional, and always went the extra mile to get things right.',
    },
];

export default function ReviewsPage() {
    return (
        <>
            {/* Header */}
            <section className="bg-surface py-24">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                        Testimonials
                    </span>
                    <h1 className="mt-3 text-4xl md:text-5xl font-bold text-text-primary">
                        Client Reviews
                    </h1>
                    <p className="mt-6 text-text-secondary max-w-2xl mx-auto leading-relaxed">
                        Don&apos;t just take our word for it — hear what our clients have to say about
                        working with WebArc Studio.
                    </p>
                </div>
            </section>

            {/* Reviews Grid */}
            <section className="bg-white py-24">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((review) => (
                        <div
                            key={review.name}
                            className="bg-white rounded-xl p-8 border border-border hover-lift"
                        >
                            <StarRating rating={review.rating} />
                            <p className="mt-5 text-sm text-text-secondary leading-relaxed">
                                &ldquo;{review.text}&rdquo;
                            </p>
                            <div className="mt-6 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-semibold text-sm">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-text-primary">{review.name}</p>
                                    <p className="text-xs text-text-secondary">{review.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
