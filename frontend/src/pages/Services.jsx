import ServicesHero from '../components/ServicesHero'
import ServicesGrid from '../components/ServicesGrid'
import RequestQuote from '../components/RequestQuote'
import Newsletter from '../components/Newsletter'

// Services: "Our Services" page — title banner, 3x3 service photo grid,
// the "Request a Quote" form (reused from the homepage), then a newsletter
// subscribe band.
// Takes no props. Returns the page markup.
function Services() {
  return (
    <main>
      {/* Full-bleed title banner — carries the page's <h1> */}
      <ServicesHero />

      {/* 3x3 grid of service category photo cards */}
      <ServicesGrid />

      {/* Quote request form — same component as the homepage */}
      <RequestQuote />

      {/* Newsletter subscribe band */}
      <Newsletter />
    </main>
  )
}

export default Services
