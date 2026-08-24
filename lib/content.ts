import type {
  ApproachStep,
  Article,
  CoreService,
  NavItem,
  Solution,
  SolutionCategory,
  WhyChooseItem,
} from "@/types";

export const siteConfig = {
  name: "Axiom Egypt",
  legalName: "Axiom-Egypt",
  tagline: "Empowering Energy. Delivering Excellence.",
  description:
    "Axiom Egypt delivers integrated oil & gas solutions engineered for reliability, efficiency and operational excellence.",
  url: "https://www.axiomeg.com",
  locale: "en_US",
  email: "info@Axiomeg.com",
  phones: ["0227542566", "0227548295"],
  phone: "0227542566 - 0227548295",
  address: "8A/2, El Laselky Division, New Maadi, Cairo",
  addressSecondary: "Free Zone Suez, Suez Governorate",
  ctaLabel: "Request Consultation",
  ctaHref: "/contact",
  infoLabel: "Explore Solutions",
  logo: "/images/home/logo.webp",
  footerLogo: "/images/home/logo-footer.png",
  teamImage: "/images/home/team-axiom.jpeg",
  statsBg: "/images/slides/post-cover.jpg",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.221406234393!2d31.286321775487043!3d29.97306642194926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458395808bb1d85%3A0xe8fdfd4dde5d6a03!2sAxiom%20Egypt!5e0!3m2!1sen!2seg!4v1715327895945!5m2!1sen!2seg",
  mapUrl: "https://maps.app.goo.gl/JBdQYnr6fKedKcVG9",
  formAction: "https://formsubmit.io/send/44419b8a-ab67-4b94-b6ec-52c8e15d9c66",
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Production and Testing", href: "/services/production-and-testing-equipment" },
      { label: "Power Generation", href: "/services/power-generation-equipment" },
      { label: "Pumps & Maintenance", href: "/services/pump-solutions-maintenance-services" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "Well Testing", href: "/services/production-and-testing-equipment/well-testing-services" },
      { label: "Separation", href: "/services/production-and-testing-equipment/horizontal-test-separator" },
      { label: "Heating", href: "/services/production-and-testing-equipment/horizontal-line-heater-services" },
      { label: "Compression", href: "/services/power-generation-equipment/gas-compressor-solutions" },
    ],
  },
  { label: "Industries", href: "/industries" },
  { label: "Projects", href: "/projects" },
  { label: "Technology", href: "/technology" },
  { label: "Articles", href: "/articles" },
  { label: "Contact Us", href: "/contact" },
];

export const footerColumns = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Why choose us", href: "/why-choose-us" },
    { label: "Articles", href: "/articles" },
    { label: "Contact Us", href: "/contact" },
  ],
  services: [
    { label: "Production and Testing", href: "/services/production-and-testing-equipment" },
    { label: "Power Generation", href: "/services/power-generation-equipment" },
    { label: "Pumps & Maintenance", href: "/services/pump-solutions-maintenance-services" },
  ],
  solutions: [
    { label: "Well Testing", href: "/services/production-and-testing-equipment/well-testing-services" },
    { label: "Separation", href: "/services/production-and-testing-equipment/horizontal-test-separator" },
    { label: "Early Production Facilities", href: "/services/production-and-testing-equipment/early-production-facilities-epfs" },
    { label: "Compression", href: "/services/power-generation-equipment/gas-compressor-solutions" },
  ],
  industries: [
    { label: "Oil & Gas", href: "/industries" },
    { label: "Petrochemicals", href: "/industries" },
    { label: "Power", href: "/industries" },
  ],
};

export const footerSections = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact Us", href: "/contact" },
];

export const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/axiomegypt1/" },
  { label: "YouTube", href: "https://www.youtube.com/channel/UCFykSCdLnJAq6UDBb8IF2Tw" },
];

