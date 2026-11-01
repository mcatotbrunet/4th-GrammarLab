// Module 4: All in the Mind (Page 63)
const module4Data = {
  id: "module-4",
  moduleId: 4,
  moduleTitle: "Module 4: All in the Mind",
  page: 63,
  themeColor: "#f59e0b", // amber / orange
  sections: [
    {
      id: "m4-a",
      code: "4A",
      title: "Perfect Sense",
      subtitle: "The Senses, Perception & Gerunds vs Infinitives",
      
      grammar: {
        title: "Gerunds (-ing) and Infinitives (to + verb)",
        sections: [
          {
            heading: "Choosing Between -ing and to-Infinitive",
            content: `
              <div class="comparison-grid">
                <div class="grammar-card">
                  <h4>Use Gerunds (-ing):</h4>
                  <ul>
                    <li>As the <strong>subject</strong> of a clause: <em><strong>Listening</strong> to classical music sharpens mental focus.</em></li>
                    <li>Directly after <strong>prepositions</strong>: <em>She is enthusiastic about <strong>studying</strong> neuroscience.</em></li>
                    <li>Following specific verbs: <em>enjoy, avoid, practice, suggest, imagine, keep, mind, risk, spend time</em>.</li>
                  </ul>
                </div>
                <div class="grammar-card">
                  <h4>Use Infinitives (to + verb):</h4>
                  <ul>
                    <li>To indicate <strong>purpose / intention</strong>: <em>He paused <strong>to listen</strong> to the faint whisper.</em></li>
                    <li>Directly after <strong>adjectives</strong>: <em>It is difficult <strong>to describe</strong> that exotic aroma.</em></li>
                    <li>Following specific verbs: <em>decide, hope, want, plan, agree, promise, refuse, offer, need, afford</em>.</li>
                  </ul>
                </div>
              </div>
              <div class="tip-box">
                <strong>Verbs Changing Meaning Depending on Form:</strong>
                <ul>
                  <li><strong>Stop:</strong> <em>He stopped smoking.</em> (He gave up the habit) vs <em>He stopped to smoke.</em> (He paused an activity in order to smoke).</li>
                  <li><strong>Remember:</strong> <em>Remember to turn off the lights.</em> (Future duty) vs <em>I remember turning off the lights.</em> (Recalling a past memory).</li>
                  <li><strong>Forget:</strong> <em>Don't forget to lock the door.</em> (Don't omit a duty) vs <em>I will never forget visiting Rome.</em> (Unforgettable memory).</li>
                </ul>
              </div>
            `
          }
        ]
      },

      vocabulary: {
        topic: "The Five Senses & Sensory Perception",
        words: [
          { word: "sensory", phonetic: "/ˈsen.sər.i/", cat: "sensorial", example: "Experiencing live orchestral music is an immersive sensory delight." },
          { word: "aroma", phonetic: "/əˈrəʊ.mə/", cat: "aroma / olor agradable", example: "The enticing aroma of fresh coffee beans filled the roastery." },
          { word: "texture", phonetic: "/ˈteks.tʃər/", cat: "textura", example: "Silk and velvet have a distinctive luxurious texture." },
          { word: "bitter", phonetic: "/ˈbɪt.ər/", cat: "amarg/a", example: "Dark roasted cocoa and tonic water have a notably bitter taste." },
          { word: "sour", phonetic: "/saʊər/", cat: "agre / àcid", example: "Unripe green apples and lemons taste intensely sour." },
          { word: "fragrant", phonetic: "/ˈfreɪ.ɡrənt/", cat: "fragant / perfumat", example: "Spring gardens are filled with fragrant blossoming jasmine." }
        ],
        exercises: [
          {
            id: "m4a-vocab-ex1",
            title: "Vocabulary Exercise 1: Sensory Descriptors",
            instruction: "Match each sensory adjective to its definition.",
            questions: [
              {
                prompt: "Having a sharp, pungent taste like vinegar or lemon juice:",
                options: ["sour", "bitter", "fragrant", "sensory"],
                correct: 0,
                explanation: "'Sour' describes an acidic taste like lemon or vinegar."
              },
              {
                prompt: "Having a pleasant, sweet smell:",
                options: ["bitter", "sour", "fragrant", "exhausted"],
                correct: 2,
                explanation: "'Fragrant' means sweet-smelling."
              },
              {
                prompt: "The feel, appearance, or consistency of a surface or substance:",
                options: ["texture", "aroma", "sensory", "stamina"],
                correct: 0,
                explanation: "'Texture' refers to the tactile quality of a surface."
              }
            ]
          },
          {
            id: "m4a-vocab-ex2",
            title: "Vocabulary Exercise 2: Context Fill",
            instruction: "Complete the sentence with an appropriate sense word.",
            questions: [
              {
                prompt: "A delicious spicy _____ wafted from the restaurant kitchen.",
                accepted: ["aroma", "smell"],
                hint: "Pleasant scent of food: aroma."
              },
              {
                prompt: "Overusing loud earphones can cause permanent damage to your _____ organs.",
                accepted: ["sensory", "hearing"],
                hint: "Related to bodily senses: sensory."
              }
            ]
          }
        ]
      },

      exercises: [
        // Level 1: Foundation
        {
          id: "m4a-l1-1",
          level: 1,
          levelLabel: "Level 1 (Foundation)",
          type: "multiple_choice",
          title: "Exercise 1: Gerund vs Infinitive Recognition",
          instruction: "Select the correct form of the verb for each sentence.",
          questions: [
            {
              prompt: "I genuinely enjoy _____ to lo-fi ambient beats while preparing homework.",
              options: ["listening", "to listen", "listen", "to listening"],
              correct: 0,
              explanation: "The verb 'enjoy' is always followed by a gerund (-ing)."
            },
            {
              prompt: "They decided _____ the contemporary art exhibition this weekend.",
              options: ["visiting", "to visit", "visit", "to visiting"],
              correct: 1,
              explanation: "The verb 'decide' requires 'to + infinitive'."
            },
            {
              prompt: "_____ eight glasses of water daily helps maintain mental clarity.",
              options: ["Drink", "Drinking", "To drinking", "Drank"],
              correct: 1,
              explanation: "When an action functions as the grammatical subject, use a gerund ('Drinking')."
            },
            {
              prompt: "She promised _____ me with my English pronunciation practice.",
              options: ["helping", "to help", "help", "to helping"],
              correct: 1,
              explanation: "'Promise' takes 'to + infinitive'."
            }
          ]
        },
        {
          id: "m4a-l1-2",
          level: 1,
          levelLabel: "Level 1 (Foundation)",
          type: "multiple_choice",
          title: "Exercise 2: Identifying Verb Patterns",
          instruction: "Determine whether the verb takes -ing or to-infinitive.",
          questions: [
            {
              prompt: "Would you mind _____ the classroom door?",
              options: ["closing", "to close", "close", "to closing"],
              correct: 0,
              explanation: "'mind' takes a gerund: closing."
            },
            {
              prompt: "We hope _____ the interactive brain museum during our trip to Manchester.",
              options: ["to visit", "visiting", "visit", "to visiting"],
              correct: 0,
              explanation: "'hope' takes to-infinitive: to visit."
            },
            {
              prompt: "The athlete refused _____ an interview after the competition.",
              options: ["to give", "giving", "give", "for giving"],
              correct: 0,
              explanation: "'refuse' takes to-infinitive: to give."
            },
            {
              prompt: "He suggested _____ a short break to refresh our memory.",
              options: ["taking", "to take", "take", "to taking"],
              correct: 0,
              explanation: "'suggest' takes a gerund: taking."
            }
          ]
        },
        {
          id: "m4a-l1-3",
          level: 1,
          levelLabel: "Level 1 (Foundation)",
          type: "multiple_choice",
          title: "Exercise 3: Prepositions Followed by Gerunds",
          instruction: "Select the appropriate -ing verb form after prepositions.",
          questions: [
            {
              prompt: "Marc is exceptionally talented at _____ mental arithmetic calculations.",
              options: ["doing", "to do", "do", "did"],
              correct: 0,
              explanation: "After the preposition 'at' use a gerund -> 'doing'."
            },
            {
              prompt: "Thank you for _____ me with my scientific research project.",
              options: ["helping", "to help", "help", "helped"],
              correct: 0,
              explanation: "After the preposition 'for' use a gerund -> 'helping'."
            },
            {
              prompt: "She apologized for _____ late to the memory workshop.",
              options: ["being", "to be", "be", "been"],
              correct: 0,
              explanation: "Preposition 'for' takes -ing: 'being'."
            }
          ]
        },

        // Level 2: Standard
        {
          id: "m4a-l2-1",
          level: 2,
          levelLabel: "Level 2 (Standard)",
          type: "fill_blank",
          title: "Exercise 1: Supplying Gerunds or Infinitives",
          instruction: "Write the correct form (gerund or to-infinitive) of the verb in brackets.",
          questions: [
            {
              prompt: "Students should avoid _____ (cram) all their revision into a single night.",
              accepted: ["cramming"],
              hint: "avoid + gerund -> cramming."
            },
            {
              prompt: "We were fascinated _____ (learn) how sensory signals reach the cerebral cortex.",
              accepted: ["to learn"],
              hint: "Followed by adjective (fascinated) -> to learn."
            },
            {
              prompt: "Remember _____ (recharge) your tablet before tomorrow's digital assessment.",
              accepted: ["to recharge"],
              hint: "Duty to perform in the future: to recharge."
            },
            {
              prompt: "Are you interested in _____ (join) the neuroscience science club?",
              accepted: ["joining"],
              hint: "After preposition 'in' -> joining."
            }
          ]
        },
        {
          id: "m4a-l2-2",
          level: 2,
          levelLabel: "Level 2 (Standard)",
          type: "fill_blank",
          title: "Exercise 2: Contextual Infinitive of Purpose & Gerunds",
          instruction: "Fill in the blank with the gerund or infinitive form.",
          questions: [
            {
              prompt: "She put on noise-cancelling headphones _____ (concentrate) on her essay.",
              accepted: ["to concentrate"],
              hint: "Infinitive of purpose: to concentrate."
            },
            {
              prompt: "He admitted _____ (feel) anxious before speaking in front of the assembly.",
              accepted: ["feeling"],
              hint: "admit + -ing: feeling."
            },
            {
              prompt: "I look forward to _____ (hear) your presentation about the five senses.",
              accepted: ["hearing"],
              hint: "look forward to + gerund: hearing."
            },
            {
              prompt: "We plan _____ (conduct) an experiment on visual memory next Tuesday.",
              accepted: ["to conduct"],
              hint: "plan + to-infinitive: to conduct."
            }
          ]
        },
        {
          id: "m4a-l2-3",
          level: 2,
          levelLabel: "Level 2 (Standard)",
          type: "fill_blank",
          title: "Exercise 3: Verbs with Meaning Shift (Stop, Remember, Try)",
          instruction: "Complete with either gerund (-ing) or infinitive (to + verb) according to context.",
          questions: [
            {
              prompt: "Please stop _____ (make) so much noise; I cannot concentrate on my reading.",
              accepted: ["making"],
              hint: "Cease an ongoing activity: making."
            },
            {
              prompt: "On our way home, we stopped _____ (buy) fresh fruit at the market.",
              accepted: ["to buy"],
              hint: "Halted in order to buy: to buy."
            },
            {
              prompt: "Did you remember _____ (lock) the science laboratory door when leaving?",
              accepted: ["to lock"],
              hint: "Duty in mind: to lock."
            }
          ]
        },

        // Level 3: Challenge
        {
          id: "m4a-l3-1",
          level: 3,
          levelLabel: "Level 3 (Challenge)",
          type: "transformation",
          title: "Exercise 1: Meaning Shift Transformations (Stop, Remember, Regret)",
          instruction: "Complete the second sentence so that it maintains the original meaning.",
          questions: [
            {
              prompt: "I will always remember that I saw the aurora borealis in northern Norway. (FORGET)<br>I will never forget ____________________ the aurora borealis in northern Norway.",
              accepted: ["seeing"],
              hint: "forget + gerund (-ing) for past memories -> seeing."
            },
            {
              prompt: "The hiker paused her walk so that she could admire the mountain panorama. (STOPPED)<br>The hiker ____________________ the mountain panorama.",
              accepted: ["stopped to admire"],
              hint: "stopped to admire (paused in order to admire)."
            },
            {
              prompt: "It is pointless to worry about what cannot be changed. (NO USE)<br>It is ____________________ about what cannot be changed.",
              accepted: ["no use worrying"],
              hint: "It is no use worrying."
            }
          ]
        },
        {
          id: "m4a-l3-2",
          level: 3,
          levelLabel: "Level 3 (Challenge)",
          type: "transformation",
          title: "Exercise 2: Advanced Gerund & Infinitive Rephrasing",
          instruction: "Rewrite the sentence using the prompt in brackets.",
          questions: [
            {
              prompt: "It was so cold that we couldn't take off our gloves. (TOO)<br>It was ____________________ our gloves.",
              accepted: ["too cold to take off"],
              hint: "too cold to take off."
            },
            {
              prompt: "I prefer reading scientific articles to watching mindless television. (RATHER)<br>I would ____________________ scientific articles than watch mindless television.",
              accepted: ["rather read"],
              hint: "would rather read."
            },
            {
              prompt: "He managed to pass the cognitive test without studying. (SUCCEEDED)<br>He ____________________ the cognitive test without studying.",
              accepted: ["succeeded in passing"],
              hint: "succeeded in passing."
            }
          ]
        },
        {
          id: "m4a-l3-3",
          level: 3,
          levelLabel: "Level 3 (Challenge)",
          type: "transformation",
          title: "Exercise 3: Gerunds as Subjects and Idiomatic Structures",
          instruction: "Rephrase the sentences using gerunds or infinitives as required.",
          questions: [
            {
              prompt: "It is essential to sleep eight hours for optimal brain function. (SLEEPING)<br>____________________ eight hours is essential for optimal brain function.",
              accepted: ["Sleeping"],
              hint: "Sleeping (gerund as grammatical subject)."
            },
            {
              prompt: "They didn't allow us to enter the laboratory room. (LET)<br>They didn't ____________________ the laboratory room.",
              accepted: ["let us enter"],
              hint: "let + object + base verb: let us enter."
            },
            {
              prompt: "I can't wait to visit the sensory illusion exhibition next Friday. (FORWARD)<br>I am looking ____________________ the sensory illusion exhibition next Friday.",
              accepted: ["forward to visiting"],
              hint: "forward to visiting."
            }
          ]
        }
      ]
    },

    {
      id: "m4-b",
      code: "4B",
      title: "Brain Power",
      subtitle: "Memory, Cognitive Ability & Modals: Can, Could, Be able to, May, Might",
      
      grammar: {
        title: "Modals of Ability and Possibility",
        sections: [
          {
            heading: "Expressing Ability & Degrees of Possibility",
            content: `
              <table class="styled-table">
                <thead>
                  <tr><th>Modal Verb</th><th>Primary Function</th><th>Natural Example</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>can / can't</strong></td><td>General ability in the present; permission.</td><td>She <em>can memorise</em> fifty random digits in sixty seconds.</td></tr>
                  <tr><td><strong>could / couldn't</strong></td><td>General ability in the past.</td><td>When I was seven, I <em>could recall</em> entire poems easily.</td></tr>
                  <tr><td><strong>be able to</strong></td><td>Ability across all tenses (future, present perfect, conditionals).</td><td>With training, you <em>will be able to</em> improve cognitive recall.</td></tr>
                  <tr><td><strong>may / might / could</strong></td><td>Possibility / speculation in the present or future (maybe).</td><td>Brain puzzles <em>might stimulate</em> neural plasticity.</td></tr>
                </tbody>
              </table>
              <div class="tip-box">
                <strong>Nuance of Possibility:</strong> <em>May</em> and <em>might</em> express roughly a 50% or lower probability. <em>Might</em> conveys slightly more hesitation or uncertainty than <em>may</em>.
              </div>
            `
          }
        ]
      },

      vocabulary: {
        topic: "Memory, The Human Mind & Cognitive Recall",
        words: [
          { word: "recall", phonetic: "/rɪˈkɔːl/", cat: "recordar / rememorar", example: "I can distinctly recall my first day entering secondary school." },
          { word: "short-term memory", phonetic: "/ˌʃɔːt.tɜːm ˈmem.ər.i/", cat: "memòria a curt termini", example: "Holding a phone number in mind tests short-term memory capacity." },
          { word: "cognitive", phonetic: "/ˈkɒɡ.nə.tɪv/", cat: "cognitiu / mental", example: "Aerobic physical exercise enhances cognitive reasoning skills." },
          { word: "forgetful", phonetic: "/fəˈɡet.fəl/", cat: "desmemoriat / despistat", example: "Severe sleep deprivation makes teenagers noticeably forgetful." },
          { word: "retain", phonetic: "/rɪˈteɪn/", cat: "retenir / recordar informació", example: "Spaced repetition flashcards help learners retain irregular verbs." }
        ],
        exercises: [
          {
            id: "m4b-vocab-ex1",
            title: "Vocabulary Exercise 1: Cognitive Terminology",
            instruction: "Select the correct psychological term for each definition.",
            questions: [
              {
                prompt: "To bring a fact, event, or situation back into one's mind; remember:",
                options: ["recall", "retain", "inherit", "master"],
                correct: 0,
                explanation: "To 'recall' is to remember from memory."
              },
              {
                prompt: "Tending to forget things easily:",
                options: ["gifted", "forgetful", "versatile", "sensory"],
                correct: 1,
                explanation: "'Forgetful' means having a poor or absent memory."
              }
            ]
          },
          {
            id: "m4b-vocab-ex2",
            title: "Vocabulary Exercise 2: Contextual Fill",
            instruction: "Fill in the blank with an appropriate mental vocabulary word.",
            questions: [
              {
                prompt: "Students who sleep eight hours find it much easier to _____ new vocabulary.",
                accepted: ["retain", "remember"],
                hint: "Verb meaning to keep or maintain in memory: retain."
              }
            ]
          }
        ]
      },

      exercises: [
        // Level 1: Foundation
        {
          id: "m4b-l1-1",
          level: 1,
          levelLabel: "Level 1 (Foundation)",
          type: "multiple_choice",
          title: "Exercise 1: Ability vs Possibility Selection",
          instruction: "Select the most suitable modal verb according to meaning.",
          questions: [
            {
              prompt: "Take an umbrella! The weather forecast says it _____ rain this afternoon.",
              options: ["might", "must to", "can't", "able to"],
              correct: 0,
              explanation: "'Might' expresses future possibility."
            },
            {
              prompt: "When Marc was ten years old, he _____ speak any English at all.",
              options: ["couldn't", "can't", "might not", "won't be able to"],
              correct: 0,
              explanation: "Past negative general ability -> 'couldn't'."
            },
            {
              prompt: "In a few years, medical science _____ to cure many cognitive diseases.",
              options: ["will be able", "can", "could", "might to"],
              correct: 0,
              explanation: "Future ability requires 'will be able (to)'."
            }
          ]
        },
        {
          id: "m4b-l1-2",
          level: 1,
          levelLabel: "Level 1 (Foundation)",
          type: "multiple_choice",
          title: "Exercise 2: Modal Ability Across Tenses",
          instruction: "Choose the correct ability form for the designated tense.",
          questions: [
            {
              prompt: "She has not _____ solve the riddle yet.",
              options: ["been able to", "could", "can", "was able to"],
              correct: 0,
              explanation: "Present perfect ability requires: have/has been able to."
            },
            {
              prompt: "Yesterday, despite the noise, I _____ finish my reading assignment.",
              options: ["was able to", "could to", "can", "might to"],
              correct: 0,
              explanation: "Specific past accomplishment -> was able to."
            },
            {
              prompt: "With enough dedicated practice, you _____ master speed reading.",
              options: ["will be able to", "could to", "can to", "are able"],
              correct: 0,
              explanation: "Future ability -> will be able to."
            }
          ]
        },
        {
          id: "m4b-l1-3",
          level: 1,
          levelLabel: "Level 1 (Foundation)",
          type: "multiple_choice",
          title: "Exercise 3: Expressing Possibility with May & Might",
          instruction: "Choose the option expressing possibility or permission.",
          questions: [
            {
              prompt: "_____ I borrow your dictionary for a moment, please?",
              options: ["May", "Must", "Should", "Need"],
              correct: 0,
              explanation: "Polite permission: May I borrow..."
            },
            {
              prompt: "Look at the dark clouds; it _____ rain before we reach home.",
              options: ["might", "can to", "must to", "able"],
              correct: 0,
              explanation: "Possibility: might rain."
            },
            {
              prompt: "Our teacher _____ postpone the exam until next Monday.",
              options: ["may", "is able", "could to", "shall to"],
              correct: 0,
              explanation: "Possibility: may postpone."
            }
          ]
        },

        // Level 2: Standard
        {
          id: "m4b-l2-1",
          level: 2,
          levelLabel: "Level 2 (Standard)",
          type: "fill_blank",
          title: "Exercise 1: Supplying Modals in Context",
          instruction: "Complete the sentence with could, might, can, or will be able to.",
          questions: [
            {
              prompt: "If you practice memory drills daily, you _____ (be able to) concentrate much better.",
              accepted: ["will be able to"],
              hint: "Future conditional ability: will be able to."
            },
            {
              prompt: "Don't discard those revision notes; you _____ need them for the final exam.",
              accepted: ["might", "may"],
              hint: "Possibility: might / may."
            },
            {
              prompt: "_____ you solve this complex logic riddle on your own?",
              accepted: ["Can", "Could"],
              hint: "Ability: Can / Could."
            }
          ]
        },
        {
          id: "m4b-l2-2",
          level: 2,
          levelLabel: "Level 2 (Standard)",
          type: "fill_blank",
          title: "Exercise 2: Speculation & Possibility in Scenarios",
          instruction: "Fill in the blank with may, might, or could.",
          questions: [
            {
              prompt: "His mobile phone is switched off; he _____ be taking an exam right now.",
              accepted: ["might", "may", "could"],
              hint: "might / may / could."
            },
            {
              prompt: "Scientists believe that in 20 years we _____ develop microchips to enhance memory.",
              accepted: ["might", "could", "may"],
              hint: "might / could / may."
            },
            {
              prompt: "Be careful on the icy pavement; you _____ slip and hurt your ankle.",
              accepted: ["could", "might", "may"],
              hint: "could / might / may."
            }
          ]
        },
        {
          id: "m4b-l2-3",
          level: 2,
          levelLabel: "Level 2 (Standard)",
          type: "fill_blank",
          title: "Exercise 3: Past and Future Ability Forms",
          instruction: "Fill in with was/were able to, couldn't, or will be able to.",
          questions: [
            {
              prompt: "Although the fire alarm rang, all the students _____ (manage to leave) the building safely.",
              accepted: ["were able to leave"],
              hint: "were able to leave (specific past success)."
            },
            {
              prompt: "I searched everywhere yesterday, but I _____ (not can) find my psychology textbook.",
              accepted: ["couldn't", "could not", "was not able to", "wasn't able to"],
              hint: "couldn't / could not."
            },
            {
              prompt: "After graduating from university, she _____ (be able to) practice as a cognitive therapist.",
              accepted: ["will be able to"],
              hint: "will be able to."
            }
          ]
        },

        // Level 3: Challenge
        {
          id: "m4b-l3-1",
          level: 3,
          levelLabel: "Level 3 (Challenge)",
          type: "transformation",
          title: "Exercise 1: Modal Transformations with Specific Synonyms",
          instruction: "Rewrite the sentence using the modal or prompt word provided.",
          questions: [
            {
              prompt: "Perhaps your brain is fatigued after solving math problems for four hours. (MIGHT)<br>Your brain ____________________ fatigued after solving math problems for four hours.",
              accepted: ["might be", "may be"],
              hint: "might be."
            },
            {
              prompt: "Did you succeed in memorizing all eighty irregular verbs for the quiz? (MANAGE)<br>Did you ____________________ all eighty irregular verbs for the quiz?",
              accepted: ["manage to memorize", "manage to memorise", "manage to learn"],
              hint: "manage to memorize / memorise."
            },
            {
              prompt: "It is possible that Laura knows the answer to this riddle. (COULD)<br>Laura ____________________ the answer to this riddle.",
              accepted: ["could know"],
              hint: "could know."
            }
          ]
        },
        {
          id: "m4b-l3-2",
          level: 3,
          levelLabel: "Level 3 (Challenge)",
          type: "transformation",
          title: "Exercise 2: Advanced Ability Rephrasing",
          instruction: "Rephrase using the word in brackets.",
          questions: [
            {
              prompt: "I am unable to recall where I left my student identity card. (CANNOT)<br>I ____________________ where I left my student identity card.",
              accepted: ["cannot remember", "can't remember", "cannot recall", "can't recall"],
              hint: "cannot remember / recall."
            },
            {
              prompt: "He didn't have the ability to swim when he was eight years old. (COULDN'T)<br>He ____________________ when he was eight years old.",
              accepted: ["couldn't swim", "could not swim"],
              hint: "couldn't swim."
            },
            {
              prompt: "We succeeded in completing the memory test before the timer ran out. (ABLE)<br>We ____________________ complete the memory test before the timer ran out.",
              accepted: ["were able to"],
              hint: "were able to."
            }
          ]
        },
        {
          id: "m4b-l3-3",
          level: 3,
          levelLabel: "Level 3 (Challenge)",
          type: "transformation",
          title: "Exercise 3: Speculation and Deduction Transformations",
          instruction: "Transform using the modal prompt in brackets.",
          questions: [
            {
              prompt: "It is impossible that this optical illusion is real. (CANNOT)<br>This optical illusion ____________________ real.",
              accepted: ["cannot be", "can't be"],
              hint: "cannot be / can't be."
            },
            {
              prompt: "Perhaps they are discussing the memory research findings right now. (MAY)<br>They ____________________ the memory research findings right now.",
              accepted: ["may be discussing"],
              hint: "may be discussing."
            },
            {
              prompt: "I'm sure that the sensory experiment is challenging. (MUST)<br>The sensory experiment ____________________ challenging.",
              accepted: ["must be"],
              hint: "must be."
            }
          ]
        }
      ]
    },

    {
      id: "m4-c",
      code: "4C",
      title: "Don't Panic!",
      subtitle: "Fears, Phobias & Modals: Must, Have to, Need to, Should",
      
      grammar: {
        title: "Modals of Obligation, Prohibition & Recommendation",
        sections: [
          {
            heading: "Obligation, Prohibition, Absence of Obligation & Advice",
            content: `
              <table class="styled-table">
                <thead>
                  <tr><th>Category</th><th>Modal Auxiliary</th><th>Clear Example</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>Strong Obligation / Law</strong></td><td><strong>must / have to</strong></td><td>All passengers <em>must / have to wear</em> seatbelts.</td></tr>
                  <tr><td><strong>Total Prohibition</strong></td><td><strong>mustn't (must not)</strong></td><td>You <em>mustn't panic</em> during an emergency fire drill.</td></tr>
                  <tr><td><strong>Lack of Obligation</strong> ("No cal")</td><td><strong>don't have to / don't need to</strong></td><td>You <em>don't have to print</em> the essay; submit it online.</td></tr>
                  <tr><td><strong>Advice / Recommendation</strong></td><td><strong>should / shouldn't</strong> (ought to)</td><td>You <em>should take</em> slow, deep breaths when stressed.</td></tr>
                </tbody>
              </table>
              <div class="tip-box">
                <strong>Crucial Difference:</strong><br>
                <em>Mustn't</em> = It is forbidden / illegal!<br>
                <em>Don't have to</em> = It is not necessary, but you are free to do it if you wish.
              </div>
            `
          }
        ]
      },

      vocabulary: {
        topic: "Fears, Phobias, Stress & Emotional Regulation",
        words: [
          { word: "claustrophobia", phonetic: "/ˌklɒs.trəˈfəʊ.bi.ə/", cat: "claustrofòbia", example: "Individuals suffering from claustrophobia avoid cramped elevators." },
          { word: "arachnophobia", phonetic: "/əˌræk.nəˈfəʊ.bi.ə/", cat: "aracnofòbia", example: "Arachnophobia—fear of spiders—is one of the most widespread phobias." },
          { word: "overcome", phonetic: "/ˌəʊ.vəˈkʌm/", cat: "superar / vèncer", example: "Cognitive behavioural therapy helps patients overcome irrational phobias." },
          { word: "anxiety", phonetic: "/æŋˈzaɪ.ə.ti/", cat: "ansietat", example: "Deep breathing exercises significantly alleviate acute exam anxiety." },
          { word: "breathe deeply", phonetic: "/briːð ˈdiːp.li/", cat: "respirar profundament", example: "When panic strikes, pause and breathe deeply for sixty seconds." }
        ],
        exercises: [
          {
            id: "m4c-vocab-ex1",
            title: "Vocabulary Exercise 1: Fears and Phobias",
            instruction: "Identify the psychological term from each clue.",
            questions: [
              {
                prompt: "An extreme, irrational fear of confined, small spaces:",
                options: ["claustrophobia", "arachnophobia", "anxiety", "stamina"],
                correct: 0,
                explanation: "'Claustrophobia' is the fear of enclosed spaces."
              },
              {
                prompt: "To successfully deal with and control a problem, feeling, or fear:",
                options: ["overcome", "inherit", "commute", "conserve"],
                correct: 0,
                explanation: "To 'overcome' means to conquer or surmount."
              }
            ]
          },
          {
            id: "m4c-vocab-ex2",
            title: "Vocabulary Exercise 2: Context Fill",
            instruction: "Fill in the blank with an appropriate emotional term.",
            questions: [
              {
                prompt: "Mindfulness meditation is an effective technique to soothe feelings of _____.",
                accepted: ["anxiety", "panic", "stress"],
                hint: "anxiety / stress."
              }
            ]
          }
        ]
      },

      exercises: [
        // Level 1: Foundation
        {
          id: "m4c-l1-1",
          level: 1,
          levelLabel: "Level 1 (Foundation)",
          type: "multiple_choice",
          title: "Exercise 1: Obligation vs Prohibition vs Advice Choice",
          instruction: "Select the most appropriate modal verb for each scenario.",
          questions: [
            {
              prompt: "You look completely exhausted. You _____ go to bed earlier tonight.",
              options: ["should", "mustn't", "don't have to", "can't"],
              correct: 0,
              explanation: "Offers friendly advice -> 'should'."
            },
            {
              prompt: "You _____ feed the zoo animals! It is strictly prohibited by park rules.",
              options: ["mustn't", "don't have to", "should", "needn't"],
              correct: 0,
              explanation: "Strict prohibition -> 'mustn't'."
            },
            {
              prompt: "Tomorrow is a national holiday, so we _____ wake up early for school.",
              options: ["don't have to", "mustn't", "shouldn't", "can't"],
              correct: 0,
              explanation: "Absence of necessity ('no cal') -> 'don't have to'."
            },
            {
              prompt: "Cyclists _____ wear helmets when riding on national motorways.",
              options: ["must", "can", "shouldn't", "don't have to"],
              correct: 0,
              explanation: "Legal obligation -> 'must'."
            }
          ]
        },
        {
          id: "m4c-l1-2",
          level: 1,
          levelLabel: "Level 1 (Foundation)",
          type: "multiple_choice",
          title: "Exercise 2: Rules and Instructions Identification",
          instruction: "Select the modal indicating obligation or lack of obligation.",
          questions: [
            {
              prompt: "Students _____ submit their independent projects before Friday at 5 pm.",
              options: ["have to", "don't have to", "couldn't", "might not"],
              correct: 0,
              explanation: "External rule -> have to."
            },
            {
              prompt: "You _____ bring a calculator to the exam; we provide digital tools on screen.",
              options: ["don't need to", "mustn't", "should to", "ought"],
              correct: 0,
              explanation: "Absence of necessity -> don't need to."
            },
            {
              prompt: "Drivers _____ stop completely when the traffic light turns red.",
              options: ["must", "should", "can", "might"],
              correct: 0,
              explanation: "Absolute legal requirement -> must."
            }
          ]
        },
        {
          id: "m4c-l1-3",
          level: 1,
          levelLabel: "Level 1 (Foundation)",
          type: "multiple_choice",
          title: "Exercise 3: Prohibition vs Advice Choice",
          instruction: "Differentiate between strong prohibition and gentle advice.",
          questions: [
            {
              prompt: "You _____ run near the swimming pool; you might slip and fall!",
              options: ["mustn't", "don't have to", "should", "might"],
              correct: 0,
              explanation: "Prohibition for safety -> mustn't."
            },
            {
              prompt: "If you feel anxious before speaking in public, you _____ take slow, deep breaths.",
              options: ["should", "mustn't", "don't have to", "can't"],
              correct: 0,
              explanation: "Constructive advice -> should."
            },
            {
              prompt: "Visitors _____ enter the private staff room without authorization.",
              options: ["must not", "need not to", "shouldn't to", "don't"],
              correct: 0,
              explanation: "Strict prohibition -> must not."
            }
          ]
        },

        // Level 2: Standard
        {
          id: "m4c-l2-1",
          level: 2,
          levelLabel: "Level 2 (Standard)",
          type: "fill_blank",
          title: "Exercise 1: Filling Must, Mustn't, or Don't Have To",
          instruction: "Complete each sentence with must, mustn't, or don't have to.",
          questions: [
            {
              prompt: "In the UK, motor vehicle drivers _____ drive on the left-hand side of the road.",
              accepted: ["must", "have to"],
              hint: "Legal mandate: must / have to."
            },
            {
              prompt: "You _____ touch live electrical wires; it is extremely dangerous!",
              accepted: ["mustn't", "must not"],
              hint: "Dangerous prohibition: mustn't."
            },
            {
              prompt: "Admission to the public art gallery is free, so you _____ purchase a ticket.",
              accepted: ["don't have to", "do not have to", "don't need to"],
              hint: "Lack of necessity: don't have to."
            }
          ]
        },
        {
          id: "m4c-l2-2",
          level: 2,
          levelLabel: "Level 2 (Standard)",
          type: "fill_blank",
          title: "Exercise 2: Health Recommendations with Should & Shouldn't",
          instruction: "Fill in the blank with should or shouldn't.",
          questions: [
            {
              prompt: "You _____ drink caffeinated energy drinks right before going to sleep.",
              accepted: ["shouldn't", "should not"],
              hint: "Advice against an action: shouldn't."
            },
            {
              prompt: "Students experiencing exam anxiety _____ talk to the school counselor.",
              accepted: ["should", "ought to"],
              hint: "Positive recommendation: should."
            },
            {
              prompt: "You _____ stare at digital screens for hours without resting your eyes.",
              accepted: ["shouldn't", "should not"],
              hint: "Advice against: shouldn't."
            }
          ]
        },
        {
          id: "m4c-l2-3",
          level: 2,
          levelLabel: "Level 2 (Standard)",
          type: "fill_blank",
          title: "Exercise 3: Must vs Have To vs Need To in Context",
          instruction: "Supply must, have to, has to, or need to.",
          questions: [
            {
              prompt: "My sister _____ (have to) wake up at 6 am every morning to catch the school bus.",
              accepted: ["has to"],
              hint: "3rd person singular present: has to."
            },
            {
              prompt: "You _____ (must / not) disclose your password to anyone under any circumstance.",
              accepted: ["must not", "mustn't"],
              hint: "must not / mustn't."
            },
            {
              prompt: "We _____ (need to) recharge our laptops before the three-hour cognitive science seminar.",
              accepted: ["need to"],
              hint: "need to."
            }
          ]
        },

        // Level 3: Challenge
        {
          id: "m4c-l3-1",
          level: 3,
          levelLabel: "Level 3 (Challenge)",
          type: "transformation",
          title: "Exercise 1: Rephrasing Necessity and Prohibition",
          instruction: "Rewrite the sentence using the prompt word in brackets.",
          questions: [
            {
              prompt: "It is unnecessary for you to bring your own laptop to the assessment. (NEED)<br>You ____________________ bring your own laptop to the assessment.",
              accepted: ["don't need to", "do not need to", "needn't"],
              hint: "don't need to / needn't."
            },
            {
              prompt: "It is advisable to consult a health specialist regarding your insomnia. (OUGHT)<br>You ____________________ consult a health specialist regarding your insomnia.",
              accepted: ["ought to"],
              hint: "ought to (= should)."
            },
            {
              prompt: "Taking photos inside the exhibition hall is completely forbidden. (ALLOWED)<br>You ____________________ take photos inside the exhibition hall.",
              accepted: ["are not allowed to", "aren't allowed to"],
              hint: "are not allowed to."
            }
          ]
        },
        {
          id: "m4c-l3-2",
          level: 3,
          levelLabel: "Level 3 (Challenge)",
          type: "transformation",
          title: "Exercise 2: Obligation Rephrasing",
          instruction: "Rewrite using the specified modal.",
          questions: [
            {
              prompt: "It is compulsory for all laboratory students to wear protective eyewear. (HAVE)<br>All laboratory students ____________________ protective eyewear.",
              accepted: ["have to wear"],
              hint: "have to wear."
            },
            {
              prompt: "It is against the law to exceed the highway speed limit. (MUSTN'T)<br>You ____________________ the highway speed limit.",
              accepted: ["mustn't exceed", "must not exceed"],
              hint: "mustn't exceed / must not exceed."
            },
            {
              prompt: "There is no obligation for you to finish this book today. (HAVE)<br>You ____________________ finish this book today.",
              accepted: ["don't have to", "do not have to"],
              hint: "don't have to."
            }
          ]
        },
        {
          id: "m4c-l3-3",
          level: 3,
          levelLabel: "Level 3 (Challenge)",
          type: "transformation",
          title: "Exercise 3: Comprehensive Modals Synthesis",
          instruction: "Transform each sentence preserving the original meaning.",
          questions: [
            {
              prompt: "I advise you to overcome your fear of spiders by learning more about them. (BETTER)<br>You ____________________ learn more about spiders to overcome your fear.",
              accepted: ["had better", "'d better"],
              hint: "had better + base verb: had better."
            },
            {
              prompt: "Wearing a uniform is optional at our secondary school. (DOESN'T)<br>Nobody ____________________ wear a uniform at our secondary school.",
              accepted: ["has to", "needs to"],
              hint: "has to / needs to."
            },
            {
              prompt: "It is strongly forbidden to smoke in any public park area. (PROHIBITED)<br>Smoking ____________________ in all public park areas.",
              accepted: ["is prohibited"],
              hint: "is prohibited."
            }
          ]
        }
      ]
    }
  ]
};
