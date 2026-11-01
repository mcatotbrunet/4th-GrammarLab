// English 4th ESO - Main Application Engine (Autonomous Self-Study Portal)

// Global Application State
const appState = {
  currentView: "irregular-verbs", // 'irregular-verbs', 'intro', 'm1-a', 'm1-test', 'dashboard', etc.
  currentTab: "grammar", // 'grammar', 'vocabulary', 'exercises'
  currentLevelFilter: "all", // 'all', '1', '2', '3'
  searchQuery: "",
  theme: localStorage.getItem("eso4_theme") || "light",
  progress: JSON.parse(localStorage.getItem("eso4_progress") || "{}"), // { [exerciseId]: { score: 100, completed: true } }
  
  // Flashcard State
  flashcardIndex: 0,
  flashcardList: [],
  flashcardFlipped: false
};

// All modules collection
const allModules = [
  introUnitData,
  module1Data,
  module2Data,
  module3Data,
  module4Data,
  module5Data,
  module6Data
];

// Helper to retrieve all accessible navigation units & tests
function getAllSections() {
  const sections = [];
  
  // Irregular Verbs Trainer
  sections.push({
    id: "irregular-verbs",
    title: "⚡ Irregular Verbs Trainer",
    isSpecial: true
  });
  
  // Diagnostic Unit
  sections.push({
    id: introUnitData.id,
    title: "Diagnostic Unit",
    data: introUnitData,
    parentModule: introUnitData
  });
  sections.push({
    id: "intro-test",
    title: "📝 Diagnostic Mastery Test",
    isTest: true,
    testData: moduleTestsData.find(t => t.id === "intro-test")
  });

  // Modules 1 to 6
  [module1Data, module2Data, module3Data, module4Data, module5Data, module6Data].forEach(mod => {
    mod.sections.forEach(sec => {
      sections.push({
        id: sec.id,
        code: sec.code,
        title: `${sec.code} ${sec.title}`,
        parentModule: mod,
        data: sec
      });
    });
    // Add Module Mastery Test
    const test = moduleTestsData.find(t => t.id === `m${mod.moduleId}-test`);
    if (test) {
      sections.push({
        id: test.id,
        title: `📝 ${mod.moduleTitle} Mastery Test`,
        isTest: true,
        testData: test,
        parentModule: mod
      });
    }
  });

  return sections;
}

// App Initialization
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initSidebar();
  initProgress();
  setupEventListeners();
  
  const hash = window.location.hash.replace("#", "");
  if (hash) {
    navigateTo(hash);
  } else {
    navigateTo("irregular-verbs");
  }
});

// Theme Management
function initTheme() {
  document.documentElement.setAttribute("data-theme", appState.theme);
  const themeBtn = document.getElementById("themeToggleBtn");
  if (themeBtn) {
    themeBtn.innerHTML = appState.theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";
  }
}

function toggleTheme() {
  appState.theme = appState.theme === "dark" ? "light" : "dark";
  localStorage.setItem("eso4_theme", appState.theme);
  initTheme();
}