export const heroSlides = [
  {
    eyebrow: "Engineering Performance",
    title: "Empowering Energy. Delivering Excellence.",
    text: "Axiom Egypt delivers integrated oil & gas solutions engineered for reliability, efficiency and operational excellence.",
    image: "/images/slides/slide01.jpg",
  },
  {
    eyebrow: "Petroleum Services",
    title: "Expert Support. Field-Ready Delivery.",
    text: "From maintenance to consultancy and management, we have the expertise and resources to support all aspects of your petroleum operations.",
    image: "/images/slides/slide03.jpg",
  },
  {
    eyebrow: "Production Testing",
    title: "Well Testing. Measured Results.",
    text: "Customized well testing packages with separators, choke manifolds and trailer-mounted equipment for land operations.",
    image: "/images/slides/post-cover.jpg",
  },
  {
    eyebrow: "Trusted Partner",
    title: "The Right Team. The Right Time.",
    text: "A professional team that has proved itself since day one with clients and partners across petroleum operations.",
    image: "/images/home/team-axiom.jpeg",
  },
];

export const homepageStats = [
  { value: 30, suffix: "+", label: "Years of Experience" },
  { value: 25, suffix: "+", label: "Expert Engineers" },
  { value: 9, suffix: "+", label: "Global Clients" },
  { value: 100, suffix: "+", label: "Projects Completed" },
];

export const whatWeDo = [
  {
    title: "Well Testing",
    text: "Client-centric well testing with accurate oil, gas and water measurement.",
    href: "/services/production-and-testing-equipment/well-testing-services",
    image: "/images/solutions/well-testing.jpg",
  },
  {
    title: "Separation Solutions",
    text: "High-efficiency horizontal test separators for three-phase well output.",
    href: "/services/production-and-testing-equipment/horizontal-test-separator",
    image: "/images/solutions/separator.jpg",
  },
  {
    title: "Heating Solutions",
    text: "Horizontal line heaters that keep well streams at the right temperature.",
    href: "/services/production-and-testing-equipment/horizontal-line-heater-services",
    image: "/images/solutions/heater.jpg",
  },
  {
    title: "Compression Solutions",
    text: "Gas compressors from 85 HP to 10,000 HP for onshore and offshore use.",
    href: "/services/power-generation-equipment/gas-compressor-solutions",
    image: "/images/solutions/compressor.jpg",
  },
];

export const featuredProjects = [
  {
    title: "Well Testing Package",
    location: "Middle East",
    image: "/images/solutions/trailer.png",
    href: "/projects",
  },
  {
    title: "EPF Project",
    location: "North Africa",
    image: "/images/solutions/epf.jpg",
    href: "/projects",
  },
  {
    title: "Gas Compression Project",
    location: "Egypt",
    image: "/images/solutions/compressor.jpg",
    href: "/projects",
  },
];

export const partnerLogos = [
  "/images/brand/1.png",
  "/images/brand/2.png",
  "/images/brand/3.png",
  "/images/brand/4.png",
];

export const coreServices: CoreService[] = [
  {
    slug: "maintenance-services",
    title: "Maintenance Services",
    summary:
      "Axiom set the bar high for other petroleum services' competitors as we provide Preventive, Predictive, and Corrective Maintenance for all disciplines.",
    href: "/services/pump-solutions-maintenance-services/maintenance-services",
    icon: "/images/icon/maintenance.png",
  },
  {
    slug: "rig-inspections",
    title: "Rig inspections",
    summary:
      "Gamma emitter sources are used in multiphase flow meters technology at the platform of oil and gas production facilities, and transmitted level gauges for tanks in refineries.",
    href: "/contact",
    icon: "/images/icon/oil-rig.png",
  },
  {
    slug: "consultancy-management",
    title: "Consultancy & Management services",
    summary:
      "We provide all the winning insights for all drilling operation processes and supply full management through our Roustabout, Expertise rig managers and Highly qualified supervisors.",
    href: "/about",
    icon: "/images/icon/consultant.png",
  },
];

export const categories: SolutionCategory[] = [
  {
    slug: "production-and-testing-equipment",
    title: "Production and Testing Equipment",
    summary:
      "Comprehensive range of equipment and services for production and testing needs in the oil and gas industry. From test separators and well testing services to horizontal line heaters and early production facilities, we provide solutions to ensure efficient and reliable operations.",
    image: "/images/solutions/separator.jpg",
  },
  {
    slug: "power-generation-equipment",
    title: "Power Generation Equipment",
    summary:
      "Explore Axiom Egypt's comprehensive power generation equipment solutions for efficient and reliable energy production. From diesel generators to air compressors, our equipment ensures seamless operation in various industrial applications.",
    image: "/images/solutions/diesel.jpg",
  },
  {
    slug: "pump-solutions-maintenance-services",
    title: "Pump Solutions and Maintenance Services",
    summary:
      "Axiom provides comprehensive pump solutions and maintenance services tailored to your needs. From pump selection to ongoing maintenance, trust us for reliable and efficient operations across various industries.",
    image: "/images/solutions/pumps.jpg",
  },
];

