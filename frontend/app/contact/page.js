'use client';

import { useState } from 'react';

export default function ContactPage() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState('idle'); // idle | loading | success | error
    const [serverMsg, setServerMsg] = useState('');

    function validate() {
        const errs = {};
        if (!form.name.trim()) errs.name = 'Name is required';
        if (!form.email.trim()) {
            errs.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            errs.email = 'Please enter a valid email';
        }
        if (!form.message.trim()) errs.message = 'Message is required';
        return errs;
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const errs = validate();
        setErrors(errs);

        if (Object.keys(errs).length > 0) return;

        setStatus('loading');
        try {
            const res = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            const data = await res.json();
            if (data.success) {
                setStatus('success');
                setServerMsg(data.message);
                setForm({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
                setServerMsg(data.error || 'Something went wrong.');
            }
        } catch {
            setStatus('error');
            setServerMsg('Could not connect to server. Please try again later.');
        }
    }

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: '' });
        }
    }

    return (
        <>
            {/* Header */}
            <section className="bg-surface py-24">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                        Contact
                    </span>
                    <h1 className="mt-3 text-4xl md:text-5xl font-bold text-text-primary">
                        Get in Touch
                    </h1>
                    <p className="mt-6 text-text-secondary max-w-2xl mx-auto leading-relaxed">
                        Have a project in mind? Fill out the form below and we&apos;ll get back to you
                        within 24 hours.
                    </p>
                </div>
            </section>

            {/* Form */}
            <section className="bg-white py-24">
                <div className="max-w-2xl mx-auto px-6">
                    {status === 'success' ? (
                        <div className="text-center bg-emerald-50 border border-emerald-200 rounded-xl p-12">
                            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-emerald-100">
                                <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-emerald-800 mb-2">Message Sent!</h3>
                            <p className="text-sm text-emerald-700">{serverMsg}</p>
                            <button
                                onClick={() => setStatus('idle')}
                                className="mt-6 px-6 py-2 text-sm font-medium text-emerald-700 border border-emerald-300 rounded-lg hover:bg-emerald-50 transition-colors"
                            >
                                Send Another Message
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                            {/* Name */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Your full name"
                                    className={`w-full px-4 py-3 text-sm rounded-lg border bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent ${errors.name ? 'border-red-400' : 'border-border'
                                        }`}
                                />
                                {errors.name && (
                                    <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>
                                )}
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="you@example.com"
                                    className={`w-full px-4 py-3 text-sm rounded-lg border bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent ${errors.email ? 'border-red-400' : 'border-border'
                                        }`}
                                />
                                {errors.email && (
                                    <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>
                                )}
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Tell us about your project..."
                                    className={`w-full px-4 py-3 text-sm rounded-lg border bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent resize-none ${errors.message ? 'border-red-400' : 'border-border'
                                        }`}
                                />
                                {errors.message && (
                                    <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>
                                )}
                            </div>

                            {/* Error message */}
                            {status === 'error' && (
                                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                                    <p className="text-sm text-red-600">{serverMsg}</p>
                                </div>
                            )}

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full px-6 py-3 text-sm font-medium text-white bg-accent rounded-lg hover:bg-accent-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                {status === 'loading' ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    )}
                </div>
            </section>

            {/* Info */}
            <section className="bg-surface py-16">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div>
                        <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-lg bg-accent/10 text-accent">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                        </div>
                        <h4 className="text-sm font-semibold text-text-primary mb-1">Email</h4>
                        <p className="text-sm text-text-secondary">hello@webarcstudio.com</p>
                    </div>

                    <div>
                        <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-lg bg-accent/10 text-accent">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                        </div>
                        <h4 className="text-sm font-semibold text-text-primary mb-1">Phone</h4>
                        <p className="text-sm text-text-secondary">+1 (555) 123-4567</p>
                    </div>

                    <div>
                        <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-lg bg-accent/10 text-accent">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                        </div>
                        <h4 className="text-sm font-semibold text-text-primary mb-1">Location</h4>
                        <p className="text-sm text-text-secondary">San Francisco, CA</p>
                    </div>
                </div>
            </section>
        </>
    );
}
