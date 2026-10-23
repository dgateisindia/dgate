/* =========================================================
   D-GATE REUSABLE CTA SYSTEM & MICROCOPY SPECIFICATION
   Brand Guideline 16: Global Footer & Reusable CTA System
========================================================= */

/**
 * 1. Approved Reusable CTA Actions
 */
export const REUSABLE_CTAS = {
  START_CONVERSATION: "Start a Conversation",
  EXPLORE_WORK: "Explore Our Work",
  BRING_CHALLENGE: "Bring Us the Challenge",
  BUILD_REMEMBERING: "Build Something Worth Remembering",
  TURN_MOMENTUM: "Turn Marketing Into Momentum",
  SEE_HOW_WE_THINK: "See How We Think",
  LETS_BUILD_NEXT: "Let’s Build What’s Next",
};

/**
 * 2. Preferred Microcopy Rules
 * - Use short headlines with one clear idea.
 * - Avoid repeating "digital transformation" in every section.
 * - Prefer verbs that imply change: clarify, shape, create, connect, move, build, grow.
 * - Avoid filler words: innovative, cutting-edge, best-in-class, 360-degree, end-to-end, one-stop solution.
 * - Do not mention platforms unless they add confidence to a specific solution.
 * - Use business outcomes carefully; never imply guaranteed performance.
 */
export const MICROCOPY_RULES = [
  "Use short headlines with one clear idea.",
  "Avoid repeating 'digital transformation' in every section.",
  "Prefer verbs that imply change: clarify, shape, create, connect, move, build, grow.",
  "Avoid filler words: innovative, cutting-edge, best-in-class, 360-degree, end-to-end, one-stop solution.",
  "Do not mention platforms unless they add confidence to a specific solution.",
  "Use business outcomes carefully; never imply guaranteed performance.",
];

/**
 * 3. Pre-configured Reusable CTA Presets
 */
export const CTA_PRESETS = {
  conversation: {
    id: "conversation",
    eyebrow: "READY TO GROW",
    title: "What should your business become next?",
    description:
      "If the answer needs sharper strategy, stronger creativity or a more connected path to growth, let's talk.",
    buttonText: REUSABLE_CTAS.START_CONVERSATION,
    to: "/contact",
    points: [
      "Strategic Alignment",
      "Disciplined Execution",
      "Connected Growth",
    ],
  },
  work: {
    id: "work",
    eyebrow: "SELECTED WORK",
    title: "See ideas shape into market impact.",
    description:
      "Explore how strategy, brand identity and digital systems connect to move ambitious businesses forward.",
    buttonText: REUSABLE_CTAS.EXPLORE_WORK,
    to: "/portfolio",
    points: [
      "Brand Visual Systems",
      "Digital Experiences",
      "Campaign Creative",
    ],
  },
  challenge: {
    id: "challenge",
    eyebrow: "HAVE A COMPLEX BRIEF?",
    title: "Bring us your toughest market challenge.",
    description:
      "We clarify the problem, shape the solution and build momentum where others stall.",
    buttonText: REUSABLE_CTAS.BRING_CHALLENGE,
    to: "/contact",
    points: [
      "Clear Positioning",
      "Creative Problem-Solving",
      "Measurable Impact",
    ],
  },
  remembering: {
    id: "remembering",
    eyebrow: "BRAND & EXPERIENCE",
    title: "Build something people notice and remember.",
    description:
      "Turn your vision into intentional brand identity systems and connected digital experiences.",
    buttonText: REUSABLE_CTAS.BUILD_REMEMBERING,
    to: "/contact",
    points: [
      "Brand Strategy & Identity",
      "Experience Design",
      "Creative Direction",
    ],
  },
  momentum: {
    id: "momentum",
    eyebrow: "GROWTH & PERFORMANCE",
    title: "Turn marketing into sustained business momentum.",
    description:
      "Connect campaign creative, search and analytics into one disciplined growth engine.",
    buttonText: REUSABLE_CTAS.TURN_MOMENTUM,
    to: "/contact",
    points: [
      "Audience Targeting",
      "Creative Optimization",
      "Analytics & Insights",
    ],
  },
  thinking: {
    id: "thinking",
    eyebrow: "OUR PERSPECTIVE",
    title: "Clarify your positioning before you build.",
    description:
      "Discover our connected approach across strategy, creative, digital and growth.",
    buttonText: REUSABLE_CTAS.SEE_HOW_WE_THINK,
    to: "/services",
    points: [
      "Market Insight",
      "Positioning Strategy",
      "Unified Systems",
    ],
  },
  buildNext: {
    id: "build-next",
    eyebrow: "LOOKING FORWARD",
    title: "Let’s build what’s next for your brand.",
    description:
      "We work across the moments that shape perception, consideration and action.",
    buttonText: REUSABLE_CTAS.LETS_BUILD_NEXT,
    to: "/contact",
    points: [
      "Connected Thinking",
      "Intentional Craft",
      "Continuous Momentum",
    ],
  },
};
