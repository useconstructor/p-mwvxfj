"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import {
  Menu,
  X,
  Search,
  Users,
  FileUp,
  RefreshCw,
  Tag,
  Clock,
  Shield,
  Zap,
  CheckCircle,
  Star,
  ChevronDown,
  ChevronUp,
  Phone,
  Mail,
  Building2,
  StickyNote,
  ArrowRight,
  Globe,
  Smartphone,
  Monitor,
  MessageSquare,
  Calendar,
  TrendingUp
} from 'lucide-react'

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeFaq, setActiveFaq] = useState<number | null>(null)
  const [formState, setFormState] = useState({ email: '' })
  const [formLoading, setFormLoading] = useState(false)
  const [formSuccess, setFormSuccess] = useState(false)
  const [formError, setFormError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormLoading(true)
    setFormError('')

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_CONSTRUCTOR_API}/v1/forms/${process.env.NEXT_PUBLIC_PROJECT_ID}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formState)
        }
      )

      if (response.ok) {
        setFormSuccess(true)
      } else {
        setFormError('Something went wrong. Please try again.')
      }
    } catch {
      setFormError('Network error. Please check your connection.')
    } finally {
      setFormLoading(false)
    }
  }

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' }
  ]

  const stats = [
    { value: '50K+', label: 'Contacts Managed' },
    { value: '3,200+', label: 'Happy Teams' },
    { value: '99.9%', label: 'Uptime' },
    { value: '<100ms', label: 'Sync Speed' }
  ]

  const features = [
    {
      icon: Search,
      title: 'Instant Search',
      description: 'Find any contact in milliseconds. Filter by name, company, phone, or custom tags.',
      size: 'large'
    },
    {
      icon: Users,
      title: 'Smart Contact Profiles',
      description: 'Store phone, email, company details, tags, notes, and follow up dates all in one place.',
      size: 'medium'
    },
    {
      icon: Clock,
      title: 'Activity Timeline',
      description: 'Track every interaction chronologically. Never miss a follow up again.',
      size: 'medium'
    },
    {
      icon: FileUp,
      title: 'CSV Import',
      description: 'Bulk import contacts with smart data preview and field mapping.',
      size: 'small'
    },
    {
      icon: RefreshCw,
      title: 'Real Time Sync',
      description: 'Changes sync instantly across all your devices.',
      size: 'small'
    },
    {
      icon: Tag,
      title: 'Custom Tags',
      description: 'Organize contacts your way with flexible tagging.',
      size: 'small'
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: 'Free',
      description: 'Perfect for getting started',
      features: [
        'Up to 100 contacts',
        'Basic search and filters',
        'Single user',
        'Web access only',
        'Community support'
      ],
      cta: 'Get Started Free',
      highlighted: false
    },
    {
      name: 'Professional',
      price: '$12',
      period: '/user/month',
      description: 'Best for growing teams',
      features: [
        'Unlimited contacts',
        'Advanced search and filters',
        'Up to 10 team members',
        'Web, mobile, and desktop sync',
        'CSV import and export',
        'Activity timeline',
        'Priority email support'
      ],
      cta: 'Start Free Trial',
      highlighted: true
    },
    {
      name: 'Business',
      price: '$29',
      period: '/user/month',
      description: 'For larger organizations',
      features: [
        'Everything in Professional',
        'Unlimited team members',
        'API access',
        'Custom integrations',
        'Advanced analytics',
        'Dedicated account manager',
        'Phone support'
      ],
      cta: 'Contact Sales',
      highlighted: false
    }
  ]

  const testimonials = [
    {
      name: 'Marketing Agency Owner',
      company: 'Creative Studio',
      rating: 5,
      text: 'Contact Hub replaced three different tools we were using. The instant search alone saves us hours every week.',
      initials: 'MA'
    },
    {
      name: 'Freelance Consultant',
      company: 'Independent',
      rating: 5,
      text: 'Finally a CRM that does not feel like enterprise software. Simple, fast, and exactly what I needed.',
      initials: 'FC'
    },
    {
      name: 'Real Estate Team Lead',
      company: 'Property Group',
      rating: 5,
      text: 'The activity timeline is a game changer. My team never misses a follow up now.',
      initials: 'RT'
    },
    {
      name: 'Startup Founder',
      company: 'Tech Startup',
      rating: 5,
      text: 'Imported 5,000 contacts in minutes. The CSV preview feature caught all the formatting issues before import.',
      initials: 'SF'
    }
  ]

  const faqs = [
    {
      question: 'How does the free tier work?',
      answer: 'The Starter plan is completely free and includes up to 100 contacts with basic search functionality. No credit card required. You can upgrade anytime as your needs grow.'
    },
    {
      question: 'Can I import my existing contacts?',
      answer: 'Yes! Contact Hub supports bulk CSV imports with a smart preview feature that lets you map fields and catch any formatting issues before importing. Most imports complete in under a minute.'
    },
    {
      question: 'How does real time sync work?',
      answer: 'Changes made on any device sync instantly to all your connected devices. Whether you are on web, mobile, or desktop, you will always have the latest contact information.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Absolutely. We use bank level encryption for all data in transit and at rest. Your contacts are backed up daily, and we maintain 99.9% uptime with redundant infrastructure.'
    },
    {
      question: 'Can multiple team members access the same contacts?',
      answer: 'Yes, Professional and Business plans support team collaboration. Invite team members, assign permissions, and share contact records seamlessly.'
    },
    {
      question: 'What if I need to cancel?',
      answer: 'You can cancel anytime from your account settings. Your data remains accessible for 30 days after cancellation, giving you time to export everything.'
    }
  ]

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#F8F9FA' }}>
      {/* Sticky Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b" style={{ borderColor: '#E5E7EB' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#0D9488' }}>
                <Users className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold text-lg" style={{ color: '#1F2937' }}>Contact Hub</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium transition-colors hover:opacity-80"
                  style={{ color: '#4B5563' }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-4">
              <Link href="#cta">
                <Button variant="ghost" style={{ color: '#1F2937' }}>
                  Log In
                </Button>
              </Link>
              <Link href="#cta">
                <Button style={{ backgroundColor: '#0D9488', color: 'white' }}>
                  Start Free
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" style={{ color: '#1F2937' }} />
              ) : (
                <Menu className="w-6 h-6" style={{ color: '#1F2937' }} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 py-4 space-y-3 bg-white border-t" style={{ borderColor: '#E5E7EB' }}>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block py-2 text-sm font-medium"
                style={{ color: '#4B5563' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-2">
              <Link href="#cta" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full">Log In</Button>
              </Link>
              <Link href="#cta" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full" style={{ backgroundColor: '#0D9488', color: 'white' }}>
                  Start Free
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Split Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <Badge className="mb-4" style={{ backgroundColor: '#0D948815', color: '#0D9488' }}>
                Trusted by 3,200+ teams
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ color: '#1F2937' }}>
                Your contacts, <br />
                <span style={{ color: '#0D9488' }}>organized</span> and <span style={{ color: '#0D9488' }}>accessible</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 leading-relaxed" style={{ color: '#4B5563' }}>
                A lightweight CRM that helps solopreneurs, freelancers, and small teams centralize, search, and manage client contacts without enterprise complexity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#cta">
                  <Button size="lg" className="w-full sm:w-auto" style={{ backgroundColor: '#0D9488', color: 'white' }}>
                    Start Free Today
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="#features">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    See How It Works
                  </Button>
                </Link>
              </div>
              <div className="mt-8 flex items-center gap-6">
                <div className="flex -space-x-2">
                  {['JD', 'SK', 'ML', 'AP'].map((initials, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-medium border-2 border-white"
                      style={{ backgroundColor: i % 2 === 0 ? '#0D9488' : '#1F2937', color: 'white' }}
                    >
                      {initials}
                    </div>
                  ))}
                </div>
                <div className="text-sm" style={{ color: '#4B5563' }}>
                  <span className="font-semibold" style={{ color: '#1F2937' }}>4.9/5</span> from 500+ reviews
                </div>
              </div>
            </div>

            {/* Dashboard Mockup */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-6 border" style={{ borderColor: '#E5E7EB' }}>
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#0D9488' }}>
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-semibold" style={{ color: '#1F2937' }}>Contacts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#0D9488' }} />
                    <span className="text-xs" style={{ color: '#4B5563' }}>Synced</span>
                  </div>
                </div>

                {/* Search Bar */}
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: '#4B5563' }} />
                  <div className="w-full pl-10 pr-4 py-2.5 rounded-lg border text-sm" style={{ backgroundColor: '#F8F9FA', borderColor: '#E5E7EB', color: '#4B5563' }}>
                    Search contacts...
                  </div>
                </div>

                {/* Contact List */}
                <div className="space-y-3">
                  {[
                    { initials: 'AC', name: 'Acme Corporation', email: 'contact@acme.co', tag: 'Client' },
                    { initials: 'TB', name: 'Tech Builders', email: 'hello@techbuilders.io', tag: 'Lead' },
                    { initials: 'GS', name: 'Growth Studio', email: 'team@growthstudio.com', tag: 'Partner' }
                  ].map((contact, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 rounded-lg border hover:shadow-sm transition-shadow cursor-pointer"
                      style={{ backgroundColor: i === 0 ? '#0D948810' : 'white', borderColor: i === 0 ? '#0D9488' : '#E5E7EB' }}
                    >
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium"
                        style={{ backgroundColor: '#0D9488', color: 'white' }}
                      >
                        {contact.initials}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm truncate" style={{ color: '#1F2937' }}>{contact.name}</p>
                        <p className="text-xs truncate" style={{ color: '#4B5563' }}>{contact.email}</p>
                      </div>
                      <Badge variant="secondary" className="text-xs" style={{ backgroundColor: '#F8F9FA', color: '#0D9488' }}>
                        {contact.tag}
                      </Badge>
                    </div>
                  ))}
                </div>

                {/* Stats Footer */}
                <div className="mt-4 pt-4 border-t flex items-center justify-between text-xs" style={{ borderColor: '#E5E7EB', color: '#4B5563' }}>
                  <span>247 contacts</span>
                  <span>Last updated: Just now</span>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3 border" style={{ borderColor: '#E5E7EB' }}>
                <div className="flex items-center gap-2">
                  <RefreshCw className="w-4 h-4" style={{ color: '#0D9488' }} />
                  <span className="text-xs font-medium" style={{ color: '#1F2937' }}>Real time sync</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3 border" style={{ borderColor: '#E5E7EB' }}>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" style={{ color: '#0D9488' }} />
                  <span className="text-xs font-medium" style={{ color: '#1F2937' }}>Import complete</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-12 border-y" style={{ backgroundColor: 'white', borderColor: '#E5E7EB' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl md:text-4xl font-bold mb-1" style={{ color: '#0D9488' }}>{stat.value}</p>
                <p className="text-sm" style={{ color: '#4B5563' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section id="features" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4" style={{ backgroundColor: '#0D948815', color: '#0D9488' }}>
              Features
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1F2937' }}>
              Everything you need, nothing you do not
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#4B5563' }}>
              Built specifically for small teams who want powerful contact management without the enterprise bloat.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Large Feature Card */}
            <Card className="md:col-span-2 p-8 border" style={{ backgroundColor: 'white', borderColor: '#E5E7EB' }}>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#0D948815' }}>
                    <Search className="w-6 h-6" style={{ color: '#0D9488' }} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: '#1F2937' }}>{features[0].title}</h3>
                  <p style={{ color: '#4B5563' }}>{features[0].description}</p>
                </div>
                <div className="flex-1 bg-gradient-to-br from-slate-100 to-slate-50 rounded-xl p-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 bg-white rounded-lg p-2 shadow-sm">
                      <Search className="w-4 h-4" style={{ color: '#0D9488' }} />
                      <span className="text-sm" style={{ color: '#1F2937' }}>acme</span>
                    </div>
                    <div className="text-xs px-2" style={{ color: '#4B5563' }}>3 results in 12ms</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Medium Feature Cards */}
            {features.slice(1, 3).map((feature, i) => (
              <Card key={i} className="p-6 border" style={{ backgroundColor: 'white', borderColor: '#E5E7EB' }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#0D948815' }}>
                  <feature.icon className="w-5 h-5" style={{ color: '#0D9488' }} />
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#1F2937' }}>{feature.title}</h3>
                <p className="text-sm" style={{ color: '#4B5563' }}>{feature.description}</p>
              </Card>
            ))}

            {/* Small Feature Cards */}
            {features.slice(3).map((feature, i) => (
              <Card key={i} className="p-6 border" style={{ backgroundColor: 'white', borderColor: '#E5E7EB' }}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#0D948815' }}>
                    <feature.icon className="w-5 h-5" style={{ color: '#0D9488' }} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1" style={{ color: '#1F2937' }}>{feature.title}</h3>
                    <p className="text-sm" style={{ color: '#4B5563' }}>{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Device Sync Visual */}
          <div className="mt-12 bg-white rounded-2xl p-8 border" style={{ borderColor: '#E5E7EB' }}>
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold mb-2" style={{ color: '#1F2937' }}>Works everywhere you do</h3>
              <p style={{ color: '#4B5563' }}>Access your contacts from any device, always in sync</p>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              {[
                { icon: Monitor, label: 'Desktop' },
                { icon: Globe, label: 'Web' },
                { icon: Smartphone, label: 'Mobile' }
              ].map((device, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ backgroundColor: '#F8F9FA' }}>
                    <device.icon className="w-8 h-8" style={{ color: '#0D9488' }} />
                  </div>
                  <span className="text-sm font-medium" style={{ color: '#1F2937' }}>{device.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section id="pricing" className="py-16 md:py-24" style={{ backgroundColor: 'white' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4" style={{ backgroundColor: '#0D948815', color: '#0D9488' }}>
              Pricing
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1F2937' }}>
              Simple, transparent pricing
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#4B5563' }}>
              Start free and upgrade as you grow. No hidden fees, no surprises.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, i) => (
              <Card
                key={i}
                className={`p-6 border-2 relative ${plan.highlighted ? 'shadow-xl' : ''}`}
                style={{
                  backgroundColor: 'white',
                  borderColor: plan.highlighted ? '#0D9488' : '#E5E7EB'
                }}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge style={{ backgroundColor: '#0D9488', color: 'white' }}>Most Popular</Badge>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold mb-2" style={{ color: '#1F2937' }}>{plan.name}</h3>
                  <p className="text-sm mb-4" style={{ color: '#4B5563' }}>{plan.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold" style={{ color: '#1F2937' }}>{plan.price}</span>
                    {plan.period && <span className="text-sm" style={{ color: '#4B5563' }}>{plan.period}</span>}
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#0D9488' }} />
                      <span className="text-sm" style={{ color: '#4B5563' }}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="#cta" className="block">
                  <Button
                    className="w-full"
                    variant={plan.highlighted ? 'default' : 'outline'}
                    style={plan.highlighted ? { backgroundColor: '#0D9488', color: 'white' } : {}}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section id="testimonials" className="py-16 md:py-24" style={{ backgroundColor: '#F8F9FA' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4" style={{ backgroundColor: '#0D948815', color: '#0D9488' }}>
              Testimonials
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1F2937' }}>
              Loved by teams everywhere
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#4B5563' }}>
              See why thousands of teams trust Contact Hub for their contact management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, i) => (
              <Card key={i} className="p-6 border" style={{ backgroundColor: 'white', borderColor: '#E5E7EB' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-medium"
                    style={{ backgroundColor: '#0D9488', color: 'white' }}
                  >
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-medium text-sm" style={{ color: '#1F2937' }}>{testimonial.name}</p>
                    <p className="text-xs" style={{ color: '#4B5563' }}>{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-current" style={{ color: '#FBBf24' }} />
                  ))}
                </div>
                <p className="text-sm" style={{ color: '#4B5563' }}>&ldquo;{testimonial.text}&rdquo;</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section id="faq" className="py-16 md:py-24" style={{ backgroundColor: 'white' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4" style={{ backgroundColor: '#0D948815', color: '#0D9488' }}>
              FAQ
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1F2937' }}>
              Frequently asked questions
            </h2>
            <p className="text-lg" style={{ color: '#4B5563' }}>
              Everything you need to know about Contact Hub.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border rounded-lg overflow-hidden" style={{ borderColor: '#E5E7EB' }}>
                <button
                  className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-slate-50 transition-colors"
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                >
                  <span className="font-medium" style={{ color: '#1F2937' }}>{faq.question}</span>
                  {activeFaq === i ? (
                    <ChevronUp className="w-5 h-5 flex-shrink-0" style={{ color: '#0D9488' }} />
                  ) : (
                    <ChevronDown className="w-5 h-5 flex-shrink-0" style={{ color: '#4B5563' }} />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeFaq === i ? 'max-h-48' : 'max-h-0'
                  }`}
                >
                  <p className="p-4 pt-0 text-sm" style={{ color: '#4B5563' }}>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-16 md:py-24" style={{ backgroundColor: '#0D9488' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Ready to organize your contacts?
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Join thousands of teams who trust Contact Hub. Start free, no credit card required.
          </p>

          {formSuccess ? (
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 inline-block">
              <CheckCircle className="w-12 h-12 text-white mx-auto mb-4" />
              <p className="text-lg font-medium text-white">Welcome to Contact Hub!</p>
              <p className="text-white/80 text-sm">Check your email to get started.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={formState.email}
                onChange={(e) => setFormState({ email: e.target.value })}
                required
                className="flex-1 bg-white border-0"
              />
              <Button
                type="submit"
                disabled={formLoading}
                className="whitespace-nowrap"
                style={{ backgroundColor: '#1F2937', color: 'white' }}
              >
                {formLoading ? 'Sending...' : 'Get Started Free'}
              </Button>
            </form>
          )}
          {formError && (
            <p className="text-red-200 text-sm mt-2">{formError}</p>
          )}
          <p className="text-sm text-white/70 mt-4">
            Free forever for up to 100 contacts. No credit card required.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t" style={{ backgroundColor: 'white', borderColor: '#E5E7EB' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#0D9488' }}>
                  <Users className="w-5 h-5 text-white" />
                </div>
                <span className="font-semibold text-lg" style={{ color: '#1F2937' }}>Contact Hub</span>
              </Link>
              <p className="text-sm mb-4" style={{ color: '#4B5563' }}>
                The lightweight CRM for small teams who want to stay organized without the complexity.
              </p>
              <div className="flex gap-4">
                <a href="mailto:hello@contacthub.app" className="p-2 rounded-lg hover:bg-slate-100 transition-colors">
                  <Mail className="w-5 h-5" style={{ color: '#4B5563' }} />
                </a>
                <a href="#features" className="p-2 rounded-lg hover:bg-slate-100 transition-colors">
                  <MessageSquare className="w-5 h-5" style={{ color: '#4B5563' }} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4" style={{ color: '#1F2937' }}>Product</h4>
              <ul className="space-y-2">
                <li><Link href="#features" className="text-sm hover:underline" style={{ color: '#4B5563' }}>Features</Link></li>
                <li><Link href="#pricing" className="text-sm hover:underline" style={{ color: '#4B5563' }}>Pricing</Link></li>
                <li><Link href="#testimonials" className="text-sm hover:underline" style={{ color: '#4B5563' }}>Testimonials</Link></li>
                <li><Link href="#faq" className="text-sm hover:underline" style={{ color: '#4B5563' }}>FAQ</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4" style={{ color: '#1F2937' }}>Resources</h4>
              <ul className="space-y-2">
                <li><a href="mailto:support@contacthub.app" className="text-sm hover:underline" style={{ color: '#4B5563' }}>Help Center</a></li>
                <li><a href="mailto:support@contacthub.app" className="text-sm hover:underline" style={{ color: '#4B5563' }}>API Documentation</a></li>
                <li><a href="mailto:support@contacthub.app" className="text-sm hover:underline" style={{ color: '#4B5563' }}>Import Guide</a></li>
                <li><a href="mailto:support@contacthub.app" className="text-sm hover:underline" style={{ color: '#4B5563' }}>Contact Support</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4" style={{ color: '#1F2937' }}>Company</h4>
              <ul className="space-y-2">
                <li><a href="mailto:hello@contacthub.app" className="text-sm hover:underline" style={{ color: '#4B5563' }}>About</a></li>
                <li><a href="mailto:hello@contacthub.app" className="text-sm hover:underline" style={{ color: '#4B5563' }}>Blog</a></li>
                <li><a href="mailto:careers@contacthub.app" className="text-sm hover:underline" style={{ color: '#4B5563' }}>Careers</a></li>
                <li><a href="mailto:hello@contacthub.app" className="text-sm hover:underline" style={{ color: '#4B5563' }}>Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderColor: '#E5E7EB' }}>
            <p className="text-sm" style={{ color: '#4B5563' }}>
              © {new Date().getFullYear()} Contact Hub. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" style={{ color: '#0D9488' }} />
              <span className="text-sm" style={{ color: '#4B5563' }}>SOC 2 Compliant • GDPR Ready</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}