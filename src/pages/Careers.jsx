import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

const JOB_ROLES = [
  // --- ENGINEERING ---
  {
    id: 'krn-jr-dev',
    title: 'Junior Software Engineer / Trainee',
    department: 'Engineering',
    type: 'Full-time',
    location: '100% Remote (India)',
    experience: 'Freshers & Experienced',
    badge: 'Entry Level',
    shortDescription: 'Ideal for energetic freshers and early-career developers passionate about modern web technologies and clean code.',
    responsibilities: [
      'Assist in constructing responsive React components and REST API endpoints.',
      'Participate in daily standups, sprint planning, and code review sessions.',
      'Write clean unit tests and fix reported software defects under senior engineering mentorship.',
      'Learn and adopt company coding standards and modern DevOps practices.',
    ],
    requirements: [
      'Open for freshers or candidates with project portfolio in JavaScript / TypeScript / React / Python.',
      'Solid fundamentals in Data Structures, Algorithms, and Object-Oriented or Functional Programming.',
      'Enthusiasm for learning modern frameworks, cloud tools, and AI developer utilities.',
      'Good written and verbal English communication skills.',
    ],
    benefits: [
      '100% Remote flexibility in India',
      'Home office setup allowance',
      'Comprehensive medical insurance covering self & family',
      'Dedicated senior mentor & fast-track promotion path',
    ]
  },
  {
    id: 'krn-jr-fullstack',
    title: 'Junior Full-Stack Web Developer',
    department: 'Engineering',
    type: 'Full-time',
    location: '100% Remote (India)',
    experience: 'Freshers & Experienced',
    badge: 'Entry Level',
    shortDescription: 'Great opportunity for developers looking to build modern frontend interfaces and Node.js backend services.',
    responsibilities: [
      'Build reusable React components and integrate with RESTful & GraphQL backend APIs.',
      'Assist in maintaining database schemas in PostgreSQL and MongoDB.',
      'Collaborate with UI designers to implement pixel-perfect, mobile-responsive web pages.',
      'Participate in peer code reviews and agile software development workflows.',
    ],
    requirements: [
      'Open to freshers or candidates with CS/IT background.',
      'Basic knowledge of HTML5, CSS3, JavaScript (ES6+), React.js, and Node.js.',
      'Familiarity with Git version control and GitHub workflows.',
      'Strong problem-solving mindset and eagerness to learn modern web tools.',
    ],
    benefits: [
      '100% Remote work from anywhere in India',
      'Home office setup stipend',
      'Learning & certification assistance',
      'Health insurance for employee & dependents',
    ]
  },
  {
    id: 'krn-jr-mobile',
    title: 'Associate Mobile Application Developer',
    department: 'Engineering',
    type: 'Full-time',
    location: '100% Remote (India)',
    experience: 'Freshers & Experienced',
    badge: 'Entry Level',
    shortDescription: 'Kickstart your mobile development career building cross-platform React Native and Flutter apps.',
    responsibilities: [
      'Develop cross-platform mobile user interfaces using React Native or Flutter.',
      'Implement API integrations, local state management, and basic offline storage.',
      'Test mobile builds across iOS simulators and Android emulators.',
      'Fix UI bugs and improve app rendering performance under senior developer guidance.',
    ],
    requirements: [
      'Open to freshers or candidates with personal projects in React Native, Flutter, or native Android/iOS.',
      'Understanding of mobile app UI lifecycle, state management, and API consumption.',
      'Familiarity with Xcode, Android Studio, and JavaScript/Dart fundamentals.',
      'Passionate about mobile user experience and clean interfaces.',
    ],
    benefits: [
      '100% Remote flexibility',
      'Test devices & simulator access',
      'Monthly wellness allowance',
      'Continuous mentorship from lead engineers',
    ]
  },
  {
    id: 'krn-fullstack-sr',
    title: 'Full-Stack Software Engineer (React & Cloud)',
    department: 'Engineering',
    type: 'Full-time',
    location: '100% Remote (India)',
    experience: 'Freshers & Experienced',
    badge: 'Hot Role',
    shortDescription: 'Lead end-to-end development of enterprise web platforms using React, Node.js, and cloud-native architectures.',
    responsibilities: [
      'Architect and construct high-throughput web applications and REST/GraphQL microservices.',
      'Work closely with UI/UX designers to translate Figma prototypes into pixel-perfect React components.',
      'Optimize frontend bundle sizes, rendering performance, and web vitals for maximum efficiency.',
      'Participate in code reviews, technical design docs, and engineering workflows.',
    ],
    requirements: [
      'Open to candidates with experience or strong knowledge in Javascript/Typescript, React, and Node.js.',
      'Proficiency with PostgreSQL, Redis, and cloud deployments (AWS, Vercel, Docker).',
      'Strong grasp of state management, async patterns, web security, and automated testing.',
      'Excellent written and spoken English communication skills.',
    ],
    benefits: [
      '100% Remote flexibility across India',
      'Annual home office setup budget',
      'Comprehensive health insurance & wellness cover',
      'Performance bonuses & stock options',
    ]
  },

  // --- AI & DATA SCIENCE ---
  {
    id: 'krn-jr-ai',
    title: 'AI / ML Developer Associate',
    department: 'AI & Data Science',
    type: 'Full-time',
    location: '100% Remote (India)',
    experience: 'Freshers & Experienced',
    badge: 'Featured',
    shortDescription: 'Open position for AI enthusiasts eager to build LLM pipelines, prompt engineering workflows, and data processing scripts.',
    responsibilities: [
      'Assist in cleaning, preprocessing, and structuring unstructured datasets for AI model training.',
      'Help integrate OpenAI, Claude, and open-weights LLMs via Python APIs.',
      'Write data ingestion scripts and test vector database indexing in Pinecone/Chroma.',
      'Benchmark model outputs, prompt accuracy, and latency across client use cases.',
    ],
    requirements: [
      'Open to freshers or experienced candidates with Python, Data Science, or Machine Learning background.',
      'Good proficiency in Python, NumPy, Pandas, and RESTful API consumption.',
      'Familiarity with basic AI concepts (embeddings, RAG, prompt tuning, vector search).',
      'Enthusiastic about generative AI tools, LangChain, and machine learning pipelines.',
    ],
    benefits: [
      '100% Remote work environment',
      'GPU cloud compute lab credits',
      'Mentorship from Senior AI Architects',
      'Health insurance & learning budget',
    ]
  },
  {
    id: 'krn-ai-arch',
    title: 'AI & Machine Learning Solutions Architect',
    department: 'AI & Data Science',
    type: 'Full-time',
    location: '100% Remote (India)',
    experience: 'Freshers & Experienced',
    badge: 'Featured',
    shortDescription: 'Architect state-of-the-art LLM pipelines, RAG systems, and enterprise machine learning integrations.',
    responsibilities: [
      'Design end-to-end Retrieval-Augmented Generation (RAG) and LLM orchestration systems for enterprise clients.',
      'Fine-tune open-weights models (Llama 3, Mistral) and customize embedding pipelines for domain-specific data.',
      'Integrate vector databases (Pinecone, Qdrant, Milvus) with serverless microservices for low-latency queries.',
      'Evaluate model performance, latency, and token cost economics to deliver optimal client architectures.',
    ],
    requirements: [
      'Degree or equivalent experience in CS, Machine Learning, or AI.',
      'Hands-on experience with Python, PyTorch, LangChain, LlamaIndex, and OpenAI/Claude APIs.',
      'Understanding of vector embeddings, semantic search, and MLOps deployment.',
      'Track record of deploying AI systems into real-world production environments.',
    ],
    benefits: [
      'Unlimited GPU cluster computing credits for research',
      'Equity options & annual performance bonus',
      '100% Remote work from anywhere in India',
      'Full conference & publication sponsorship',
    ]
  },

  // --- PRODUCT DESIGN ---
  {
    id: 'krn-jr-ux',
    title: 'UI/UX Designer',
    department: 'Product Design',
    type: 'Full-time',
    location: '100% Remote (India)',
    experience: 'Freshers & Experienced',
    badge: 'Creative',
    shortDescription: 'Join our design team to create wireframes, UI components, design tokens, and user flow diagrams.',
    responsibilities: [
      'Assist in designing clean wireframes, mobile app screens, and web page layouts in Figma.',
      'Help maintain and organize component libraries and UI design systems.',
      'Conduct competitive design research and prepare user journey maps.',
      'Collaborate with frontend engineers to ensure accurate visual implementation of design specs.',
    ],
    requirements: [
      'Open to freshers or experienced candidates with a design portfolio showcasing UI/UX projects in Figma.',
      'Understanding of visual design fundamentals, typography, color theory, and layout grids.',
      'Familiarity with Figma components, auto-layout, and interactive prototyping.',
      'Good communication skills to explain visual design choices.',
    ],
    benefits: [
      '100% Remote flexibility',
      'Design tool subscriptions & hardware allowance',
      'Direct guidance from Lead Product Designers',
      'Comprehensive health coverage',
    ]
  },
  {
    id: 'krn-product-designer',
    title: 'UI/UX Product Designer',
    department: 'Product Design',
    type: 'Full-time',
    location: '100% Remote (India)',
    experience: 'Freshers & Experienced',
    badge: 'Creative',
    shortDescription: 'Shape the visual identity, design systems, and user experiences for next-generation client software.',
    responsibilities: [
      'Create high-fidelity UI designs, user flows, and interactive prototypes for web and mobile products.',
      'Maintain and evolve Kernalytics core design tokens, typography systems, and UI component libraries.',
      'Conduct user interviews, usability testing, and synthesize feedback into tangible design improvements.',
      'Collaborate directly with frontend engineers to ensure flawless implementation of micro-interactions.',
    ],
    requirements: [
      'Open for freshers & experienced UI/UX designers in tech agency or SaaS environment.',
      'Portfolio demonstrating understanding of typography, visual hierarchy, and interaction design.',
      'Proficiency in Figma, FigJam, Framer, and modern design system practices.',
      'Ability to articulate design rationale clearly to non-technical client stakeholders.',
    ],
    benefits: [
      'Top-tier MacBook Pro setup',
      'Annual design learning & workshop stipend',
      'Flexible working hours & async culture',
      'Paid annual team retreat',
    ]
  },

  // --- CLOUD & INFRASTRUCTURE ---
  {
    id: 'krn-jr-devops',
    title: 'Cloud & DevOps Engineer',
    department: 'Cloud & Infrastructure',
    type: 'Full-time',
    location: '100% Remote (India)',
    experience: 'Freshers & Experienced',
    badge: 'Urgent',
    shortDescription: 'Cloud role focused on CI/CD automation, Docker containerization, and cloud monitoring tools.',
    responsibilities: [
      'Assist in writing Dockerfiles and setting up containerized dev environments.',
      'Help configure GitHub Actions pipelines for automated code building and testing.',
      'Monitor cloud infrastructure logs using Prometheus, Grafana, and AWS CloudWatch.',
      'Learn Infrastructure as Code (Terraform) and basic Kubernetes cluster administration.',
    ],
    requirements: [
      'Open to freshers or candidates with AWS/Linux/Docker knowledge or certifications.',
      'Basic knowledge of Linux CLI commands, Bash scripting, and Git.',
      'Understanding of fundamental networking concepts (DNS, HTTP/HTTPS, SSH, IP addressing).',
      'Eager to build a long-term career in Cloud & DevOps engineering.',
    ],
    benefits: [
      '100% Remote work from anywhere in India',
      'Cloud lab environment & certification fee reimbursement',
      'Health insurance for employee & family',
      'Mentorship from Senior DevOps Leads',
    ]
  },
  {
    id: 'krn-devops-spec',
    title: 'Cloud Infrastructure Specialist',
    department: 'Cloud & Infrastructure',
    type: 'Full-time',
    location: '100% Remote (India)',
    experience: 'Freshers & Experienced',
    badge: 'Urgent',
    shortDescription: 'Architect scalable Kubernetes infrastructure, automated CI/CD pipelines, and Zero-Trust cloud security.',
    responsibilities: [
      'Manage multi-region AWS and GCP cloud infrastructure using Terraform and Ansible.',
      'Construct automated CI/CD pipelines (GitHub Actions, GitLab CI) with integrated SAST security scanning.',
      'Ensure system availability through proactive Prometheus, Grafana, and Datadog monitoring.',
      'Implement Zero-Trust access policies, automated backup systems, and disaster recovery procedures.',
    ],
    requirements: [
      'Open to freshers and experienced candidates managing cloud infrastructure.',
      'Experience or knowledge with Kubernetes, Helm, Docker, and Infrastructure as Code (Terraform).',
      'Scripting skills in Bash, Python, or Go.',
      'Solid foundation in networking, VPC peering, SSL/TLS, and IAM security models.',
    ],
    benefits: [
      'Generous hardware & cloud lab budget',
      '100% company-covered health insurance premiums',
      'Flexible PTO policy',
      'Quarterly performance bonuses',
    ]
  },

  // --- SECURITY & GOVERNANCE ---
  {
    id: 'krn-jr-cyber',
    title: 'Cybersecurity Analyst',
    department: 'Security & Governance',
    type: 'Full-time',
    location: '100% Remote (India)',
    experience: 'Freshers & Experienced',
    badge: 'Security',
    shortDescription: 'Cybersecurity role reviewing vulnerability scans, web security logs, and compliance documentation.',
    responsibilities: [
      'Assist in executing automated web application vulnerability scans (Burp Suite, OWASP ZAP).',
      'Review SAST / DAST code security alerts and coordinate remediation with dev teams.',
      'Help compile documentation for SOC2, ISO 27001, and HIPAA compliance readiness.',
      'Monitor security log alerts and assist in initial incident analysis.',
    ],
    requirements: [
      'Open to freshers or candidates with security certifications (CEH, Security+).',
      'Basic knowledge of OWASP Top 10 web vulnerabilities and network security concepts.',
      'Familiarity with Linux, HTTP request headers, and basic security auditing tools.',
      'High attention to detail and strong ethical standards.',
    ],
    benefits: [
      '100% Remote work setup',
      'Security certification exam sponsorship',
      'Direct guidance from Cybersecurity Lead Auditors',
      'Comprehensive medical insurance',
    ]
  },
  {
    id: 'krn-cyber-lead',
    title: 'Cybersecurity & Compliance Audit Lead',
    department: 'Security & Governance',
    type: 'Full-time / Contract',
    location: '100% Remote (India)',
    experience: 'Freshers & Experienced',
    badge: 'Security',
    shortDescription: 'Lead penetration testing, vulnerability assessments, and SOC2 / ISO 27001 compliance for client applications.',
    responsibilities: [
      'Conduct rigorous code audits, penetration tests, and vulnerability scans across web and cloud systems.',
      'Guide clients and internal development teams through SOC2 Type II, HIPAA, and ISO 27001 compliance readiness.',
      'Design incident response playbooks and oversee zero-day vulnerability mitigations.',
      'Establish continuous threat intelligence and identity access governance across client projects.',
    ],
    requirements: [
      'Open to freshers and experienced candidates in cybersecurity or cloud compliance auditing.',
      'Industry certifications such as CISSP, CEH, or OSCP valued.',
      'Hands-on expertise with OWASP Top 10, Burp Suite, Wireshark, and security analysis.',
      'Demonstrated experience leading enterprise compliance audits.',
    ],
    benefits: [
      'High-impact client exposure across fintech and healthtech',
      'Certification exam & training reimbursement',
      'Competitive bonus structure',
      'Full healthcare and insurance coverage',
    ]
  }
];

