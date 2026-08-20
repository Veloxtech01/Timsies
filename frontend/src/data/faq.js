/**
 * Content for the "FAQ" page accordion.
 *
 * Static, hand-authored data (no API yet), one entry per question.
 *
 * Fields:
 * - id:       stable key for React list rendering and the accordion's
 *             aria-controls/aria-labelledby id pairing
 * - question: the question text shown as the accordion trigger
 * - answer:   the answer text revealed when the item is expanded
 *
 * @type {Array<{id: number, question: string, answer: string}>}
 */
export const faqs = [
  {
    id: 1,
    question: "What services does Timsies Entirety provide?",
    answer:
      "Timsies Entirety provides professional cleaning, organizing, decluttering, and space transformation services for homes, offices, and businesses. Our services can be customized depending on the size, condition, and specific needs of your space.",
  },
  {
    id: 2,
    question: "What is the difference between cleaning and organizing?",
    answer:
      "Cleaning focuses on removing dirt, dust, stains, and unwanted build-up. Organizing focuses on creating order by sorting, decluttering, categorizing, and arranging items in a practical way. At Timsies Entirety, we can combine both services to give your space a complete transformation.",
  },
  {
    id: 3,
    question: "Do you offer both residential and commercial services?",
    answer:
      "Yes. We work with individuals, families, offices, businesses, and commercial spaces, providing solutions designed around each client's requirements.",
  },
  {
    id: 4,
    question: "Can I book cleaning and organizing together?",
    answer:
      "Absolutely. In fact, combining both services can provide a more complete transformation. We can organize your space and then thoroughly clean it, leaving it functional, fresh, and aesthetically pleasing.",
  },
  {
    id: 5,
    question: "Do I need to be present while the service is being provided?",
    answer:
      "Not necessarily. Depending on the service and arrangements made beforehand, you may choose to be present or provide our team with appropriate access to the space.",
  },
  {
    id: 6,
    question: "Do you provide cleaning supplies and equipment?",
    answer:
      "Our service arrangements can include the necessary cleaning supplies and equipment depending on the type of service booked. We can also discuss any specific products or requirements you may have before the appointment.",
  },
  {
    id: 7,
    question: "How do you determine the cost of a service?",
    answer:
      "Pricing depends on factors such as the size of the space, type of service, condition of the space, amount of clutter, number of areas involved, and level of cleaning required. We assess your requirements before providing a quote.",
  },
  {
    id: 8,
    question: "Do you offer one-time cleaning services?",
    answer:
      "Yes. You can book Timsies Entirety for a one-time cleaning or organization project, whether you're preparing for an event, moving into a new property, decluttering, or simply giving your space a fresh start.",
  },
  {
    id: 9,
    question: "Do you offer recurring cleaning services?",
    answer:
      "Yes. We can develop recurring service arrangements for clients who want their homes, offices, or commercial spaces consistently clean and organized.",
  },
  {
    id: 10,
    question: "Can you help me declutter my home or office?",
    answer:
      "Yes. Our decluttering service helps you sort through your belongings, identify what is useful or necessary, and create a more functional arrangement for the items you choose to keep.",
  },
  {
    id: 11,
    question: "Can you organize specific areas instead of my entire property?",
    answer:
      "Yes. You don't have to organize your entire space at once. We can focus on specific areas such as wardrobes, closets, kitchens, pantries, bedrooms, offices, storage areas, or living spaces.",
  },
  {
    id: 12,
    question: "Do you offer move-in and move-out cleaning?",
    answer:
      "Yes. Our move-in and move-out cleaning services help prepare a property for new occupants or leave a property clean and presentable when you're moving out.",
  },
  {
    id: 13,
    question: "How long does a cleaning or organization session take?",
    answer:
      "The duration varies depending on the size and condition of the space and the services required. After understanding your requirements, we can provide a more accurate estimate of the expected time frame.",
  },
  {
    id: 14,
    question: "What happens during the first consultation?",
    answer:
      "We discuss your needs, understand the challenges you're experiencing with the space, assess the work required, and recommend the most suitable cleaning and organization solution.",
  },
  {
    id: 15,
    question: "How do I book a service?",
    answer:
      "Simply contact Timsies Entirety through our website, phone, email, or other available communication channels.",
  },
];

export default faqs;