export const solutions: Solution[] = [
  {
    slug: "horizontal-test-separator",
    category: "production-and-testing-equipment",
    title: "High-Efficiency Horizontal Test Separator",
    image: "/images/solutions/separator.jpg",
    summary:
      "Engineered for precise separation and measurement of oil, water, and gas from well outputs. Ideal for gas cleaning and well testing in various conditions.",
    description:
      "Discover Axiom Egypt's high-efficiency horizontal test separator, engineered for precise separation and measurement of oil, water, and gas from well outputs. Ideal for gas cleaning and well testing in various conditions.",
    features: [
      {
        title: "Three-phase measurement",
        text: "Separates well fluids into oil, water and gas streams with control valves, meters and safety relief on the vessel and inlet manifold.",
      },
      {
        title: "Field conditions",
        text: "Suitable for gas cleaning in stimulated wells, new completions, and well testing in low- or high-volume wells, including corrosive or sweet wells.",
      },
      {
        title: "Package integration",
        text: "Specified in our trailer-mounted well test packages as a 1440 PSI, 3-phase test separator ready for land operations.",
      },
    ],
  },
  {
    slug: "well-testing-services",
    category: "production-and-testing-equipment",
    title: "Well Testing Services",
    image: "/images/solutions/well-testing.jpg",
    summary:
      "Innovative and client-centric well testing services, featuring customized solutions, cutting-edge technology, and reliable equipment for precise measurements and efficient operations.",
    description:
      "At Axiom Egypt, our Well Testing Services are at the forefront of the petroleum services industry, offering a comprehensive range of solutions tailored to meet the diverse needs of the oil and gas sector. Our commitment to excellence, innovation, and client-centric approaches sets us apart as a trusted partner in delivering specialized well testing services.",
    features: [
      {
        title: "Customized Solutions",
        text: "Each project is unique. We craft bespoke solutions tailored to your specific operational requirements.",
      },
      {
        title: "Precision and Efficiency",
        text: "We prioritize quality in every aspect of our services, ensuring precision, efficiency, and unwavering reliability.",
      },
      {
        title: "Cutting-Edge Technology",
        text: "Axiom Egypt integrates the latest trends and advancements into well testing, driving efficiency and productivity.",
      },
      {
        title: "Reliable Equipment",
        text: "Services are equipped with top-of-the-line pipelines, drilling facilitations, trucks, tools, and equipment.",
      },
      {
        title: "Safety and Compliance",
        text: "We adhere to international performance standards and prioritize safety in all operations.",
      },
      {
        title: "Versatility",
        text: "Adaptable for gas cleaning in stimulated wells, new completions, or well testing in low- or high-volume wells and corrosive or sweet wells.",
      },
      {
        title: "Third-Party Certification",
        text: "Our services are capable of third-party certification for added validation against industry standards.",
      },
      {
        title: "Accurate Measurement",
        text: "Accurate measurement of oil, gas, and water volumes for precise analysis and decision-making.",
      },
      {
        title: "Compact and Portable Design",
        text: "Designed for quick installation and conforming to ISO specifications for improved portability.",
      },
      {
        title: "Modular Design",
        text: "Featuring a box beam container for improved portability, flexibility and scalability.",
      },
    ],
    extraTitle: "Choke manifold for well testing",
    extraText:
      "A choke manifold plays a crucial role in well testing services by empowering operators with progressive control over the wellstream. This essential component enables manual, powered, or fixed manipulation of the flow by adjusting or selecting an orifice. Critical flow management remains pivotal, ensuring stable flow rates even during choke size alterations. The choke manifold's design maintains a consistent flow rate dependent solely on upstream pressure and choke settings, independent of downstream pressure changes.",
    extraFeatures: [
      {
        title: "Dual Choke System",
        text: "Incorporates an adjustable choke for flexible wellbore cleanup rates and a positive choke for precise flow control during varied test procedures.",
      },
      {
        title: "Full-Bore Design",
        text: "Offers a complete bypass capability, allowing uninterrupted flow control through the manifold.",
      },
      {
        title: "Ease of Maintenance",
        text: "Designed for simplified maintenance during operations, reducing rig time and overall testing costs.",
      },
      {
        title: "Industry Compliance",
        text: "Meets stringent industry standards (API 6A) and can be third-party certified upon request.",
      },
    ],
  },
  {
    slug: "horizontal-line-heater-services",
    category: "production-and-testing-equipment",
    title: "Horizontal Line Heater Services",
    image: "/images/solutions/heater.jpg",
    summary:
      "Cutting-edge Horizontal Line Heater services designed to optimize temperature control and enhance the performance of well streams.",
    description:
      "Horizontal Line Heaters are vital components in the oil and gas industry, playing a crucial role in maintaining optimal temperatures within well streams. At Axiom Egypt, we offer cutting-edge Horizontal Line Heater services designed to enhance the efficiency and performance of your operations.",
    features: [
      {
        title: "Temperature Regulation",
        text: "Expertly designed to maintain optimal temperatures within well streams and prevent fluctuations during pressure reduction.",
      },
      {
        title: "Enhanced Performance",
        text: "Counteracts abrupt temperature drops caused by pressure-reducing chokes and supports gas transmission lines and crude oil flow.",
      },
      {
        title: "Versatility",
        text: "Adaptable to specific heating requirements in different operational scenarios.",
      },
      {
        title: "Efficiency",
        text: "High performance and energy efficiency for cost-effective operations and improved productivity.",
      },
      {
        title: "Safety Features",
        text: "Advanced safety features ensure reliable heating operations that adhere to industry standards.",
      },
      {
        title: "Compact Design",
        text: "Easy installation and seamless integration into existing systems, minimizing downtime.",
      },
      {
        title: "Customization Options",
        text: "Custom heating setups for unique well streams and operational environments.",
      },
    ],
  },
  {
    slug: "trailer-mounted-well-test-package",
    category: "production-and-testing-equipment",
    title: "Trailer Mounted Well Test Package",
    image: "/images/solutions/trailer.png",
    summary:
      "Comprehensive trailer-mounted well test package for land-based operations, designed for easy mobilization and swift rig-up.",
    description:
      "Axiom Egypt offers a versatile and comprehensive Trailer Mounted Well Test Package designed for land-based operations. These packages are specifically crafted to facilitate efficient well testing, housed within trailers. This design ensures easy mobilization and swift rig-up at the well site, enhancing operational flexibility.",
    features: [
      {
        title: "ESD System",
        text: "ESD control panel, Surface Safety Valve (SSV) variants (5K/10K/15K), High/Low-Pressure pilots, pneumatic SS pipes, hydraulic hoses, and emergency pushbuttons.",
      },
      {
        title: "Data Header (5K/10K/15K)",
        text: "Lateral fittings for pressure, temperature, sand monitoring, sampling, chemical injection and related flow parameters.",
      },
      {
        title: "Choke Manifold (5K/10K/15K)",
        text: "4-valve or 5-valve assembly with one positive and one adjustable choke, plus High/Low-Pressure Pilots.",
      },
      {
        title: "Test Separator (1440 PSI, 3-Phase)",
        text: "Separates well fluids into two/three/four phases, furnished with control valves, meters, ball valves and relief valves on the vessel and inlet manifold.",
      },
      {
        title: "Surge Tank (50 PSI)",
        text: "Safety valves, plus a pipe rack with essential pipes and necessary crossovers (3” & 4” 602 Pipes).",
      },
      {
        title: "Electrical Transfer Pump",
        text: "Capable of handling 3000 BPD @ 80 PSI.",
      },
      {
        title: "Test Pump",
        text: "Maximum capacity of up to 10k PSI, with pressure gauges, valve sets and essential instruments.",
      },
      {
        title: "Utility Trailer",
        text: "Lab and office cabin, diesel generator, air compressor, ex-proof lights, distribution panels and toolboxes.",
      },
    ],
  },
  {
    slug: "early-production-facilities-epfs",
    category: "production-and-testing-equipment",
    title: "Early Production Facilities (EPFs)",
    image: "/images/solutions/epf.jpg",
    summary:
      "Modular Early Production Facilities designed to expedite oil and gas production commencement with rapid engineering and cost-effectiveness.",
    description:
      "Axiom Egypt offers an innovative solution in the form of Early Production Facilities (EPFs) to expedite the commencement of oil and gas production for our clients. Our EPFs are meticulously designed modular systems that provide a swift pathway to commercial benefits. These facilities are strategically designed to enable our clients to kickstart oil and gas production efficiently, saving valuable time and resources.",
    features: [
      {
        title: "Rapid Engineering",
        text: "Designed with a focus on standardization, enabling quick turnaround from concept to deployment.",
      },
      {
        title: "Modular Design",
        text: "Process skids enhance transportation efficiency and facilitate swift mobilization and demobilization.",
      },
      {
        title: "Customer Performance Guarantee",
        text: "Built to meet rigorous performance standards so production goals can be met reliably.",
      },
      {
        title: "Cost-Effectiveness",
        text: "Low CAPEX and OPEX without compromising quality or performance.",
      },
      {
        title: "Tailored Solutions",
        text: "Customized for marginal field development or rapid monetization of assets.",
      },
    ],
  },
  {
    slug: "diesel-generator-services",
    category: "power-generation-equipment",
    title: "Diesel Generator Services",
    image: "/images/solutions/diesel.jpg",
    summary:
      "Comprehensive diesel generator services including maintenance, repair and overhaul, backed by over 30 years of expertise.",
    description:
      "At Axiom Egypt, we specialize in providing a comprehensive range of diesel generator services, backed by over 30 years of expertise in Maintenance, Repair, and Operations (MRO). Our extensive inventory includes both new and used generators, ensuring that our clients have access to reliable power solutions tailored to their specific needs.",
    features: [
      {
        title: "Generator Maintenance and Overhaul",
        text: "Scheduled labor overhaul activities include oil and filter changes, valve lash adjustments, injector testing, piston ring replacements, and complete overhauls.",
      },
      {
        title: "Preventative Maintenance System (PM)",
        text: "Customized PM systems for each generator in the field to prevent unexpected downtime.",
      },
      {
        title: "Stock Control",
        text: "Essential spare parts are kept ready for timely maintenance and repair.",
      },
      {
        title: "Work Instruction Procedures",
        text: "Installed procedures streamline servicing and keep consistency across generators.",
      },
      {
        title: "Troubleshooting",
        text: "On-site collaboration to identify and resolve issues quickly, minimizing downtime.",
      },
      {
        title: "Spare Parts Procurement",
        text: "Strategic procurement to keep generator equipment functional and reduce unexpected failures.",
      },
    ],
    specs: [
      { label: "Standby ratings", value: "150 kW to 1000 kW" },
      { label: "Frequency", value: "60 Hz" },
      { label: "Voltage options", value: "220V, 240V, 440V, 480V, 600V" },
    ],
  },
  {
    slug: "gas-compressor-solutions",
    category: "power-generation-equipment",
    title: "Gas Compressor Solutions",
    image: "/images/solutions/compressor.jpg",
    summary:
      "Tailored gas compressor solutions with electric motor or gas engine configurations for safety, reliability and efficiency.",
    description:
      "At Axiom, we are dedicated to providing integrated compression solutions tailored to meet the specific needs of our customers. Our comprehensive range of gas compressors, available with electric motor or gas engine configurations, ensures the safety and reliability of operations across various industries.",
    features: [
      {
        title: "Versatile Range",
        text: "Available for onshore and offshore applications, spanning from 85 HP to 10,000 HP.",
      },
      {
        title: "Diverse Application Expertise",
        text: "Experience across oil and gas fields and chemical plants, aligned with global industry standards.",
      },
      {
        title: "Engineering Services",
        text: "Support for gas collection stations, gas supply, and underground gas storage facilities.",
      },
    ],
    specs: [
      { label: "Ambient temperature", value: "-140°F to 122°F (-60°C to +50°C)" },
      { label: "Pressure range", value: "0 to 8990 psi (0 to 61.98 MPa)" },
      { label: "Power range", value: "10 HP to 10,000 HP (7.46 kW to 7457 kW)" },
      { label: "Process gases", value: "Natural gas, air, hydrogen, ethane, nitrogen, propane, CO2, BOG and more" },
      { label: "Mounting", value: "Automotive, stationary, mobile and pile mounting" },
      { label: "Applications", value: "Gas injection, collection, associated gas utilization, fuel gas injection, CNG" },
    ],
  },
  {
    slug: "pump-solutions",
    category: "pump-solutions-maintenance-services",
    title: "Advanced Pump Solutions",
    image: "/images/solutions/pumps.jpg",
    summary:
      "Distinguished pump portfolio featuring GARDNER DENVER PZ-8 and NATIONAL OIL WELL A850-PT for operational efficiency and reliability.",
    description:
      "Axiom Egypt takes pride in presenting a distinguished Pump Portfolio, featuring industry-leading models such as the GARDNER DENVER PZ-8 and NATIONAL OIL WELL A850-PT. These pumps exemplify our commitment to providing cutting-edge solutions that meet and exceed the dynamic demands of the industry.",
    features: [
      {
        title: "GARDNER DENVER PZ-8",
        text: "Precision engineering for challenging oil and gas environments, with 5,000 psi maximum pressure and 19,885 bpd pumping rate.",
      },
      {
        title: "NATIONAL OIL WELL A850-PT",
        text: "850 BHP maximum input and 21,000 bpd pumping rate, integrating advanced technology with robust design.",
      },
    ],
    specs: [
      { label: "PZ-8 maximum input", value: "750 BHP (559 kW)" },
      { label: "PZ-8 RPM", value: "145 RPM" },
      { label: "PZ-8 stroke length", value: "8” (203 mm)" },
      { label: "PZ-8 pump weight", value: "19,500 lbs. (8,850 kg) average" },
      { label: "PZ-8 gear ratio", value: "4.5 : 1" },
      { label: "PZ-8 maximum pressure", value: "5,000 psi" },
      { label: "PZ-8 pumping rate", value: "19,885 bpd" },
      { label: "A850-PT maximum input", value: "850 BHP (633 kW)" },
      { label: "A850-PT RPM", value: "160 RPM" },
      { label: "A850-PT stroke length", value: "9” (228 mm)" },
      { label: "A850-PT pump weight", value: "34,669 lbs. (17,759 kg) average" },
      { label: "A850-PT gear ratio", value: "4.48 : 1" },
      { label: "A850-PT maximum pressure", value: "3,500 psi" },
      { label: "A850-PT pumping rate", value: "21,000 bpd" },
    ],
  },
  {
    slug: "maintenance-services",
    category: "pump-solutions-maintenance-services",
    title: "Expert Maintenance Services",
    image: "/images/solutions/maintenance.jpg",
    summary:
      "Expert maintenance services designed to ensure optimal performance, longevity and safety of petroleum equipment.",
    description:
      "At Axiom, we understand the critical importance of reliable and well-maintained equipment in the oil and gas industry. That's why we offer a comprehensive range of Maintenance Services designed to ensure the optimal performance, longevity, and safety of your petroleum equipment. Our commitment to excellence is unwavering, and our dedicated team of professionals is ready to deliver top-tier services that exceed your expectations.",
    features: [
      {
        title: "Precision Overhauls",
        text: "Rigorous inspections and precision overhauls of draw works, blowout preventers (BOP), travelling blocks, swivels, torque converters, top-drives, and crowns.",
      },
      {
        title: "Certified Processes",
        text: "Certified in accordance with COC and CFO API standard Q1, enhancing safety and reliability.",
      },
      {
        title: "Advanced Techniques",
        text: "State-of-the-art equipment and the latest servicing methodologies to address maintenance challenges.",
      },
      {
        title: "Comprehensive Solutions",
        text: "Routine maintenance, preventive inspections or emergency repairs, tailored to minimize downtime and extend asset life.",
      },
      {
        title: "Commitment to Excellence",
        text: "When you choose Axiom Maintenance Services, your equipment operates at peak efficiency, with longevity and reliability as guiding principles.",
      },
    ],
  },
];