const DEPARTMENTS = ['All', 'Engineering', 'AI & Data Science', 'Product Design', 'Cloud & Infrastructure', 'Security & Governance'];
const WORK_TYPES = ['All', 'Full-time', 'Full-time / Contract'];

export default function Careers() {
  const [selectedDept, setSelectedDept] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeJobModal, setActiveJobModal] = useState(null);
  
  // Application Form State
  const [selectedJobId, setSelectedJobId] = useState(JOB_ROLES[0].id);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    linkedin: '',
    portfolio: '',
    experienceLevel: 'Fresher / Entry-Level (0-1 yr)',
    expectedSalary: '',
    startDate: '2 Weeks Notice',
    coverLetter: '',
  });

  const [resumeFile, setResumeFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(null);
  const [formError, setFormError] = useState('');

  const formSectionRef = useRef(null);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (activeJobModal || submitSuccess) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeJobModal, submitSuccess]);

  // Sync selected job title into form when modal apply button is clicked
  const handleApplyClick = (job) => {
    setSelectedJobId(job.id);
    setActiveJobModal(null);
    if (formSectionRef.current) {
      formSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Filter jobs based on department and search term
  const filteredJobs = JOB_ROLES.filter((job) => {
    const matchesDept = selectedDept === 'All' || job.department === selectedDept;
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          job.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          job.department.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesSearch;
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      validateAndSetFile(file);
    }
  };

  const handleFileSelect = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      validateAndSetFile(file);
    }
  };

  const validateAndSetFile = (file) => {
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!allowedTypes.includes(file.type)) {
      setFormError('Invalid file type. Please upload a PDF or Word document (.pdf, .doc, .docx).');
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      setFormError('File size exceeds 10MB limit. Please upload a smaller document.');
      return;
    }
    setFormError('');
    setResumeFile(file);
  };

  const handleSubmitApplication = (e) => {
    e.preventDefault();
    setFormError('');

    // Basic Validation
    if (!formData.fullName.trim()) {
      setFormError('Please enter your full name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setFormError('Please enter a valid email address.');
      return;
    }
    if (!formData.phone.trim()) {
      setFormError('Please enter your contact phone number.');
      return;
    }
    if (!formData.location.trim()) {
      setFormError('Please enter your current city or location.');
      return;
    }
    if (!formData.linkedin.trim()) {
      setFormError('Please provide your LinkedIn or GitHub profile link.');
      return;
    }
    if (!resumeFile) {
      setFormError('Please attach your Resume / CV (PDF or DOCX).');
      return;
    }

    setIsSubmitting(true);

    // Simulate API network latency
    setTimeout(() => {
      setIsSubmitting(false);
      const trackingCode = `KRN-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      const currentRole = JOB_ROLES.find(r => r.id === selectedJobId) || JOB_ROLES[0];
      
      setSubmitSuccess({
        trackingCode,
        applicantName: formData.fullName,
        roleTitle: currentRole.title,
        email: formData.email,
        submittedAt: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
      });

      // Reset form fields
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        location: '',
        linkedin: '',
        portfolio: '',
        experienceLevel: 'Senior (5+ yrs)',
        expectedSalary: '',
        startDate: '2 Weeks Notice',
        coverLetter: '',
      });
      setResumeFile(null);
    }, 1200);
  };

  return (
    <div className="bg-[#FAFAFA] min-h-screen text-[#141414] pt-28 pb-20 font-sans">
      
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-[#141414] text-white py-20 px-6 md:px-12 border-b border-[#E5E5E5]/10">
        <div className="absolute inset-0 bg-[radial-gradient(#1F514C_1px,transparent_1px)] [background-size:24px_24px] opacity-25"></div>
        <div className="max-w-[1280px] mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#1F514C]/40 border border-[#EDFFE3]/20 px-4 py-1.5 rounded-full text-xs font-semibold text-[#EDFFE3] mb-6">
            <span className="w-2 h-2 rounded-full bg-[#EDFFE3] animate-pulse"></span>
            <span>100% Remote Across India · {JOB_ROLES.length} Open Positions</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight text-white max-w-3xl leading-tight">
            Build the future of digital engineering with <span className="text-[#EDFFE3] underline decoration-[#1F514C]">Kernalytics</span>
          </h1>

          <p className="mt-6 text-lg text-[#E5E5E5]/80 max-w-2xl leading-relaxed font-light">
            We are a team of visionary software engineers, AI architects, and UX strategists crafting elite digital solutions. Join us to solve challenging problems with extraordinary teammates.
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/10 max-w-4xl">
            <div>
              <div className="text-3xl font-bold font-serif text-[#EDFFE3]">100%</div>
              <div className="text-xs text-[#E5E5E5]/60 mt-1 uppercase tracking-wider">Remote (Pan India)</div>
            </div>
            <div>
              <div className="text-3xl font-bold font-serif text-white">4.9/5</div>
              <div className="text-xs text-[#E5E5E5]/60 mt-1 uppercase tracking-wider">Glassdoor Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold font-serif text-[#EDFFE3]">₹50k</div>
              <div className="text-xs text-[#E5E5E5]/60 mt-1 uppercase tracking-wider">Annual Tech Stipend</div>
            </div>
            <div>
              <div className="text-3xl font-bold font-serif text-white">24 Days</div>
              <div className="text-xs text-[#E5E5E5]/60 mt-1 uppercase tracking-wider">Paid Time Off + Holidays</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 px-6 md:px-12 max-w-[1280px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-xs font-semibold text-[#1F514C] uppercase tracking-wider mb-2">Life at Kernalytics</h2>
          <p className="text-3xl font-serif font-bold text-[#141414]">Why top talent thrives with us</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-[#E5E5E5] shadow-xs hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-[#1F514C]/10 text-[#1F514C] flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-2xl">laptop_chromebook</span>
            </div>
            <h3 className="text-lg font-bold text-[#141414] mb-2">Modern Stack & Autonomy</h3>
            <p className="text-sm text-[#636363] leading-relaxed">
              Work with modern frameworks, zero legacy technical debt, and maximum freedom to choose the best architectural approach.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-[#E5E5E5] shadow-xs hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-[#1F514C]/10 text-[#1F514C] flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-2xl">school</span>
            </div>
            <h3 className="text-lg font-bold text-[#141414] mb-2">Continuous Growth Stipend</h3>
            <p className="text-sm text-[#636363] leading-relaxed">
              Every team member receives annual budgets for AI courses, cloud certifications, books, and international tech conferences.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-[#E5E5E5] shadow-xs hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-[#1F514C]/10 text-[#1F514C] flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-2xl">favorite</span>
            </div>
            <h3 className="text-lg font-bold text-[#141414] mb-2">Comprehensive Well-being</h3>
            <p className="text-sm text-[#636363] leading-relaxed">
              Premium health insurance, mental wellness support, flexible work hours, and mandatory unplugged leave policies.
            </p>
          </div>
        </div>
      </section>

      {/* Open Roles Section */}
      <section className="py-12 px-6 md:px-12 max-w-[1280px] mx-auto border-t border-[#E5E5E5]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-xs font-semibold text-[#1F514C] uppercase tracking-wider mb-2">Opportunities</h2>
            <h3 className="text-3xl font-serif font-bold text-[#141414]">Current Open Positions</h3>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[#636363] text-xl">search</span>
            <input
              type="text"
              placeholder="Search by role or skill..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-[#E5E5E5] rounded-xl pl-10 pr-4 py-2.5 text-sm text-[#141414] placeholder-[#636363]/60 focus:outline-none focus:border-[#1F514C] focus:ring-1 focus:ring-[#1F514C] transition-all"
            />
          </div>
        </div>

        {/* Department Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-8">
          {DEPARTMENTS.map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDept(dept)}
              className={`px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                selectedDept === dept
                  ? 'bg-[#1F514C] text-white shadow-xs font-semibold'
                  : 'bg-white text-[#636363] hover:text-[#141414] border border-[#E5E5E5] hover:bg-[#E5E5E5]/40'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Roles List */}
        {filteredJobs.length === 0 ? (
          <div className="bg-white rounded-2xl border border-[#E5E5E5] p-12 text-center my-8">
            <span className="material-symbols-outlined text-4xl text-[#636363]/50 mb-2">work_off</span>
            <h4 className="text-lg font-bold text-[#141414]">No open positions found</h4>
            <p className="text-xs text-[#636363] mt-1">Try resetting your department filter or search query.</p>
            <button
              onClick={() => { setSelectedDept('All'); setSearchQuery(''); }}
              className="mt-4 text-xs text-[#1F514C] font-semibold hover:underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {filteredJobs.map((job) => (
              <motion.div
                key={job.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl border border-[#E5E5E5] p-6 md:p-8 hover:border-[#1F514C]/40 hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 group"
              >
                <div className="space-y-3 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="bg-[#1F514C]/10 text-[#1F514C] text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      {job.department}
                    </span>
                    <span className="bg-[#FAFAFA] border border-[#E5E5E5] text-[#636363] text-[11px] font-medium px-2.5 py-0.5 rounded-full">
                      {job.type}
                    </span>
                    <span className="bg-[#EDFFE3] text-[#1F514C] text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                      {job.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-serif text-[#141414] group-hover:text-[#1F514C] transition-colors">
                    {job.title}
                  </h3>

                  <p className="text-xs text-[#636363] leading-relaxed">
                    {job.shortDescription}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-[#636363] pt-1">
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-sm text-[#1F514C]">location_on</span>
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-sm text-[#1F514C]">work_history</span>
                      {job.experience}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0 pt-4 md:pt-0 border-t md:border-t-0 border-[#E5E5E5]">
                  <button
                    onClick={() => setActiveJobModal(job)}
                    className="px-4 py-2.5 border border-[#E5E5E5] hover:border-[#141414] text-[#141414] text-xs font-semibold rounded-xl transition-all hover:bg-[#FAFAFA]"
                  >
                    View Details
                  </button>

                  <button
                    onClick={() => {
                      setSelectedJobId(job.id);
                      if (formSectionRef.current) {
                        formSectionRef.current.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="px-5 py-2.5 bg-[#1F514C] text-white hover:bg-[#153B37] text-xs font-semibold rounded-xl transition-all shadow-xs flex items-center gap-1.5"
                  >
                    <span>Apply Now</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* Role Details Modal */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {activeJobModal && (
            <div
              onClick={() => setActiveJobModal(null)}
              className="fixed inset-0 z-[999] flex items-center justify-center p-4 md:p-6 bg-[#141414]/75 backdrop-blur-sm overflow-y-auto"
            >
              <motion.div
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white rounded-3xl max-w-3xl w-full my-auto max-h-[85vh] overflow-y-auto p-6 md:p-10 shadow-2xl border border-[#E5E5E5] relative"
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveJobModal(null)}
                  className="absolute top-6 right-6 p-2 text-[#636363] hover:text-[#141414] rounded-full hover:bg-[#FAFAFA] transition-colors"
                >
                  <span className="material-symbols-outlined text-2xl">close</span>
                </button>

                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-[#1F514C]/10 text-[#1F514C] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        {activeJobModal.department}
                      </span>
                      <span className="bg-[#EDFFE3] text-[#1F514C] text-xs font-bold px-3 py-1 rounded-full">
                        {activeJobModal.type}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#141414]">
                      {activeJobModal.title}
                    </h2>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-[#636363] mt-3">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm text-[#1F514C]">location_on</span>
                        {activeJobModal.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm text-[#1F514C]">work_history</span>
                        {activeJobModal.experience}
                      </span>
                    </div>
                  </div>

                  <div className="border-t border-[#E5E5E5] pt-6 space-y-6">
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-wider text-[#1F514C] mb-2">Role Overview</h3>
                      <p className="text-sm text-[#636363] leading-relaxed">
                        {activeJobModal.shortDescription}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-wider text-[#1F514C] mb-3">Key Responsibilities</h3>
                      <ul className="space-y-2 text-xs text-[#636363] list-disc list-inside">
                        {activeJobModal.responsibilities.map((resp, idx) => (
                          <li key={idx} className="leading-relaxed">{resp}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-wider text-[#1F514C] mb-3">Requirements & Qualifications</h3>
                      <ul className="space-y-2 text-xs text-[#636363] list-disc list-inside">
                        {activeJobModal.requirements.map((req, idx) => (
                          <li key={idx} className="leading-relaxed">{req}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-wider text-[#1F514C] mb-3">Perks & Benefits</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {activeJobModal.benefits.map((ben, idx) => (
                          <div key={idx} className="flex items-center gap-2 bg-[#FAFAFA] p-2.5 rounded-xl border border-[#E5E5E5]/70">
                            <span className="material-symbols-outlined text-sm text-[#1F514C]">check_circle</span>
                            <span className="text-[#141414] font-medium">{ben}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-[#E5E5E5] pt-6 flex items-center justify-between">
                    <button
                      onClick={() => setActiveJobModal(null)}
                      className="text-xs text-[#636363] hover:text-[#141414] font-semibold"
                    >
                      Close
                    </button>
                    <button
                      onClick={() => handleApplyClick(activeJobModal)}
                      className="px-6 py-3 bg-[#1F514C] text-white hover:bg-[#153B37] text-xs font-semibold rounded-xl transition-all shadow-md flex items-center gap-2"
                    >
                      <span>Proceed to Application Form</span>
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}

      {/* Application Form Section */}
      <section ref={formSectionRef} className="py-16 px-6 md:px-12 max-w-[1280px] mx-auto border-t border-[#E5E5E5]">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-10">
            <span className="bg-[#1F514C]/10 text-[#1F514C] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-3">
              Join Our Engineering Team
            </span>
            <h2 className="text-3xl font-serif font-bold text-[#141414]">Kernalytics Application Form</h2>
            <p className="text-xs text-[#636363] mt-2 max-w-xl mx-auto">
              Please complete the form below with your details and resume. Our talent acquisition leads review applications within 48 business hours.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-[#E5E5E5] p-8 md:p-12 shadow-lg relative">
            
            {/* Form Error Banner */}
            {formError && (
              <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-3">
                <span className="material-symbols-outlined text-lg">error</span>
                <span>{formError}</span>
              </div>
            )}

            <form onSubmit={handleSubmitApplication} className="space-y-8">
              
              {/* Select Job Role */}
              <div>
                <label className="block text-xs font-bold text-[#141414] uppercase tracking-wider mb-2">
                  Select Position Applied For *
                </label>
                <select
                  value={selectedJobId}
                  onChange={(e) => setSelectedJobId(e.target.value)}
                  className="w-full bg-[#FAFAFA] border border-[#E5E5E5] rounded-xl px-4 py-3 text-sm text-[#141414] font-medium focus:outline-none focus:border-[#1F514C] focus:ring-1 focus:ring-[#1F514C]"
                >
                  {JOB_ROLES.map((role) => (
                    <option key={role.id} value={role.id}>
                      {role.title} ({role.department} - {role.location})
                    </option>
                  ))}
                </select>
              </div>

              {/* Personal Details */}
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#1F514C] border-b border-[#E5E5E5] pb-2">
                  1. Candidate Contact Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#141414] mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full bg-[#FAFAFA] border border-[#E5E5E5] rounded-xl px-4 py-2.5 text-sm text-[#141414] focus:outline-none focus:border-[#1F514C]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#141414] mb-1">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="s.jenkins@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-[#FAFAFA] border border-[#E5E5E5] rounded-xl px-4 py-2.5 text-sm text-[#141414] focus:outline-none focus:border-[#1F514C]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#141414] mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-[#FAFAFA] border border-[#E5E5E5] rounded-xl px-4 py-2.5 text-sm text-[#141414] focus:outline-none focus:border-[#1F514C]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#141414] mb-1">Current Location (City, State / Country) *</label>
                    <input
                      type="text"
                      name="location"
                      placeholder="e.g. Bengaluru, KA / Mumbai, MH / Remote"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full bg-[#FAFAFA] border border-[#E5E5E5] rounded-xl px-4 py-2.5 text-sm text-[#141414] focus:outline-none focus:border-[#1F514C]"
                    />
                  </div>
                </div>
              </div>

              {/* Profiles & Experience */}
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#1F514C] border-b border-[#E5E5E5] pb-2">
                  2. Profiles & Qualifications
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#141414] mb-1">LinkedIn or GitHub Profile URL *</label>
                    <input
                      type="url"
                      name="linkedin"
                      placeholder="https://linkedin.com/in/username"
                      value={formData.linkedin}
                      onChange={handleInputChange}
                      className="w-full bg-[#FAFAFA] border border-[#E5E5E5] rounded-xl px-4 py-2.5 text-sm text-[#141414] focus:outline-none focus:border-[#1F514C]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#141414] mb-1">Personal Portfolio / Website</label>
                    <input
                      type="url"
                      name="portfolio"
                      placeholder="https://yourportfolio.dev"
                      value={formData.portfolio}
                      onChange={handleInputChange}
                      className="w-full bg-[#FAFAFA] border border-[#E5E5E5] rounded-xl px-4 py-2.5 text-sm text-[#141414] focus:outline-none focus:border-[#1F514C]"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-xs font-medium text-[#141414] mb-1">Experience Level *</label>
                    <select
                      name="experienceLevel"
                      value={formData.experienceLevel}
                      onChange={handleInputChange}
                      className="w-full bg-[#FAFAFA] border border-[#E5E5E5] rounded-xl px-4 py-2.5 text-sm text-[#141414] focus:outline-none focus:border-[#1F514C]"
                    >
                      <option value="Fresher / Entry-Level (0-1 yr)">Fresher / Entry-Level (0-1 yr)</option>
                      <option value="Junior (1-2 yrs)">Junior (1-2 yrs)</option>
                      <option value="Mid-Level (3-4 yrs)">Mid-Level (3-4 yrs)</option>
                      <option value="Senior (5+ yrs)">Senior (5+ yrs)</option>
                      <option value="Lead / Architect (8+ yrs)">Lead / Architect (8+ yrs)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Resume File Dropzone */}
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#1F514C] border-b border-[#E5E5E5] pb-2">
                  3. Resume / CV Attachment *
                </h3>

                <div
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={handleFileDrop}
                  className="relative border-2 border-dashed border-[#E5E5E5] hover:border-[#1F514C] rounded-2xl p-8 text-center bg-[#FAFAFA] transition-all cursor-pointer group"
                >
                  {resumeFile ? (
                    <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-[#E5E5E5] max-w-md mx-auto relative z-10">
                      <div className="flex items-center gap-3 text-left">
                        <span className="material-symbols-outlined text-2xl text-[#1F514C]">description</span>
                        <div>
                          <p className="text-xs font-bold text-[#141414] truncate max-w-[200px]">{resumeFile.name}</p>
                          <p className="text-[10px] text-[#636363]">{(resumeFile.size / 1024 / 1024).toFixed(2)} MB</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setResumeFile(null);
                        }}
                        className="text-xs text-red-500 hover:text-red-700 font-semibold px-2 py-1 relative z-20"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <label htmlFor="resume-upload-input" className="block cursor-pointer">
                      <span className="material-symbols-outlined text-4xl text-[#1F514C] mb-2 group-hover:scale-110 transition-transform">cloud_upload</span>
                      <p className="text-xs font-bold text-[#141414]">
                        Drag and drop your Resume / CV here, or <span className="text-[#1F514C] underline">browse files</span>
                      </p>
                      <p className="text-[10px] text-[#636363] mt-1">Supports PDF, DOC, DOCX up to 10MB</p>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileSelect}
                        className="hidden"
                        id="resume-upload-input"
                      />
                    </label>
                  )}
                </div>
              </div>

              {/* Cover Letter */}
              <div>
                <label className="block text-xs font-medium text-[#141414] mb-1">
                  Why Kernalytics? / Cover Statement (Optional)
                </label>
                <textarea
                  name="coverLetter"
                  rows="4"
                  placeholder="Tell us briefly about your engineering background and what interests you about Kernalytics Solutions..."
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  className="w-full bg-[#FAFAFA] border border-[#E5E5E5] rounded-xl px-4 py-3 text-sm text-[#141414] focus:outline-none focus:border-[#1F514C]"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-[#1F514C] hover:bg-[#153B37] text-white font-semibold text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    <span>Submitting Application...</span>
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-lg">send</span>
                    <span>Submit Job Application</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Success Modal Notification */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {submitSuccess && (
            <div
              onClick={() => setSubmitSuccess(null)}
              className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-[#141414]/75 backdrop-blur-sm overflow-y-auto"
            >
              <motion.div
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white rounded-3xl max-w-lg w-full my-auto p-8 text-center shadow-2xl border border-[#E5E5E5] relative"
              >
                <div className="w-16 h-16 rounded-full bg-[#EDFFE3] text-[#1F514C] flex items-center justify-center mx-auto mb-4 border border-[#1F514C]/20">
                  <span className="material-symbols-outlined text-3xl">task_alt</span>
                </div>

                <span className="bg-[#1F514C]/10 text-[#1F514C] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-2">
                  Application Received
                </span>

                <h3 className="text-2xl font-serif font-bold text-[#141414] mb-2">
                  Thank you, {submitSuccess.applicantName}!
                </h3>

                <p className="text-xs text-[#636363] leading-relaxed mb-6">
                  Your application for <strong className="text-[#141414]">{submitSuccess.roleTitle}</strong> has been logged in the Kernalytics hiring database.
                </p>

                <div className="bg-[#FAFAFA] border border-[#E5E5E5] rounded-2xl p-4 text-left space-y-2 text-xs mb-6">
                  <div className="flex justify-between">
                    <span className="text-[#636363]">Tracking Code:</span>
                    <span className="font-mono font-bold text-[#1F514C]">{submitSuccess.trackingCode}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#636363]">Confirmation Email:</span>
                    <span className="font-semibold text-[#141414]">{submitSuccess.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#636363]">Date Submitted:</span>
                    <span className="text-[#141414]">{submitSuccess.submittedAt}</span>
                  </div>
                </div>

                <p className="text-[11px] text-[#636363] mb-6">
                  Our recruiting team will contact you via email regarding technical interview scheduling within 48 hours.
                </p>

                <button
                  onClick={() => setSubmitSuccess(null)}
                  className="w-full py-3 bg-[#1F514C] hover:bg-[#153B37] text-white font-semibold text-xs rounded-xl transition-all shadow-xs"
                >
                  Done / Submit Another Application
                </button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}

    </div>
  );
}
