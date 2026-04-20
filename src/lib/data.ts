const U = (id: string, w = 1600, q = 80) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`;

export const IMG = {
  heroBatsman: U("1593341646782-e0b495cff86d", 1800, 85),
  stadiumDusk: U("1540747913346-19e32dc3e97e", 1800),
  batterCrease: U("1624526267942-ab0ff8a3e972", 1600),
  ballGrass: U("1531415074968-036ba1b575da", 1400),
  portraitA: U("1507003211169-0a1dd7228f2d", 500),
  portraitB: U("1544005313-94ddf0286df2", 500),
  portraitC: U("1472099645785-5658abf4ff4e", 500),
  portraitD: U("1438761681033-6461ffad8d80", 500),

  get heroStadium() {
    return this.heroBatsman;
  },
  get stadiumLights() {
    return this.stadiumDusk;
  },
  get action() {
    return this.batterCrease;
  },
  get ball() {
    return this.ballGrass;
  },
  get crowd() {
    return this.stadiumDusk;
  },
  get night() {
    return this.stadiumDusk;
  },
  get bat() {
    return this.heroBatsman;
  },
  get pads() {
    return this.batterCrease;
  },
};

export const WHATSAPP = {
  number: "971500000000",
  label: "+971 50 000 0000",
  tipsMessage:
    "Hi CrickPulse — I'd like to get daily cricket predictions & Dream11 tips on WhatsApp.",
  pitchMessage:
    "Hi CrickPulse — I have a story pitch for the editorial team.",
};

export function waLink(message: string, number: string = WHATSAPP.number) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export type LiveMatch = {
  id: string;
  league: string;
  status: "LIVE" | "UPCOMING" | "RESULT";
  teamA: { code: string; name: string; score?: string; overs?: string };
  teamB: { code: string; name: string; score?: string; overs?: string };
  note: string;
  venue: string;
  toss?: string;
  image: string;
};

export const liveMatches: LiveMatch[] = [
  {
    id: "mi-vs-csk",
    league: "IPL 2026",
    status: "LIVE",
    teamA: { code: "MI", name: "Mumbai Indians", score: "186/5", overs: "18.2" },
    teamB: { code: "CSK", name: "Chennai Super Kings", score: "142/6", overs: "16.0" },
    note: "CSK need 45 runs in 24 balls",
    venue: "Wankhede Stadium, Mumbai",
    toss: "CSK won toss, chose to bowl",
    image: IMG.stadiumLights,
  },
  {
    id: "dcw-vs-rcbw",
    league: "WPL 2026",
    status: "LIVE",
    teamA: { code: "DC-W", name: "Delhi Capitals W", score: "164/4", overs: "20.0" },
    teamB: { code: "RCB-W", name: "RCB Women", score: "98/2", overs: "12.1" },
    note: "RCB-W need 67 runs in 47 balls",
    venue: "M. Chinnaswamy, Bengaluru",
    image: IMG.crowd,
  },
  {
    id: "jsk-vs-pr",
    league: "SA20",
    status: "UPCOMING",
    teamA: { code: "JSK", name: "Joburg Super Kings" },
    teamB: { code: "PR", name: "Paarl Royals" },
    note: "Starts in 2h 40m",
    venue: "Wanderers, Johannesburg",
    image: IMG.night,
  },
];

export const scoreTickerItems = [
  "IND 312/4 (60) vs AUS — Day 2 Stumps",
  "MI 186/5 (18.2) vs CSK 142/6 (16.0)",
  "DC-W 164/4 (20) vs RCB-W 98/2 (12.1)",
  "ENG 245 all out vs PAK 89/2 (22)",
  "SA20: JSK vs PR — Starts 7:30 PM IST",
  "Ranji Trophy: MUM 421 vs KAR 218/6",
  "Big Bash: MLS 178/6 vs SIX 124/4 (15)",
  "WTC Points: AUS 1st, IND 2nd, SA 3rd",
];

export type Prediction = {
  id: string;
  league: string;
  fixture: string;
  winner: string;
  confidence: number;
  pitch: string;
  keyInsight: string;
  timeIST: string;
  image: string;
};

export const predictions: Prediction[] = [
  {
    id: "p1",
    league: "IPL 2026",
    fixture: "MI vs CSK",
    winner: "Mumbai Indians",
    confidence: 62,
    pitch: "Flat deck, dew factor after 16th over",
    keyInsight:
      "MI's top order averages 48 at Wankhede under lights. CSK's pace unit leaks 9.4 RPO in death overs this season.",
    timeIST: "7:30 PM",
    image: IMG.stadiumLights,
  },
  {
    id: "p2",
    league: "WPL 2026",
    fixture: "DC-W vs RCB-W",
    winner: "Delhi Capitals W",
    confidence: 57,
    pitch: "Two-paced surface, spin-friendly mid-innings",
    keyInsight:
      "DC-W have chased 160+ three times this season. RCB-W middle order converts 38% of starts — lowest in league.",
    timeIST: "3:30 PM",
    image: IMG.crowd,
  },
  {
    id: "p3",
    league: "SA20",
    fixture: "JSK vs PR",
    winner: "Paarl Royals",
    confidence: 54,
    pitch: "Bouncy, early swing under lights",
    keyInsight:
      "PR's new-ball pair has struck in the powerplay in 7 of last 9 games. JSK lose 3+ wickets in PP 60% of the time.",
    timeIST: "9:30 PM",
    image: IMG.night,
  },
  {
    id: "p4",
    league: "Big Bash",
    fixture: "MLS vs SIX",
    winner: "Sydney Sixers",
    confidence: 58,
    pitch: "Grass covering, seam movement early",
    keyInsight:
      "SIX have the highest powerplay wicket rate in the tournament. MLS top 3 averages just 21 in the first 6 overs.",
    timeIST: "1:45 PM",
    image: IMG.action,
  },
  {
    id: "p5",
    league: "Test · WTC",
    fixture: "IND vs AUS · Day 3",
    winner: "Draw leaning India",
    confidence: 48,
    pitch: "Day 3 crumble, uneven bounce developing",
    keyInsight:
      "Ashwin's career numbers at this venue: 34 wickets @ 19. Weather model shows 2 sessions of rain on Day 4.",
    timeIST: "9:30 AM",
    image: IMG.ball,
  },
  {
    id: "p6",
    league: "T20I",
    fixture: "ENG vs NZ",
    winner: "England",
    confidence: 61,
    pitch: "Short square boundaries, high-scoring deck",
    keyInsight:
      "ENG have crossed 180 in 8 of last 10 T20Is at home. NZ's 5th/6th bowler options are leaking 11 RPO.",
    timeIST: "10:00 PM",
    image: IMG.heroStadium,
  },
];

export type FantasyTip = {
  id: string;
  fixture: string;
  captain: string;
  viceCaptain: string;
  differential: string;
  avoid: string;
  team: { name: string; role: string; credits: number }[];
};

export const fantasyTips: FantasyTip[] = [
  {
    id: "f1",
    fixture: "MI vs CSK · IPL 2026",
    captain: "Suryakumar Yadav",
    viceCaptain: "Ruturaj Gaikwad",
    differential: "Tilak Varma (6.2% selection, form rating 8.4)",
    avoid: "Death bowlers on this deck — dew kills grip after 16th over",
    team: [
      { name: "Ishan Kishan", role: "WK", credits: 9 },
      { name: "Rohit Sharma", role: "BAT", credits: 10 },
      { name: "Ruturaj Gaikwad", role: "BAT", credits: 10.5 },
      { name: "Suryakumar Yadav", role: "BAT", credits: 10 },
      { name: "Tilak Varma", role: "BAT", credits: 8.5 },
      { name: "Ravindra Jadeja", role: "AR", credits: 10.5 },
      { name: "Hardik Pandya", role: "AR", credits: 10 },
      { name: "Jasprit Bumrah", role: "BOWL", credits: 11 },
      { name: "Matheesha Pathirana", role: "BOWL", credits: 9 },
      { name: "Deepak Chahar", role: "BOWL", credits: 8.5 },
      { name: "Piyush Chawla", role: "BOWL", credits: 8 },
    ],
  },
];

export type PointsRow = {
  pos: number;
  team: string;
  code: string;
  p: number;
  w: number;
  l: number;
  nrr: string;
  pts: number;
  form: ("W" | "L")[];
};

export const iplTable: PointsRow[] = [
  { pos: 1, team: "Mumbai Indians", code: "MI", p: 10, w: 8, l: 2, nrr: "+1.24", pts: 16, form: ["W", "W", "L", "W", "W"] },
  { pos: 2, team: "Gujarat Titans", code: "GT", p: 10, w: 7, l: 3, nrr: "+0.98", pts: 14, form: ["W", "L", "W", "W", "W"] },
  { pos: 3, team: "Rajasthan Royals", code: "RR", p: 10, w: 7, l: 3, nrr: "+0.42", pts: 14, form: ["L", "W", "W", "W", "L"] },
  { pos: 4, team: "Royal Challengers", code: "RCB", p: 10, w: 6, l: 4, nrr: "+0.31", pts: 12, form: ["W", "L", "W", "L", "W"] },
  { pos: 5, team: "Chennai Super Kings", code: "CSK", p: 10, w: 5, l: 5, nrr: "-0.04", pts: 10, form: ["L", "W", "L", "W", "L"] },
  { pos: 6, team: "Delhi Capitals", code: "DC", p: 10, w: 4, l: 6, nrr: "-0.28", pts: 8, form: ["L", "L", "W", "L", "W"] },
  { pos: 7, team: "Lucknow Super Giants", code: "LSG", p: 10, w: 3, l: 7, nrr: "-0.61", pts: 6, form: ["L", "W", "L", "L", "L"] },
  { pos: 8, team: "Kolkata Knight Riders", code: "KKR", p: 10, w: 3, l: 7, nrr: "-0.89", pts: 6, form: ["L", "L", "L", "W", "L"] },
];

export const wplTable: PointsRow[] = [
  { pos: 1, team: "Delhi Capitals W", code: "DC-W", p: 8, w: 6, l: 2, nrr: "+1.12", pts: 12, form: ["W", "W", "W", "L", "W"] },
  { pos: 2, team: "Mumbai Indians W", code: "MI-W", p: 8, w: 5, l: 3, nrr: "+0.64", pts: 10, form: ["W", "L", "W", "W", "L"] },
  { pos: 3, team: "RCB Women", code: "RCB-W", p: 8, w: 4, l: 4, nrr: "+0.08", pts: 8, form: ["L", "W", "W", "L", "W"] },
  { pos: 4, team: "UP Warriorz", code: "UPW", p: 8, w: 2, l: 6, nrr: "-0.84", pts: 4, form: ["L", "L", "W", "L", "L"] },
  { pos: 5, team: "Gujarat Giants W", code: "GG-W", p: 8, w: 1, l: 7, nrr: "-1.02", pts: 2, form: ["L", "L", "L", "W", "L"] },
];

export type Article = {
  slug: string;
  category: string;
  title: string;
  dek: string;
  author: string;
  authorImage: string;
  readTime: string;
  date: string;
  image: string;
  body: string[];
};

export const articles: Article[] = [
  {
    slug: "wankhede-under-lights-mi-csk",
    category: "Match Preview",
    title: "Why Wankhede under lights will decide the MI–CSK playoff race",
    dek: "A granular look at dew patterns, powerplay matchups, and the one selection call both captains are stalling on.",
    author: "Arjun Rao",
    authorImage: IMG.portraitA,
    readTime: "7 min",
    date: "Today",
    image: IMG.stadiumLights,
    body: [
      "The Wankhede pitch has been the most talked-about deck of the season, and for good reason. In eleven matches here so far, the team batting second has won eight — a pattern tied almost entirely to how the dew rolls in between overs 14 and 16.",
      "Both captains know this. What neither is willing to say publicly is that the selection call tonight isn't about form — it's about role. One side is holding back a fourth seamer; the other is sitting on a mystery spinner who hasn't bowled since the auction.",
      "The numbers tilt one way, the vibes another. We walk through the matchup that actually decides it.",
      "Our model gives Mumbai a 62% win probability. That's not decisive. It is, however, a meaningful edge — and we'll show exactly where it comes from.",
    ],
  },
  {
    slug: "india-second-innings-mcg",
    category: "Live Blog",
    title: "Ball-by-ball: India's second innings collapse at the MCG",
    dek: "Updates, context and charts as India try to hold a slippery lead on Day 4.",
    author: "Priya Mehta",
    authorImage: IMG.portraitB,
    readTime: "Live",
    date: "Updating now",
    image: IMG.action,
    body: [
      "Day 4, first session. The lead is 187 and the ball is 42 overs old. Three of those overs haven't gone for runs.",
      "Cummins is bowling a length two balls fuller than he has all series, and it's working. The wicket of Gill in the sixth over of the session has opened something that was supposed to stay shut for another hour.",
      "What happens in the next forty minutes decides the Test.",
    ],
  },
  {
    slug: "mini-auction-moves-that-mattered",
    category: "Auction Desk",
    title: "The three mini-auction moves that actually moved the needle",
    dek: "Not every ₹20 crore deal is a power play. Here's what the smart franchises bought, and who will regret their silence.",
    author: "Kabir Shah",
    authorImage: IMG.portraitC,
    readTime: "9 min",
    date: "Yesterday",
    image: IMG.night,
    body: [
      "The mini-auction is over, and if you read only the headline purchases you'd think the league's balance shifted dramatically. It didn't. It shifted — just not where the headlines looked.",
      "Three buys, in particular, quietly rewrote the power-rankings. Two of them cost less than ₹2 crore.",
      "Below, a frame-by-frame walkthrough of the three deals that will matter in eight months, and the one big-ticket buy that already looks like a mistake.",
    ],
  },
  {
    slug: "bouncer-weapon-or-liability",
    category: "Long Read",
    title: "Is the bouncer still a weapon in T20, or just a liability?",
    dek: "We pulled every short ball from the last two seasons. The numbers are more counterintuitive than the commentary suggests.",
    author: "Meera Iyer",
    authorImage: IMG.portraitD,
    readTime: "12 min",
    date: "2 days ago",
    image: IMG.ball,
    body: [
      "It's one of the oldest pieces of T20 folklore: the bouncer is a wicket-taking ball. Except, when you count every short delivery across 244 matches and 18,000+ balls, the picture gets strange fast.",
      "Bouncers in the powerplay go for 11.2 RPO and take a wicket every 29 balls. Bouncers in the death go for 14.1 RPO and take a wicket every 22. Those two numbers are doing battle inside every captain's head.",
      "We went looking for the actual break-even. It's not where you think.",
    ],
  },
  {
    slug: "wpl-chase-masters",
    category: "Match Preview",
    title: "How DC-Women became the best chasing side in T20 cricket, full stop",
    dek: "Not just WPL — full stop. A data-led look at the game plan that has them at 7 chases from 8.",
    author: "Priya Mehta",
    authorImage: IMG.portraitB,
    readTime: "6 min",
    date: "3 days ago",
    image: IMG.crowd,
    body: [
      "Seven from eight. In any league, men's or women's, that's the best chasing record this season. It's not happenstance.",
      "The Delhi plan starts at the toss, runs through an unglamorous middle-overs strategy, and ends with a remarkably boring final over play. Boring, here, is a compliment.",
    ],
  },
  {
    slug: "sa20-pitch-report",
    category: "Scout Report",
    title: "SA20 pitch report: what Wanderers, Newlands and Kingsmead are really doing",
    dek: "Conditions are shifting week by week. Here's the three-venue read every fantasy player should have open.",
    author: "Arjun Rao",
    authorImage: IMG.portraitA,
    readTime: "8 min",
    date: "4 days ago",
    image: IMG.pads,
    body: [
      "The SA20 is the tournament that most fantasy players under-research. That's a mistake — conditions move fast, and the three premier venues are behaving nothing like last year.",
      "Here's the current, current read on all three — with the toss-decision break-even, par scores, and the matchup patterns the model keeps flagging.",
    ],
  },
];

export const stats = [
  { label: "Daily predictions", value: "12+", hint: "across formats" },
  { label: "Accuracy (30d)", value: "71%", hint: "top-pick wins" },
  { label: "Live matches tracked", value: "48", hint: "this week" },
  { label: "Fantasy tips readers", value: "94k", hint: "monthly" },
];

export const writers = [
  {
    name: "Arjun Rao",
    role: "Senior Analyst · IPL · SA20",
    bio: "Former first-class cricketer. Obsessed with powerplay matchups and toss-time data.",
    image: IMG.portraitA,
  },
  {
    name: "Priya Mehta",
    role: "Editor · WPL · Women's Cricket",
    bio: "Covered 3 WPL seasons ball-by-ball. Writes the live blogs you'll actually read.",
    image: IMG.portraitB,
  },
  {
    name: "Kabir Shah",
    role: "Auction Desk · Data",
    bio: "Player pricing models, retention logic, squad balance. Ex-Moneyball-for-cricket newsletter.",
    image: IMG.portraitC,
  },
  {
    name: "Meera Iyer",
    role: "Features · Long-form",
    bio: "The reads that take 12 minutes and stay with you for three days.",
    image: IMG.portraitD,
  },
];

export const features = [
  {
    title: "Predictions with receipts",
    description:
      "Every daily pick ships with pitch read, matchup math, confidence %, and a 30-day accuracy ledger. You decide how much to trust us.",
    stat: "71%",
    statLabel: "top-pick accuracy, last 30 days",
  },
  {
    title: "Fantasy teams by analysts",
    description:
      "No scraped-template XIs. Our Captain call, differential and fade — posted 60 minutes before every lock-in.",
    stat: "94k",
    statLabel: "readers use our XI monthly",
  },
  {
    title: "Live blogs you'll finish",
    description:
      "Not just commentary — context. Charts, matchup calls, and quiet observations from writers actually watching.",
    stat: "48",
    statLabel: "matches covered live this week",
  },
  {
    title: "Fresh every day",
    description:
      "Previews by noon, post-match takes before stumps, long-form on the off days. The calendar never goes quiet.",
    stat: "18",
    statLabel: "original stories per week",
  },
];

export const testimonials = [
  {
    quote:
      "The only cricket newsletter I don't delete. The fantasy XI is worth the time by itself.",
    name: "R. Krishnan",
    handle: "Product · Bengaluru",
  },
  {
    quote:
      "The pitch-read section changed how I watch IPL. It's the kind of nerd stuff commentators hint at but never show.",
    name: "Ayesha B.",
    handle: "Editor · Mumbai",
  },
  {
    quote:
      "Finally a cricket site that respects my time. No pop-ups, no 'sure-shot' bait.",
    name: "D. Fernandes",
    handle: "Data Eng · Dubai",
  },
];

export const navLinks = [
  { href: "/predictions", label: "Predictions" },
  { href: "/fantasy", label: "Dream11 Tips" },
  { href: "/points-table", label: "Points Table" },
  { href: "/news", label: "News" },
  { href: "/about", label: "About" },
];
