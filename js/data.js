const IDENTITY = {
  name: 'Nafee Karim',
  email: 'nafkarim007@gmail.com',
  linkedin: 'https://linkedin.com/in/nafkarim',
  linkedinLabel: 'linkedin.com/in/nafkarim',
  resume: 'assets/resume/Nafee_Karim_Resume.pdf',
  positioning: 'B.S. in Mechanical Engineering/ Business Minor from UT Austin'
};

const ABOUT = {
  quote: "My grandfather was one of the chief engineers for the Bangladesh Railway. Growing up with him all my life really influenced me in pursuing a degree in Mechanical Engineering.",
  paragraphs: [
    "I grew up hearing stories about my grandfather keeping trains moving across Bangladesh as one of the railway's chief engineers. The idea that engineering could build things that actually mattered, at scale, stuck with me early and never really left.",
    "That's grown into a focus on manufacturing, process engineering, and supply chain, and specifically, right now, on where those disciplines meet AI infrastructure, physical AI, and semiconductors. The same fundamentals my grandfather worked with (precision, throughput, reliability) are what decide whether the most ambitious hardware being built today actually ships."
  ]
};

const EXPERIENCE = [
  {
    company: 'Self-Employed',
    role: 'Forward Deployed Engineer (FDE)',
    location: 'Houston, TX',
    dates: 'Aug 2026 – Present',
    present: true,
    bullets: [
      'Working as an FDE for local businesses: shadowing their day-to-day operations and workflows to find bottlenecks.',
      'Building lightweight custom tools to automate manual steps and make their teams more efficient.'
    ]
  },
  {
    company: 'Eternitie',
    companyNote: '(Formerly Frat OS)',
    logo: 'assets/logos/eternitie.png',
    role: 'Co-Founder',
    location: 'Austin, TX',
    dates: 'Dec 2025 – Present',
    present: true,
    metric: '7 paying orgs · 1,000+ users · $15K+ MRR',
    link: { href: 'https://eternitie.app/', label: 'Visit eternitie.app' },
    linkNote: "Don't believe me, check it out!",
    bullets: [
      'Co-built and launched an alumni operations SaaS platform; onboarded 7 paying organizations containing 1,000+ end users and achieved $15K+ monthly recurring revenue (MRR) through a subscription and implementation-based revenue model.',
      'Used Claude / Claude Code and agentic workflows daily to automate engineering and ops work across a live SaaS platform, compressing time-to-ship on new features.',
      'Translated user feedback and competitive research into product requirements and prioritized roadmap decisions; ran pricing and market analysis to inform expansion planning.',
      'Conducted market research and managed the full growth funnel (outreach → demo → onboarding); implemented product across 15 organizations while prioritizing features to support expansion to 50+ organizations.'
    ]
  },
  {
    company: 'Black Diamond Networks',
    logo: 'assets/logos/black-diamond.png',
    role: 'Associate Account Executive Intern',
    location: 'Austin, TX',
    dates: 'Sept 2025 – Dec 2025',
    bullets: [
      'Built and managed a pipeline of 150+ prospective accounts by engaging 100+ hiring managers weekly through structured outreach campaigns, converting 3% into active client engagements via disciplined needs discovery and relationship development.',
      'Executed search delivery alongside account executives and recruiting teams across 100+ concurrent client searches, coordinating 5–10 candidate submissions per requisition and leveraging CRM tooling and LinkedIn sourcing across 50+ target accounts per week.',
      'Synthesized intake calls and discovery conversations into concise role requirement summaries and structured status updates for account managers.'
    ]
  },
  {
    company: 'Samsung Semiconductor',
    logo: 'assets/logos/samsung.svg',
    role: 'Systems and Process Engineering Intern',
    location: 'Austin, TX',
    dates: 'May 2025 – Aug 2025',
    bullets: [
      'Led consolidation of 15+ fragmented data sources into a unified dataset covering thousands of semiconductor tools site-wide, enabling comprehensive operational visibility and forming the data foundation for predictive maintenance planning across critical fabrication systems.',
      'Owned product implementation and migration of a CMMS platform, defining product requirements, roadmap milestones, dependencies, and acceptance criteria; managed cross-team migration of maintenance and tool-monitoring workflows while minimizing disruption to live wafer starts.',
      'Standardized spare-parts governance across 6 engineering teams by consolidating thousands of part codes and 250+ preventive maintenance (PM) plans; built Spotfire dashboards mapping PM plans to parts to forecast demand and reduce duplicate reorders and surprise stockouts.',
      'Analyzed 100+ reactive maintenance events using Pareto analysis and FMEA to identify 25+ recurring breakdown drivers; partnered with equipment engineers to design targeted preventive maintenance plans aimed at improving Mean Time Between Failures (MTBF).',
      'Partnered with Quality Engineers on 8D-style root-cause investigations for deviations and near-miss events, coordinating with vendors, planners, and tool owners to isolate failure drivers and reinforce SOP adherence.',
      'Performed CAD modeling and CFD analysis of data server enclosures cooled by Liebert CW CRAC units; evaluated airflow and thermal performance to recommend a ceiling height reduction, enhancing HVAC efficiency and mitigating heat stratification.'
    ]
  },
  {
    company: 'Qorvo',
    logo: 'assets/logos/qorvo.png',
    role: 'Process Engineering Intern',
    location: 'Richardson, TX',
    dates: 'May 2024 – Aug 2024',
    bullets: [
      'Led launch of an automated X-ray packaging inspection workflow for a high-demand RF device product generating over $150M in revenue; reduced unit inspection cost from $1.30 to $0.25 (81% reduction) while cutting manual labor time and laying groundwork for full automation.',
      'Diagnosed plasma tool yield excursions through cross-functional data analysis spanning equipment logs, process records, and test results; identified chamber inconsistencies and tuned equipment settings, resulting in a 1–2% yield improvement across affected tools.',
      'Standardized data-capture protocols for post-rework verification to keep process repairs and equipment tweaks consistently logged and traceable; proactively managed route changes from new die-attach applications to clear a significant PFD update backlog.',
      'Tracked down the original developers of an undocumented X-ray inspection tool all the way to the vendor’s engineers in Germany and set up calls to document how it worked. That became the foundation that made the automation project possible.'
    ]
  },
  {
    company: 'Texas Guadaloop',
    logo: 'assets/logos/guadaloop.png',
    role: 'Braking / Manufacturing Engineer',
    location: 'Austin, TX',
    dates: 'Feb 2023 – May 2024',
    metric: 'Student hyperloop competition team',
    bullets: [
      'Contributed to development of the pod’s primary braking mechanism for a hyperloop competition vehicle, using SolidWorks for detailed system design and running FEA simulations to validate structural integrity across operating and worst-case loading scenarios.',
      'Developed hands-on expertise in industrial machining including manual mills, CNC mills, and lathes, translating engineering designs into practical manufacturing processes.'
    ]
  }
];