// Browser Text-To-Speech
function speakWord(word) {
  if (!('speechSynthesis' in window)) {
    alert("Your browser does not support Web Speech audio synthesis.");
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = "en-GB";
  utterance.rate = 0.9;
  window.speechSynthesis.speak(utterance);
}

// Sidebar Navigation Render
function initSidebar() {
  const menuContainer = document.getElementById("navMenu");
  if (!menuContainer) return;

  let html = `
    <div class="nav-section-title">Core Tools</div>
    <a class="nav-item ${appState.currentView === 'irregular-verbs' ? 'active' : ''}" onclick="navigateTo('irregular-verbs')">
      <div class="nav-item-content">
        <span class="icon">⭐</span>
        <span>Irregular Verbs</span>
      </div>
      <span class="nav-badge">Trainer</span>
    </a>
    <a class="nav-item ${appState.currentView === 'dashboard' ? 'active' : ''}" onclick="navigateTo('dashboard')">
      <div class="nav-item-content">
        <span class="icon">📊</span>
        <span>My Progress</span>
      </div>
      <span class="nav-badge" id="sidebarProgressCount">0</span>
    </a>

    <div class="nav-section-title">Course Modules (4th ESO)</div>
    <div class="nav-subgroup">
      <a class="nav-subitem ${appState.currentView === 'intro' ? 'active' : ''}" onclick="navigateTo('intro')">
        <strong>0.</strong> Diagnostic Review (p. 6)
      </a>
      <a class="nav-subitem ${appState.currentView === 'intro-test' ? 'active' : ''}" style="color: #6366f1; font-weight:600;" onclick="navigateTo('intro-test')">
        📝 Diagnostic Mastery Test
      </a>
    </div>
  `;

  // Render Modules 1 through 6
  [module1Data, module2Data, module3Data, module4Data, module5Data, module6Data].forEach(mod => {
    html += `
      <div class="nav-section-title">${mod.moduleTitle} (p. ${mod.page})</div>
      <div class="nav-subgroup">
    `;
    mod.sections.forEach(sec => {
      const isActive = sec.id === appState.currentView;
      html += `
        <a class="nav-subitem ${isActive ? 'active' : ''}" onclick="navigateTo('${sec.id}')">
          <strong>${sec.code}</strong> ${sec.title}
        </a>
      `;
    });
    // End-of-Module Mastery Test
    const testId = `m${mod.moduleId}-test`;
    const isTestActive = testId === appState.currentView;
    html += `
        <a class="nav-subitem ${isTestActive ? 'active' : ''}" style="color: #6366f1; font-weight: 600;" onclick="navigateTo('${testId}')">
          📝 Module ${mod.moduleId} Mastery Test
        </a>
      </div>
    `;
  });

  menuContainer.innerHTML = html;
  updateGlobalProgressBadge();
}

// Navigation Handler
function navigateTo(viewId) {
  appState.currentView = viewId;
  window.location.hash = viewId;
  window.scrollTo({ top: 0, behavior: "smooth" });

  initSidebar();

  const container = document.getElementById("mainContentArea");
  if (!container) return;

  if (viewId === "irregular-verbs") {
    renderIrregularVerbsView(container);
  } else if (viewId === "dashboard") {
    renderDashboardView(container);
  } else if (viewId.endsWith("-test")) {
    const testData = moduleTestsData.find(t => t.id === viewId);
    if (testData) {
      renderModuleTestView(container, testData);
    }
  } else if (viewId === "intro") {
    renderUnitView(container, introUnitData, introUnitData.moduleTitle);
  } else {
    // Find section in modules
    let targetSection = null;
    let targetModule = null;
    for (const mod of [module1Data, module2Data, module3Data, module4Data, module5Data, module6Data]) {
      const found = mod.sections.find(s => s.id === viewId);
      if (found) {
        targetSection = found;
        targetModule = mod;
        break;
      }
    }
    if (targetSection) {
      renderUnitView(container, targetSection, targetModule.moduleTitle);
    }
  }
}

// RENDER: UNIT VIEW (Grammar, Vocabulary & Activities, Tiered Exercises)
function renderUnitView(container, unit, moduleTitle) {
  const accentColor = unit.themeColor || "#4f46e5";
  container.style.setProperty("--unit-accent", accentColor);

  let html = `
    <div class="unit-header-card">
      <div class="unit-breadcrumbs">
        <span>${moduleTitle}</span> &bull; 
        <span>${unit.code || 'Diagnostic'}</span> 
        <span class="badge-page">Page ${unit.page || 6}</span>
      </div>
      <h1 class="unit-title">${unit.title}</h1>
      <p class="unit-subtitle">${unit.subtitle || ''}</p>

      <!-- Level Filter Bar -->
      <div class="level-filter-bar">
        <span class="filter-label">Filter by Level:</span>
        <button class="level-btn ${appState.currentLevelFilter === 'all' ? 'active' : ''}" data-level="all" onclick="setLevelFilter('all')">
          All Levels
        </button>
        <button class="level-btn ${appState.currentLevelFilter === '1' ? 'active' : ''}" data-level="1" onclick="setLevelFilter('1')">
          🟢 Level 1 (Foundation)
        </button>
        <button class="level-btn ${appState.currentLevelFilter === '2' ? 'active' : ''}" data-level="2" onclick="setLevelFilter('2')">
          🟡 Level 2 (Standard)
        </button>
        <button class="level-btn ${appState.currentLevelFilter === '3' ? 'active' : ''}" data-level="3" onclick="setLevelFilter('3')">
          🔴 Level 3 (Challenge)
        </button>
      </div>
    </div>

    <!-- Content Navigation Tabs -->
    <div class="content-tabs">
      <button class="tab-btn ${appState.currentTab === 'grammar' ? 'active' : ''}" onclick="switchTab('grammar')">
        📖 Grammar Guide
      </button>
      <button class="tab-btn ${appState.currentTab === 'vocabulary' ? 'active' : ''}" onclick="switchTab('vocabulary')">
        📚 Vocabulary & Activities (${unit.vocabulary.words.length})
      </button>
      <button class="tab-btn ${appState.currentTab === 'exercises' ? 'active' : ''}" onclick="switchTab('exercises')">
        ✍️ Grammar Exercises (${unit.exercises.length})
      </button>
    </div>

    <!-- Tab Contents -->
    <div id="tabContentGrammar" style="display: ${appState.currentTab === 'grammar' ? 'block' : 'none'};">
      ${renderGrammarTab(unit.grammar)}
    </div>

    <div id="tabContentVocabulary" style="display: ${appState.currentTab === 'vocabulary' ? 'block' : 'none'};">
      ${renderVocabularyTab(unit.vocabulary)}
    </div>

    <div id="tabContentExercises" style="display: ${appState.currentTab === 'exercises' ? 'block' : 'none'};">
      ${renderExercisesTab(unit.exercises)}
    </div>
  `;

  container.innerHTML = html;
  applyLevelFilter();
}

// Switch Tab
function switchTab(tabName) {
  appState.currentTab = tabName;
  document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
  const clickedBtn = document.querySelector(`.tab-btn[onclick="switchTab('${tabName}')"]`);
  if (clickedBtn) clickedBtn.classList.add("active");

  const tabG = document.getElementById("tabContentGrammar");
  const tabV = document.getElementById("tabContentVocabulary");
  const tabE = document.getElementById("tabContentExercises");

  if (tabG) tabG.style.display = tabName === "grammar" ? "block" : "none";
  if (tabV) tabV.style.display = tabName === "vocabulary" ? "block" : "none";
  if (tabE) tabE.style.display = tabName === "exercises" ? "block" : "none";
}

// Render Grammar Tab
function renderGrammarTab(grammar) {
  let html = `<div class="grammar-container">`;
  grammar.sections.forEach(sec => {
    html += `
      <div class="grammar-card">
        <h3>${sec.heading}</h3>
        <div>${sec.content}</div>
      </div>
    `;
  });
  html += `</div>`;
  return html;
}

// Render Vocabulary Tab (Cards + Interactive Exercises)
function renderVocabularyTab(vocabulary) {
  let html = `
    <div style="margin-bottom: 1rem; color: var(--text-muted); font-size: 0.9rem;">
      <strong>Theme:</strong> ${vocabulary.topic} &bull; Click 🔊 to listen to authentic British pronunciation.
    </div>

    <!-- Vocabulary Flashcards Grid -->
    <div class="vocab-grid">
  `;
  vocabulary.words.forEach(item => {
    html += `
      <div class="vocab-card">
        <div>
          <div class="vocab-header">
            <div>
              <div class="vocab-word">${item.word}</div>
              <div class="vocab-phonetic">${item.phonetic}</div>
            </div>
            <button class="btn-audio" title="Listen to pronunciation" onclick="speakWord('${item.word.replace(/'/g, "\\'")}')">🔊</button>
          </div>
          <div class="vocab-cat">${item.cat}</div>
        </div>
        <div class="vocab-example">"${item.example}"</div>
      </div>
    `;
  });
  html += `</div>`;

  // Render Interactive Vocabulary Activities if present
  if (vocabulary.exercises && vocabulary.exercises.length > 0) {
    html += `
      <div style="margin-top: 2rem; margin-bottom: 1rem;">
        <h2 style="font-size: 1.25rem; font-weight: 800; color: var(--text-main);">
          🎯 Interactive Vocabulary Practice
        </h2>
        <p style="color: var(--text-muted); font-size: 0.88rem;">Put the vocabulary words into practice with immediate self-correction.</p>
      </div>
      <div class="exercises-container">
    `;

    vocabulary.exercises.forEach(vex => {
      const isCompleted = appState.progress[vex.id]?.completed;
      html += `
        <div class="exercise-card" id="card-${vex.id}">
          <div class="exercise-header">
            <div class="exercise-title-group">
              <span class="badge-level" style="background: #e0e7ff; color: #4338ca; border: 1px solid #c7d2fe;">Vocabulary</span>
              <h3 class="exercise-title">${vex.title}</h3>
            </div>
            <span class="exercise-score-badge" id="badge-${vex.id}">
              ${isCompleted ? '✅ Completed' : '⏳ Pending'}
            </span>
          </div>
          <div class="exercise-instruction">${vex.instruction}</div>

          <div class="questions-list">
            ${renderQuestionItems(vex)}
          </div>

          <div class="exercise-actions">
            <div class="btn-group">
              <button class="btn btn-primary" onclick="checkExercise('${vex.id}')">
                ✓ Check Answers
              </button>
              <button class="btn btn-secondary" onclick="resetExercise('${vex.id}')">
                ↺ Reset
              </button>
            </div>
            <button class="btn btn-hint" onclick="toggleHints('${vex.id}')">
              💡 Show / Hide Solutions & Explanations
            </button>
          </div>
        </div>
      `;
    });
    html += `</div>`;
  }

  return html;
}

// Render Tiered Grammar Exercises
function renderExercisesTab(exercises) {
  let html = `<div class="exercises-container">`;
  exercises.forEach(ex => {
    const isCompleted = appState.progress[ex.id]?.completed;
    html += `
      <div class="exercise-card" id="card-${ex.id}" data-level="${ex.level}">
        <div class="exercise-header">
          <div class="exercise-title-group">
            <span class="badge-level level-${ex.level}">${ex.levelLabel}</span>
            <h3 class="exercise-title">${ex.title}</h3>
          </div>
          <span class="exercise-score-badge" id="badge-${ex.id}">
            ${isCompleted ? '✅ Completed' : '⏳ Pending'}
          </span>
        </div>
        <div class="exercise-instruction">${ex.instruction}</div>

        <div class="questions-list">
          ${renderQuestionItems(ex)}
        </div>

        <div class="exercise-actions">
          <div class="btn-group">
            <button class="btn btn-primary" onclick="checkExercise('${ex.id}')">
              ✓ Check Answers
            </button>
            <button class="btn btn-secondary" onclick="resetExercise('${ex.id}')">
              ↺ Reset
            </button>
          </div>
          <button class="btn btn-hint" onclick="toggleHints('${ex.id}')">
            💡 Show / Hide Solutions & Explanations
          </button>
        </div>
      </div>
    `;
  });
  html += `</div>`;
  return html;
}

// Render Individual Question Items
function renderQuestionItems(ex) {
  let html = "";
  ex.questions.forEach((q, idx) => {
    const qKey = `${ex.id}-q${idx}`;
    html += `
      <div class="question-item" id="${qKey}">
        <div class="question-prompt">${idx + 1}. ${q.prompt}</div>
    `;

    if (ex.type === "multiple_choice" || q.options) {
      html += `<div class="mc-options">`;
      q.options.forEach((opt, optIdx) => {
        html += `
          <div class="mc-option" onclick="selectMcOption('${qKey}', ${optIdx})">
            <input type="radio" name="${qKey}" value="${optIdx}">
            <span>${opt}</span>
          </div>
        `;
      });
      html += `</div>`;
    } else {
      // Fill-in-the-blank or transformation
      html += `
        <div style="margin-top: 0.5rem;">
          <input type="text" class="fill-input" id="input-${qKey}" placeholder="Type your answer here..." autocomplete="off">
        </div>
      `;
    }

    // Feedback and Hint Box (hidden by default)
    html += `
      <div class="feedback-box" id="feedback-${qKey}"></div>
      <div class="hint-box" id="hint-${qKey}" style="display: none;">
        <strong>💡 Solution / Explanation:</strong> ${q.explanation || q.hint || q.accepted?.join(' / ')}
      </div>
    </div>`;
  });
  return html;
}

// Multiple Choice Selection
function selectMcOption(qKey, optIdx) {
  const container = document.getElementById(qKey);
  if (!container) return;
  container.querySelectorAll(".mc-option").forEach(el => el.classList.remove("selected"));
  const options = container.querySelectorAll(".mc-option");
  if (options[optIdx]) {
    options[optIdx].classList.add("selected");
    const radio = options[optIdx].querySelector("input[type=radio]");
    if (radio) radio.checked = true;
  }
}

// Find exercise definition by ID across grammar and vocabulary exercises
function findExerciseDefinition(exId) {
  const allSections = getAllSections();
  for (const s of allSections) {
    if (s.data) {
      if (s.data.exercises) {
        const found = s.data.exercises.find(e => e.id === exId);
        if (found) return found;
      }
      if (s.data.vocabulary?.exercises) {
        const found = s.data.vocabulary.exercises.find(e => e.id === exId);
        if (found) return found;
      }
    }
  }
  return null;
}

// Check Exercise Answers
function checkExercise(exId) {
  const exDef = findExerciseDefinition(exId);
  if (!exDef) return;

  let correctCount = 0;
  const total = exDef.questions.length;

  exDef.questions.forEach((q, idx) => {
    const qKey = `${exId}-q${idx}`;
    const fbBox = document.getElementById(`feedback-${qKey}`);

    if (exDef.type === "multiple_choice" || q.options) {
      const selectedOption = document.querySelector(`input[name="${qKey}"]:checked`);
      const parentOptions = document.querySelectorAll(`#${qKey} .mc-option`);
      parentOptions.forEach(p => p.classList.remove("correct", "incorrect"));

      if (selectedOption) {
        const val = parseInt(selectedOption.value, 10);
        if (val === q.correct) {
          correctCount++;
          parentOptions[val].classList.add("correct");
          if (fbBox) {
            fbBox.className = "feedback-box correct";
            fbBox.innerHTML = "✓ Correct! " + (q.explanation || "");
          }
        } else {
          parentOptions[val].classList.add("incorrect");
          parentOptions[q.correct].classList.add("correct");
          if (fbBox) {
            fbBox.className = "feedback-box incorrect";
            fbBox.innerHTML = `✗ Incorrect. Correct answer: <strong>${q.options[q.correct]}</strong>. ${q.explanation || ''}`;
          }
        }
      } else {
        if (fbBox) {
          fbBox.className = "feedback-box incorrect";
          fbBox.innerHTML = "⚠️ Please select an answer.";
        }
      }
    } else {
      // fill_blank / transformation
      const input = document.getElementById(`input-${qKey}`);
      if (!input) return;
      const userVal = input.value.trim().toLowerCase().replace(/’/g, "'");
      
      const isMatch = q.accepted.some(acc => {
        const cleanAcc = acc.toLowerCase().trim().replace(/’/g, "'");
        if (cleanAcc.includes("/")) {
          const parts = cleanAcc.split("/").map(p => p.trim());
          return parts.every(part => userVal.includes(part));
        }
        return cleanAcc === userVal;
      });

      input.classList.remove("correct", "incorrect");
      if (isMatch) {
        correctCount++;
        input.classList.add("correct");
        if (fbBox) {
          fbBox.className = "feedback-box correct";
          fbBox.innerHTML = "✓ Excellent! Correct answer.";
        }
      } else {
        input.classList.add("incorrect");
        if (fbBox) {
          fbBox.className = "feedback-box incorrect";
          fbBox.innerHTML = `✗ Check your answer. Accepted solution: <strong>${q.accepted.join(" / ")}</strong>.`;
        }
      }
    }
  });

  const pct = Math.round((correctCount / total) * 100);
  appState.progress[exId] = {
    completed: pct >= 70,
    score: pct,
    correctCount,
    total
  };
  localStorage.setItem("eso4_progress", JSON.stringify(appState.progress));

  const badge = document.getElementById(`badge-${exId}`);
  if (badge) {
    if (pct === 100) {
      badge.textContent = `🌟 Perfect! 100%`;
      badge.style.color = "var(--success)";
    } else if (pct >= 70) {
      badge.textContent = `✅ Passed (${pct}%)`;
      badge.style.color = "var(--success)";
    } else {
      badge.textContent = `⚠️ Try Again (${pct}%)`;
      badge.style.color = "var(--warning)";
    }
  }

  updateGlobalProgressBadge();
}

// Reset Exercise
function resetExercise(exId) {
  const card = document.getElementById(`card-${exId}`);
  if (!card) return;

  card.querySelectorAll(".fill-input").forEach(inp => {
    inp.value = "";
    inp.classList.remove("correct", "incorrect");
  });

  card.querySelectorAll("input[type=radio]").forEach(r => r.checked = false);
  card.querySelectorAll(".mc-option").forEach(opt => opt.classList.remove("selected", "correct", "incorrect"));

  card.querySelectorAll(".feedback-box").forEach(fb => {
    fb.className = "feedback-box";
    fb.innerHTML = "";
    fb.style.display = "none";
  });

  const badge = document.getElementById(`badge-${exId}`);
  if (badge) {
    badge.textContent = "⏳ Pending";
    badge.style.color = "inherit";
  }

  delete appState.progress[exId];
  localStorage.setItem("eso4_progress", JSON.stringify(appState.progress));
  updateGlobalProgressBadge();
}

// Toggle Hints
function toggleHints(exId) {
  const card = document.getElementById(`card-${exId}`);
  if (!card) return;
  const hints = card.querySelectorAll(".hint-box");
  hints.forEach(h => {
    h.style.display = h.style.display === "none" ? "block" : "none";
  });
}

// Filter by Level
function setLevelFilter(lvl) {
  appState.currentLevelFilter = lvl;
  document.querySelectorAll(".level-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-level") === lvl);
  });
  applyLevelFilter();
}