export const whyChoose: WhyChooseItem[] = [
  {
    title: "Punctual Delivery Time",
    text: "Punctual delivery is foundational to how we run our business. We use consistent standards, practices and behaviors to always improve our performance as we aspire to do the right thing.",
  },
  {
    title: "Smart Technology",
    text: "Backed by our sophisticated, proprietary software, we offer an advantage over other companies.",
  },
  {
    title: "Professional Team",
    text: "A strong team of experts that proved themselves since day one with our clients and partners all the way.",
  },
  {
    title: "Easy & Affordable",
    text: "All you need is just one click to start a whole stress-free journey where you have the right team at the right time and the right place.",
  },
];

export const leaderQuote = {
  text: "I am pleased to see that we are well on our way to meeting our goals for the year and making improvements in every area. We are continuing to build on our strong foundation of excellent customer service and unparalleled performance. Our company is characterized by qualitative products and services, professional skills and team spirit. In order to provide maximum customer satisfaction, we strive to develop according to the demands of the market and market trends.",
  author: "Mr Mohamed Saber",
};

export const approach: ApproachStep[] = [
  {
    number: "01",
    title: "Our Approach",
    text: "Our approach is distinctly innovative. Axiom-Egypt's success lies in its commitment to provide the right environment, tools and logistics with professionalism and expertise, and in identifying strongly with their outcome. This sense of responsibility means we always strive to add value and are proactive in solving problems and in adopting client procedures.",
  },
  {
    number: "02",
    title: "Cutting-edge Technology",
    text: "We employ cutting-edge technology and use our in-depth expertise to help our partners become more efficient. We specially select teams for every project, to ensure each client gets the right caring of the people who have the most relevant technical skills, operation and management skills and knowledge. We constantly seek new ways to increase client visibility and brand value.",
  },
  {
    number: "03",
    title: "We Listen",
    text: "Nobody understands your processes better than you do. Therefore, by working in partnership with our valued clients, we can provide unrivalled performance. Plus, trouble-free operation and minimal ownership or hire costs.",
  },
  {
    number: "04",
    title: "We Deliver",
    text: "At Axiom-Egypt, we are committed to delivering exceptional results for our clients in the petroleum industry. We understand the importance of providing the right environment, tools, and logistics in order to ensure success, and we are dedicated to identifying strongly with our clients' outcomes. Our team of professionals possesses a strong sense of responsibility, which drives us to always strive for excellence and add value for our clients. We are proactive in addressing any issues that may arise and are willing to adopt client procedures in order to achieve the best possible results.",
  },
];

