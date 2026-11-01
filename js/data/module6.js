// Module 6: Trending Now (Page 99)
const module6Data = {
  id: "module-6",
  moduleId: 6,
  moduleTitle: "Module 6: Trending Now",
  page: 99,
  themeColor: "#ec4899", // pink / rose
  sections: [
    {
      id: "m6-a",
      code: "6A",
      title: "Dressing Up",
      subtitle: "Fashion, Clothes & Reported Statements",
      
      grammar: {
        title: "Reported Speech: Statements",
        sections: [
          {
            heading: "Direct to Indirect Speech: Tense Backshift",
            content: `
              <p>When reporting what somebody said in the past (<em>He said (that)... / She told me (that)...</em>), tenses shift one step backwards into the past (<strong>tense backshift</strong>):</p>
              <table class="styled-table">
                <thead>
                  <tr><th>Direct Speech</th><th>Reported (Indirect) Speech</th></tr>
                </thead>
                <tbody>
                  <tr><td>Present Simple: "I <em>love</em> vintage jackets."</td><td>Past Simple: She said she <em>loved</em> vintage jackets.</td></tr>
                  <tr><td>Present Continuous: "I <em>am designing</em> an outfit."</td><td>Past Continuous: He said he <em>was designing</em> an outfit.</td></tr>
                  <tr><td>Past Simple / Pres. Perfect: "I <em>bought</em> shoes."</td><td>Past Perfect: She said she <em>had bought</em> shoes.</td></tr>
                  <tr><td>will / can: "I <em>will help</em> you."</td><td>would / could: He said he <em>would help</em> me.</td></tr>
                </tbody>
              </table>
              <div class="tip-box">
                <strong>Time, Place & Pronoun Adjustments:</strong><br>
                now &rarr; then | today &rarr; that day | yesterday &rarr; the day before | tomorrow &rarr; the next day / the following day | here &rarr; there | this &rarr; that | these &rarr; those
              </div>
            `
          }
        ]
      },

      vocabulary: {
        topic: "Fashion, Clothes, Trends & Sustainability",
        words: [
          { word: "vintage", phonetic: "/ˈvɪn.tɪdʒ/", cat: "vintage / clàssic d'època", example: "Buying authentic vintage clothes in thrift shops reduces textile waste." },
          { word: "outfit", phonetic: "/ˈaʊt.fɪt/", cat: "conjunt de roba", example: "She coordinated a stylish outfit for the school graduation ceremony." },
          { word: "trendsetter", phonetic: "/ˈtrendˌset.ər/", cat: "creador/a de tendències", example: "Popular music artists are frequently major fashion trendsetters." },
          { word: "sustainable fashion", phonetic: "/səˈsteɪ.nə.bəl ˈfæʃ.ən/", cat: "moda sostenible", example: "Sustainable fashion utilizes organic cotton and recycled polymers." },
          { word: "catwalk", phonetic: "/ˈkæt.wɔːk/", cat: "passarel·la de moda", example: "High-fashion models presented winter coats along the illuminated catwalk." }
        ],
        exercises: [
          {
            id: "m6a-vocab-ex1",
            title: "Vocabulary Exercise 1: Style & Fashion",
            instruction: "Match each fashion term to its definition.",
            questions: [
              {
                prompt: "Clothing from a previous era, typically prized for its quality or nostalgic appeal:",
                options: ["vintage", "outfit", "catwalk", "gadget"],
                correct: 0,
                explanation: "'Vintage' clothes originate from previous decades."
              },
              {
                prompt: "A set of clothes worn together for a particular occasion or activity:",
                options: ["outfit", "trendsetter", "catwalk", "biodiversity"],
                correct: 0,
                explanation: "An 'outfit' is a coordinated set of garments."
              }
            ]
          },
          {
            id: "m6a-vocab-ex2",
            title: "Vocabulary Exercise 2: Context Fill",
            instruction: "Fill in the blank with an appropriate fashion term.",
            questions: [
              {
                prompt: "Promoting _____ fashion prevents tons of discarded garments from filling landfills.",
                accepted: ["sustainable"],
                hint: "sustainable."
              }
            ]
          }
        ]
      },

      exercises: [
        // Level 1: Foundation
        {
          id: "m6a-l1-1",
          level: 1,
          levelLabel: "Level 1 (Foundation)",
          type: "multiple_choice",
          title: "Exercise 1: Reported Tense Backshift Selection",
          instruction: "Select the option that correctly reports each direct statement.",
          questions: [
            {
              prompt: "'I want to purchase these recycled sneakers,' said Leo.<br>Leo said that he _____ to purchase those sneakers.",
              options: ["wanted", "wants", "had wanted", "will want"],
              correct: 0,
              explanation: "Present Simple (want) shifts to Past Simple (wanted)."
            },
            {
              prompt: "'We are attending London Fashion Week tomorrow,' they explained.<br>They explained that they _____ London Fashion Week the following day.",
              options: ["are attending", "were attending", "attended", "had attended"],
              correct: 1,
              explanation: "Present Continuous (are attending) shifts to Past Continuous (were attending)."
            },
            {
              prompt: "'I will launch my own ethical brand,' promised Maya.<br>Maya promised that she _____ launch her own ethical brand.",
              options: ["would", "will", "could", "can"],
              correct: 0,
              explanation: "Modal 'will' shifts to 'would'."
            }
          ]
        },
        {
          id: "m6a-l1-2",
          level: 1,
          levelLabel: "Level 1 (Foundation)",
          type: "multiple_choice",
          title: "Exercise 2: Time Marker Shift Recognition",
          instruction: "Select the appropriate time marker shift in reported speech.",
          questions: [
            {
              prompt: "In reported speech, 'yesterday' becomes:",
              options: ["the day before", "the next day", "that day", "now"],
              correct: 0,
              explanation: "yesterday -> the day before (or the previous day)."
            },
            {
              prompt: "In reported speech, 'now' becomes:",
              options: ["then", "tomorrow", "today", "here"],
              correct: 0,
              explanation: "now -> then."
            },
            {
              prompt: "In reported speech, 'tomorrow' becomes:",
              options: ["the next day", "the day before", "that day", "then"],
              correct: 0,
              explanation: "tomorrow -> the next day (or the following day)."
            }
          ]
        },
        {
          id: "m6a-l1-3",
          level: 1,
          levelLabel: "Level 1 (Foundation)",
          type: "multiple_choice",
          title: "Exercise 3: Say vs Tell Selection",
          instruction: "Choose between 'said' and 'told' according to grammatical structure.",
          questions: [
            {
              prompt: "Emma _____ me that vintage denim jackets were trending again.",
              options: ["told", "said", "spoke", "asked"],
              correct: 0,
              explanation: "Followed by a personal indirect object (me) -> told."
            },
            {
              prompt: "The fashion influencer _____ that fast fashion harms the environment.",
              options: ["said", "told", "talked", "told to"],
              correct: 0,
              explanation: "No personal object -> said that..."
            },
            {
              prompt: "Lucas _____ us he had bought second-hand trainers online.",
              options: ["told", "said", "spoke to", "stated to"],
              correct: 0,
              explanation: "told us."
            }
          ]
        },

        // Level 2: Standard
        {
          id: "m6a-l2-1",
          level: 2,
          levelLabel: "Level 2 (Standard)",
          type: "fill_blank",
          title: "Exercise 1: Completing Reported Statements",
          instruction: "Complete the sentence with the correct reported verb form.",
          questions: [
            {
              prompt: "'I have never worn formal suits,' admitted Marc.<br>Marc told us that he _____ (never / wear) formal suits.",
              accepted: ["had never worn"],
              hint: "Present Perfect shifts to Past Perfect: had never worn."
            },
            {
              prompt: "'We designed these outfits ourselves,' the teens stated.<br>The teens stated that they _____ (design) those outfits themselves.",
              accepted: ["had designed", "designed"],
              hint: "Past Simple shifts to Past Perfect: had designed."
            },
            {
              prompt: "'I can sew alterations by hand,' said Clara.<br>Clara said that she _____ (can) sew alterations by hand.",
              accepted: ["could"],
              hint: "can shifts to could."
            }
          ]
        },
        {
          id: "m6a-l2-2",
          level: 2,
          levelLabel: "Level 2 (Standard)",
          type: "fill_blank",
          title: "Exercise 2: Reported Statements with Time Words",
          instruction: "Complete the sentence with the reported verb and pronoun forms.",
          questions: [
            {
              prompt: "'I am writing an article about fast fashion today,' said Daniel.<br>Daniel said he _____ (write) an article about fast fashion that day.",
              accepted: ["was writing"],
              hint: "was writing."
            },
            {
              prompt: "'We must finish sewing these dresses tonight,' the tailors said.<br>The tailors said they _____ (must) finish sewing those dresses that night.",
              accepted: ["had to"],
              hint: "must shifts to had to."
            },
            {
              prompt: "'I will show you my spring designs next week,' promised Sofia.<br>Sofia told me she _____ (will) show me her spring designs the following week.",
              accepted: ["would"],
              hint: "will shifts to would."
            }
          ]
        },
        {
          id: "m6a-l2-3",
          level: 2,
          levelLabel: "Level 2 (Standard)",
          type: "fill_blank",
          title: "Exercise 3: Modal Verbs Backshift Practice",
          instruction: "Complete the reported sentences shifting the modal verbs correctly.",
          questions: [
            {
              prompt: "'You may try on this embroidered jacket,' the shop assistant said.<br>The assistant said I _____ (may) try on that embroidered jacket.",
              accepted: ["might"],
              hint: "may shifts to might."
            },
            {
              prompt: "'I can't attend the fashion runway show tomorrow,' Paula said.<br>Paula said she _____ (cannot) attend the runway show the next day.",
              accepted: ["couldn't", "could not"],
              hint: "cannot shifts to couldn't."
            },
            {
              prompt: "'Sustainable fashion will change the retail industry,' the designer claimed.<br>The designer claimed that sustainable fashion _____ (will) change the retail industry.",
              accepted: ["would"],
              hint: "will shifts to would."
            }
          ]
        },

        // Level 3: Challenge
        {
          id: "m6a-l3-1",
          level: 3,
          levelLabel: "Level 3 (Challenge)",
          type: "transformation",
          title: "Exercise 1: Comprehensive Direct to Indirect Conversion",
          instruction: "Transform the direct speech into reported speech with all necessary pronoun and time adjustments.",
          questions: [
            {
              prompt: "'I bought this denim jacket yesterday,' Clara told me.<br>Clara told me that ____________________ denim jacket the day before.",
              accepted: ["she had bought that", "she'd bought that"],
              hint: "she had bought that (I -> she, bought -> had bought, this -> that)."
            },
            {
              prompt: "'We will open our vintage store here next week,' they announced.<br>They announced that ____________________ vintage store there the following week.",
              accepted: ["they would open their"],
              hint: "they would open their."
            },
            {
              prompt: "'I haven't chosen my graduation suit yet,' Kevin confessed.<br>Kevin confessed that ____________________ his graduation suit yet.",
              accepted: ["he had not chosen", "he hadn't chosen"],
              hint: "he hadn't chosen."
            }
          ]
        },
        {
          id: "m6a-l3-2",
          level: 3,
          levelLabel: "Level 3 (Challenge)",
          type: "transformation",
          title: "Exercise 2: Complex Pronoun & Backshift Synthesis",
          instruction: "Complete the indirect speech transformation.",
          questions: [
            {
              prompt: "'You haven't shown me your sketches,' the designer said to me.<br>The designer told me that ____________________ my sketches.",
              accepted: ["I hadn't shown him", "I hadn't shown her", "I had not shown him", "I had not shown her"],
              hint: "I hadn't shown him / her."
            },
            {
              prompt: "'We are collaborating with an organic cotton grower here now,' the brand explained.<br>The brand explained that they ____________________ an organic cotton grower there then.",
              accepted: ["were collaborating with"],
              hint: "were collaborating with."
            },
            {
              prompt: "'I saw this trend on social media two weeks ago,' Laura said.<br>Laura said she had seen that trend on social media ____________________.",
              accepted: ["two weeks before", "two weeks previously"],
              hint: "two weeks before / previously."
            }
          ]
        },
        {
          id: "m6a-l3-3",
          level: 3,
          levelLabel: "Level 3 (Challenge)",
          type: "transformation",
          title: "Exercise 3: Full Indirect Statement Rephrasing",
          instruction: "Rewrite the sentence into reported speech using 'told' or 'said'.",
          questions: [
            {
              prompt: "'I cannot deliver these tailored garments today,' the seamstress said to the client. (TOLD)<br>The seamstress ____________________ deliver those tailored garments that day.",
              accepted: ["told the client she could not", "told the client that she couldn't", "told the client she couldn't"],
              hint: "told the client (that) she couldn't / could not."
            },
            {
              prompt: "'These sneakers were handmade by local artisans,' the seller told us. (HAD)<br>The seller told us that those sneakers ____________________ by local artisans.",
              accepted: ["had been handmade"],
              hint: "had been handmade."
            },
            {
              prompt: "'I will donate all my unwanted clothes to charity tomorrow,' Marc declared. (WOULD)<br>Marc declared that ____________________ all his unwanted clothes to charity the next day.",
              accepted: ["he would donate"],
              hint: "he would donate."
            }
          ]
        }
      ]
    },

    {
      id: "m6-b",
      code: "6B",
      title: "Going Online",
      subtitle: "Social Media, Digital Footprints & Reported Questions",
      
      grammar: {
        title: "Reported Questions (Indirect Questions)",
        sections: [
          {
            heading: "Word Order and Eliminating Auxiliaries",
            content: `
              <p>When reporting questions in indirect speech, <strong>the clause ceases to be a question</strong>! Therefore:</p>
              <div class="tip-box">
                <ol>
                  <li>Word order reverts to affirmative statements: <strong>Subject + Verb</strong> (never auxiliary-subject inversion).</li>
                  <li><strong>Eliminate auxiliary do, does, did completely!</strong></li>
                  <li><strong>Never use a question mark (?)</strong> at the end!</li>
                </ol>
              </div>
              <div class="comparison-grid">
                <div class="grammar-card">
                  <h4>Yes/No Questions (Use IF or WHETHER)</h4>
                  <p><em>Direct:</em> "Do you use TikTok?"</p>
                  <p><em>Reported:</em> She asked me <strong>if / whether I used</strong> TikTok.</p>
                </div>
                <div class="grammar-card">
                  <h4>Wh- Questions (Keep the Question Word)</h4>
                  <p><em>Direct:</em> "Where did you record that viral video?"</p>
                  <p><em>Reported:</em> He asked <strong>where I had recorded</strong> that viral video.</p>
                </div>
              </div>
            `
          }
        ]
      },

      vocabulary: {
        topic: "Social Networks, Algorithms & Digital Creators",
        words: [
          { word: "algorithm", phonetic: "/ˈæl.ɡə.rɪ.ðəm/", cat: "algorisme", example: "The social media algorithm personalizes suggested video reels." },
          { word: "content creator", phonetic: "/ˈkɒn.tent kriˌeɪ.tər/", cat: "creador/a de contingut", example: "Many teenagers produce educational clips as digital content creators." },
          { word: "digital footprint", phonetic: "/ˌdɪdʒ.ɪ.təl ˈfʊt.prɪnt/", cat: "petjada digital", example: "Every photo posted online forms part of your permanent digital footprint." },
          { word: "privacy settings", phonetic: "/ˈprɪv.ə.si ˌset.ɪŋz/", cat: "configuració de privadesa", example: "Review account privacy settings to keep personal profiles secure." },
          { word: "viral", phonetic: "/ˈvaɪə.rəl/", cat: "viral", example: "The youth choir's performance went viral, gathering millions of shares." }
        ],
        exercises: [
          {
            id: "m6b-vocab-ex1",
            title: "Vocabulary Exercise 1: Digital Terms",
            instruction: "Identify the digital concept from each description.",
            questions: [
              {
                prompt: "A set of mathematical rules followed by computers to calculate and recommend content:",
                options: ["algorithm", "prototype", "artefact", "heritage"],
                correct: 0,
                explanation: "An 'algorithm' determines what content appears in feeds."
              },
              {
                prompt: "The information about a person that exists on the internet as a result of their online activity:",
                options: ["digital footprint", "privacy settings", "content creator", "commute"],
                correct: 0,
                explanation: "A 'digital footprint' is your online trail."
              }
            ]
          },
          {
            id: "m6b-vocab-ex2",
            title: "Vocabulary Exercise 2: Context Fill",
            instruction: "Fill in the blank with an appropriate social media term.",
            questions: [
              {
                prompt: "The video accumulated ten million views overnight and went totally _____.",
                accepted: ["viral"],
                hint: "viral."
              }
            ]
          }
        ]
      },

      exercises: [
        // Level 1: Foundation
        {
          id: "m6b-l1-1",
          level: 1,
          levelLabel: "Level 1 (Foundation)",
          type: "multiple_choice",
          title: "Exercise 1: Reported Questions Word Order Selection",
          instruction: "Select the option that adheres to Subject + Verb word order.",
          questions: [
            {
              prompt: "'Where do you stream your podcasts?' asked Alex.<br>Alex asked me _____.",
              options: ["where I streamed my podcasts", "where did I stream my podcasts", "where streamed I my podcasts", "where do I streamed my podcasts"],
              correct: 0,
              explanation: "In reported questions, word order is affirmative (where + subject + verb) without 'did'."
            },
            {
              prompt: "'Are you following that new science account?' asked Laura.<br>Laura asked me _____ that new science account.",
              options: ["if I was following", "was I following", "if was I following", "did I follow"],
              correct: 0,
              explanation: "Yes/No question: if + subject (I) + verb (was following)."
            },
            {
              prompt: "'What time will the livestream begin?' inquired David.<br>David inquired what time the livestream _____.",
              options: ["would begin", "will begin", "did begin", "began will"],
              correct: 0,
              explanation: "Subject + would begin."
            }
          ]
        },
        {
          id: "m6b-l1-2",
          level: 1,
          levelLabel: "Level 1 (Foundation)",
          type: "multiple_choice",
          title: "Exercise 2: If / Whether in Yes-No Questions",
          instruction: "Choose whether 'if' or a wh-word is needed.",
          questions: [
            {
              prompt: "'Did you record the podcast interview?' She asked me _____ I had recorded the interview.",
              options: ["if", "what", "where", "why"],
              correct: 0,
              explanation: "Yes/No question requires 'if' or 'whether'."
            },
            {
              prompt: "'Have you verified your social media account?'<br>He asked me _____ I had verified my account.",
              options: ["whether", "that", "what", "which"],
              correct: 0,
              explanation: "Yes/No question -> whether / if."
            },
            {
              prompt: "'Does this app protect user privacy?'<br>I inquired _____ that app protected user privacy.",
              options: ["if", "what", "how", "why that"],
              correct: 0,
              explanation: "Yes/No inquiry takes 'if'."
            }
          ]
        },
        {
          id: "m6b-l1-3",
          level: 1,
          levelLabel: "Level 1 (Foundation)",
          type: "multiple_choice",
          title: "Exercise 3: Word Order in Wh- and Yes/No Questions",
          instruction: "Select the sentence with correct affirmative word order in reported questions.",
          questions: [
            {
              prompt: "Which reported question is grammatically correct?",
              options: [
                "She asked me where I lived.",
                "She asked me where did I live.",
                "She asked me where lived I.",
                "She asked me where do I live."
              ],
              correct: 0,
              explanation: "wh-word + subject + verb: where I lived."
            },
            {
              prompt: "Which reported question is grammatically correct?",
              options: [
                "Mark asked if we could edit the video clip.",
                "Mark asked could we edit the video clip.",
                "Mark asked if could we edit the video clip.",
                "Mark asked whether did we edit the video clip."
              ],
              correct: 0,
              explanation: "if + subject + modal + verb: if we could edit."
            },
            {
              prompt: "Which reported question is grammatically correct?",
              options: [
                "The journalist asked why the website had crashed.",
                "The journalist asked why had the website crashed.",
                "The journalist asked why did the website crash.",
                "The journalist asked why crashed the website."
              ],
              correct: 0,
              explanation: "why + subject (the website) + verb (had crashed)."
            }
          ]
        },

        // Level 2: Standard
        {
          id: "m6b-l2-1",
          level: 2,
          levelLabel: "Level 2 (Standard)",
          type: "fill_blank",
          title: "Exercise 1: Transforming Questions to Reported Clauses",
          instruction: "Complete the sentence with the reported question structure.",
          questions: [
            {
              prompt: "'How many subscribers did you gain yesterday?'<br>She asked me how many subscribers I _____ the day before.",
              accepted: ["had gained"],
              hint: "Past Simple shifts to Past Perfect: had gained."
            },
            {
              prompt: "'Can you edit this video clip?'<br>My friend asked me if I _____ edit that video clip.",
              accepted: ["could"],
              hint: "can shifts to could."
            },
            {
              prompt: "'Why are you deleting your account?'<br>He asked me why I _____ deleting my account.",
              accepted: ["was"],
              hint: "are -> was."
            }
          ]
        },
        {
          id: "m6b-l2-2",
          level: 2,
          levelLabel: "Level 2 (Standard)",
          type: "fill_blank",
          title: "Exercise 2: Eliminating Auxiliary Do/Did",
          instruction: "Fill in the blank with the correct verb form in indirect speech.",
          questions: [
            {
              prompt: "'Where does your family spend the holidays?'<br>She asked me where my family _____ (spend) the holidays.",
              accepted: ["spent"],
              hint: "Past Simple without does: spent."
            },
            {
              prompt: "'What time do you usually post updates?'<br>Clara asked me what time I usually _____ (post) updates.",
              accepted: ["posted"],
              hint: "Present Simple shifts to Past Simple without do: posted."
            },
            {
              prompt: "'Why did the algorithm recommend this video?'<br>He asked why the algorithm _____ (recommend) that video.",
              accepted: ["had recommended"],
              hint: "Past Simple shifts to Past Perfect: had recommended."
            }
          ]
        },
        {
          id: "m6b-l2-3",
          level: 2,
          levelLabel: "Level 2 (Standard)",
          type: "fill_blank",
          title: "Exercise 3: Tense & Pronoun Shifts in Reported Questions",
          instruction: "Complete the reported question with the correct verb and pronoun.",
          questions: [
            {
              prompt: "'Have you seen my new travel vlog?' asked Leo.<br>Leo asked me if I _____ (see) his new travel vlog.",
              accepted: ["had seen"],
              hint: "had seen."
            },
            {
              prompt: "'Will you tag me in your photo?' asked Sara.<br>Sara asked if I _____ (will) tag her in my photo.",
              accepted: ["would"],
              hint: "will shifts to would."
            },
            {
              prompt: "'How often do you check your notifications?'<br>The researcher asked how often I _____ (check) my notifications.",
              accepted: ["checked"],
              hint: "checked."
            }
          ]
        },

        // Level 3: Challenge
        {
          id: "m6b-l3-1",
          level: 3,
          levelLabel: "Level 3 (Challenge)",
          type: "transformation",
          title: "Exercise 1: Direct to Indirect Question Formulations",
          instruction: "Convert the direct question into reported speech.",
          questions: [
            {
              prompt: "'Why did you change your privacy settings?' Eric asked Sandra.<br>Eric asked Sandra ____________________ her privacy settings.",
              accepted: ["why she had changed"],
              hint: "why she had changed."
            },
            {
              prompt: "'Have you uploaded the podcast yet?' the teacher asked us.<br>The teacher asked us ____________________ the podcast yet.",
              accepted: ["if we had uploaded", "whether we had uploaded"],
              hint: "if / whether we had uploaded."
            },
            {
              prompt: "'Where can I find copyright-free music for my channel?' Daniel asked.<br>Daniel asked where ____________________ copyright-free music for his channel.",
              accepted: ["he could find"],
              hint: "he could find."
            }
          ]
        },
        {
          id: "m6b-l3-2",
          level: 3,
          levelLabel: "Level 3 (Challenge)",
          type: "transformation",
          title: "Exercise 2: Wh- Question Synthesis",
          instruction: "Report the wh- question accurately.",
          questions: [
            {
              prompt: "'How much did that digital camera cost?' Leo asked me.<br>Leo asked me how much ____________________.",
              accepted: ["that digital camera had cost", "the digital camera had cost"],
              hint: "that digital camera had cost."
            },
            {
              prompt: "'Who designed the graphics for your mobile app?' the interviewer asked.<br>The interviewer asked who ____________________ the graphics for my mobile app.",
              accepted: ["had designed"],
              hint: "had designed."
            },
            {
              prompt: "'When will the livestream launch?' the fans asked the influencer.<br>The fans asked the influencer when ____________________.",
              accepted: ["the livestream would launch"],
              hint: "the livestream would launch."
            }
          ]
        },
        {
          id: "m6b-l3-3",
          level: 3,
          levelLabel: "Level 3 (Challenge)",
          type: "transformation",
          title: "Exercise 3: Complex Reported Questions Transformation",
          instruction: "Rewrite the direct questions into indirect speech preserving meaning.",
          questions: [
            {
              prompt: "'Are you going to livestream the tech conference tomorrow?' Peter asked Anna.<br>Peter asked Anna if ____________________ the tech conference the following day.",
              accepted: ["she was going to livestream"],
              hint: "she was going to livestream."
            },
            {
              prompt: "'Did you receive any threatening messages on social media?' the officer asked the teen.<br>The officer asked the teen ____________________ any threatening messages on social media.",
              accepted: ["if he had received", "if she had received", "whether he had received", "whether she had received"],
              hint: "if / whether he/she had received."
            },
            {
              prompt: "'How long have you been managing this influencer profile?' the reporter asked me.<br>The reporter asked me how long ____________________ that influencer profile.",
              accepted: ["I had been managing"],
              hint: "I had been managing."
            }
          ]
        }
      ]
    },

    {
      id: "m6-c",
      code: "6C",
      title: "Bon Voyage",
      subtitle: "Travel, Bookings & Reported Orders, Requests, Offers and Suggestions",
      
      grammar: {
        title: "Reported Orders, Requests, Offers & Suggestions",
        sections: [
          {
            heading: "Special Reporting Verb Patterns",
            content: `
              <table class="styled-table">
                <thead>
                  <tr><th>Category</th><th>Introductory Verb</th><th>Syntactic Pattern</th><th>Natural Example</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>Orders</strong></td><td>tell / order</td><td><strong>told + person + (not) to + infinitive</strong></td><td>"Fasten your seatbelts." &rarr; The flight attendant told us <em>to fasten</em> our seatbelts.</td></tr>
                  <tr><td><strong>Requests</strong></td><td>ask</td><td><strong>asked + person + (not) to + infinitive</strong></td><td>"Please don't lean on the door." &rarr; The driver asked us <em>not to lean</em> on the door.</td></tr>
                  <tr><td><strong>Offers</strong></td><td>offer</td><td><strong>offered + to + infinitive</strong></td><td>"I'll carry your suitcase." &rarr; He offered <em>to carry</em> my suitcase.</td></tr>
                  <tr><td><strong>Suggestions</strong></td><td>suggest</td><td><strong>suggested + verb-ing</strong> (or that + subject + should)</td><td>"Let's visit the Gothic Quarter." &rarr; She suggested <em>visiting</em> the Gothic Quarter.</td></tr>
                </tbody>
              </table>
              <div class="tip-box">
                <strong>Crucial Suggestion Error to Avoid:</strong><br>
                Never say <em>"He suggested me to go"</em>! That is a very common mistake.<br>
                Always say: <em>"He suggested <strong>going</strong>"</em> OR <em>"He suggested <strong>that we go</strong>"</em>.
              </div>
            `
          }
        ]
      },

      vocabulary: {
        topic: "Travel Logistics, Airports & City Sightseeing",
        words: [
          { word: "itinerary", phonetic: "/aɪˈtɪn.ər.ər.i/", cat: "itinerari / pla de viatge", example: "Our tour itinerary included visiting three historical coastal fortresses." },
          { word: "boarding pass", phonetic: "/ˈbɔː.dɪŋ ˌpɑːs/", cat: "targeta d'embarcament", example: "Keep your electronic boarding pass ready on your phone." },
          { word: "jet lag", phonetic: "/ˈdʒet ˌlæɡ/", cat: "desfasament horari (jet lag)", example: "Drinking lots of water helps minimize the disorienting effects of jet lag." },
          { word: "luggage allowance", phonetic: "/ˈlʌɡ.ɪdʒ əˌlaʊ.əns/", cat: "límit d'equipatge permès", example: "Budget airlines impose a strict 20 kg luggage allowance per passenger." },
          { word: "budget accommodation", phonetic: "/ˈbʌdʒ.ɪt əˌkɒm.əˈdeɪ.ʃən/", cat: "allotjament assequible", example: "Youth hostels offer economical budget accommodation for backpackers." }
        ],
        exercises: [
          {
            id: "m6c-vocab-ex1",
            title: "Vocabulary Exercise 1: Travel Essentials",
            instruction: "Identify the travel concept matching each clue.",
            questions: [
              {
                prompt: "A detailed plan or route of a journey including dates and stops:",
                options: ["itinerary", "boarding pass", "jet lag", "commute"],
                correct: 0,
                explanation: "An 'itinerary' is a planned travel schedule."
              },
              {
                prompt: "Extreme tiredness caused by travelling across different time zones:",
                options: ["jet lag", "luggage allowance", "itinerary", "claustrophobia"],
                correct: 0,
                explanation: "'Jet lag' results from rapid travel across time zones."
              }
            ]
          },
          {
            id: "m6c-vocab-ex2",
            title: "Vocabulary Exercise 2: Context Fill",
            instruction: "Fill in the blank with an appropriate travel term.",
            questions: [
              {
                prompt: "Show your digital _____ pass at the airport departure gate.",
                accepted: ["boarding"],
                hint: "boarding pass."
              }
            ]
          }
        ]
      },

      exercises: [
        // Level 1: Foundation
        {
          id: "m6c-l1-1",
          level: 1,
          levelLabel: "Level 1 (Foundation)",
          type: "multiple_choice",
          title: "Exercise 1: Orders, Requests & Suggestions Selection",
          instruction: "Select the option that correctly reports the directive.",
          questions: [
            {
              prompt: "'Please show me your passport,' the customs officer requested.<br>The officer asked me _____ my passport.",
              options: ["to show", "showing", "show", "that I show"],
              correct: 0,
              explanation: "Reported request: asked + person + to + infinitive ('to show')."
            },
            {
              prompt: "'Do not touch the fragile artefacts!' warned the docent.<br>The docent told visitors _____ the fragile artefacts.",
              options: ["not to touch", "to not touch", "don't touch", "not touching"],
              correct: 0,
              explanation: "Negative order: told + person + not to + infinitive."
            },
            {
              prompt: "'Why don't we book an eco-tour online?' said Marta.<br>Marta suggested _____ an eco-tour online.",
              options: ["booking", "to book", "book", "us to book"],
              correct: 0,
              explanation: "suggest + verb-ing -> 'suggested booking'."
            }
          ]
        },
        {
          id: "m6c-l1-2",
          level: 1,
          levelLabel: "Level 1 (Foundation)",
          type: "multiple_choice",
          title: "Exercise 2: Introductory Verbs Matching",
          instruction: "Select the introductory verb appropriate for offers and warnings.",
          questions: [
            {
              prompt: "'I can guide you around the Gothic Cathedral,' said the local student.<br>The student _____ to guide us around the cathedral.",
              options: ["offered", "ordered", "suggested", "commanded"],
              correct: 0,
              explanation: "offered to guide."
            },
            {
              prompt: "'Be careful; the ferry deck is very slippery!' the sailor told us.<br>The sailor _____ us that the deck was slippery.",
              options: ["warned", "refused", "invited", "promised to"],
              correct: 0,
              explanation: "warned us that..."
            },
            {
              prompt: "'Would you like to come to our beach campfire tonight?' Leo said to me.<br>Leo _____ me to their beach campfire that night.",
              options: ["invited", "ordered", "commanded", "suggested"],
              correct: 0,
              explanation: "invited me to..."
            }
          ]
        },
        {
          id: "m6c-l1-3",
          level: 1,
          levelLabel: "Level 1 (Foundation)",
          type: "multiple_choice",
          title: "Exercise 3: Reporting Verbs Patterns",
          instruction: "Choose whether the reporting verb takes an infinitive (to + verb) or a gerund (-ing).",
          questions: [
            {
              prompt: "The flight attendant reminded all passengers _____ their seatbelts.",
              options: ["to fasten", "fastening", "fasten", "fastened"],
              correct: 0,
              explanation: "remind + person + to-infinitive: to fasten."
            },
            {
              prompt: "Our tour guide recommended _____ tickets in advance to avoid long queues.",
              options: ["purchasing", "to purchase", "purchase", "purchased"],
              correct: 0,
              explanation: "recommend + gerund (-ing): purchasing."
            },
            {
              prompt: "The driver refused _____ passengers without a valid transit card.",
              options: ["to let on", "letting on", "let on", "to letting on"],
              correct: 0,
              explanation: "refuse + to-infinitive: to let on."
            }
          ]
        },

        // Level 2: Standard
        {
          id: "m6c-l2-1",
          level: 2,
          levelLabel: "Level 2 (Standard)",
          type: "fill_blank",
          title: "Exercise 1: Forming Reporting Verb Structures",
          instruction: "Fill in the blank with the correct verb form (infinitive with to or -ing).",
          questions: [
            {
              prompt: "'I'll guide you through the historic quarter,' offered Carlos.<br>Carlos offered _____ (guide) us through the historic quarter.",
              accepted: ["to guide"],
              hint: "offer + to + infinitive: to guide."
            },
            {
              prompt: "'Let's take the overnight sleeper train,' suggested David.<br>David suggested _____ (take) the overnight sleeper train.",
              accepted: ["taking"],
              hint: "suggest + -ing: taking."
            },
            {
              prompt: "'Please don't leave your luggage unattended,' the guard reminded passengers.<br>The guard reminded passengers _____ (not leave) their luggage unattended.",
              accepted: ["not to leave"],
              hint: "not to leave."
            }
          ]
        },
        {
          id: "m6c-l2-2",
          level: 2,
          levelLabel: "Level 2 (Standard)",
          type: "fill_blank",
          title: "Exercise 2: Negative Orders and Requests",
          instruction: "Complete with 'not to' + verb.",
          questions: [
            {
              prompt: "'Don't stand near the train doors while moving,' the announcement said.<br>The announcement warned passengers _____ (not stand) near the doors.",
              accepted: ["not to stand"],
              hint: "not to stand."
            },
            {
              prompt: "'Please don't forget to validate your boarding passes,' the agent said.<br>The agent reminded travelers _____ (not forget) to validate their passes.",
              accepted: ["not to forget"],
              hint: "not to forget."
            },
            {
              prompt: "'Do not drink unboiled water on the trekking route,' the guide warned.<br>The guide instructed hikers _____ (not drink) unboiled water.",
              accepted: ["not to drink"],
              hint: "not to drink."
            }
          ]
        },
        {
          id: "m6c-l2-3",
          level: 2,
          levelLabel: "Level 2 (Standard)",
          type: "fill_blank",
          title: "Exercise 3: Reporting Verbs (Remind, Invite, Offer, Suggest)",
          instruction: "Supply the correct verb form after the reporting verb.",
          questions: [
            {
              prompt: "'Would you like to join our hiking expedition?' asked Clara.<br>Clara invited us _____ (join) their hiking expedition.",
              accepted: ["to join"],
              hint: "invite someone to + verb: to join."
            },
            {
              prompt: "'I promise I will send you a postcard from Rome,' said Marco.<br>Marco promised _____ (send) me a postcard from Rome.",
              accepted: ["to send"],
              hint: "promise to + verb: to send."
            },
            {
              prompt: "'Why don't we hire electric scooters to explore the city?' said Elena.<br>Elena suggested _____ (hire) electric scooters to explore the city.",
              accepted: ["hiring"],
              hint: "suggest + -ing: hiring."
            }
          ]
        },

        // Level 3: Challenge
        {
          id: "m6c-l3-1",
          level: 3,
          levelLabel: "Level 3 (Challenge)",
          type: "transformation",
          title: "Exercise 1: Reporting Orders, Offers and Suggestions",
          instruction: "Rewrite the direct statement using the introductory reporting verb in brackets.",
          questions: [
            {
              prompt: "'Don't cross the railway tracks on foot,' the station master warned commuters. (WARNED)<br>The station master warned commuters ____________________ the railway tracks on foot.",
              accepted: ["not to cross"],
              hint: "warned commuters not to cross."
            },
            {
              prompt: "'Shall we rent bicycles to explore the canals?' proposed Maria. (SUGGESTED)<br>Maria ____________________ bicycles to explore the canals.",
              accepted: ["suggested renting", "suggested that we rent", "suggested that we should rent"],
              hint: "suggested renting."
            },
            {
              prompt: "'I will carry your backpack upstairs,' said the receptionist. (OFFERED)<br>The receptionist ____________________ backpack upstairs.",
              accepted: ["offered to carry my", "offered to carry the"],
              hint: "offered to carry my / the."
            }
          ]
        },
        {
          id: "m6c-l3-2",
          level: 3,
          levelLabel: "Level 3 (Challenge)",
          type: "transformation",
          title: "Exercise 2: Advanced Suggestion & Warning Transformations",
          instruction: "Rewrite the suggestion accurately.",
          questions: [
            {
              prompt: "'Why don't you visit the coastal lighthouse?' suggested our host. (VISITING)<br>Our host ____________________ the coastal lighthouse.",
              accepted: ["suggested visiting"],
              hint: "suggested visiting."
            },
            {
              prompt: "'You really must not leave your passport in the hostel room,' our teacher warned us. (NOT)<br>Our teacher warned us ____________________ our passports in the hostel room.",
              accepted: ["not to leave"],
              hint: "warned us not to leave."
            },
            {
              prompt: "'Let's check into our hotel before sunset,' proposed Alex. (RECOMMENDED)<br>Alex ____________________ into our hotel before sunset.",
              accepted: ["recommended checking"],
              hint: "recommended checking."
            }
          ]
        },
        {
          id: "m6c-l3-3",
          level: 3,
          levelLabel: "Level 3 (Challenge)",
          type: "transformation",
          title: "Exercise 3: Comprehensive Reporting Synthesis",
          instruction: "Rewrite the direct statement into reported speech using the verb in brackets.",
          questions: [
            {
              prompt: "'Please don't photograph the sacred altar,' the temple guard asked us. (ASKED)<br>The temple guard ____________________ the sacred altar.",
              accepted: ["asked us not to photograph"],
              hint: "asked us not to photograph."
            },
            {
              prompt: "'I will definitely refund your cancellation fees tomorrow,' the travel agent promised. (PROMISED)<br>The travel agent ____________________ my cancellation fees the following day.",
              accepted: ["promised to refund"],
              hint: "promised to refund."
            },
            {
              prompt: "'Would you like to come to the rooftop dinner with us tonight?' Lucia said to me. (INVITED)<br>Lucia ____________________ the rooftop dinner with them that night.",
              accepted: ["invited me to come to", "invited me to"],
              hint: "invited me to (come to)."
            }
          ]
        }
      ]
    }
  ]
};