function applyLevelFilter() {
  const cards = document.querySelectorAll(".exercise-card[data-level]");
  cards.forEach(card => {
    const cardLvl = card.getAttribute("data-level");
    if (appState.currentLevelFilter === "all" || appState.currentLevelFilter === cardLvl) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });
}

// RENDER: MODULE MASTERY TEST VIEW
function renderModuleTestView(container, test) {
  container.style.setProperty("--unit-accent", "#6366f1");
  const isCompleted = appState.progress[test.id]?.completed;
  const lastScore = appState.progress[test.id]?.score;

  let html = `
    <div class="unit-header-card">
      <div class="unit-breadcrumbs">
        <span>${test.moduleTitle}</span> &bull; 
        <span>Final Evaluation</span>
      </div>
      <h1 class="unit-title">${test.title}</h1>
      <p class="unit-subtitle">${test.subtitle}</p>

      <div style="display: flex; gap: 1rem; align-items: center; margin-top: 1rem; flex-wrap: wrap;">
        <span class="badge-level" style="background: #e0e7ff; color: #4338ca; border: 1px solid #c7d2fe; font-size: 0.85rem; padding: 0.35rem 0.75rem;">
          ${test.questions.length} Questions (Vocabulary & Grammar Combined)
        </span>
        <span id="testScoreBadge" style="font-weight: 700; font-size: 0.95rem;">
          ${lastScore !== undefined ? `Last Score: ${lastScore}% ${lastScore >= 70 ? '✅ Passed' : '⚠️ Try again'}` : 'Status: Not taken yet'}
        </span>
      </div>
    </div>

    <div class="exercise-card" id="card-${test.id}">
      <div class="questions-list">
        ${renderTestQuestions(test)}
      </div>

      <div class="exercise-actions" style="margin-top: 1.5rem;">
        <div class="btn-group">
          <button class="btn btn-primary" onclick="checkModuleTest('${test.id}')">
            🏆 Submit & Grade Test
          </button>
          <button class="btn btn-secondary" onclick="resetModuleTest('${test.id}')">
            ↺ Retake Test
          </button>
        </div>
      </div>
    </div>
  `;

  container.innerHTML = html;
}

