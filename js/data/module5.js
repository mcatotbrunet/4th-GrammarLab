// Module 5: Mother Nature (Page 83)
const module5Data = {
  id: "module-5",
  moduleId: 5,
  moduleTitle: "Module 5: Mother Nature",
  page: 83,
  themeColor: "#10b981", // emerald green
  sections: [
    {
      id: "m5-a",
      code: "5A",
      title: "Plant Power",
      subtitle: "Flora, Ecosystems, Zero & First Conditional, Time Clauses",
      
      grammar: {
        title: "Zero & First Conditional + Time Clauses",
        sections: [
          {
            heading: "Universal Truths vs Real Future Possibilities",
            content: `
              <div class="comparison-grid">
                <div class="grammar-card">
                  <h4>Zero Conditional (Scientific Facts & Universal Truths)</h4>
                  <p><strong>Structure:</strong> If / When + Present Simple, Present Simple</p>
                  <p><em>Example:</em> If plants <strong>do not receive</strong> sunlight, they <strong>cannot produce</strong> chlorophyll.</p>
                </div>
                <div class="grammar-card">
                  <h4>First Conditional (Real, Probable Future Events)</h4>
                  <p><strong>Structure:</strong> If + Present Simple, will / won't + infinitive</p>
                  <p><em>Example:</em> If we <strong>preserve</strong> this wetland, migratory birds <strong>will return</strong> next spring.</p>
                </div>
              </div>
              <div class="tip-box">
                <strong>Time Clauses Rule:</strong><br>
                After temporal connectors such as <strong>as soon as, when, until, before, after, unless</strong> (= if not), use the <strong>Present Simple</strong> to express future actions! (Never use <em>will</em> inside the time clause itself).<br>
                <em>Example:</em> "I will notify the ranger <strong>as soon as we reach</strong> the summit." (NEVER <em>"as soon as we will reach"</em>).
              </div>
            `
          }
        ]
      },

      vocabulary: {
        topic: "Flora, Fungi, Photosynthesis & Forest Ecosystems",
        words: [
          { word: "photosynthesis", phonetic: "/ˌfəʊ.təʊˈsɪn.θə.sɪs/", cat: "fotosíntesi", example: "Green leaves absorb solar radiation and carbon dioxide during photosynthesis." },
          { word: "vegetation", phonetic: "/ˌvedʒ.ɪˈteɪ.ʃən/", cat: "vegetació", example: "Lush tropical vegetation thrives along the riverbanks." },
          { word: "fungi", phonetic: "/ˈfʌŋ.ɡaɪ/", cat: "fongs / bolets", example: "Mushrooms and yeasts belong scientifically to the kingdom of fungi." },
          { word: "thrive", phonetic: "/θraɪv/", cat: "prosperar / créixer amb força", example: "Cacti thrive in arid desert soil where few other plants can survive." },
          { word: "absorb", phonetic: "/əbˈzɔːb/", cat: "absorbir", example: "Deep tree root networks absorb moisture and vital minerals." }
        ],
        exercises: [
          {
            id: "m5a-vocab-ex1",
            title: "Vocabulary Exercise 1: Botanical Concepts",
            instruction: "Select the botanical term matching each description.",
            questions: [
              {
                prompt: "The biochemical process by which plants use sunlight to synthesize nutrients:",
                options: ["photosynthesis", "vegetation", "fungi", "biodiversity"],
                correct: 0,
                explanation: "'Photosynthesis' is the biological process using solar energy."
              },
              {
                prompt: "To grow vigorously and develop successfully:",
                options: ["thrive", "absorb", "conserve", "inherit"],
                correct: 0,
                explanation: "'Thrive' means to flourish and grow vigorously."
              }
            ]
          },
          {
            id: "m5a-vocab-ex2",
            title: "Vocabulary Exercise 2: Context Fill",
            instruction: "Fill in the blank with an appropriate botanical word.",
            questions: [
              {
                prompt: "Dense alpine _____ shields the steep hillside from soil erosion.",
                accepted: ["vegetation"],
                hint: "Plant life collectively: vegetation."
              }
            ]
          }
        ]
      },

      exercises: [
        // Level 1: Foundation
        {
          id: "m5a-l1-1",
          level: 1,
          levelLabel: "Level 1 (Foundation)",
          type: "multiple_choice",
          title: "Exercise 1: Zero vs First Conditional Selection",
          instruction: "Select the correct verb form for each conditional sentence.",
          questions: [
            {
              prompt: "If water reaches 100 degrees Celsius at sea level, it _____.",
              options: ["boils", "will boil", "boiled", "is boiling"],
              correct: 0,
              explanation: "Scientific law / physical truth -> Zero Conditional (boils)."
            },
            {
              prompt: "If it rains tomorrow morning, our class _____ the botanical excursion.",
              options: ["cancel", "will cancel", "canceled", "canceling"],
              correct: 1,
              explanation: "Probable future condition -> First Conditional (will cancel)."
            },
            {
              prompt: "We will leave the campsite as soon as the sun _____ up.",
              options: ["comes", "will come", "came", "has come"],
              correct: 0,
              explanation: "In time clauses introduced by 'as soon as', use Present Simple (comes)."
            },
            {
              prompt: "Unless we protect these bees, plant pollination _____ decline.",
              options: ["will", "would", "is", "did"],
              correct: 0,
              explanation: "First conditional result clause -> 'will'."
            }
          ]
        },
        {
          id: "m5a-l1-2",
          level: 1,
          levelLabel: "Level 1 (Foundation)",
          type: "multiple_choice",
          title: "Exercise 2: Time Conjunctions Identification",
          instruction: "Select the conjunction that expresses 'if not'.",
          questions: [
            {
              prompt: "_____ we act immediately, rare alpine flowers will vanish from this peak.",
              options: ["Unless", "As soon as", "Until", "When"],
              correct: 0,
              explanation: "'Unless' = if not."
            },
            {
              prompt: "We cannot pick the mushrooms _____ the botany guide checks them for toxicity.",
              options: ["until", "if", "unless", "as soon as"],
              correct: 0,
              explanation: "'Until' expresses up to the point in time."
            },
            {
              prompt: "Plants produce oxygen _____ sunlight stimulates photosynthesis.",
              options: ["when", "unless", "until", "before"],
              correct: 0,
              explanation: "General scientific fact with 'when'."
            }
          ]
        },
        {
          id: "m5a-l1-3",
          level: 1,
          levelLabel: "Level 1 (Foundation)",
          type: "multiple_choice",
          title: "Exercise 3: Future Time Clauses Conjunctions",
          instruction: "Select the grammatically appropriate verb for future time clauses.",
          questions: [
            {
              prompt: "I will call you before the botanical garden _____ its gates.",
              options: ["closes", "will close", "closed", "is closing"],
              correct: 0,
              explanation: "Time clauses with 'before' take Present Simple: closes."
            },
            {
              prompt: "As soon as spring arrives, wildflowers _____ the meadows.",
              options: ["will cover", "cover", "covered", "covers"],
              correct: 0,
              explanation: "Main result clause of future time sentence: will cover."
            },
            {
              prompt: "If you touch a stinging nettle barehanded, your skin _____ irritated.",
              options: ["becomes", "will became", "became", "has become"],
              correct: 0,
              explanation: "Zero conditional general biological reaction: becomes."
            }
          ]
        },

        // Level 2: Standard
        {
          id: "m5a-l2-1",
          level: 2,
          levelLabel: "Level 2 (Standard)",
          type: "fill_blank",
          title: "Exercise 1: Supplying Verb Forms in Conditionals",
          instruction: "Write the correct form of the verbs in brackets.",
          questions: [
            {
              prompt: "Unless governments _____ (enforce) strict conservation laws, deforestation will expand.",
              accepted: ["enforce"],
              hint: "'Unless' = if not; followed by Present Simple: enforce."
            },
            {
              prompt: "If you _____ (heat) ice above 0°C, it melts into liquid water.",
              accepted: ["heat"],
              hint: "Zero conditional: heat."
            },
            {
              prompt: "The endangered seedlings will wither unless the gardeners _____ (water) them daily.",
              accepted: ["water"],
              hint: "unless they water them."
            },
            {
              prompt: "As soon as the scientists _____ (receive) the satellite data, they will publish the report.",
              accepted: ["receive"],
              hint: "Time clause takes Present Simple: receive."
            }
          ]
        },
        {
          id: "m5a-l2-2",
          level: 2,
          levelLabel: "Level 2 (Standard)",
          type: "fill_blank",
          title: "Exercise 2: Future Time Clauses in Action",
          instruction: "Complete the sentence with the correct tense.",
          questions: [
            {
              prompt: "We will wait here until the forest ranger _____ (arrive).",
              accepted: ["arrives"],
              hint: "Time clause with until takes Present Simple: arrives."
            },
            {
              prompt: "Before we pitch our tents, we _____ (check) the ground for ant nests.",
              accepted: ["will check"],
              hint: "Main clause in future time sentence: will check."
            },
            {
              prompt: "When the temperature drops tonight, frost _____ (form) on the pine needles.",
              accepted: ["will form"],
              hint: "Future prediction: will form."
            }
          ]
        },
        {
          id: "m5a-l2-3",
          level: 2,
          levelLabel: "Level 2 (Standard)",
          type: "fill_blank",
          title: "Exercise 3: Unless vs If Not in Environmental Contexts",
          instruction: "Fill in the blank with the appropriate verb form.",
          questions: [
            {
              prompt: "Unless we _____ (reduce) pesticide use, bumblebee colonies will not recover.",
              accepted: ["reduce"],
              hint: "unless we reduce."
            },
            {
              prompt: "If carbon emissions _____ (not fall) by 2030, polar ice caps will continue shrinking.",
              accepted: ["do not fall", "don't fall"],
              hint: "do not fall / don't fall."
            },
            {
              prompt: "We _____ (not leave) the research shelter until the blizzard subsides.",
              accepted: ["won't leave", "will not leave"],
              hint: "won't leave."
            }
          ]
        },

        // Level 3: Challenge
        {
          id: "m5a-l3-1",
          level: 3,
          levelLabel: "Level 3 (Challenge)",
          type: "transformation",
          title: "Exercise 1: Rephrasing with 'Unless' and Time Clauses",
          instruction: "Rewrite the sentence using the prompt in brackets so that the meaning is unchanged.",
          questions: [
            {
              prompt: "If we do not reduce greenhouse emissions urgently, temperatures will surge. (UNLESS)<br>____________________ greenhouse emissions urgently, temperatures will surge.",
              accepted: ["Unless we reduce"],
              hint: "Unless we reduce."
            },
            {
              prompt: "You will not observe the nocturnal owls if you don't stay completely quiet. (UNLESS)<br>You will not observe the nocturnal owls ____________________ completely quiet.",
              accepted: ["unless you stay"],
              hint: "unless you stay."
            },
            {
              prompt: "If it doesn't rain soon, the riverbed will dry up completely. (UNLESS)<br>The riverbed will dry up completely ____________________ soon.",
              accepted: ["unless it rains"],
              hint: "unless it rains."
            }
          ]
        },
        {
          id: "m5a-l3-2",
          level: 3,
          levelLabel: "Level 3 (Challenge)",
          type: "transformation",
          title: "Exercise 2: Time Connector Synthesis",
          instruction: "Rewrite using 'as soon as'.",
          questions: [
            {
              prompt: "The rain will stop, and immediately we will plant the pine seedlings. (AS SOON AS)<br>We will plant the pine seedlings ____________________.",
              accepted: ["as soon as the rain stops"],
              hint: "as soon as the rain stops."
            },
            {
              prompt: "The sun will rise and then we will set out along the hiking trail. (WHEN)<br>We will set out along the hiking trail ____________________.",
              accepted: ["when the sun rises"],
              hint: "when the sun rises."
            },
            {
              prompt: "We won't begin the botanical tour before our guide arrives. (UNTIL)<br>We will wait to begin the botanical tour ____________________.",
              accepted: ["until our guide arrives"],
              hint: "until our guide arrives."
            }
          ]
        },
        {
          id: "m5a-l3-3",
          level: 3,
          levelLabel: "Level 3 (Challenge)",
          type: "transformation",
          title: "Exercise 3: Complex Zero and First Conditional Rephrasing",
          instruction: "Rewrite the sentence preserving original meaning.",
          questions: [
            {
              prompt: "Heat water to 100 degrees Celsius and it turns into steam. (IF)<br>____________________ water to 100 degrees Celsius, it turns into steam.",
              accepted: ["If you heat", "If water is heated"],
              hint: "If you heat water..."
            },
            {
              prompt: "You will miss the rare orchid flowering if you don't visit the reserve this week. (UNLESS)<br>You will miss the rare orchid flowering ____________________ the reserve this week.",
              accepted: ["unless you visit"],
              hint: "unless you visit."
            },
            {
              prompt: "Finish your field notes, and immediately after we will examine the fungus under the microscope. (SOON)<br>As ____________________ your field notes, we will examine the fungus under the microscope.",
              accepted: ["soon as you finish"],
              hint: "As soon as you finish."
            }
          ]
        }
      ]
    },

    {
      id: "m5-b",
      code: "5B",
      title: "The Animal World",
      subtitle: "Wildlife, Predators & Second vs Third Conditional",
      
      grammar: {
        title: "Second & Third Conditional",
        sections: [
          {
            heading: "Hypothetical Present vs Past Regrets",
            content: `
              <div class="comparison-grid">
                <div class="grammar-card">
                  <h4>Second Conditional (Hypothetical / Unreal in Present)</h4>
                  <p><strong>Structure:</strong> If + Past Simple, would + infinitive</p>
                  <p><em>Example:</em> If I <strong>lived</strong> near a nature reserve, I <strong>would observe</strong> wolves every weekend.</p>
                  <p><em>Note:</em> With the verb <em>to be</em>, formal English prefers <em>were</em> for all persons: <em>If I <strong>were</strong> you, I would study zoology.</em></p>
                </div>
                <div class="grammar-card">
                  <h4>Third Conditional (Impossible Past / Alternative History)</h4>
                  <p><strong>Structure:</strong> If + had + Past Participle, would have + Past Participle</p>
                  <p><em>Example:</em> If conservationists <strong>had protected</strong> the dodo bird in the 17th century, it <strong>would not have become</strong> extinct.</p>
                </div>
              </div>
            `
          }
        ]
      },

      vocabulary: {
        topic: "Wildlife, Predators, Camouflage & Adaptations",
        words: [
          { word: "camouflage", phonetic: "/ˈkæm.ə.flɑːʒ/", cat: "camuflatge", example: "The snow leopard utilizes cryptic camouflage against mountain rocks." },
          { word: "predator", phonetic: "/ˈpred.ə.tər/", cat: "depredador", example: "Orcas and polar bears are formidable apex predators." },
          { word: "prey", phonetic: "/preɪ/", cat: "presa", example: "Zebras must remain vigilant to avoid becoming predator prey." },
          { word: "migratory", phonetic: "/ˈmaɪ.ɡrə.tər.i/", cat: "migratori/òria", example: "Swallows and storks are migratory birds that journey to Africa in autumn." },
          { word: "instinct", phonetic: "/ˈɪn.stɪŋkt/", cat: "instint", example: "Sea turtle hatchlings crawl toward the moonlit ocean by pure instinct." }
        ],
        exercises: [
          {
            id: "m5b-vocab-ex1",
            title: "Vocabulary Exercise 1: Animal Kingdom Concepts",
            instruction: "Identify the biological adaptation from each clue.",
            questions: [
              {
                prompt: "An animal that naturally preys on other animals:",
                options: ["predator", "prey", "migratory", "vegetation"],
                correct: 0,
                explanation: "A 'predator' hunts other animals."
              },
              {
                prompt: "The disguising of animal appearances to blend in with surroundings:",
                options: ["camouflage", "instinct", "heritage", "dexterity"],
                correct: 0,
                explanation: "'Camouflage' helps animals blend into their habitat."
              }
            ]
          },
          {
            id: "m5b-vocab-ex2",
            title: "Vocabulary Exercise 2: Context Fill",
            instruction: "Fill in the blank with an appropriate wildlife word.",
            questions: [
              {
                prompt: "Geese fly thousands of miles each autumn following ancient _____ flight paths.",
                accepted: ["migratory"],
                hint: "migratory."
              }
            ]
          }
        ]
      },

      exercises: [
        // Level 1: Foundation
        {
          id: "m5b-l1-1",
          level: 1,
          levelLabel: "Level 1 (Foundation)",
          type: "multiple_choice",
          title: "Exercise 1: Second vs Third Conditional Recognition",
          instruction: "Select the verb option that correctly completes each hypothetical statement.",
          questions: [
            {
              prompt: "If I _____ an animal, I would choose to be a soaring peregrine falcon.",
              options: ["were", "am", "had been", "will be"],
              correct: 0,
              explanation: "Hypothetical present condition -> Second Conditional: 'If I were'."
            },
            {
              prompt: "If rangers had reached the trapped dolphin sooner, they _____ saved it.",
              options: ["would have", "will have", "would", "had"],
              correct: 0,
              explanation: "Past impossible condition -> Third Conditional: had reached ... would have saved."
            },
            {
              prompt: "If wolves disappeared from the park, the deer population _____ explode.",
              options: ["would", "will", "would have", "had"],
              correct: 0,
              explanation: "Second Conditional: disappeared ... would explode."
            }
          ]
        },
        {
          id: "m5b-l1-2",
          level: 1,
          levelLabel: "Level 1 (Foundation)",
          type: "multiple_choice",
          title: "Exercise 2: Identifying Clauses in 2nd and 3rd Conditionals",
          instruction: "Select the correct form for the if-clause.",
          questions: [
            {
              prompt: "If you _____ a wounded badger in the forest, what would you do?",
              options: ["found", "find", "had found", "will find"],
              correct: 0,
              explanation: "Second conditional if-clause: found."
            },
            {
              prompt: "If the explorers had taken a GPS device, they _____ lost in the jungle.",
              options: ["wouldn't have got", "won't get", "wouldn't get", "hadn't got"],
              correct: 0,
              explanation: "Third conditional main clause: wouldn't have got."
            },
            {
              prompt: "What _____ you do if you encountered a bear in the Pyrenees?",
              options: ["would", "will", "did", "have"],
              correct: 0,
              explanation: "Second conditional question: What would you do...?"
            }
          ]
        },
        {
          id: "m5b-l1-3",
          level: 1,
          levelLabel: "Level 1 (Foundation)",
          type: "multiple_choice",
          title: "Exercise 3: Would vs Would Have Selection",
          instruction: "Choose between present hypothetical (would) and past impossible (would have).",
          questions: [
            {
              prompt: "If humans had wings, we _____ fly across mountains.",
              options: ["could", "could have", "can", "will"],
              correct: 0,
              explanation: "Present hypothetical: could (= would be able to)."
            },
            {
              prompt: "If dinosaurs had not gone extinct, mammalian evolution _____ very differently.",
              options: ["would have unfolded", "would unfold", "will unfold", "unfolded"],
              correct: 0,
              explanation: "Past hypothetical consequence -> would have unfolded."
            },
            {
              prompt: "If I lived near the coral reef, I _____ go diving every afternoon.",
              options: ["would", "would have", "will", "shall"],
              correct: 0,
              explanation: "Second conditional: would go."
            }
          ]
        },

        // Level 2: Standard
        {
          id: "m5b-l2-1",
          level: 2,
          levelLabel: "Level 2 (Standard)",
          type: "fill_blank",
          title: "Exercise 1: Constructing Second and Third Conditionals",
          instruction: "Fill in the blanks with the correct conditional forms.",
          questions: [
            {
              prompt: "If I won an eco-safari expedition to Kenya, I _____ (take) hundreds of photos.",
              accepted: ["would take", "'d take"],
              hint: "Second conditional main clause: would take."
            },
            {
              prompt: "If the naturalists _____ (know) the ice sheet was so fragile, they wouldn't have crossed it.",
              accepted: ["had known"],
              hint: "Third conditional if-clause: had known."
            },
            {
              prompt: "If humans had not destroyed the wetlands, hundreds of species _____ (survive).",
              accepted: ["would have survived"],
              hint: "Third conditional main clause: would have survived."
            }
          ]
        },
        {
          id: "m5b-l2-2",
          level: 2,
          levelLabel: "Level 2 (Standard)",
          type: "fill_blank",
          title: "Exercise 2: Second Conditional Advice & Scenarios",
          instruction: "Complete the sentence with the correct verb forms.",
          questions: [
            {
              prompt: "If I _____ (be) you, I would study marine biology at university.",
              accepted: ["were", "was"],
              hint: "were / was."
            },
            {
              prompt: "If polar bears had more Arctic sea ice, their hunting grounds _____ (expand).",
              accepted: ["would expand", "could expand"],
              hint: "would expand."
            },
            {
              prompt: "What _____ you _____ (say) if an environmentalist interviewed you on live TV?",
              accepted: ["would / say", "would you say", "would/say"],
              hint: "would (you) say."
            }
          ]
        },
        {
          id: "m5b-l2-3",
          level: 2,
          levelLabel: "Level 2 (Standard)",
          type: "fill_blank",
          title: "Exercise 3: Third Conditional Past Regrets & Consequences",
          instruction: "Complete each sentence with the correct past third conditional form.",
          questions: [
            {
              prompt: "If the poachers _____ (be caught) earlier, many rhinos would have been saved.",
              accepted: ["had been caught"],
              hint: "Passive past perfect in if-clause: had been caught."
            },
            {
              prompt: "If the oil tanker hadn't collided with the reef, thousands of seabirds _____ (not die).",
              accepted: ["wouldn't have died", "would not have died"],
              hint: "wouldn't have died."
            },
            {
              prompt: "If researchers _____ (install) camera traps, they would have documented the snow leopard.",
              accepted: ["had installed"],
              hint: "had installed."
            }
          ]
        },

        // Level 3: Challenge
        {
          id: "m5b-l3-1",
          level: 3,
          levelLabel: "Level 3 (Challenge)",
          type: "transformation",
          title: "Exercise 1: Third Conditional Regrets & Past Realities",
          instruction: "Rewrite the past situation as a third conditional sentence.",
          questions: [
            {
              prompt: "We didn't spot the Iberian lynx because we arrived at the observatory too late. (SEEN)<br>If we had arrived earlier, we ____________________ the Iberian lynx.",
              accepted: ["would have seen", "'d have seen"],
              hint: "would have seen."
            },
            {
              prompt: "The campers didn't pack waterproof coats, so they got drenched in the deluge. (IF)<br>____________________ waterproof coats, they wouldn't have got drenched.",
              accepted: ["If the campers had packed"],
              hint: "If the campers had packed."
            },
            {
              prompt: "The marine biologist didn't bring his underwater camera, so he couldn't photograph the manta ray. (HAD)<br>If the marine biologist ____________________, he could have photographed the manta ray.",
              accepted: ["had brought his underwater camera"],
              hint: "had brought his underwater camera."
            }
          ]
        },
        {
          id: "m5b-l3-2",
          level: 3,
          levelLabel: "Level 3 (Challenge)",
          type: "transformation",
          title: "Exercise 2: Rephrasing Situations into Second Conditionals",
          instruction: "Convert the present reality into a hypothetical conditional.",
          questions: [
            {
              prompt: "I don't have enough money, so I can't travel to the Galapagos Islands. (HAD)<br>If I ____________________, I could travel to the Galapagos Islands.",
              accepted: ["had enough money"],
              hint: "had enough money."
            },
            {
              prompt: "She doesn't know the Latin names of local flora, so she can't classify them. (KNEW)<br>If she ____________________ of local flora, she could classify them.",
              accepted: ["knew the Latin names"],
              hint: "knew the Latin names."
            },
            {
              prompt: "I am not an expert ornithologist, so I cannot identify bird songs easily. (WERE)<br>If I ____________________, I could identify bird songs easily.",
              accepted: ["were an expert ornithologist", "was an expert ornithologist"],
              hint: "were an expert ornithologist."
            }
          ]
        },
        {
          id: "m5b-l3-3",
          level: 3,
          levelLabel: "Level 3 (Challenge)",
          type: "transformation",
          title: "Exercise 3: Mixed Past & Present Hypotheticals",
          instruction: "Complete the sentence preserving the intended meaning.",
          questions: [
            {
              prompt: "They built houses on a flood plain, and now their basements flood every autumn. (BUILT)<br>If they hadn't ____________________, their basements wouldn't flood every autumn.",
              accepted: ["built houses on a flood plain"],
              hint: "built houses on a flood plain."
            },
            {
              prompt: "My grandfather didn't study botany, so he doesn't work in this nature reserve now. (HAD)<br>If my grandfather ____________________, he would work in this nature reserve now.",
              accepted: ["had studied botany"],
              hint: "had studied botany."
            },
            {
              prompt: "We didn't take sunscreen to the safari, so we have painful sunburns today. (HAVE)<br>If we had taken sunscreen to the safari, we wouldn't ____________________ today.",
              accepted: ["have painful sunburns"],
              hint: "have painful sunburns."
            }
          ]
        }
      ]
    },

    {
      id: "m5-c",
      code: "5C",
      title: "Extreme Weather",
      subtitle: "Weather Events & Comprehensive Conditionals Review",
      
      grammar: {
        title: "Comprehensive Conditionals Matrix (0, 1st, 2nd, 3rd)",
        sections: [
          {
            heading: "Full Conditionals Synthesis",
            content: `
              <table class="styled-table">
                <thead>
                  <tr><th>Type</th><th>If-Clause</th><th>Main Clause</th><th>Meteorological Context</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>Zero</strong></td><td>Present Simple</td><td>Present Simple</td><td>If atmospheric pressure <em>drops</em> sharply, a storm <em>forms</em>.</td></tr>
                  <tr><td><strong>1st</strong></td><td>Present Simple</td><td>will + infinitive</td><td>If the gale <em>worsens</em>, the maritime ferry <em>will be</em> suspended.</td></tr>
                  <tr><td><strong>2nd</strong></td><td>Past Simple</td><td>would + infinitive</td><td>If a tornado <em>threatened</em> our district, we <em>would seek</em> shelter underground.</td></tr>
                  <tr><td><strong>3rd</strong></td><td>had + participle</td><td>would have + participle</td><td>If residents <em>had received</em> the storm siren, they <em>would have evacuated</em> sooner.</td></tr>
                </tbody>
              </table>
            `
          }
        ]
      },

      vocabulary: {
        topic: "Extreme Weather & Meteorological Phenomena",
        words: [
          { word: "drought", phonetic: "/draʊt/", cat: "sequera", example: "Severe summer droughts deplete freshwater reservoirs." },
          { word: "blizzard", phonetic: "/ˈblɪz.əd/", cat: "tempesta de neu i vent / torb", example: "The mountain pass was blocked by a blinding blizzard." },
          { word: "heatwave", phonetic: "/ˈhiːt.weɪv/", cat: "onada de calor", example: "Urban temperatures climbed above 42°C during the heatwave." },
          { word: "flash flood", phonetic: "/ˈflæʃ ˌflʌd/", cat: "riuada sobtada / inundació llampec", example: "Torrential downpours triggered dangerous flash floods in the ravine." },
          { word: "lightning", phonetic: "/ˈlaɪt.nɪŋ/", cat: "llampec / llamp", example: "A strike of lightning splintered the tall pine tree." }
        ],
        exercises: [
          {
            id: "m5c-vocab-ex1",
            title: "Vocabulary Exercise 1: Weather Phenomena",
            instruction: "Match the severe weather phenomenon to its definition.",
            questions: [
              {
                prompt: "A prolonged period of abnormally low rainfall leading to water shortages:",
                options: ["drought", "blizzard", "heatwave", "flash flood"],
                correct: 0,
                explanation: "A 'drought' is an extended dry spell with insufficient water."
              },
              {
                prompt: "A severe snowstorm with high winds and low visibility:",
                options: ["blizzard", "drought", "lightning", "heatwave"],
                correct: 0,
                explanation: "A 'blizzard' combines freezing temperatures, heavy snow, and high winds."
              }
            ]
          },
          {
            id: "m5c-vocab-ex2",
            title: "Vocabulary Exercise 2: Context Fill",
            instruction: "Fill in the blank with an appropriate weather term.",
            questions: [
              {
                prompt: "Thunder always follows a discharge of atmospheric _____.",
                accepted: ["lightning"],
                hint: "lightning."
              }
            ]
          }
        ]
      },

      exercises: [
        // Level 1: Foundation
        {
          id: "m5c-l1-1",
          level: 1,
          levelLabel: "Level 1 (Foundation)",
          type: "multiple_choice",
          title: "Exercise 1: Conditionals Classification",
          instruction: "Identify the type of conditional used in each sentence.",
          questions: [
            {
              prompt: "'If the ambient temperature falls below 0°C, puddle water turns to ice.' Which conditional is this?",
              options: ["Zero Conditional", "First Conditional", "Second Conditional", "Third Conditional"],
              correct: 0,
              explanation: "Present Simple + Present Simple expresses a physical law -> Zero Conditional."
            },
            {
              prompt: "'If a hurricane hit this coastline, it would destroy flimsy beachfront cabins.' Which conditional is this?",
              options: ["Zero Conditional", "First Conditional", "Second Conditional", "Third Conditional"],
              correct: 2,
              explanation: "Past Simple + would expresses a hypothetical present scenario -> Second Conditional."
            },
            {
              prompt: "'If we leave now, we will outrun the incoming thunderstorm.' Which conditional is this?",
              options: ["Zero Conditional", "First Conditional", "Second Conditional", "Third Conditional"],
              correct: 1,
              explanation: "Present Simple + will -> First Conditional."
            }
          ]
        },
        {
          id: "m5c-l1-2",
          level: 1,
          levelLabel: "Level 1 (Foundation)",
          type: "multiple_choice",
          title: "Exercise 2: Third Conditional Structure Recognition",
          instruction: "Choose the correct structure of a third conditional sentence.",
          questions: [
            {
              prompt: "'If they had read the forecast, they wouldn't have gone sailing.' Which conditional is this?",
              options: ["Third Conditional", "Second Conditional", "First Conditional", "Zero Conditional"],
              correct: 0,
              explanation: "had + p.p. with would have + p.p. = Third Conditional."
            },
            {
              prompt: "In a First Conditional sentence, which tense is used in the 'if-clause'?",
              options: ["Present Simple", "Future Simple (will)", "Past Simple", "Present Perfect"],
              correct: 0,
              explanation: "The if-clause in First Conditional takes Present Simple."
            },
            {
              prompt: "In a Second Conditional sentence, which verb form is used in the main result clause?",
              options: ["would + base verb", "will + base verb", "would have + past participle", "had + past participle"],
              correct: 0,
              explanation: "would + base verb is the main clause of Second Conditional."
            }
          ]
        },
        {
          id: "m5c-l1-3",
          level: 1,
          levelLabel: "Level 1 (Foundation)",
          type: "multiple_choice",
          title: "Exercise 3: Real vs Unreal Conditional Recognition",
          instruction: "Distinguish between real (probable) and unreal (hypothetical) conditional forms.",
          questions: [
            {
              prompt: "Which sentence expresses a real, likely future condition?",
              options: [
                "If it rains this evening, we will watch a nature documentary.",
                "If it rained frogs, I would be amazed.",
                "If it had rained yesterday, the grass would have grown.",
                "If I were a cloud, I would drift over mountains."
              ],
              correct: 0,
              explanation: "First Conditional: real and likely future possibility."
            },
            {
              prompt: "Which sentence expresses an impossible past situation?",
              options: [
                "If we had monitored the weather radar, we wouldn't have been caught in the hailstorm.",
                "If the weather radar beeps, we seek shelter.",
                "If we bought a radar, we would predict storms.",
                "As soon as the radar beeps, we will run."
              ],
              correct: 0,
              explanation: "Third Conditional: impossible past condition."
            },
            {
              prompt: "Which sentence expresses advice using Second Conditional?",
              options: [
                "If I were you, I would pack warm waterproof gear.",
                "If I am you, I will pack gear.",
                "If I had been you, I had packed gear.",
                "Unless you are me, pack gear."
              ],
              correct: 0,
              explanation: "'If I were you, I would...' is standard Second Conditional advice."
            }
          ]
        },

        // Level 2: Standard
        {
          id: "m5c-l2-1",
          level: 2,
          levelLabel: "Level 2 (Standard)",
          type: "fill_blank",
          title: "Exercise 1: Conditionals Mixed Practice",
          instruction: "Complete the sentence with the appropriate conditional verb form.",
          questions: [
            {
              prompt: "If meteorologists issue a red flood alert, local authorities _____ (close) the schools.",
              accepted: ["will close"],
              hint: "First conditional: will close."
            },
            {
              prompt: "If I _____ (be) in charge of civil protection, I would construct stronger sea dykes.",
              accepted: ["were", "was"],
              hint: "Second conditional: were / was."
            },
            {
              prompt: "If the emergency helicopters had taken off earlier, they _____ (rescue) the stranded mountaineers.",
              accepted: ["would have rescued"],
              hint: "Third conditional: would have rescued."
            }
          ]
        },
        {
          id: "m5c-l2-2",
          level: 2,
          levelLabel: "Level 2 (Standard)",
          type: "fill_blank",
          title: "Exercise 2: Supplying Conditional If-Clauses",
          instruction: "Write the correct verb form for the if-clause.",
          questions: [
            {
              prompt: "If the temperature _____ (rise) further during the heatwave, power blackouts may occur.",
              accepted: ["rises"],
              hint: "rises."
            },
            {
              prompt: "If coastal towns _____ (invest) in flood barriers five years ago, the storm surge wouldn't have caused such havoc.",
              accepted: ["had invested"],
              hint: "Third conditional if-clause: had invested."
            },
            {
              prompt: "If wildfires _____ (threaten) residential areas, firefighters evacuate the perimeter immediately.",
              accepted: ["threaten"],
              hint: "Zero conditional rule: threaten."
            }
          ]
        },
        {
          id: "m5c-l2-3",
          level: 2,
          levelLabel: "Level 2 (Standard)",
          type: "fill_blank",
          title: "Exercise 3: Mixed Conditionals in Meteorology",
          instruction: "Fill in the blank with the correct verb forms across all conditionals.",
          questions: [
            {
              prompt: "If the air pressure drops suddenly, a storm _____ (usually / follow).",
              accepted: ["usually follows", "follows"],
              hint: "Zero conditional fact: usually follows."
            },
            {
              prompt: "If lightning struck that tall oak tree, it _____ (catch) fire instantly.",
              accepted: ["would catch"],
              hint: "Second conditional: would catch."
            },
            {
              prompt: "If we _____ (not check) the satellite barometer, we wouldn't have anticipated the cyclone.",
              accepted: ["had not checked", "hadn't checked"],
              hint: "had not checked / hadn't checked."
            }
          ]
        },

        // Level 3: Challenge
        {
          id: "m5c-l3-1",
          level: 3,
          levelLabel: "Level 3 (Challenge)",
          type: "transformation",
          title: "Exercise 1: Mixed Conditionals Synthesis",
          instruction: "Rewrite the sentence using the required conditional structure.",
          questions: [
            {
              prompt: "The rescue crew didn't receive the GPS alert on time, so they arrived after the flash flood. (HAD)<br>If the rescue crew ____________________ on time, they would have arrived before the flash flood.",
              accepted: ["had received the GPS alert", "had received the alert"],
              hint: "Third conditional: had received the (GPS) alert."
            },
            {
              prompt: "I am not an atmospheric scientist, so I cannot predict storm intensity accurately. (WERE)<br>If I ____________________, I would be able to predict storm intensity accurately.",
              accepted: ["were an atmospheric scientist"],
              hint: "If I were an atmospheric scientist."
            },
            {
              prompt: "We didn't install storm shutters last summer, so our windows shattered in the hurricane. (INSTALLED)<br>If we ____________________ storm shutters last summer, our windows wouldn't have shattered.",
              accepted: ["had installed"],
              hint: "had installed."
            }
          ]
        },
        {
          id: "m5c-l3-2",
          level: 3,
          levelLabel: "Level 3 (Challenge)",
          type: "transformation",
          title: "Exercise 2: Transforming Real Past Disasters into Conditionals",
          instruction: "Write a third conditional sentence from the facts given.",
          questions: [
            {
              prompt: "The river overflowed because the dam burst. (WOULDN'T)<br>If the dam hadn't burst, the river ____________________.",
              accepted: ["wouldn't have overflowed", "would not have overflowed"],
              hint: "wouldn't have overflowed."
            },
            {
              prompt: "The climbers didn't check the weather bulletin, so they were caught in the avalanche. (IF)<br>____________________ the weather bulletin, they wouldn't have been caught in the avalanche.",
              accepted: ["If the climbers had checked"],
              hint: "If the climbers had checked."
            },
            {
              prompt: "They built roads on the steep hillside, so landslides occurred after heavy rain. (HAD NOT)<br>If they ____________________ roads on the steep hillside, landslides wouldn't have occurred.",
              accepted: ["had not built", "hadn't built"],
              hint: "had not built."
            }
          ]
        },
        {
          id: "m5c-l3-3",
          level: 3,
          levelLabel: "Level 3 (Challenge)",
          type: "transformation",
          title: "Exercise 3: Comprehensive Conditionals Mastery Synthesis",
          instruction: "Rewrite each sentence using the prompt in brackets to produce the corresponding conditional.",
          questions: [
            {
              prompt: "Leave fresh food out in 35-degree heat and it spoils quickly. (IF)<br>____________________ fresh food out in 35-degree heat, it spoils quickly.",
              accepted: ["If you leave", "If food is left"],
              hint: "If you leave fresh food..."
            },
            {
              prompt: "I am not brave enough to go tornado chasing. (WOULD)<br>If I were braver, I ____________________ tornado chasing.",
              accepted: ["would go"],
              hint: "would go."
            },
            {
              prompt: "The firefighters arrived quickly, so the brushfire didn't spread to the pine forest. (SPREAD)<br>If the firefighters hadn't arrived quickly, the brushfire ____________________ to the pine forest.",
              accepted: ["would have spread"],
              hint: "would have spread."
            }
          ]
        }
      ]
    }
  ]
};
