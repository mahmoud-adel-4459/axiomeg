import type {
  ApproachStep,
  Article,
  CoreService,
  GlobalAgent,
  IndustryItem,
  JobOpening,
  NavItem,
  PipelineGalleryCategory,
  PipelineGalleryItem,
  Solution,
  SolutionCategory,
  TrainingProgram,
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
  logo: "/images/home/axiom-logo-new.jpg",
  footerLogo: "/images/home/axiom-logo-dark-new.jpg",
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
    label: "Products & Services",
    href: "/services",
    children: [
      { label: "Production and Testing", href: "/services/production-and-testing-equipment" },
      { label: "Power Generation", href: "/services/power-generation-equipment" },
      { label: "Pumps & Maintenance", href: "/services/pump-solutions-maintenance-services" },
      { label: "Professional Training", href: "/services/training" },
      { label: "Conductor & Casing", href: "/services" },
      { label: "Casing Accessories", href: "/services" },
      { label: "Production Tubing", href: "/services" },
      { label: "Drilling Tubular", href: "/services" },
      { label: "Drilling Bits", href: "/services" },
      { label: "Well head & x-mass tree", href: "/services" },
      { label: "Down hole tools", href: "/services" },
      { label: "Repair production, wellhead & x-mass tree valves", href: "/services" },
      { label: "Pressure test equipment", href: "/services" },
      { label: "Repair BOP", href: "/services" },
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
  {
    label: "Projects",
    href: "/projects",
    children: [
      { label: "Featured Projects", href: "/projects" },
      { label: "Pipeline & Tubulars Gallery", href: "/pipelines" },
    ],
  },
  { label: "Technology", href: "/technology" },
  { label: "Global Agents", href: "/agents" },
  { label: "Careers", href: "/careers" },
  { label: "Articles", href: "/articles" },
  { label: "Contact Us", href: "/contact" },
];

export const footerColumns = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Why choose us", href: "/why-choose-us" },
    { label: "Global Agents", href: "/agents" },
    { label: "Careers", href: "/careers" },
    { label: "Articles", href: "/articles" },
    { label: "Contact Us", href: "/contact" },
  ],
  services: [
    { label: "Production and Testing", href: "/services/production-and-testing-equipment" },
    { label: "Power Generation", href: "/services/power-generation-equipment" },
    { label: "Pumps & Maintenance", href: "/services/pump-solutions-maintenance-services" },
    { label: "Professional Training", href: "/services/training" },
  ],
  solutions: [
    { label: "Well Testing", href: "/services/production-and-testing-equipment/well-testing-services" },
    { label: "Separation", href: "/services/production-and-testing-equipment/horizontal-test-separator" },
    { label: "Early Production Facilities", href: "/services/production-and-testing-equipment/early-production-facilities-epfs" },
    { label: "Compression", href: "/services/power-generation-equipment/gas-compressor-solutions" },
  ],
  industries: [
    { label: "Oil & Gas", href: "/industries" },
    { label: "Pipeline & Tubulars", href: "/pipelines" },
    { label: "Petrochemicals", href: "/industries" },
    { label: "Power Generation", href: "/industries" },
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
    text: "From Supply, maintenance to consultancy and management, we have the expertise and resources to support all aspects of your petroleum (oil & gas) operations.",
    image: "/images/slides/slide03.jpg",
  },
  {
    eyebrow: "Production Testing",
    title: "Well Testing. Measured Results.",
    text: "Customized well testing packages with separators, Tanks, choke manifolds and trailer-mounted equipment for land operations.",
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
  title: "Our Progress – CEO Letter",
  text: "I am pleased to see that we are well on our way to meeting our goals for the year and making improvements in every area. We are continuing to build on our strong foundation of excellent customer service and unparalleled performance. Our company is characterized by qualitative products and services, professional skills and team spirit. In order to provide maximum customer satisfaction, we strive to develop according to the demands of the market and market trends.",
  author: "Mohamed Saber",
  role: "Chief Executive Officer",
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

export const industries: IndustryItem[] = [
  {
    slug: "oil-and-gas",
    title: "Oil & Gas",
    tagline: "Integrated Wellhead, Production & Asset Integrity Solutions for Upstream & Midstream Operators",
    text: "Upstream, midstream and downstream facilities requiring precision well testing, early production systems, API rig inspections, and turnaround maintenance.",
    image: "/images/slides/slide01.jpg",
    heroImage: "/images/slides/slide01.jpg",
    overview:
      "Axiom Egypt delivers mission-critical technical support to exploration and production operators across the Western Desert, Gulf of Suez, and Nile Delta. From well testing and early production facilities (EPF) to heavy-duty rotating equipment overhauls and API 6A choke manifold servicing, we safeguard asset integrity and optimize recovery rates under extreme desert and sour gas conditions.",
    challenges: [
      {
        title: "High Pressure & Sour Gas (H2S) Corrosion",
        text: "Extreme wellbore pressures combined with aggressive corrosive constituents require metallurgy-matched API 6A hardware and continuous ultrasonic wall thickness monitoring.",
        stat: "Up to 15,000 PSI",
      },
      {
        title: "Rig Downtime & Unplanned Non-Productive Time (NPT)",
        text: "Remote drill sites in the Western Desert face costly delays when hoisting, BOP, or power generation components fail unexpectedly without pre-positioned spares.",
        stat: "-35% NPT Target",
      },
      {
        title: "Early Monetization of Remote Discoveries",
        text: "Operators need rapid tie-back and early production facilities to generate cash flow while permanent processing infrastructure is engineered and permitted.",
        stat: "90-Day Deployment",
      },
    ],
    solutions: [
      {
        title: "Well Production Testing & Data Acquisition",
        text: "High-accuracy multiphase flow meters, test separators, and data recording trailers for reservoir performance characterization.",
        badge: "Production Testing",
      },
      {
        title: "API-Certified Rig & Hoisting Inspections",
        text: "Comprehensive non-destructive examination (NDE), electromagnetic flaw detection, and API 4G mast structural certifications.",
        badge: "Rig Integrity",
      },
      {
        title: "Early Production Facilities (EPF) Deployment",
        text: "Skid-mounted modular separators, dehydration units, and crude storage systems engineered for rapid field deployment.",
        badge: "Modular EPF",
      },
      {
        title: "Emergency Rotating Equipment Overhaul",
        text: "24/7 technical dispatch for multi-stage centrifugal pumps, gas lift compressors, and diesel generator prime movers.",
        badge: "Mechanical Services",
      },
    ],
    equipment: [
      { name: "API 6A Choke Manifolds", specs: "5,000 to 15,000 PSI, H2S Trim, Dual Choke Design", tag: "Flow Control" },
      { name: "3-Phase Test Separators", specs: "1,440 PSI WP, 10,000 BPD fluid, 30 MMSCFD gas capacity", tag: "Separation" },
      { name: "Multiphase Flowmeter Skids", specs: "Real-time oil/gas/water continuous flow monitoring", tag: "Measurement" },
      { name: "Mobile NDE Inspection Units", specs: "Ultrasonic, Eddy Current, Magnetic Particle Testing", tag: "Asset Integrity" },
    ],
    kpis: [
      { label: "Uptime Reliability", value: "99.8%", helper: "Across active field contracts" },
      { label: "Inspected Rigs", value: "120+", helper: "Certified under API specifications" },
      { label: "Field Technicians", value: "85+", helper: "Certified mechanical & NDE engineers" },
      { label: "Emergency Response", value: "< 4 Hrs", helper: "Mobilization from central hubs" },
    ],
    caseStudy: {
      title: "Fast-Track Well Testing & Early Production in Western Desert",
      operator: "Major Joint Venture Operator (EGPC Concession)",
      description:
        "Axiom mobilized a complete 1,440 PSI 3-phase testing package along with high-pressure choke manifold within 72 hours of sudden appraisal discovery, enabling immediate reservoir evaluation and 4,500 BOPD production tie-in.",
      impact: "Reduced customer NPT by 28% and accelerated first oil commercialization by 45 days.",
    },
  },
  {
    slug: "petrochemicals",
    title: "Petrochemicals",
    tagline: "Reliability Engineering, Valve Overhaul & Turnaround Services for Continuous Process Complexes",
    text: "Process units and reliability programs for continuous industrial plants, ethylene complexes, fertilizers, and refining assets.",
    image: "/images/slides/slide03.jpg",
    heroImage: "/images/slides/slide03.jpg",
    overview:
      "Axiom Egypt supports Egypt's expanding refining and petrochemical clusters in Alexandria, Suez, and Damietta. We specialize in plant turnaround management, severe-service control valve maintenance, heat exchanger retubing, high-pressure pump overhauls, and predictive vibration analysis for non-stop industrial operations.",
    challenges: [
      {
        title: "Tight Turnaround Windows & Schedule Risk",
        text: "Scheduled plant turnarounds demand 24/7 round-the-clock shift staffing with zero tolerance for safety incidents or delayed restart milestones.",
        stat: "Zero Restart Delay",
      },
      {
        title: "Severe Process Chemistry & Thermal Cycling",
        text: "Aromatic hydrocarbons, polymer slurries, and caustic washes degrade seals, packings, and valve seats if not maintained with strict metallurgical standards.",
        stat: "API 600 / 6D Specs",
      },
      {
        title: "Rotating Machinery Criticality",
        text: "Centrifugal pumps and boiler feedwater pumps running continuously require micro-vibration diagnostic surveillance to prevent catastrophic bearing seizures.",
        stat: "24/7 Vibration Analytics",
      },
    ],
    solutions: [
      {
        title: "Turnaround Mechanical & Valve Maintenance",
        text: "Complete valve overhaul, lapping, hydrostatic testing, and packing replacement for gate, globe, check, and control valves.",
        badge: "Turnaround Services",
      },
      {
        title: "High-Pressure Process Pump Rebuilds",
        text: "Precision shaft alignment, dynamic balancing, mechanical seal upgrades, and performance curve testing.",
        badge: "Pump Engineering",
      },
      {
        title: "Predictive Asset Health Monitoring",
        text: "Vibration analysis, thermographic imaging, and lube oil sampling to detect mechanical degradation before failures occur.",
        badge: "Predictive Analytics",
      },
      {
        title: "Heat Exchanger Bundle Pulling & Retubing",
        text: "Hydro-jetting cleaning, tube bundle extraction, eddy current testing, and re-tubing for shell-and-tube exchangers.",
        badge: "Static Equipment",
      },
    ],
    equipment: [
      { name: "Automated Valve Test Benches", specs: "Up to 24-inch valve capacity, 10,000 PSI hydro/gas test", tag: "Valve Testing" },
      { name: "Laser Shaft Alignment Tools", specs: "Sub-micron accuracy for coupled turbomachinery", tag: "Precision Alignment" },
      { name: "Multi-Channel Vibration Analyzers", specs: "FFT spectrum analysis & bearing condition monitoring", tag: "Diagnostics" },
      { name: "Ultra-High Pressure Hydrojetters", specs: "20,000 PSI cleaning pressure for chemical deposits", tag: "Cleaning" },
    ],
    kpis: [
      { label: "Turnaround Completion", value: "100%", helper: "On-schedule milestone adherence" },
      { label: "Valves Serviced", value: "3,500+", helper: "Tested to API 598 standards" },
      { label: "Unplanned Outages", value: "-42%", helper: "Post-maintenance reliability record" },
      { label: "Safety Record", value: "0 LTI", helper: "Over 500,000 man-hours in plants" },
    ],
    caseStudy: {
      title: "Major Ethylene Complex Annual Shutdown Overhaul",
      operator: "Leading Egyptian Petrochemical Complex (Alexandria)",
      description:
        "Mobilized a team of 45 specialized valve technicians, millwrights, and certified inspectors to overhaul 380 control and isolation valves within a strict 14-day turnaround envelope.",
      impact: "Completed 36 hours ahead of target schedule with 100% first-time hydrostatic pass rate.",
    },
  },
  {
    slug: "power-generation",
    title: "Power Generation",
    tagline: "Prime, Standby & Modular Power Systems for Remote Industrial Sites and Energy Utilities",
    text: "Heavy-duty diesel generation, gas turbine support, synchronizing switchgear, and temporary power solutions for remote and industrial grids.",
    image: "/images/solutions/diesel.jpg",
    heroImage: "/images/solutions/diesel.jpg",
    overview:
      "Axiom Egypt provides industrial-grade power generation solutions tailored for energy operators facing grid instability or remote un-electrified oilfields. Our capabilities span the provision, commissioning, fuel management, and overhaul of heavy-duty diesel and gas gensets ranging from 250 kVA to multi-megawatt synchronized power packages.",
    challenges: [
      {
        title: "Grid Isolation in Desert & Offshore Fields",
        text: "Drilling rigs, artificial lift pumping stations, and camp facilities depend entirely on self-generated prime power where an outage shuts down entire production fields.",
        stat: "100% Off-Grid Ready",
      },
      {
        title: "Extreme Ambient Temperatures (50°C+)",
        text: "Egyptian desert heat causes generator derating, cooling radiator clogging, and turbocharger stress requiring specialized tropicalized power units.",
        stat: "Tropicalized Radiators",
      },
      {
        title: "Fuel Efficiency & High Operating Cost",
        text: "Diesel logistics to remote Western Desert sites represent high OPEX; precise electronic fuel metering and optimal load balancing are vital.",
        stat: "-15% Fuel Savings",
      },
    ],
    solutions: [
      {
        title: "Prime Power Generation Packages",
        text: "Turnkey containerized diesel and gas generators equipped with sound attenuation, heavy filtration, and automatic synchronization.",
        badge: "Turnkey Power",
      },
      {
        title: "Load Banking & Synchronized Switchgear",
        text: "Custom automatic transfer switches (ATS), paralleling controls, and reactive load testing to prevent wet-stacking.",
        badge: "Switchgear & Controls",
      },
      {
        title: "Preventive Engine Overhauls & Rebuilds",
        text: "Complete top-end and major overhauls for Cummins, Caterpillar, Perkins, and MTU industrial engines by certified mechanics.",
        badge: "Engine Overhauls",
      },
      {
        title: "Remote SCADA & Fuel Monitoring",
        text: "Satellite/cellular telemetry for fuel levels, oil pressure, coolant temperature, and electrical harmonics.",
        badge: "Telemetry",
      },
    ],
    equipment: [
      { name: "Containerized Power Modules", specs: "500 kVA to 2,000 kVA prime rated, 50/60 Hz switchable", tag: "Generation" },
      { name: "Intelligent Paralleling Panels", specs: "Up to 32 gensets synchronization with PLC load sharing", tag: "Automation" },
      { name: "Resistive/Reactive Load Banks", specs: "1,500 kW capacity with step-load digital automation", tag: "Testing" },
      { name: "Bulk Fuel Filtration Skids", specs: "Water separation and 2-micron particle removal", tag: "Fuel Quality" },
    ],
    kpis: [
      { label: "Continuous Availability", value: "99.9%", helper: "For critical life-support & drilling grids" },
      { label: "Installed Megawatts", value: "45+ MW", helper: "Across oilfields & industrial plants" },
      { label: "Engine Overhauls", value: "250+", helper: "Zero in-service catastrophic failures" },
      { label: "Mean Time to Repair", value: "< 2 Hrs", helper: "With dedicated on-site technician crews" },
    ],
    caseStudy: {
      title: "Continuous 6 MW Island Grid for Remote Western Desert Gathering Station",
      operator: "Joint Exploration & Production Operator",
      description:
        "Designed, delivered, synchronized, and operated a 6 MW prime power system consisting of four 1,500 kVA containerized units with automatic N+1 redundancy and dual-redundant fuel filtration.",
      impact: "Maintained 99.98% electrical availability over 18 consecutive months of desert operations.",
    },
  },
  {
    slug: "marine-and-offshore",
    title: "Marine & Offshore",
    tagline: "Platform Integrity, Riser Maintenance & Coastal Terminal Solutions for Harsh Marine Conditions",
    text: "Offshore platform support, coastal terminal maintenance, subsea pipeline inspection coordination, and brownfield asset life extension.",
    image: "/images/solutions/compressor.jpg",
    heroImage: "/images/solutions/compressor.jpg",
    overview:
      "Axiom Egypt supports offshore energy operations in the Gulf of Suez and the Mediterranean shelf. From shallow-water wellhead platforms to deepwater gas terminal interfaces, our offshore teams provide topsides piping inspection, explosion-proof compression packages, marine pump maintenance, and cathodic protection survey support.",
    challenges: [
      {
        title: "Hyper-Corrosive Saline Atmosphere",
        text: "Marine salt spray, splash-zone wave action, and high humidity accelerate galvanic corrosion on topsides structural steel, flanges, and electrical enclosures.",
        stat: "C5-M Marine Coating",
      },
      {
        title: "Restricted Deck Space & Crane Limits",
        text: "Offshore platforms have strict footprint and weight ceilings; equipment packages must be modular, lightweight, and ATEX/IECEx certified.",
        stat: "DNV 2.7-1 Certified",
      },
      {
        title: "Complex Offshore Logistics & Weather Windows",
        text: "Crew boat and helicopter transfers demand rigorous HUET certification, tight scheduling, and first-time-right tooling mobilization.",
        stat: "Zero Mobilization Aborts",
      },
    ],
    solutions: [
      {
        title: "Topsides Piping & Vessel Integrity Inspections",
        text: "Phased array ultrasonic testing (PAUT), corrosion mapping, and remaining life assessment for pressurized marine piping.",
        badge: "Offshore NDE",
      },
      {
        title: "ATEX Zone 1/2 Certified Compression Packages",
        text: "Explosion-proof air compressors and nitrogen boosters for pipeline pigging and well gas lift on offshore decks.",
        badge: "Certified Packages",
      },
      {
        title: "Offshore Slurry & Seawater Pump Overhauls",
        text: "Duplex and super duplex stainless steel seawater lift pumps, firewater pumps, and condensate reinjection systems.",
        badge: "Marine Pumps",
      },
      {
        title: "Riser & Splash-Zone Protection Monitoring",
        text: "Cathodic protection potential surveys, sacrificial anode assessments, and structural thickness verifications.",
        badge: "Asset Integrity",
      },
    ],
    equipment: [
      { name: "DNV 2.7-1 Offshore Compressor Skids", specs: "ATEX Zone 2, 750 CFM, 150 PSI, spark arrestor", tag: "Marine Certified" },
      { name: "Phased Array PAUT / TOFD Units", specs: "Advanced weld inspection & corrosion mapping", tag: "Ultrasonic NDE" },
      { name: "Sea-Water Lift Multi-Stage Pumps", specs: "Super Duplex SS, high-head, anti-cavitation design", tag: "Offshore Pumps" },
      { name: "Digital CP Potential Survey Meters", specs: "Underwater probe compatibility for platform jackets", tag: "Corrosion Survey" },
    ],
    kpis: [
      { label: "Offshore Safety Record", value: "Zero TRIR", helper: "Strict adherence to offshore safety rules" },
      { label: "Certified Offshore Engineers", value: "100%", helper: "HUET & BOSIET compliant staff" },
      { label: "Platforms Serviced", value: "35+", helper: "In Gulf of Suez & Mediterranean fields" },
      { label: "Equipment Compliance", value: "DNV 2.7-1", helper: "Certified offshore lift containers" },
    ],
    caseStudy: {
      title: "Gulf of Suez Topsides Piping Integrity Assessment & Refurbishment",
      operator: "Offshore Petroleum Operating Consortium",
      description:
        "Conducted a comprehensive risk-based inspection of 12 kilometers of offshore topsides piping across three connected production platforms, utilizing digital radiographic and phased array testing.",
      impact: "Identified and remediated 14 critical wall-thinning zones, preventing potential hydrocarbon leaks.",
    },
  },
  {
    slug: "pipeline-infrastructure",
    title: "Pipeline Infrastructure",
    tagline: "Cross-Country Energy Pipelines, High-Pressure Gas Gathering & Water Distribution Networks",
    text: "Long-distance pipeline construction support, hydrostatic testing, pigging, valve station servicing, and municipal water line rehabilitation.",
    image: "/images/pipelines/pipelines-hero.jpg",
    heroImage: "/images/pipelines/pipelines-hero.jpg",
    overview:
      "Axiom Egypt's pipeline infrastructure division delivers complete midstream and municipal utility solutions. Backed by specialized pipe yards, heavy mechanical trenching support, automated hydrostatic testing skids, and API 6D pipeline ball valve maintenance, we ensure seamless hydrocarbon and water transmission across Egypt's extensive infrastructure grid.",
    challenges: [
      {
        title: "Desert Terrain Soil Shifting & Mechanical Stress",
        text: "Long-distance pipelines traversing sand dunes and rocky plateaus require precise trench bedding, stress-relief joints, and deep cathodic protection.",
        stat: "100% Joint Verification",
      },
      {
        title: "High-Pressure Hydrostatic Integrity Verification",
        text: "New and existing pipelines require API 1110 certified pressure holding tests with calibrated electronic deadweight gauges.",
        stat: "API 1110 Standards",
      },
      {
        title: "Internal Corrosion & Paraffin Deposition",
        text: "Waxy crude and wet gas pipelines lose transport throughput without regular mechanical and chemical pigging schedules.",
        stat: "+25% Flow Efficiency",
      },
    ],
    solutions: [
      {
        title: "Hydrostatic Testing & Dewatering Services",
        text: "High-volume filling pumps, positive displacement pressure pumps, and digital chart recorders for certified pipeline testing.",
        badge: "Hydrotest",
      },
      {
        title: "Intelligent & Utility Pigging Operations",
        text: "Foam, disc, and caliper pigging for debris cleaning, batch corrosion inhibitor treatment, and internal geometry profiling.",
        badge: "Pigging & Cleaning",
      },
      {
        title: "API 6D Trunnion Ball Valve Servicing",
        text: "In-line valve seat sealing, emergency sealant injection, stem seal renewal, and actuator calibration without pipeline shutdown.",
        badge: "Valve Stations",
      },
      {
        title: "Tubular Yard & Material Logistics",
        text: "Storage, tallying, visual inspection, and dispatch of ERW, seamless, and ductile iron line pipes from dedicated holding facilities.",
        badge: "Tubular Management",
      },
    ],
    equipment: [
      { name: "Triplex Hydrotest Pump Skids", specs: "Up to 10,000 PSI test pressure with digital data loggers", tag: "Testing Skids" },
      { name: "Bidirectional Pipeline Pigs", specs: "6-inch to 48-inch diameter with polyurethane discs", tag: "Pigging Equipment" },
      { name: "Emergency Valve Sealant Pumps", specs: "10,000 PSI hydraulic injection for zero-leak seal restoration", tag: "Valve Maintenance" },
      { name: "Pipe Handling & Vacuum Lifting Units", specs: "Safe loading/unloading of coated line pipes up to 12 tons", tag: "Material Handling" },
    ],
    kpis: [
      { label: "Pipelines Tested", value: "850+ km", helper: "Hydrostatically certified without incident" },
      { label: "Pipe Sizes Handled", value: '4" to 48"', helper: "Carbon steel, CRA, and ductile iron" },
      { label: "Valve Station Repairs", value: "450+", helper: "API 6D mainline ball valves" },
      { label: "Trenchless & Open Trench", value: "100%", helper: "Compliance with EGPC standards" },
    ],
    caseStudy: {
      title: "Hydrostatic Testing and Nitrogen Dewatering of 42-Inch Gas Trunkline",
      operator: "National Gas Transmission Utility",
      description:
        "Mobilized three high-capacity triplex pump units and membrane nitrogen generators to complete hydrostatic testing and dry dewatering to -40°C dewpoint on a 65-kilometer desert transmission pipeline.",
      impact: "Delivered commissioned pipeline 5 days ahead of schedule, facilitating early gas grid injection.",
    },
  },
];

export function getIndustryBySlug(slug: string): IndustryItem | undefined {
  return industries.find((item) => item.slug === slug);
}

export function getAllIndustrySlugs(): string[] {
  return industries.map((item) => item.slug);
}


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

export const pipelineCategories: PipelineGalleryCategory[] = [
  "Pipeline Construction",
  "Industrial Pipelines",
  "Energy Infrastructure",
  "Water Networks",
];

export const pipelineGallery: PipelineGalleryItem[] = [
  {
    id: "heavy-casing-yard-staging",
    title: "Heavy-Wall API 5CT Casing & Tubular Yard Logistics",
    category: "Pipeline Construction",
    image: "/images/pipelines/casing-storage-yard.jpg",
    summary:
      "Strategic staging and inspection of high-grade carbon steel seamless casing bundles prepared for immediate Western Desert drilling mobilization.",
    specs: {
      diameter: '7" to 13-3/8" OD',
      standard: "API Spec 5CT / 5L PSL2",
      grade: "L80-1 / P110 / Q125",
      coating: "Corrosion-Resistant Mill Varnish & Heavy Protectors",
      application: "High-Pressure Deep Well Casing & Field Gathering",
      facility: "Suez Free Zone Staging Terminal",
    },
    details:
      "Each bundle is systematically tagged, color-coded by grade, fitted with heavy-duty composite thread protectors, and subjected to 100% full-length ultrasonic and magnetic particle testing before transport.",
  },
  {
    id: "high-density-tubular-racking",
    title: "High-Density Tubular Racking & Weatherproof Storage",
    category: "Industrial Pipelines",
    image: "/images/pipelines/warehouse-pipe-stack.jpg",
    summary:
      "Specialized indoor vertical and tier storage safeguarding premium connection tubing and drill pipe from atmospheric corrosion and thread damage.",
    specs: {
      diameter: '2-7/8" to 5-1/2" OD',
      standard: "API Spec 5CT / Premium Gas-Tight Connections",
      grade: "13Cr / Super 13Cr / L80-SS",
      coating: "Internal Plastic Coating (IPC) for Corrosive Gas",
      application: "Sour Service (H2S & CO2) Gas Well Completions",
      facility: "Suez Central Covered Tubular Warehouse",
    },
    details:
      "Environmentally controlled warehouse facility ensuring zero moisture condensation on critical seal faces. Each joint retains complete metallurgical mill test traceability and barcode tracking.",
  },
  {
    id: "crane-marshaling-cross-country",
    title: "Heavy Crane Lifting & Cross-Country Trunkline Marshalling",
    category: "Energy Infrastructure",
    image: "/images/pipelines/yard-logistics-crane.jpg",
    summary:
      "Heavy mobile crane loading bays handling large-diameter trunkline pipe sections and manifold assemblies for regional transmission grids.",
    specs: {
      diameter: '16" to 42" OD',
      standard: "API Spec 5L Grade X52 / X65 / X70 PSL2",
      grade: "X65 / X70 High Yield Strength",
      coating: "3-Layer Polyethylene (3LPE) & Heavy FBE",
      application: "Cross-Country Natural Gas & Crude Transmission Grids",
      facility: "Suez Maritime Logistics Marshalling Bay",
    },
    details:
      "Features calibrated spreader beam crane operations and certified nylon sling rigging to safeguard external 3LPE anti-corrosion and concrete weight coatings during high-throughput loading onto flatbed convoys.",
  },
  {
    id: "paved-pipe-depot-inventory",
    title: "Interlocked Paved Depot & Long-Term Pipeline Staging",
    category: "Pipeline Construction",
    image: "/images/pipelines/paved-pipe-depot.jpg",
    summary:
      "Engineered all-weather paved facility eliminating soil subsidence and ground moisture during multi-rig casing supply contracts.",
    specs: {
      diameter: '4-1/2" to 9-5/8" OD',
      standard: "API 5L / ASTM A106 Grade B",
      grade: "Carbon Steel Line Pipe & Intermediate Casing",
      coating: "Fusion Bonded Epoxy (FBE) & Beveled End Guards",
      application: "Flowline Networks & Refinery Interconnecting Headers",
      facility: "Suez Free Zone Heavy Staging Complex",
    },
    details:
      "Engineered hardwood dunnage and heavy-duty UV-stabilized strapping isolate each tier. Ongoing wall-thickness monitoring guarantees field-ready integrity upon site arrival.",
  },
  {
    id: "precision-tubular-inspection",
    title: "Precision Thread Gauging & QA/QC Casing Inspection",
    category: "Industrial Pipelines",
    image: "/images/pipelines/tubular-inspection.jpg",
    summary:
      "Certified ASNT Level II & III inspectors executing optical thread profiling, torque shoulder verification, and full-length drift testing.",
    specs: {
      diameter: 'All API & Proprietary Premium Connections',
      standard: "API RP 5A5 / DS-1 Cat 3-5 Standards",
      grade: "Full Metallurgical Range (Carbon & Chrome Alloys)",
      coating: "Thread Compound Sealant & Recapping Verification",
      application: "High-Pressure Gas Wellhead Production Strings",
      facility: "Mobile NDT Inspection Field Unit",
    },
    details:
      "Comprehensive non-destructive testing regimen combining wet fluorescent magnetic particle inspection (MPI), ultrasonic wall gauging, and laser profilometry to ensure 100% leak-free makeup in demanding wellbores.",
  },
  {
    id: "industrial-water-network-header",
    title: "High-Pressure Produced Water Injection & Transfer Systems",
    category: "Water Networks",
    image: "/images/solutions/pumps.jpg",
    summary:
      "High-pressure corrosion-resistant piping networks, manifold skids, and booster stations engineered for oilfield waterflood and disposal operations.",
    specs: {
      diameter: '6" to 14" OD',
      standard: "ASME B31.3 / B31.4 & API 15HR",
      grade: "Duplex Stainless Steel & High-Density Polyethylene (HDPE)",
      coating: "Internal Glass Flake Lining / Fusion Bonded Epoxy",
      application: "Reservoir Pressure Maintenance & Produced Water Disposal",
      facility: "Western Desert Field Waterflood Facility",
    },
    details:
      "Designed for aggressive high-salinity brines and corrosive gases. Fabricated and pre-tested with automated hydrotesting skids to guarantee zero environmental discharge.",
  },
  {
    id: "cross-facility-manifold-integration",
    title: "Early Production Facility (EPF) Piping & Manifold Headers",
    category: "Energy Infrastructure",
    image: "/images/solutions/epf.jpg",
    summary:
      "Modular high-pressure piping assemblies and interconnecting headers linking wellhead chokes, separation units, and fiscal metering skids.",
    specs: {
      diameter: '3" to 12" ANSI 600# to 2500#',
      standard: "ASME B31.3 / API 6A & NACE MR0175",
      grade: "ASTM A333 Grade 6 (Low Temp) & A106 Gr. B",
      coating: "Polyurethane Industrial Thermal Coating",
      application: "Fast-Track Field Monetization & Central Processing",
      facility: "Gulf of Suez EPF Processing Complex",
    },
    details:
      "Pre-fabricated in certified skid modules for rapid bolt-together assembly on site, significantly reducing field welding hours and ensuring immediate compliance with hazardous area electrical standards.",
  },
  {
    id: "wellhead-surface-testing-flowlines",
    title: "Temporary Well Testing High-Pressure Flowline Rig-Up",
    category: "Pipeline Construction",
    image: "/images/solutions/well-testing.jpg",
    summary:
      "Hammer-union Chiksan high-pressure lines, emergency shutdown manifolds, and sand trap piping for extended exploration well tests.",
    specs: {
      diameter: '2" to 4" Fig 1502 / 1002 Hammer Unions',
      standard: "API 16C / NACE MR0175 (H2S Service)",
      grade: "Alloy Steel 4130 Integral Forged",
      coating: "Banding Color-Coded Pressure Rating System",
      application: "Exploration Well Testing & Clean-up Operations",
      facility: "Nile Delta Onshore Testing Spread",
    },
    details:
      "Inspected, recertified, and pressure-tested every 6 months to 15,000 PSI test pressure. Supported by certified pipe anchors and safety whip-checks across the entire flowline spread.",
  },
];

export const globalAgents: GlobalAgent[] = [
  {
    id: "egypt-hq-suez",
    country: "Egypt",
    city: "Cairo & Suez",
    region: "Middle East & Africa",
    flag: "🇪🇬",
    companyName: "Axiom Egypt Petroleum Services (Headquarters)",
    scope: "Principal Headquarters & Free Zone Central Logistics Staging Terminal",
    contactPerson: "Eng. Tamer Mostafa",
    role: "Managing Director & Technical Operations",
    email: "info@Axiomeg.com",
    phone: "+20 2 27542566",
    address: "8A/2, El Laselky Division, New Maadi, Cairo / Free Zone Suez",
    authorizedLines: [
      "Production Testing & Early Production Facilities (EPF)",
      "Wellhead Separation, Heaters & Compression Packages",
      "API 5CT / 5L Tubular Goods & Drill Pipe Staging",
      "Field Overhaul, Precision NDT & Technical Training",
    ],
  },
  {
    id: "uae-gulf-rep",
    country: "United Arab Emirates",
    city: "Abu Dhabi & Dubai",
    region: "Middle East & Africa",
    flag: "🇦🇪",
    companyName: "Gulf Energy Dynamics FZE",
    scope: "Authorized Gulf Representative for Offshore Spreads & EPC Procurement",
    contactPerson: "Rashid Al-Mansouri",
    role: "Regional Director — MENA",
    email: "gulf.representative@axiomeg.com",
    phone: "+971 2 645 8820",
    address: "Al Maryah Tower, Abu Dhabi Global Market, Abu Dhabi, UAE",
    authorizedLines: [
      "Offshore Production Testing Equipment",
      "Gas Compressor Packages (85 HP – 10,000 HP)",
      "Heavy-Wall Subsea Piping & Casing Solutions",
    ],
  },
  {
    id: "saudi-arabia-rep",
    country: "Saudi Arabia",
    city: "Al Khobar & Dammam",
    region: "Middle East & Africa",
    flag: "🇸🇦",
    companyName: "PetroRawabi Industrial Services Ltd.",
    scope: "Authorized Kingdom Agent for In-Kingdom Petroleum Services & Equipment",
    contactPerson: "Fahad Al-Ghamdi",
    role: "Country Operations Liaison",
    email: "ksa.representative@axiomeg.com",
    phone: "+966 13 889 4510",
    address: "King Abdulaziz Road, Al Khobar 31952, Kingdom of Saudi Arabia",
    authorizedLines: [
      "Deep Well Artificial Lift & Triplex Pumping Skids",
      "High-Pressure Separators & Line Heaters",
      "Rotational Equipment Maintenance & Predictive Diagnostics",
    ],
  },
  {
    id: "usa-houston-hub",
    country: "United States",
    city: "Houston, Texas",
    region: "North America",
    flag: "🇺🇸",
    companyName: "Apex Energy Global LLC",
    scope: "North American Technology Partner & OEM Sourcing Office",
    contactPerson: "David R. Sterling",
    role: "VP International Supply Chain",
    email: "usa.representative@axiomeg.com",
    phone: "+1 713 589 7720",
    address: "Energy Corridor, 14800 Memorial Drive, Houston, TX 77079, USA",
    authorizedLines: [
      "API Certified OEM Equipment Sourcing",
      "Gas Turbine & Reciprocating Compressor Packages",
      "Advanced Ultrasonic Testing & Smart Pigging Technology",
    ],
  },
  {
    id: "uk-aberdeen-rep",
    country: "United Kingdom",
    city: "Aberdeen & London",
    region: "Europe",
    flag: "🇬🇧",
    companyName: "Caledonia Petroleum Technologies Ltd.",
    scope: "European Offshore Engineering & QA/QC Audit Representation",
    contactPerson: "Graeme MacIntyre",
    role: "Technical Engineering Director",
    email: "uk.representative@axiomeg.com",
    phone: "+44 1224 982 340",
    address: "Riverside Business Center, Dyce, Aberdeen AB21 0GT, Scotland, UK",
    authorizedLines: [
      "Offshore Rig Inspection & Integrity Management",
      "IWCF & IADC Accredited Training Syllabi Coordination",
      "Environmental Emissions Containment & Vapor Recovery Systems",
    ],
  },
  {
    id: "germany-frankfurt-rep",
    country: "Germany",
    city: "Celle & Frankfurt",
    region: "Europe",
    flag: "🇩🇪",
    companyName: "Bavaria Petro-Equip GmbH",
    scope: "Precision Valves, Instrumentation & High-Pressure Fluid Technology",
    contactPerson: "Hans-Jürgen Weber",
    role: "Director of International Sales",
    email: "germany.representative@axiomeg.com",
    phone: "+49 69 7191 880",
    address: "Industriepark Höchst, D-65926 Frankfurt am Main, Germany",
    authorizedLines: [
      "Subsea & Surface Choke Valves and Actuators",
      "Automated Multiphase Flow Meters (MPFM)",
      "High-Pressure Triplex & Quintuplex Reciprocating Pumps",
    ],
  },
  {
    id: "italy-milan-rep",
    country: "Italy",
    city: "Milan",
    region: "Europe",
    flag: "🇮🇹",
    companyName: "EuroFlange & Tubulars S.r.l.",
    scope: "Heavy Forged Fittings, Pipeline Induction Bends & Flanges",
    contactPerson: "Marco Benetti",
    role: "Commercial Export Manager",
    email: "italy.representative@axiomeg.com",
    phone: "+39 02 8739 4210",
    address: "Via Montenapoleone 8, 20121 Milano, Italy",
    authorizedLines: [
      "Heavy Forged High-Pressure Flanges & Pipeline Bends",
      "Gas Turbines Component Refurbishment & Balancing",
      "Coating Inspection & Metallurgical Laboratory Verification",
    ],
  },
  {
    id: "singapore-apac-hub",
    country: "Singapore",
    city: "Singapore",
    region: "Asia-Pacific",
    flag: "🇸🇬",
    companyName: "Merlion Offshore & Energy Pte Ltd",
    scope: "Asia-Pacific Tubular Supply & Marine Logistics Agency",
    contactPerson: "Kenneth Chen",
    role: "APAC Regional Coordinator",
    email: "apac.representative@axiomeg.com",
    phone: "+65 6712 9088",
    address: "Marina Bay Financial Centre, Tower 2, Singapore 018983",
    authorizedLines: [
      "Seamless Casing & Line Pipe Mill Allotments",
      "Marine Offshore Crane Equipment",
      "Floating Production Logistics & Spares Expediting",
    ],
  },
];

export const culturePillars = [
  {
    title: "Zero-Harm HSE Culture",
    text: "Safety isn't a checklist; it's our foundational license to operate. Every engineer and field technician holds Stop Work Authority.",
    icon: "ShieldCheck",
  },
  {
    title: "Field-Proven Engineering",
    text: "We bridge the gap between heavy mechanical hardware and real-time field data, solving complex production bottlenecks onshore and offshore.",
    icon: "Wrench",
  },
  {
    title: "Continuous Professional Mastery",
    text: "From Suez equipment workshops to international certifications, we invest in our people so they lead the industry with modern standards.",
    icon: "GraduationCap",
  },
  {
    title: "Empowering Team Spirit",
    text: "High-trust teamwork across engineering, quality assurance, logistics, and field crews, united by pride in powering Egypt's energy future.",
    icon: "Users",
  },
];

export const careerPerks = [
  {
    title: "Competitive Compensation & Field Allowances",
    text: "Industry-leading tax-free salary structures complemented by hazard, offshore, and per-diem rotation allowances.",
  },
  {
    title: "Comprehensive Health & Life Insurance",
    text: "Full premium family health coverage, medical evacuation insurance, and comprehensive wellness plans.",
  },
  {
    title: "Global Certification Sponsorship",
    text: "Fully funded international training programs including IWCF, IADC, ASNT, and API certifications.",
  },
  {
    title: "Rotational Flexibility",
    text: "Balanced rotation rosters (e.g. 28/28 or 14/14 for field personnel) and modern hybrid office accommodations.",
  },
];

export const jobOpenings: JobOpening[] = [
  {
    id: "sr-petroleum-engineer",
    title: "Senior Petroleum Production Engineer",
    department: "Engineering",
    location: "New Maadi HQ (with Western Desert field rotations)",
    type: "Full-Time",
    experience: "7+ Years",
    summary:
      "Lead well testing campaigns, optimize surface separator performance, and design early production facility process packages for major operating clients.",
    responsibilities: [
      "Supervise surface well testing packages, multiphase separator operations, and flare system combustion efficiency.",
      "Interpret pressure transient analysis (PTA), PVT fluid samples, and build comprehensive well performance reports.",
      "Interface with client reservoir teams to select choke sizes, heater duty, and pressure drops during cleanup flows.",
      "Review process flow diagrams (PFDs) and P&IDs for new modular EPF skids.",
    ],
    qualifications: [
      "B.Sc. in Petroleum, Chemical, or Mechanical Engineering.",
      "Demonstrated track record running 3-phase and 4-phase test separators.",
      "Valid IWCF Level 4 Well Control certification is an advantage.",
      "Fluent technical English and commanding leadership presence on site.",
    ],
  },
  {
    id: "qaqc-pipeline-inspector",
    title: "QA/QC Pipeline & Tubular Goods Inspector",
    department: "Quality & HSE",
    location: "Free Zone Suez Terminal & Field Sites",
    type: "Full-Time",
    experience: "5+ Years",
    summary:
      "Oversee receipt inspection, ultrasonic wall thickness testing, thread gauging, and non-destructive examination of API casing, tubing, and line pipe.",
    responsibilities: [
      "Conduct visual, dimensional, optical, and magnetic particle inspection (MPI) on casing, drill pipe, and line pipe.",
      "Audit mill test certificates (MTCs) against API Spec 5CT, 5L, and client proprietary metallurgic specifications.",
      "Oversee third-party NDT crews and manage discrepancy quarantine reports.",
      "Inspect internal/external anti-corrosion coatings (FBE, 3LPE) and thread compound seal integrity.",
    ],
    qualifications: [
      "ASNT Level II certification in Ultrasonic (UT) and Magnetic Particle Testing (MT).",
      "Strong background in API RP 5A5 and DS-1 standards.",
      "Minimum 5 years of verifiable experience in oilfield tubular storage and inspection yards.",
      "High attention to detail and zero-tolerance attitude for non-compliant equipment.",
    ],
  },
  {
    id: "rotating-equipment-specialist",
    title: "Mechanical Specialist — Gas Compressors & High-Pressure Pumps",
    department: "Maintenance",
    location: "Field Operations / Suez Overhaul Shop",
    type: "Rotational (28/28)",
    experience: "6+ Years",
    summary:
      "Execute preventive maintenance, teardown, overhaul, laser alignment, and dynamic testing of reciprocating compressors and triplex injection pumps.",
    responsibilities: [
      "Perform precision overhaul of Ariel/Caterpillar/Waukesha reciprocating gas compressor packages (85 HP to 5,000 HP).",
      "Execute dynamic vibration analysis, bearing temperature logging, and laser shaft alignment on high-pressure pumps.",
      "Diagnose mechanical seal failures, valve unloader issues, and lube oil contamination.",
      "Lead emergency turnaround and maintenance shutdown teams to minimize client production deferment.",
    ],
    qualifications: [
      "Technical Diploma or B.Sc. in Mechanical Engineering.",
      "Hands-on expertise with compressor cylinders, packing cases, crankshafts, and heavy diesel engines.",
      "Certified vibration analyst (ISO 18436 Cat II) is preferred.",
      "Capable of independent troubleshooting in remote field conditions.",
    ],
  },
  {
    id: "scada-instrumentation-engineer",
    title: "Automation, Instrumentation & SCADA Engineer",
    department: "Engineering",
    location: "New Maadi HQ with Field Mobilizations",
    type: "Full-Time",
    experience: "4+ Years",
    summary:
      "Design, program, and commission PLC/RTU control systems, safety instrumented systems (SIS), and automated multiphase flow measurement skids.",
    responsibilities: [
      "Configure Siemens, Allen-Bradley, and Schneider PLC hardware for automated emergency shutdown (ESD) systems.",
      "Calibrate smart pressure, temperature, differential transmitters, and Coriolis flowmeters in hazardous zones.",
      "Implement remote telemetry protocols (Modbus, OPC UA) transmitting real-time field data to client cloud portals.",
      "Lead Pre-Startup Safety Reviews (PSSR) for instrumented safety loops and gas detection sensors.",
    ],
    qualifications: [
      "B.Sc. in Electrical, Electronics, or Mechatronics Engineering.",
      "Proven field experience with ATEX / IECEx certified instrumentation.",
      "Proficient in ladder logic, functional block diagrams, and SCADA HMI development.",
    ],
  },
  {
    id: "hse-operations-manager",
    title: "HSE Field Operations Manager",
    department: "Quality & HSE",
    location: "Field Sites Across Egypt (Western Desert & Gulf of Suez)",
    type: "Full-Time",
    experience: "8+ Years",
    summary:
      "Champion Axiom's Zero-Harm culture across all operational spreads, client rig sites, and staging yards in accordance with ISO 14001 and ISO 45001.",
    responsibilities: [
      "Develop project-specific Health, Safety & Environmental Execution Plans and Job Safety Analyses (JSA).",
      "Lead daily safety stand-downs, permit-to-work (PTW) audits, and incident root cause investigations (RCA).",
      "Conduct H2S emergency drills, breathing apparatus readiness inspections, and fire suppression audits.",
      "Liaise with EGPC, foreign operating joint ventures, and civil authorities during compliance audits.",
    ],
    qualifications: [
      "NEBOSH International Diploma in Occupational Health & Safety or equivalent.",
      "Extensive knowledge of Egyptian Petroleum Sector (EGPC) HSE regulations.",
      "Minimum 8 years in onshore/offshore oil & gas field operations.",
      "Strong interpersonal communication and coaching mindset.",
    ],
  },
];

export const trainingPrograms: TrainingProgram[] = [
  {
    id: "technical-well-testing-production",
    title: "Surface Well Testing & Production Facility Operations",
    category: "Technical Training",
    summary:
      "Intensive practical training on surface test trees, choke manifolds, 3-phase test separators, line heaters, and accurate data acquisition.",
    duration: "5 Days (40 Hours) or 10 Days Advanced",
    targetAudience: "Production Engineers, Well Testing Technicians, Field Operators & Shift Supervisors",
    modules: [
      "Well testing objectives: Exploration vs. Development clean-up and extended flow tests",
      "Choke manifold operations, erosion monitoring, and critical flow calculations",
      "Separation physics: Residence time, weir settings, demister pads, and level control loops",
      "Indirect line heater heat transfer, expansion coils, and burner management systems (BMS)",
      "Accurate fluid sampling (PVT bottles, pressurized gas cylinders) and field shrinkage tests",
      "Practical Suez Yard workshop: Live equipment line-up, pressure testing, and troubleshooting",
    ],
    certification: "Axiom Certified Well Testing Specialist (Accredited Certificate)",
    deliveryMethods: ["Suez Free Zone Staging Yard", "Client Operating Facility", "Virtual Theory Sessions"],
  },
  {
    id: "hse-iwcf-safety-mastery",
    title: "IWCF / IADC Well Control & Rig Site Safety Operations",
    category: "Safety & HSE Training",
    summary:
      "International standard well control principles, kick detection, shut-in procedures, H2S toxic gas containment, and emergency response.",
    duration: "5 Days (Classroom & Drilling Simulator)",
    targetAudience: "Drillers, Toolpushers, Rig Superintendents, Company Men & Petroleum Engineers",
    modules: [
      "Hydrostatic pressure, formation pressure, fracture gradient, and primary barrier integrity",
      "Causes of kicks: Swabbing, lost circulation, gas-cut mud, and abnormal pressure influxes",
      "Kick detection indicators: Flow line sensors, pit gain alarms, and pump stroke tracking",
      "Shut-in protocols: Hard shut-in vs. soft shut-in procedures on surface and subsea BOPs",
      "Well kill methods: Wait and Weight method, Driller's method, and Volumetric stripping",
      "H2S contingency planning: SCBA apparatus donning, gas plume modeling, and victim triage",
    ],
    certification: "IWCF / IADC Accredited Well Control Certification Preparation",
    deliveryMethods: ["Axiom Training Center", "Rig Site Onboard Coaching"],
  },
  {
    id: "engineering-epf-pipeline-design",
    title: "Early Production Facility (EPF) & Pipeline Process Engineering",
    category: "Engineering Training",
    summary:
      "Advanced engineering course covering modular facility sizing, pipeline hydraulic simulations, ASME piping codes, and fiscal custody transfer.",
    duration: "4 Days (32 Hours)",
    targetAudience: "Facilities Engineers, Process Designers, Pipeline Integrity Engineers & Project Managers",
    modules: [
      "Fast-track field development strategies and modular EPF equipment selection",
      "Multiphase flow hydraulics: Beggs-Brill & OLGA calculations, slug catchers, and pigging",
      "Piping & Pipeline Design codes: ASME B31.3 (Process Piping) and ASME B31.4 / B31.8 (Transportation)",
      "Corrosion mitigation in sour service: NACE MR0175, chemical inhibitor batching, and corrosion coupons",
      "Crude oil stabilization, Reid Vapor Pressure (RVP) control, and electrostatic desalter systems",
      "Process safety: Relief valve (PSV) sizing, flare header backpressure, and HAZOP methodologies",
    ],
    certification: "Certified Energy Facilities & Pipeline Engineer",
    deliveryMethods: ["Cairo Training Headquarters", "Corporate On-Site"],
  },
  {
    id: "operational-compressor-pump-overhaul",
    title: "Industrial Compressors & High-Pressure Pumps Field Maintenance",
    category: "Operational Training",
    summary:
      "Hands-on mechanical maintenance workshop covering reciprocating compressors, positive displacement pumps, laser alignment, and condition monitoring.",
    duration: "5 Days (Full Workshop Immersion)",
    targetAudience: "Mechanical Maintenance Technicians, Millwrights, Reliability Engineers & Plant Mechanics",
    modules: [
      "Reciprocating compressor anatomy: Cylinders, crossheads, connecting rods, valves, and unloader systems",
      "Centrifugal and multi-stage triplex pumps: Impeller balancing, mechanical seal flushing plans (API 682)",
      "Precision laser shaft alignment, thermal growth offset, and soft-foot elimination",
      "Condition monitoring fundamentals: Vibration spectral analysis, bearing temperature thresholds, and oil analysis",
      "Preventive and predictive maintenance scheduling to eliminate catastrophic unplanned trips",
      "Hands-on teardown in Suez maintenance facility: Valve replacement, piston ring gap check, and clearance measurement",
    ],
    certification: "Certified Rotating Machinery Maintenance Technician",
    deliveryMethods: ["Suez Mechanical Workshop", "Client Plant Yard"],
  },
];

export const trainingMethodology = [
  {
    step: "01",
    title: "Foundational Theory & Physics",
    text: "Deep-dive into thermo-hydraulic fundamentals, international API/ASME/ISO standards, and engineering formulas led by senior industry veterans.",
  },
  {
    step: "02",
    title: "Hands-On Suez Yard Workshop",
    text: "Trainees move directly from the classroom to our full-scale equipment yard in the Suez Free Zone, touching real separators, pumps, and valves.",
  },
  {
    step: "03",
    title: "Field Scenarios & Emergency Drills",
    text: "Simulating realistic upset conditions: sudden gas kicks, valve seat washouts, instrument air failures, and H2S leak evacuations.",
  },
  {
    step: "04",
    title: "Rigorous Assessment & Certification",
    text: "Formal theoretical examinations and practical competency check-rides before issuing verified, accredited industry certificates.",
  },
];

export const trainingStats = [
  { value: "3,500+", label: "Engineers & Technicians Trained" },
  { value: "98.6%", label: "First-Time Certification Pass Rate" },
  { value: "40+", label: "Operating Energy Clients Served" },
  { value: "100%", label: "Hands-On Equipment Access in Suez" },
];

export const trainingIndustries = [
  {
    name: "Upstream Exploration & Production",
    desc: "Rig crews, well test operators, and petroleum production engineers operating high-pressure desert and offshore wells.",
  },
  {
    name: "Midstream Pipelines & Transportation",
    desc: "Cross-country pipeline operators, pumping station crews, and gas compressor maintenance technicians.",
  },
  {
    name: "Downstream Refining & Petrochemicals",
    desc: "Plant process operators, rotating machinery specialists, and turnaround shutdown contractors.",
  },
  {
    name: "Offshore Marine & Subsea Terminals",
    desc: "Platform personnel, barge engineers, and marine logistics specialists requiring strict safety compliance.",
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
