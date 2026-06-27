import type { FaqEntry } from "@/components/ui/FaqAccordion";

/**
 * FAQ content for the Plus page "Quick answers." section.
 *
 * Questions are kept verbatim from the Figma export so the list matches the
 * design exactly. Answers are placeholder copy (the export reused the capture
 * answer for every row). Both desktop and mobile frames render all six.
 */
export const PLUS_FAQS: FaqEntry[] = [
  {
    question: "What happens after the free trial?",
    answer:
      "After 7 days, Plus renews at $79/year unless you cancel. You keep everything you set up — nothing is deleted if you decide not to continue.",
  },
  {
    question: "Do I lose my data if I cancel?",
    answer:
      "No. Your history stays on your device. Cancelling only turns off Plus features like long-range insights and cloud sync — your data is never erased.",
  },
  {
    question: "Is Plus available on all platforms?",
    answer:
      "Yes. Plus works across iOS, Android, and desktop, and your subscription follows your account on every device.",
  },
  {
    question: "Does Plus work with both Capture and Syni?",
    answer:
      "Yes. Plus unlocks deeper context for both — a full year of history for Syni and richer pattern reading across Capture.",
  },
  {
    question: "Is my wearable data private?",
    answer:
      "Always. Wearable data is encrypted and used only to build your personal picture. It's never sold or shared.",
  },
  {
    question: "What if my device isn't supported yet?",
    answer:
      "Tell us what you use and we'll prioritise it. In the meantime, Capture still works with manual input and the Company Keyboard.",
  },
];