function renderTestQuestions(test) {
  return test.questions.map((q, idx) => {
    const qKey = `${test.id}-q${idx}`;
    return `
      <div class="question-item" id="${qKey}">
        <div class="question-prompt">${idx + 1}. ${q.prompt}</div>
        <div class="mc-options">
          ${q.options.map((opt, optIdx) => `
            <div class="mc-option" onclick="selectMcOption('${qKey}', ${optIdx})">
              <input type="radio" name="${qKey}" value="${optIdx}">
              <span>${opt}</span>
            </div>
          `).join("")}
        </div>
        <div class="feedback-box" id="feedback-${qKey}"></div>
      </div>
    `;
  }).join("");
}

function checkModuleTest(testId) {
  const test = moduleTestsData.find(t => t.id === testId);
  if (!test) return;

  let correctCount = 0;
  const total = test.questions.length;

  test.questions.forEach((q, idx) => {
    const qKey = `${testId}-q${idx}`;
    const selectedOption = document.querySelector(`input[name="${qKey}"]:checked`);
    const parentOptions = document.querySelectorAll(`#${qKey} .mc-option`);
    const fbBox = document.getElementById(`feedback-${qKey}`);

    parentOptions.forEach(p => p.classList.remove("correct", "incorrect"));

    if (selectedOption) {
      const val = parseInt(selectedOption.value, 10);
      if (val === q.correct) {
        correctCount++;
        parentOptions[val].classList.add("correct");
        if (fbBox) {
          fbBox.className = "feedback-box correct";
          fbBox.innerHTML = "✓ Correct! " + q.explanation;
        }
      } else {
        parentOptions[val].classList.add("incorrect");
        parentOptions[q.correct].classList.add("correct");
        if (fbBox) {
          fbBox.className = "feedback-box incorrect";
          fbBox.innerHTML = `✗ Incorrect. Correct: <strong>${q.options[q.correct]}</strong>. ${q.explanation}`;
        }
      }
    } else {
      if (fbBox) {
        fbBox.className = "feedback-box incorrect";
        fbBox.innerHTML = "⚠️ Please answer this question.";
      }
    }
  });

  const pct = Math.round((correctCount / total) * 100);
  appState.progress[testId] = {
    completed: pct >= 70,
    score: pct,
    correctCount,
    total
  };
  localStorage.setItem("eso4_progress", JSON.stringify(appState.progress));

  const scoreBadge = document.getElementById("testScoreBadge");
  if (scoreBadge) {
    scoreBadge.innerHTML = `Score: ${correctCount}/${total} (${pct}%) - ${pct >= 70 ? '🎉 Congratulations! You have mastered this module!' : 'Keep practicing and try again!'}`;
    scoreBadge.style.color = pct >= 70 ? "var(--success)" : "var(--warning)";
  }

  updateGlobalProgressBadge();
  alert(`Test Result: ${correctCount}/${total} correct (${pct}%). ${pct >= 70 ? 'Great job! Mastery achieved.' : 'Review the grammar & vocabulary and retake the test.'}`);
}

