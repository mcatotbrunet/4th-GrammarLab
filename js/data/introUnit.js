// Introduction Unit: Tenses & Core Vocabulary (Page 6)
const introUnitData = {
  id: "intro",
  moduleId: 0,
  moduleTitle: "Diagnostic Unit",
  section: "Diagnostic & Review",
  page: 6,
  themeColor: "#4f46e5",
  title: "Diagnostic Unit: Review of Tenses & Key Vocabulary",
  subtitle: "Present Simple & Continuous, Past Simple & Continuous, Present Perfect Simple, Used to, and Future Forms",
  
  grammar: {
    title: "English Tenses Overview & Reference Guide",
    sections: [
      {
        heading: "1. Present Simple vs Present Continuous",
        content: `
          <p><strong>Present Simple</strong> is used for daily routines, permanent habits, and universal truths. It is frequently accompanied by adverbs of frequency (<em>always, usually, often, sometimes, never</em>).</p>
          <div class="code-box">
            <span><strong>Form:</strong> Subject + base verb (-s/-es for he/she/it). Negative: <em>don't / doesn't</em>.</span>
            <br><em>Example:</em> She <strong>studies</strong> English every morning before school.
          </div>
          <p><strong>Present Continuous</strong> describes actions happening right now, at the moment of speaking, or temporary situations (<em>now, right now, at the moment, this week</em>).</p>
          <div class="code-box">
            <span><strong>Form:</strong> Subject + am/is/are + verb-ing.</span>
            <br><em>Example:</em> We <strong>are preparing</strong> for our 4th ESO final project right now.
          </div>
          <div class="tip-box">
            <strong>Key Note (Stative Verbs):</strong> Verbs expressing states, feelings, or thoughts (<em>like, love, hate, know, understand, believe, want, need</em>) are rarely used in continuous tenses! Always say: <em>"I understand the question"</em> (NEVER <em>"I am understanding"</em>).
          </div>
        `
      },
      {
        heading: "2. Past Simple vs Past Continuous",
        content: `
          <p><strong>Past Simple</strong> is used for completed past events at a specific, defined time (<em>yesterday, last year, two months ago, in 2021</em>).</p>
          <div class="code-box">
            <span><strong>Regular:</strong> verb + -ed (played, watched). <strong>Irregular:</strong> 2nd column (went, saw, wrote).</span>
            <br><em>Negative:</em> didn't + base form (He didn't call). <em>Question:</em> Did you see the match?
          </div>
          <p><strong>Past Continuous</strong> describes actions that were in progress at a specific moment in the past, often interrupted by a punctual Past Simple action.</p>
          <div class="code-box">
            <span><strong>Form:</strong> was/were + verb-ing.</span>
            <br><em>Example:</em> I <strong>was walking</strong> home when the lightning storm <strong>began</strong>.
            <br><em>Connectors:</em> <strong>While / As</strong> + Past Continuous; <strong>When</strong> + Past Simple.
          </div>
        `
      },
      {
        heading: "3. Present Perfect Simple vs Past Simple",
        content: `
          <p><strong>Present Perfect (have/has + past participle)</strong> connects the past with the present: past experiences without specifying when (<em>ever, never</em>), recent news (<em>just, already, yet</em>), or states continuing until now (<em>for, since</em>).</p>
          <div class="code-box">
            <em>Present Perfect:</em> I <strong>have lived</strong> in this city for four years. (I still live here now).
            <br><em>Past Simple:</em> I <strong>lived</strong> in London in 2021. (Finished past period; I no longer live there).
          </div>
        `
      },
      {
        heading: "4. Used to (Past Habits and States)",
        content: `
          <p>Use <strong>used to + infinitive</strong> to express past habits, routines, or states that are no longer true today.</p>
          <div class="code-box">
            <span><strong>Affirmative:</strong> Subject + used to + base verb (I <strong>used to play</strong> the violin).</span>
            <br><span><strong>Negative:</strong> Subject + didn't use to + base verb (She <strong>didn't use to like</strong> olives).</span>
            <br><span><strong>Question:</strong> Did you use to walk to primary school?</span>
          </div>
        `
      },
      {
        heading: "5. Future Forms: Will vs Be Going To vs Present Continuous",
        content: `
          <table class="styled-table">
            <thead>
              <tr><th>Structure</th><th>Primary Usage</th><th>Clear Example</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Will + verb</strong></td><td>Spontaneous decisions, predictions without present proof, promises.</td><td>"I'll help you carry those books!" / "I think robots will teach."</td></tr>
              <tr><td><strong>Be going to + verb</strong></td><td>Prior intentions, personal plans, predictions with physical evidence.</td><td>"Look at those dark storm clouds; it is going to rain."</td></tr>
              <tr><td><strong>Present Continuous</strong></td><td>Fixed arrangements with fixed time/place already scheduled.</td><td>"We are flying to Manchester next Wednesday at 8 am."</td></tr>
            </tbody>
          </table>
        `
      }
    ]
  },

  vocabulary: {
    topic: "Food, Health, Sports, Travel & Key Descriptive Adjectives",
    words: [
      { word: "balanced diet", phonetic: "/ˌbæl.ənst ˈdaɪ.ət/", cat: "dieta equilibrada", example: "Eating vegetables and fruit ensures a balanced diet." },
      { word: "nutritious", phonetic: "/njuːˈtrɪʃ.əs/", cat: "nutritiu / sa", example: "Nuts and seeds are nutritious and provide steady energy." },
      { word: "injury", phonetic: "/ˈɪn.dʒər.i/", cat: "lesió / ferida", example: "The football captain recovered quickly from his knee injury." },
      { word: "symptom", phonetic: "/ˈsɪmp.təm/", cat: "símptoma", example: "A persistent fever is a common symptom of infection." },
      { word: "workout", phonetic: "/ˈwɜːk.aʊt/", cat: "entrenament", example: "A daily 30-minute cardio workout keeps your heart healthy." },
      { word: "compete", phonetic: "/kəmˈpiːt/", cat: "competir", example: "Athletes from over 190 countries compete at the Olympic Games." },
      { word: "destination", phonetic: "/ˌdes.tɪˈneɪ.ʃən/", cat: "destinació", example: "Edinburgh is a world-famous historical travel destination." },
      { word: "luggage", phonetic: "/ˈlʌɡ.ɪdʒ/", cat: "equipatge", example: "Passengers must weigh their luggage before boarding." },
      { word: "exhausted", phonetic: "/ɪɡˈzɔː.stɪd/", cat: "esgotat", example: "After walking 20 kilometres across the hills, we were exhausted." },
      { word: "reliable", phonetic: "/rɪˈlaɪ.ə.bəl/", cat: "de confiança / fiable", example: "Alex is a reliable partner; he always completes his tasks on time." },
      { word: "challenging", phonetic: "/ˈtʃæl.ɪn.dʒɪŋ/", cat: "desafiant / exigent", example: "Mastering English conditional tenses is challenging but rewarding." },
      { word: "enthusiastic", phonetic: "/ɪnˌθjuː.ziˈæs.tɪk/", cat: "entusiasta", example: "The students were enthusiastic about creating their digital portfolio." }
    ],

    exercises: [
      {
        id: "intro-vocab-ex1",
        title: "Vocabulary Exercise 1: Definition Matching",
        instruction: "Select the word that matches each definition accurately.",
        questions: [
          {
            prompt: "Physical damage or harm done to a person's body (for instance during sport):",
            options: ["symptom", "injury", "workout", "destination"],
            correct: 1,
            explanation: "An 'injury' is physical damage to the body (e.g. broken bone, sprain)."
          },
          {
            prompt: "Providing the substances that your body needs to grow and stay healthy:",
            options: ["exhausted", "nutritious", "challenging", "enthusiastic"],
            correct: 1,
            explanation: "'Nutritious' food contains minerals, vitamins and healthy nutrients."
          },
          {
            prompt: "Someone or something you can trust and depend on completely:",
            options: ["reliable", "challenging", "exhausted", "enthusiastic"],
            correct: 0,
            explanation: "'Reliable' means dependable and trustworthy."
          },
          {
            prompt: "The bags, suitcases, and backpacks you carry when traveling:",
            options: ["destination", "workout", "luggage", "injury"],
            correct: 2,
            explanation: "'Luggage' refers to suitcases and personal travel bags."
          }
        ]
      },
      {
        id: "intro-vocab-ex2",
        title: "Vocabulary Exercise 2: Contextual Gap-Fill",
        instruction: "Fill in the blank with the most appropriate vocabulary word from the bank.",
        questions: [
          {
            prompt: "After revising for six straight hours for the exams, we felt completely _____.",
            accepted: ["exhausted"],
            hint: "Word meaning 'extremely tired': exhausted."
          },
          {
            prompt: "A healthy lifestyle requires regular exercise and a _____ diet.",
            accepted: ["balanced"],
            hint: "Word paired with diet: balanced."
          },
          {
            prompt: "High body temperature and coughing are typical _____ of the flu.",
            accepted: ["symptoms"],
            hint: "Signs of an illness (plural): symptoms."
          },
          {
            prompt: "Dozens of young programmers will _____ for the first prize in the hackathon.",
            accepted: ["compete"],
            hint: "Verb meaning to take part in a contest: compete."
          }
        ]
      }
    ]
  },

  exercises: [
    // LEVEL 1: FOUNDATION
    {
      id: "intro-l1-1",
      level: 1,
      levelLabel: "Level 1 (Foundation)",
      type: "multiple_choice",
      title: "Exercise 1: Present Simple vs Continuous (Core Structures)",
      instruction: "Choose the correct verb form for each sentence.",
      questions: [
        {
          prompt: "Look! The express train _____ into the station right now.",
          options: ["comes", "is coming", "came", "has come"],
          correct: 1,
          explanation: "Use Present Continuous ('is coming') because the action is happening at this very moment ('Look!', 'right now')."
        },
        {
          prompt: "My elder brother _____ basketball every Saturday morning.",
          options: ["is playing", "plays", "played", "play"],
          correct: 1,
          explanation: "'Every Saturday morning' signals a regular habit, requiring Present Simple with third person -s (plays)."
        },
        {
          prompt: "I _____ this difficult algebra problem. Can you explain it to me?",
          options: ["am not understanding", "don't understand", "didn't understood", "not understand"],
          correct: 1,
          explanation: "'Understand' is a stative verb; it is not typically used in the continuous form."
        },
        {
          prompt: "_____ you usually have a balanced breakfast before leaving for school?",
          options: ["Are", "Do", "Have", "Did"],
          correct: 1,
          explanation: "Present Simple yes/no questions with 'you' use the auxiliary 'Do'."
        },
        {
          prompt: "Listen to the birds! They _____ so loudly in the garden.",
          options: ["sing", "are singing", "sang", "sung"],
          correct: 1,
          explanation: "'Listen!' indicates an event currently in progress -> Present Continuous ('are singing')."
        }
      ]
    },
    {
      id: "intro-l1-2",
      level: 1,
      levelLabel: "Level 1 (Foundation)",
      type: "fill_blank",
      title: "Exercise 2: Past Simple vs Past Continuous Identification",
      instruction: "Complete the sentences with the correct form (Past Simple or Past Continuous).",
      questions: [
        {
          prompt: "While we _____ (walk) in the natural park, we saw a rare red deer.",
          accepted: ["were walking"],
          hint: "After 'While', use Past Continuous: were walking."
        },
        {
          prompt: "She was reading an interesting novel when the telephone _____ (ring).",
          accepted: ["rang"],
          hint: "An interrupting punctual action takes the Past Simple: rang."
        },
        {
          prompt: "Yesterday afternoon, our team _____ (win) the regional tournament.",
          accepted: ["won"],
          hint: "Finished past event with 'yesterday' -> Past Simple of win: won."
        },
        {
          prompt: "What _____ you _____ (do) at 8:00 pm last night?",
          accepted: ["were you doing", "were/doing"],
          hint: "Action in progress at a specific past time: were you doing."
        },
        {
          prompt: "The children _____ (sleep) peacefully when the fireworks started.",
          accepted: ["were sleeping"],
          hint: "Continuous background action: were sleeping."
        }
      ]
    },
    {
      id: "intro-l1-3",
      level: 1,
      levelLabel: "Level 1 (Foundation)",
      type: "multiple_choice",
      title: "Exercise 3: Used To & Time Markers Recognition",
      instruction: "Identify the correct form of 'used to' and basic time markers.",
      questions: [
        {
          prompt: "In the 1990s, people _____ have smartphones or high-speed Wi-Fi.",
          options: ["didn't use to", "didn't used to", "used to not", "weren't use to"],
          correct: 0,
          explanation: "Negative of used to: didn't use to + base verb."
        },
        {
          prompt: "Did you _____ ride a bicycle to primary school?",
          options: ["use to", "used to", "using to", "uses to"],
          correct: 0,
          explanation: "In questions with 'Did', use the base form 'use to'."
        },
        {
          prompt: "She has lived in Dublin _____ three years.",
          options: ["for", "since", "ago", "already"],
          correct: 0,
          explanation: "'For' expresses duration of time (three years)."
        },
        {
          prompt: "They haven't visited their cousins in London _____ 2021.",
          options: ["since", "for", "yet", "already"],
          correct: 0,
          explanation: "'Since' indicates the specific starting point in time."
        }
      ]
    },
    {
      id: "intro-l1-4",
      level: 1,
      levelLabel: "Level 1 (Foundation)",
      type: "multiple_choice",
      title: "Exercise 4: Future Auxiliaries Quick Check",
      instruction: "Choose the correct future auxiliary (will or be going to).",
      questions: [
        {
          prompt: "I promise I _____ tell anyone your secret.",
          options: ["won't", "am not going to", "don't", "wasn't"],
          correct: 0,
          explanation: "Promises take 'will / won't'."
        },
        {
          prompt: "They _____ visit their grandparents this afternoon; they planned it yesterday.",
          options: ["are going to", "will", "would", "do"],
          correct: 0,
          explanation: "Pre-planned intention -> are going to."
        }
      ]
    },

    // LEVEL 2: STANDARD / INTERMEDIATE
    {
      id: "intro-l2-1",
      level: 2,
      levelLabel: "Level 2 (Standard)",
      type: "fill_blank",
      title: "Exercise 1: Present Perfect vs Past Simple & Used To",
      instruction: "Write the correct form of the verbs in brackets.",
      questions: [
        {
          prompt: "I _____ (never / try) Japanese matcha tea in my entire life, but I would love to.",
          accepted: ["have never tried", "'ve never tried"],
          hint: "Life experience up to now: Present Perfect (have never tried)."
        },
        {
          prompt: "William Shakespeare _____ (write) Hamlet around the year 1600.",
          accepted: ["wrote"],
          hint: "Definite historical past time: Past Simple (wrote)."
        },
        {
          prompt: "When my father was a teenager, he _____ (use / play) drums in a rock band.",
          accepted: ["used to play"],
          hint: "Past habit that no longer happens: used to play."
        },
        {
          prompt: "How long _____ they _____ (live) in this town? Since 2018.",
          accepted: ["have they lived", "have / lived"],
          hint: "With 'How long' and 'since', use Present Perfect."
        },
        {
          prompt: "We _____ (not finish) our chemistry lab experiment yet.",
          accepted: ["haven't finished", "have not finished"],
          hint: "Negative sentence with 'yet' -> haven't finished."
        }
      ]
    },
    {
      id: "intro-l2-2",
      level: 2,
      levelLabel: "Level 2 (Standard)",
      type: "multiple_choice",
      title: "Exercise 2: Choosing Future Forms in Real Contexts",
      instruction: "Select the most appropriate future form according to context.",
      questions: [
        {
          prompt: "Watch out! That unstable pile of heavy books _____!",
          options: ["will fall", "is going to fall", "falls", "is falling"],
          correct: 1,
          explanation: "Imminent prediction based on present visual evidence -> 'is going to fall'."
        },
        {
          prompt: "A: It is very warm inside this classroom. B: Don't worry, I _____ the window.",
          options: ["am opening", "will open", "am going to open", "open"],
          correct: 1,
          explanation: "Spontaneous decision made at the moment of speaking -> 'will open'."
        },
        {
          prompt: "We have bought our train tickets. We _____ to Girona tomorrow at 9:30 AM.",
          options: ["travel", "will travel", "are travelling", "are traveling", "travelled"],
          correct: 2,
          explanation: "Definite personal arrangement scheduled with booked tickets -> Present Continuous."
        },
        {
          prompt: "In the future, scientists believe that electric airplanes _____ common.",
          options: ["will become", "are becoming", "become", "are going to become"],
          correct: 0,
          explanation: "Opinion-based prediction about the distant future -> 'will become'."
        }
      ]
    },
    {
      id: "intro-l2-3",
      level: 2,
      levelLabel: "Level 2 (Standard)",
      type: "fill_blank",
      title: "Exercise 3: Mixed Past & Present Narrative Completion",
      instruction: "Supply the correct tense (Past Simple, Past Continuous, or Present Perfect) of the verbs in brackets.",
      questions: [
        {
          prompt: "While the students _____ (carry) out the experiment, the teacher took notes.",
          accepted: ["were carrying"],
          hint: "Continuous action in progress: were carrying."
        },
        {
          prompt: "My cousin _____ (already / visit) five different European capitals this year.",
          accepted: ["has already visited", "'s already visited"],
          hint: "Present Perfect with already: has already visited."
        },
        {
          prompt: "She _____ (not hear) the doorbell because she was wearing headphones.",
          accepted: ["didn't hear", "did not hear"],
          hint: "Punctual past action in the negative: didn't hear."
        },
        {
          prompt: "We _____ (meet) our new English teacher two weeks ago.",
          accepted: ["met"],
          hint: "Time marker 'two weeks ago' -> Past Simple: met."
        }
      ]
    },
    {
      id: "intro-l2-4",
      level: 2,
      levelLabel: "Level 2 (Standard)",
      type: "fill_blank",
      title: "Exercise 4: Present Perfect with Just, Already, and Yet",
      instruction: "Write the verb in Present Perfect using just, already, or yet.",
      questions: [
        {
          prompt: "I am not hungry because I _____ (just / eat) a delicious chicken sandwich.",
          accepted: ["have just eaten", "'ve just eaten"],
          hint: "have just eaten."
        },
        {
          prompt: "Have you submitted your scientific report _____?",
          accepted: ["yet"],
          hint: "yet."
        }
      ]
    },

    // LEVEL 3: CHALLENGE / ADVANCED
    {
      id: "intro-l3-1",
      level: 3,
      levelLabel: "Level 3 (Challenge)",
      type: "transformation",
      title: "Exercise 1: Advanced Sentence Transformations (Rephrasing)",
      instruction: "Complete the second sentence so that it means the same as the first, using the capitalized word. Do not change the word.",
      questions: [
        {
          prompt: "It started raining three hours ago and it hasn't stopped yet. (FOR)<br>It ____________________ three hours.",
          accepted: ["has been raining for", "has rained for"],
          hint: "Use Present Perfect (Continuous) with 'for'."
        },
        {
          prompt: "In the past, my uncle was a professional basketball player. (USED)<br>My uncle ____________________ a professional basketball player.",
          accepted: ["used to be"],
          hint: "used to + base verb: used to be."
        },
        {
          prompt: "The last time I ate junk food was two months ago. (HAVEN'T)<br>I ____________________ junk food for two months.",
          accepted: ["haven't eaten", "have not eaten"],
          hint: "Negative Present Perfect: haven't eaten."
        },
        {
          prompt: "She decided yesterday that she wants to learn French next term. (GOING)<br>She ____________________ French next term.",
          accepted: ["is going to learn", "is going to study"],
          hint: "Pre-planned intention: is going to learn."
        },
        {
          prompt: "During my flight to London, I listened to a full audio book. (WHILE)<br>____________________ to London, I listened to a full audio book.",
          accepted: ["While I was flying", "While flying"],
          hint: "While + Past Continuous: While I was flying."
        }
      ]
    },
    {
      id: "intro-l3-2",
      level: 3,
      levelLabel: "Level 3 (Challenge)",
      type: "transformation",
      title: "Exercise 2: Syntax Precision & Error Correction Rephrasing",
      instruction: "Rephrase each sentence correctly using the keyword in brackets.",
      questions: [
        {
          prompt: "I bought this bicycle in 2021 and I still ride it every day. (HAD)<br>I ____________________ this bicycle since 2021.",
          accepted: ["have had", "'ve had"],
          hint: "Present Perfect of have: have had."
        },
        {
          prompt: "My sister has arranged to see her orthodontist at 4:30 pm today. (SEEING)<br>My sister ____________________ her orthodontist at 4:30 pm today.",
          accepted: ["is seeing"],
          hint: "Present Continuous for fixed schedule: is seeing."
        },
        {
          prompt: "We haven't been to an amusement park for four years. (WENT)<br>The last time we ____________________ to an amusement park was four years ago.",
          accepted: ["went"],
          hint: "went."
        }
      ]
    },
    {
      id: "intro-l3-3",
      level: 3,
      levelLabel: "Level 3 (Challenge)",
      type: "transformation",
      title: "Exercise 3: Advanced Diagnostic Tenses Mastery",
      instruction: "Complete the second sentence keeping the exact meaning.",
      questions: [
        {
          prompt: "Paul started working on his robotics project at 2 pm and he is still working on it. (SINCE)<br>Paul has been working on his robotics project ____________________.",
          accepted: ["since 2 pm", "since 2:00 pm"],
          hint: "since 2 pm."
        },
        {
          prompt: "Did you regularly cycle to school when you lived in Girona? (USE)<br>Did you ____________________ to school when you lived in Girona?",
          accepted: ["use to cycle", "use to ride a bike"],
          hint: "use to cycle."
        },
        {
          prompt: "The cinema tickets are in my pocket; we are watching the new film tonight. (SEEING)<br>We ____________________ the new film tonight.",
          accepted: ["are seeing", "are watching"],
          hint: "Present Continuous for fixed arrangement: are seeing."
        }
      ]
    },
    {
      id: "intro-l3-4",
      level: 3,
      levelLabel: "Level 3 (Challenge)",
      type: "transformation",
      title: "Exercise 4: Complex Sentence Tense Synthesis",
      instruction: "Rewrite the sentence as indicated, using the prompt word.",
      questions: [
        {
          prompt: "I planned to leave early, but suddenly the doorbell rang. (ABOUT)<br>I was just ____________________ when the doorbell rang.",
          accepted: ["about to leave", "about to go"],
          hint: "was just about to leave."
        },
        {
          prompt: "This is Sarah's first experience speaking at an international conference. (NEVER)<br>Sarah has ____________________ at an international conference before.",
          accepted: ["never spoken"],
          hint: "has never spoken."
        },
        {
          prompt: "Look at those dark thunderstorm clouds; rain is imminent. (GOING)<br>Look at those dark clouds; it ____________________ rain.",
          accepted: ["is going to", "'s going to"],
          hint: "prediction based on visible present evidence: is going to."
        }
      ]
    }
  ]
};
