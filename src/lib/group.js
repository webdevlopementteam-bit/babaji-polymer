// Babaji Group — corporate content shared across the group website.

export const group = {
  name: "Babaji Group",
  tagline: "One Group. Four Industries. Endless Possibilities.",
  motto: "One Trust, One Tradition.",
  footerLine: "Delivering Quality. Building Trust. Creating a Better Tomorrow.",
  since: 1983,
  phones: [
    { display: "+91 83840 39200", tel: "+918384039200" },
    { display: "+91 80762 67027", tel: "+918076267027" },
  ],
  emails: ["babajigroupofficial@gmail.com", "nationalhead.bupl@gmail.com"],
  instagram: "https://www.instagram.com/babajibrand",
  hours: "Mon – Sat, 9:30 AM – 6:30 PM",
};

export const offices = [
  {
    title: "Food Products — Corporate Office",
    company: "Babaji Brand Oil Industries",
    address: "KH.NO. 3/1, Plot No. 1, Nangli Sakrawati Industrial Area, Najafgarh, New Delhi - 110043",
    phone: group.phones[0],
    email: "babajigroupofficial@gmail.com",
    map: "Nangli Sakrawati Industrial Area, Najafgarh, New Delhi 110043",
  },
  {
    title: "Polysheets & PVC Compounds — Works",
    company: "Babaji Udyog Pvt. Ltd.",
    address: "Plot No. 88C, Sector 16, Bahadurgarh, Haryana - 124507",
    phone: group.phones[1],
    email: "nationalhead.bupl@gmail.com",
    map: "Sector 16, Bahadurgarh, Haryana 124507",
  },
  {
    title: "Babaji Udyog — Ganaur Unit",
    company: "Babaji Udyog Pvt. Ltd.",
    address: "Killa No. 27/11/1, 11/2, 20/1, 20/2, 38/15/2, 16/1, Near DICT Main Gate, Delhi Panipat Expressway, Vill. Panchi Gujran, Ganaur, Sonipat, Haryana - 131101",
    phone: group.phones[1],
    email: "nationalhead.bupl@gmail.com",
    map: "Panchi Gujran, Ganaur, Sonipat, Haryana 131101",
  },
];

// The four verticals. `color` keys map to the accent classes in components/biz.js.
export const businesses = [
  {
    key: "food",
    card: { image: "/images/home/business1.webp", first: "Food", rest: " Products", tagline: "Quality Food for a Better Life", text: "A wide range of high-quality food products crafted with purity, taste and nutrition for healthier families." },
    name: "Food Products",
    label: "FMCG & Food Products",
    tagline: "Quality Food for a Better Life",
    href: "/food-products",
    color: "red",
    icon: "wheat",
    image: "/images/group-food.webp",
    position: "object-bottom",
    text: "Premium edible oils, MP chakki atta, besan, pulses and household essentials — trusted by families across India since 1983.",
    features: [
      { icon: "leaf", label: "Pure & Nutritious" },
      { icon: "shield", label: "Trusted Quality" },
      { icon: "users", label: "For Healthier Families" },
    ],
  },
  {
    key: "pvc",
    card: { image: "/images/home/business2.webp", first: "Polymer", rest: " Compound", tagline: "Engineering a Stronger Tomorrow", text: "High-performance polymer granules for diverse industrial applications, ensuring strength, durability and reliability." },
    name: "Polymer Compound",
    label: "PVC Compounds",
    tagline: "Engineering Polymer Solutions",
    href: "/pvc-compounds",
    color: "gold",
    icon: "pellets",
    image: "/images/granules.webp",
    text: "High-performance PVC compounds for cables, footwear, automotive, pipes and profiles — ensuring strength, durability and reliability.",
    features: [
      { icon: "gear", label: "High Performance" },
      { icon: "diamond", label: "Wide Applications" },
      { icon: "shield", label: "Consistent Quality" },
    ],
  },
  {
    key: "sheet",
    card: { image: "/images/home/business3.webp", first: "Polysheet", rest: "", tagline: "Durable Sheet Solutions", text: "High-quality polysheets designed for multiple industries, offering durability, versatility and long-lasting performance." },
    name: "Polysheet",
    label: "Packaging Industry — PET & HIPS Sheets",
    tagline: "Durable Sheet Solutions",
    href: "/polysheets",
    color: "blue",
    icon: "layers",
    image: "/images/poly/sheets-rolls.webp",
    text: "ESD and non-ESD PET & HIPS sheets, rolls and thermoformed trays for electronics packaging and industrial applications.",
    features: [
      { icon: "link", label: "Strong & Durable" },
      { icon: "layers", label: "Versatile Applications" },
      { icon: "recycle", label: "Sustainable Solutions" },
    ],
  },
    {
    key: "caps",
    card: { image: "/images/home/cap-handle.png", first: "Plastic", rest: " Caps", tagline: "Reliable Closures for Every Need", text: "A wide range of high-quality plastic caps designed for safety, sealing and long-lasting performance across various applications." },
    name: "Plastic Caps",
    label: "Caps & Closures",
    tagline: "Quality Plastic Caps for Diverse Packaging Needs",
    href: "/plastic-caps",
    color: "red",
    icon: "cap",
    image: "/images/home/cap-handle.png",
    text: "PCO, CTC, spout and water caps for oil, juice, beverage and water packaging, trusted by leading brands.",
    features: [
      { icon: "shield", label: "Leak Proof" },
      { icon: "layers", label: "Durable & Strong" },
      { icon: "grid", label: "Multiple Sizes & Types" },
    ],
  },
];

