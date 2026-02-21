function StarRating({ rating }) {
    return (
        <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
                <svg
                    key={star}
                    className={`w-4 h-4 ${star <= rating ? 'text-amber-400' : 'text-gray-200'}`}
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
        role: 'CEO, BrightPath',
        rating: 5,
        text: 'WebArc Studio delivered a stunning website that exceeded our expectations. Professional team and flawless execution.',
    },
    {
        name: 'Michael Chen',
        role: 'Founder, TechVista',
        rating: 5,
        text: 'The web application they built for us is fast, reliable, and beautifully designed. Highly recommended!',
    },
];

export default function ReviewsPreview() {
    return (
        <section className="bg-surface py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                        Testimonials
                    </span>
                    <h2 className="mt-3 text-3xl md:text-4xl font-bold text-text-primary">
                        What Our Clients Say
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {reviews.map((review) => (
                        <div
                            key={review.name}
                            className="bg-white rounded-xl p-8 border border-border hover-lift"
                        >
                            <StarRating rating={review.rating} />
                            <p className="mt-4 text-sm text-text-secondary leading-relaxed italic">
                                &ldquo;{review.text}&rdquo;
                            </p>
                            <div className="mt-6">
                                <p className="text-sm font-semibold text-text-primary">{review.name}</p>
                                <p className="text-xs text-text-secondary">{review.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