export const stats = [
  {
    value: 0,
    suffix: "",
    label: "Projects Completed",
    text: "We are always proud to share the projects we have worked on, and we would gladly invite you to contact us for further information.",
    icon: "/images/icon/projects.png",
  },
  {
    value: 9,
    suffix: "",
    label: "Happy Clients",
    text: "When a client reports being satisfied and happy with the work we have done it is because we exceeded expectations and we have our jobs well.",
    icon: "/images/icon/clients.png",
  },
  {
    value: 25,
    suffix: "",
    label: "Trained Engineers",
    text: "Our engineers draws on years of accumulated lessons learned in the petroleum services felid",
    icon: "/images/icon/worker.png",
  },
];

export const quoteOptions = [
  "Maintenance Services",
  "Offshore Scaffolding",
  "LP/NG Techniques",
  "Drilling Tubular inspection",
  "Rig inspections with radiations",
  "Other",
];

export const blogIntro =
  "Stay updated on the latest trends and insights in petroleum services. Explore industry news, analyses and expert opinions to fuel your knowledge and stay ahead in the energy sector.";

export const industries = [
  {
    title: "Oil & Gas",
    text: "Upstream, midstream and downstream facilities requiring testing, production and maintenance support.",
    image: "/images/slides/slide01.jpg",
  },
  {
    title: "Petrochemicals",
    text: "Process units and reliability programs for continuous industrial plants.",
    image: "/images/slides/slide03.jpg",
  },
  {
    title: "Power Generation",
    text: "Diesel generation and compression equipment for energy and utilities operators.",
    image: "/images/solutions/diesel.jpg",
  },
  {
    title: "Marine & Offshore",
    text: "Platform and coastal terminal support with brownfield constraints.",
    image: "/images/solutions/compressor.jpg",
  },
];