// Achievement counters. Confirm with management before going live.
export const achievements = [
  { icon: "factory", to: 40, suffix: "+", label: "Years of Excellence", color: "blue" },
  { icon: "users", to: 500, suffix: "+", label: "Trusted Customers", color: "gold" },
  { icon: "chart", to: 4, suffix: "", label: "Diverse Businesses", color: "green" },
  { icon: "box", to: 50, suffix: "+", label: "Products Portfolio", color: "purple" },
  { icon: "pin", text: "Pan India", label: "Growing Presence", color: "red" },
  { icon: "check", text: "Quality", label: "Assured Always", color: "green" },
];

export const enquiryTypes = [
  { icon: "handshake", label: "Business Partnerships" },
  { icon: "users", label: "Distributorship Enquiries" },
  { icon: "box", label: "Bulk Orders & Quotes" },
  { icon: "call", label: "Product Support" },
];

export const vision = {
  title: "To Be a Trusted Leader Across Industries",
  text: "To build a diversified and globally recognised group, known for delivering high-quality products and innovative solutions — and to become India's most trusted brand through consistent quality and sustainable growth.",
  points: [
    { icon: "chart", label: "Sustainable Growth" },
    { icon: "users", label: "Stronger Communities" },
    { icon: "globe", label: "Global Recognition" },
  ],
};

export const mission = {
  title: "Deliver Quality, Create Lasting Value",
  text: "To consistently deliver superior products and solutions across our businesses — holding the highest standards of purity, performance and customer satisfaction at every step, from sourcing to dispatch.",
  points: [
    { icon: "diamond", label: "Quality Products" },
    { icon: "gear", label: "Operational Excellence" },
    { icon: "leaf", label: "Responsible Growth" },
  ],
};

export const journey = [
  { year: "1983", title: "The beginning", text: "Babaji Brand Oil Industries starts out in Najafgarh, Delhi, with a single promise — honest quality at a fair price." },
  { year: "1990s", title: "Building the base", text: "Steady growth across North India as families and retailers make Babaji a regular name in their kitchens." },
  { year: "2000s", title: "Scaling up", text: "The facility expands to 2 acres and modern oil processing technology is brought in." },
  { year: "Today", title: "One group, four industries", text: "Food products, plus PET & HIPS polysheets and PVC compounds through Babaji Udyog Pvt. Ltd. in Bahadurgarh." },
];

