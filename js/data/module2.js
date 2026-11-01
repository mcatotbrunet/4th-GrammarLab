// Module 2: The Unexpected (Page 27)
const module2Data = {
  id: "module-2",
  moduleId: 2,
  moduleTitle: "Module 2: The Unexpected",
  page: 27,
  themeColor: "#8b5cf6", // purple / violet
  sections: [
    {
      id: "m2-a",
      code: "2A",
      title: "Surprising Results",
      subtitle: "Inventions & Defining Relative Clauses",
      
      grammar: {
        title: "Defining Relative Clauses",
        sections: [
          {
            heading: "Essential Identifying Information",
            content: `
              <p>A <strong>defining relative clause</strong> provides essential information needed to identify exactly which person, thing, or place is being discussed. Without this clause, the sentence would be incomplete or vague. <strong>Never use commas in defining relative clauses!</strong></p>
              <table class="styled-table">
                <thead>
                  <tr><th>Pronoun</th><th>Refers to...</th><th>Clear Example</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>who / that</strong></td><td>People</td><td>The engineer <em>who invented</em> Wi-Fi was also a Hollywood actress (Hedy Lamarr).</td></tr>
                  <tr><td><strong>which / that</strong></td><td>Things or animals</td><td>A smartwatch is a device <em>which monitors</em> heart rates.</td></tr>
                  <tr><td><strong>where</strong></td><td>Places</td><td>Silicon Valley is the region <em>where</em> many tech startups originate.</td></tr>
                  <tr><td><strong>whose</strong></td><td>Possession ('de qui')</td><td>I know a student <em>whose</em> robotics project won an international prize.</td></tr>
                  <tr><td><strong>when</strong></td><td>Points in time</td><td>1969 was the historic year <em>when</em> astronauts first walked on the Moon.</td></tr>
                </tbody>
              </table>
              <div class="tip-box">
                <strong>Omitting the Relative Pronoun:</strong> When the relative pronoun is followed by a subject + verb (functioning as the grammatical object), you can omit it completely!<br>
                <em>Example:</em> "The smartphone app (which/that) I installed yesterday runs smoothly."
              </div>
            `
          }
        ]
      },

      vocabulary: {
        topic: "Inventions, Innovations & Verbs of Creation",
        words: [
          { word: "patent", phonetic: "/ˈpeɪ.tənt/", cat: "patent / patentar", example: "Thomas Edison filed over a thousand commercial patents." },
          { word: "breakthrough", phonetic: "/ˈbreɪk.θruː/", cat: "gran avenç / descobriment clau", example: "The discovery of penicillin was a major medical breakthrough." },
          { word: "flaw", phonetic: "/flɔː/", cat: "defecte / errada", example: "Engineers redesigned the wing after detecting a mechanical flaw." },
          { word: "regrettable", phonetic: "/rɪˈɡret.ə.bəl/", cat: "lamentable / desafortunat", example: "Electronic waste is a regrettable byproduct of rapid technological progress." },
          { word: "revolutionise", phonetic: "/ˌrev.əˈluː.ʃən.aɪz/", cat: "revolucionar", example: "Generative artificial intelligence will revolutionise workplace tasks." },
          { word: "gadget", phonetic: "/ˈɡædʒ.ɪt/", cat: "aparell / giny electrònic", example: "He loves collecting portable electronic gadgets." },
          { word: "prototype", phonetic: "/ˈprəʊ.tə.taɪp/", cat: "prototip", example: "The company tested a solar car prototype on the track." },
          { word: "trial and error", phonetic: "/ˌtraɪəl ənd ˈer.ər/", cat: "assaig i error", example: "Scientific discovery often demands years of patient trial and error." }
        ],
        exercises: [
          {
            id: "m2a-vocab-ex1",
            title: "Vocabulary Exercise 1: Innovation Vocabulary",
            instruction: "Select the correct word for each invention context.",
            questions: [
              {
                prompt: "A sudden, dramatic, and important discovery or development:",
                options: ["flaw", "breakthrough", "patent", "gadget"],
                correct: 1,
                explanation: "A 'breakthrough' is a major step forward or breakthrough discovery."
              },
              {
                prompt: "An early sample or model built to test a concept before mass production:",
                options: ["prototype", "regrettable", "flaw", "breakthrough"],
                correct: 0,
                explanation: "A 'prototype' is a preliminary model."
              },
              {
                prompt: "A minor fault or weakness in a design or material:",
                options: ["patent", "gadget", "flaw", "revolutionise"],
                correct: 2,
                explanation: "A 'flaw' is a defect or imperfection."
              }
            ]
          },
          {
            id: "m2a-vocab-ex2",
            title: "Vocabulary Exercise 2: Sentence Practice",
            instruction: "Fill in the blank with the appropriate innovation term.",
            questions: [
              {
                prompt: "Inventors apply for a legal _____ to protect their ideas from unauthorized copying.",
                accepted: ["patent"],
                hint: "Legal registration of an invention: patent."
              },
              {
                prompt: "Rechargeable batteries have helped _____ personal mobility like e-scooters.",
                accepted: ["revolutionise", "revolutionize"],
                hint: "Verb meaning to transform completely: revolutionise."
              }
            ]
          }
        ]
      },

      exercises: [
        // Level 1: Foundation
        {
          id: "m2a-l1-1",
          level: 1,
          levelLabel: "Level 1 (Foundation)",
          type: "multiple_choice",
          title: "Exercise 1: Selecting Defining Relative Pronouns",
          instruction: "Select the relative pronoun that best completes each sentence.",
          questions: [
            {
              prompt: "A microscope is an optical instrument _____ magnifies microscopic cells.",
              options: ["who", "which", "where", "whose"],
              correct: 1,
              explanation: "Refers to a device/thing -> 'which' (or 'that')."
            },
            {
              prompt: "The astrophysicist _____ discovered the new exoplanet gave an inspiring lecture.",
              options: ["which", "who", "where", "whose"],
              correct: 1,
              explanation: "Refers to a person -> 'who'."
            },
            {
              prompt: "This is the research facility _____ the experimental drone was assembled.",
              options: ["who", "which", "where", "whose"],
              correct: 2,
              explanation: "Refers to a physical location -> 'where'."
            },
            {
              prompt: "I met a young coder _____ mobile game has been downloaded a million times.",
              options: ["who", "which", "where", "whose"],
              correct: 3,
              explanation: "Indicates possession ('the coder's game') -> 'whose'."
            }
          ]
        },
        {
          id: "m2a-l1-2",
          level: 1,
          levelLabel: "Level 1 (Foundation)",
          type: "multiple_choice",
          title: "Exercise 2: Can the Relative Pronoun Be Omitted?",
          instruction: "Choose whether the pronoun in brackets can be left out (omitted).",
          questions: [
            {
              prompt: "The video game (which) I played yesterday had hyper-realistic graphics. Can 'which' be omitted?",
              options: ["Yes, it can be omitted", "No, it is required as the subject"],
              correct: 0,
              explanation: "'Which' is followed by subject + verb ('I played'), so it is the object and can be omitted."
            },
            {
              prompt: "The scientist who developed the solar cell received a prestigious medal. Can 'who' be omitted?",
              options: ["No, it is the subject of 'developed'", "Yes, it can be omitted anytime"],
              correct: 0,
              explanation: "'Who' functions as the subject of 'developed', so it CANNOT be omitted."
            }
          ]
        },
        {
          id: "m2a-l1-3",
          level: 1,
          levelLabel: "Level 1 (Foundation)",
          type: "multiple_choice",
          title: "Exercise 3: Whose vs Who's Distinction",
          instruction: "Choose between 'whose' (possessive) and 'who's' (who is / who has).",
          questions: [
            {
              prompt: "Do you know the boy _____ bicycle was stolen outside the science lab?",
              options: ["whose", "who's", "which", "who"],
              correct: 0,
              explanation: "'Whose' indicates possession."
            },
            {
              prompt: "There is an inventor _____ giving a workshop on 3D printing this afternoon.",
              options: ["who's", "whose", "which", "where"],
              correct: 0,
              explanation: "'Who's' = who is."
            }
          ]
        },

        // Level 2: Standard
        {
          id: "m2a-l2-1",
          level: 2,
          levelLabel: "Level 2 (Standard)",
          type: "fill_blank",
          title: "Exercise 1: Complete with Who, Which, Where or Whose",
          instruction: "Fill in the blank with the correct defining relative pronoun.",
          questions: [
            {
              prompt: "Do you recognize the student _____ robot won the regional robotics tournament?",
              accepted: ["whose"],
              hint: "Indicates possession -> whose."
            },
            {
              prompt: "The new biodegradable materials _____ chemists are developing will replace single-use plastics.",
              accepted: ["which", "that"],
              hint: "Refers to materials (things) -> which / that."
            },
            {
              prompt: "That is the university laboratory _____ scientists first synthesised graphene.",
              accepted: ["where"],
              hint: "Refers to a place -> where."
            },
            {
              prompt: "A programmer is a person _____ writes instructions for computers to execute.",
              accepted: ["who", "that"],
              hint: "Refers to a person -> who / that."
            }
          ]
        },
        {
          id: "m2a-l2-2",
          level: 2,
          levelLabel: "Level 2 (Standard)",
          type: "fill_blank",
          title: "Exercise 2: Defining Pronoun Integration",
          instruction: "Complete each sentence with who, which, where, or whose.",
          questions: [
            {
              prompt: "The smart watch _____ tracks my heart rate needs to be recharged.",
              accepted: ["which", "that"],
              hint: "which / that."
            },
            {
              prompt: "Is that the engineer _____ designed the eco-friendly turbine?",
              accepted: ["who", "that"],
              hint: "who / that."
            }
          ]
        },
        {
          id: "m2a-l2-3",
          level: 2,
          levelLabel: "Level 2 (Standard)",
          type: "fill_blank",
          title: "Exercise 3: Temporal and Spatial Relative Clauses (When & Where)",
          instruction: "Fill in 'when' or 'where'.",
          questions: [
            {
              prompt: "I will never forget the day _____ our team presented the solar car.",
              accepted: ["when"],
              hint: "Refers to time: when."
            },
            {
              prompt: "Is this the workshop _____ you assemble the circuits?",
              accepted: ["where"],
              hint: "Refers to a place: where."
            }
          ]
        },

        // Level 3: Challenge
        {
          id: "m2a-l3-1",
          level: 3,
          levelLabel: "Level 3 (Challenge)",
          type: "transformation",
          title: "Exercise 1: Sentence Synthesis with Relative Pronouns",
          instruction: "Join the two sentences into one using a defining relative clause. State whether the pronoun can be omitted.",
          questions: [
            {
              prompt: "I bought a digital drawing tablet yesterday. It has enhanced my graphic artwork.<br>The digital drawing tablet ____________________ has enhanced my graphic artwork.",
              accepted: ["which I bought yesterday", "that I bought yesterday", "I bought yesterday"],
              hint: "(which / that) I bought yesterday."
            },
            {
              prompt: "We interviewed an engineer. Her green designs conserve 50% more electricity.<br>We interviewed an engineer ____________________ conserve 50% more electricity.",
              accepted: ["whose green designs"],
              hint: "whose green designs."
            },
            {
              prompt: "That is the maker space. Many teenagers learn 3D printing there.<br>That is the maker space ____________________ 3D printing.",
              accepted: ["where many teenagers learn"],
              hint: "where many teenagers learn."
            }
          ]
        },
        {
          id: "m2a-l3-2",
          level: 3,
          levelLabel: "Level 3 (Challenge)",
          type: "transformation",
          title: "Exercise 2: Advanced Omission and Synthesis",
          instruction: "Combine the sentences into one defining clause without using any relative pronoun where possible.",
          questions: [
            {
              prompt: "You recommended a podcast. I listened to it on the train.<br>The podcast ____________________ was very informative.",
              accepted: ["you recommended", "which you recommended", "that you recommended"],
              hint: "you recommended."
            }
          ]
        },
        {
          id: "m2a-l3-3",
          level: 3,
          levelLabel: "Level 3 (Challenge)",
          type: "transformation",
          title: "Exercise 3: Complex Defining Sentence Restructuring",
          instruction: "Complete the sentence using whose or where.",
          questions: [
            {
              prompt: "A woman founded the company. Her vision transformed renewable battery storage. (WHOSE)<br>The woman ____________________ transformed renewable battery storage founded the company.",
              accepted: ["whose vision"],
              hint: "whose vision."
            }
          ]
        }
      ]
    },

    {
      id: "m2-b",
      code: "2B",
      title: "Unusual Talents",
      subtitle: "Talents, Abilities & Non-defining Relative Clauses",
      
      grammar: {
        title: "Non-defining Relative Clauses",
        sections: [
          {
            heading: "Extra, Non-Essential Information",
            content: `
              <p>A <strong>non-defining relative clause</strong> provides additional, interesting information about a person, place, or thing that is already clearly identified. If you remove the clause, the main sentence remains completely clear and grammatically whole.</p>
              <div class="tip-box">
                <strong>Three Inflexible Golden Rules:</strong>
                <ol>
                  <li><strong>Always enclosed within commas!</strong> (or between a comma and the final period).</li>
                  <li><strong>NEVER use 'THAT'!</strong> You must use <em>who</em> for people and <em>which</em> for things.</li>
                  <li><strong>NEVER omit the relative pronoun!</strong></li>
                </ol>
              </div>
              <div class="code-box">
                <em>Example 1:</em> Leo Messi, <strong>who was born in Rosario</strong>, has won eight Ballon d'Or trophies.
                <br><em>Example 2:</em> Barcelona, <strong>which is famous for Modernist architecture</strong>, welcomes millions of tourists annually.
              </div>
            `
          }
        ]
      },

      vocabulary: {
        topic: "Talents, Abilities, Dexterity & Stamina",
        words: [
          { word: "gifted", phonetic: "/ˈɡɪf.tɪd/", cat: "superdotat/da / amb un do", example: "Wolfgang Amadeus Mozart was an exceptionally gifted child composer." },
          { word: "dexterity", phonetic: "/dekˈster.ə.ti/", cat: "destresa manual", example: "Surgeons and illusionists require remarkable manual dexterity." },
          { word: "stamina", phonetic: "/ˈstæm.ɪ.nə/", cat: "resistència física/mental", example: "Triathlon athletes undergo rigorous training to build extraordinary stamina." },
          { word: "versatile", phonetic: "/ˈvɜː.sə.taɪl/", cat: "polivalent / versàtil", example: "She is a versatile musician capable of playing jazz, classical and pop." },
          { word: "master", phonetic: "/ˈmɑː.stər/", cat: "dominar a la perfecció", example: "Dedicated practice is indispensable to master concert piano." },
          { word: "circus performer", phonetic: "/ˈsɜː.kəs pəˌfɔː.mər/", cat: "artista de circ", example: "The acrobats and trapeze artists are daring circus performers." },
          { word: "extraordinary", phonetic: "/ɪkˈstrɔː.dɪn.ər.i/", cat: "extraordinari", example: "The memory champion displayed extraordinary recall abilities." }
        ],
        exercises: [
          {
            id: "m2b-vocab-ex1",
            title: "Vocabulary Exercise 1: Skills and Abilities",
            instruction: "Match the description to the correct psychological or physical skill.",
            questions: [
              {
                prompt: "Skill and ease in using the hands or body gracefully:",
                options: ["stamina", "dexterity", "patent", "flaw"],
                correct: 1,
                explanation: "'Dexterity' refers to coordination and skill in performing tasks, especially with the hands."
              },
              {
                prompt: "The ability to sustain prolonged physical or mental effort:",
                options: ["stamina", "dexterity", "versatile", "gifted"],
                correct: 0,
                explanation: "'Stamina' is endurance and lasting energy."
              },
              {
                prompt: "Able to adapt or be adapted to many different functions or activities:",
                options: ["versatile", "gifted", "regrettable", "flawed"],
                correct: 0,
                explanation: "'Versatile' means multifaceted and adaptable."
              }
            ]
          },
          {
            id: "m2b-vocab-ex2",
            title: "Vocabulary Exercise 2: Words in Context",
            instruction: "Fill in the blank with the appropriate talent term.",
            questions: [
              {
                prompt: "From a very young age, Maria demonstrated that she was a _____ mathematician.",
                accepted: ["gifted", "talented"],
                hint: "Naturally talented: gifted."
              },
              {
                prompt: "It requires decades of disciplined daily practice to _____ a martial art.",
                accepted: ["master"],
                hint: "Verb meaning to learn thoroughly: master."
              }
            ]
          }
        ]
      },

      exercises: [
        // Level 1: Foundation
        {
          id: "m2b-l1-1",
          level: 1,
          levelLabel: "Level 1 (Foundation)",
          type: "multiple_choice",
          title: "Exercise 1: Non-defining Pronoun Rules",
          instruction: "Select the grammatically correct relative pronoun for each non-defining clause.",
          questions: [
            {
              prompt: "Rafael Nadal, _____ has won 22 Grand Slam titles, is an exceptional tennis legend.",
              options: ["that", "who", "which", "whose"],
              correct: 1,
              explanation: "In non-defining clauses (between commas) referring to a person, you must use 'who'—never 'that'."
            },
            {
              prompt: "My elder sister, _____ plays the cello beautifully, is applying to the music academy.",
              options: ["that", "who", "which", "where"],
              correct: 1,
              explanation: "Refers to a person enclosed in commas -> 'who'."
            },
            {
              prompt: "London, _____ hosted the Olympic Games in 2012, is a vibrant metropolis.",
              options: ["which", "that", "where", "who"],
              correct: 0,
              explanation: "Non-defining relative clause referring to a city as an entity -> 'which' (never 'that')."
            }
          ]
        },
        {
          id: "m2b-l1-2",
          level: 1,
          levelLabel: "Level 1 (Foundation)",
          type: "multiple_choice",
          title: "Exercise 2: Comma Punctuation Identification",
          instruction: "Choose which sentence is punctuated correctly according to non-defining clause rules.",
          questions: [
            {
              prompt: "Which sentence is correctly punctuated?",
              options: [
                "My brother, who studies robotics in Toulouse, built an AI drone.",
                "My brother that studies robotics in Toulouse, built an AI drone.",
                "My brother who studies robotics in Toulouse built, an AI drone."
              ],
              correct: 0,
              explanation: "Enclosed between commas with 'who'."
            }
          ]
        },
        {
          id: "m2b-l1-3",
          level: 1,
          levelLabel: "Level 1 (Foundation)",
          type: "multiple_choice",
          title: "Exercise 3: Defining vs Non-defining Clause Type",
          instruction: "Identify whether the sentence contains defining or non-defining information.",
          questions: [
            {
              prompt: "'Antoni Gaudí, whose architectural works are UNESCO landmarks, lived in Barcelona.' What type of clause is in commas?",
              options: ["Non-defining relative clause", "Defining relative clause"],
              correct: 0,
              explanation: "It adds extra, non-essential information enclosed in commas -> Non-defining."
            }
          ]
        },

        // Level 2: Standard
        {
          id: "m2b-l2-1",
          level: 2,
          levelLabel: "Level 2 (Standard)",
          type: "fill_blank",
          title: "Exercise 1: Inserting Who, Which, Where or Whose in Clauses",
          instruction: "Complete the sentences with the appropriate non-defining pronoun.",
          questions: [
            {
              prompt: "Picasso's Guernica, _____ portrays the tragedies of war, hangs in the Reina Sofía Museum.",
              accepted: ["which"],
              hint: "Refers to a painting (thing) in commas -> which."
            },
            {
              prompt: "Sarah, _____ mother is an acrobatic gymnastics trainer, practices four hours daily.",
              accepted: ["whose"],
              hint: "Indicates family possession/relation -> whose."
            },
            {
              prompt: "Girona, _____ parts of Game of Thrones were filmed, has magnificent medieval walls.",
              accepted: ["where"],
              hint: "Indicates place -> where."
            }
          ]
        },
        {
          id: "m2b-l2-2",
          level: 2,
          levelLabel: "Level 2 (Standard)",
          type: "fill_blank",
          title: "Exercise 2: Supplying Relative Pronouns in Famous Profiles",
          instruction: "Write the correct non-defining relative pronoun.",
          questions: [
            {
              prompt: "Marie Curie, _____ won two Nobel Prizes in Physics and Chemistry, was a pioneering scientist.",
              accepted: ["who"],
              hint: "who."
            },
            {
              prompt: "The violin, _____ belongs to the orchestral string family, produces high-pitched melodies.",
              accepted: ["which"],
              hint: "which."
            }
          ]
        },
        {
          id: "m2b-l2-3",
          level: 2,
          levelLabel: "Level 2 (Standard)",
          type: "fill_blank",
          title: "Exercise 3: Non-defining Pronoun Consistency",
          instruction: "Complete with who, which, or whose.",
          questions: [
            {
              prompt: "Beethoven, _____ symphonies are played all over the world, lost his hearing as an adult.",
              accepted: ["whose"],
              hint: "whose symphonies (possession)."
            }
          ]
        },

        // Level 3: Challenge
        {
          id: "m2b-l3-1",
          level: 3,
          levelLabel: "Level 3 (Challenge)",
          type: "transformation",
          title: "Exercise 1: Constructing Non-defining Clauses with Punctuation",
          instruction: "Combine the two sentences using a non-defining relative clause with proper commas.",
          questions: [
            {
              prompt: "The Sagrada Família was designed by Antoni Gaudí. It attracts millions of international visitors every year.<br>The Sagrada Família, ____________________, attracts millions of international visitors every year.",
              accepted: ["which was designed by Antoni Gaudí", "which was designed by Antoni Gaudi"],
              hint: "which was designed by Antoni Gaudí."
            },
            {
              prompt: "My grandfather turned 80 yesterday. He still hikes up Montserrat every month.<br>My grandfather, ____________________, still hikes up Montserrat every month.",
              accepted: ["who turned 80 yesterday"],
              hint: "who turned 80 yesterday."
            }
          ]
        },
        {
          id: "m2b-l3-2",
          level: 3,
          levelLabel: "Level 3 (Challenge)",
          type: "transformation",
          title: "Exercise 2: Correcting Non-defining Clause Errors",
          instruction: "Correct the grammar mistakes (such as the illegal use of 'that' in non-defining clauses).",
          questions: [
            {
              prompt: "William Shakespeare, that was born in Stratford, wrote dozens of plays. [Rewrite the clause using the correct pronoun]<br>William Shakespeare, ____________________, wrote dozens of plays.",
              accepted: ["who was born in Stratford"],
              hint: "who was born in Stratford."
            }
          ]
        },
        {
          id: "m2b-l3-3",
          level: 3,
          levelLabel: "Level 3 (Challenge)",
          type: "transformation",
          title: "Exercise 3: Non-defining Clause with 'Whose'",
          instruction: "Combine into a non-defining clause using 'whose'.",
          questions: [
            {
              prompt: "Albert Einstein won the Nobel Prize. His theories reshaped physics.<br>Albert Einstein, ____________________, won the Nobel Prize.",
              accepted: ["whose theories reshaped physics"],
              hint: "whose theories reshaped physics."
            }
          ]
        }
      ]
    },

    {
      id: "m2-c",
      code: "2C",
      title: "Not What It Seems",
      subtitle: "Urban Landscapes & Indefinite Compounds (Some / Any / No / Every)",
      
      grammar: {
        title: "Indefinite Pronouns & Adverbs",
        sections: [
          {
            heading: "Compound Forms Matrix",
            content: `
              <table class="styled-table">
                <thead>
                  <tr><th>Root</th><th>People (-one / -body)</th><th>Things (-thing)</th><th>Places (-where)</th><th>Typical Context</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>Some-</strong></td><td>someone / somebody</td><td>something</td><td>somewhere</td><td>Affirmative sentences; polite offers and requests.</td></tr>
                  <tr><td><strong>Any-</strong></td><td>anyone / anybody</td><td>anything</td><td>anywhere</td><td>Negative sentences (with <em>not</em>) and general questions.</td></tr>
                  <tr><td><strong>No-</strong></td><td>no one / nobody</td><td>nothing</td><td>nowhere</td><td>Negative meaning with an AFFIRMATIVE verb (never double negatives!).</td></tr>
                  <tr><td><strong>Every-</strong></td><td>everyone / everybody</td><td>everything</td><td>everywhere</td><td>All members; treated as <strong>singular</strong> grammatically.</td></tr>
                </tbody>
              </table>
              <div class="tip-box">
                <strong>Crucial Double Negative Prohibition:</strong> In English, you cannot use two negatives in the same clause!<br>
                ✓ <em>"I didn't hear <strong>anything</strong>."</em> (negative verb + any-)<br>
                ✓ <em>"I heard <strong>nothing</strong>."</em> (affirmative verb + no-)<br>
                ✗ <em>"I didn't hear nothing."</em> (Incorrect!)
              </div>
            `
          }
        ]
      },

      vocabulary: {
        topic: "Urban Landscapes & City Life",
        words: [
          { word: "skyscraper", phonetic: "/ˈskaɪˌskreɪ.pər/", cat: "gratacel", example: "The Shard in London is an iconic glass skyscraper." },
          { word: "pedestrian", phonetic: "/pəˈdes.tri.ən/", cat: "vianant", example: "Urban planners widened the pavements for pedestrian safety." },
          { word: "bustling", phonetic: "/ˈbʌs.lɪŋ/", cat: "animat / bulliciós", example: "The central market is bustling with shoppers on Saturday mornings." },
          { word: "overcrowded", phonetic: "/ˌəʊ.vəˈkraʊ.dɪd/", cat: "massificat", example: "Metro trains can become severely overcrowded during peak rush hour." },
          { word: "suburb", phonetic: "/ˈsʌb.ɜːb/", cat: "barri residencial dels afores", example: "Many families move to a peaceful green suburb outside the city." },
          { word: "pavement", phonetic: "/ˈpeɪv.mənt/", cat: "vorera (UK) / sidewalk (US)", example: "Bicycles and e-scooters should not be ridden on the pedestrian pavement." }
        ],
        exercises: [
          {
            id: "m2c-vocab-ex1",
            title: "Vocabulary Exercise 1: City Environments",
            instruction: "Identify the urban concept matching each clue.",
            questions: [
              {
                prompt: "A person walking along a street rather than travelling in a vehicle:",
                options: ["pedestrian", "commuter", "passenger", "suburb"],
                correct: 0,
                explanation: "A 'pedestrian' is a person traveling on foot."
              },
              {
                prompt: "Full of busy, lively, and energetic activity:",
                options: ["overcrowded", "bustling", "exhausted", "regrettable"],
                correct: 1,
                explanation: "'Bustling' describes a lively, energetic atmosphere."
              }
            ]
          },
          {
            id: "m2c-vocab-ex2",
            title: "Vocabulary Exercise 2: Urban Collocations",
            instruction: "Fill in the blank with an appropriate urban vocabulary word.",
            questions: [
              {
                prompt: "The Empire State Building is one of the world's most famous _____.",
                accepted: ["skyscrapers"],
                hint: "Very tall multi-storey building: skyscraper."
              },
              {
                prompt: "Commuters complained that the morning commuter train was dangerously _____.",
                accepted: ["overcrowded"],
                hint: "Containing too many people: overcrowded."
              }
            ]
          }
        ]
      },

      exercises: [
        // Level 1: Foundation
        {
          id: "m2c-l1-1",
          level: 1,
          levelLabel: "Level 1 (Foundation)",
          type: "multiple_choice",
          title: "Exercise 1: Compound Pronoun Selection",
          instruction: "Select the correct compound pronoun for each sentence.",
          questions: [
            {
              prompt: "There is _____ strange outside the abandoned warehouse. I heard footsteps.",
              options: ["anything", "something", "nothing", "nowhere"],
              correct: 1,
              explanation: "Affirmative sentence stating an unspecified thing -> 'something'."
            },
            {
              prompt: "Did you meet _____ famous while you were visiting London?",
              options: ["anyone", "no one", "someone", "nothing"],
              correct: 0,
              explanation: "General interrogative sentence -> 'anyone' (or anybody)."
            },
            {
              prompt: "I searched all around the house, but my keys were _____ to be found.",
              options: ["everywhere", "anywhere", "nowhere", "somewhere"],
              correct: 2,
              explanation: "Affirmative verb 'were' + negative meaning ('not anywhere') -> 'nowhere'."
            },
            {
              prompt: "Would you like _____ hot to drink after being in the cold?",
              options: ["something", "anything", "nothing", "nowhere"],
              correct: 0,
              explanation: "Polite offer expecting an affirmative response -> 'something'."
            }
          ]
        },
        {
          id: "m2c-l1-2",
          level: 1,
          levelLabel: "Level 1 (Foundation)",
          type: "multiple_choice",
          title: "Exercise 2: Every- and No- Compounds",
          instruction: "Select the compound that best fits each situation.",
          questions: [
            {
              prompt: "The lecture theatre was empty; there was _____ inside.",
              options: ["nobody", "everybody", "anybody", "somebody"],
              correct: 0,
              explanation: "Nobody."
            },
            {
              prompt: "_____ in the city centre was decorated with festive holiday lights.",
              options: ["Everywhere", "Somewhere", "Anywhere", "Nothing"],
              correct: 0,
              explanation: "Everywhere."
            }
          ]
        },
        {
          id: "m2c-l1-3",
          level: 1,
          levelLabel: "Level 1 (Foundation)",
          type: "multiple_choice",
          title: "Exercise 3: Subject-Verb Agreement with Compounds",
          instruction: "Choose the correct singular verb form that agrees with everyone/everybody.",
          questions: [
            {
              prompt: "Everyone in my secondary school class _____ excited about the science excursion.",
              options: ["is", "are", "were", "be"],
              correct: 0,
              explanation: "'Everyone' is grammatically singular and takes 'is' or 'was'."
            }
          ]
        },

        // Level 2: Standard
        {
          id: "m2c-l2-1",
          level: 2,
          levelLabel: "Level 2 (Standard)",
          type: "fill_blank",
          title: "Exercise 1: Inserting Indefinite Compounds",
          instruction: "Complete each sentence with a compound word (someone, anything, nowhere, everybody, etc.).",
          questions: [
            {
              prompt: "I am starving, but there is _____ left in the refrigerator; it is empty.",
              accepted: ["nothing"],
              hint: "Affirmative verb with negative meaning: nothing."
            },
            {
              prompt: "Could _____ please volunteer to shut the classroom windows?",
              accepted: ["someone", "somebody"],
              hint: "Polite request for assistance: someone / somebody."
            },
            {
              prompt: "_____ in my secondary school class understands how to use relative clauses.",
              accepted: ["Everyone", "Everybody"],
              hint: "All students (takes a singular verb 'understands'): Everyone."
            },
            {
              prompt: "I haven't told _____ about our surprise celebration.",
              accepted: ["anyone", "anybody"],
              hint: "Negative sentence with haven't -> anyone / anybody."
            }
          ]
        },
        {
          id: "m2c-l2-2",
          level: 2,
          levelLabel: "Level 2 (Standard)",
          type: "fill_blank",
          title: "Exercise 2: Mixed Compounds in Daily Scenarios",
          instruction: "Fill in the blank with an appropriate compound pronoun or adverb.",
          questions: [
            {
              prompt: "Let's find _____ quiet to study for tomorrow's biology assessment.",
              accepted: ["somewhere"],
              hint: "somewhere."
            },
            {
              prompt: "Did you buy _____ interesting at the flea market this morning?",
              accepted: ["anything"],
              hint: "anything."
            }
          ]
        },
        {
          id: "m2c-l2-3",
          level: 2,
          levelLabel: "Level 2 (Standard)",
          type: "fill_blank",
          title: "Exercise 3: Compounds with Negative Verbs",
          instruction: "Fill in the blank with any- or no- compound.",
          questions: [
            {
              prompt: "The library is closed; we cannot find _____ to borrow books today.",
              accepted: ["anywhere"],
              hint: "cannot find + anywhere."
            }
          ]
        },

        // Level 3: Challenge
        {
          id: "m2c-l3-1",
          level: 3,
          levelLabel: "Level 3 (Challenge)",
          type: "transformation",
          title: "Exercise 1: Eliminating Double Negatives",
          instruction: "Rewrite the sentence without altering the meaning, using the specified word.",
          questions: [
            {
              prompt: "There wasn't anyone in the old library when we arrived. (NOBODY)<br>There was ____________________ in the old library when we arrived.",
              accepted: ["nobody", "no one"],
              hint: "wasn't anyone = was nobody / no one."
            },
            {
              prompt: "He said nothing about the unexpected exam schedule. (ANYTHING)<br>He didn't ____________________ about the unexpected exam schedule.",
              accepted: ["say anything"],
              hint: "didn't say anything."
            },
            {
              prompt: "We searched in all possible locations for the lost wallet. (EVERYWHERE)<br>We looked ____________________ for the lost wallet.",
              accepted: ["everywhere"],
              hint: "everywhere."
            }
          ]
        },
        {
          id: "m2c-l3-2",
          level: 3,
          levelLabel: "Level 3 (Challenge)",
          type: "transformation",
          title: "Exercise 2: Compound Transformation Precision",
          instruction: "Complete the sentence using the prompt word.",
          questions: [
            {
              prompt: "I have nowhere to store these heavy winter clothes. (ANYWHERE)<br>I don't have ____________________ to store these heavy winter clothes.",
              accepted: ["anywhere"],
              hint: "anywhere."
            }
          ]
        },
        {
          id: "m2c-l3-3",
          level: 3,
          levelLabel: "Level 3 (Challenge)",
          type: "transformation",
          title: "Exercise 3: Complete Negation Rephrasing",
          instruction: "Rewrite using affirmative verb + nothing.",
          questions: [
            {
              prompt: "I didn't understand anything from the complicated speech. (NOTHING)<br>I ____________________ from the complicated speech.",
              accepted: ["understood nothing"],
              hint: "understood nothing."
            }
          ]
        }
      ]
    }
  ]
};