function resetModuleTest(testId) {
  const card = document.getElementById(`card-${testId}`);
  if (!card) return;

  card.querySelectorAll("input[type=radio]").forEach(r => r.checked = false);
  card.querySelectorAll(".mc-option").forEach(opt => opt.classList.remove("selected", "correct", "incorrect"));
  card.querySelectorAll(".feedback-box").forEach(fb => {
    fb.className = "feedback-box";
    fb.innerHTML = "";
    fb.style.display = "none";
  });

  delete appState.progress[testId];
  localStorage.setItem("eso4_progress", JSON.stringify(appState.progress));
  
  const scoreBadge = document.getElementById("testScoreBadge");
  if (scoreBadge) {
    scoreBadge.textContent = "Status: Retake in progress";
    scoreBadge.style.color = "inherit";
  }

  updateGlobalProgressBadge();
}

// RENDER: IRREGULAR VERBS MODULE
function renderIrregularVerbsView(container) {
  container.style.setProperty("--unit-accent", "#6366f1");
  appState.flashcardList = [...irregularVerbsData];
  appState.flashcardIndex = 0;
  appState.flashcardFlipped = false;

  let html = `
    <div class="unit-header-card">
      <div class="unit-breadcrumbs">
        <span>Special Section</span> &bull; 
        <span>Autonomous Mastery</span>
      </div>
      <h1 class="unit-title">⚡ Irregular Verbs Master Trainer</h1>
      <p class="unit-subtitle">Master all essential irregular verbs for 4th ESO with British audio pronunciation, full searchable matrix, memory flashcards, and speed self-tests.</p>

      <div class="content-tabs" style="margin-top: 1.5rem; margin-bottom: 0;">
        <button class="tab-btn active" id="ivTabTable" onclick="switchIvTab('table')">
          📋 Full Matrix & Search (${irregularVerbsData.length})
        </button>
        <button class="tab-btn" id="ivTabCards" onclick="switchIvTab('cards')">
          🎴 Memory Flashcards
        </button>
        <button class="tab-btn" id="ivTabQuiz" onclick="switchIvTab('quiz')">
          🎯 Speed Recall Drill
        </button>
      </div>
    </div>

    <!-- TAB 1: SEARCH & TABLE -->
    <div id="ivContentTable">
      <div class="iv-controls">
        <input type="text" class="iv-search-input" id="ivSearchInput" placeholder="🔍 Search by base form, past, participle or translation..." oninput="filterIrregularVerbs()">
        <select class="iv-search-input" id="ivLevelSelect" style="max-width: 220px;" onchange="filterIrregularVerbs()">
          <option value="all">All Levels (${irregularVerbsData.length})</option>
          <option value="1">🟢 Level 1: Foundation (35)</option>
          <option value="2">🟡 Level 2: Standard (31)</option>
          <option value="3">🔴 Level 3: Challenge (25)</option>
        </select>
      </div>

      <div class="iv-table-container">
        <table class="iv-table">
          <thead>
            <tr>
              <th>Base Form (Infinitive)</th>
              <th>Past Simple</th>
              <th>Past Participle</th>
              <th>Catalan Meaning</th>
              <th>Level</th>
              <th>Audio</th>
            </tr>
          </thead>
          <tbody id="ivTableBody">
            ${renderIvTableRows(irregularVerbsData)}
          </tbody>
        </table>
      </div>
    </div>

    <!-- TAB 2: FLASHCARDS -->
    <div id="ivContentCards" style="display: none;">
      <div class="iv-flashcard-container">
        <div style="font-size: 0.9rem; color: var(--text-muted);">
          Click the card to flip and test your memory!
        </div>

        <div class="flashcard" id="flashcardElement" onclick="flipFlashcard()">
          <div class="flashcard-inner">
            <div class="flashcard-front">
              <div class="flashcard-prompt" id="fcFrontBase">be</div>
              <div class="flashcard-cat" id="fcFrontCat">ser / estar</div>
              <div style="margin-top: 1rem; font-size: 0.8rem; color: var(--primary);">↺ Click to reveal past forms</div>
            </div>
            <div class="flashcard-back">
              <div class="flashcard-details">
                <div><strong>Past Simple:</strong> <span id="fcBackPast">was / were</span></div>
                <div style="margin-top: 0.5rem;"><strong>Past Participle:</strong> <span id="fcBackParticiple">been</span></div>
              </div>
            </div>
          </div>
        </div>

        <div style="display: flex; gap: 0.75rem; align-items: center; flex-wrap: wrap;">
          <button class="btn btn-secondary" onclick="prevFlashcard()">← Previous</button>
          <span id="fcCounter" style="font-weight: 600; font-size: 0.9rem;">1 / ${irregularVerbsData.length}</span>
          <button class="btn btn-secondary" onclick="nextFlashcard()">Next →</button>
          <button class="btn btn-secondary" onclick="speakCurrentCard()">🔊 Pronounce</button>
        </div>
      </div>
    </div>

    <!-- TAB 3: QUIZ DRILL -->
    <div id="ivContentQuiz" style="display: none;">
      <div class="grammar-card" style="margin-bottom: 1.5rem;">
        <h3>🎯 Irregular Verbs Speed Drill</h3>
        <p>Type the <strong>Past Simple</strong> and <strong>Past Participle</strong> for each verb. Then click to verify and review your instant score.</p>
        <div style="margin-top: 1rem; display: flex; gap: 0.5rem; flex-wrap: wrap;">
          <button class="btn btn-primary" onclick="generateIvQuiz(5)">Generate 5 Random Verbs</button>
          <button class="btn btn-secondary" onclick="generateIvQuiz(10)">Generate 10 Random Verbs</button>
        </div>
      </div>
      <div id="ivQuizContainer"></div>
    </div>
  `;

  container.innerHTML = html;
  updateFlashcard();
}

