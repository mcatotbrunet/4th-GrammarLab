// Comprehensive Extended Module Mastery Tests for 4th ESO
// Each test provides an extensive 16-18 question battery evaluating all vocabulary (A, B, C) and grammar (A, B, C) for that module.

const moduleTestsData = [
  // DIAGNOSTIC MASTERY TEST (18 Questions)
  {
    id: "intro-test",
    moduleId: 0,
    moduleTitle: "Diagnostic Unit",
    title: "Diagnostic Unit: Extended Mastery Test",
    subtitle: "Complete multi-skill assessment covering English tenses (Present Simple & Continuous, Past Simple & Continuous, Present Perfect, Used to, Futures) and Core Vocabulary",
    questions: [
      {
        prompt: "Listen! Someone _____ at the front door right now.",
        options: ["knocks", "is knocking", "knocked", "has knocked"],
        correct: 1,
        explanation: "Present Continuous ('is knocking') is required for an action happening at this exact moment."
      },
      {
        prompt: "A diet rich in vitamins, minerals, and fresh vegetables is described as _____.",
        options: ["exhausted", "nutritious", "reliable", "challenging"],
        correct: 1,
        explanation: "'Nutritious' means full of healthy nutritional elements."
      },
      {
        prompt: "While we _____ in the forest, the sudden thunderstorm began.",
        options: ["walked", "were walking", "are walking", "have walked"],
        correct: 1,
        explanation: "Continuous background past action with 'While' -> were walking."
      },
      {
        prompt: "Athletes from over two hundred countries _____ in the Olympic Games.",
        options: ["compete", "injury", "workout", "destination"],
        correct: 0,
        explanation: "Verb 'compete' means to participate in a sporting contest."
      },
      {
        prompt: "We _____ in this town since our family moved here in 2020.",
        options: ["live", "lived", "have lived", "were living"],
        correct: 2,
        explanation: "Present Perfect ('have lived') is used with 'since' for an action that began in the past and continues."
      },
      {
        prompt: "My grandfather _____ work as a mechanical engineer, but now he is retired.",
        options: ["used to", "use to", "is used to", "was used to"],
        correct: 0,
        explanation: "'used to + base verb' expresses a past state or habit no longer true today."
      },
      {
        prompt: "Look at those dark, heavy thunderclouds! It _____ rain soon.",
        options: ["will", "is going to", "is", "rains"],
        correct: 1,
        explanation: "Prediction with immediate visible physical evidence -> 'is going to'."
      },
      {
        prompt: "After a grueling 25-kilometer mountain trek, the hikers were utterly _____.",
        options: ["reliable", "enthusiastic", "exhausted", "balanced"],
        correct: 2,
        explanation: "'Exhausted' means extremely tired."
      },
      {
        prompt: "I have booked the flight tickets. We _____ to London next Friday at 7:00 AM.",
        options: ["fly", "are flying", "will fly", "flew"],
        correct: 1,
        explanation: "A fixed arrangement with tickets already booked takes the Present Continuous."
      },
      {
        prompt: "He is a very _____ friend; he always keeps his promises and arrives on time.",
        options: ["reliable", "nutritious", "challenging", "fragrant"],
        correct: 0,
        explanation: "'Reliable' means trustworthy and dependable."
      },
      {
        prompt: "I _____ this difficult grammar rule. Could you explain it again, please?",
        options: ["am not understanding", "don't understand", "didn't understood", "haven't understand"],
        correct: 1,
        explanation: "'Understand' is a stative verb; it is not used in continuous tenses."
      },
      {
        prompt: "The doctor examined my ankle after I suffered a painful sports _____ during the basketball game.",
        options: ["symptom", "injury", "workout", "luggage"],
        correct: 1,
        explanation: "An 'injury' is bodily harm or damage caused by an accident or sport."
      },
      {
        prompt: "When I was in primary school, I _____ like eating broccoli, but now I love it.",
        options: ["didn't use to", "didn't used to", "used to not", "wasn't used to"],
        correct: 0,
        explanation: "Negative of used to: didn't use to + base verb."
      },
      {
        prompt: "A: The phone is ringing! B: Don't worry, I _____ it.",
        options: ["will answer", "am answering", "am going to answer", "answer"],
        correct: 0,
        explanation: "Spontaneous decision made at the moment of speaking -> 'will answer'."
      },
      {
        prompt: "How long _____ you _____ your best friend? For six years.",
        options: ["did / know", "have / known", "are / knowing", "do / know"],
        correct: 1,
        explanation: "'How long' with 'for' indicates duration continuing up to the present -> Present Perfect: have known."
      },
      {
        prompt: "Don't forget to weigh your travel _____ before arriving at the airport terminal.",
        options: ["luggage", "workout", "destination", "diet"],
        correct: 0,
        explanation: "'Luggage' refers to suitcases and travel bags."
      },
      {
        prompt: "She was doing her chemistry homework when suddenly the power _____ out.",
        options: ["went", "was going", "has gone", "had gone"],
        correct: 0,
        explanation: "Punctual interrupting event in the past takes the Past Simple: went."
      },
      {
        prompt: "Learning a new language fluently is _____ but extremely rewarding.",
        options: ["challenging", "exhausted", "sour", "fragrant"],
        correct: 0,
        explanation: "'Challenging' means testing one's abilities; demanding."
      }
    ]
  },

  // MODULE 1 MASTERY TEST (18 Questions)
  {
    id: "m1-test",
    moduleId: 1,
    moduleTitle: "Module 1: Game Changers",
    title: "Module 1: Extended Mastery Test",
    subtitle: "Comprehensive assessment combining all vocabulary (Environment, History, Transport) & grammar (Pres. Perfect vs Past Simple, Past Perfect, Reflexive Pronouns)",
    questions: [
      {
        prompt: "In 2020, our regional council _____ single-use plastics in all public buildings.",
        options: ["has banned", "banned", "was banned", "had ban"],
        correct: 1,
        explanation: "Specific finished year in the past (2020) requires the Past Simple: 'banned'."
      },
      {
        prompt: "Solar radiation and wind power are vital sources of _____ energy.",
        options: ["fossil", "renewable", "artefact", "heritage"],
        correct: 1,
        explanation: "'Renewable' energy is naturally replenished."
      },
      {
        prompt: "By the time the rescue team reached the museum, the priceless painting _____ stolen.",
        options: ["was already", "had already been", "has already been", "is already"],
        correct: 1,
        explanation: "The earlier past action takes the Past Perfect Passive: 'had already been'."
      },
      {
        prompt: "An ancient ceramic bowl excavated by archaeologists is classified as an _____.",
        options: ["artefact", "ecosystem", "commute", "fare"],
        correct: 0,
        explanation: "An 'artefact' is an object of historical/cultural interest made by humans."
      },
      {
        prompt: "Have you _____ calculated your household carbon footprint?",
        options: ["never", "ever", "yet", "ago"],
        correct: 1,
        explanation: "In questions asking about life experience, use 'ever'."
      },
      {
        prompt: "My sister taught _____ how to maintain and repair her electric scooter.",
        options: ["himself", "herself", "itself", "myself"],
        correct: 1,
        explanation: "Subject 'My sister' (she) takes the reflexive pronoun 'herself'."
      },
      {
        prompt: "After the Roman army _____ the territory, they built an extensive road network.",
        options: ["had conquered", "conquered has", "conquers", "was conquering"],
        correct: 0,
        explanation: "The earlier past action takes the Past Perfect: 'had conquered'."
      },
      {
        prompt: "The daily travel journey between your home and school or work is your daily _____.",
        options: ["commute", "fare", "monument", "conquest"],
        correct: 0,
        explanation: "A 'commute' is the regular journey to and from work/school."
      },
      {
        prompt: "The students decorated the classroom for the environmental festival all by _____.",
        options: ["yourselves", "themselves", "ourselves", "itself"],
        correct: 1,
        explanation: "Subject 'The students' (they) -> 'by themselves'."
      },
      {
        prompt: "The massive cutting down of trees over wide forest areas is called _____.",
        options: ["biodiversity", "deforestation", "reign", "passenger"],
        correct: 1,
        explanation: "'Deforestation' is the clearance of forests."
      },
      {
        prompt: "We haven't organized the tree planting project _____.",
        options: ["already", "yet", "since", "just"],
        correct: 1,
        explanation: "'Yet' is placed at the end of negative sentences in the Present Perfect."
      },
      {
        prompt: "A succession of rulers from the same dynasty or royal line is a _____.",
        options: ["dynasty", "excavation", "commute", "fare"],
        correct: 0,
        explanation: "A 'dynasty' is a series of monarchs from the same family."
      },
      {
        prompt: "When I arrived at the station at 9:15, the express train _____ departed.",
        options: ["has already", "had already", "was already", "already did"],
        correct: 1,
        explanation: "The departure happened before 9:15 -> Past Perfect ('had already departed')."
      },
      {
        prompt: "Electric buses and solar trams are examples of _____ vehicles.",
        options: ["eco-friendly", "fossil", "exhausted", "regrettable"],
        correct: 0,
        explanation: "'Eco-friendly' means not harmful to the environment."
      },
      {
        prompt: "The cat licked _____ clean after exploring the garden.",
        options: ["himself", "herself", "itself", "themselves"],
        correct: 2,
        explanation: "Animal/object subject (it) takes 'itself'."
      },
      {
        prompt: "Scientists _____ an ancient fossil discovery three days ago.",
        options: ["announced", "have announced", "had announced", "are announcing"],
        correct: 0,
        explanation: "'Three days ago' strictly demands the Past Simple: announced."
      },
      {
        prompt: "Students who travel on public transit can purchase a reduced monthly _____.",
        options: ["fare", "route", "reign", "heritage"],
        correct: 0,
        explanation: "A transit ticket price is a 'fare'."
      },
      {
        prompt: "He lived on the remote island for six months all by _____.",
        options: ["himself", "him", "itself", "themselves"],
        correct: 0,
        explanation: "'by himself' = on his own / alone."
      }
    ]
  },

  // MODULE 2 MASTERY TEST (18 Questions)
  {
    id: "m2-test",
    moduleId: 2,
    moduleTitle: "Module 2: The Unexpected",
    title: "Module 2: Extended Mastery Test",
    subtitle: "Comprehensive assessment combining all vocabulary (Inventions, Talents, Urban Life) & grammar (Defining Relatives, Non-defining Relatives, Indefinite Compounds)",
    questions: [
      {
        prompt: "A microscope is an optical instrument _____ allows scientists to examine bacteria.",
        options: ["who", "which", "where", "whose"],
        correct: 1,
        explanation: "Refers to a device/thing -> 'which' (or 'that')."
      },
      {
        prompt: "An early working model built to test a design concept before manufacturing is a _____.",
        options: ["prototype", "flaw", "gadget", "pedestrian"],
        correct: 0,
        explanation: "A 'prototype' is an experimental test model."
      },
      {
        prompt: "Leo Messi, _____ was born in Argentina, is celebrated as one of football's greatest icons.",
        options: ["that", "who", "which", "whose"],
        correct: 1,
        explanation: "In a non-defining clause between commas referring to a person, you MUST use 'who'—never 'that'."
      },
      {
        prompt: "Physical and mental endurance needed to sustain prolonged exertion is called _____.",
        options: ["dexterity", "stamina", "heritage", "algorithm"],
        correct: 1,
        explanation: "'Stamina' is endurance and lasting energy."
      },
      {
        prompt: "That is the maker space _____ we constructed our solar-powered model car.",
        options: ["who", "which", "where", "whose"],
        correct: 2,
        explanation: "Refers to a physical location -> 'where'."
      },
      {
        prompt: "There is _____ strange outside in the dark courtyard; I heard quiet footsteps.",
        options: ["anything", "something", "nothing", "nowhere"],
        correct: 1,
        explanation: "Affirmative statement -> 'something'."
      },
      {
        prompt: "The Sagrada Família, _____ was designed by Antoni Gaudí, attracts millions of travelers.",
        options: ["that", "which", "where", "whose"],
        correct: 1,
        explanation: "Non-defining clause referring to a building -> 'which' (never 'that')."
      },
      {
        prompt: "A person walking along an urban street on foot rather than in a vehicle is a _____.",
        options: ["pedestrian", "commuter", "trendsetter", "passenger"],
        correct: 0,
        explanation: "A 'pedestrian' is a walker."
      },
      {
        prompt: "I looked all around my desk, but my flash drive was _____ to be found.",
        options: ["everywhere", "anywhere", "nowhere", "somewhere"],
        correct: 2,
        explanation: "Affirmative verb 'was' with negative meaning -> 'nowhere'."
      },
      {
        prompt: "We met a teenage software developer _____ mobile game won first prize.",
        options: ["who", "which", "where", "whose"],
        correct: 3,
        explanation: "Indicates possession ('the developer's game') -> 'whose'."
      },
      {
        prompt: "Thomas Edison filed hundreds of commercial _____ to legally protect his electrical devices.",
        options: ["patents", "flaws", "gadgets", "suburbs"],
        correct: 0,
        explanation: "A 'patent' is government authority granting an inventor exclusive rights."
      },
      {
        prompt: "The new smartwatch _____ I bought last week monitors sleep quality accurately.",
        options: ["which", "who", "whose", "where"],
        correct: 0,
        explanation: "Refers to a gadget -> 'which' (or 'that')."
      },
      {
        prompt: "Circus acrobats and jugglers demonstrate astounding manual _____.",
        options: ["dexterity", "stamina", "biodiversity", "claustrophobia"],
        correct: 0,
        explanation: "'Dexterity' is manual skill and agility in using hands."
      },
      {
        prompt: "London, _____ is the capital of the United Kingdom, has a huge underground network.",
        options: ["which", "that", "where", "whose"],
        correct: 0,
        explanation: "Non-defining clause about a city -> 'which' (never 'that')."
      },
      {
        prompt: "Did you invite _____ from your primary school to the graduation party?",
        options: ["anyone", "nobody", "nothing", "nowhere"],
        correct: 0,
        explanation: "General question about people -> 'anyone'."
      },
      {
        prompt: "A very tall building with many storeys located in a modern city skyline is a _____.",
        options: ["skyscraper", "suburb", "pavement", "commute"],
        correct: 0,
        explanation: "A 'skyscraper' is a high-rise building."
      },
      {
        prompt: "He spoke with such humility that _____ in the audience applauded warmly.",
        options: ["everyone", "anyone", "nowhere", "nothing"],
        correct: 0,
        explanation: "'Everyone' means all the people in the audience."
      },
      {
        prompt: "The prototype was discarded because it contained a dangerous engineering _____.",
        options: ["flaw", "patent", "breakthrough", "dexterity"],
        correct: 0,
        explanation: "A 'flaw' is a defect or imperfection."
      }
    ]
  },

  // MODULE 3 MASTERY TEST (18 Questions)
  {
    id: "m3-test",
    moduleId: 3,
    moduleTitle: "Module 3: The Way We Live",
    title: "Module 3: Extended Mastery Test",
    subtitle: "Comprehensive assessment combining all vocabulary (Family, Customs, Global Culture) & grammar (Present/Past Passive, Future Passive, Modal Passives)",
    questions: [
      {
        prompt: "English _____ as a compulsory language subject in schools across Europe.",
        options: ["teaches", "is taught", "was taught", "are taught"],
        correct: 1,
        explanation: "Present Simple Passive singular: 'is taught'."
      },
      {
        prompt: "A relative who lived generations before you in your family tree is an _____.",
        options: ["ancestor", "sibling", "descendant", "upbringing"],
        correct: 0,
        explanation: "An 'ancestor' is a forebear."
      },
      {
        prompt: "Guernica _____ by Pablo Picasso in 1937 following the bombing of the Basque town.",
        options: ["painted", "was painted", "is painted", "were painted"],
        correct: 1,
        explanation: "Past Simple Passive: 'was painted'."
      },
      {
        prompt: "The customary rules of polite, respectful behavior in society are known as _____.",
        options: ["etiquette", "stereotype", "folklore", "feast"],
        correct: 0,
        explanation: "'Etiquette' is conventional social manners and protocol."
      },
      {
        prompt: "The results of the secondary school science competition _____ announced next Monday.",
        options: ["will", "will be", "are", "were"],
        correct: 1,
        explanation: "Future Simple Passive: 'will be announced'."
      },
      {
        prompt: "Family recipes and folklore traditions are often passed _____ through generations.",
        options: ["down", "up", "away", "over"],
        correct: 0,
        explanation: "Phrasal verb: passed down."
      },
      {
        prompt: "Historic archaeological ruins _____ protected from vandalism by national laws.",
        options: ["must be", "must to be", "must been", "must being"],
        correct: 0,
        explanation: "Modal passive: must + be + past participle ('must be protected')."
      },
      {
        prompt: "A simplified, fixed, and often biased generalization about a national group is a _____.",
        options: ["stereotype", "etiquette", "multicultural", "ancestor"],
        correct: 0,
        explanation: "A 'stereotype' is a rigid, oversimplified image."
      },
      {
        prompt: "Plastic bags _____ prohibited at all open-air street markets starting next winter.",
        options: ["will be", "are been", "were be", "have"],
        correct: 0,
        explanation: "Future Simple Passive: 'will be prohibited'."
      },
      {
        prompt: "A society characterized by diverse cultural backgrounds living together is _____.",
        options: ["multicultural", "customary", "vintage", "exhausted"],
        correct: 0,
        explanation: "'Multicultural' represents diverse cultural groups."
      },
      {
        prompt: "Thousands of digital photos _____ uploaded to social media every single second.",
        options: ["is", "are", "was", "were"],
        correct: 1,
        explanation: "Present Simple Passive plural: are uploaded."
      },
      {
        prompt: "She inherited her grandmother's artistic talent and her warm _____.",
        options: ["upbringing", "commute", "sibling", "descendant"],
        correct: 0,
        explanation: "'Upbringing' is childhood rearing and education."
      },
      {
        prompt: "The phone call _____ answered immediately by the receptionist yesterday.",
        options: ["was", "is", "were", "has"],
        correct: 0,
        explanation: "Past Simple Passive singular: was answered."
      },
      {
        prompt: "Statues are erected in civic squares to _____ military heroes and peace leaders.",
        options: ["commemorate", "inherit", "master", "revolutionise"],
        correct: 0,
        explanation: "To 'commemorate' is to honor or memorialize."
      },
      {
        prompt: "The annual international street festival _____ attended by thousands next month.",
        options: ["will be", "is been", "was", "were"],
        correct: 0,
        explanation: "Future Simple Passive: will be attended."
      },
      {
        prompt: "Cultural misunderstandings can easily _____ avoided by polite communication.",
        options: ["be", "been", "being", "to be"],
        correct: 0,
        explanation: "Modal passive: can + be + avoided."
      },
      {
        prompt: "Do you have any brothers or sisters, or are you an only _____?",
        options: ["child", "sibling", "ancestor", "descendant"],
        correct: 0,
        explanation: "Expression: 'an only child'."
      },
      {
        prompt: "A sumptuous, lavish festive meal prepared for celebration is known as a _____.",
        options: ["feast", "folklore", "bond", "heritage"],
        correct: 0,
        explanation: "A 'feast' is a large celebration meal."
      }
    ]
  },

  // MODULE 4 MASTERY TEST (18 Questions)
  {
    id: "m4-test",
    moduleId: 4,
    moduleTitle: "Module 4: All in the Mind",
    title: "Module 4: Extended Mastery Test",
    subtitle: "Comprehensive assessment combining all vocabulary (The Senses, Memory, Fears) & grammar (Gerunds/Infinitives, Modals of Ability & Obligation)",
    questions: [
      {
        prompt: "I really enjoy _____ podcasts about scientific mysteries during my evening run.",
        options: ["listening", "to listen", "listen", "to listening"],
        correct: 0,
        explanation: "'Enjoy' is followed by a gerund (-ing): 'listening'."
      },
      {
        prompt: "An intense, irrational fear of small or confined spaces is termed _____.",
        options: ["claustrophobia", "arachnophobia", "stamina", "sensory"],
        correct: 0,
        explanation: "'Claustrophobia' is the fear of tight enclosed spaces."
      },
      {
        prompt: "Students decided _____ an online study group to prepare for the final exams.",
        options: ["forming", "to form", "form", "to forming"],
        correct: 1,
        explanation: "'Decide' takes 'to + infinitive': 'to form'."
      },
      {
        prompt: "The comforting _____ of freshly baked cinnamon bread drifted through the house.",
        options: ["aroma", "texture", "anxiety", "stamina"],
        correct: 0,
        explanation: "'Aroma' is a pleasant, enticing scent."
      },
      {
        prompt: "You _____ feed the dangerous animals at the zoo! It is strictly prohibited.",
        options: ["mustn't", "don't have to", "should", "could"],
        correct: 0,
        explanation: "'Mustn't' expresses strict prohibition."
      },
      {
        prompt: "Regular cardiovascular exercise boosts overall _____ processing speed in teenagers.",
        options: ["cognitive", "forgetful", "fragrant", "sour"],
        correct: 0,
        explanation: "'Cognitive' relates to mental processes and brain reasoning."
      },
      {
        prompt: "Take a raincoat! The sky is grey and it _____ shower later this afternoon.",
        options: ["might", "must to", "can't", "able to"],
        correct: 0,
        explanation: "'Might' indicates future possibility."
      },
      {
        prompt: "Tomorrow is Sunday, so we _____ wake up early for school.",
        options: ["don't have to", "mustn't", "shouldn't", "can't"],
        correct: 0,
        explanation: "'Don't have to' indicates absence of necessity ('no cal')."
      },
      {
        prompt: "He stopped _____ a bottle of water because he was extremely dehydrated.",
        options: ["buying", "to buy", "buy", "to buying"],
        correct: 1,
        explanation: "'Stopped to buy' means he paused his journey in order to purchase water."
      },
      {
        prompt: "Unripe green apples and fresh lemon juice taste distinctly _____.",
        options: ["sour", "bitter", "fragrant", "sensory"],
        correct: 0,
        explanation: "'Sour' describes sharp acidic taste."
      },
      {
        prompt: "Are you capable of memorizing long lists? In other words, _____ you memorize them?",
        options: ["can", "may", "must", "should"],
        correct: 0,
        explanation: "'Can' expresses present ability."
      },
      {
        prompt: "He forgot _____ the front gate, so the family puppy ran into the garden.",
        options: ["to shut", "shutting", "shut", "to shutting"],
        correct: 0,
        explanation: "Forgot to perform a required task: forgot to shut."
      },
      {
        prompt: "A psychological condition characterized by persistent worry and restlessness is _____.",
        options: ["anxiety", "dexterity", "stamina", "aroma"],
        correct: 0,
        explanation: "'Anxiety' is chronic worry or nervousness."
      },
      {
        prompt: "When my father was young, he _____ run a marathon in under three hours.",
        options: ["could", "can", "might", "should"],
        correct: 0,
        explanation: "General past ability -> 'could'."
      },
      {
        prompt: "Silk feels very smooth to touch; it has a remarkably soft _____.",
        options: ["texture", "aroma", "sensory", "sour"],
        correct: 0,
        explanation: "'Texture' is tactile surface quality."
      },
      {
        prompt: "You look unwell; you _____ visit the doctor before your symptoms worsen.",
        options: ["should", "mustn't", "don't have to", "can't"],
        correct: 0,
        explanation: "'Should' offers sound advice."
      },
      {
        prompt: "With continuous daily practice, you will _____ to play Chopin on the piano.",
        options: ["be able", "can", "could", "able"],
        correct: 0,
        explanation: "Future ability structure: 'will be able (to)'."
      },
      {
        prompt: "Psychologists suggest _____ thirty minutes before bedtime to sleep better.",
        options: ["unplugging", "to unplug", "unplug", "unplugged"],
        correct: 0,
        explanation: "'Suggest' is followed by a gerund: 'suggest unplugging'."
      }
    ]
  },

  // MODULE 5 MASTERY TEST (18 Questions)
  {
    id: "m5-test",
    moduleId: 5,
    moduleTitle: "Module 5: Mother Nature",
    title: "Module 5: Extended Mastery Test",
    subtitle: "Comprehensive assessment combining all vocabulary (Flora, Animals, Extreme Weather) & grammar (Conditionals 0, 1st, 2nd, 3rd & Time Clauses)",
    questions: [
      {
        prompt: "If pure water reaches 100°C at normal atmospheric pressure, it _____.",
        options: ["boils", "will boil", "boiled", "would boil"],
        correct: 0,
        explanation: "Zero conditional for scientific law: 'boils'."
      },
      {
        prompt: "The biological process by which green plants produce glucose using sunlight is _____.",
        options: ["photosynthesis", "vegetation", "camouflage", "drought"],
        correct: 0,
        explanation: "'Photosynthesis' synthesizes organic compounds from solar energy."
      },
      {
        prompt: "If it storms tomorrow, park rangers _____ the hiking trail to visitors.",
        options: ["close", "will close", "closed", "would close"],
        correct: 1,
        explanation: "First conditional: 'will close'."
      },
      {
        prompt: "An extended period of dangerously low rainfall causing severe water shortages is a _____.",
        options: ["drought", "blizzard", "heatwave", "flash flood"],
        correct: 0,
        explanation: "A 'drought' is a prolonged period of dry weather."
      },
      {
        prompt: "If I _____ an apex predator, I would choose to be a majestic snow leopard.",
        options: ["were", "am", "had been", "will be"],
        correct: 0,
        explanation: "Second conditional hypothetical: 'were'."
      },
      {
        prompt: "The chameleon alters its skin pigmentation to achieve effective natural _____.",
        options: ["camouflage", "predator", "prey", "instinct"],
        correct: 0,
        explanation: "'Camouflage' disguises animal appearances."
      },
      {
        prompt: "If scientists had protected the dodo bird in time, it _____ extinct.",
        options: ["wouldn't become", "wouldn't have become", "won't have become", "hadn't become"],
        correct: 1,
        explanation: "Third conditional past regret: 'wouldn't have become'."
      },
      {
        prompt: "We will depart from the mountain hut as soon as the thick fog _____.",
        options: ["clears", "will clear", "cleared", "has clear"],
        correct: 0,
        explanation: "Time clauses with 'as soon as' take the Present Simple: 'clears'."
      },
      {
        prompt: "A ferocious winter blizzard combining high winds and freezing snow is accompanied by _____.",
        options: ["sub-zero temperatures", "heatwave", "drought", "photosynthesis"],
        correct: 0,
        explanation: "Blizzards bring extreme cold and freezing winds."
      },
      {
        prompt: "Unless we take swift ecological measures, global temperatures _____ continue to rise.",
        options: ["will", "would", "had", "did"],
        correct: 0,
        explanation: "'Unless + present, will + infinitive'."
      },
      {
        prompt: "Lions, wolves, and great white sharks are all apex _____ in their ecosystems.",
        options: ["predators", "prey", "fungi", "vegetation"],
        correct: 0,
        explanation: "A 'predator' hunts other animals."
      },
      {
        prompt: "If you heat ice cubes in a saucepan, they _____ quickly.",
        options: ["melt", "will melt", "melted", "would melt"],
        correct: 0,
        explanation: "Zero conditional fact: melt."
      },
      {
        prompt: "If I lived closer to the natural coast, I _____ surf every morning.",
        options: ["would", "will", "would have", "had"],
        correct: 0,
        explanation: "Second conditional result clause: would."
      },
      {
        prompt: "Animals that fly to warmer continents during winter are _____ species.",
        options: ["migratory", "sensory", "fragrant", "overcrowded"],
        correct: 0,
        explanation: "'Migratory' species travel seasonally."
      },
      {
        prompt: "If the mountaineers had carried an emergency beacon, the rescue team _____ them earlier.",
        options: ["would have located", "located", "will locate", "would locate"],
        correct: 0,
        explanation: "Third conditional: would have located."
      },
      {
        prompt: "Sudden heavy torrential rain in narrow valleys can cause dangerous flash _____.",
        options: ["floods", "droughts", "heatwaves", "blizzards"],
        correct: 0,
        explanation: "Flash floods occur rapidly after intense precipitation."
      },
      {
        prompt: "I will call you before the expedition boat _____ the harbor.",
        options: ["leaves", "will leave", "left", "leaving"],
        correct: 0,
        explanation: "Time clause introduced by 'before' takes Present Simple: leaves."
      },
      {
        prompt: "A flash of electrical discharge in the atmosphere during storms is called _____.",
        options: ["lightning", "drought", "blizzard", "heatwave"],
        correct: 0,
        explanation: "'Lightning' is the electrical flash."
      }
    ]
  },

  // MODULE 6 MASTERY TEST (18 Questions)
  {
    id: "m6-test",
    moduleId: 6,
    moduleTitle: "Module 6: Trending Now",
    title: "Module 6: Extended Mastery Test",
    subtitle: "Comprehensive assessment combining all vocabulary (Fashion, Social Media, Travel) & grammar (Reported Statements, Questions, Orders & Offers)",
    questions: [
      {
        prompt: "'I want to buy these recycled sneakers,' said Leo.<br>Leo said that he _____ to buy those sneakers.",
        options: ["wanted", "wants", "had wanted", "will want"],
        correct: 0,
        explanation: "Present Simple shifts to Past Simple: 'wanted'."
      },
      {
        prompt: "Clothing from a previous decade valued for its lasting style and quality is _____.",
        options: ["vintage", "outfit", "catwalk", "gadget"],
        correct: 0,
        explanation: "'Vintage' represents classic attire from previous eras."
      },
      {
        prompt: "'Where did you record that viral clip?' asked Alex.<br>Alex asked me _____ that viral clip.",
        options: ["where I had recorded", "where did I record", "where had I recorded", "where recorded I"],
        correct: 0,
        explanation: "Reported question word order: Wh-word + Subject + Verb ('where I had recorded')."
      },
      {
        prompt: "The automated mathematical formula that curates personalized content on social feeds is an _____.",
        options: ["algorithm", "itinerary", "artefact", "upbringing"],
        correct: 0,
        explanation: "An 'algorithm' determines social media rankings."
      },
      {
        prompt: "'Please show me your digital boarding pass,' said the gate agent.<br>The agent asked me _____ my digital boarding pass.",
        options: ["to show", "showing", "show", "that I show"],
        correct: 0,
        explanation: "Reported request: asked + person + to + infinitive ('to show')."
      },
      {
        prompt: "A detailed schedule outlining travel stops, flights, and booked accommodation is an _____.",
        options: ["itinerary", "boarding pass", "jet lag", "commute"],
        correct: 0,
        explanation: "An 'itinerary' is a comprehensive travel plan."
      },
      {
        prompt: "'Do not lean against the glass railing!' warned the guide.<br>The guide warned visitors _____ against the glass railing.",
        options: ["not to lean", "to not lean", "don't lean", "not leaning"],
        correct: 0,
        explanation: "Reported negative order: warned visitors not to lean."
      },
      {
        prompt: "Severe fatigue caused by travelling across several time zones is known as _____.",
        options: ["jet lag", "luggage allowance", "claustrophobia", "stamina"],
        correct: 0,
        explanation: "'Jet lag' is circadian desynchronosis from time zone changes."
      },
      {
        prompt: "'Why don't we book bicycles to explore the city?' said Maria.<br>Maria suggested _____ bicycles to explore the city.",
        options: ["renting", "to rent", "rent", "us to rent"],
        correct: 0,
        explanation: "'Suggest' is followed by a gerund: 'suggested renting'."
      },
      {
        prompt: "The permanent trace left behind by your online posts, comments, and uploads is your digital _____.",
        options: ["footprint", "pass", "catwalk", "trendsetter"],
        correct: 0,
        explanation: "'Digital footprint' is your online trail."
      },
      {
        prompt: "'We are leaving for Paris tomorrow,' said Emma.<br>Emma explained that they were leaving for Paris _____.",
        options: ["the following day", "tomorrow", "yesterday", "that day"],
        correct: 0,
        explanation: "'Tomorrow' shifts to 'the following day' or 'the next day'."
      },
      {
        prompt: "A person who establishes a new popular style followed by others is a _____.",
        options: ["trendsetter", "pedestrian", "ancestor", "sibling"],
        correct: 0,
        explanation: "A 'trendsetter' initiates new fashion trends."
      },
      {
        prompt: "'Do you stream videos online?' asked Lucas.<br>Lucas asked me _____ videos online.",
        options: ["if I streamed", "did I stream", "if streamed I", "if did I stream"],
        correct: 0,
        explanation: "Yes/No question: if + subject (I) + verb (streamed)."
      },
      {
        prompt: "The airline enforces a strict 20 kg baggage _____ per person.",
        options: ["allowance", "itinerary", "boarding", "jet lag"],
        correct: 0,
        explanation: "Collocation: 'luggage allowance'."
      },
      {
        prompt: "'I'll help you carry that heavy backpack,' offered Carlos.<br>Carlos offered _____ that heavy backpack.",
        options: ["to carry", "carrying", "carry", "that he carries"],
        correct: 0,
        explanation: "Reporting offers: offered + to + infinitive ('to carry')."
      },
      {
        prompt: "Models walk along an elevated runway called a _____ to display new collections.",
        options: ["catwalk", "itinerary", "pavement", "skyscraper"],
        correct: 0,
        explanation: "A fashion runway is a 'catwalk'."
      },
      {
        prompt: "'Can you edit this video?' asked Sandra.<br>Sandra asked me if I _____ edit that video.",
        options: ["could", "can", "would can", "am able"],
        correct: 0,
        explanation: "Modal 'can' shifts to 'could'."
      },
      {
        prompt: "Youth hostels are excellent _____ accommodation for student travelers on a tight budget.",
        options: ["budget", "vintage", "exhausted", "sour"],
        correct: 0,
        explanation: "'Budget accommodation' refers to affordable, economical lodging."
      }
    ]
  }
];
