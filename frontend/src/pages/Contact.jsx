import ContactHero from '../components/ContactHero'
import ContactMap from '../components/ContactMap'
import ContactQuote from '../components/ContactQuote'

// Contact: "Contact Us" page — title banner, embedded location map, then a
// photo + compact "Get a Quote" form strip.
// Takes no props. Returns the page markup.
function Contact() {
  return (
    <main>
      {/* Full-bleed title banner — carries the page's <h1> */}
      <ContactHero />

      {/* Embedded map centered on the business address */}
      <ContactMap />

      {/* Photo + disclaimer + compact quote form */}
      <ContactQuote />
    </main>
  )
}

export default Contact