function renderIvTableRows(list) {
  return list.map(v => `
    <tr>
      <td><strong>${v.base}</strong></td>
      <td><span style="color: #0284c7; font-weight: 600;">${v.past}</span></td>
      <td><span style="color: #7c3aed; font-weight: 600;">${v.participle}</span></td>
      <td>${v.cat}</td>
      <td><span class="badge-level level-${v.level}">Level ${v.level}</span></td>
      <td>
        <button class="btn-audio" title="Listen to verb forms" onclick="speakWord('${v.base}, ${v.past}, ${v.participle}')">🔊</button>
      </td>
    </tr>
  `).join("");
}

function filterIrregularVerbs() {
  const query = document.getElementById("ivSearchInput")?.value.toLowerCase().trim() || "";
  const lvl = document.getElementById("ivLevelSelect")?.value || "all";

  const filtered = irregularVerbsData.filter(v => {
    const matchesLvl = (lvl === "all" || v.level.toString() === lvl);
    const matchesQuery = !query || (
      v.base.toLowerCase().includes(query) ||
      v.past.toLowerCase().includes(query) ||
      v.participle.toLowerCase().includes(query) ||
      v.cat.toLowerCase().includes(query)
    );
    return matchesLvl && matchesQuery;
  });

  const tbody = document.getElementById("ivTableBody");
  if (tbody) {
    tbody.innerHTML = filtered.length > 0 
      ? renderIvTableRows(filtered)
      : `<tr><td colspan="6" style="text-align: center; padding: 2rem; color: var(--text-muted);">No verbs found matching your search.</td></tr>`;
  }
}

