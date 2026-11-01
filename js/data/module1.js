// Module 1: Game Changers (Page 11)
const module1Data = {
  id: "module-1",
  moduleId: 1,
  moduleTitle: "Module 1: Game Changers",
  page: 11,
  themeColor: "#059669", // emerald
  sections: [
    {
      id: "m1-a",
      code: "1A",
      title: "Changing the Land",
      subtitle: "The Environment & Present Perfect Simple vs Past Simple",
      
      grammar: {
        title: "Present Perfect Simple vs Past Simple",
        sections: [
          {
            heading: "When do we use each tense?",
            content: `
              <div class="comparison-grid">
                <div class="grammar-card">
                  <h4>Past Simple</h4>
                  <p>Used for actions completed at a <strong>specific, finished moment</strong> in the past.</p>
                  <p><strong>Time keywords:</strong> <em>yesterday, last night, two weeks ago, in 2019, when I was ten</em>.</p>
                  <div class="example-quote">"The municipal government <strong>banned</strong> single-use plastic bags in 2021."</div>
                </div>
                <div class="grammar-card">
                  <h4>Present Perfect Simple</h4>
                  <p>Used for actions connecting past and present: life experiences, recent developments without exact dates, or ongoing states.</p>
                  <p><strong>Time keywords:</strong> <em>ever, never, already, yet, just, recently, for, since</em>.</p>
                  <div class="example-quote">"Many European countries <strong>have created</strong> strict environmental laws recently."</div>
                </div>
              </div>
              <div class="tip-box">
                <strong>Key Examination Rule:</strong> If the sentence specifies <em>"When did it happen?"</em> with a finished time marker, use the <strong>Past Simple</strong>. If the focus is on the present result or if the time period continues (<em>today, this month</em>), use the <strong>Present Perfect Simple</strong>.
              </div>
            `
          }
        ]
      },

      vocabulary: {
        topic: "Environment & Renewable Energy",
        words: [
          { word: "renewable energy", phonetic: "/rɪˈnjuː.ə.bəl ˈen.ə.dʒi/", cat: "energia renovable", example: "Solar and wind power are leading sources of renewable energy." },
          { word: "deforestation", phonetic: "/diːˌfɒr.ɪˈsteɪ.ʃən/", cat: "desforestació", example: "Deforestation destroys the natural habitats of thousands of wildlife species." },
          { word: "fossil fuels", phonetic: "/ˈfɒs.əl ˌfjuː.əlz/", cat: "combustibles fòssils", example: "Coal and petroleum are fossil fuels that release massive carbon emissions." },
          { word: "greenhouse effect", phonetic: "/ˈɡriːn.haʊs ɪˌfekt/", cat: "efecte hivernacle", example: "Excessive emissions intensify the atmospheric greenhouse effect." },
          { word: "conserve", phonetic: "/kənˈsɜːv/", cat: "conservar / estalviar", example: "Citizens must conserve clean drinking water during dry summers." },
          { word: "endangered species", phonetic: "/ɪnˌdeɪn.dʒəd ˈspiː.ʃiːz/", cat: "espècie en perill d'extinció", example: "The Iberian lynx was saved from becoming an endangered species." },
          { word: "carbon footprint", phonetic: "/ˌkɑː.bən ˈfʊt.prɪnt/", cat: "petjada de carboni", example: "Cycling to school reduces your personal carbon footprint." },
          { word: "biodiversity", phonetic: "/ˌbaɪ.əʊ.daɪˈvɜː.sə.ti/", cat: "biodiversitat", example: "Rainforests boast immense biological biodiversity." }
        ],
        exercises: [
          {
            id: "m1a-vocab-ex1",
            title: "Vocabulary Exercise 1: Environmental Terminology",
            instruction: "Select the correct term for each environmental definition.",
            questions: [
              {
                prompt: "The cutting down and clearing of trees over a wide area:",
                options: ["biodiversity", "deforestation", "fossil fuels", "conserve"],
                correct: 1,
                explanation: "'Deforestation' is the large-scale removal of forests."
              },
              {
                prompt: "Energy derived from natural resources that replenish continuously, such as wind or sun:",
                options: ["renewable energy", "carbon footprint", "fossil fuels", "greenhouse effect"],
                correct: 0,
                explanation: "'Renewable energy' comes from inexhaustible natural sources."
              },
              {
                prompt: "A plant or animal at serious risk of dying out completely:",
                options: ["carbon footprint", "endangered species", "fossil fuel", "biodiversity"],
                correct: 1,
                explanation: "'Endangered species' face potential extinction."
              }
            ]
          },
          {
            id: "m1a-vocab-ex2",
            title: "Vocabulary Exercise 2: Contextual Sentences",
            instruction: "Fill in the blank with the appropriate vocabulary word.",
            questions: [
              {
                prompt: "Coal, natural gas, and oil are all classified as _____ fuels.",
                accepted: ["fossil"],
                hint: "Non-renewable fuels formed over millions of years: fossil."
              },
              {
                prompt: "Switching off electronic devices on standby helps to _____ electrical energy.",
                accepted: ["conserve", "save"],
                hint: "Verb meaning to protect or economise: conserve."
              },
              {
                prompt: "Traveling by train instead of flying substantially cuts down your carbon _____.",
                accepted: ["footprint"],
                hint: "Paired with carbon: footprint."
              }
            ]
          }
        ]
      },

      exercises: [
        // Level 1: Foundation
        {
          id: "m1a-l1-1",
          level: 1,
          levelLabel: "Level 1 (Foundation)",
          type: "multiple_choice",
          title: "Exercise 1: Past Simple vs Present Perfect (Marker Clues)",
          instruction: "Select the correct verb tense according to the time markers.",
          questions: [
            {
              prompt: "In 2018, our high school _____ a rooftop solar panel system.",
              options: ["has installed", "installed", "was installed", "installs"],
              correct: 1,
              explanation: "'In 2018' is a finished past time marker -> Past Simple (installed)."
            },
            {
              prompt: "Scientists _____ that ocean temperatures have risen significantly.",
              options: ["already proved", "have already proved", "already proving", "prove already"],
              correct: 1,
              explanation: "'Already' is placed between the auxiliary have/has and the past participle in the Present Perfect."
            },
            {
              prompt: "Have you _____ witnessed a sea turtle nesting on the beach?",
              options: ["never", "ever", "yet", "ago"],
              correct: 1,
              explanation: "In questions concerning life experiences, use 'ever'."
            },
            {
              prompt: "They _____ their volunteer clean-up project two hours ago.",
              options: ["finished", "have finished", "finish", "had finish"],
              correct: 0,
              explanation: "'Ago' strictly requires the Past Simple (finished)."
            }
          ]
        },
        {
          id: "m1a-l1-2",
          level: 1,
          levelLabel: "Level 1 (Foundation)",
          type: "multiple_choice",
          title: "Exercise 2: For, Since, Already & Yet Recognition",
          instruction: "Choose the correct time expression to complete the environmental statements.",
          questions: [
            {
              prompt: "Environmentalists have monitored this coastal wetland _____ more than a decade.",
              options: ["for", "since", "ago", "yet"],
              correct: 0,
              explanation: "'For' precedes a period of duration (more than a decade)."
            },
            {
              prompt: "Solar battery prices have fallen sharply _____ 2020.",
              options: ["since", "for", "already", "ago"],
              correct: 0,
              explanation: "'Since' introduces a specific starting date."
            },
            {
              prompt: "Has the town council published the new recycling regulations _____?",
              options: ["yet", "already", "since", "for"],
              correct: 0,
              explanation: "'Yet' goes at the end of questions."
            }
          ]
        },
        {
          id: "m1a-l1-3",
          level: 1,
          levelLabel: "Level 1 (Foundation)",
          type: "multiple_choice",
          title: "Exercise 3: Have Been vs Have Gone",
          instruction: "Choose between 'been' and 'gone' in Present Perfect context.",
          questions: [
            {
              prompt: "The ecology ranger is not at his desk; he has _____ to inspect the forest fire outpost.",
              options: ["gone", "been", "went", "go"],
              correct: 0,
              explanation: "'Has gone' means he has left and is still there now."
            },
            {
              prompt: "I have _____ to the National Recycling Centre twice this term.",
              options: ["been", "gone", "went", "did"],
              correct: 0,
              explanation: "'Have been' means visited and returned."
            }
          ]
        },

        // Level 2: Standard
        {
          id: "m1a-l2-1",
          level: 2,
          levelLabel: "Level 2 (Standard)",
          type: "fill_blank",
          title: "Exercise 1: Forming Past Simple & Present Perfect",
          instruction: "Fill in the blank with either the Past Simple or the Present Perfect of the verb in brackets.",
          questions: [
            {
              prompt: "The volunteers _____ (collect) twenty bags of plastic waste last Saturday.",
              accepted: ["collected"],
              hint: "'Last Saturday' specifies finished time -> Past Simple: collected."
            },
            {
              prompt: "We _____ (not plant) the new trees yet, but we will start tomorrow morning.",
              accepted: ["haven't planted", "have not planted"],
              hint: "'Yet' with negative meaning requires Present Perfect: haven't planted."
            },
            {
              prompt: "Deforestation in this national reserve _____ (increase) alarmingly since 2015.",
              accepted: ["has increased"],
              hint: "'Since' indicates an action beginning in 2015 and continuing up to the present -> has increased."
            },
            {
              prompt: "_____ you ever _____ (participate) in an ecological demonstration?",
              accepted: ["Have / participated", "Have you participated", "Have/participated"],
              hint: "Present Perfect question: Have you ever participated."
            }
          ]
        },
        {
          id: "m1a-l2-2",
          level: 2,
          levelLabel: "Level 2 (Standard)",
          type: "fill_blank",
          title: "Exercise 2: Verb Conjugation in Environmental Contexts",
          instruction: "Supply the correct forms of the verbs in brackets.",
          questions: [
            {
              prompt: "Our school _____ (start) a composting project three months ago.",
              accepted: ["started"],
              hint: "Past Simple with ago: started."
            },
            {
              prompt: "Over 500 species of amphibians _____ (disappear) since the 1980s.",
              accepted: ["have disappeared"],
              hint: "Present Perfect with since: have disappeared."
            },
            {
              prompt: "I _____ (never / see) such a severe drought before in this valley.",
              accepted: ["have never seen", "'ve never seen"],
              hint: "have never seen."
            }
          ]
        },
        {
          id: "m1a-l2-3",
          level: 2,
          levelLabel: "Level 2 (Standard)",
          type: "fill_blank",
          title: "Exercise 3: Irregular Verbs in Past Simple & Present Perfect",
          instruction: "Fill in the irregular verb forms (grow, build, write).",
          questions: [
            {
              prompt: "Local farmers _____ (grow) organic crops on this land last year.",
              accepted: ["grew"],
              hint: "Past Simple of grow: grew."
            },
            {
              prompt: "The municipality _____ (build) three wind turbines so far.",
              accepted: ["has built", "'s built"],
              hint: "Present Perfect of build: has built."
            }
          ]
        },

        // Level 3: Challenge
        {
          id: "m1a-l3-1",
          level: 3,
          levelLabel: "Level 3 (Challenge)",
          type: "transformation",
          title: "Exercise 1: Sentence Rephrasing with Time Words",
          instruction: "Rewrite the second sentence so that it has the same meaning, using the word in brackets.",
          questions: [
            {
              prompt: "This is the first time I have ever attended a climate strike. (NEVER)<br>I ____________________ in a climate strike before.",
              accepted: ["have never taken part", "have never participated", "have never attended", "'ve never attended"],
              hint: "Present Perfect with never: have never attended / taken part."
            },
            {
              prompt: "Our city began operating electric buses three years ago. (FOR)<br>Our city ____________________ electric buses for three years.",
              accepted: ["has operated", "has been operating", "has used"],
              hint: "has operated / has been operating."
            },
            {
              prompt: "When did you purchase this reusable water bottle? (HOW LONG)<br>____________________ had this reusable water bottle?",
              accepted: ["How long have you", "How long have you been having"],
              hint: "How long have you had..."
            }
          ]
        },
        {
          id: "m1a-l3-2",
          level: 3,
          levelLabel: "Level 3 (Challenge)",
          type: "transformation",
          title: "Exercise 2: Error Correction & Syntactic Rewriting",
          instruction: "Complete the sentence to fix the grammar error or rephrase accurately.",
          questions: [
            {
              prompt: "I didn't visit a wind farm since 2019. [Correct the incorrect past tense into Present Perfect]<br>I ____________________ a wind farm since 2019.",
              accepted: ["haven't visited", "have not visited"],
              hint: "haven't visited."
            },
            {
              prompt: "The government passed the reforestation act last month and it is still in effect. (SINCE)<br>The reforestation act ____________________ in effect since last month.",
              accepted: ["has been"],
              hint: "has been."
            }
          ]
        },
        {
          id: "m1a-l3-3",
          level: 3,
          levelLabel: "Level 3 (Challenge)",
          type: "transformation",
          title: "Exercise 3: Contrastive Past and Present Perfect Rephrasing",
          instruction: "Complete using the keyword in brackets.",
          questions: [
            {
              prompt: "The last time we used non-recycled paper was in January. (HAVEN'T)<br>We ____________________ non-recycled paper since January.",
              accepted: ["haven't used", "have not used"],
              hint: "haven't used."
            }
          ]
        }
      ]
    },

    {
      id: "m1-b",
      code: "1B",
      title: "Making History",
      subtitle: "History, Archaeology & Past Perfect Simple vs Past Simple",
      
      grammar: {
        title: "Past Perfect Simple (had + past participle)",
        sections: [
          {
            heading: "The 'Past of the Past'",
            content: `
              <p>When narrating past events and wanting to clarify that an action happened <strong>before</strong> another past moment, use the <strong>Past Perfect Simple</strong>.</p>
              <div class="code-box">
                <span><strong>Structure:</strong> Subject + had + Past Participle (3rd column / -ed)</span>
                <br><em>Example:</em> By the time archaeologists arrived, tomb raiders <strong>had already stolen</strong> the gold.
              </div>
              <p><strong>Essential Connectors:</strong></p>
              <ul>
                <li><strong>By the time:</strong> By the time the fire brigade arrived, the old castle <em>had burnt down</em>.</li>
                <li><strong>After:</strong> After the Romans <em>had conquered</em> the region, they built stone roads.</li>
                <li><strong>Before:</strong> Alexander the Great <em>had conquered</em> Egypt before he marched east.</li>
              </ul>
            `
          }
        ]
      },

      vocabulary: {
        topic: "History & Archaeological Discoveries",
        words: [
          { word: "artefact", phonetic: "/ˈɑː.tə.fækt/", cat: "objecte arqueològic / artefacte", example: "The museum exhibits ancient Greek ceramic artefacts." },
          { word: "civilisation", phonetic: "/ˌsɪv.əl.aɪˈzeɪ.ʃən/", cat: "civilització", example: "The Mayan civilisation built complex astrological observatories." },
          { word: "excavation", phonetic: "/ˌeks.kəˈveɪ.ʃən/", cat: "excavació arqueològica", example: "Archaeologists uncovered Roman ruins during the subway excavation." },
          { word: "monument", phonetic: "/ˈmɒn.jə.mənt/", cat: "monument", example: "The pyramids are the oldest surviving ancient monuments." },
          { word: "conquest", phonetic: "/ˈkɒŋ.kwest/", cat: "conquesta", example: "The Norman conquest of Britain occurred in 1066." },
          { word: "dynasty", phonetic: "/ˈdɪn.ə.sti/", cat: "dinastia", example: "The Tang dynasty oversaw a golden age of poetry and art." },
          { word: "reign", phonetic: "/reɪn/", cat: "regnat", example: "During Queen Victoria's reign, the railway network grew rapidly." },
          { word: "heritage", phonetic: "/ˈher.ɪ.tɪdʒ/", cat: "patrimoni cultural", example: "Preserving historical heritage connects us with our ancestors." }
        ],
        exercises: [
          {
            id: "m1b-vocab-ex1",
            title: "Vocabulary Exercise 1: Historical Terms",
            instruction: "Match each clue to the correct historical concept.",
            questions: [
              {
                prompt: "An object made by a human being, typically of cultural or historical interest:",
                options: ["monument", "artefact", "excavation", "reign"],
                correct: 1,
                explanation: "An 'artefact' is an object of archaeological or cultural significance."
              },
              {
                prompt: "A series of rulers from the same family line:",
                options: ["civilisation", "heritage", "dynasty", "conquest"],
                correct: 2,
                explanation: "A 'dynasty' is a succession of rulers belonging to the same family."
              },
              {
                prompt: "The period during which a monarch rules over a nation:",
                options: ["reign", "monument", "excavation", "artefact"],
                correct: 0,
                explanation: "A monarch's period of sovereignty is called their 'reign'."
              }
            ]
          },
          {
            id: "m1b-vocab-ex2",
            title: "Vocabulary Exercise 2: Sentence Completion",
            instruction: "Complete the sentence with the correct historical term.",
            questions: [
              {
                prompt: "UNESCO protects sites of extraordinary cultural and natural _____ worldwide.",
                accepted: ["heritage"],
                hint: "Term for valuable cultural legacy: heritage."
              },
              {
                prompt: "Careful scientific _____ at the site revealed a buried Roman villa.",
                accepted: ["excavation"],
                hint: "The process of digging up archaeological remains: excavation."
              }
            ]
          }
        ]
      },

      exercises: [
        // Level 1: Foundation
        {
          id: "m1b-l1-1",
          level: 1,
          levelLabel: "Level 1 (Foundation)",
          type: "multiple_choice",
          title: "Exercise 1: Sequencing Events (Which Happened First?)",
          instruction: "Select the option that correctly orders past events.",
          questions: [
            {
              prompt: "When the king died in 1547, he _____ ruled England for 38 years.",
              options: ["had", "has", "did", "was"],
              correct: 0,
              explanation: "The ruling happened prior to his death -> Past Perfect (had ruled)."
            },
            {
              prompt: "The exhibition _____ closed before we arrived at the museum gates.",
              options: ["already", "had already", "has already", "is already"],
              correct: 1,
              explanation: "The closing happened earlier than our arrival -> 'had already'."
            },
            {
              prompt: "The historian discovered that someone _____ the manuscript years earlier.",
              options: ["had altered", "has altered", "alters", "altering"],
              correct: 0,
              explanation: "Earlier past action -> had altered."
            }
          ]
        },
        {
          id: "m1b-l1-2",
          level: 1,
          levelLabel: "Level 1 (Foundation)",
          type: "multiple_choice",
          title: "Exercise 2: Connector Clues with Past Perfect",
          instruction: "Identify the correct verb forms with before, after, and by the time.",
          questions: [
            {
              prompt: "After the archaeologists _____ the site, they catalogued every artefact.",
              options: ["had examined", "have examined", "were examined", "examine"],
              correct: 0,
              explanation: "Action completed before cataloguing -> had examined."
            },
            {
              prompt: "By the time the ancient city was rediscovered, jungle vines _____ the ruins.",
              options: ["had covered", "has covered", "were covered", "covered had"],
              correct: 0,
              explanation: "had covered."
            }
          ]
        },
        {
          id: "m1b-l1-3",
          level: 1,
          levelLabel: "Level 1 (Foundation)",
          type: "multiple_choice",
          title: "Exercise 3: Had + Past Participle Form Check",
          instruction: "Identify the correct past participle for irregular verbs in the Past Perfect.",
          questions: [
            {
              prompt: "The museum guide realized that someone had _____ the ancient coin.",
              options: ["stolen", "stole", "stealed", "steals"],
              correct: 0,
              explanation: "had + stolen (3rd column of steal)."
            },
            {
              prompt: "By noon, the excavators had _____ two meters into the soil.",
              options: ["dug", "digged", "dig", "dag"],
              correct: 0,
              explanation: "had + dug (3rd column of dig)."
            }
          ]
        },

        // Level 2: Standard
        {
          id: "m1b-l2-1",
          level: 2,
          levelLabel: "Level 2 (Standard)",
          type: "fill_blank",
          title: "Exercise 1: Past Simple vs Past Perfect Completion",
          instruction: "Put one verb into the Past Simple and the other into the Past Perfect.",
          questions: [
            {
              prompt: "By the time the documentary finished, my younger brother _____ (already / fall) asleep.",
              accepted: ["had already fallen"],
              hint: "Action completed before the documentary ended: had already fallen."
            },
            {
              prompt: "After the soldiers _____ (win) the battle, they returned to camp.",
              accepted: ["had won"],
              hint: "Winning happened first: had won."
            },
            {
              prompt: "She couldn't buy the museum ticket because she _____ (forget) her student card.",
              accepted: ["had forgotten"],
              hint: "She forgot the card before arriving at the ticket desk: had forgotten."
            },
            {
              prompt: "When the police reached the gallery, the thieves _____ (escape).",
              accepted: ["had escaped"],
              hint: "Thieves left before police arrived: had escaped."
            }
          ]
        },
        {
          id: "m1b-l2-2",
          level: 2,
          levelLabel: "Level 2 (Standard)",
          type: "fill_blank",
          title: "Exercise 2: Historical Narrative Cloze",
          instruction: "Complete the sentences with the Past Simple or Past Perfect.",
          questions: [
            {
              prompt: "The explorer _____ (not realize) that another expedition had reached the temple first.",
              accepted: ["didn't realize", "did not realize", "didn't realise", "did not realise"],
              hint: "Past Simple: didn't realize / realise."
            },
            {
              prompt: "The museum curator showed us the coin that divers _____ (find) in the shipwreck.",
              accepted: ["had found"],
              hint: "Found prior to being shown: had found."
            }
          ]
        },
        {
          id: "m1b-l2-3",
          level: 2,
          levelLabel: "Level 2 (Standard)",
          type: "fill_blank",
          title: "Exercise 3: Cause and Effect in the Past",
          instruction: "Fill in the blank with the Past Perfect.",
          questions: [
            {
              prompt: "The old manuscripts were illegible because dampness _____ (damage) the parchment.",
              accepted: ["had damaged"],
              hint: "had damaged."
            },
            {
              prompt: "We couldn't enter the fortress because the guard _____ (lock) the massive wooden gates.",
              accepted: ["had locked"],
              hint: "had locked."
            }
          ]
        },

        // Level 3: Challenge
        {
          id: "m1b-l3-1",
          level: 3,
          levelLabel: "Level 3 (Challenge)",
          type: "transformation",
          title: "Exercise 1: Synthesis with Temporal Connectors",
          instruction: "Combine the sentences into one using the connector in brackets.",
          questions: [
            {
              prompt: "The archaeologists uncovered the tomb. Then they notified the press. (AFTER)<br>After the archaeologists ____________________, they notified the press.",
              accepted: ["had uncovered the tomb"],
              hint: "had uncovered the tomb."
            },
            {
              prompt: "The guided tour departed at 10:00. Mark arrived at 10:15. (BY THE TIME)<br>By the time Mark arrived, the tour ____________________.",
              accepted: ["had already departed", "had departed", "had already left", "had left"],
              hint: "had already departed / left."
            },
            {
              prompt: "I didn't recognize the ancient ruins because I had never visited them. (FIRST TIME)<br>It was the ____________________ visited the ancient ruins.",
              accepted: ["first time I had ever", "first time I had"],
              hint: "first time I had (ever)..."
            }
          ]
        },
        {
          id: "m1b-l3-2",
          level: 3,
          levelLabel: "Level 3 (Challenge)",
          type: "transformation",
          title: "Exercise 2: Complex Historical Rephrasing",
          instruction: "Rewrite the sentence maintaining the same meaning using the word in brackets.",
          questions: [
            {
              prompt: "The fire destroyed the ancient library before firefighters could extinguish the flames. (HAD)<br>Before firefighters could extinguish the flames, the fire ____________________ the ancient library.",
              accepted: ["had destroyed"],
              hint: "had destroyed."
            }
          ]
        },
        {
          id: "m1b-l3-3",
          level: 3,
          levelLabel: "Level 3 (Challenge)",
          type: "transformation",
          title: "Exercise 3: Narrative Inversion and Past Perfect Combinations",
          instruction: "Complete using the Past Perfect.",
          questions: [
            {
              prompt: "He finished cataloguing the relics. Immediately afterwards, he sent an email to the university. (SOON)<br>As soon as he ____________________ the relics, he sent an email to the university.",
              accepted: ["had catalogued", "had cataloged"],
              hint: "had catalogued / cataloged."
            }
          ]
        }
      ]
    },

    {
      id: "m1-c",
      code: "1C",
      title: "Going the Distance",
      subtitle: "Transport, Commuting & Reflexive Pronouns",
      
      grammar: {
        title: "Reflexive Pronouns",
        sections: [
          {
            heading: "Forms and Usage",
            content: `
              <table class="styled-table">
                <thead>
                  <tr><th>Subject Pronoun</th><th>Reflexive Pronoun</th><th>Meaning / Use</th></tr>
                </thead>
                <tbody>
                  <tr><td>I</td><td><strong>myself</strong></td><td>I looked at <em>myself</em> in the mirror.</td></tr>
                  <tr><td>You (singular)</td><td><strong>yourself</strong></td><td>Take care of <em>yourself</em>!</td></tr>
                  <tr><td>He</td><td><strong>himself</strong></td><td>He hurt <em>himself</em> while cycling.</td></tr>
                  <tr><td>She</td><td><strong>herself</strong></td><td>She bought <em>herself</em> a train ticket.</td></tr>
                  <tr><td>It</td><td><strong>itself</strong></td><td>The app updates <em>itself</em> automatically.</td></tr>
                  <tr><td>We</td><td><strong>ourselves</strong></td><td>We organized the trip <em>ourselves</em>.</td></tr>
                  <tr><td>You (plural)</td><td><strong>yourselves</strong></td><td>Help <em>yourselves</em> to drinks!</td></tr>
                  <tr><td>They</td><td><strong>themselves</strong></td><td>They enjoyed <em>themselves</em> on holiday.</td></tr>
                </tbody>
              </table>
              <div class="tip-box">
                <strong>Crucial Idiomatic Structure:</strong> <em>"by + reflexive pronoun"</em> means <strong>alone / without help</strong>.<br>
                <em>Example:</em> "Did you travel to Scotland <strong>by yourself</strong>?" (= on your own / alone).
              </div>
            `
          }
        ]
      },

      vocabulary: {
        topic: "Transport, Travel & Commuting",
        words: [
          { word: "commute", phonetic: "/kəˈmjuːt/", cat: "desplaçament diari a la feina/escola", example: "His daily commute by electric train takes forty minutes." },
          { word: "fare", phonetic: "/feər/", cat: "tarifa / preu del bitllet", example: "Under-16 students receive discounted bus fares." },
          { word: "departure", phonetic: "/dɪˈpɑː.tʃər/", cat: "sortida (d'un transport)", example: "The airport screen indicated an on-time departure." },
          { word: "passenger", phonetic: "/ˈpæs.ən.dʒər/", cat: "passatger/a", example: "All passengers must fasten their safety belts." },
          { word: "eco-friendly vehicle", phonetic: "/ˌiː.kəʊˈfrend.li ˈviː.ɪ.kəl/", cat: "vehicle ecològic", example: "Electric buses are eco-friendly vehicles that produce zero tailpipe emissions." },
          { word: "route", phonetic: "/ruːt/", cat: "ruta / trajecte", example: "The ferry route across the bay offers stunning city views." }
        ],
        exercises: [
          {
            id: "m1c-vocab-ex1",
            title: "Vocabulary Exercise 1: Transit Terms",
            instruction: "Choose the word that fits each commute scenario.",
            questions: [
              {
                prompt: "The money paid for a journey on public transport:",
                options: ["fare", "commute", "departure", "route"],
                correct: 0,
                explanation: "A 'fare' is the ticket price for travel."
              },
              {
                prompt: "To make the regular journey between one's home and place of work or study:",
                options: ["conserve", "commute", "conquest", "compete"],
                correct: 1,
                explanation: "To 'commute' is to travel regularly between home and school/work."
              }
            ]
          },
          {
            id: "m1c-vocab-ex2",
            title: "Vocabulary Exercise 2: Context Fill",
            instruction: "Complete the sentence with an appropriate transport word.",
            questions: [
              {
                prompt: "The bus driver announced that the next _____ was the central railway station.",
                accepted: ["stop", "destination"],
                hint: "Stop or destination."
              },
              {
                prompt: "Every train _____ must show a validated ticket upon inspection.",
                accepted: ["passenger"],
                hint: "A person riding a transport: passenger."
              }
            ]
          }
        ]
      },

      exercises: [
        // Level 1: Foundation
        {
          id: "m1c-l1-1",
          level: 1,
          levelLabel: "Level 1 (Foundation)",
          type: "multiple_choice",
          title: "Exercise 1: Selecting Reflexive Pronouns",
          instruction: "Select the correct reflexive pronoun matching the subject.",
          questions: [
            {
              prompt: "My sister cut _____ while chopping vegetables for dinner.",
              options: ["himself", "herself", "itself", "myself"],
              correct: 1,
              explanation: "Subject is 'My sister' (she) -> 'herself'."
            },
            {
              prompt: "Did you and Pau plan the entire road trip by _____?",
              options: ["yourself", "yourselves", "themselves", "ourselves"],
              correct: 1,
              explanation: "'You and Pau' is second person plural (you all) -> 'yourselves'."
            },
            {
              prompt: "The automated shuttle drives _____ along the airport terminal route.",
              options: ["themselves", "itself", "himself", "myself"],
              correct: 1,
              explanation: "'The shuttle' is an object (it) -> 'itself'."
            },
            {
              prompt: "I surprised _____ by achieving the highest score on the mock exam.",
              options: ["himself", "myself", "yourself", "themselves"],
              correct: 1,
              explanation: "Subject 'I' requires 'myself'."
            }
          ]
        },
        {
          id: "m1c-l1-2",
          level: 1,
          levelLabel: "Level 1 (Foundation)",
          type: "multiple_choice",
          title: "Exercise 2: Personal Pronouns vs Reflexive Pronouns",
          instruction: "Choose between standard object pronouns (me, him, her) and reflexive pronouns.",
          questions: [
            {
              prompt: "The tour guide introduced _____ before starting the excursion.",
              options: ["himself", "him", "he", "itself"],
              correct: 0,
              explanation: "The guide introduced his own identity -> himself."
            },
            {
              prompt: "We looked at _____ in the shiny glass windows of the skyscraper.",
              options: ["ourselves", "us", "our", "themselves"],
              correct: 0,
              explanation: "We looked at ourselves."
            }
          ]
        },
        {
          id: "m1c-l1-3",
          level: 1,
          levelLabel: "Level 1 (Foundation)",
          type: "multiple_choice",
          title: "Exercise 3: Idiomatic 'By + Reflexive' Selection",
          instruction: "Identify the expression meaning alone or unaided.",
          questions: [
            {
              prompt: "Did she complete the challenging puzzle by _____?",
              options: ["herself", "her", "she", "himself"],
              correct: 0,
              explanation: "by herself."
            }
          ]
        },

        // Level 2: Standard
        {
          id: "m1c-l2-1",
          level: 2,
          levelLabel: "Level 2 (Standard)",
          type: "fill_blank",
          title: "Exercise 1: Reflexives & Idiomatic Uses",
          instruction: "Fill in the blank with the correct reflexive pronoun.",
          questions: [
            {
              prompt: "Please don't help me! I want to solve this challenging equation by _____.",
              accepted: ["myself"],
              hint: "'by myself' means alone / without help."
            },
            {
              prompt: "The teenagers really enjoyed _____ at the adventure water park.",
              accepted: ["themselves"],
              hint: "'The teenagers' (they) -> enjoyed themselves."
            },
            {
              prompt: "We assembled this modular solar generator _____ without hiring technicians.",
              accepted: ["ourselves"],
              hint: "Subject 'We' -> ourselves."
            },
            {
              prompt: "Be careful with that boiling water, David, or you will scald _____!",
              accepted: ["yourself"],
              hint: "Speaking directly to David (you) -> yourself."
            }
          ]
        },
        {
          id: "m1c-l2-2",
          level: 2,
          levelLabel: "Level 2 (Standard)",
          type: "fill_blank",
          title: "Exercise 2: Reflexive Verbs in Travel Scenarios",
          instruction: "Fill in the blank with the appropriate reflexive pronoun.",
          questions: [
            {
              prompt: "The travelers bought _____ some snacks at the train station kiosk.",
              accepted: ["themselves"],
              hint: "The travelers (they) -> themselves."
            },
            {
              prompt: "The smartphone camera shut _____ down because the battery overheated.",
              accepted: ["itself"],
              hint: "The camera (it) -> itself."
            }
          ]
        },
        {
          id: "m1c-l2-3",
          level: 2,
          levelLabel: "Level 2 (Standard)",
          type: "fill_blank",
          title: "Exercise 3: Completing Reflexive Expressions",
          instruction: "Supply the missing reflexive pronoun.",
          questions: [
            {
              prompt: "Welcome to our home, everyone! Please make _____ comfortable.",
              accepted: ["yourselves"],
              hint: "Speaking to everyone (plural you) -> yourselves."
            },
            {
              prompt: "My brother looked at _____ in the mirror before heading to his job interview.",
              accepted: ["himself"],
              hint: "himself."
            }
          ]
        },

        // Level 3: Challenge
        {
          id: "m1c-l3-1",
          level: 3,
          levelLabel: "Level 3 (Challenge)",
          type: "transformation",
          title: "Exercise 1: Rephrasing with 'By + Reflexive'",
          instruction: "Rewrite the sentence using a reflexive pronoun.",
          questions: [
            {
              prompt: "Laura hiked through the Scottish Highlands alone, without any guides. (BY)<br>Laura hiked through the Scottish Highlands ____________________.",
              accepted: ["by herself"],
              hint: "alone = by herself."
            },
            {
              prompt: "No instructor taught Marc how to program in Python; he learned on his own. (TAUGHT)<br>Marc ____________________ how to program in Python.",
              accepted: ["taught himself"],
              hint: "taught himself."
            },
            {
              prompt: "We repaired our bicycles without anyone's assistance. (OWN)<br>We repaired our bicycles on ____________________.",
              accepted: ["our own", "our own without help"],
              hint: "on our own (= by ourselves)."
            }
          ]
        },
        {
          id: "m1c-l3-2",
          level: 3,
          levelLabel: "Level 3 (Challenge)",
          type: "transformation",
          title: "Exercise 2: Emphatic & Reflexive Sentence Rephrasing",
          instruction: "Complete the sentence using an emphatic or reflexive structure.",
          questions: [
            {
              prompt: "The mayor personally signed the eco-transit charter. (HIMSELF)<br>The mayor ____________________ the eco-transit charter.",
              accepted: ["signed", "himself signed"],
              hint: "himself signed / signed ... himself."
            }
          ]
        },
        {
          id: "m1c-l3-3",
          level: 3,
          levelLabel: "Level 3 (Challenge)",
          type: "transformation",
          title: "Exercise 3: Complex Reflexive Rephrasing",
          instruction: "Rewrite the sentence without changing its meaning.",
          questions: [
            {
              prompt: "I prepared dinner completely on my own yesterday evening. (MYSELF)<br>I prepared dinner ____________________ yesterday evening.",
              accepted: ["by myself"],
              hint: "by myself."
            }
          ]
        }
      ]
    }
  ]
};
