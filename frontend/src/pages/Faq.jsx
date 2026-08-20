import FaqHero from '../components/FaqHero'
import FaqList from '../components/FaqList'

// Faq: "FAQ" page — title banner, then a single-open accordion of the 15
// stock question/answer pairs.
// Takes no props. Returns the page markup.
function Faq() {
  return (
    <main>
      {/* Full-bleed title banner — carries the page's <h1> */}
      <FaqHero />

      {/* Accordion of frequently asked questions */}
      <FaqList />
    </main>
  )
}

export default Faq