function switchIvTab(tab) {
  document.getElementById("ivTabTable").classList.toggle("active", tab === "table");
  document.getElementById("ivTabCards").classList.toggle("active", tab === "cards");
  document.getElementById("ivTabQuiz").classList.toggle("active", tab === "quiz");

  document.getElementById("ivContentTable").style.display = tab === "table" ? "block" : "none";
  document.getElementById("ivContentCards").style.display = tab === "cards" ? "block" : "none";
  document.getElementById("ivContentQuiz").style.display = tab === "quiz" ? "block" : "none";

  if (tab === "quiz" && !document.getElementById("ivQuizContainer").hasChildNodes()) {
    generateIvQuiz(5);
  }
}

// Flashcard Controls
function flipFlashcard() {
  const card = document.getElementById("flashcardElement");
  if (card) card.classList.toggle("flipped");
}

function updateFlashcard() {
  const card = document.getElementById("flashcardElement");
  if (card) card.classList.remove("flipped");
  
  const current = appState.flashcardList[appState.flashcardIndex];
  if (!current) return;

  const fBase = document.getElementById("fcFrontBase");
  const fCat = document.getElementById("fcFrontCat");
  const bPast = document.getElementById("fcBackPast");
  const bPart = document.getElementById("fcBackParticiple");
  const counter = document.getElementById("fcCounter");

  if (fBase) fBase.textContent = current.base;
  if (fCat) fCat.textContent = current.cat;
  if (bPast) bPast.textContent = current.past;
  if (bPart) bPart.textContent = current.participle;
  if (counter) counter.textContent = `${appState.flashcardIndex + 1} / ${appState.flashcardList.length}`;
}

function nextFlashcard() {
  if (appState.flashcardIndex < appState.flashcardList.length - 1) {
    appState.flashcardIndex++;
    updateFlashcard();
  } else {
    appState.flashcardIndex = 0;
    updateFlashcard();
  }
}

function prevFlashcard() {
  if (appState.flashcardIndex > 0) {
    appState.flashcardIndex--;
    updateFlashcard();
  }
}

function speakCurrentCard() {
  const current = appState.flashcardList[appState.flashcardIndex];
  if (current) {
    speakWord(`${current.base}, ${current.past}, ${current.participle}`);
  }
}

// Speed Drill Generator
function generateIvQuiz(count) {
  const container = document.getElementById("ivQuizContainer");
  if (!container) return;

  const shuffled = [...irregularVerbsData].sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, count);

  let html = `<div class="exercise-card">`;
  selected.forEach((v, idx) => {
    html += `
      <div class="question-item" id="ivquiz-q${idx}">
        <div class="question-prompt">
          ${idx + 1}. Verb: <strong>${v.base}</strong> (${v.cat})
          <button class="btn-audio" style="display:inline-flex; vertical-align:middle; margin-left:0.4rem;" onclick="speakWord('${v.base}')">🔊</button>
        </div>
        <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; margin-top: 0.5rem;">
          <div>
            <label style="font-size: 0.75rem; color: var(--text-muted); display: block;">Past Simple:</label>
            <input type="text" class="fill-input" id="ivq-past-${idx}" placeholder="Past Simple...">
          </div>
          <div>
            <label style="font-size: 0.75rem; color: var(--text-muted); display: block;">Past Participle:</label>
            <input type="text" class="fill-input" id="ivq-part-${idx}" placeholder="Past Participle...">
          </div>
        </div>
        <div class="feedback-box" id="ivq-fb-${idx}"></div>
      </div>
    `;
  });

  html += `
    <div style="margin-top: 1rem; display: flex; gap: 0.5rem; flex-wrap: wrap;">
      <button class="btn btn-primary" onclick="checkIvQuiz(${JSON.stringify(selected).replace(/"/g, '&quot;')})">
        ✓ Check Drill
      </button>
      <button class="btn btn-secondary" onclick="generateIvQuiz(${count})">
        ↺ Generate New Batch
      </button>
    </div>
  </div>`;

  container.innerHTML = html;
}

function checkIvQuiz(verbsList) {
  let score = 0;
  const total = verbsList.length * 2;

  verbsList.forEach((v, idx) => {
    const pastInp = document.getElementById(`ivq-past-${idx}`);
    const partInp = document.getElementById(`ivq-part-${idx}`);
    const fb = document.getElementById(`ivq-fb-${idx}`);

    const userPast = pastInp?.value.trim().toLowerCase() || "";
    const userPart = partInp?.value.trim().toLowerCase() || "";

    const validPasts = v.past.split("/").map(s => s.trim().toLowerCase());
    const validParts = v.participle.split("/").map(s => s.trim().toLowerCase());

    const isPastOk = validPasts.includes(userPast);
    const isPartOk = validParts.includes(userPart);

    if (pastInp) {
      pastInp.classList.toggle("correct", isPastOk);
      pastInp.classList.toggle("incorrect", !isPastOk);
    }
    if (partInp) {
      partInp.classList.toggle("correct", isPartOk);
      partInp.classList.toggle("incorrect", !isPartOk);
    }

    if (isPastOk) score++;
    if (isPartOk) score++;

    if (fb) {
      fb.style.display = "block";
      if (isPastOk && isPartOk) {
        fb.className = "feedback-box correct";
        fb.innerHTML = `✓ Perfect! (${v.past} - ${v.participle})`;
      } else {
        fb.className = "feedback-box incorrect";
        fb.innerHTML = `Solution: Past Simple: <strong>${v.past}</strong> | Past Participle: <strong>${v.participle}</strong>`;
      }
    }
  });

  alert(`Speed Drill Complete! You scored ${score} out of ${total} points (${Math.round((score/total)*100)}%).`);
}

