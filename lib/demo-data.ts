/** Fictional product samples. Not real clients, and not connected to the app. */

export const clientEmail = {
  from: "Jordan Hale",
  to: "Alex Morgan",
  subject: "Cedar, Maple, and a Thursday deadline",
  body: `Alex,

We walked 18 Cedar Lane and 42 Maple Street on Saturday, and I keep going back and forth.

Cedar is the one we pictured. The light in the kitchen is what we wanted, but the cabinets and the floor are tired, and I can't tell if that is a coat of paint or a real renovation. If another buyer is serious, I don't want to lose it while we figure that out. They said they might decide by Thursday.

Maple is easier. The kitchen is done, and the street felt quiet. The drive to the office looked longer, though, and I don't want to talk myself into a commute I will resent in February.

Can you find out what the listing agent knows about the Cedar kitchen, and whether Thursday is a real deadline? I'm not ready to pick a house in this email. I need to know what we should do before the week gets away from us.

Jordan`,
};

export const replySummary = {
  status: "Warm client",
  factors: "Kitchen renovation; Commute; Offer timing",
  momentum:
    "Wants answers before Thursday, when another buyer may decide on Cedar.",
};

export const coachInsight = [
  "Cedar is the house they pictured. Maple is the safer comparison, not the favorite.",
  "The stall is the kitchen, not the price. Find out what “tired” means before anyone talks about an offer.",
  "Thursday is their deadline, and it may be softer than it sounds. Confirm the other interest before they rush.",
];

export const actionItems = [
  "Ask the Cedar listing agent what is known about the kitchen, the floor, and any permits.",
  "Check a weekday morning drive from Maple to their office.",
  "Hold time Thursday to walk through those two answers.",
];

export const followUps = [
  "Send the kitchen and permit notes before they decide whether to write.",
  "If they still want a side-by-side, have that conversation directly.",
  "Ask whether they want a second look at Cedar this weekend.",
];

export const draftReply = `Jordan,

Thanks for laying this out so clearly. Cedar is the one that stayed with you, and the kitchen is the open question. I'll ask the listing agent what they know about the cabinets, the floor, and any permits, and I'll send you what I hear.

I'll also check a normal weekday morning drive from Maple, so the commute is not a guess.

On Thursday I'll come back with those two answers before we talk about an offer. If the other interest on Cedar is real, we'll know that too. Nothing needs to be decided in the meantime.

Alex Morgan`;

export const showingNotes = {
  rough: `Priya + Evan — Saturday

9 Birch Court
light in the living room — they stayed there
porch was an easy yes
primary closet tight, Priya said so
asked for disclosures and the HOA summary
want another look on a weekday morning

27 Harbor Ave
kitchen already done, they clocked it
front rooms noisy — Evan thinks it's the bus
not the house they pictured`,
  greeting: "Hi Priya and Evan,",
  lead: "Two different houses today. Birch Court had the light you kept coming back to. Harbor Avenue was the finished kitchen, and the street noise was hard to ignore.",
  bridge:
    "Here's a quick breakdown of what stood out at each property and how they compare:",
  closing:
    "I'll send the Birch Court disclosures and HOA summary. If you want that weekday morning walk-through, we can set it.",
  signoff: "Talk soon,\nAlex Morgan\nNorthline Realty",
  snapshot: [
    {
      label: "Properties viewed",
      value:
        "9 Birch Court — morning light, tight primary closet. 27 Harbor Avenue — finished kitchen, street noise.",
    },
    {
      label: "Top highlights",
      value: "The porch and the light at Birch Court. The finished kitchen at Harbor Avenue.",
    },
    {
      label: "Key concerns",
      value: "Closet size at Birch Court. Weekday noise at Harbor Avenue.",
    },
    {
      label: "Decision factors",
      value:
        "A bright, older layout against a finished kitchen on a louder street.",
    },
    {
      label: "Overall",
      value:
        "Birch Court fits how they want the house to feel. Harbor Avenue is the finish-level comparison.",
    },
  ],
};

export const openHouse = {
  rough: `14 Willow — Dana Okonkwo
Sat open, about 16 people

kitchen: several stayed, the light was the comment
backyard / fence: people went back out
one couple ~25 min, asked what writing an offer looks like
someone asked roof age
someone asked if the basement can be finished
a buyer asked how nearby sales compare
price questions from people who lingered, not the neighbors
front rooms were a walk-through`,
  greeting: "Hi Dana,",
  lead: "The house had a steady afternoon. People moved through the front rooms, then stayed where the light and the yard were.",
  closing:
    "I'll send the roof age and the basement note to the couple who stayed, and answer the buyer who asked about nearby sales.",
  signoff: "Talk soon,\nAlex Morgan\nNorthline Realty",
  snapshot: [
    { label: "Turnout", value: "16 visitors" },
    {
      label: "Serious interest",
      value: "One couple stayed about 25 minutes and asked about an offer",
    },
    {
      label: "What landed",
      value: "Kitchen light, the fenced yard, and the quiet block",
    },
    {
      label: "Questions",
      value: "Roof age, whether the basement can be finished, nearby sales",
    },
    {
      label: "Market read",
      value:
        "The kitchen and yard landed. The unfinished basement came up as a question, not a rejection.",
    },
    {
      label: "Next steps",
      value:
        "Follow up with the couple who stayed, and with the buyer who asked about nearby sales.",
    },
  ],
};

export const listingNotes = `1920 bungalow on a quiet block, a short walk from the park. Three bedrooms, one updated bath. Original oak floors, a deep front porch, and a kitchen with new counters but the original cabinets. Gas fireplace. Unfinished basement with usable ceiling height. Saturday market is within walking distance.`;

export const listingCopy = `Set on a quiet block a short walk from the park, this 1920 bungalow keeps the details that make the house feel settled: original oak floors, a deep front porch, and a gas fireplace. Three bedrooms share one updated bath. The kitchen has new counters and the original cabinets. Downstairs, the basement is unfinished, with ceiling height that leaves the space usable. The Saturday market is within walking distance.`;

export const realGpt = {
  question:
    "My buyer loves the house and thinks the price is high because the kitchen is original. How should I talk about that without cutting the price on the spot?",
  answer:
    "Separate the kitchen from the price for a minute. Ask what they mean by original — how it functions, how it looks, or a full remodel they have already priced in their head. You can tell them you will confirm with the listing side what has and has not been updated, then come back before anyone talks numbers. You do not have to defend the list price, or discount it, in that first conversation.",
};
