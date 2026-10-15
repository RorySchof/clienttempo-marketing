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
  factors: "Property condition; Competing interest and timing; Commute",
  momentum:
    "Possible decision by Thursday; wants to determine next steps before the week gets away",
};

export const coachInsight = [
  "Cedar is the client’s current anchor, but uncertainty about the kitchen and the possible Thursday deadline are keeping the decision open; the client is asking for a near-term path forward, not committing to either home.",
];

export const actionItems = [
  "Ask the listing agent for 18 Cedar Lane whether Thursday is a firm decision deadline.",
  "Ask the listing agent for 18 Cedar Lane what is known about the kitchen cabinets and flooring, including whether they may need renovation.",
];

export const followUps = [
  "Relay the listing agent’s answers and work through the options and next steps with the client before Thursday.",
];

export const draftReply = `Hi Jordan,

We don’t need to choose a house in this email. I’ll check with the listing agent about the Cedar kitchen and whether Thursday is a firm deadline. Once I hear back, we can work through what makes sense before the week gets away from us, including how the Maple commute fits into your decision.

Best,`;

export const showingNotes = {
  rough: `9 Birch Court:
light in the living room — they stayed there
porch was an easy yes
primary closet tight, Priya said so
asked for disclosures and the HOA summary
want another look on a weekday morning

27 Harbor Ave:
kitchen already done, they clocked it
front rooms noisy — Evan thinks it's the bus
not the house they pictured`,
  greeting: "Hi Priya,",
  lead: "You both had clear reactions today, which makes the next look especially useful. That porch felt like an easy yes, and the tighter closet is worth seeing in person again before you decide how much it matters.",
  bridge:
    "Here's a quick breakdown of what stood out at each property and how they compare:",
  signoff: "Warmly,",
  snapshot: [
    {
      label: "Properties viewed",
      value:
        "9 Birch Court: bright living room, porch felt like an easy yes, tight primary closet.\n27 Harbor Ave: kitchen already done, noise in the front rooms that may be from the bus, not the home you pictured.",
    },
    {
      label: "Top highlights",
      value:
        "The most immediate positives were features that felt ready to enjoy: an inviting porch and a kitchen that was already done.",
    },
    {
      label: "Key concerns",
      value:
        "The tight primary closet at Birch and the noise in Harbor's front rooms are the clearest sticking points. Harbor also didn't match the home you had pictured.",
    },
    {
      label: "Decision factors",
      value:
        "Birch's closet is still an open question, while Harbor's finished kitchen may not make up for the noise or the mismatch with what you were looking for. It's not yet clear how much location versus layout matters most to you.",
    },
    {
      label: "Overall",
      value:
        "Birch seems worth another look, and a weekday morning visit can help you judge the feel of the home and the closet more closely. The requested disclosures and HOA summary will add useful context.",
    },
  ],
  sentiment:
    "Mixed: the porch and living room at 9 Birch Court landed well, but the closet gave Priya pause, and 27 Harbor Ave wasn't the home you pictured.",
  coaching:
    "Priya seemed more engaged at Birch, but don't assume the tight closet is a dealbreaker or brush it off. Use the weekday revisit to find out whether it works for her day to day, and ask directly how much location versus layout matters before steering them elsewhere.",
  actionItems: [
    "Get the disclosures and HOA summary for 9 Birch Court to Priya and Evan.",
    "Coordinate a weekday morning second look at 9 Birch Court.",
  ],
  followUps: [
    "Priya and Evan asked for the disclosures and HOA summary for 9 Birch Court.",
    "Priya and Evan want another look at 9 Birch Court on a weekday morning.",
  ],
};

export const openHouse = {
  rough: `Sat open, about 16 people

kitchen: several stayed, the light was the comment
backyard / fence: people went back out
one couple ~25 min, asked what writing an offer looks like
someone asked roof age
someone asked if the basement can be finished
a buyer asked how nearby sales compare
price questions from people who lingered, not the neighbors
front rooms were a walk-through`,
  greeting: "Hi Dana,",
  lead: "The open house drew about 16 people, with visitors spending time in the kitchen and going back out to the backyard. One couple stayed about 25 minutes and asked what writing an offer involves. An agent has also followed up and booked a second showing, which is a concrete next step, though it doesn’t tell us whether an offer is coming.",
  closing: "Thank you for welcoming visitors through the home.",
  signoff: "Warmly,",
  snapshot: [
    { label: "Visitors", value: "About 16" },
    { label: "Time spent", value: "One couple stayed about 25 minutes" },
    { label: "Second showing", value: "Booked after an agent followed up" },
    {
      label: "Visitor activity",
      value:
        "Several stayed in the kitchen; visitors went back out to the backyard and fence; front rooms were a walk-through; kitchen light drew comment",
    },
    {
      label: "Questions",
      value:
        "Offer-writing process; roof age; whether the basement can be finished; nearby sales",
    },
    {
      label: "Feedback to note",
      value:
        "Visitors who lingered asked about price; neighbors were not included in those questions",
    },
  ],
  interestLevel:
    "One couple stayed about 25 minutes and asked what writing an offer looks like. An agent has followed up and booked a second showing, a concrete next-step signal, though the notes don’t establish whether an offer is likely.",
  coaching:
    "The booked second showing is the clearest next-step signal; don’t assume it’s the couple who stayed 25 minutes unless you’ve confirmed that. The offer-process question shows engagement, not likely offer intent. Price questions came from visitors who lingered, but the notes give no count or specific wording, so treat them as a signal to listen for repeat, not a pricing verdict.",
  actionItems: [
    "Have the roof age, basement-finishing information, nearby-sale context and offer-process basics ready to address.",
  ],
};

export const listingNotes = `1920 bungalow on a quiet, tree-lined street.
3 bedrooms, 1 updated bath.
Original oak floors, deep front porch, gas fireplace. Old-house charm.
Kitchen has new countertops, original cabinets.
Unfinished basement with good ceiling height; hobby or workshop potential.
Warm, welcoming feel. Walk to park and Saturday farmers market.`;

export const listingCopy = `Set on a quiet, tree-lined street, this 1920 bungalow pairs original character with thoughtful updates. Three bedrooms and an updated bath complement original oak floors, a deep front porch, and a gas fireplace that adds warmth and charm. The kitchen features new countertops alongside its original cabinets. An unfinished basement with good ceiling height offers potential for a hobby or workshop space. The welcoming home is within walking distance of a park and the Saturday farmers market.`;

export const realGpt = {
  question:
    "My buyer loves the house and thinks the price is high because the kitchen is original. How should I talk about that without cutting the price on the spot?",
  answer:
    "Separate the kitchen from the price for a minute. Ask what they mean by original — how it functions, how it looks, or a full remodel they have already priced in their head. You can tell them you will confirm with the listing side what has and has not been updated, then come back before anyone talks numbers. You do not have to defend the list price, or discount it, in that first conversation.",
};