// RENDER: DASHBOARD / PROGRESS VIEW
function renderDashboardView(container) {
  const allSections = getAllSections().filter(s => s.data);
  let totalExercises = 0;
  let completedExercises = 0;

  allSections.forEach(s => {
    const exs = s.data.exercises || [];
    const vex = s.data.vocabulary?.exercises || [];
    totalExercises += exs.length + vex.length;

    exs.forEach(ex => {
      if (appState.progress[ex.id]?.completed) completedExercises++;
    });
    vex.forEach(ex => {
      if (appState.progress[ex.id]?.completed) completedExercises++;
    });
  });

  // Also count module tests
  moduleTestsData.forEach(t => {
    totalExercises++;
    if (appState.progress[t.id]?.completed) completedExercises++;
  });

  const percent = totalExercises > 0 ? Math.round((completedExercises / totalExercises) * 100) : 0;

  let html = `
    <div class="unit-header-card">
      <div class="unit-breadcrumbs">
        <span>Learning Analytics</span> &bull; 
        <span>Self-Study Dashboard</span>
      </div>
      <h1 class="unit-title">📊 My 4th ESO Learning Journey</h1>
      <p class="unit-subtitle">Real-time overview of completed activities, test mastery, and autonomous progress.</p>
    </div>

    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-number">${completedExercises} / ${totalExercises}</div>
        <div class="stat-label">Tasks Passed</div>
      </div>
      <div class="stat-card">
        <div class="stat-number">${percent}%</div>
        <div class="stat-label">Overall Completion</div>
      </div>
      <div class="stat-card">
        <div class="stat-number">${irregularVerbsData.length}</div>
        <div class="stat-label">Irregular Verbs Available</div>
      </div>
      <div class="stat-card">
        <div class="stat-number">7</div>
        <div class="stat-label">Mastery Tests</div>
      </div>
    </div>

    <div class="grammar-card">
      <h3>Module Breakdown & Test Status</h3>
      <table class="styled-table">
        <thead>
          <tr><th>Module</th><th>Title</th><th>Exercises Done</th><th>Mastery Test</th><th>Action</th></tr>
        </thead>
        <tbody>
  `;

  allSections.forEach(s => {
    const exs = s.data.exercises || [];
    const vex = s.data.vocabulary?.exercises || [];
    const allUnitExs = [...exs, ...vex];
    const done = allUnitExs.filter(e => appState.progress[e.id]?.completed).length;
    
    // Check module test status
    let testBadge = "-";
    if (s.id === "intro") {
      const tDone = appState.progress["intro-test"]?.completed;
      testBadge = tDone ? "✅ Passed" : "⏳ Pending";
    }

    html += `
      <tr>
        <td><strong>${s.parentModule?.moduleTitle || 'Diagnostic'}</strong></td>
        <td>${s.title}</td>
        <td>${done} / ${allUnitExs.length}</td>
        <td>${testBadge}</td>
        <td><button class="btn btn-secondary" style="padding: 0.25rem 0.6rem; font-size: 0.8rem;" onclick="navigateTo('${s.id}')">Open Unit</button></td>
      </tr>
    `;
  });

  // Tests rows
  moduleTestsData.forEach(t => {
    const tScore = appState.progress[t.id]?.score;
    html += `
      <tr style="background: var(--bg-muted);">
        <td><strong>${t.moduleTitle}</strong></td>
        <td><strong>${t.title}</strong></td>
        <td>10 Questions</td>
        <td>${tScore !== undefined ? `${tScore}% ${tScore >= 70 ? '✅ Passed' : '⚠️'}` : '⏳ Not taken'}</td>
        <td><button class="btn btn-primary" style="padding: 0.25rem 0.6rem; font-size: 0.8rem;" onclick="navigateTo('${t.id}')">Take Test</button></td>
      </tr>
    `;
  });

  html += `
        </tbody>
      </table>

      <div style="margin-top: 1.5rem; text-align: right;">
        <button class="btn btn-secondary" style="color: var(--danger); border-color: var(--danger);" onclick="clearAllProgress()">
          🗑️ Clear All Saved Progress (Reset)
        </button>
      </div>
    </div>
  `;

  container.innerHTML = html;
}

function clearAllProgress() {
  if (confirm("Are you sure you want to delete all saved progress? This action cannot be undone.")) {
    appState.progress = {};
    localStorage.removeItem("eso4_progress");
    navigateTo("dashboard");
    updateGlobalProgressBadge();
  }
}

// Progress Bar & Header Counters
function initProgress() {
  updateGlobalProgressBadge();
}

function updateGlobalProgressBadge() {
  let total = 0;
  let done = 0;
  const allSections = getAllSections().filter(s => s.data);

  allSections.forEach(s => {
    const exs = s.data.exercises || [];
    const vex = s.data.vocabulary?.exercises || [];
    total += exs.length + vex.length;
    exs.forEach(e => {
      if (appState.progress[e.id]?.completed) done++;
    });
    vex.forEach(e => {
      if (appState.progress[e.id]?.completed) done++;
    });
  });

  moduleTestsData.forEach(t => {
    total++;
    if (appState.progress[t.id]?.completed) done++;
  });

  const pct = total > 0 ? Math.round((done / total) * 100) : 0;
  const fill = document.getElementById("headerProgressFill");
  const text = document.getElementById("headerProgressText");
  const sCount = document.getElementById("sidebarProgressCount");

  if (fill) fill.style.width = `${pct}%`;
  if (text) text.textContent = `${done}/${total} (${pct}%)`;
  if (sCount) sCount.textContent = `${done}/${total}`;
}

// Event Listeners
function setupEventListeners() {
  const toggleBtn = document.getElementById("sidebarToggleBtn");
  const sidebar = document.getElementById("sidebar");
  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener("click", () => {
      sidebar.classList.toggle("collapsed");
    });
  }

  const searchInput = document.getElementById("sidebarSearch");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const q = e.target.value.toLowerCase().trim();
      const items = document.querySelectorAll(".nav-menu .nav-item, .nav-menu .nav-subitem");
      items.forEach(it => {
        if (!q || it.textContent.toLowerCase().includes(q)) {
          it.style.display = "";
        } else {
          it.style.display = "none";
        }
      });
    });
  }
}
