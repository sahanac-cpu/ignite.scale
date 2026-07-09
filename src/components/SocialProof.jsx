import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const testimonials = [
  {
    name: 'Real Estate Developer',
    role: 'Dubai',
    company: 'Property Development',
    quote: 'Within 3 months, we went from 12 £/lead to 4 £/lead. Their creative strategy completely transformed our funnel.',
    result: '68% CPL reduction',
    image: '🏢',
  },
  {
    name: 'Cosmetic Clinic Director',
    role: 'Canary Wharf',
    company: 'Aesthetic Services',
    quote: 'They manage our full ad stack. ROAS jumped from 1.2x to 4.8x in the first 2 months. Best decision we made.',
    result: '4.8× ROAS',
    image: '💉',
  },
  {
    name: 'Business Setup Consultant',
    role: 'Downtown Dubai',
    company: 'B2B Consulting',
    quote: 'Not just ads—they built our entire funnel from scratch. Lead quality doubled, cost per lead down 55%.',
    result: '55% CPL reduction',
    image: '📊',
  },
]

function TestimonialCard({ testimonial, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const containerVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
        delay: index * 0.12,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      style={{
        borderRadius: 16,
        border: '1px solid rgba(201,169,110,0.12)',
        background: 'linear-gradient(135deg, rgba(201,169,110,0.04) 0%, rgba(201,169,110,0.02) 100%)',
        backdropFilter: 'blur(12px)',
        padding: 32,
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
      }}
      className="h-full"
    >
      {/* Quote */}
      <p style={{
        fontSize: 15,
        lineHeight: 1.8,
        color: 'rgba(240,210,180,0.75)',
        fontFamily: '"DM Sans", sans-serif',
        margin: 0,
        fontStyle: 'italic',
      }}>
        "{testimonial.quote}"
      </p>

      {/* Result badge */}
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        padding: '8px 14px',
        borderRadius: 8,
        background: 'rgba(201,169,110,0.08)',
        border: '1px solid rgba(201,169,110,0.15)',
        width: 'fit-content',
      }}>
        <span style={{
          fontSize: 11,
          fontWeight: 600,
          color: 'rgba(216,189,138,0.8)',
          fontFamily: '"DM Sans", sans-serif',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
        }}>
          {testimonial.result}
        </span>
      </div>

      {/* Author */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        marginTop: 'auto',
      }}>
        <div style={{
          fontSize: 28,
        }}>
          {testimonial.image}
        </div>
        <div>
          <div style={{
            fontSize: 14,
            fontWeight: 600,
            color: 'rgba(255,255,255,0.88)',
            fontFamily: '"DM Sans", sans-serif',
            margin: 0,
          }}>
            {testimonial.name}
          </div>
          <div style={{
            fontSize: 12,
            color: 'rgba(240,200,160,0.55)',
            fontFamily: '"DM Sans", sans-serif',
            margin: '4px 0 0 0',
          }}>
            {testimonial.role} • {testimonial.company}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function SocialProof() {
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-80px' })

  const statsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const statItemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  }

  return (
    <section
      id="social-proof"
      style={{
        padding: 'clamp(80px, 12vh, 140px) clamp(20px, 8vw, 120px)',
        background: 'linear-gradient(180deg, #03050F 0%, #0a0d18 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background gradient */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse 80% 40% at 50% 0%, rgba(201,169,110,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 28 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ marginBottom: 64, textAlign: 'center' }}
        >
          <div style={{
            fontSize: 11,
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            color: 'rgba(208,178,124,0.5)',
            fontFamily: '"DM Sans", sans-serif',
            marginBottom: 16,
          }}>
            Trusted by Ambitious UAE Businesses
          </div>
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 58px)',
            fontWeight: 700,
            fontFamily: '"DM Sans", sans-serif',
            color: 'rgba(255,255,255,0.88)',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            margin: 0,
            maxWidth: 700,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
            Real results from<br />
            <span style={{
              background: 'linear-gradient(135deg, #C9A96E 0%, #E0C79A 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>real clients</span>
          </h2>
        </motion.div>

        {/* Key metrics */}
        <motion.div
          variants={statsVariants}
          initial="hidden"
          animate={headInView ? 'visible' : 'hidden'}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 28,
            marginBottom: 64,
            padding: '48px 0',
            borderTop: '1px solid rgba(201,169,110,0.08)',
            borderBottom: '1px solid rgba(201,169,110,0.08)',
          }}
        >
          <motion.div variants={statItemVariants} style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: 'clamp(28px, 5vw, 48px)',
              fontWeight: 800,
              background: 'linear-gradient(135deg, #C9A96E, #E6D2AE)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: 1,
              marginBottom: 8,
            }}>
              50+
            </div>
            <div style={{
              fontSize: 12,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(240,200,160,0.55)',
              fontFamily: '"DM Sans", sans-serif',
            }}>
              Active Campaigns
            </div>
          </motion.div>

          <motion.div variants={statItemVariants} style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: 'clamp(28px, 5vw, 48px)',
              fontWeight: 800,
              background: 'linear-gradient(135deg, #C9A96E, #E6D2AE)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: 1,
              marginBottom: 8,
            }}>
              $2.4M+
            </div>
            <div style={{
              fontSize: 12,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(240,200,160,0.55)',
              fontFamily: '"DM Sans", sans-serif',
            }}>
              Ad Spend Managed
            </div>
          </motion.div>

          <motion.div variants={statItemVariants} style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: 'clamp(28px, 5vw, 48px)',
              fontWeight: 800,
              background: 'linear-gradient(135deg, #C9A96E, #E6D2AE)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: 1,
              marginBottom: 8,
            }}>
              3.2×
            </div>
            <div style={{
              fontSize: 12,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(240,200,160,0.55)',
              fontFamily: '"DM Sans", sans-serif',
            }}>
              Average ROAS
            </div>
          </motion.div>

          <motion.div variants={statItemVariants} style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: 'clamp(28px, 5vw, 48px)',
              fontWeight: 800,
              background: 'linear-gradient(135deg, #C9A96E, #E6D2AE)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: 1,
              marginBottom: 8,
            }}>
              62%
            </div>
            <div style={{
              fontSize: 12,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(240,200,160,0.55)',
              fontFamily: '"DM Sans", sans-serif',
            }}>
              Avg CPL Reduction
            </div>
          </motion.div>
        </motion.div>

        {/* Testimonials */}
        <div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 28,
          }}>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
