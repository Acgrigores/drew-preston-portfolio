/**
 * DREW PRESTON PORTFOLIO - SCRIPT
 * Economics and Legal Studies at UIUC
 *
 * This script loads all portfolio content dynamically from:
 * 👉 portfolio-data.json
 *
 * This allows a non-technical manager to update the entire website
 * simply by editing portfolio-data.json without touching any code!
 */

(function () {
  'use strict';

  const TAB_KEYS = ['academics', 'extracurriculars', 'experience', 'projects', 'awards'];

  // Global state holding loaded JSON data
  let portfolioData = null;
  let isOpen = false;
  let currentTabIndex = 0;

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

  // --- Populate Personal Information in Left Dossier Card ---
  function populateDossier(info) {
    if (!info) return;

    const setEl = (id, val) => {
      const el = document.getElementById(id);
      if (el && val) el.textContent = val;
    };

    setEl('dossierName', info.fullName);
    setEl('dossierInitials', info.avatarInitials);
    setEl('dossierRole', info.role);
    setEl('dossierSchool', info.school);
    setEl('dossierGpa', info.gpa);
    setEl('dossierGradYear', info.graduationYear);
    setEl('dossierFrat', info.preLawFraternity);
    setEl('dossierStatement', info.profileSummary);
    setEl('dossierLocation', info.location);

    const emailEl = document.getElementById('dossierEmail');
    const emailText = document.getElementById('dossierEmailText');
    if (emailEl && info.email) {
      emailEl.href = `mailto:${info.email}`;
      if (emailText) emailText.textContent = info.email;
    }

    const linkedinEl = document.getElementById('dossierLinkedin');
    const linkedinText = document.getElementById('dossierLinkedinText');
    if (linkedinEl && info.linkedinUrl) {
      linkedinEl.href = info.linkedinUrl;
      if (linkedinText) linkedinText.textContent = info.linkedinDisplay || 'LinkedIn Profile';
    }
  }

  // --- Render Active Tab Content with Automatic Spilled Paper ---
  function renderTab(tabKey, animateFlip = true) {
    if (!portfolioData || !portfolioData.sections) return;
    const data = portfolioData.sections[tabKey];
    if (!data) return;

    // Update Ribbon Banner
    tabCategoryLabel.textContent = `${data.sectionNumber} OF V`;
    tabCategoryTitle.textContent = (data.tabTitle || tabKey).toUpperCase();
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

    // Build Primary Content HTML from JSON entries
    let entriesHtml = '';
    if (Array.isArray(data.entries)) {
      data.entries.forEach(entry => {
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
              <span class="entry-date">${entry.date || ''}</span>
            </div>
            ${entry.subtitle ? `<div class="entry-subtitle">${entry.subtitle}</div>` : ''}
            <p class="entry-description">${entry.description || ''}</p>
            ${highlightsHtml}
            ${tagsHtml}
          </div>
        `;
      });
    }

    const primaryHtml = `
      <div class="sheet-header">
        <div>
          <h3 class="sheet-title">${data.pageTitle}</h3>
          <p class="sheet-tagline">${data.pageSubtitle || ''}</p>
        </div>
        <div class="sheet-meta-stamp">${data.documentStamp || ''}</div>
      </div>
      <div class="content-grid">
        ${entriesHtml}
      </div>
      ${data.highlightQuote ? `
        <div class="legal-callout">
          <p>${data.highlightQuote}</p>
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

    // Build Automatic Spilled Paper HTML from JSON memos
    let memosHtml = '';
    const exhibit = data.spilledExhibit || {};
    if (Array.isArray(exhibit.memos)) {
      exhibit.memos.forEach(memo => {
        memosHtml += `
          <div class="spill-memo-box">
            <h5>${memo.heading}</h5>
            <p>${memo.body}</p>
          </div>
        `;
      });
    }

    const spillHtml = `
      <h4 class="spill-section-title">${exhibit.title || 'Exhibit Addendum'}</h4>
      <p style="font-size: 0.92rem; color: #475569; margin-bottom: 0.5rem; font-style: italic;">
        ${exhibit.summary || ''}
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

  // --- Load portfolio-data.json ---
  async function loadPortfolioData() {
    try {
      // Add cache-busting timestamp so updates to JSON appear immediately
      const response = await fetch('./portfolio-data.json?t=' + Date.now());
      if (!response.ok) throw new Error('HTTP ' + response.status);
      portfolioData = await response.json();
      console.log('Successfully loaded portfolio-data.json');
    } catch (err) {
      console.warn('Could not load portfolio-data.json over network, using built-in default data:', err);
      // Fallback is available if run directly on file:// without local server
      portfolioData = getFallbackData();
    }

    // Populate the Candidate Dossier
    if (portfolioData.personalInfo) {
      populateDossier(portfolioData.personalInfo);
    }

    // Update tab button labels if specified in JSON
    if (portfolioData.sections) {
      TAB_KEYS.forEach(key => {
        const sec = portfolioData.sections[key];
        if (sec && sec.tabTitle) {
          const labelEl = document.getElementById(`tabLabel-${key}`);
          if (labelEl) labelEl.textContent = sec.tabTitle;
        }
      });
    }

    // Initial render of first tab content
    renderTab(TAB_KEYS[currentTabIndex], false);
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

  // --- Fallback Data Helper (Enables offline file:// preview without server) ---
  function getFallbackData() {
    return {
      personalInfo: {
        fullName: 'Drew Preston',
        avatarInitials: 'DP',
        role: 'Pre-Law & Economics',
        school: 'Univ. of Illinois Urbana-Champaign',
        graduationYear: '2028',
        gpa: '3.89',
        preLawFraternity: 'PAD',
        profileSummary: 'Economics student with a minor in Legal Studies aiming for top law programs, combining strong quantitative analysis, legal research, and proven leadership under pressure.',
        email: 'drewpreston23@gmail.com',
        linkedinUrl: 'https://www.linkedin.com/in/drew-preston-788080412/',
        linkedinDisplay: 'linkedin.com/in/drew-preston',
        location: 'Champaign, IL • Mundelein, IL'
      },
      sections: {
        academics: {
          sectionNumber: 'SECTION I',
          tabTitle: 'Academics',
          accentColor: '#9e2a2b',
          pageTitle: 'Academic Credentials & Legal Studies',
          pageSubtitle: 'University of Illinois at Urbana-Champaign (UIUC)',
          documentStamp: 'DOC-ACAD // CLASS OF 2028',
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
            }
          ],
          highlightQuote: 'Drew pairs a strong 3.89 GPA with focused legal research and economic statistics, establishing a firm quantitative and analytical foundation for law school.',
          spilledExhibit: {
            title: 'Curricular Case Notes & Coursework Deep-Dive',
            summary: 'Detailed examination of core competencies developed through UIUC Economics and Legal Studies curricula.',
            memos: [
              {
                heading: 'Legal Research & Writing Practicum',
                body: 'Trained in formal IRAC legal writing structure. Drafted comprehensive office memoranda analyzing statutory requirements, court precedent, and constitutional due process issues.'
              }
            ]
          }
        }
      }
    };
  }

  // Start initialization
  loadPortfolioData();

})();
