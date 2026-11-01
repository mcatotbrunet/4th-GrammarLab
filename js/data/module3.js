// Module 3: The Way We Live (Page 47)
const module3Data = {
  id: "module-3",
  moduleId: 3,
  moduleTitle: "Module 3: The Way We Live",
  page: 47,
  themeColor: "#2563eb", // blue
  sections: [
    {
      id: "m3-a",
      code: "3A",
      title: "Finding Your Roots",
      subtitle: "Family, Ancestry & Present Simple / Past Simple Passive",
      
      grammar: {
        title: "Present Simple & Past Simple Passive",
        sections: [
          {
            heading: "Passive Voice Formulation",
            content: `
              <p>Use the passive voice when the <strong>action itself</strong> or the <strong>receiver of the action</strong> is more significant than the doer, or when the agent is unknown, obvious, or unimportant.</p>
              <div class="comparison-grid">
                <div class="grammar-card">
                  <h4>Present Simple Passive</h4>
                  <p><strong>Formula:</strong> am / is / are + Past Participle (3rd column / -ed)</p>
                  <p><em>Active:</em> Millions of people speak English worldwide.</p>
                  <p><em>Passive:</em> English <strong>is spoken</strong> by millions of people worldwide.</p>
                </div>
                <div class="grammar-card">
                  <h4>Past Simple Passive</h4>
                  <p><strong>Formula:</strong> was / were + Past Participle (3rd column / -ed)</p>
                  <p><em>Active:</em> Antoni Gaudí designed Casa Batlló.</p>
                  <p><em>Passive:</em> Casa Batlló <strong>was designed</strong> by Antoni Gaudí.</p>
                </div>
              </div>
              <div class="tip-box">
                <strong>When to include 'by + agent':</strong> Only include <em>by + agent</em> if it supplies essential, specific information about who performed the action (e.g. <em>by Gaudí, by Marie Curie</em>). If the agent is vague (<em>by someone, by them, by people</em>), omit it completely!
              </div>
            `
          }
        ]
      },

      vocabulary: {
        topic: "Family, Ancestry & Intergenerational Bonds",
        words: [
          { word: "ancestor", phonetic: "/ˈæn.ses.tər/", cat: "avantpassat/da", example: "Her ancestors migrated from southern Italy in the late nineteenth century." },
          { word: "upbringing", phonetic: "/ˈʌpˌbrɪŋ.ɪŋ/", cat: "criança / educació familiar", example: "He credits his disciplined work ethic to a firm, loving upbringing." },
          { word: "generation", phonetic: "/ˌdʒen.əˈreɪ.ʃən/", cat: "generació", example: "Four generations of the family gathered for grandmother's 90th birthday." },
          { word: "inherit", phonetic: "/ɪnˈher.ɪt/", cat: "heretar", example: "She inherited her grandfather's artistic creativity and musical ear." },
          { word: "sibling", phonetic: "/ˈsɪb.lɪŋ/", cat: "germà / germana", example: "Do you have any siblings, or are you an only child?" },
          { word: "descendant", phonetic: "/dɪˈsen.dənt/", cat: "descendent", example: "The villagers are proud descendants of ancient seafaring fishermen." },
          { word: "bond", phonetic: "/bɒnd/", cat: "vincle / lligam afectiu", example: "There is an unbreakable bond of trust between the two siblings." }
        ],
        exercises: [
          {
            id: "m3a-vocab-ex1",
            title: "Vocabulary Exercise 1: Kinship & Heritage Terms",
            instruction: "Match each family concept to its correct definition.",
            questions: [
              {
                prompt: "A person related to you who lived long ago:",
                options: ["ancestor", "sibling", "descendant", "upbringing"],
                correct: 0,
                explanation: "An 'ancestor' is a relative from a past generation."
              },
              {
                prompt: "A person's brother or sister:",
                options: ["ancestor", "descendant", "sibling", "bond"],
                correct: 2,
                explanation: "A 'sibling' is a brother or sister."
              },
              {
                prompt: "To receive money, property, or traits from an ancestor after their death:",
                options: ["commemorate", "inherit", "conserve", "compete"],
                correct: 1,
                explanation: "To 'inherit' means to receive genetically or legally."
              }
            ]
          },
          {
            id: "m3a-vocab-ex2",
            title: "Vocabulary Exercise 2: Words in Family Context",
            instruction: "Fill in the blank with the appropriate vocabulary term.",
            questions: [
              {
                prompt: "Growing up in a multilingual home gave her a unique cultural _____.",
                accepted: ["upbringing"],
                hint: "The care and training received while growing up: upbringing."
              },
              {
                prompt: "Family photo albums help pass memories down from one _____ to the next.",
                accepted: ["generation"],
                hint: "All the people born around the same time: generation."
              }
            ]
          }
        ]
      },

      exercises: [
        // Level 1: Foundation
        {
          id: "m3a-l1-1",
          level: 1,
          levelLabel: "Level 1 (Foundation)",
          type: "multiple_choice",
          title: "Exercise 1: Identifying Present & Past Passive",
          instruction: "Choose the correct passive verb form for each sentence.",
          questions: [
            {
              prompt: "Over three billion emails _____ globally every single minute.",
              options: ["is sent", "are sent", "were sent", "are sending"],
              correct: 1,
              explanation: "Subject 'emails' is plural in the Present Simple -> 'are sent'."
            },
            {
              prompt: "The historic city walls _____ constructed by Roman engineers in the 1st century.",
              options: ["was", "were", "are", "have"],
              correct: 1,
              explanation: "Plural subject 'walls' in the past -> 'were constructed'."
            },
            {
              prompt: "Olive oil _____ produced across southern European Mediterranean countries.",
              options: ["is", "are", "were", "been"],
              correct: 0,
              explanation: "Uncountable noun 'Olive oil' takes the singular present form 'is'."
            },
            {
              prompt: "The first modern smartphone _____ launched in 2007.",
              options: ["is", "was", "were", "has"],
              correct: 1,
              explanation: "Singular subject in a completed past year (2007) -> 'was launched'."
            }
          ]
        },
        {
          id: "m3a-l1-2",
          level: 1,
          levelLabel: "Level 1 (Foundation)",
          type: "multiple_choice",
          title: "Exercise 2: Active or Passive Recognition?",
          instruction: "Determine whether the sentence needs an active or passive verb.",
          questions: [
            {
              prompt: "Millions of tourists _____ the museum every summer.",
              options: ["visit", "are visited", "were visited", "visiting"],
              correct: 0,
              explanation: "The tourists are performing the action -> Active: visit."
            },
            {
              prompt: "The ancient mosaic floor _____ by archaeologists during the excavation.",
              options: ["discovered", "was discovered", "is discovering", "discovers"],
              correct: 1,
              explanation: "The mosaic received the action -> Passive: was discovered."
            },
            {
              prompt: "J.K. Rowling _____ the Harry Potter fantasy novel series.",
              options: ["wrote", "was written", "is written", "has written by"],
              correct: 0,
              explanation: "Rowling is the subject who actively performed the writing -> wrote."
            },
            {
              prompt: "This family recipe _____ down through five generations.",
              options: ["has been passed", "has passed", "passes", "passing"],
              correct: 0,
              explanation: "Passive voice: the recipe has been passed down."
            }
          ]
        },
        {
          id: "m3a-l1-3",
          level: 1,
          levelLabel: "Level 1 (Foundation)",
          type: "multiple_choice",
          title: "Exercise 3: Present Passive vs Past Passive Clues",
          instruction: "Choose the correct auxiliary verb (am/is/are vs was/were).",
          questions: [
            {
              prompt: "In ancient times, salt _____ used as a valuable currency.",
              options: ["was", "is", "are", "were"],
              correct: 0,
              explanation: "Singular past context -> 'was used'."
            },
            {
              prompt: "Catalan and Spanish _____ spoken natively by millions in Catalonia today.",
              options: ["are", "were", "is", "was"],
              correct: 0,
              explanation: "Plural subjects in present time -> 'are spoken'."
            },
            {
              prompt: "The first modern computer _____ invented in the mid-20th century.",
              options: ["was", "is", "has", "were"],
              correct: 0,
              explanation: "Singular past -> 'was invented'."
            }
          ]
        },

        // Level 2: Standard
        {
          id: "m3a-l2-1",
          level: 2,
          levelLabel: "Level 2 (Standard)",
          type: "fill_blank",
          title: "Exercise 1: Forming Present and Past Passive",
          instruction: "Write the correct passive form of the verb in brackets (Present Simple or Past Simple).",
          questions: [
            {
              prompt: "The Mona Lisa _____ (paint) by Leonardo da Vinci in the early 16th century.",
              accepted: ["was painted"],
              hint: "Past Simple Passive: was painted."
            },
            {
              prompt: "Valuable historical artefacts _____ (keep) in secure glass cabinets inside the museum.",
              accepted: ["are kept"],
              hint: "Present Simple Passive plural: are kept."
            },
            {
              prompt: "The Olympic Games _____ (hold) every four years in a different global host city.",
              accepted: ["are held"],
              hint: "Present Simple regular event: are held."
            },
            {
              prompt: "The ancient bridge _____ (destroy) by a violent flood fifty years ago.",
              accepted: ["was destroyed"],
              hint: "Past Simple Passive: was destroyed."
            }
          ]
        },
        {
          id: "m3a-l2-2",
          level: 2,
          levelLabel: "Level 2 (Standard)",
          type: "fill_blank",
          title: "Exercise 2: Present & Past Passive Sentences",
          instruction: "Fill in the blank with the appropriate passive form.",
          questions: [
            {
              prompt: "Traditional textiles _____ (weave) by local artisans in this mountain village.",
              accepted: ["are woven"],
              hint: "are woven."
            },
            {
              prompt: "The stolen jewelry _____ (recover) by detectives three weeks later.",
              accepted: ["was recovered"],
              hint: "was recovered."
            },
            {
              prompt: "Thousands of books _____ (borrow) from this public library every month.",
              accepted: ["are borrowed"],
              hint: "are borrowed."
            },
            {
              prompt: "The Gothic cathedral in Barcelona _____ (construct) over several centuries.",
              accepted: ["was constructed", "was built"],
              hint: "was constructed."
            }
          ]
        },
        {
          id: "m3a-l2-3",
          level: 2,
          levelLabel: "Level 2 (Standard)",
          type: "fill_blank",
          title: "Exercise 3: Irregular Participles in Passive Sentences",
          instruction: "Supply the passive form with the correct irregular past participle (am/is/are/was/were + participle).",
          questions: [
            {
              prompt: "Many castle fortifications in Europe _____ (build) in the Middle Ages.",
              accepted: ["were built"],
              hint: "were built."
            },
            {
              prompt: "English and French _____ (speak) fluently by diplomatic delegates.",
              accepted: ["are spoken"],
              hint: "are spoken."
            },
            {
              prompt: "The famous manifesto _____ (write) by the philosopher in 1848.",
              accepted: ["was written"],
              hint: "was written."
            }
          ]
        },

        // Level 3: Challenge
        {
          id: "m3a-l3-1",
          level: 3,
          levelLabel: "Level 3 (Challenge)",
          type: "transformation",
          title: "Exercise 1: Active to Passive Transformations",
          instruction: "Rewrite the active sentence in the passive voice, maintaining the original meaning.",
          questions: [
            {
              prompt: "A renowned local architect designed our new high school library last year.<br>Our new high school library ____________________ a renowned local architect last year.",
              accepted: ["was designed by"],
              hint: "was designed by."
            },
            {
              prompt: "Do schools teach Latin to teenagers nowadays?<br>_____ Latin _____ to teenagers nowadays?",
              accepted: ["Is / taught", "Is Latin taught", "Is/taught"],
              hint: "Is (Latin) taught..."
            },
            {
              prompt: "Nobody has cleaned the archaeological laboratory today. (BEEN)<br>The archaeological laboratory ____________________ today.",
              accepted: ["has not been cleaned", "hasn't been cleaned"],
              hint: "has not been cleaned."
            }
          ]
        },
        {
          id: "m3a-l3-2",
          level: 3,
          levelLabel: "Level 3 (Challenge)",
          type: "transformation",
          title: "Exercise 2: Question & Negative Passive Transformations",
          instruction: "Transform into the passive voice accurately.",
          questions: [
            {
              prompt: "Did Alexander Graham Bell patent the telephone in 1876?<br>____________________ by Alexander Graham Bell in 1876?",
              accepted: ["Was the telephone patented"],
              hint: "Was the telephone patented."
            },
            {
              prompt: "Students do not use mobile phones in exams. (USED)<br>Mobile phones ____________________ by students in exams.",
              accepted: ["are not used", "aren't used"],
              hint: "are not used / aren't used."
            },
            {
              prompt: "Did William Shakespeare write Hamlet? (WRITTEN)<br>Was Hamlet ____________________ William Shakespeare?",
              accepted: ["written by"],
              hint: "written by."
            }
          ]
        },
        {
          id: "m3a-l3-3",
          level: 3,
          levelLabel: "Level 3 (Challenge)",
          type: "transformation",
          title: "Exercise 3: Complete Passive Voice Mastery",
          instruction: "Rewrite the sentence into passive voice, omitting unnecessary agents.",
          questions: [
            {
              prompt: "They discovered prehistoric cave paintings in Cantabria in 1879. (DISCOVERED)<br>Prehistoric cave paintings ____________________ in Cantabria in 1879.",
              accepted: ["were discovered"],
              hint: "Omit 'by them' -> were discovered."
            },
            {
              prompt: "Someone stole my grandmother's gold necklace last night. (STOLEN)<br>My grandmother's gold necklace ____________________ last night.",
              accepted: ["was stolen"],
              hint: "was stolen."
            },
            {
              prompt: "People speak Portuguese in Brazil and Portugal. (IS)<br>Portuguese ____________________ in Brazil and Portugal.",
              accepted: ["is spoken"],
              hint: "is spoken."
            }
          ]
        }
      ]
    },

    {
      id: "m3-b",
      code: "3B",
      title: "Exploring Customs",
      subtitle: "Traditions, Festivals & Future Simple Passive",
      
      grammar: {
        title: "Future Simple Passive (will be + past participle)",
        sections: [
          {
            heading: "Future Actions with Passive Focus",
            content: `
              <p>Used to express scheduled or predicted future events where the emphasis is placed on what will happen rather than who performs it.</p>
              <div class="code-box">
                <span><strong>Affirmative:</strong> Subject + will be + Past Participle</span>
                <br><em>Example:</em> The traditional summer solstice festival <strong>will be celebrated</strong> next week.
                <br><span><strong>Negative:</strong> Subject + won't be (will not be) + Past Participle</span>
                <br><em>Example:</em> Disposable plastic cups <strong>won't be permitted</strong> at the festival.
                <br><span><strong>Question:</strong> Will + subject + be + Past Participle?</span>
                <br><em>Example:</em> <strong>Will</strong> the national folk dance competition <strong>be broadcast</strong> on television?
              </div>
            `
          }
        ]
      },

      vocabulary: {
        topic: "Customs, Folklore, Rituals & Celebrations",
        words: [
          { word: "pass down", phonetic: "/pɑːs daʊn/", cat: "transmetre de generació en generació", example: "Traditional culinary recipes are passed down across generations." },
          { word: "commemorate", phonetic: "/kəˈmem.ə.reɪt/", cat: "commemorar / retre homenatge", example: "Civic monuments commemorate historical peace treaties." },
          { word: "folklore", phonetic: "/ˈfəʊk.lɔːr/", cat: "folklore / tradicions populars", example: "Catalan folklore is rich in mythical dragons and legendary giants." },
          { word: "customary", phonetic: "/ˈkʌs.tə.mər.i/", cat: "habitual / costum establert", example: "It is customary to remove shoes before entering traditional dwellings in Japan." },
          { word: "feast", phonetic: "/fiːst/", cat: "banquet / àpat festiu", example: "A grand community feast was prepared for the annual harvest festival." }
        ],
        exercises: [
          {
            id: "m3b-vocab-ex1",
            title: "Vocabulary Exercise 1: Traditions",
            instruction: "Select the word matching each cultural custom.",
            questions: [
              {
                prompt: "The traditional beliefs, myths, customs, and stories of a community:",
                options: ["folklore", "upbringing", "commute", "heritage"],
                correct: 0,
                explanation: "'Folklore' refers to traditional lore, beliefs, and myths."
              },
              {
                prompt: "To recall and show respect for someone or something in a ceremony:",
                options: ["commemorate", "inherit", "master", "revolutionise"],
                correct: 0,
                explanation: "To 'commemorate' is to honor the memory of an event or person."
              }
            ]
          },
          {
            id: "m3b-vocab-ex2",
            title: "Vocabulary Exercise 2: Cultural Phrasal Verbs",
            instruction: "Fill in the blank with the phrasal verb meaning to transmit to future generations.",
            questions: [
              {
                prompt: "Ancient storytelling techniques were passed _____ orally through the centuries.",
                accepted: ["down"],
                hint: "Passed down."
              }
            ]
          }
        ]
      },

      exercises: [
        // Level 1: Foundation
        {
          id: "m3b-l1-1",
          level: 1,
          levelLabel: "Level 1 (Foundation)",
          type: "multiple_choice",
          title: "Exercise 1: Future Passive Structure Choice",
          instruction: "Select the option that correctly completes each future passive clause.",
          questions: [
            {
              prompt: "The international cultural festival _____ by over 50,000 visitors next August.",
              options: ["will visit", "will be visited", "is visited", "was visited"],
              correct: 1,
              explanation: "Future Simple Passive: will be + past participle (visited)."
            },
            {
              prompt: "The winners of the regional poetry contest _____ tomorrow at noon.",
              options: ["will announce", "will be announced", "are announced", "announced"],
              correct: 1,
              explanation: "will be announced."
            },
            {
              prompt: "No cars _____ allowed inside the historical district during the parade.",
              options: ["won't be", "will be", "are been", "is"],
              correct: 1,
              explanation: "'No cars' already carries negative meaning -> 'will be allowed'."
            }
          ]
        },
        {
          id: "m3b-l1-2",
          level: 1,
          levelLabel: "Level 1 (Foundation)",
          type: "multiple_choice",
          title: "Exercise 2: Affirmative and Negative Future Passive",
          instruction: "Choose the correct negative or affirmative form.",
          questions: [
            {
              prompt: "Fireworks _____ permitted near the nature park due to fire risk.",
              options: ["won't be", "will not", "aren't being", "not will be"],
              correct: 0,
              explanation: "won't be permitted."
            },
            {
              prompt: "The grand parade _____ by the town council next Saturday.",
              options: ["will be organized", "will organized", "is being organize", "will be organize"],
              correct: 0,
              explanation: "will be organized."
            },
            {
              prompt: "All tickets for the summer solstice concert _____ online next Monday morning.",
              options: ["will be sold", "will sell", "will sold", "are sold by"],
              correct: 0,
              explanation: "will be sold."
            }
          ]
        },
        {
          id: "m3b-l1-3",
          level: 1,
          levelLabel: "Level 1 (Foundation)",
          type: "multiple_choice",
          title: "Exercise 3: Future Passive Auxiliary & Participle Selection",
          instruction: "Select the grammatically correct passive continuation.",
          questions: [
            {
              prompt: "A commemorative statue _____ unveiled in the town square next spring.",
              options: ["will be", "is been", "will", "was been"],
              correct: 0,
              explanation: "will be + past participle."
            },
            {
              prompt: "The cultural heritage funds _____ allocated by the committee next month.",
              options: ["will be", "will have", "will to be", "is"],
              correct: 0,
              explanation: "will be allocated."
            },
            {
              prompt: "The traditional recipes _____ published in a commemorative book.",
              options: ["will be", "will", "are will", "shall been"],
              correct: 0,
              explanation: "will be published."
            }
          ]
        },

        // Level 2: Standard
        {
          id: "m3b-l2-1",
          level: 2,
          levelLabel: "Level 2 (Standard)",
          type: "fill_blank",
          title: "Exercise 1: Forming the Future Simple Passive",
          instruction: "Complete the sentence using the Future Simple Passive of the verb in brackets.",
          questions: [
            {
              prompt: "The historic stone monuments _____ (restore) by specialist preservationists next winter.",
              accepted: ["will be restored"],
              hint: "will be restored."
            },
            {
              prompt: "Single-use plastics _____ (ban) completely at all public celebrations next year.",
              accepted: ["will be banned"],
              hint: "will be banned."
            },
            {
              prompt: "_____ the new museum exhibition _____ (open) by the minister of culture?",
              accepted: ["Will / be opened", "Will be opened", "Will/be opened"],
              hint: "Will (the exhibition) be opened."
            }
          ]
        },
        {
          id: "m3b-l2-2",
          level: 2,
          levelLabel: "Level 2 (Standard)",
          type: "fill_blank",
          title: "Exercise 2: Future Event Schedules in Passive",
          instruction: "Write the future passive verb form.",
          questions: [
            {
              prompt: "The festival trophies _____ (present) by the town mayor at 8:00 pm.",
              accepted: ["will be presented"],
              hint: "will be presented."
            },
            {
              prompt: "An inaugural keynote speech _____ (give) by the guest speaker tomorrow.",
              accepted: ["will be given"],
              hint: "will be given."
            },
            {
              prompt: "A hands-on folk dance workshop _____ (hold) in the sports hall next Friday.",
              accepted: ["will be held"],
              hint: "will be held."
            }
          ]
        },
        {
          id: "m3b-l2-3",
          level: 2,
          levelLabel: "Level 2 (Standard)",
          type: "fill_blank",
          title: "Exercise 3: Future Negative and Question Passive",
          instruction: "Complete with negative or question Future Simple Passive.",
          questions: [
            {
              prompt: "Glass containers _____ (not allow) inside the concert grounds.",
              accepted: ["won't be allowed", "will not be allowed"],
              hint: "won't be allowed / will not be allowed."
            },
            {
              prompt: "_____ commemorative badges _____ (give) to all participants?",
              accepted: ["Will / be given", "Will be given", "Will/be given"],
              hint: "Will (badges) be given."
            },
            {
              prompt: "The ancient folklore documentary _____ (broadcast) worldwide on national television.",
              accepted: ["will be broadcast", "will be broadcasted"],
              hint: "will be broadcast."
            }
          ]
        },

        // Level 3: Challenge
        {
          id: "m3b-l3-1",
          level: 3,
          levelLabel: "Level 3 (Challenge)",
          type: "transformation",
          title: "Exercise 1: Active to Future Passive Rephrasing",
          instruction: "Rewrite the active future statement into the passive voice.",
          questions: [
            {
              prompt: "The secondary school will organize an intercultural food fair next month.<br>An intercultural food fair ____________________ next month.",
              accepted: ["will be organized", "will be organised"],
              hint: "will be organized / organised."
            },
            {
              prompt: "Volunteers will distribute the festival programmes at the main entrance gates.<br>The festival programmes ____________________ by volunteers at the main entrance gates.",
              accepted: ["will be distributed"],
              hint: "will be distributed."
            },
            {
              prompt: "The culinary jury will evaluate each dish according to traditional criteria.<br>Each dish ____________________ by the culinary jury according to traditional criteria.",
              accepted: ["will be evaluated"],
              hint: "will be evaluated."
            }
          ]
        },
        {
          id: "m3b-l3-2",
          level: 3,
          levelLabel: "Level 3 (Challenge)",
          type: "transformation",
          title: "Exercise 2: Interrogative Future Passive Synthesis",
          instruction: "Transform into a future passive question.",
          questions: [
            {
              prompt: "Will the committee broadcast the celebration live on the internet? (BROADCAST)<br>Will the celebration ____________________ live on the internet?",
              accepted: ["be broadcast", "be broadcasted"],
              hint: "be broadcast."
            },
            {
              prompt: "Will the organizers cancel the open-air fireworks if it rains? (BE)<br>Will the open-air fireworks ____________________ if it rains?",
              accepted: ["be cancelled", "be canceled"],
              hint: "be cancelled / canceled."
            },
            {
              prompt: "When will the town council build the new youth community center? (BUILT)<br>When will the new youth community center ____________________?",
              accepted: ["be built"],
              hint: "be built."
            }
          ]
        },
        {
          id: "m3b-l3-3",
          level: 3,
          levelLabel: "Level 3 (Challenge)",
          type: "transformation",
          title: "Exercise 3: Future Passive Negative & Complex Rephrasing",
          instruction: "Complete the second sentence so that it means the same as the first.",
          questions: [
            {
              prompt: "They won't serve meat at the vegan community banquet. (BE)<br>Meat ____________________ at the vegan community banquet.",
              accepted: ["won't be served", "will not be served"],
              hint: "won't be served."
            },
            {
              prompt: "We will preserve these ancient traditions for future generations. (PRESERVED)<br>These ancient traditions ____________________ for future generations.",
              accepted: ["will be preserved"],
              hint: "will be preserved."
            },
            {
              prompt: "Experts will teach traditional lace-making techniques in the morning session. (TAUGHT)<br>Traditional lace-making techniques ____________________ by experts in the morning session.",
              accepted: ["will be taught"],
              hint: "will be taught."
            }
          ]
        }
      ]
    },

    {
      id: "m3-c",
      code: "3C",
      title: "Going Global",
      subtitle: "Across Cultures, Etiquette & Modals in the Passive",
      
      grammar: {
        title: "Modals in the Passive & General Passive Review",
        sections: [
          {
            heading: "Passive Formulation with Modal Verbs",
            content: `
              <p>When combining modal auxiliaries (<em>can, could, must, should, may, might</em>) with the passive voice, follow this straightforward structure:</p>
              <div class="code-box">
                <span><strong>Formula:</strong> Modal Verb + <strong>be</strong> + Past Participle (3rd column / -ed)</span>
              </div>
              <ul>
                <li><em>Local cultural etiquette <strong>must be respected</strong> by international tourists.</em> (Obligation)</li>
                <li><em>Foreign languages <strong>should be practiced</strong> daily in immersive environments.</em> (Advice)</li>
                <li><em>Cultural misunderstandings <strong>can be avoided</strong> through open dialogue.</em> (Possibility)</li>
              </ul>
            `
          }
        ]
      },

      vocabulary: {
        topic: "Global Societies, Multiculturalism & Etiquette",
        words: [
          { word: "multicultural", phonetic: "/ˌmʌl.tiˈkʌl.tʃər.əl/", cat: "multicultural", example: "London and Barcelona are dynamic, vibrant multicultural hubs." },
          { word: "etiquette", phonetic: "/ˈet.ɪ.ket/", cat: "normes de cortesia / protocol", example: "Learning business dining etiquette avoids embarrassing misunderstandings." },
          { word: "stereotype", phonetic: "/ˈster.i.ə.taɪp/", cat: "estereotip / prejudici", example: "Student exchange initiatives help dismantle unfair national stereotypes." },
          { word: "cross-cultural", phonetic: "/ˌkrɒsˈkʌl.tʃər.əl/", cat: "intercultural", example: "Successful international teamwork requires cross-cultural sensitivity." }
        ],
        exercises: [
          {
            id: "m3c-vocab-ex1",
            title: "Vocabulary Exercise 1: Cross-cultural Concepts",
            instruction: "Match each global concept to its definition.",
            questions: [
              {
                prompt: "The customary code of polite behavior in society or among members of a profession:",
                options: ["etiquette", "stereotype", "folklore", "heritage"],
                correct: 0,
                explanation: "'Etiquette' refers to socially conventional rules of polite conduct."
              },
              {
                prompt: "A widely held but fixed and oversimplified image or idea of a particular type of person:",
                options: ["stereotype", "etiquette", "multicultural", "ancestor"],
                correct: 0,
                explanation: "A 'stereotype' is a generalized, often inaccurate assumption."
              }
            ]
          },
          {
            id: "m3c-vocab-ex2",
            title: "Vocabulary Exercise 2: Contextual Practice",
            instruction: "Fill in the blank with the appropriate cultural term.",
            questions: [
              {
                prompt: "A society that encompasses diverse cultural traditions is described as _____.",
                accepted: ["multicultural"],
                hint: "multicultural."
              }
            ]
          }
        ]
      },

      exercises: [
        // Level 1: Foundation
        {
          id: "m3c-l1-1",
          level: 1,
          levelLabel: "Level 1 (Foundation)",
          type: "multiple_choice",
          title: "Exercise 1: Modal Passive Formation",
          instruction: "Select the correct modal passive construction.",
          questions: [
            {
              prompt: "Sacred customs and historical dress codes _____ strictly followed in temples.",
              options: ["must be", "must to be", "must been", "must being"],
              correct: 0,
              explanation: "Modal + be + past participle: must be followed."
            },
            {
              prompt: "Intercultural tolerance _____ encouraged in 21st-century schools.",
              options: ["should be", "should being", "should to be", "should was"],
              correct: 0,
              explanation: "should be encouraged."
            },
            {
              prompt: "Valuable documents _____ kept in a secure fireproof vault.",
              options: ["can be", "can to be", "can been", "can being"],
              correct: 0,
              explanation: "can be kept."
            }
          ]
        },
        {
          id: "m3c-l1-2",
          level: 1,
          levelLabel: "Level 1 (Foundation)",
          type: "multiple_choice",
          title: "Exercise 2: Modal Passive Meanings",
          instruction: "Choose the modal passive matching the intended meaning (obligation, prohibition, or advice).",
          questions: [
            {
              prompt: "Endangered languages _____ preserved for future generations (advice/recommendation).",
              options: ["ought to be", "might to be", "can't be", "were to be"],
              correct: 0,
              explanation: "ought to be (= should be)."
            },
            {
              prompt: "Historical ruins _____ damaged by irresponsible graffiti (prohibition).",
              options: ["must not be", "can be", "should be", "are been"],
              correct: 0,
              explanation: "must not be (= prohibition)."
            },
            {
              prompt: "These folklore songs _____ downloaded freely for educational purposes (possibility).",
              options: ["may be", "must to be", "have been", "ought"],
              correct: 0,
              explanation: "may be (= permitted/possible)."
            }
          ]
        },
        {
          id: "m3c-l1-3",
          level: 1,
          levelLabel: "Level 1 (Foundation)",
          type: "multiple_choice",
          title: "Exercise 3: Modals in Passive vs Active Voice",
          instruction: "Identify whether the sentence requires an active modal or a passive modal.",
          questions: [
            {
              prompt: "Tourists _____ local community customs with courtesy.",
              options: ["should treat", "should be treated", "should treated", "should to treat"],
              correct: 0,
              explanation: "Active: tourists perform the action -> should treat."
            },
            {
              prompt: "The historic heritage _____ with utmost care and respect.",
              options: ["should be treated", "should treat", "treats", "is treating"],
              correct: 0,
              explanation: "Passive: heritage receives the action -> should be treated."
            },
            {
              prompt: "You _____ flash photography inside the art gallery.",
              options: ["must not use", "must not be used", "mustn't to use", "not must use"],
              correct: 0,
              explanation: "Active: You must not use flash photography."
            }
          ]
        },

        // Level 2: Standard
        {
          id: "m3c-l2-1",
          level: 2,
          levelLabel: "Level 2 (Standard)",
          type: "fill_blank",
          title: "Exercise 1: Inserting Modal Passives",
          instruction: "Complete the sentence with the modal in brackets and the passive form of the verb.",
          questions: [
            {
              prompt: "Historical buildings _____ (can / protect) by strict conservation laws.",
              accepted: ["can be protected"],
              hint: "can be protected."
            },
            {
              prompt: "Cultural misunderstandings _____ (should / prevent) through open communication.",
              accepted: ["should be prevented"],
              hint: "should be prevented."
            },
            {
              prompt: "Safety regulations _____ (must / follow) by all factory personnel.",
              accepted: ["must be followed"],
              hint: "must be followed."
            }
          ]
        },
        {
          id: "m3c-l2-2",
          level: 2,
          levelLabel: "Level 2 (Standard)",
          type: "fill_blank",
          title: "Exercise 2: Modal Passive Rules",
          instruction: "Write the modal passive form of the verb in brackets.",
          questions: [
            {
              prompt: "Museum display cases _____ (must not / touch) by visitors.",
              accepted: ["must not be touched", "mustn't be touched"],
              hint: "must not be touched."
            },
            {
              prompt: "Archaeological discoveries _____ (should / report) to authorities immediately.",
              accepted: ["should be reported"],
              hint: "should be reported."
            },
            {
              prompt: "Ancient folklore myths _____ (can / find) in old library archives.",
              accepted: ["can be found"],
              hint: "can be found."
            }
          ]
        },
        {
          id: "m3c-l2-3",
          level: 2,
          levelLabel: "Level 2 (Standard)",
          type: "fill_blank",
          title: "Exercise 3: Modal Passives in Global Contexts",
          instruction: "Supply the passive modal structure using the prompt verbs.",
          questions: [
            {
              prompt: "Stereotypes _____ (could / eliminate) through student exchange programmes.",
              accepted: ["could be eliminated"],
              hint: "could be eliminated."
            },
            {
              prompt: "Valuable heirlooms _____ (ought to / safeguard) in museum vaults.",
              accepted: ["ought to be safeguarded"],
              hint: "ought to be safeguarded."
            },
            {
              prompt: "Traditional ceremonies _____ (may / celebrate) in outdoor amphitheaters.",
              accepted: ["may be celebrated"],
              hint: "may be celebrated."
            }
          ]
        },

        // Level 3: Challenge
        {
          id: "m3c-l3-1",
          level: 3,
          levelLabel: "Level 3 (Challenge)",
          type: "transformation",
          title: "Exercise 1: Comprehensive Passive Transformations",
          instruction: "Transform the active modal sentence into the passive voice.",
          questions: [
            {
              prompt: "We must preserve our intangible culinary heritage. (BE)<br>Our intangible culinary heritage ____________________.",
              accepted: ["must be preserved"],
              hint: "must be preserved."
            },
            {
              prompt: "Citizens ought to respect different cultural perspectives. (OUGHT)<br>Different cultural perspectives ____________________.",
              accepted: ["ought to be respected"],
              hint: "ought to be respected."
            },
            {
              prompt: "Schools can organize multicultural workshops to promote tolerance. (ORGANIZED)<br>Multicultural workshops ____________________ by schools to promote tolerance.",
              accepted: ["can be organized", "can be organised"],
              hint: "can be organized / organised."
            }
          ]
        },
        {
          id: "m3c-l3-2",
          level: 3,
          levelLabel: "Level 3 (Challenge)",
          type: "transformation",
          title: "Exercise 2: Advanced Modal Passive Conversion",
          instruction: "Rewrite the sentence into a modal passive.",
          questions: [
            {
              prompt: "You can download the intercultural festival guide from our website. (DOWNLOADED)<br>The intercultural festival guide ____________________ from our website.",
              accepted: ["can be downloaded"],
              hint: "can be downloaded."
            },
            {
              prompt: "You should not discard traditional wisdom lightly. (SHOULD)<br>Traditional wisdom ____________________ lightly.",
              accepted: ["should not be discarded", "shouldn't be discarded"],
              hint: "should not be discarded."
            },
            {
              prompt: "They have to conclude the cultural festival before midnight. (HAS)<br>The cultural festival ____________________ before midnight.",
              accepted: ["has to be concluded"],
              hint: "has to be concluded."
            }
          ]
        },
        {
          id: "m3c-l3-3",
          level: 3,
          levelLabel: "Level 3 (Challenge)",
          type: "transformation",
          title: "Exercise 3: Multi-Tense Passive Mastery Synthesis",
          instruction: "Rewrite the sentences into the appropriate passive structure (present, past, future, or modal).",
          questions: [
            {
              prompt: "They will announce the cultural ambassador next week. (ANNOUNCED)<br>The cultural ambassador ____________________ next week.",
              accepted: ["will be announced"],
              hint: "will be announced."
            },
            {
              prompt: "People throughout the world celebrate the New Year with fireworks. (CELEBRATED)<br>The New Year ____________________ with fireworks throughout the world.",
              accepted: ["is celebrated"],
              hint: "is celebrated."
            },
            {
              prompt: "The archaeologists restored the medieval fortress in 2018. (RESTORED)<br>The medieval fortress ____________________ in 2018.",
              accepted: ["was restored"],
              hint: "was restored."
            }
          ]
        }
      ]
    }
  ]
};