export const facilities = [
  {
    title: "Food Processing Facility",
    place: "Najafgarh, New Delhi",
    image: "/images/group1.webp",
    points: ["2-acre manufacturing facility", "World-class oil processing technology", "Captive wind power unit", "In-house quality assessment labs"],
  },
  {
    title: "Polymer Manufacturing Plant",
    place: "Bahadurgarh, Haryana",
    image: "/images/poly/mfg-extrusion.webp",
    points: ["600+ MT monthly sheet capacity", "Dedicated ESD & non-ESD extrusion lines", "Surface-resistance testing on every lot", "Sheets, rolls & thermoformed trays"],
  },
];

// ---------- Food products ----------

export const foodCategories = [
  { slug: "edible-oils", name: "Edible Oils", image: "/images/food/food-oil.webp" },
  { slug: "flour-mixes", name: "Flour & Mixes", image: "/images/food/food-flour.webp" },
  { slug: "pulses", name: "Pulses", image: "/images/food/food-pulse.webp" },
  { slug: "detergent", name: "Detergent & Cleaning", image: "/images/food/food-detergent.webp" },
];

const f = (name, category, sizes, img, points = []) => ({ name, category, sizes, image: `/images/food/${img}.webp`, points });

export const foodProducts = [
  f("Premium Kachi Ghani Mustard Oil", "edible-oils", ["1 Litre", "5 Litre"], "oil-kachi-ghani", ["Cold pressed", "Rich in Omega 3 & 6"]),
  f("Kachi Ghani Mustard Oil", "edible-oils", ["1 Litre", "5 Litre"], "oil-yellow-mustard", ["High smoke point", "Vitamin E"]),
  f("Cold Pressed Yellow Mustard Oil", "edible-oils", ["500 ML", "1 Litre"], "oil-yellow-premium", ["Natural aroma", "Rich antioxidants"]),
  f("Kachi Ghani Mustard Oil (Premium)", "edible-oils", ["1 Litre"], "oil-kachi-ghani-premium", ["Cold pressed", "Strong natural pungency"]),
  f("Cold Pressed Canola Oil", "edible-oils", ["1 Litre"], "oil-canola", ["Pure & natural", "Light & healthy"]),
  f("Besan", "flour-mixes", ["5 KG", "10 KG"], "flour-besan", ["Stone ground", "High fibre"]),
  f("MP Chakki Fresh Atta", "flour-mixes", ["500 GM", "1 KG"], "flour-atta", ["Fine grind", "High protein"]),
  f("Besan (Jar)", "flour-mixes", ["500 GM", "1 KG"], "flour-besan2", ["Fine texture", "Ideal for baking"]),
  f("Moong Dhuli", "pulses", ["1 KG", "5 KG"], "pulses-moong-dhuli", ["High protein", "Machine cleaned"]),
  f("Massar Dal", "pulses", ["1 KG", "5 KG"], "pulses-massar-dal", ["Nutritious", "High protein"]),
  f("Urad Chilka", "pulses", ["1 KG", "5 KG"], "pulses-urad-chilka"),
  f("Moong Sabut", "pulses", ["1 KG", "5 KG"], "pulses-moong-sabut"),
  f("Urad Sabut", "pulses", ["1 KG", "5 KG"], "pulses-urad-sabut"),
  f("Arhar Dal", "pulses", ["1 KG", "5 KG"], "pulses-arhar-dal"),
  f("Kala Chana", "pulses", ["1 KG", "5 KG"], "pulses-kala-chana"),
  f("Rajma Chitra", "pulses", ["1 KG", "5 KG"], "pulses-rajma-chitra"),
  f("Lobia Dal", "pulses", ["1 KG", "5 KG"], "pulses-lobia"),
  f("Masoor Sabut", "pulses", ["1 KG", "5 KG"], "pulses-masoor-saabut"),
  f("Rajma Jammu", "pulses", ["1 KG", "5 KG"], "pulses-rajma-jammu"),
  f("OxyBoom Bartan Bar", "detergent", ["250 GM", "500 GM"], "detargent-detergent2"),
  f("OxyBoom Bartan Bar Tub", "detergent", ["500 GM", "1 KG"], "detargent-detergent3"),
  f("OxyBoom Detergent Bar", "detergent", ["250 GM", "500 GM"], "detargent-detergent5"),
  f("OxyBoom Detergent Powder", "detergent", ["250 GM", "500 GM"], "detargent-detergent4"),
  f("OxyBoom Bar", "detergent", ["250 GM", "500 GM"], "detargent-detergent1"),
];

