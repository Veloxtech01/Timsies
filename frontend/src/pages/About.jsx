import AboutHero from '../components/AboutHero'
import CeoProfile from '../components/CeoProfile'
import MissionVisionValue from '../components/MissionVisionValue'
import AboutServices from '../components/AboutServices'

// About: "About Us" page — title banner, CEO profile, vision/mission/value
// cards, then the services recap band.
// Takes no props. Returns the page markup.
function About() {
  return (
    <main>
      {/* Full-bleed title banner — carries the page's <h1> */}
      <AboutHero />

      {/* CEO bio + company mission copy */}
      <CeoProfile />

      {/* Vision / Mission / Value cards */}
      <MissionVisionValue />

      {/* Services recap + CTA */}
      <AboutServices />
    </main>
  )
}

export default About