export const technologyItems = [
  {
    title: "Smart Technology",
    text: "Backed by sophisticated proprietary software, we offer an advantage over other companies.",
  },
  {
    title: "API-aligned processes",
    text: "Maintenance processes certified in accordance with COC and CFO API standard Q1.",
  },
  {
    title: "Choke & measurement control",
    text: "API 6A choke manifolds and accurate oil, gas and water measurement.",
  },
  {
    title: "Modular production systems",
    text: "Early Production Facilities designed for rapid engineering and low CAPEX/OPEX.",
  },
];

export const articles: Article[] = [
  {
    slug: "well-testing-measurement-accuracy",
    title: "Why measurement accuracy decides a well test",
    excerpt:
      "Oil, gas and water volumes only help operators if the separator, choke and meters stay stable through the test window.",
    category: "Well Testing",
    date: "12 Aug 2026",
    readTime: "4 min",
    image: "/images/solutions/well-testing.jpg",
    paragraphs: [
      "A well test is a decision tool. Operators use it to size facilities, confirm completion performance and plan early production. If oil, gas and water volumes drift, every later commercial call is weaker.",
      "Axiom Egypt builds client-centric well testing packages around three-phase measurement, API 6A choke manifolds and portable equipment that can be certified by a third party. The choke keeps the wellstream stable while the separator and meters do the accounting.",
      "For land operations, a trailer-mounted package shortens rig-up time and keeps the same measurement train from well to well. That repeatability is what turns a field test into reliable data.",
    ],
  },
  {
    slug: "early-production-facilities-capex",
    title: "When an EPF is the faster path to first oil",
    excerpt:
      "Modular early production facilities reduce CAPEX and OPEX while operators learn the reservoir before a full plant is committed.",
    category: "Production",
    date: "28 Jul 2026",
    readTime: "5 min",
    image: "/images/solutions/epf.jpg",
    paragraphs: [
      "Full production plants take years and lock capital before the reservoir is fully understood. An Early Production Facility lets operators produce, measure and refine the process design with a smaller footprint.",
      "Axiom Egypt EPF packages are engineered for rapid deployment, low CAPEX/OPEX and modular expansion. Separation, heating and utilities can be added as the well stock grows.",
      "The same field discipline used on well test separators and line heaters carries into EPF design: stable flow, safe relief and equipment that can move when the campaign ends.",
    ],
  },
  {
    slug: "api-q1-maintenance-petroleum-assets",
    title: "Maintenance that stays accountable to API Q1",
    excerpt:
      "Preventive, predictive and corrective work only protects uptime when the process is certified and repeatable across disciplines.",
    category: "Maintenance",
    date: "9 Jul 2026",
    readTime: "4 min",
    image: "/images/solutions/pumps.jpg",
    paragraphs: [
      "Petroleum assets fail in the field, not in the workshop. Axiom Egypt provides preventive, predictive and corrective maintenance across disciplines, with processes certified to COC and CFO API standard Q1.",
      "That standard matters because operators need the same quality trail on pumps, generation and testing equipment. A one-off repair without documentation is a short-term fix.",
      "Pairing maintenance with the right pump package — from Gardner Denver PZ-8 to National Oilwell A850-PT class units — keeps production moving instead of waiting on a replacement campaign.",
    ],
  },
  {
    slug: "gas-compression-onshore-selection",
    title: "Selecting gas compression for onshore duty",
    excerpt:
      "From 85 HP to 10,000 HP, compressor choice is a field decision: gas rate, location and how quickly the package can be mobilised.",
    category: "Power",
    date: "21 Jun 2026",
    readTime: "3 min",
    image: "/images/solutions/compressor.jpg",
    paragraphs: [
      "Compression is often the difference between a well that flows to sales and a well that waits. Axiom Egypt supplies gas compressors from 85 HP to 10,000 HP for onshore and offshore service.",
      "Selection starts with rate and pressure, then with access: skid or trailer, utilities, and how the package sits next to separators and heaters already on site.",
      "The same team that runs well testing and power generation can keep compression inside one operating envelope — fewer interfaces, clearer responsibility.",
    ],
  },
];

export const footerLine =
  "We always strive to add value and are proactive in solving problems and in adopting client procedures.";

export function getCategory(slug: string) {
  return categories.find((item) => item.slug === slug);
}

export function getSolutionsByCategory(slug: string) {
  return solutions.filter((item) => item.category === slug);
}

export function getSolution(category: string, slug: string) {
  return solutions.find((item) => item.category === category && item.slug === slug);
}

export function solutionHref(item: Solution) {
  return `/services/${item.category}/${item.slug}`;
}

export function getArticle(slug: string) {
  return articles.find((item) => item.slug === slug);
}