const RESEARCH = [
  {
    group: 'Kovar Research Group',
    role: 'Undergraduate Research Assistant',
    dates: 'Sept 2024 – Present',
    bullets: [
      'Researching additive manufacturing of ceramics, focused on improving material density and thickness.',
      'Producing Aluminum and Zirconia pellets processed through high-temperature sintering and Selective Laser Flash Sintering (SLFS), then measuring changes in material properties.',
      'Setting up, calibrating, and maintaining lab equipment including SLFS and tensile testing machines.'
    ]
  },
  {
    group: 'Hutter Research Group',
    role: 'Undergraduate Research Assistant',
    dates: 'Sept 2023 – Dec 2023',
    bullets: [
      'Collaborated with a graduate student testing a prototype medical device for analyzing bio-fluids in the brain.',
      'Designed and 3D printed a custom container for controlled solution evaporation on a heat plate.',
      'Ran Ansys thermal and fluid simulations to optimize the process and improve testing accuracy.'
    ]
  }
];

const PROJECTS = [
  {
    title: 'Gym CMMS',
    hook: 'Maintenance management system for gym equipment',
    tags: ['Product', 'Full-Stack'],
    link: { href: 'https://gym-cmms.vercel.app/map', label: 'Open Live Demo' },
    bullets: [
      'Built a maintenance management app for gyms with Next.js, TypeScript, and Supabase, featuring a Three.js 3D floor map with live equipment status pins.',
      'Every machine gets a QR code for no-login problem reports that open work orders in a staff queue with assignment, status tracking, and a mobile technician view.'
    ]
  },
  {
    title: 'Teacher OS',
    hook: 'AI-powered education platform on Palantir AIP',
    tags: ['Product', 'AI / Data'],
    link: { href: 'https://www.youtube.com/watch?v=WpKvnrEQIXI', label: 'Watch the Demo' },
    bullets: [
      'Designed and implemented a product data model integrating behavioral and academic performance data from multiple sources into a unified structured foundation.',
      'Built interactive dashboards surfacing key performance metrics and behavioral trends so teachers and administrators could identify at-risk students and prioritize interventions with data instead of intuition.',
      'Implemented an AI-powered chatbot using Palantir AIP for natural-language interaction with structured product data, iterating on behavior using real user feedback.'
    ]
  },
  {
    title: '"Doggie Doo"',
    hook: 'Autonomous pet waste collection robot (Senior Design)',
    tags: ['Robotics', 'Hardware'],
    link: { href: 'assets/docs/Doggie-Doo-Senior-Design-Presentation.pdf', label: 'View Presentation' },
    bullets: [
      'Designed, built, and integrated an autonomous outdoor robotic prototype that detects, approaches, collects, and stores pet waste.',
      'Led development of a full robotic architecture: differential-drive platform, vision-based detection, bucket-and-sweeper collection mechanism, enclosed storage, and layered control.',
      'Performed torque sizing, drivetrain estimation, and FEA-backed structural evaluation, and designed a custom 3D-printed double-helical gear drivetrain, iterating after physical assembly revealed backlash and misalignment.',
      'Supported a YOLO-based computer vision pipeline and a Python/Arduino control stack with PID wheel-speed control, encoder feedback, and ultrasonic obstacle detection.'
    ]
  },
  {
    title: 'RecommendMe',
    hook: 'ML recommendation-score prediction engine',
    tags: ['ML / Data', 'Python'],
    bullets: [
      'Partnered with an early-stage startup to build a model predicting the 1–5 star rating any recommender would give any requestee.',
      'Trained an SVD collaborative-filtering model (Surprise library, 40 latent factors, 100 epochs) on 500 rating edges across 50 users, evaluated with MAE/RMSE/R² and rounded-star accuracy under an 80/20 split with 5-fold cross-validation.',
      'Solved cold-start with a Gradient Boosting regressor trained on TF-IDF features from free-text request notes.',
      'Built an interactive NetworkX/pyvis network visualization, then shipped the model as a Chrome extension that reads the live page and returns instant predicted scores plus suggested alternative recommenders.'
    ]
  },
  {
    title: 'Logistics Tour Optimization',
    hook: 'Weekly truck routing for a 1,000-truck fleet',
    tags: ['Ops Research', 'Python'],
    link: { href: 'projects/fleet-route-optimizer/', label: 'Open Live Demo' },
    bullets: [
      'Built an optimizer that assigns and sequences 5,000 loads across 1,000 trucks for a week, minimizing empty miles while respecting time windows, DOT hours-of-service rules, and getting every truck home.',
      'Solved with Large Neighborhood Search and simulated annealing, benchmarked against naive dispatch, and shipped a FastAPI + Leaflet dashboard for exploring routes and re-optimizing.'
    ]
  },
  {
    title: 'Brutus Bike Lock',
    hook: 'Smart bike security prototype',
    tags: ['IoT', 'Hardware'],
    bullets: [
      'Developed a prototype smart bike security system integrating an ESP32, an Arduino vibration sensor, and a camera module with Firebase cloud storage and a React Native mobile app for real-time tamper detection and push notification alerts.',
      'Designed and 3D printed a custom SolidWorks enclosure optimized for durability, weather protection, and ease of use.'
    ]
  }
];