export const foodHighlights = [
  "100% Pure & Natural",
  "Direct from Mill to Home",
  "FSSAI Certified Quality",
  "No Artificial Additives",
  "Cold-Pressed Kachi Ghani",
  "Fresh Stone-Ground Atta",
  "Bulk Orders Welcome",
  "Wholesale & Retail Available",
];

export const foodStats = [
  { to: 40, suffix: "+", label: "Years in the industry" },
  { to: 2, suffix: "", label: "Acre manufacturing facility" },
  { to: 50, suffix: "+", label: "Products across categories" },
  { to: 100, suffix: "%", label: "Batches lab tested" },
];

export const foodWhy = [
  { icon: "diamond", title: "Best quality, best price", text: "Our founding promise, unchanged since 1983: never trade quality for margin, and never price it out of reach." },
  { icon: "flask", title: "In-house testing labs", text: "Every batch is checked in our own quality assessment labs before it is allowed to leave the plant." },
  { icon: "leaf", title: "Powered by our own wind unit", text: "A captive wind power unit supports our operations, keeping production cleaner and less grid-dependent." },
  { icon: "factory", title: "World-class processing", text: "Modern oil processing technology on 2 acres in North India's industrial hub, run by an experienced team." },
];

export const foodReviews = [
  { text: "Babaji Mustard Oil has become a staple in our kitchen. The purity and aroma remind us of traditional homemade food.", name: "Rajesh Sharma", place: "Delhi" },
  { text: "The quality of Babaji Besan and Atta is outstanding. Every meal feels healthier and more authentic.", name: "Priya Verma", place: "Lucknow" },
  { text: "Excellent product range and consistent quality. We have been using Babaji products for years.", name: "Ankit Gupta", place: "Jaipur" },
  { text: "The pulses are clean, nutritious and cook perfectly every time. Highly recommended.", name: "Sunita Mishra", place: "Patna" },
];

export const foodCompany = {
  fssai: "10020011008084",
  gst: "07AAHCB7986L1ZW",
};

// ---------- Polysheets ----------

export const polyRange = [
  { name: "ESD PET Sheets", tag: "PET", image: "/images/poly/pet-sheets.webp", text: "Static-safe PET sheets with high clarity and a premium finish for transparent, inspect-without-opening packaging.", chips: ["Clear", "White", "Black"], href: "/polysheets/esd-pet-sheets" },
  { name: "ESD HIPS Sheets", tag: "HIPS", image: "/images/poly/hips-sheets.webp", text: "Rigid, impact-resistant HIPS sheets that dissipate static efficiently — the cost-effective choice for durable trays.", chips: ["White", "Black", "Custom grades"], href: "/polysheets/esd-hips-sheets" },
  { name: "PET & HIPS Sheets (Non-ESD)", tag: "PET + HIPS", image: "/images/poly/pet-hips-sheets.webp", text: "General-purpose sheets from dedicated lines for food, pharma, cosmetics, appliance and industrial packaging.", chips: ["Clear", "White", "Black"], href: "/polysheets/pet-sheets" },
  { name: "Sheets & Rolls", tag: "PET + HIPS", image: "/images/poly/sheets-rolls.webp", text: "Supplied as cut sheets or continuous rolls to suit your thermoforming line and production volumes.", chips: ["Various thickness", "Custom widths"] },
  { name: "ESD Thermoformed Trays", tag: "Thermoforming", image: "/images/poly/thermoforming.webp", text: "Precision trays and custom packaging formed from our own ESD PET and ESD HIPS sheets.", chips: ["Clear trays", "Black trays", "Custom designs"] },
  { name: "PCB & Component Trays", tag: "HIPS", image: "/images/poly/pcb-tray.webp", text: "Safe handling, storage and transport of PCB assemblies, modules and sensitive electronic parts.", chips: ["Handling", "Storage", "Transport"] },
];

