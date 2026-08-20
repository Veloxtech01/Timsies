import HeroSlider from '../components/HeroSlider'
import ServiceStrip from '../components/ServiceStrip'
import WhyChooseUs from '../components/WhyChooseUs'
import MeetYourNeeds from '../components/MeetYourNeeds'
import Testimonials from '../components/Testimonials'
import RequestQuote from '../components/RequestQuote'

// Home: homepage — hero slider at the top, further sections come in a later pass.
// Takes no props. Returns the page markup.
function Home() {
  return (
    <main>
      {/* Single stable page heading — visually hidden because the hero's own
          per-slide titles carry the visible message. */}
      <h1 className="sr-only">Timsies Entirety — decluttering and organizing services</h1>

      {/* Full-bleed rotating hero */}
      <HeroSlider />

      {/* Service icon strip — sits flush under the hero, no gap */}
      <ServiceStrip />

      {/* Value proposition cards + worker photo */}
      <WhyChooseUs />

      {/* Full-bleed intro banner with organizing photo + CTA */}
      <MeetYourNeeds />

      {/* Client testimonial cards */}
      <Testimonials />

      {/* Quote request form */}
      <RequestQuote />
    </main>
  )
}

export default Home