const LEADERSHIP_FEATURED = {
  org: 'Muslim Professional Society (MPS)',
  role: 'Founding Team, Tech Director',
  dates: 'Apr 2025 – May 2026',
  bullets: [
    'Co-founded MPS, the largest Muslim interest professional organization at UT Austin, and scaled it to 75+ paid members in year one; built programming and corporate partnerships and launched consulting-style project teams delivering real client outcomes.',
    'Served as project manager for a local dental practice growth engagement. Scoped and prioritized 3 deliverables including AI workflow automation, SEO content generation, and a website chatbot targeting a 15% increase in new-patient acquisition.'
  ]
};

const LEADERSHIP_LIST = [
  { org: 'Alpha Lambda Mu Fraternity', role: 'Member', dates: 'Nov 2024 – Present' },
  { org: 'American Society of Mechanical Engineers', role: 'Member', dates: 'Aug 2022 – Present' },
  { org: 'Texas Convergent', role: 'IoT Build Member', dates: 'Aug 2022 – May 2023' },
  { org: 'University Orchestra', role: 'Member', dates: 'Aug 2022 – Apr 2023' }
];

const OUTSIDE = [
  {
    icon: '✈️',
    title: 'Travel',
    body: "I love traveling and I'm always looking for where to go next. I just wrapped up a month in Europe, visiting the UK, Hungary, Vienna, Bosnia, Slovenia, and Italy. I'm also big into nature and hiking whenever I get the chance.",
    countries: [
      { name: 'United Kingdom', flag: '🇬🇧', image: null },
      { name: 'Hungary', flag: '🇭🇺', image: null },
      { name: 'Vienna, Austria', flag: '🇦🇹', image: null },
      { name: 'Bosnia', flag: '🇧🇦', image: null },
      { name: 'Slovenia', flag: '🇸🇮', image: null },
      { name: 'Italy', flag: '🇮🇹', image: null },
      { name: 'Turkey', flag: '🇹🇷', image: null },
      { name: 'Saudi Arabia', flag: '🇸🇦', image: null }
    ]
  },
  {
    icon: '🍽️',
    title: 'Food',
    body: 'I love to eat. Follow me on Beli!',
    link: { href: 'https://beliapp.co/app/nafkream', label: 'Follow on Beli' }
  },
  {
    icon: '🐱',
    title: 'Off the Clock',
    body: "Outside of that, I'm usually at the gym, testing out a new cologne, or hanging out with my cat, Jilapi.",
    image: { src: 'assets/images/jilapi.jpg', alt: 'Jilapi the cat stretched out on a laptop keyboard' }
  }
];
