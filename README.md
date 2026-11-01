# English 4th ESO - Autonomous Self-Study Hub 🇬🇧

An interactive, responsive, and autonomous learning portal for **4th ESO English** secondary students, designed for independent self-study, differentiated classroom work, and flipped learning.

Inspired by secondary school digital hubs (such as [english-eso2](https://github.com/miquelangelfuentes/english-eso2)), this web platform provides immersive English content, tiered practice, audio pronunciation, flashcards, instant self-correction, and comprehensive module tests.

---

## 🌟 Key Features

### 1. ⚡ Irregular Verbs Master Trainer
- **Interactive Matrix:** Searchable table with over 90 verbs categorized into Level 1 (Foundation), Level 2 (Standard), and Level 3 (Challenge).
- **British Audio Pronunciation (🔊):** Integrated via the native Web Speech API.
- **3D Memory Flashcards:** Flip cards to self-test recall of Past Simple and Past Participle forms.
- **Speed Recall Drill:** Instant test generator (5 or 10 random verbs) with automated scoring.

### 2. 🎯 Grammar Exercises (3 Difficulty Levels)
Students can filter grammar exercises by their current confidence level:
- 🟢 **Level 1 (Foundation):** Multiple choice, time marker clues, guided recognition.
- 🟡 **Level 2 (Standard):** Contextual gap fills, verb conjugation, affirmative/negative syntax.
- 🔴 **Level 3 (Challenge):** Sentence transformations (*rephrasing* keeping the key word unchanged), error correction, and synthesis.

### 3. 📚 Vocabulary Bank & Interactive Activities
- **Word Bank Cards:** Key topic vocabulary with International Phonetic Alphabet (IPA) transcriptions, Catalan translations, authentic example sentences, and audio pronunciation.
- **Interactive Vocabulary Activities:** Definition matching, contextual cloze exercises, and collocations.

### 4. 📝 End-of-Module Comprehensive Mastery Tests
Every single module (Diagnostic Unit and Modules 1 to 6) concludes with a comprehensive **Mastery Test**:
- Combines all vocabulary (Sections A, B, C) and all grammar topics from the module.
- 10 multi-skill questions with real-time scoring, percentage calculation, and pass/fail badges (70%+).
- Detailed explanations for every question to support independent learning.

### 5. 💾 Offline & Local Progress Tracking
- Student progress, exercise completion, and test scores are automatically saved in the browser (`localStorage`).
- Overall course progress bar in the header and an interactive **"My Progress"** analytics dashboard.

---

## 📚 Syllabus & Course Content (4th ESO)

| Module | Title | Grammar Topics | Vocabulary Themes |
| :--- | :--- | :--- | :--- |
| **Special** | **Irregular Verbs** | Base, Past Simple, Past Participle | Full Table, Flashcards & Speed Test |
| **Diagnostic** | **Tenses Review** (p. 6) | Present vs Continuous, Past vs Continuous, Present Perfect, Used to, Futures | Food, Health, Sports, Travel, Adjectives |
| **Module 1** | **Game Changers** (p. 11) | • 1A: Present Perfect Simple vs Past Simple<br>• 1B: Past Perfect Simple (*had + p.p.*)<br>• 1C: Reflexive Pronouns (*myself, herself...*) | Environment, History, Transport & Commuting |
| **Module 2** | **The Unexpected** (p. 27) | • 2A: Defining Relative Clauses (*who, which, where...*)<br>• 2B: Non-defining Relative Clauses (*with commas*)<br>• 2C: Indefinite Compounds (*someone, nowhere...*) | Inventions, Talents & Abilities, Urban Landscapes |
| **Module 3** | **The Way We Live** (p. 47) | • 3A: Present Simple & Past Simple Passive<br>• 3B: Future Simple Passive (*will be + p.p.*)<br>• 3C: Modals in the Passive (*must be, should be...*) | Family & Ancestry, Customs & Folklore, Global Culture |
| **Module 4** | **All in the Mind** (p. 63) | • 4A: Gerunds (-ing) & Infinitives (to + verb)<br>• 4B: Modals of Ability & Possibility (*can, might...*)<br>• 4C: Modals of Obligation & Advice (*must, should...*) | The Senses, Memory, Fears & Phobias |
| **Module 5** | **Mother Nature** (p. 83) | • 5A: Zero & First Conditional + Time Clauses<br>• 5B: Second & Third Conditional<br>• 5C: Conditionals Matrix Review (0, 1st, 2nd, 3rd) | Flora & Fungi, Wildlife Predators, Extreme Weather |
| **Module 6** | **Trending Now** (p. 99) | • 6A: Reported Statements (Tense backshift)<br>• 6B: Reported Questions (Word order & *if/wh-* questions)<br>• 6C: Reported Orders, Requests, Offers & Suggestions | Fashion & Clothes, Social Media, Travel & Booking |

---

## 🚀 How to Run & Deploy to GitHub Pages

### Running Locally
No installation or server is required:
1. Navigate to `/english-eso4/`.
2. Double-click [index.html](file:///Users/mar/.gemini/antigravity/scratch/english-eso4/index.html) to open the portal in any browser (Chrome, Firefox, Safari, Edge).

### Deploying to GitHub Pages
1. Create a repository on your GitHub account (e.g. `english-eso4`).
2. Push your project files:
   ```bash
   cd /Users/mar/.gemini/antigravity/scratch/english-eso4
   git init
   git add .
   git commit -m "Deploy 4th ESO English self-study hub"
   git branch -M main
   git remote add origin https://github.com/<YOUR_USERNAME>/english-eso4.git
   git push -u origin main
   ```
3. In your GitHub repository: go to **Settings** > **Pages** > select **main** branch and save.
4. Your website will be live in minutes at: `https://<YOUR_USERNAME>.github.io/english-eso4/`
