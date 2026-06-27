import type { FaqEntry } from "@/components/ui/FaqAccordion";

/**
 * FAQ content for the Capture home page "people usually ask" section.
 *
 * Questions are kept verbatim from the Figma export (including the duplicated
 * entries and the "QIs" typo) so the list matches the design exactly. Answers
 * are placeholder copy. Desktop renders all 8; mobile renders the first 7,
 * matching the two frames.
 */
export const CAPTURE_FAQS: FaqEntry[] = [
  {
    question: "How is Capture different from Oura or WHOOP?",
    answer:
      "Oura and WHOOP focus on physical recovery biosignals like HRV, sleep, and strain. Capture adds the behavioral layer those devices can't see — turning raw signals into guidance you can actually act on.",
  },
  {
    question: "What is Capture by Company?",
    answer:
      "Capture is a companion that reads your biosignals and behavioral patterns to show how your focus, stress, and energy shift over time — and what they mean for you.",
  },
  {
    question: "Does Capture read what I type?",
    answer:
      "No. The Company Keyboard learns from your rhythm and pace, never the content of what you write. Your words stay yours.",
  },
  {
    question: "Is there a desktop version?",
    answer:
      "Yes. Everything you see on your phone lives on a larger canvas on your computer, kept in sync automatically.",
  },
  {
    question: "QIs Capture a mental health app?",
    answer:
      "Capture isn't a medical or therapy tool. It's a self-awareness companion that helps you understand your patterns — not a substitute for professional care.",
  },
  {
    question: "Who is Capture built for?",
    answer:
      "Anyone who wants to understand the link between how they live and how they feel — from athletes tracking recovery to people managing focus and stress.",
  },
  {
    question: "QIs Capture a mental health app?",
    answer:
      "Capture isn't a medical or therapy tool. It's a self-awareness companion that helps you understand your patterns — not a substitute for professional care.",
  },
  {
    question: "Who is Capture built for?",
    answer:
      "Anyone who wants to understand the link between how they live and how they feel — from athletes tracking recovery to people managing focus and stress.",
  },
];
