
import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  Search, 
  ShieldCheck, 
  BookOpen, 
  Link, 
  ArrowRight, 
  FileText, 
  Database, 
  Zap, 
  HelpCircle, 
  AlertTriangle,
  Layers,
  Activity,
  ChevronRight,
  Menu,
  X,
  Plus,
  Minus
} from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3 border-b border-slate-100 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center space-x-10">
          <div className="flex items-center space-x-2 group cursor-pointer">
            <div className="w-9 h-9 bg-slate-900 rounded-lg flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
              <Search size={20} strokeWidth={2.5} />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">MedSearch <span className="text-cyan-600">AI</span></span>
          </div>
          <div className="hidden lg:flex space-x-8 text-sm font-semibold text-slate-500">
            <a href="#how-it-works" className="hover:text-cyan-600 transition-colors">Methodology</a>
            <a href="#features" className="hover:text-cyan-600 transition-colors">Evidence Tiers</a>
            <a href="#pricing" className="hover:text-cyan-600 transition-colors">Pricing</a>
          </div>
        </div>
        
        <div className="flex items-center space-x-5">
          <button className="hidden sm:block text-sm font-bold text-slate-600 hover:text-slate-900 transition-colors">Sign In</button>
          <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-cyan-600 transition-all shadow-lg hover:shadow-cyan-200">
            Get Access
          </button>
          <button className="lg:hidden text-slate-600" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section className="relative pt-32 lg:pt-48 pb-20 overflow-hidden bg-medical-grid">
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center space-x-2 bg-slate-100 border border-slate-200 rounded-full px-4 py-1.5 mb-8 animate-fade-in-up">
          <ShieldCheck size={14} className="text-cyan-600" />
          <span className="text-slate-700 text-[10px] font-bold uppercase tracking-widest">PubMed-Only Retrieval • Source-Restricted AI</span>
        </div>
        
        <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8 animate-fade-in-up animation-delay-200">
          Clinical answers grounded in <br />
          <span className="text-gradient">PubMed, not opinions.</span>
        </h1>
        
        <p className="text-xl text-slate-600 mb-12 max-w-2xl animate-fade-in-up animation-delay-400">
          The evidence-first research assistant for physicians who require source-restricted, peer-reviewed accuracy for every clinical claim.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-24 animate-fade-in-up animation-delay-600">
          <button className="w-full sm:w-auto bg-cyan-600 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-cyan-700 transition-all shadow-xl shadow-cyan-100 flex items-center justify-center group">
            Start Searching <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full sm:w-auto bg-white border border-slate-200 text-slate-700 px-10 py-5 rounded-full text-lg font-bold hover:bg-slate-50 transition-all flex items-center justify-center">
             View Demo <ChevronRight size={18} className="ml-1" />
          </button>
        </div>
      </div>

      <div className="relative max-w-5xl mx-auto animate-fade-in-up animation-delay-600">
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10"></div>
        <div className="bg-white rounded-[2rem] shadow-[0_40px_120px_rgba(15,23,42,0.15)] border border-slate-200 overflow-hidden">
          <div className="bg-slate-50 h-14 border-b border-slate-100 flex items-center px-8 justify-between">
            <div className="flex space-x-1.5">
              <div className="w-3 h-3 rounded-full bg-slate-200"></div>
              <div className="w-3 h-3 rounded-full bg-slate-200"></div>
              <div className="w-3 h-3 rounded-full bg-slate-200"></div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Workspace: Evidence-Synthesis-74</div>
              <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
            </div>
          </div>
          <div className="p-10 space-y-10">
            <div className="flex items-start space-x-6">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                <Search size={18} className="text-slate-400" />
              </div>
              <div className="flex-1 bg-slate-50 p-6 rounded-2xl rounded-tl-none border border-slate-100">
                <p className="text-slate-800 font-medium">"Latest meta-analysis on SGLT2 inhibitors for HFpEF? Focus on primary endpoints."</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6">
              <div className="w-10 h-10 rounded-full bg-cyan-600 flex items-center justify-center flex-shrink-0 text-white">
                <Database size={18} />
              </div>
              <div className="flex-1 space-y-6">
                <div className="bg-white border border-cyan-100 p-8 rounded-2xl rounded-tl-none shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4">
                    <span className="evidence-tag text-[9px] font-extrabold uppercase px-2 py-0.5 rounded">Meta-Analysis (Grade A)</span>
                  </div>
                  <h4 className="font-bold text-slate-900 mb-4 text-lg">Synthesized Evidence (PubMed Restricted)</h4>
                  <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                    <p>Recent evidence from the EMPEROR-Preserved and DELIVER trials confirms that SGLT2 inhibitors significantly reduce the composite risk of cardiovascular death or hospitalization for heart failure in patients with HFpEF <span className="text-cyan-600 font-bold underline cursor-pointer">[PMID: 34449189]</span>.</p>
                    <p>Pooled meta-analysis shows a hazard ratio of 0.80 (95% CI 0.73-0.87) for the primary endpoint <span className="text-cyan-600 font-bold underline cursor-pointer">[PMID: 36041164]</span>. Effect sizes were consistent across LVEF subgroups.</p>
                  </div>
                  <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-[11px] text-slate-400 font-bold uppercase tracking-wider">
                      <Zap size={12} />
                      <span>4 studies cited • Zero web-hallucination detected</span>
                    </div>
                    <button className="text-cyan-600 font-bold text-xs hover:underline">View Citations Map →</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const TrustPillars = () => (
  <section className="py-24 bg-white border-y border-slate-100">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-16">
        <div className="space-y-4">
          <div className="w-12 h-12 bg-cyan-50 rounded-xl flex items-center justify-center text-cyan-600 mb-6">
            <ShieldCheck size={24} />
          </div>
          <h3 className="text-xl font-bold text-slate-900">PubMed Exclusive</h3>
          <p className="text-slate-500 text-sm leading-relaxed">We restrict all retrieval to PubMed-indexed studies. No secondary summaries, blogs, or unverified mixed-quality web content.</p>
        </div>
        <div className="space-y-4">
          <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-6">
            <Layers size={24} />
          </div>
          <h3 className="text-xl font-bold text-slate-900">Ranked Hierarchy</h3>
          <p className="text-slate-500 text-sm leading-relaxed">Our AI prioritizes Meta-Analyses and RCTs automatically, ensuring your evidence-based decisions are built on the highest quality research.</p>
        </div>
        <div className="space-y-4">
          <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-cyan-400 mb-6">
            <AlertTriangle size={24} />
          </div>
          <h3 className="text-xl font-bold text-slate-900">Explicit Uncertainty</h3>
          <p className="text-slate-500 text-sm leading-relaxed">If evidence is weak, limited, or conflicting, MedSearch AI states it clearly. We prefer a honest "No Evidence" over a plausible hallucination.</p>
        </div>
      </div>
    </div>
  </section>
);

