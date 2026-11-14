/**
 * DREW PRESTON PORTFOLIO - SCRIPT
 * Economics and Legal Studies at UIUC
 * Updated with exact resume data:
 * - Expected Grad: May 2028 | GPA: 3.89/4.00
 * - Phi Alpha Delta Professional Pre-Law Fraternity
 * - Mundelein Parks & Rec (Employee of the Year 2026 Lifeguard)
 * - Holcomb Hollow Bakery (Product Packer & Trainer)
 * - Coursework: Micro, Macro, Int'l Econ, Econ Stats, Legal Research & Writing
 * - Microsoft Word, Excel, Google Docs
 * - LinkedIn: https://www.linkedin.com/in/drew-preston-788080412/
 * Interactions: Automatic spilled paper, closing binder after awards, and clean cycling.
 */

(function () {
  'use strict';

  // --- Portfolio Content Data (Exact Resume Alignment) ---
  const PORTFOLIO_DATA = {
    academics: {
      sectionNum: 'SECTION I',
      tabTitle: 'ACADEMICS',
      accentColor: '#9e2a2b',
      primary: {
        title: 'Academic Credentials & Legal Studies',
        tagline: 'University of Illinois at Urbana-Champaign (UIUC)',
        metaStamp: 'DOC-ACAD // CLASS OF 2028',
        entries: [
          {
            title: 'Bachelor of Arts in Economics',
            date: 'Expected Graduation: May 2028',
            subtitle: 'Minor in Legal Studies | University of Illinois at Urbana-Champaign',
            description: 'Rigorous interdisciplinary curriculum bridging quantitative economic analysis, statistical modeling, and foundational American jurisprudence.',
            highlights: [
              'Cumulative GPA: 3.89 / 4.00',
              'Consistent Dean\'s List scholastic standing across academic terms',
              'Focus on empirical reasoning, regulatory frameworks, and statutory interpretation'
            ],
            tags: ['Microeconomics', 'Macroeconomics', 'International Economics', 'Economics Statistics', 'Legal Research and Writing']
          },
          {
            title: 'Foundational Legal & Statistical Coursework',
            date: '2024 - Present',
            subtitle: 'Pre-Law Academic Core',
            description: 'Developing high-level proficiencies in case briefing, legal research methodologies, and quantitative economic evaluations.',
            highlights: [
              'Legal Research & Writing: Synthesizing appellate opinions, procedural motions, and legal memoranda.',
              'Economics Statistics: Hypothesis testing, multivariable regression analysis, and empirical data evaluation.'
            ],
            tags: ['Statutory Analysis', 'Case Briefing', 'Hypothesis Testing', 'Data Modeling']
          }
        ],
        callout: 'Drew pairs a strong 3.89 GPA with focused legal research and economic statistics, establishing a firm quantitative and analytical foundation for law school.'
      },
      spill: {
        title: 'Curricular Case Notes & Coursework Deep-Dive',
        summary: 'Detailed examination of core competencies developed through UIUC Economics and Legal Studies curricula.',
        memos: [
          {
            heading: 'Legal Research & Writing Practicum',
            body: 'Trained in formal IRAC legal writing structure. Drafted comprehensive office memoranda analyzing statutory requirements, court precedent, and constitutional due process issues.'
          },
          {
            heading: 'Quantitative Economics & Statistical Modeling',
            body: 'Proficient in analyzing large datasets with statistical frameworks. Explored consumer surplus, market equilibrium shocks, and econometric forecasting.'
          },
          {
            heading: 'International & Macroeconomic Trade Dynamics',
            body: 'Studied sovereign fiscal policies, tariff structures, currency valuation fluctuations, and multilateral trade treaty governance.'
          }
        ]
      }
    },

    extracurriculars: {
      sectionNum: 'SECTION II',
      tabTitle: 'EXTRACURRICULARS',
      accentColor: '#2d6a4f',
      primary: {
        title: 'Leadership & Professional Organizations',
        tagline: 'Active Engagement in Collegiate Legal & Campus Communities',
        metaStamp: 'DOC-EXCR // PAD-2026',
        entries: [
          {
            title: 'Phi Alpha Delta Professional Pre-Law Fraternity',
            date: 'September 2026 – Present',
            subtitle: 'Active Chapter Member | University of Illinois at Urbana-Champaign',
            description: 'Engaged in the nation\'s premier professional legal fraternity, advancing legal ethics, leadership, and public service.',
            highlights: [
              'Participate in professional development symposia featuring practicing attorneys, judges, and law school admissions deans.',
              'Collaborate on legal ethics workshops, mock oral arguments, and LSAT preparation peer roundtables.',
              'Contribute to community legal aid outreach and civic advocacy initiatives.'
            ],
            tags: ['Phi Alpha Delta', 'Legal Ethics', 'Professional Development', 'Pre-Law Networking']
          },
          {
            title: 'UIUC Pre-Law Academic Community',
            date: 'Fall 2024 – Present',
            subtitle: 'Legal Studies & Campus Leadership',
            description: 'Active contributor to campus legal discussion forums, career workshops, and pre-law student mentoring.',
            highlights: [
              'Attend faculty lectures exploring contemporary constitutional questions and judicial decision-making.',
              'Engage with legal professionals in corporate compliance, litigation, and public interest law.'
            ],
            tags: ['Campus Engagement', 'Scholastic Community', 'Legal Seminars']
          }
        ],
        callout: 'Phi Alpha Delta membership underscores a proactive commitment to legal professionalism, peer collaboration, and ethical leadership.'
      },
      spill: {
        title: 'Service & Professional Development Register',
        summary: 'Log of campus involvement, pre-law symposiums, and organizational activities.',
        memos: [
          {
            heading: 'Phi Alpha Delta Judicial & Alumni Speaker Series',
            body: 'Engaged in Q&A sessions with federal and circuit court judges, discussing judicial clerkship paths, effective trial advocacy, and courtroom decorum.'
          },
          {
            heading: 'Pre-Law Peer Mentorship & Collaboration',
            body: 'Supported first-year pre-law peers with course selection strategies, study groups for Legal Research & Writing, and academic planning.'
          },
          {
            heading: 'Community & Civic Engagement',
            body: 'Participated in campus volunteer drives and voter education efforts organized across Champaign-Urbana.'
          }
        ]
      }
    },

    experience: {
      sectionNum: 'SECTION III',
      tabTitle: 'EXPERIENCE',
      accentColor: '#1d3557',
      primary: {
        title: 'Work Experience & Professional Service',
        tagline: 'Demonstrated Reliability, Public Safety Leadership & Operational Excellence',
        metaStamp: 'DOC-EXPR // RECORD-IL',
        entries: [
          {
            title: 'Lifeguard — Mundelein Parks and Recreation District',
            date: 'Seasonal May 2024 – August 2026',
            subtitle: 'Mundelein, IL',
            description: 'Maintained vigilant public safety and emergency oversight across municipal aquatic facilities serving hundreds of patrons daily.',
            highlights: [
              'Won the prestigious Employee of the Year Award in summer 2026 for outstanding performance and professionalism.',
              'Addressed patron and customer issues promptly, providing effective, composed solutions under high-pressure scenarios.',
              'Enforced safety regulations strictly while maintaining positive, constructive public communication.'
            ],
            tags: ['Employee of the Year 2026', 'Emergency Response', 'Customer Service', 'Crisis Composure', 'Public Safety']
          },
          {
            title: 'Product Packer — Holcomb Hollow Bakery',
            date: 'February 2024 – August 2024',
            subtitle: 'Mundelein, IL',
            description: 'Ensured high-efficiency order fulfillment and quality compliance in a fast-paced production and distribution environment.',
            highlights: [
              'Collaborated with team members to complete packing assignments accurately and efficiently.',
              'Supported the full production process from ingredient preparation through final packaging and shipment, displaying high attention to detail.',
              'Trained new employees on production procedures and efficient workflow practices.'
            ],
            tags: ['Workflow Training', 'Quality Assurance', 'Team Collaboration', 'Attention to Detail']
          }
        ],
        callout: 'Honored as "Employee of the Year" among dozens of municipal staff—a testament to Drew\'s cool-headed professionalism, accountability, and leadership under pressure.'
      },
      spill: {
        title: 'Workplace Competencies & Operational Records',
        summary: 'Detailed evaluation of transferable professional skills directly applicable to high-stakes legal practice.',
        memos: [
          {
            heading: 'Crisis Composure & Risk Management',
            body: 'Extensive seasonal lifeguarding experience trained acute vigilance, rapid situational appraisal, and calm dispute mediation—qualities crucial for litigation and advocacy.'
          },
          {
            heading: 'Process Training & Standard Operating Procedures',
            body: 'Entrusted at Holcomb Hollow Bakery to onboard and train incoming staff on compliance checklists, cleanliness standards, and packing accuracy.'
          },
          {
            heading: 'Team Coordination in Fast-Paced Environments',
            body: 'Consistently met strict distribution deadlines while upholding impeccable quality control standards and team morale.'
          }
        ]
      }
    },

    projects: {
      sectionNum: 'SECTION IV',
      tabTitle: 'PROJECTS',
      accentColor: '#bd5338',
      primary: {
        title: 'Analytical Projects & Applied Research',
        tagline: 'Bridging Economic Reasoning, Legal Writing & Computer Proficiencies',
        metaStamp: 'DOC-PROJ // ANL-2026',
        entries: [
          {
            title: 'Legal Research & Writing: Analytical Memorandum',
            date: 'UIUC Legal Studies Practicum',
            subtitle: 'Formal Legal Analysis & Statutory Interpretation',
            description: 'Authored an in-depth legal memorandum evaluating civil liability and statutory interpretation under Illinois state law.',
            highlights: [
              'Constructed precise legal arguments applying the IRAC (Issue, Rule, Application, Conclusion) framework.',
              'Analyzed conflicting precedent across appellate districts to synthesize persuasive legal principles.',
              'Formatted in full compliance with standard legal citation rules.'
            ],
            tags: ['Legal Memorandum', 'IRAC Method', 'Statutory Interpretation', 'Case Law Synthesis']
          },
          {
            title: 'Economics Statistics: Empirical Data Analysis Report',
            date: 'UIUC Economics Department',
            subtitle: 'Quantitative Market Modeling & Data Evaluation',
            description: 'Conducted empirical statistical analysis examining price elasticity and supply-demand shifts using spreadsheet modeling tools.',
            highlights: [
              'Processed and cleaned structured datasets in Microsoft Excel and Google Sheets.',
              'Calculated summary statistics, confidence intervals, and regression metrics to evaluate economic hypotheses.',
              'Synthesized complex quantitative findings into clear executive summaries.'
            ],
            tags: ['Microsoft Excel', 'Statistical Regressions', 'Data Cleaning', 'Google Docs']
          }
        ],
        callout: 'Projects demonstrate mastery of both persuasive legal writing and rigorous quantitative statistical modeling.'
      },
      spill: {
        title: 'Technical Toolset & Analytical Deliverables',
        summary: 'Overview of computer tools and technical workflows utilized in academic and legal research.',
        memos: [
          {
            heading: 'Core Computer Proficiencies',
            body: 'Microsoft Word &bull; Microsoft Excel (Formulas, Pivot Tables, Statistical Functions) &bull; Google Docs &bull; Google Sheets &bull; Lexis/Legal Database Research.'
          },
          {
            heading: 'Document Production & Citation Management',
            body: 'Experienced in formatting complex legal briefs, tables of authorities, and empirical graphs for high-impact presentations.'
          },
          {
            heading: 'Critical Case Synthesis Methodology',
            body: 'Methodical approach to dissecting procedural history, holdings, and concurrences/dissents to extract actionable legal rules.'
          }
        ]
      }
    },

    awards: {
      sectionNum: 'SECTION V',
      tabTitle: 'AWARDS',
      accentColor: '#c59b27',
      primary: {
        title: 'Honors, Distinctions & Recognitions',
        tagline: 'Scholastic Excellence & Exceptional Professional Recognition',
        metaStamp: 'DOC-AWRD // HONORS-UIUC',
        entries: [
          {
            title: 'Employee of the Year Award (Summer 2026)',
            date: 'Conferred August 2026',
            subtitle: 'Mundelein Parks and Recreation District',
            description: 'Highest annual staff honor awarded across the district for exemplary public service, outstanding performance, and unwavering professionalism.',
            highlights: [
              'Selected from a competitive seasonal aquatic staff for exceptional work ethic and reliability.',
              'Commended by senior supervisors for managing tense customer situations with patience, tact, and decisive problem-solving.',
              'Recognized for a flawless attendance and safety enforcement record.'
            ],
            tags: ['Employee of the Year', 'Mundelein Parks & Rec', 'Leadership Distinction', 'Top Honor']
          },
          {
            title: 'University of Illinois Academic Honors',
            date: '2024 – Present',
            subtitle: 'College of Liberal Arts & Sciences',
            description: 'Sustained academic distinction maintaining a competitive 3.89 cumulative GPA in Economics and Legal Studies.',
            highlights: [
              'Dean\'s List Recognition for sustained high grade-point averages.',
              'Member in good standing of Phi Alpha Delta Professional Pre-Law Fraternity.'
            ],
            tags: ['Dean\'s List', 'GPA 3.89', 'Pre-Law Scholar']
          }
        ],
        callout: 'Drew\'s Employee of the Year honor and 3.89 GPA reflect a proven track record of top-tier performance both in the classroom and in public service.'
      },
      spill: {
        title: 'Letters of Commendation & Distinctions Log',
        summary: 'Excerpts and recognition notes from municipal supervisors and campus organizations.',
        memos: [
          {
            heading: 'Supervisory Commendation — Mundelein Parks & Rec',
            body: '"Drew repeatedly demonstrated rare maturity and composure when handling challenging facility situations. His dedication to patron safety and team leadership made him our clear choice for Employee of the Year."'
          },
          {
            heading: 'Phi Alpha Delta Pre-Law Induction',
            body: 'Selected for chapter membership in September 2026, joining a prestigious network of legal scholars and practitioners across Illinois.'
          },
          {
            heading: 'Scholastic Trajectory',
            body: 'Targeting premier J.D. programs with a strong combination of high undergraduate GPA, quantitative economics mastery, and certified service leadership.'
          }
        ]
      }
    }
  };

  const TAB_KEYS = ['academics', 'extracurriculars', 'experience', 'projects', 'awards'];

  // --- DOM Elements ---
  const binder = document.getElementById('binder');
  const tabButtons = document.querySelectorAll('.tab-item');
  const activeTabBanner = document.getElementById('activeTabBanner');
  const tabCategoryLabel = document.getElementById('tabCategoryLabel');
  const tabCategoryTitle = document.getElementById('tabCategoryTitle');
  const tabContentMount = document.getElementById('tabContentMount');
  const spillPaper = document.getElementById('spillPaper');
  const spillContentMount = document.getElementById('spillContentMount');
  const spillTabAccent = document.getElementById('spillTabAccent');

  // --- State Variables ---
  let isOpen = false;
  let currentTabIndex = 0;

  // --- Audio Synthesis via Web Audio API ---
  let audioCtx = null;

  function initAudio() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) audioCtx = new AudioContext();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  function playPaperRustle() {
    initAudio();
    if (!audioCtx) return;
    try {
      const duration = 0.25;
      const bufferSize = audioCtx.sampleRate * duration;
      const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
      const data = buffer.getChannelData(0);

      let b0 = 0, b1 = 0, b2 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99 * b0 + white * 0.05;
        b1 = 0.96 * b1 + white * 0.11;
        b2 = 0.86 * b2 + white * 0.25;
        data[i] = (b0 + b1 + b2) * 0.25;
      }

      const noiseNode = audioCtx.createBufferSource();
      noiseNode.buffer = buffer;

      const filter = audioCtx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1400, audioCtx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(300, audioCtx.currentTime + duration);

      const gain = audioCtx.createGain();
      gain.gain.setValueAtTime(0.001, audioCtx.currentTime);
      gain.gain.linearRampToValueAtTime(0.15, audioCtx.currentTime + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

      noiseNode.connect(filter);
      filter.connect(gain);
      gain.connect(audioCtx.destination);
      noiseNode.start();
    } catch (e) {}
  }

  function playTabClick() {
    initAudio();
    if (!audioCtx) return;
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(320, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, audioCtx.currentTime + 0.07);

      gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.07);

      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.07);
    } catch (e) {}
  }

  function playBinderSound() {
    initAudio();
    if (!audioCtx) return;
    try {
      playPaperRustle();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(150, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(45, audioCtx.currentTime + 0.2);

      gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.2);

      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.2);
    } catch (e) {}
  }

  // --- Render Active Tab Content with Automatic Spilled Paper ---
  function renderTab(tabKey, animateFlip = true) {
    const data = PORTFOLIO_DATA[tabKey];
    if (!data) return;

    // Update Ribbon Banner
    tabCategoryLabel.textContent = `${data.sectionNum} OF V`;
    tabCategoryTitle.textContent = data.tabTitle;
    activeTabBanner.style.backgroundColor = data.accentColor;
    if (spillTabAccent) {
      spillTabAccent.style.backgroundColor = data.accentColor;
    }

    // Update Tab Active Classes
    tabButtons.forEach(btn => {
      if (btn.getAttribute('data-tab') === tabKey) {
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      }
    });

    // Animate Primary Paper Flip
    const primaryPaper = document.getElementById('primaryPaper');
    if (primaryPaper && animateFlip) {
      primaryPaper.classList.remove('paper-flipping');
      void primaryPaper.offsetWidth;
      primaryPaper.classList.add('paper-flipping');
    }

    // Build Primary Content HTML
    let entriesHtml = '';
    data.primary.entries.forEach(entry => {
      let highlightsHtml = '';
      if (entry.highlights && entry.highlights.length) {
        highlightsHtml = `
          <ul class="entry-highlights">
            ${entry.highlights.map(h => `<li>${h}</li>`).join('')}
          </ul>
        `;
      }

      let tagsHtml = '';
      if (entry.tags && entry.tags.length) {
        tagsHtml = `
          <div class="tag-clusters">
            ${entry.tags.map(t => `<span class="pill-tag">${t}</span>`).join('')}
          </div>
        `;
      }

      entriesHtml += `
        <div class="entry-card">
          <div class="entry-heading-row">
            <h4 class="entry-title">${entry.title}</h4>
            <span class="entry-date">${entry.date}</span>
          </div>
          <div class="entry-subtitle">${entry.subtitle}</div>
          <p class="entry-description">${entry.description}</p>
          ${highlightsHtml}
          ${tagsHtml}
        </div>
      `;
    });

    const primaryHtml = `
      <div class="sheet-header">
        <div>
          <h3 class="sheet-title">${data.primary.title}</h3>
          <p class="sheet-tagline">${data.primary.tagline}</p>
        </div>
        <div class="sheet-meta-stamp">${data.primary.metaStamp}</div>
      </div>
      <div class="content-grid">
        ${entriesHtml}
      </div>
      ${data.primary.callout ? `
        <div class="legal-callout">
          <p>${data.primary.callout}</p>
        </div>
      ` : ''}
    `;

    tabContentMount.style.opacity = '0';
    tabContentMount.style.transform = 'translateY(6px)';
    setTimeout(() => {
      tabContentMount.innerHTML = primaryHtml;
      tabContentMount.style.transition = 'opacity 0.28s ease, transform 0.28s ease';
      tabContentMount.style.opacity = '1';
      tabContentMount.style.transform = 'translateY(0)';
    }, 90);

    // Build Automatic Spilled Paper HTML
    let memosHtml = '';
    data.spill.memos.forEach(memo => {
      memosHtml += `
        <div class="spill-memo-box">
          <h5>${memo.heading}</h5>
          <p>${memo.body}</p>
        </div>
      `;
    });

    const spillHtml = `
      <h4 class="spill-section-title">${data.spill.title}</h4>
      <p style="font-size: 0.92rem; color: #475569; margin-bottom: 0.5rem; font-style: italic;">
        ${data.spill.summary}
      </p>
      <div class="spill-memo-container">
        ${memosHtml}
      </div>
    `;

    // Automatic Spill Slide-In Effect
    spillPaper.style.transform = 'translateY(25px) rotate(-1deg)';
    spillPaper.style.opacity = '0.7';
    setTimeout(() => {
      spillContentMount.innerHTML = spillHtml;
      spillPaper.style.transition = 'transform 0.45s cubic-bezier(0.2, 0.9, 0.3, 1), opacity 0.35s ease';
      spillPaper.style.transform = 'translateY(50px) rotate(-1.4deg)';
      spillPaper.style.opacity = '1';
    }, 120);
  }

  // --- Open Binder ---
  function openBinder(targetTabKey) {
    if (!isOpen) {
      isOpen = true;
      binder.classList.remove('closed');
      binder.classList.add('open');
      playBinderSound();
    }

    if (targetTabKey) {
      const index = TAB_KEYS.indexOf(targetTabKey);
      if (index !== -1) {
        currentTabIndex = index;
      }
    }

    renderTab(TAB_KEYS[currentTabIndex], true);
  }

  // --- Close Binder ---
  function closeBinder() {
    if (isOpen) {
      isOpen = false;
      binder.classList.remove('open');
      binder.classList.add('closed');
      currentTabIndex = 0; // Reset index to Academics for next open
      playBinderSound();
    }
  }

  // --- Cycle Through Tabs (Closes binder after awards) ---
  function cycleTabs() {
    initAudio();

    if (!isOpen) {
      currentTabIndex = 0;
      openBinder(TAB_KEYS[currentTabIndex]);
      return;
    }

    // If currently on Awards (last tab), close the binder!
    if (currentTabIndex === TAB_KEYS.length - 1) {
      closeBinder();
      return;
    }

    // Otherwise advance to next tab
    currentTabIndex++;
    playPaperRustle();
    playTabClick();
    renderTab(TAB_KEYS[currentTabIndex], true);
  }

  // --- Event Listeners ---

  // 1. Tab buttons click:
  tabButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      initAudio();
      const tabKey = btn.getAttribute('data-tab');
      playTabClick();
      playPaperRustle();
      openBinder(tabKey);
    });
  });

  // 2. Binder Body Click (Cycles tabs, and closes after awards):
  binder.addEventListener('click', (e) => {
    // Ignore clicks on tabs nav
    if (e.target.closest('#tabsNav')) return;

    // Allow user to select text without flipping
    const selection = window.getSelection();
    if (selection && selection.toString().trim().length > 0) return;

    // Ignore interactive links
    if (e.target.closest('a') || e.target.closest('button')) return;

    // Ignore clicks on spilled paper to let user read
    if (e.target.closest('#spillPaper')) return;

    cycleTabs();
  });

  // 3. Keyboard Shortcuts:
  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      cycleTabs();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      if (isOpen && currentTabIndex > 0) {
        currentTabIndex--;
        playPaperRustle();
        playTabClick();
        renderTab(TAB_KEYS[currentTabIndex], true);
      }
    } else if (e.key === 'Escape') {
      if (isOpen) closeBinder();
    }
  });

  // Initial render of first tab content
  renderTab(TAB_KEYS[currentTabIndex], false);

})();