export const polyStats = [
  { value: "10³–10¹²", label: "Ω/sq surface resistance" },
  { value: "600+ MT", label: "Monthly production capacity" },
  { value: "3 Grades", label: "Conductive · Dissipative · Anti-static" },
  { value: "3 Colours", label: "Clear · White · Black" },
];

export const polySpecs = [
  ["Material", "Polyethylene Terephthalate", "High Impact Polystyrene"],
  ["Forms available", "Sheets & Rolls", "Sheets & Rolls"],
  ["Colours", "Clear · White · Black", "White · Black"],
  ["ESD grades", "Conductive · Dissipative · Anti-static", "Conductive · Dissipative · Anti-static"],
  ["Surface resistance", "10³ – 10¹² Ω/sq", "10³ – 10¹² Ω/sq"],
  ["Transparency", "Transparent (Clear grade)", "Opaque"],
  ["Best known for", "Clarity & premium finish", "Strength & impact resistance"],
  ["Thermoforming", "Excellent, smooth forming", "Easy forming into custom trays"],
  ["Thickness & size", "Custom, on request", "Custom, on request"],
];

export const packagingApps = [
  { name: "Food & Beverage Packaging", tag: "PET", image: "/images/poly/ind-food.webp" },
  { name: "Pharmaceutical Packaging", tag: "PET", image: "/images/poly/ind-pharma.webp" },
  { name: "Consumer Electronics", tag: "PET", image: "/images/poly/ind-consumer.webp" },
  { name: "Cosmetics Packaging", tag: "PET", image: "/images/poly/ind-cosmetics.webp" },
  { name: "General Industrial", tag: "PET", image: "/images/poly/ind-general.webp" },
  { name: "Electronics & Components", tag: "HIPS", image: "/images/poly/ind-electronics.webp" },
  { name: "Appliances & Consumer Goods", tag: "HIPS", image: "/images/poly/ind-appliances.webp" },
  { name: "Automotive Components", tag: "HIPS", image: "/images/poly/ind-automotive.webp" },
  { name: "Medical Devices Packaging", tag: "HIPS", image: "/images/poly/ind-medical.webp" },
  { name: "Industrial & Protective Trays", tag: "HIPS", image: "/images/poly/ind-tray.webp" },
];

export const polyReviews = [
  { text: "The ESD HIPS sheets form cleanly with very little rejection. Surface resistance stays stable after forming, which matters most for our black trays.", name: "Thermoforming Partner", place: "Manesar, Haryana" },
  { text: "We switched to Babaji ESD PET for our transparent PCB trays. Clarity is excellent and our QC team can inspect boards without opening the packs.", name: "EMS Unit", place: "Noida, Uttar Pradesh" },
  { text: "Consistent thickness roll after roll, and supply has always been on time. Bulk orders are handled professionally.", name: "Packaging Converter", place: "Bhiwadi, Rajasthan" },
  { text: "Strong, rigid HIPS trays for our sensor modules and a good price point. The team helped us choose the right ESD grade.", name: "Automotive Electronics Supplier", place: "Gurugram, Haryana" },
];

export const sustainability = [
  { icon: "leaf", title: "Captive wind power", text: "A captive wind power unit supports our food manufacturing, reducing how much we draw from the grid and lowering the footprint of every pack." },
  { icon: "recycle", title: "Recyclable materials", text: "PET and HIPS sheets are lightweight and recyclable, with recyclable options available across our sheet range." },
  { icon: "gear", title: "Energy-efficient processes", text: "Modern processing and extrusion technology helps us produce more with less energy and less waste." },
  { icon: "flask", title: "Quality that avoids waste", text: "Raw material screening and batch testing catch issues early, so less material is rejected downstream." },
];

