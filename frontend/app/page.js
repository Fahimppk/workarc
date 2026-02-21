import Hero from '@/components/Hero';
import ServicesPreview from '@/components/ServicesPreview';
import FeaturedProjects from '@/components/FeaturedProjects';
import ReviewsPreview from '@/components/ReviewsPreview';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <FeaturedProjects />
      <ReviewsPreview />

      {/* CTA Banner */}
      <section className="bg-accent py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-indigo-100 mb-8 max-w-xl mx-auto">
            Let&apos;s build something great together. Reach out and tell us about your idea.
          </p>
          <Link
            href="/contact"
            className="inline-flex px-8 py-3 text-sm font-medium text-accent bg-white rounded-lg hover:bg-gray-50 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