const FeaturesBento = () => (
  <section id="features" className="py-32 bg-slate-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Evidence, Synthesized.</h2>
          <p className="text-slate-600">Standard AI guesses. MedSearch AI audits. Every sentence we generate is a direct link to the biomedical truth.</p>
        </div>
        <div className="mt-8 md:mt-0">
          <button className="text-cyan-600 font-bold hover:underline flex items-center">
            Explore evidence-tiering protocol <ArrowRight size={16} className="ml-2" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-8 bg-white p-12 rounded-[2.5rem] border border-slate-200 shadow-sm flex flex-col md:flex-row items-center gap-12 group hover:shadow-xl transition-all">
          <div className="flex-1">
            <div className="inline-flex px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-[10px] font-bold uppercase tracking-widest mb-6">Synthesize Module</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Structured Evidence Overview</h3>
            <p className="text-slate-600 mb-8 leading-relaxed">Get more than a summary. MedSearch AI breaks down findings into clinical interpretations, limitations, and levels of uncertainty based on the study design.</p>
            <ul className="space-y-3">
              {['Auto-detected Study Grade', 'Sample Size extraction', 'P-value verification', 'Conflict of interest flags'].map(item => (
                <li key={item} className="flex items-center text-sm font-semibold text-slate-700">
                  <CheckCircle2 size={16} className="text-cyan-500 mr-2" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/2 aspect-video bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden p-6 flex flex-col space-y-3">
             <div className="h-4 w-1/4 bg-cyan-200 rounded animate-pulse"></div>
             <div className="h-2 w-full bg-slate-200 rounded"></div>
             <div className="h-2 w-3/4 bg-slate-200 rounded"></div>
             <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="h-20 bg-white rounded-xl border border-slate-100 shadow-sm"></div>
                <div className="h-20 bg-white rounded-xl border border-slate-100 shadow-sm"></div>
             </div>
          </div>
        </div>

        <div className="md:col-span-4 bg-slate-900 p-12 rounded-[2.5rem] text-white flex flex-col justify-between hover:scale-[1.02] transition-transform">
          <div>
            <Link className="text-cyan-400 mb-8" size={32} />
            <h3 className="text-2xl font-bold mb-4">Live PMID Linking</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Hover over any claim to see the source abstract immediately. One click takes you to the full text on PubMed or PMC.</p>
          </div>
          <div className="mt-12 bg-white/5 border border-white/10 rounded-2xl p-4">
             <div className="flex items-center space-x-3 text-xs opacity-60">
                <Database size={12} />
                <span>38M+ records indexed</span>
             </div>
          </div>
        </div>

        <div className="md:col-span-4 bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm flex flex-col justify-between group hover:border-cyan-200 transition-colors">
          <div>
            <div className="w-12 h-12 bg-slate-100 text-slate-900 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
              <FileText size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Protocol Preparation</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Conduct thorough literature reviews for grant proposals or IRB submissions with automated citation management and evidence grading.</p>
          </div>
          <div className="mt-10 flex items-center space-x-2 text-cyan-600 font-bold text-xs">
            <span>Learn about protocol tools</span>
            <ChevronRight size={14} />
          </div>
        </div>

        <div className="md:col-span-8 bg-indigo-600 p-12 rounded-[2.5rem] text-white flex items-center gap-10 overflow-hidden relative">
          <div className="relative z-10 flex-1">
            <div className="inline-flex px-3 py-1 rounded-full bg-white/10 text-white text-[10px] font-bold uppercase tracking-widest mb-6">Point-of-Care Search</div>
            <h3 className="text-2xl font-bold mb-4">Real-time Clinical Verification</h3>
            <p className="text-indigo-100 text-sm mb-6 max-w-lg">Designed for rounds. Get clear, evidence-based answers to "What is the NNT for this intervention?" in seconds, with the highest grade studies prioritized at the top.</p>
            <div className="flex space-x-4">
              <div className="px-4 py-2 bg-white/10 rounded-lg border border-white/20 text-xs font-bold">Grade A Evidence Focus</div>
              <div className="px-4 py-2 bg-white/10 rounded-lg border border-white/20 text-xs font-bold">Uncertainty Metrics</div>
            </div>
          </div>
          <div className="hidden lg:block relative w-1/4">
             <Activity className="text-white relative z-10 opacity-20" size={120} />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Methodology = () => (
  <section id="how-it-works" className="py-32 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-24">
        <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Scientific Rigor, By Design.</h2>
        <p className="text-slate-500 max-w-2xl mx-auto">Generic AI models blend web opinions with medical facts. MedSearch AI uses a strict four-step verification loop.</p>
      </div>

      <div className="grid md:grid-cols-4 gap-12 relative">
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-100 -translate-y-1/2 hidden md:block"></div>
        {[
          { step: "01", title: "Query Parsing", desc: "Our clinical LLM identifies search terms and required evidence levels (e.g. Meta-Analysis only)." },
          { step: "02", title: "Restricted Retrieval", desc: "System queries PubMed API directly. Non-indexed sources are mathematically excluded from the context." },
          { step: "03", title: "Study Grading", desc: "Retrieved studies are ranked by P-values, sample size, and study architecture (RCT vs Case Report)." },
          { step: "04", title: "Cited Synthesis", desc: "A structured answer is generated. Claims without high-confidence citations are omitted." }
        ].map((item, i) => (
          <div key={i} className="relative z-10 bg-white p-6 rounded-2xl">
            <div className="w-12 h-12 bg-cyan-600 text-white rounded-xl flex items-center justify-center font-black text-lg mb-8 shadow-lg shadow-cyan-100">
              {item.step}
            </div>
            <h4 className="font-bold text-slate-900 mb-3">{item.title}</h4>
            <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section id="pricing" className="py-32 bg-slate-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Evidence Access Plans</h2>
        <p className="text-slate-600">Start with 10 free searches per month. Upgrade for deeper research capabilities.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 flex flex-col hover:shadow-xl transition-all">
          <div className="mb-10">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Individual</h3>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">For clinicians</p>
          </div>
          <div className="mb-10 flex items-baseline">
            <span className="text-5xl font-extrabold text-slate-900">$29</span>
            <span className="text-slate-400 font-bold ml-2">/month</span>
          </div>
          <ul className="space-y-4 mb-12 flex-grow">
            {['Unlimited PubMed Searches', 'Evidence Hierarchy Filtering', 'Citation Export (RIS/BibTeX)', 'Mobile App Access'].map(t => (
              <li key={t} className="flex items-center text-slate-600 text-sm font-medium">
                <CheckCircle2 size={16} className="text-cyan-500 mr-3" /> {t}
              </li>
            ))}
          </ul>
          <button className="w-full bg-slate-100 text-slate-900 py-4 rounded-full font-bold hover:bg-slate-200 transition-all">
            Start Free
          </button>
        </div>

        <div className="bg-slate-900 p-10 rounded-[2.5rem] text-white flex flex-col relative scale-105 shadow-2xl z-10">
          <div className="absolute top-8 right-8 bg-cyan-500 text-slate-900 text-[10px] font-black px-2 py-1 rounded-full uppercase tracking-tighter">Researcher Preferred</div>
          <div className="mb-10">
            <h3 className="text-xl font-bold text-white mb-2">Researcher</h3>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">For academic centers</p>
          </div>
          <div className="mb-10 flex items-baseline">
            <span className="text-5xl font-extrabold text-white">$79</span>
            <span className="text-slate-500 font-bold ml-2">/month</span>
          </div>
          <ul className="space-y-4 mb-12 flex-grow">
            {['Everything in Individual', 'Full-Text PMC Analysis', 'Conflict of Interest Screening', 'P-value verification engine', 'Bulk PMID Retrieval'].map(t => (
              <li key={t} className="flex items-center text-slate-300 text-sm font-medium">
                <CheckCircle2 size={16} className="text-cyan-400 mr-3" /> {t}
              </li>
            ))}
          </ul>
          <button className="w-full bg-cyan-600 text-white py-4 rounded-full font-bold hover:bg-cyan-700 transition-all">
            Get Researcher Pro
          </button>
        </div>

        <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 flex flex-col hover:shadow-xl transition-all">
          <div className="mb-10">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Institutional</h3>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">For hospitals</p>
          </div>
          <div className="mb-10">
            <span className="text-4xl font-extrabold text-slate-900">Contact</span>
          </div>
          <ul className="space-y-4 mb-12 flex-grow">
            {['Team License Seats', 'SSO Integration', 'Custom Protocol Tools', 'Audit Logs for Compliance', 'LIMS API Access'].map(t => (
              <li key={t} className="flex items-center text-slate-600 text-sm font-medium">
                <CheckCircle2 size={16} className="text-cyan-500 mr-3" /> {t}
              </li>
            ))}
          </ul>
          <button className="w-full border-2 border-slate-900 text-slate-900 py-4 rounded-full font-bold hover:bg-slate-50 transition-all">
            Speak to Sales
          </button>
        </div>
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [open, setOpen] = useState(0);
  const items = [
    { q: "Is this a medical advice tool?", a: "No. MedSearch AI is a literature search and evidence synthesis tool. It provides summaries of published research only and is designed to support, not replace, clinical judgment." },
    { q: "How is this different from ChatGPT or UpToDate?", a: "Unlike ChatGPT, we restrict all retrieval to PubMed and provide direct citations for every claim. Unlike UpToDate, we provide a dynamic search layer over the most recent studies (last 24 hours), and we do not provide secondary expert summaries—we provide primary study synthesis." },
    { q: "Can I verify the citations?", a: "Yes. Every claim is linked to a PMID. Hovering shows the abstract; clicking takes you to the source. We prioritize transparency above all." },
    { q: "Does it support non-English literature?", a: "Currently, MedSearch AI focuses on the PubMed core database, which is primarily English-language based, though it includes many international journals indexed there." }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-slate-900 mb-16 text-center">Rigor & Precision FAQ</h2>
        <div className="space-y-4">
          {items.map((item, i) => (
            <div key={i} className={`border rounded-2xl overflow-hidden transition-all ${open === i ? 'border-cyan-200 bg-cyan-50/20' : 'border-slate-100 bg-white hover:border-slate-200'}`}>
              <button 
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full px-8 py-6 text-left flex items-center justify-between group"
              >
                <span className={`font-bold transition-colors ${open === i ? 'text-cyan-900' : 'text-slate-700'}`}>{item.q}</span>
                {open === i ? <Minus size={20} className="text-cyan-600" /> : <Plus size={20} className="text-slate-400 group-hover:text-cyan-600" />}
              </button>
              {open === i && (
                <div className="px-8 pb-8 text-slate-600 leading-relaxed text-sm animate-fade-in-up">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-slate-950 text-white pt-32 pb-16">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
        <div className="md:col-span-2">
          <div className="flex items-center space-x-2 mb-8">
            <div className="w-10 h-10 bg-cyan-600 rounded-lg flex items-center justify-center text-white">
              <Search size={22} />
            </div>
            <span className="text-2xl font-extrabold tracking-tight">MedSearch <span className="text-cyan-500">AI</span></span>
          </div>
          <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
            The evidence-restricted search engine for clinical medicine. Built for rigor, transparency, and evidence-based practice.
          </p>
          <div className="flex items-center space-x-4 text-xs font-bold uppercase tracking-widest text-slate-500">
            <ShieldCheck size={16} className="text-cyan-500" />
            <span>HITRUST & HIPAA READY Architecture</span>
          </div>
        </div>
        <div>
          <h5 className="font-bold text-xs uppercase tracking-widest text-cyan-500 mb-8">Resources</h5>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li className="hover:text-white transition-colors cursor-pointer">Evidence Protocol</li>
            <li className="hover:text-white transition-colors cursor-pointer">Methodology Whitepaper</li>
            <li className="hover:text-white transition-colors cursor-pointer">Citation API</li>
            <li className="hover:text-white transition-colors cursor-pointer">Specialty Indices</li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-xs uppercase tracking-widest text-cyan-500 mb-8">Trust</h5>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li className="hover:text-white transition-colors cursor-pointer">Accuracy Integrity</li>
            <li className="hover:text-white transition-colors cursor-pointer">Data Privacy</li>
            <li className="hover:text-white transition-colors cursor-pointer">IRB Support</li>
            <li className="hover:text-white transition-colors cursor-pointer">Contact Ethics</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 pt-16 flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-500 font-bold tracking-[0.2em] uppercase">
        <p>&copy; 2024 MEDSEARCH AI SYSTEMS. ALL RIGHTS RESERVED.</p>
        <div className="flex space-x-8 mt-6 md:mt-0">
          <span className="hover:text-white cursor-pointer transition-colors">PubMed Terms</span>
          <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer transition-colors">Ethics Guidelines</span>
        </div>
      </div>
    </div>
  </footer>
);

const FinalCTA = () => (
  <section className="py-32 relative overflow-hidden">
    <div className="absolute inset-0 bg-slate-900"></div>
    <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
      <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
        Evidence matters. <br /> Find it in seconds.
      </h2>
      <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto">Join thousands of physicians who trust MedSearch AI for point-of-care verification and deep literature review.</p>
      <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <button className="w-full sm:w-auto bg-cyan-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-cyan-700 transition-all shadow-2xl shadow-cyan-900">Get Started Free</button>
        <button className="w-full sm:w-auto border border-white/20 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/5 transition-all">Schedule Team Demo</button>
      </div>
    </div>
  </section>
);

const App = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Hero />
      <TrustPillars />
      <FeaturesBento />
      
      {/* Principle Quote Section */}
      <section className="py-32 bg-slate-50 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-10 shadow-sm border border-slate-200">
            <AlertTriangle size={24} className="text-slate-900" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-8 italic leading-relaxed">
            "If it's not supported by peer-reviewed evidence in PubMed, MedSearch AI won't say it. That is our core trust principle."
          </h2>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">— Engineering Director, MedSearch AI</p>
        </div>
      </section>

      <Methodology />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default App;