// ---------- PVC compounds (Polymer Compound) ----------
// Product names follow the applications listed on the polymer site; confirm grade names with the technical team.
export const pvcProducts = [
  { name: "PVC Cable Insulation Compound", type: "Flexible", image: "/images/pvc/orange.webp", text: "Insulation compounds for power, building and flexible cables.", tags: ["Wires & Cables", "Custom colours"] },
  { name: "PVC Cable Sheathing Compound", type: "Flexible", image: "/images/pvc/black.webp", text: "Tough outer-sheathing compounds for durable, flexible cables.", tags: ["Wires & Cables", "Black & coloured"] },
  { name: "PVC Footwear Compound", type: "Flexible", image: "/images/granules.webp", text: "Compounds for soles, straps and slippers with comfort and durability.", tags: ["Footwear", "Multi-colour"] },
  { name: "PVC Automotive Compound", type: "Flexible", image: "/images/pvc/mixed.webp", text: "Compounds for automotive parts, trims and wiring harness applications.", tags: ["Automotive", "Wiring harness"] },
  { name: "Rigid PVC Pipe & Fitting Compound", type: "Rigid", image: "/images/pvc/white.webp", text: "Rigid compounds for pipes, fittings and plumbing components.", tags: ["Pipes & Fittings", "Rigid"] },
  { name: "PVC Profile Compound", type: "Rigid", image: "/images/pvc/yellow.webp", text: "Extrusion compounds for window, door and industrial profiles.", tags: ["Profiles", "Extrusion"] },
];

// ---------- Testing laboratory ----------
// Total instruments in the lab (only some are photographed below).
export const labInstrumentCount = "40+";
export const labCategories = ["Sample Preparation", "Mechanical", "Thermal & Ageing", "Fire & Smoke"];

export const labEquipment = [
  { name: "Lab Two Roll Mill", category: "Sample Preparation", image: "/images/lab/two-roll-mill.webp", text: "Mixes and sheets compound batches for trials and test samples." },
  { name: "Hydraulic Press", category: "Sample Preparation", image: "/images/lab/hydraulic-press.webp", text: "Moulds uniform test plaques from compound under controlled heat and pressure." },
  { name: "Tensile Testing Machine", category: "Mechanical", image: "/images/lab/tensile.webp", text: "Measures tensile strength and elongation at break." },
  { name: "Shore D Durometer", category: "Mechanical", image: "/images/lab/durometer.webp", text: "Checks hardness of compounds and finished samples." },
  { name: "Hot Air Oven", category: "Thermal & Ageing", image: "/images/lab/hot-air-oven.webp", text: "Heat ageing and conditioning of samples at set temperatures." },
  { name: "Lab Four Cell Ageing Oven", category: "Thermal & Ageing", image: "/images/lab/ageing-oven.webp", text: "Independent cells for simultaneous air-ageing of different samples." },
  { name: "Hot Set Test Apparatus", category: "Thermal & Ageing", image: "/images/lab/hot-set.webp", text: "Hot-set elongation test for cable insulation materials." },
  { name: "Thermal Stability Test Apparatus", category: "Thermal & Ageing", image: "/images/lab/thermal-stability.webp", text: "Measures thermal stability of PVC compounds at high temperature." },
  { name: "Cooling Chamber", category: "Thermal & Ageing", image: "/images/lab/cooling-chamber.webp", text: "Low-temperature testing for cold flexibility and performance." },
  { name: "Critical Oxygen Index Tester", category: "Fire & Smoke", image: "/images/lab/oxygen-index.webp", text: "Oxygen index as per ASTM-2863 — the minimum oxygen needed to sustain burning." },
  { name: "Smoke Density Test Apparatus", category: "Fire & Smoke", image: "/images/lab/smoke-density.webp", text: "Measures smoke generated when a material burns." },
];
