// Vitest setup: adds jest-dom's DOM matchers (toBeInTheDocument, etc.) to every test file.
import '@testing-library/jest-dom'

// jsdom has no IntersectionObserver; stub it so components using Motion's
// `whileInView` (e.g. WhyChooseUs) don't throw during render in tests.
class IntersectionObserverStub {
  observe() {}
  unobserve() {}
  disconnect() {}
}
global.IntersectionObserver = IntersectionObserverStub
