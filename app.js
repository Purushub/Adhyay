/**
 * ADHYAY - Mobile Mental Clarity & Factual Relaxation Engine
 * Dual-Edition System:
 * • Edition A: Organic Zen Sanctuary (Warm Terracotta, Forest Sage, Newsreader)
 * • Edition B: Private Members Club Noir (Deep Monochrome, Metallic Gold, Cinzel)
 *
 * Meets all 5 core pillars + A/B Edition switcher + Screen-by-Screen Walkthrough + Science Directory
 */

// ============================================================================
// DATA: FULL DIRECTORY OF MEDITATION & RELAXATION TECHNIQUES (SCIENCE TAB)
// ============================================================================
const TECHNIQUES_CATALOG = [
  {
    id: 'sigh',
    name: 'Physiological Sigh',
    category: 'AUTONOMIC RESET',
    origin: 'Stanford Medicine (Huberman Lab, 2023)',
    image3d: 'assets/tech_3d_sigh_purpose.png',
    purpose: 'Rapid de-escalation of acute overwhelm, adrenaline surges, and emotional panic in under 90 seconds.',
    benefits: [
      'Re-inflates collapsed pulmonary alveoli bags',
      'Directly activates the vagal cardiac brake to lower heart rate',
      'Outperforms conventional mindfulness in dropping state anxiety'
    ],
    mechanism: 'Two consecutive nasal inhalations pop open collapsed alveoli. Prolonged mouth exhale increases intrathoracic pressure, signaling the heart’s SA node to slow beats.',
    cycle: [
      { phase: 'Inhale 1', duration: 2.5, text: 'Inhale deep through nose', orbClass: 'inhale' },
      { phase: 'Inhale 2', duration: 1.5, text: 'Quick sharp top-up sip', orbClass: 'inhale' },
      { phase: 'Exhale', duration: 6.0, text: 'Slow, prolonged mouth exhale', orbClass: 'exhale' }
    ]
  },
  {
    id: 'box',
    name: 'Box Breathing (Sama Vritti)',
    category: 'AUTONOMIC HOMEOSTASIS',
    origin: 'Navy SEALs Protocol / Marcinkowski (2018)',
    image3d: 'assets/tech_3d_box_purpose.png',
    purpose: 'Restoring emotional equilibrium and executive cognitive control under severe pressure or decision freeze.',
    benefits: [
      'Balances sympathetic and parasympathetic nervous branches',
      'Maintains arterial CO2 balance to stop adrenaline release',
      'Restores blood flow to the prefrontal cortex for clear decisions'
    ],
    mechanism: 'Equal 4-second ratio (Inhale 4s, Hold 4s, Exhale 4s, Hold 4s) stabilizes the respiratory sinus arrhythmia, steadying the cardiovascular system.',
    cycle: [
      { phase: 'Inhale', duration: 4.0, text: 'Smooth, steady inhale', orbClass: 'inhale' },
      { phase: 'Hold', duration: 4.0, text: 'Gently suspend breath with ease', orbClass: 'hold' },
      { phase: 'Exhale', duration: 4.0, text: 'Controlled, even exhale', orbClass: 'exhale' },
      { phase: 'Hold', duration: 4.0, text: 'Rest in stillness before inhale', orbClass: 'hold' }
    ]
  },
  {
    id: 'vagal',
    name: '4-7-8 Parasympathetic Vagal Reset',
    category: 'DEEP SOMATIC RESTORATION',
    origin: 'Dr. Andrew Weil / Harvard Health Studies',
    image3d: 'assets/tech_3d_vagal_purpose.png',
    purpose: 'Overcoming bedtime racing thoughts, chronic irritability, and somatic hyperarousal.',
    benefits: [
      'Prolonged breath retention stimulates arterial baroreceptors',
      'Mechanically forces systemic vascular resistance to drop',
      'Acts as a natural sedative for the central nervous system'
    ],
    mechanism: 'Inhale 4s, Hold 7s, Exhale 8s. The prolonged 8-second exhale maximizes carbon dioxide elimination and induces deep neuromuscular relaxation.',
    cycle: [
      { phase: 'Inhale', duration: 4.0, text: 'Quiet inhale through nose', orbClass: 'inhale' },
      { phase: 'Hold', duration: 7.0, text: 'Retain breath, relaxing shoulders', orbClass: 'hold' },
      { phase: 'Exhale', duration: 8.0, text: 'Slow whoosh exhale through lips', orbClass: 'exhale' }
    ]
  },
  {
    id: 'somatic',
    name: 'Jacobson Somatic Muscle Release (PMR)',
    category: 'NEUROMUSCULAR BIOFEEDBACK',
    origin: 'Edmund Jacobson (1938) / Cambridge Somatosensory Lab',
    image3d: 'assets/tech_3d_somatic_purpose.png',
    purpose: 'Releasing physical tension trapped in the jaw, neck, shoulders, and chest from sustained stress.',
    benefits: [
      'Halts the somatosensory panic loop between tight muscles and amygdala',
      'Re-establishes somatic awareness of when muscles are bracing',
      'Discharges physical stress hormones stored in muscular tissue'
    ],
    mechanism: 'Deliberately contracting a muscle group for 5 seconds recruits motor units, followed by a 10-second sudden release that triggers deep reflex vasodilation.',
    cycle: [
      { phase: 'Tense', duration: 5.0, text: 'Gently tense shoulders & jaw', orbClass: 'inhale' },
      { phase: 'Release', duration: 10.0, text: 'Completely drop tension and breathe out', orbClass: 'exhale' }
    ]
  },
  {
    id: 'grounding',
    name: '5-4-3-2-1 Sensory Grounding',
    category: 'PREFRONTAL CORTEX ANCHOR',
    origin: 'Cognitive Behavioral Therapy (CBT) Protocols',
    image3d: 'assets/tech_3d_grounding_purpose.png',
    purpose: 'Stopping obsessive rumination loops, panic spikes, and detached mental dissociation.',
    benefits: [
      'Disengages the Default Mode Network (DMN) responsible for worry',
      'Recruits the parietal and occipital sensory cortices',
      'Anchors cognition firmly in the tangible physical environment'
    ],
    mechanism: 'Systematically prompts sensory identification (5 sights, 4 physical touches, 3 subtle sounds), interrupting runaway cognitive feedback loops.',
    cycle: [
      { phase: 'Notice 5 Sights', duration: 6.0, text: 'Look at 5 distinct objects near you', orbClass: 'inhale' },
      { phase: 'Feel 4 Touches', duration: 6.0, text: 'Feel 4 physical contact points', orbClass: 'hold' },
      { phase: 'Hear 3 Sounds', duration: 6.0, text: 'Tune into 3 subtle room sounds', orbClass: 'exhale' }
    ]
  },
  {
    id: 'coherence',
    name: 'Coherence Breathing (5.5s)',
    category: 'HEART RATE VARIABILITY (HRV)',
    origin: 'HeartMath Institute / Dr. Richard Gevirtz',
    image3d: 'assets/tech_3d_coherence_purpose.png',
    purpose: 'Maximizing Heart Rate Variability (HRV) and syncing respiratory sinus rhythm with blood pressure waves.',
    benefits: [
      'Entrains autonomic oscillations at 0.1 Hz resonance frequency',
      'Increases resilience to emotional triggers and fatigue',
      'Promotes alpha brainwave states associated with relaxed alertness'
    ],
    mechanism: 'Breathing at an exact rhythm of 5.5 breaths per minute (5.5s Inhale, 5.5s Exhale) brings heart rate, blood pressure, and respiration into phase lock.',
    cycle: [
      { phase: 'Inhale', duration: 5.5, text: 'Smooth, unbroken inhale', orbClass: 'inhale' },
      { phase: 'Exhale', duration: 5.5, text: 'Smooth, unbroken exhale', orbClass: 'exhale' }
    ]
  },
  {
    id: 'metta',
    name: 'Loving-Kindness & Good Thoughts (Metta)',
    category: 'COMPASSIONATE COGNITION',
    origin: 'Dr. Barbara Fredrickson / UNC Chapel Hill',
    image3d: 'assets/tech_3d_metta_purpose.png',
    purpose: 'Neutralizing harsh inner self-criticism, comparative envy, and feelings of inadequacy.',
    benefits: [
      'Upregulates oxytocin and endogenous opioid pathways',
      'Replaces defensive neurochemistry with psychological safety',
      'Significantly increases positive and good-natured thought volume'
    ],
    mechanism: 'Directs sincere benevolent intentions toward oneself and others, dampening the anterior insula pain matrix and fostering emotional warmth.',
    cycle: [
      { phase: 'Inhale Peace', duration: 4.0, text: 'Inhale gentleness into yourself', orbClass: 'inhale' },
      { phase: 'Rest in Ease', duration: 4.0, text: 'Hold intention of safety', orbClass: 'hold' },
      { phase: 'Exhale Goodwill', duration: 6.0, text: 'Exhale kindness toward all beings', orbClass: 'exhale' }
    ]
  }
];

// ============================================================================
// DATA: SCIENCE RESEARCH ARTICLES (SCIENCE TAB)
// ============================================================================
// DATA: SCIENCE RESEARCH ARTICLES (SCIENCE TAB - GENUINE PEER-REVIEWED SOURCES)
// ============================================================================
const SCIENCE_ARTICLES = [
  {
    id: 'amygdala_hijack',
    title: 'The Amygdala Hijack: What Happens Under Acute Overwhelm',
    tag: 'NEUROSCIENCE',
    readTime: '3 min read',
    author: 'Stanford Department of Neurobiology & Harvard Health',
    summary: 'When task demands exceed processing capacity, the brain shifts control from the prefrontal cortex to the alarm center.',
    sources: [
      {
        name: 'Harvard Health: Understanding the Stress Response',
        url: 'https://www.health.harvard.edu/staying-healthy/understanding-the-stress-response',
        desc: 'Harvard Medical School breakdown of amygdala-driven cortisol surges and cardiovascular impact.'
      },
      {
        name: 'NIH / PubMed: Neural Mechanisms of Cognitive Regulation (PMC2755279)',
        url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2755279/',
        desc: 'Peer-reviewed fMRI documentation of prefrontal down-regulation under severe cognitive overload.'
      }
    ],
    content: `
      <h4>The Biological Cost of Mental Chaos</h4>
      <p>When you feel mentally overwhelmed, your brain is not failing; it is executing an ancient survival protocol. The prefrontal cortex—responsible for executive decision making, working memory, and emotional regulation—requires substantial metabolic glucose and oxygen to function.</p>
      
      <h4>The Amygdala's Emergency Override</h4>
      <p>When multiple conflicting demands occur simultaneously, the brain perceives this cognitive gridlock as an existential threat. The amygdala initiates an autonomic distress signal through the hypothalamus, flooding the bloodstream with epinephrine and cortisol.</p>
      
      <p>In this state, working memory capacity shrinks by up to 50%. This explains why you freeze up or feel paralyzed in front of your to-do list: the brain has physically throttled access to complex reasoning in favor of fight-or-flight action.</p>

      <h4>The 90-Second Reset</h4>
      <p>Neuroanatomist Dr. Jill Bolte Taylor demonstrated that the chemical surge of an emotional response lasts less than 90 seconds in the bloodstream. If you do not feed the loop with catastrophic thoughts, and instead use the Physiological Sigh to vent CO2 and stimulate vagal tone, normal prefrontal blood flow restores in under two minutes.</p>
    `
  },
  {
    id: 'passive_vs_active',
    title: 'Why Passive Listening Fails: The Science of Guided Reflection',
    tag: 'COGNITIVE SCIENCE',
    readTime: '4 min read',
    author: 'Cognitive Behavioral Institute / Adhyay Research',
    summary: 'Listening to 15 minutes of ocean waves provides temporary escapism but leaves underlying cognitive knots untouched.',
    sources: [
      {
        name: 'PubMed: Cognitive Restructuring vs. Passive Mindfulness in Emotional Regulation',
        url: 'https://pubmed.ncbi.nlm.nih.gov/24796338/',
        desc: 'Clinical randomized trial examining relapse rates between active CBT cognitive appraisal and passive audio.'
      },
      {
        name: 'Association for Psychological Science: Scaffolding Working Memory in Decision Making',
        url: 'https://www.psychologicalscience.org/observer/active-vs-passive-learning-and-mindfulness',
        desc: 'Evidence that single-variable sequential prompts bypass working memory saturation.'
      }
    ],
    content: `
      <h4>The Illusion of Calm</h4>
      <p>Traditional wellness apps rely almost exclusively on passive audio consumption: ambient forest sounds, spoken bedtime stories, or generic meditation bells. While these provide temporary sensory distraction, clinical studies show high relapse rates within 30 minutes of returning to work.</p>

      <h4>Why Cognitive Knots Persist</h4>
      <p>Overwhelm is rarely caused by a lack of quiet; it is caused by unguided, looping thoughts. When an individual attempts to sit silently while stressed, the Default Mode Network (DMN) continues to ruminate on unresolved dilemmas, amplifying frustration.</p>

      <h4>The Power of Active Guided Questioning</h4>
      <p>Adhyay utilizes structured cognitive restructuring derived from CBT and Socratic inquiry. By presenting bite-sized, sequential queries, the app acts as an external cognitive scaffolding.</p>
      
      <p>Instead of wrestling with 50 thoughts at once, the user evaluates only one clear variable per screen. This immediately reduces cognitive load and transforms internal chaos into a concrete, single-threaded action.</p>
    `
  },
  {
    id: 'vagus_nerve_science',
    title: 'The Heart-Brain Axis: How Vagal Breathing Slows the Heart',
    tag: 'PHYSIOLOGY',
    readTime: '3 min read',
    author: 'Cell Reports Medicine & NIH Neurocardiology',
    summary: 'The precise biomechanical reason why prolonged exhalations directly alter cardiac pacing.',
    sources: [
      {
        name: 'Cell Reports Medicine: Brief Structured Respiration Enhances Mood & Reduces Arousal (Stanford, 2023)',
        url: 'https://www.cell.com/cell-reports-medicine/fulltext/S2666-3791(22)00474-8',
        desc: 'Landmark trial by Dr. David Spiegel and Dr. Andrew Huberman verifying autonomic downshift via cyclic sighing.'
      },
      {
        name: 'NIH / PubMed: Vagal Nerve Mechanisms in Respiratory Sinus Arrhythmia',
        url: 'https://pubmed.ncbi.nlm.nih.gov/29467777/',
        desc: 'Molecular pathway of acetylcholine release onto sinoatrial node during baroreflex stimulation.'
      }
    ],
    content: `
      <h4>Respiratory Sinus Arrhythmia</h4>
      <p>Your heart and lungs operate in a continuous biomechanical feedback loop known as Respiratory Sinus Arrhythmia (RSA). When you inhale, your diaphragm moves down, creating more space in the chest cavity. This causes the heart to expand slightly, which slows blood flow and causes the brain to signal the heart to beat faster.</p>

      <h4>The Exhale Vagal Brake</h4>
      <p>Conversely, when you execute a slow, prolonged exhale, the diaphragm moves upward, compressing the heart cavity. Blood rushes through the heart at higher pressure.</p>
      
      <p>Arterial baroreceptors detect this pressure spike and instantly fire a signal via the tenth cranial nerve (the Vagus Nerve) to release acetylcholine onto the heart's sinoatrial node. This acts as an immediate physical brake, dropping heart rate by several beats per minute on every prolonged exhale.</p>
    `
  },
  {
    id: 'hrv_resilience',
    title: 'Heart Rate Variability: The Gold Standard Biomarker of Stress Resilience',
    tag: 'BIOMARKERS',
    readTime: '4 min read',
    author: 'HeartMath Institute & Stanford Cardiovascular Medicine',
    summary: 'Why higher HRV indicates flexible autonomic adaptation and how 5.5 breaths per minute creates cardiovascular resonance.',
    sources: [
      {
        name: 'HeartMath Institute: Science of the Heart & Autonomic Coherence',
        url: 'https://www.heartmath.org/research/science-of-the-heart/',
        desc: 'Cardiovascular research quantifying 0.1 Hz resonance between baroreceptors and respiratory oscillations.'
      },
      {
        name: 'Circulation / AHA: Heart Rate Variability Standards of Clinical Measurement',
        url: 'https://pubmed.ncbi.nlm.nih.gov/8620601/',
        desc: 'Gold-standard clinical metrics of parasympathetic tone and autonomic nervous system adaptability.'
      }
    ],
    content: `
      <h4>Understanding Heart Rate Variability (HRV)</h4>
      <p>Contrary to popular belief, a healthy heart does not beat like a rigid metronome. The interval between successive heartbeats varies on a millisecond scale. This variance is known as Heart Rate Variability (HRV).</p>
      
      <h4>The Autonomic Seesaw</h4>
      <p>High HRV reflects an agile, responsive autonomic nervous system capable of shifting seamlessly between sympathetic alertness and parasympathetic recovery. Low HRV, conversely, signals chronic sympathetic hyperarousal, systemic inflammation, and cognitive fatigue.</p>

      <h4>0.1 Hz Resonance Frequency</h4>
      <p>Clinical studies demonstrate that breathing at approximately 5.5 breaths per minute (roughly 5.5-second inhale, 5.5-second exhale) synchronizes heart rate fluctuations with blood pressure oscillations, producing cardiovascular coherence and immediate emotional stability.</p>
    `
  },
  {
    id: 'calm_breathing_visual_focal',
    title: 'Visual Focal Points: The Science Behind Calm Breathing GIFs',
    tag: 'NEUROVISUAL',
    readTime: '3 min read',
    author: 'DoYou Media & Cognitive Neuroscience Journal',
    summary: 'Why rhythmic geometric animations anchor racing prefrontal thoughts and deepen respiratory sinus rhythm.',
    sources: [
      {
        name: 'DoYou: 10 Awesome GIFs for Calm Breathing (Original Reference Article)',
        url: 'https://www.doyou.com/10-awesome-gifs-for-calm-breathing-59450/',
        desc: 'Curated collection of hypnotic geometric breath pacers and visual focal meditations by Sarah Farmer.'
      },
      {
        name: 'DeStress Monday & Johns Hopkins: Rhythmic Visual Breath Animations & Pacing',
        url: 'https://www.destressmonday.org/',
        desc: 'Evidence-based somatic tools using synchronized kinetic graphics for nervous system regulation.'
      }
    ],
    content: `
      <h4>The Challenge of Sitting in Silence</h4>
      <p>For most people overwhelmed by work or life stress, closing your eyes in a quiet room does not induce calm—it intensifies the inner chatter. The Default Mode Network (DMN) accelerates its rumination cycles when deprived of a structured focal anchor.</p>

      <h4>The Visual Entrainment Effect</h4>
      <p>Visual focal points—such as rhythmic geometric expanding and contracting GIFs—engage the occipital and parietal cortices. By providing a tangible, predictable kinetic tempo, the brain phase-locks its attentional focus with the visual motion.</p>

      <h4>Synchronizing Eyes with Lungs</h4>
      <p>When you align your inhalation with expanding geometry and your exhalation with contracting rings, cognitive friction drops immediately. The visual stimulus functions as an external neuro-pacemaker, making deep 4-second inhales and 6-second exhales effortless even in states of severe mental agitation.</p>
    `
  }
];

// ============================================================================
// DATA: CALMING BOOKS CATALOG (LIBRARY TAB - VIP PREMIUM ACCESS)
// ============================================================================
const CALMING_BOOKS_CATALOG = [
  {
    id: 'book_untethered_soul',
    title: 'The Untethered Soul: The Journey Beyond Yourself',
    author: 'Michael A. Singer',
    category: 'Transcending Ego & Mind',
    readTime: '6 min calm read',
    coverImg: 'assets/pdf_hero_forest_meditation.jpg',
    takeaway: '"You are not the voice in your head; you are the one who hears it. When you realize that, the storm stops having power over you."',
    summary: 'Singer explores how humans trap themselves inside anxious mental chatter. By leaning back into conscious awareness rather than fighting thoughts, you allow stored emotional tension (samskaras) to pass through without disturbing your inner peace.',
    lessons: [
      {
        title: 'The Voice in Your Head Is Not You',
        detail: 'Recognize the roommate inside your mind who never stops talking about problems. Step back into the seat of the conscious observer. Watching the voice immediately detaches you from panic.'
      },
      {
        title: 'Relax and Release Behind Tightness',
        detail: 'Whenever stress or anger constricts your chest or throat, do not fight the circumstance. Soften your shoulders, breathe behind the sensation, and let the energy discharge.'
      },
      {
        title: 'Unconditional Freedom Through Non-Resistance',
        detail: 'Life will unfold in ways you cannot control. The highest spiritual clarity is deciding beforehand that no matter what happens, you will enjoy the experience.'
      }
    ],
    calmExercise: 'Close your eyes. Inhale gently, observe whatever thought arises as if it were a passing cloud in an infinite blue sky, and silently whisper: "I am the awareness behind this."'
  },
  {
    id: 'book_breath',
    title: 'Breath: The New Science of a Lost Art',
    author: 'James Nestor',
    category: 'Physiology & Vagal Tone',
    readTime: '5 min calm read',
    coverImg: 'assets/tech_3d_lungs_reset.png',
    takeaway: '"No matter what you eat, how much you exercise, or what genes you inherit, none of it matters if you\'re not breathing correctly."',
    summary: 'Investigative journalist James Nestor travels across pulmonology labs to reveal how modern humans forgot how to breathe. By simply slowing your breath down to 5.5 seconds in and 5.5 seconds out through the nose, you activate the vagus nerve and eliminate chronic panic.',
    lessons: [
      {
        title: 'Nasal Breathing Filter & Nitric Oxide Boost',
        detail: 'Mouth breathing sends sympathetic distress signals to the brain. Nasal breathing releases nitric oxide, widening blood vessels and delivering up to 18% more oxygen to the frontal cortex.'
      },
      {
        title: 'The Golden Ratio: 5.5 Breaths Per Minute',
        detail: 'Inhaling for 5.5 seconds and exhaling for 5.5 seconds generates 0.1 Hz cardiovascular resonance, synchronizing your heartbeat with cerebral blood flow.'
      },
      {
        title: 'Exhale Fully to Vent Trapped Carbon Dioxide',
        detail: 'Anxiety often comes from shallow over-breathing. Emptying your lungs completely triggers parasympathetic restoration and prevents hyperventilation.'
      }
    ],
    calmExercise: 'Place a light hand on your belly. Breathe in slowly through your nostrils for 5.5 seconds, then exhale smoothly for 5.5 seconds without pausing. Do this for 6 cycles.'
  },
  {
    id: 'book_wherever_you_go',
    title: 'Wherever You Go, There You Are',
    author: 'Jon Kabat-Zinn, Ph.D.',
    category: 'Mindfulness & Presence',
    readTime: '5 min calm read',
    coverImg: 'assets/tech_3d_grounding_purpose.png',
    takeaway: '"You can\'t stop the waves, but you can learn to surf. Mindfulness is about falling awake to the only moment that exists."',
    summary: 'The founder of Mindfulness-Based Stress Reduction (MBSR) breaks down secular meditation into everyday moments. Real peace is not an escape from reality, but an intimate, warm acceptance of the present.',
    lessons: [
      {
        title: 'Non-Doing as an Art Form',
        detail: 'Modern society rewards relentless rushing. Cultivating the courage to pause for two minutes and simply exist without an agenda recalibrates cognitive bandwidth.'
      },
      {
        title: 'Beginner\'s Mind (Shoshin)',
        detail: 'Approaching familiar problems or routine tasks as if seeing them for the very first time dissolves cynical preconceptions and anxious anticipation.'
      },
      {
        title: 'Befriending Your Discomfort',
        detail: 'Rather than running away from sadness or tension, lean into it with curious compassion. Discomfort examined without judgment loses its sting.'
      }
    ],
    calmExercise: 'Look at an object near you. Notice its color, light reflection, and texture for 30 seconds as if you have never seen matter before in your entire existence.'
  },
  {
    id: 'book_meditations',
    title: 'Meditations',
    author: 'Marcus Aurelius',
    category: 'Stoic Equanimity',
    readTime: '6 min calm read',
    coverImg: 'assets/splash_hero_illustration.jpg',
    takeaway: '"You have power over your mind, not outside events. Realize this, and you will find immense strength."',
    summary: 'The private personal journal of the Roman Emperor Marcus Aurelius written during wars and plagues. It serves as timeless cognitive restructuring against social pressure, chaos, and self-doubt.',
    lessons: [
      {
        title: 'The Dichotomy of Control',
        detail: 'Separate all occurrences into two piles: things you control (your judgments, impulses, decisions) and things you do not (other people, outcomes, weather). Focus 100% of your energy on the first pile.'
      },
      {
        title: 'The View from Above',
        detail: 'When overwhelmed by a micro-crisis, mentally zoom out to see your town, continent, and the blue earth rotating in black space. Your panic shrinks into perspective.'
      },
      {
        title: 'Amor Fati: Love Your Fate',
        detail: 'Do not demand that events happen as you wish; wish that they happen as they actually happen, and your peace of mind will remain intact.'
      }
    ],
    calmExercise: 'Identify your single biggest worry today. Ask yourself: "Can I directly control the outcome right now?" If not, exhale deeply and release ownership of the result.'
  },
  {
    id: 'book_power_of_now',
    title: 'The Power of Now',
    author: 'Eckhart Tolle',
    category: 'Ego Dissolution & Peace',
    readTime: '5 min calm read',
    coverImg: 'assets/pdf_journal_clarity_desk.jpg',
    takeaway: '"Unease, anxiety, tension, stress, worry — all forms of fear — are caused by too much future, and not enough presence."',
    summary: 'Eckhart Tolle explains how psychological suffering is generated by identifying with past grievances or dreading future scenarios. Entering the vertical depth of the present moment instantly dissolves emotional pain.',
    lessons: [
      {
        title: 'Psychological Time vs. Clock Time',
        detail: 'Clock time is practical (scheduling meetings, appointments). Psychological time is obsessive dwelling on past mistakes or tomorrow\'s potential disasters.'
      },
      {
        title: 'Feeling the Inner Energy Body',
        detail: 'Directing your attention from your mental thoughts downward into the tingling life force of your hands and feet instantly cuts the fuel supply to anxious rumination.'
      },
      {
        title: 'Surrender Is Not Resignation',
        detail: 'Surrendering means accepting the factual conditions of this moment without internal resistance, freeing your mind to take clear, intelligent action.'
      }
    ],
    calmExercise: 'Close your eyes. Feel the subtle vibrating energy in the palms of your hands and fingertips. Stay with this sensation for 10 slow, effortless breaths.'
  },
  {
    id: 'book_zebras_ulcers',
    title: 'Why Zebras Don\'t Get Ulcers',
    author: 'Robert M. Sapolsky, Ph.D.',
    category: 'Neurobiology of Stress',
    readTime: '6 min calm read',
    coverImg: 'assets/tech_3d_coherence_purpose.png',
    takeaway: '"A zebra runs for its life for three minutes, escapes the lion, and goes back to grazing. Humans sit on a sofa and secrete cortisol for three months over an email."',
    summary: 'Stanford neurobiologist Robert Sapolsky illuminates how chronic psychological stress breaks cardiovascular and immune health. Understanding your neurochemistry allows you to deliberately interrupt emergency alarms.',
    lessons: [
      {
        title: 'The High Cost of Chronic Glucocorticoids',
        detail: 'The stress response is adapted for acute physical emergencies. When activated continuously by imaginary worries, it elevates blood pressure and impairs hippocampus neurogenesis.'
      },
      {
        title: 'Predictability and Sense of Control',
        detail: 'Rats exposed to random electric shocks develop ulcers; rats given a warning light or a lever to turn it off do not. Creating micro-routines restores perceived autonomy.'
      },
      {
        title: 'Outlets for Frustration & Social Support',
        detail: 'Physical exercise, writing in a journal, and authentic human connection drastically blunt the sympathetic hormonal spike.'
      }
    ],
    calmExercise: 'Write down on paper the one task causing you dread. Break it down into one single micro-action you can finish in 90 seconds. Action dissolves anxiety.'
  },
  {
    id: 'book_peace_is_every_step',
    title: 'Peace Is Every Step',
    author: 'Thich Nhat Hanh',
    category: 'Somatic Mindfulness',
    readTime: '4 min calm read',
    coverImg: 'assets/tech_3d_metta_purpose.png',
    takeaway: '"Breathe in, I calm body and mind. Breathe out, I smile. Dwelling in the present moment, I know this is the only moment."',
    summary: 'Zen master Thich Nhat Hanh teaches how to transform mundane triggers like dishwashing, ringing phones, and red traffic lights into sacred meditation bells that guide you back to tranquility.',
    lessons: [
      {
        title: 'The Bell of Mindfulness',
        detail: 'Every intrusive sound in daily life (a notification, a car horn) can be reframed as a call to stop talking, stop planning, and return to your natural breath.'
      },
      {
        title: 'Mindful Walking (Walking Meditation)',
        detail: 'Walk as if you are kissing the earth with your feet. Feel the heel strike, the arch roll, the toes release. Each step grounds your nervous system.'
      },
      {
        title: 'Smiling as Somatic Feedback',
        detail: 'A subtle smile relaxes over 30 facial muscles and transmits biofeedback to the amygdala that safety has been restored.'
      }
    ],
    calmExercise: 'Take three conscious breaths right now. On each exhale, allow the muscles around your eyes and mouth to soften into a gentle, tranquil half-smile.'
  }
];

// ============================================================================
// DATA: YOUTUBE MASTERCLASSES CATALOG (SCIENCE & LIBRARY TAB)
// ============================================================================
const YOUTUBE_MASTERCLASSES = [
  {
    id: 'yt_huberman_sigh',
    title: 'How the Physiological Sigh Drops Heart Rate in Real-Time',
    channel: 'Stanford Medicine • Andrew Huberman, Ph.D.',
    duration: '14:20',
    views: '2.4M views',
    videoId: 'kSZKIupBUuc',
    thumb: 'https://img.youtube.com/vi/kSZKIupBUuc/hqdefault.jpg',
    summary: 'Dr. Andrew Huberman explains the neurobiology of two quick nasal inhalations followed by an extended mouth exhalation to immediately reduce autonomic arousal and panic.',
    takeaways: [
      'Two consecutive nasal inhales pop open collapsed pulmonary alveoli',
      'The long exhalation maximizes CO2 dump and raises intrathoracic pressure',
      'Arterial baroreceptors stimulate the vagus nerve to slow down the SA cardiac node'
    ],
    targetTechId: 'sigh'
  },
  {
    id: 'yt_box_navyseal',
    title: 'Box Breathing: The Navy SEAL Protocol for High-Stakes Calm',
    channel: 'Navy SEAL Special Warfare • Mark Divine',
    duration: '09:45',
    views: '1.8M views',
    videoId: 'FJJazKtH_9I',
    thumb: 'https://img.youtube.com/vi/FJJazKtH_9I/hqdefault.jpg',
    summary: 'Former Navy SEAL Commander Mark Divine demonstrates 4-4-4-4 box breathing to halt panic, steady adrenal output, and sharpen executive focus under extreme cognitive pressure.',
    takeaways: [
      'Equal 4-second breath ratio establishes autonomic equilibrium',
      'Prevents hyperventilation and stabilizes arterial blood gases',
      'Restores blood flow to the prefrontal cortex during decision freeze'
    ],
    targetTechId: 'box'
  },
  {
    id: 'yt_weil_478',
    title: 'The 4-7-8 Breath: Natural Tranquilizer for the Nervous System',
    channel: 'Harvard Health Integrative • Dr. Andrew Weil',
    duration: '07:30',
    views: '3.1M views',
    videoId: 'gz4G31LGyog',
    thumb: 'https://img.youtube.com/vi/gz4G31LGyog/hqdefault.jpg',
    summary: 'Dr. Andrew Weil explains the time-tested 4-7-8 pranayama technique that acts as an organic sedative by forcing systemic vascular relaxation and calming racing thoughts.',
    takeaways: [
      '4-second nasal inhale gently saturates blood with oxygen',
      '7-second retention forces neurological stillness and baroreflex activation',
      '8-second audible mouth whoosh releases somatic tension and promotes deep rest'
    ],
    targetTechId: 'vagal'
  }
];

// ============================================================================
// DATA: 60-SECOND QUICK SHORTS CATALOG (SORTED MICRO-RESETS)
// ============================================================================
const QUICK_SHORTS_CATALOG = [
  {
    id: 'short_acute_panic',
    title: '60-Second Acute Overwhelm Reset',
    tag: 'RAPID BRAKE',
    duration: '60s',
    techId: 'sigh',
    cues: [
      { t: 0, text: 'Take a deep breath in through your nose...' },
      { t: 4, text: 'Take another sharp sip of air at the top...' },
      { t: 7, text: 'Long, slow sigh out through open lips...' },
      { t: 15, text: 'Release your jaw and drop your shoulders...' },
      { t: 22, text: 'Double inhale in... fill the lower ribs...' },
      { t: 26, text: 'Second top-up sip to expand lungs...' },
      { t: 29, text: 'Slow, steady mouth exhalation...' },
      { t: 40, text: 'Feel your pulse steadiness returning...' },
      { t: 48, text: 'One final deep sigh... inhale, sip, and let go completely...' },
      { t: 58, text: 'Rest in pure clarity. Your Adhyay is complete.' }
    ]
  },
  {
    id: 'short_box_focus',
    title: '60-Second Executive Focus Anchor',
    tag: 'FLOW STATE',
    duration: '60s',
    techId: 'box',
    cues: [
      { t: 0, text: 'Inhale smoothly for 4 seconds...' },
      { t: 5, text: 'Hold breath with ease and relaxation for 4...' },
      { t: 10, text: 'Exhale evenly for 4 seconds...' },
      { t: 15, text: 'Rest in quiet stillness for 4...' },
      { t: 20, text: 'Inhale 4... feeling tall and alert...' },
      { t: 25, text: 'Hold 4... grounded and centered...' },
      { t: 30, text: 'Exhale 4... releasing mental noise...' },
      { t: 35, text: 'Hold 4... quiet prefrontal focus...' },
      { t: 40, text: 'Final smooth cycle... Inhale 4...' },
      { t: 45, text: 'Hold 4...' },
      { t: 50, text: 'Exhale 4...' },
      { t: 55, text: 'Ready for single-task focus.' }
    ]
  },
  {
    id: 'short_bedtime_calm',
    title: '60-Second Bedtime Vagal Unwind',
    tag: 'SOMATIC SLEEP',
    duration: '60s',
    techId: 'vagal',
    cues: [
      { t: 0, text: 'Inhale quietly through nose for 4 seconds...' },
      { t: 5, text: 'Gently suspend breath for 7 seconds... let eyelids soften...' },
      { t: 13, text: 'Audible whoosh exhale for 8 seconds... sinking into bed...' },
      { t: 22, text: 'Inhale peaceful coolness for 4...' },
      { t: 27, text: 'Retain for 7... feeling safe in your body...' },
      { t: 35, text: 'Exhale long and slow for 8... melting tension away...' },
      { t: 45, text: 'Final cycle: Inhale 4... Hold 7... Exhale 8...' },
      { t: 56, text: 'Somatic calm activated. Sleep well.' }
    ]
  },
  {
    id: 'short_grounding_reset',
    title: '60-Second 5-4-3-2-1 Sensory Grounding',
    tag: 'CBT ANCHOR',
    duration: '60s',
    techId: 'grounding',
    cues: [
      { t: 0, text: 'Look around and notice 5 distinct colors or shapes...' },
      { t: 15, text: 'Touch 4 physical textures (chair, fabric, desk, hands)...' },
      { t: 30, text: 'Tune in to 3 subtle ambient sounds in your room...' },
      { t: 45, text: 'Notice 2 bodily sensations of support and gravity...' },
      { t: 55, text: '1 slow breath into the present moment. You are here.' }
    ]
  }
];

// ============================================================================
// DATA: EVIDENCE-BASED HEALTH & WELLNESS AI KNOWLEDGE ENGINE
// ============================================================================
const AI_WELLNESS_KNOWLEDGE = [
  {
    keywords: ['book', 'read', 'literature', 'library', 'author', 'untethered', 'marcus', 'stoic', 'nestor', 'sapolsky', 'kabat', 'tolle'],
    title: 'Calming Books & Mindful Literature Sanctuary',
    response: `In the Adhyay Library "Calming Books" tab, you can explore curated teachings from timeless classics including Michael Singer's "The Untethered Soul", James Nestor's "Breath", Marcus Aurelius's "Meditations", and Eckhart Tolle's "The Power of Now". Each book breaks down anxiety into 3 actionable calm teachings with direct exercises. You can bookmark your favorites anytime!`,
    techId: 'grounding',
    techName: '5-4-3-2-1 Sensory Grounding'
  },
  {
    keywords: ['sigh', 'heart rate', 'quick', 'acute', 'panic', 'overwhelm', 'adrenaline', 'emergency'],
    title: 'Physiological Sigh & Rapid Heart Rate Deceleration',
    response: `When acute panic strikes, carbon dioxide builds up in the lungs and alveoli collapse. The Physiological Sigh—two quick nasal inhales followed by an extended, unforced mouth exhale—mechanically reinflates these air sacs and triggers the arterial baroreceptors. This releases acetylcholine onto the heart's sinoatrial node, slowing your pulse in under 90 seconds.`,
    techId: 'sigh',
    techName: 'Physiological Sigh'
  },
  {
    keywords: ['morning', 'cortisol', 'waking', 'wake up', 'chest tight', 'dread', 'car'],
    title: 'Morning Cortisol Awakening Response (CAR)',
    response: `Morning anxiety is largely biological: within 30 to 45 minutes of waking, your adrenal glands produce a natural spike known as the Cortisol Awakening Response (CAR) to prepare you for the day. If your nervous system is already sensitized, your brain misinterprets this physiological surge as mental dread. Engaging in 3 minutes of Box Breathing or getting immediate natural sunlight balances your sympathetic branch without panic.`,
    techId: 'box',
    techName: 'Box Breathing'
  },
  {
    keywords: ['sleep', 'bed', 'insomnia', 'night', 'asleep', 'thoughts', 'racing at night'],
    title: 'Bedtime Autonomic Hyperarousal & 4-7-8 Reset',
    response: `Difficulty falling asleep is rarely about being tired; it stems from autonomic hyperarousal where the sympathetic nervous system stays locked on high alert. The 4-7-8 breathing method (4s inhale, 7s hold, 8s exhale) lowers blood pressure and raises arterial carbon dioxide balance, acting as a natural sedative. The 8-second exhale engages the vagal brake to signal genuine biological safety to your brain.`,
    techId: 'vagal',
    techName: '4-7-8 Parasympathetic Reset'
  },
  {
    keywords: ['focus', 'adhd', 'distraction', 'brain fog', 'freeze', 'paralysis', 'procrastination', 'work'],
    title: 'Decision Freeze & Prefrontal Cortex Restoration',
    response: `When confronted with too many tasks, working memory saturates and the amygdala initiates a freeze response. Box Breathing (4 seconds inhale, 4 seconds hold, 4 seconds exhale, 4 seconds hold) delivers equal oxygenation while steadying carbon dioxide balance, restoring direct blood flow to the prefrontal cortex so you can focus on a single next action.`,
    techId: 'box',
    techName: 'Box Breathing'
  },
  {
    keywords: ['muscle', 'jaw', 'neck', 'shoulder', 'headache', 'tension', 'physical', 'body tight'],
    title: 'Somatic Neuromuscular Release & Muscle Tension',
    response: `Stress triggers an involuntary motor reflex where muscles in the jaw, trapezius, and neck brace for physical impact. This tight bracing sends feedback signals back to the brain confirming danger. Jacobson Progressive Muscle Relaxation (tensing for 5 seconds, releasing for 10) breaks this somatosensory loop by forcing reflex vasodilation and discharging trapped stress hormones.`,
    techId: 'somatic',
    techName: 'Jacobson Somatic Release'
  },
  {
    keywords: ['hrv', 'heart rate variability', 'resilience', 'vagal tone', 'heartmath'],
    title: 'Heart Rate Variability (HRV) & Autonomic Resonance',
    response: `Heart Rate Variability (HRV) measures the millisecond differences between consecutive heartbeats. Higher HRV indicates high parasympathetic tone and cognitive flexibility. Breathing at exactly 5.5 breaths per minute (0.1 Hz frequency) phase-locks your respiratory rhythm with cardiovascular baroreflex waves, maximizing autonomic resilience and emotional composure.`,
    techId: 'coherence',
    techName: 'Coherence Breathing'
  },
  {
    keywords: ['imposter', 'doubt', 'harsh', 'self-critical', 'negative', 'criticism', 'worth', 'rumination'],
    title: 'Neurochemistry of Self-Compassion (Metta)',
    response: `Harsh self-criticism activates the anterior insula and dorsal anterior cingulate cortex—the identical neural circuits that process physical pain. Loving-Kindness meditation (Metta) shifts your brain out of threat-defense mode by stimulating endogenous oxytocin and opioid release, replacing self-attack with psychological stability.`,
    techId: 'metta',
    techName: 'Loving-Kindness & Good Thoughts'
  },
  {
    keywords: ['grounding', 'dissociat', 'spaced out', 'dizzy', 'overthinking', 'loop', 'spiral'],
    title: 'Default Mode Network (DMN) Decoupling via 5-4-3-2-1',
    response: `When thoughts spiral uncontrollably, the brain's Default Mode Network (DMN) is hyperactive. The 5-4-3-2-1 sensory grounding technique intentionally engages your parietal and occipital sensory cortices, compelling your brain to process external physical reality and starving catastrophic rumination loops of metabolic attention.`,
    techId: 'grounding',
    techName: '5-4-3-2-1 Sensory Grounding'
  }
];

// ============================================================================
// DATA: ADAPTIVE ROOT-CAUSE DIAGNOSTIC (STRICT TEXT LIMITS)
// ============================================================================
const DIAGNOSTIC_DATA = {
  peaceful: {
    name: 'Peaceful',
    image: 'assets/emotion_peaceful.jpg',
    step1: {
      question: 'What would best nourish your calm state now?',
      options: [
        { label: 'Deepen somatic stillness & respiratory coherence', next: 'q_still' },
        { label: 'Channel clear focus into creative immersion', next: 'q_flow' },
        { label: 'Cultivate gratitude and loving-kindness', next: 'q_kind' },
        { label: 'Ground body in restorative gentle presence', next: 'q_rest' }
      ]
    },
    branches: {
      q_still: {
        step2: {
          question: 'Where would you like to anchor your attention?',
          options: [
            { label: 'Smooth rise and fall of the diaphragm', rootKey: 'serene_anchor' },
            { label: 'Spacious awareness without narrative thoughts', rootKey: 'open_presence' }
          ]
        }
      },
      q_flow: {
        step2: {
          question: 'What is your primary intention for this focus block?',
          options: [
            { label: 'Deep single-task flow state without tabs', rootKey: 'flow_state' },
            { label: 'Calm strategic reflection and long-term vision', rootKey: 'strategic_calm' }
          ]
        }
      },
      q_kind: {
        step2: {
          question: 'Where would you like to direct positive warmth?',
          options: [
            { label: 'Toward self-appreciation and quiet progress', rootKey: 'self_appreciation' },
            { label: 'Expansive goodwill toward loved ones & colleagues', rootKey: 'expansive_metta' }
          ]
        }
      },
      q_rest: {
        step2: {
          question: 'What restorative rhythm calls to you?',
          options: [
            { label: 'Coherent 5.5s balanced heart rhythm', rootKey: 'coherence_rhythm' },
            { label: 'Long soothing 4-7-8 parasympathetic exhales', rootKey: 'deep_soothe' }
          ]
        }
      }
    }
  },

  overwhelmed: {
    name: 'Overwhelmed',
    image: 'assets/emotion_overwhelmed.jpg',
    step1: {
      question: 'What is the primary friction right now?',
      options: [
        { label: 'Too many competing tasks with unclear priority', next: 'q_tasks' },
        { label: 'Fear of letting people down or missing deadlines', next: 'q_expect' },
        { label: 'Physical and mental exhaustion (screen fatigue)', next: 'q_burn' },
        { label: 'A sudden problem that derailed my entire plan', next: 'q_derail' }
      ]
    },
    branches: {
      q_tasks: {
        step2: {
          question: 'When looking at this task pile, what does your mind do?',
          options: [
            { label: 'Freezes up, unable to take the first step', rootKey: 'paralysis_overload' },
            { label: 'Scatters across 5 tabs feeling fragmented', rootKey: 'scattered_multitask' }
          ]
        }
      },
      q_expect: {
        step2: {
          question: 'What is the fear underneath?',
          options: [
            { label: '"If I fail here, my credibility is ruined"', rootKey: 'catastrophic_fear' },
            { label: '"I should handle this with zero struggle"', rootKey: 'comparative_guilt' }
          ]
        }
      },
      q_burn: {
        step2: {
          question: 'Where is this exhaustion felt right now?',
          options: [
            { label: 'Tight chest, shallow breath, restless pulse', rootKey: 'somatic_alarm' },
            { label: 'Heavy eyelids and zero executive willpower', rootKey: 'depleted_reservoir' }
          ]
        }
      },
      q_derail: {
        step2: {
          question: 'Is this derailment within your direct control?',
          options: [
            { label: 'Mostly external factors I could not prevent', rootKey: 'external_locus' },
            { label: 'Partially my own procrastination', rootKey: 'procrastination_debt' }
          ]
        }
      }
    }
  },

  overthinking: {
    name: 'Overthinking',
    image: 'assets/emotion_overthinking.jpg',
    step1: {
      question: 'Which time horizon is your mind stuck on?',
      options: [
        { label: 'Replaying past conversations and mistakes', next: 'q_past' },
        { label: 'Anticipating future worst-case what-ifs', next: 'q_future' },
        { label: 'Over-analyzing a social or work dynamic', next: 'q_social' },
        { label: 'Second-guessing a choice I already made', next: 'q_second' }
      ]
    },
    branches: {
      q_past: {
        step2: {
          question: 'What is your inner voice saying about that event?',
          options: [
            { label: '"I should have known better and acted differently"', rootKey: 'hindsight_trap' },
            { label: '"They probably think negatively of me now"', rootKey: 'mind_reading' }
          ]
        }
      },
      q_future: {
        step2: {
          question: 'Are you solving a real problem or an imagined one?',
          options: [
            { label: 'Obsessing over 10 scenarios to feel safe', rootKey: 'false_safety_prep' },
            { label: 'Dreading a very real upcoming confrontation', rootKey: 'anticipatory_spike' }
          ]
        }
      },
      q_social: {
        step2: {
          question: 'What evidence supports this assumption?',
          options: [
            { label: 'Just a subtle vibe shift; no real proof', rootKey: 'vibe_projection' },
            { label: 'A concrete boundary violation that needs talking', rootKey: 'unresolved_boundary' }
          ]
        }
      },
      q_second: {
        step2: {
          question: 'Can this decision still be reversed?',
          options: [
            { label: 'It is finalized; I am agonizing over outcomes', rootKey: 'sunk_cost_rumin' },
            { label: 'It can still be adapted if I decide today', rootKey: 'decisional_hesitation' }
          ]
        }
      }
    }
  },

  selfdoubt: {
    name: 'Self-Doubt',
    image: 'assets/emotion_selfdoubt.jpg',
    step1: {
      question: 'What is your inner critic accusing you of?',
      options: [
        { label: '"You are not competent, and soon they will see it"', next: 'q_imposter' },
        { label: '"If it is not 100% flawless, it is a complete failure"', next: 'q_perfect' },
        { label: '"Everyone else is far ahead of you"', next: 'q_compare' },
        { label: '"You do not deserve this opportunity or praise"', next: 'q_deserve' }
      ]
    },
    branches: {
      q_imposter: {
        step2: {
          question: 'Are you confusing "feeling anxious" with "being incompetent"?',
          options: [
            { label: 'Yes, because I feel tense, I assume I lack skill', rootKey: 'emotional_reasoning' },
            { label: 'I simply need more training on this specific topic', rootKey: 'skill_gap_clarity' }
          ]
        }
      },
      q_perfect: {
        step2: {
          question: 'What happens if you submit work that is "solid & good"?',
          options: [
            { label: 'Fear of negative judgment from peers', rootKey: 'approval_addiction' },
            { label: 'Fear of losing my standard of excellence', rootKey: 'identity_rigidity' }
          ]
        }
      },
      q_compare: {
        step2: {
          question: 'Are you comparing your struggle to their highlight reel?',
          options: [
            { label: 'Yes, social media and updates trigger this', rootKey: 'curated_envy' },
            { label: 'I feel stalled in my personal growth', rootKey: 'growth_stagnation' }
          ]
        }
      },
      q_deserve: {
        step2: {
          question: 'Would you speak this harshly to a dear friend?',
          options: [
            { label: 'Never. I would be supportive and compassionate', rootKey: 'double_standard' },
            { label: 'I push myself harshly to avoid getting lazy', rootKey: 'punitive_motivation' }
          ]
        }
      }
    }
  },

  decisionfreeze: {
    name: 'Decision Freeze',
    image: 'assets/emotion_freeze.jpg',
    step1: {
      question: 'What makes this choice feel paralyzing?',
      options: [
        { label: 'Fear of choosing the wrong path permanently', next: 'q_perm' },
        { label: 'Too many conflicting opinions and voices', next: 'q_opin' },
        { label: 'Both choices have painful trade-offs', next: 'q_trade' },
        { label: 'Waiting for 100% certainty before acting', next: 'q_cert' }
      ]
    },
    branches: {
      q_perm: {
        step2: {
          question: 'Is this a reversible "two-way door" decision?',
          options: [
            { label: 'Two-way door: can be adapted or reversed later', rootKey: 'two_way_door_trap' },
            { label: 'One-way door: truly irreversible and high stakes', rootKey: 'one_way_door_deliberate' }
          ]
        }
      },
      q_opin: {
        step2: {
          question: 'Whose opinion are you prioritizing over your own values?',
          options: [
            { label: 'Colleagues or managers whose approval I want', rootKey: 'external_pleasing' },
            { label: 'Family or social expectations that do not fit me', rootKey: 'inherited_scripts' }
          ]
        }
      },
      q_trade: {
        step2: {
          question: 'Are you expecting a choice with zero downsides?',
          options: [
            { label: 'Yes, I dislike sacrificing any upside', rootKey: 'tradeoff_avoidance' },
            { label: 'I need to pick the downside that aligns with my values', rootKey: 'value_hierarchy' }
          ]
        }
      },
      q_cert: {
        step2: {
          question: 'Can any human achieve 100% certainty here?',
          options: [
            { label: 'No, 70% information is enough to act', rootKey: 'seventy_percent_rule' },
            { label: 'I feel unsafe unless outcomes are guaranteed', rootKey: 'illusion_of_control' }
          ]
        }
      }
    }
  },

  heaviness: {
    name: 'Emotional Heaviness',
    image: 'assets/emotion_heavy.jpg',
    step1: {
      question: 'How is this heaviness feeling right now?',
      options: [
        { label: 'Unspoken grief or sadness without clear reason', next: 'q_sad' },
        { label: 'Irritability and sudden anger at minor things', next: 'q_ang' },
        { label: 'Feeling completely numb and detached', next: 'q_numb' },
        { label: 'Holding in tension to "stay strong" for others', next: 'q_mask' }
      ]
    },
    branches: {
      q_sad: {
        step2: {
          question: 'Have you allowed yourself 3 minutes to just feel it?',
          options: [
            { label: 'No, I have been desperately distracting myself', rootKey: 'emotional_suppression' },
            { label: 'I am close to tears and feel vulnerable', rootKey: 'catharsis_needed' }
          ]
        }
      },
      q_ang: {
        step2: {
          question: 'What personal boundary was recently crossed?',
          options: [
            { label: 'My personal time or energy was taken for granted', rootKey: 'boundary_breach' },
            { label: 'I feel unseen and unappreciated for my efforts', rootKey: 'unrecognized_worth' }
          ]
        }
      },
      q_numb: {
        step2: {
          question: 'Is numbness your nervous system shutting down from overwhelm?',
          options: [
            { label: 'Yes, feeling everything at once was too much', rootKey: 'dorsal_vagal_freeze' },
            { label: 'I simply need physical sleep and quiet', rootKey: 'biological_depletion' }
          ]
        }
      },
      q_mask: {
        step2: {
          question: 'What happens if you put down the strong mask for 10 minutes?',
          options: [
            { label: 'Nothing will collapse; the world can wait', rootKey: 'permission_to_rest' },
            { label: 'I fear falling apart and losing control', rootKey: 'fragility_anxiety' }
          ]
        }
      }
    }
  }
};

// ============================================================================
// ROOT PRESCRIPTIONS & ADHYAY SESSION RECOMMENDATIONS
// ============================================================================
const ROOT_PRESCRIPTIONS = {
  serene_anchor: {
    title: 'Somatic Breath Stillness',
    distortion: 'Ambient Attentional Drift',
    need: 'Diaphragmatic Anchoring',
    techniqueId: 'coherence',
    pitch: 'Coherence Breathing synchronizes respiratory sinus rhythm with cardiovascular pulse for pure equilibrium.',
    reframeBefore: '"I need complex effort to feel at ease."',
    reframeAfter: '"Peace is already here when I simply allow the body to breathe itself."',
    microAction: 'Take 3 unbroken, effortless nasal breaths with relaxed eyes.'
  },
  open_presence: {
    title: 'Spacious Non-Attachment',
    distortion: 'Narrative Conceptual Grasping',
    need: 'Open Sky Awareness',
    techniqueId: 'grounding',
    pitch: '5-4-3-2-1 Grounding anchors consciousness into immediate sensory reality without judgment.',
    reframeBefore: '"I must analyze my state to validate it."',
    reframeAfter: '"Awareness is spacious like the sky; sensations pass through like clouds."',
    microAction: 'Listen attentively to the farthest sound you can hear right now.'
  },
  flow_state: {
    title: 'Single-Thread Deep Immersion',
    distortion: 'Faux Multitasking Urge',
    need: 'High-Bandwidth Focus',
    techniqueId: 'box',
    pitch: 'Box Breathing stabilizes prefrontal cortex perfusion for unbroken executive flow.',
    reframeBefore: '"I should juggle several priorities today."',
    reframeAfter: '"One pristine single-threaded hour accomplishes more than 4 fragmented hours."',
    microAction: 'Clear your desk of everything except what is needed for this task.'
  },
  strategic_calm: {
    title: 'Executive Perspective & Vision',
    distortion: 'Tactical Urgency Myopia',
    need: 'Panoramic Clarity',
    techniqueId: 'vagal',
    pitch: '4-7-8 Breathing disengages acute survival vigilance so long-range clarity emerges.',
    reframeBefore: '"I must react immediately to incoming stimuli."',
    reframeAfter: '"Wisdom creates space between stimulus and response."',
    microAction: 'Write down the single most impactful lever for this week.'
  },
  self_appreciation: {
    title: 'Inner Warmth & Self-Compassion',
    distortion: 'Conditional Worth Condition',
    need: 'Benevolent Acceptance',
    techniqueId: 'metta',
    pitch: 'Loving-Kindness Meditation floods the anterior insula with oxytocin and psychological safety.',
    reframeBefore: '"I can only rest when everything is complete."',
    reframeAfter: '"My peace is not a reward to earn; it is the ground I create from."',
    microAction: 'Place a gentle hand on your heart and offer yourself silent thanks.'
  },
  expansive_metta: {
    title: 'Expansive Benevolence',
    distortion: 'Defensive Emotional Armoring',
    need: 'Compassionate Connection',
    techniqueId: 'metta',
    pitch: 'Loving-Kindness meditation replaces social vigilance with heartfelt empathy.',
    reframeBefore: '"Others are demanding or stressful to deal with."',
    reframeAfter: '"Everyone is walking a hidden, tender road; I can choose to bring gentleness."',
    microAction: 'Send a quick unprompted word of genuine gratitude to someone.'
  },
  coherence_rhythm: {
    title: 'Cardiorespiratory Coherence',
    distortion: 'Autonomic Dysrhythmia',
    need: 'HRV Resonance',
    techniqueId: 'coherence',
    pitch: 'Coherence breathing locks heart rate variability, blood pressure waves, and breathing into 0.1 Hz resonance.',
    reframeBefore: '"My body feels slightly out of rhythm."',
    reframeAfter: '"5.5-second respiration naturally restores cellular harmony within 90 seconds."',
    microAction: 'Breathe at a steady 5-second in, 5-second out pace for 1 minute.'
  },
  deep_soothe: {
    title: 'Deep Parasympathetic Restoration',
    distortion: 'Subtle Baseline Arousal',
    need: 'Vagal Downregulation',
    techniqueId: 'vagal',
    pitch: '4-7-8 breathing triggers arterial baroreceptors to relax smooth vascular muscles.',
    reframeBefore: '"I cannot completely let my guard down."',
    reframeAfter: '"Right now, in this moment, there is nothing to defend against."',
    microAction: 'Unclench your jaw, drop your shoulders away from your ears, and soften your brow.'
  },
  paralysis_overload: {
    title: 'Executive Cognitive Saturation',
    distortion: 'Catastrophic Compounding',
    need: 'Nervous System Downregulation',
    techniqueId: 'sigh',
    pitch: 'The Physiological Sigh discharges trapped CO2 and halts fight-or-flight within 2 breath cycles.',
    reframeBefore: '"Everything must be completed right this moment or disaster occurs."',
    reframeAfter: '"Only 1 single priority matters for the next 30 minutes; everything else is ambient noise."',
    microAction: 'Write down only your single next physical action on a sticky note. Close all other 10 tabs.'
  },
  scattered_multitask: {
    title: 'Attention Fragmentation Loop',
    distortion: 'Hyper-Vigilant Switching',
    need: 'Single-Thread Boundary',
    techniqueId: 'box',
    pitch: 'Box Breathing equalizes autonomic balance to anchor attention on a single focal point.',
    reframeBefore: '"I must keep all plates spinning simultaneously to feel productive."',
    reframeAfter: '"Serial execution is 3x faster than parallel panic. One breath, one tab."',
    microAction: 'Place phone in another room for the next 25 minutes.'
  },
  catastrophic_fear: {
    title: 'Catastrophic Projection',
    distortion: 'Worst-Case Fortune Telling',
    need: 'Grounded Reality Testing',
    techniqueId: 'vagal',
    pitch: '4-7-8 breathing activates baroreceptors to mechanically lower heart rate and calm alarm signals.',
    reframeBefore: '"If this deadline slips, my career is permanently ruined."',
    reframeAfter: '"Deadlines are renegotiable; acute nervous system damage is unnecessary."',
    microAction: 'Send a 2-sentence status update resetting realistic expectations.'
  },
  hindsight_trap: {
    title: 'Retrospective Rumination Trap',
    distortion: 'Hindsight Bias Distortion',
    need: 'Self-Compassion & Closure',
    techniqueId: 'grounding',
    pitch: '5-4-3-2-1 Grounding pulls your brain out of the past simulation into tangible sensory reality.',
    reframeBefore: '"I should have known exactly how they would react back then."',
    reframeAfter: '"I acted with the exact information and emotional capacity I had at that moment."',
    microAction: 'Place both hands flat on your table, feel the solid cool surface, and take 3 grounded breaths.'
  },
  false_safety_prep: {
    title: 'Compulsive Anticipatory Worry',
    distortion: 'Illusion of Control Through Anxiety',
    need: 'Radical Acceptance of Ambiguity',
    techniqueId: 'sigh',
    pitch: 'The Physiological Sigh clears chest tightness, proving that worry does not prevent misfortune.',
    reframeBefore: '"If I obsess over every terrible outcome, I will be safe."',
    reframeAfter: '"Worry drains the exact energy I need to respond effectively when things actually happen."',
    microAction: 'Name 3 things in your room that are completely peaceful and safe right now.'
  },
  emotional_reasoning: {
    title: 'Imposter Emotional Reasoning',
    distortion: 'Feeling Anxious ≠ Being Incompetent',
    need: 'Objective Evidence Alignment',
    techniqueId: 'box',
    pitch: 'Box Breathing grounds somatic tremors while recalibrating the inner critic.',
    reframeBefore: '"I feel insecure, therefore I am inadequate and unqualified."',
    reframeAfter: '"Insecurity is simply the physiological tax of stepping into something meaningful."',
    microAction: 'Write down 2 concrete deliverables you successfully completed in the past 6 months.'
  },
  two_way_door_trap: {
    title: 'Decisional Asymmetry Blindspot',
    distortion: 'Treating Reversible Choices As Fatal',
    need: 'Action Over Infinite Certainty',
    techniqueId: 'box',
    pitch: 'Box breathing clears executive brain fog so you can commit to a 24-hour test flight.',
    reframeBefore: '"I cannot pick until I know with 100% certainty that it won\'t fail."',
    reframeAfter: '"This is a two-way door. Moving forward with 70% data teaches me more than 2 weeks of agonizing."',
    microAction: 'Flip a coin. In the split second it is in the air, notice which side you secretly hope for.'
  },
  emotional_suppression: {
    title: 'Somatic Emotional Backlog',
    distortion: 'Suppressive Hyper-Control',
    need: 'Safe Somatic Discharge',
    techniqueId: 'somatic',
    pitch: 'Jacobson Progressive Muscle Relaxation unclasps the jaw, throat, and chest to safely release held tension.',
    reframeBefore: '"I must never show sadness or vulnerability; it makes me weak."',
    reframeAfter: '"Emotions are neurochemical waves lasting 90 seconds unless I trap them with resistance."',
    microAction: 'Drink a glass of warm water slowly and exhale with a soft audible sigh.'
  },
  default: {
    title: 'Cognitive & Somatic Tension',
    distortion: 'Allostatic Stress Overload',
    need: 'Nervous System Recalibration',
    techniqueId: 'sigh',
    pitch: 'The Physiological Sigh provides immediate biological clarity by venting excess CO2 and stimulating vagal tone.',
    reframeBefore: '"The pressure is too intense for me to process clearly."',
    reframeAfter: '"My biology comes first. Regulate the body, and the mind clears automatically."',
    microAction: 'Stand up, shake out your arms and shoulders for 20 seconds, and roll your neck.'
  }
};

// ============================================================================
// AUDIO SYNTHESIZER (WEB AUDIO API) - ADAPTS FREQUENCY PER EDITION
// ============================================================================
class AdhyaySoundscapes {
  constructor() {
    this.ctx = null;
    this.ambientGain = null;
    this.isPlaying = false;
    this.activeNodes = [];
    this.currentEdition = 'a';
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
      this.ambientGain = this.ctx.createGain();
      this.ambientGain.gain.setValueAtTime(0.25, this.ctx.currentTime);
      this.ambientGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playBowlStrike(baseFreq = null) {
    this.init();
    const now = this.ctx.currentTime;
    
    // In Edition B (Private Club), use crisp Solfeggio 528Hz; in Edition A, use warm 216Hz bowl
    const freq = baseFreq || (this.currentEdition === 'b' ? 528 : 216);
    const harmonics = [freq, freq * 2.02, freq * 3.01, freq * 4.76];
    const gains = this.currentEdition === 'b' ? [0.25, 0.15, 0.08, 0.04] : [0.35, 0.2, 0.12, 0.06];

    harmonics.forEach((hFreq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(hFreq, now);

      gain.gain.setValueAtTime(gains[i], now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + (this.currentEdition === 'b' ? 3.5 : 4.2));

      osc.connect(gain);
      gain.connect(this.ambientGain);

      osc.start(now);
      osc.stop(now + 4.3);
    });
  }

  startWarmDrone(freq = null) {
    this.stopAmbient();
    this.init();
    const now = this.ctx.currentTime;
    const baseFreq = freq || (this.currentEdition === 'b' ? 528 : 432);

    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const subOsc = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(this.currentEdition === 'b' ? 700 : 500, now);

    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(baseFreq / 2, now);

    osc2.type = 'sine';
    osc2.frequency.setValueAtTime((baseFreq / 2) + 0.6, now);

    subOsc.type = 'triangle';
    subOsc.frequency.setValueAtTime(baseFreq / 4, now);

    gain.gain.setValueAtTime(0.01, now);
    gain.gain.linearRampToValueAtTime(0.16, now + 2);

    osc1.connect(filter);
    osc2.connect(filter);
    subOsc.connect(filter);
    filter.connect(gain);
    gain.connect(this.ambientGain);

    osc1.start();
    osc2.start();
    subOsc.start();

    this.activeNodes.push(osc1, osc2, subOsc, gain);
    this.isPlaying = true;
  }

  stopAmbient() {
    this.activeNodes.forEach(node => {
      try {
        if (node.stop) node.stop();
        if (node.disconnect) node.disconnect();
      } catch (e) {}
    });
    this.activeNodes = [];
    this.isPlaying = false;
  }

  toggleSound() {
    if (this.isPlaying) {
      this.stopAmbient();
      return false;
    } else {
      this.startWarmDrone();
      return true;
    }
  }
}

// ============================================================================
// MAIN APPLICATION CONTROLLER WITH A/B EDITION SWITCHER
// ============================================================================
class AdhyayApp {
  constructor() {
    this.sound = new AdhyaySoundscapes();
    
    // A/B Edition State ('a' = Organic Zen, 'b' = Private Members Club Noir)
    this.currentEdition = localStorage.getItem('adhyay_edition') || 'a';
    this.sound.currentEdition = this.currentEdition;

    // Diagnostic state
    this.currentEmotion = 'overwhelmed';
    this.diagStep = 1;
    this.currentBranch = null;
    this.identifiedRootKey = 'paralysis_overload';

    // Walkthrough & Technique state
    this.currentWalkSlide = 1;
    this.activeTechnique = TECHNIQUES_CATALOG[0]; // Physiological Sigh
    this.sessionDuration = 120;
    this.remainingSeconds = 120;
    this.isTimerRunning = false;
    this.timerInterval = null;
    this.breathInterval = null;
    this.currentCycleIndex = 0;

    // Report metrics
    this.reportMetrics = {
      clarityScore: 92,
      clarityChange: '+34 pts',
      focusDelta: '+38%',
      stressDelta: '-44%',
      prodDelta: '+31%',
      happyDelta: '+52%',
      rootTag: 'Executive Saturation',
      reframeBefore: '"Everything must be done right now or disaster looms."',
      reframeAfter: '"Only 1 single priority matters for the next 30 minutes."',
      microAction: 'Write down only your next physical action on a sticky note. Close all other 10 tabs.'
    };

    this.history = JSON.parse(localStorage.getItem('adhyay_history') || '[]');

    // User profile state
    const savedProfile = localStorage.getItem('adhyay_profile');
    this.userProfile = savedProfile ? JSON.parse(savedProfile) : {
      gender: 'male',
      name: '',
      goal: 'overwhelm',
      time: 5
    };

    this.init();
  }

  init() {
    this.setEdition(this.currentEdition, false);
    this.initGenderOnboarding();
    this.bindEvents();
    this.renderMediaAndScienceHub();
    this.initMediaModals();
    this.initAIChatbot();
    this.renderHistory();
    this.updateClock();
    this.renderGreeting();
    this.handleDeepLinks();
    if (!document.querySelector('.screen-view.active')) {
      this.navigateToScreen('screen-home', false);
    }
    setInterval(() => this.updateClock(), 30000);
  }

  handleDeepLinks() {
    try {
      const params = new URLSearchParams(window.location.search);
      if (params.has('gender')) {
        const g = params.get('gender');
        this.selectedGender = g;
        if (this.userProfile) this.userProfile.gender = g;
        const btnMale = document.getElementById('btn-gender-male');
        const btnFemale = document.getElementById('btn-gender-female');
        if (btnMale && btnFemale) {
          btnMale.classList.toggle('active', g === 'male');
          btnFemale.classList.toggle('active', g === 'female');
        }
        this.updateHeaderProfileBadge();
      }
      if (params.get('onboarding') === 'done') {
        const modal = document.getElementById('onboarding-gender-modal');
        if (modal) modal.classList.remove('active');
      }
      if (params.get('onboarding') === 'show') {
        const modal = document.getElementById('onboarding-gender-modal');
        if (modal) modal.classList.add('active');
        const step1 = document.getElementById('onboarding-step-1');
        const step2 = document.getElementById('onboarding-step-2');
        if (step1) { step1.classList.remove('hidden'); step1.classList.add('active'); }
        if (step2) { step2.classList.remove('active'); step2.classList.add('hidden'); }
      }
      if (params.get('onboarding') === 'step2') {
        const modal = document.getElementById('onboarding-gender-modal');
        if (modal) modal.classList.add('active');
        const step1 = document.getElementById('onboarding-step-1');
        const step2 = document.getElementById('onboarding-step-2');
        if (step1) { step1.classList.remove('active'); step1.classList.add('hidden'); }
        if (step2) { step2.classList.remove('hidden'); step2.classList.add('active'); }
      }
      if (params.has('name')) {
        this.userProfile.name = params.get('name');
        this.saveUserProfile();
        this.updateHeaderProfileBadge();
        this.renderGreeting();
      }
      if (params.has('screen')) {
        const screenId = params.get('screen');
        const splash = document.getElementById('splash-screen');
        if (splash) splash.classList.remove('active');
        const modal = document.getElementById('onboarding-gender-modal');
        if (modal) modal.classList.remove('active');
        this.navigateToScreen(screenId, false);
      }
      if (params.has('scroll')) {
        const elId = params.get('scroll');
        const el = document.getElementById(elId);
        if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
      }
      if (params.has('tab')) {
        const tabKey = params.get('tab');
        const sciTabs = document.querySelectorAll('.sci-tab-btn');
        sciTabs.forEach(t => t.classList.toggle('active', t.getAttribute('data-tab') === tabKey));
        this.filterMediaTab(tabKey);
      }
      if (params.has('modal')) {
        const m = params.get('modal');
        const splash = document.getElementById('splash-screen');
        if (splash) splash.classList.remove('active');
        const modal = document.getElementById('onboarding-gender-modal');
        if (modal) modal.classList.remove('active');
        if (m === 'video') this.openYouTubeModal(YOUTUBE_MASTERCLASSES[0]);
        if (m === 'shorts') this.openShortsModal(QUICK_SHORTS_CATALOG[0]);
        if (m === 'chatbot') {
          const chat = document.getElementById('ai-chatbot-modal');
          if (chat) chat.classList.remove('hidden');
          if (params.has('q')) {
            setTimeout(() => this.handleAIChatSubmit(params.get('q')), 300);
          }
        }
      }
      if (params.has('tech')) {
        const tId = params.get('tech');
        this.loadTechniqueById(tId);
      }
      if (params.has('slide')) {
        const sl = parseInt(params.get('slide'), 10) || 1;
        this.goToWalkSlide(sl);
      }
    } catch (e) {
      console.warn('Deep link note:', e);
    }
  }

  // --------------------------------------------------------------------------
  // ONBOARDING & PROFILE MANAGEMENT (GENDER THEME + PROFILE DETAILS)
  // --------------------------------------------------------------------------
  initGenderOnboarding() {
    const modal = document.getElementById('onboarding-gender-modal');
    if (!modal) return;

    const step1 = document.getElementById('onboarding-step-1');
    const step2 = document.getElementById('onboarding-step-2');
    const btnMale = document.getElementById('btn-gender-male');
    const btnFemale = document.getElementById('btn-gender-female');
    const btnToStep2 = document.getElementById('btn-onboarding-to-step2');
    const btnBackToStep1 = document.getElementById('btn-onboarding-back-to-step1');
    const btnFinish = document.getElementById('btn-onboarding-finish');
    const btnSkip1 = document.getElementById('btn-onboarding-skip-1');
    const btnSkip2 = document.getElementById('btn-onboarding-skip-2');
    const nameInput = document.getElementById('onboarding-profile-name');
    const goalChips = document.querySelectorAll('#onboarding-goals-grid .goal-chip');
    const timePills = document.querySelectorAll('#onboarding-time-row .time-pill');
    const headerProfileBtn = document.getElementById('btn-header-profile');
    const crisisProtocolBtn = document.getElementById('btn-read-crisis-protocol');

    // Populate initial inputs from stored profile
    if (this.userProfile) {
      if (this.userProfile.name && nameInput) {
        nameInput.value = this.userProfile.name;
      }
      if (this.userProfile.goal) {
        goalChips.forEach(chip => {
          chip.classList.toggle('active', chip.getAttribute('data-goal') === this.userProfile.goal);
        });
      }
      if (this.userProfile.time) {
        timePills.forEach(pill => {
          pill.classList.toggle('active', parseInt(pill.getAttribute('data-time'), 10) === parseInt(this.userProfile.time, 10));
        });
      }
      if (btnMale && btnFemale) {
        btnMale.classList.toggle('active', this.userProfile.gender === 'male');
        btnFemale.classList.toggle('active', this.userProfile.gender === 'female');
      }
      const pillMale = document.getElementById('profile-gender-pill-male');
      const pillFemale = document.getElementById('profile-gender-pill-female');
      if (pillMale && pillFemale) {
        pillMale.classList.toggle('active', this.userProfile.gender === 'male');
        pillFemale.classList.toggle('active', this.userProfile.gender === 'female');
      }
      this.updateHeaderProfileBadge();
    }

    // Navigation helpers between Step 1, Step 2, and Sanctuary
    const goToStep2 = () => {
      try {
        if (step1) {
          step1.classList.remove('active');
          step1.classList.add('hidden');
        }
        if (step2) {
          step2.classList.remove('hidden');
          step2.classList.add('active');
        }
        if (modal) modal.scrollTop = 0;
        const cardContent = modal.querySelector('.onboarding-card-content');
        if (cardContent) cardContent.scrollTop = 0;
        if (nameInput) {
          setTimeout(() => {
            try { nameInput.focus(); } catch (e) {}
          }, 150);
        }
      } catch (err) {
        console.warn('goToStep2 error:', err);
      }
    };

    const goToStep1 = () => {
      try {
        if (step2) {
          step2.classList.remove('active');
          step2.classList.add('hidden');
        }
        if (step1) {
          step1.classList.remove('hidden');
          step1.classList.add('active');
        }
        if (modal) modal.scrollTop = 0;
        const cardContent = modal.querySelector('.onboarding-card-content');
        if (cardContent) cardContent.scrollTop = 0;
      } catch (err) {
        console.warn('goToStep1 error:', err);
      }
    };

    const completeOnboarding = (showWelcome = true) => {
      try {
        if (nameInput && nameInput.value.trim()) {
          this.userProfile.name = nameInput.value.trim();
        }
        this.saveUserProfile();
        this.updateHeaderProfileBadge();
        this.renderGreeting();

        // Dismiss onboarding modal
        if (modal) modal.classList.remove('active');

        // CRITICAL: Dismiss splash screen so user is NOT blocked behind modal
        const splashScreen = document.getElementById('splash-screen');
        if (splashScreen) {
          splashScreen.classList.remove('active');
        }

        // Navigate cleanly to home sanctuary screen
        this.navigateToScreen('screen-home', false);

        try {
          this.sound.playBowlStrike(this.userProfile.gender === 'female' ? 528 : 216);
        } catch (audioErr) {}

        if (showWelcome) {
          const nameDisp = this.userProfile.name ? `, ${this.userProfile.name}` : '';
          this.showToast(`Welcome to Adhyay${nameDisp}`);
        }
      } catch (err) {
        console.warn('completeOnboarding error:', err);
        if (modal) modal.classList.remove('active');
        const splashScreen = document.getElementById('splash-screen');
        if (splashScreen) splashScreen.classList.remove('active');
      }
    };

    // Onboarding Theme Selector Buttons (placed directly below gender selection)
    const btnThemeA = document.getElementById('btn-theme-edition-a');
    const btnThemeB = document.getElementById('btn-theme-edition-b');

    const updateOnboardingThemeButtons = (edition) => {
      const ed = edition || this.currentEdition || 'a';
      if (btnThemeA) btnThemeA.classList.toggle('active', ed === 'a');
      if (btnThemeB) btnThemeB.classList.toggle('active', ed === 'b');
    };
    updateOnboardingThemeButtons(this.currentEdition);

    if (btnThemeA) {
      btnThemeA.addEventListener('click', () => {
        this.setEdition('a', true);
        updateOnboardingThemeButtons('a');
      });
    }

    if (btnThemeB) {
      btnThemeB.addEventListener('click', () => {
        this.setEdition('b', true);
        updateOnboardingThemeButtons('b');
      });
    }

    // Gender selection handler - ONLY sets gender avatar/identity; does NOT change theme or auto-advance
    const selectGender = (gender) => {
      try {
        this.userProfile.gender = gender;

        if (btnMale) btnMale.classList.toggle('active', gender === 'male');
        if (btnFemale) btnFemale.classList.toggle('active', gender === 'female');

        const pillMale = document.getElementById('profile-gender-pill-male');
        const pillFemale = document.getElementById('profile-gender-pill-female');
        if (pillMale) pillMale.classList.toggle('active', gender === 'male');
        if (pillFemale) pillFemale.classList.toggle('active', gender === 'female');

        try {
          this.sound.playBowlStrike(gender === 'female' ? 528 : 216);
        } catch (audioErr) {}

        this.saveUserProfile();
        this.updateHeaderProfileBadge();
      } catch (err) {
        console.warn('selectGender error:', err);
      }
    };

    if (btnMale) {
      btnMale.addEventListener('click', () => selectGender('male'));
    }

    if (btnFemale) {
      btnFemale.addEventListener('click', () => selectGender('female'));
    }

    const pillMale = document.getElementById('profile-gender-pill-male');
    const pillFemale = document.getElementById('profile-gender-pill-female');
    if (pillMale) {
      pillMale.addEventListener('click', () => selectGender('male'));
    }
    if (pillFemale) {
      pillFemale.addEventListener('click', () => selectGender('female'));
    }

    // Step 1 -> Step 2 Navigation
    if (btnToStep2) {
      btnToStep2.addEventListener('click', () => goToStep2());
    }

    // Step 2 -> Step 1 Navigation (Back)
    if (btnBackToStep1) {
      btnBackToStep1.addEventListener('click', () => goToStep1());
    }

    // Goal chip selection
    goalChips.forEach(chip => {
      chip.addEventListener('click', () => {
        goalChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        this.userProfile.goal = chip.getAttribute('data-goal');
      });
    });

    // Time pill selection
    timePills.forEach(pill => {
      pill.addEventListener('click', () => {
        timePills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        this.userProfile.time = parseInt(pill.getAttribute('data-time'), 10);
      });
    });

    // Finish / "Let's begin your Adhyay" CTA
    if (btnFinish) {
      btnFinish.addEventListener('click', () => completeOnboarding(true));
    }

    // Skip handlers
    if (btnSkip1) {
      btnSkip1.addEventListener('click', () => completeOnboarding(false));
    }
    if (btnSkip2) {
      btnSkip2.addEventListener('click', () => completeOnboarding(false));
    }

    // Header Profile button to view/edit profile anytime
    if (headerProfileBtn) {
      headerProfileBtn.addEventListener('click', () => {
        if (step1) {
          step1.classList.remove('active');
          step1.classList.add('hidden');
        }
        if (step2) {
          step2.classList.remove('hidden');
          step2.classList.add('active');
        }
        modal.classList.add('active');
        if (nameInput) {
          nameInput.value = this.userProfile.name || '';
          nameInput.focus();
        }
      });
    }

    // Crisis banner protocol button
    if (crisisProtocolBtn) {
      crisisProtocolBtn.addEventListener('click', () => {
        this.navigateToScreen('screen-science');
        const tabBtnProtocols = document.getElementById('tab-btn-techniques');
        if (tabBtnProtocols) tabBtnProtocols.click();
      });
    }

    // If profile already existed from a previous session and no URL override is asking for onboarding,
    // keep modal and splash screen closed
    const params = new URLSearchParams(window.location.search);
    if (localStorage.getItem('adhyay_profile') && !params.has('onboarding')) {
      modal.classList.remove('active');
      const splashScreen = document.getElementById('splash-screen');
      if (splashScreen) splashScreen.classList.remove('active');
    }
  }

  saveUserProfile() {
    try {
      localStorage.setItem('adhyay_profile', JSON.stringify(this.userProfile));
    } catch (e) {
      console.warn('LocalStorage save failed:', e);
    }
  }

  updateHeaderProfileBadge() {
    const avatarImg = document.getElementById('header-avatar-img');
    const nameText = document.getElementById('header-profile-name-text');
    const heroName = document.getElementById('hero-greeting-name');

    if (avatarImg) {
      avatarImg.src = this.userProfile.gender === 'female' ? 'assets/gender_female.jpg' : 'assets/gender_male.jpg';
    }

    const displayName = this.userProfile.name ? this.userProfile.name : 'Profile';
    if (nameText) {
      nameText.textContent = displayName;
    }

    if (heroName) {
      const salutation = this.getTimeSalutation();
      heroName.textContent = this.userProfile.name ? `${salutation}, ${this.userProfile.name}` : `${salutation}, Friend`;
    }
  }

  getTimeSalutation() {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 17) return 'Good Afternoon';
    return 'Good Evening';
  }

  // --------------------------------------------------------------------------
  // A/B EDITION SWITCHER CONTROLLER
  // --------------------------------------------------------------------------
  setEdition(editionKey, animate = false) {
    const applyTheme = () => {
      this.currentEdition = editionKey;
      this.sound.currentEdition = editionKey;
      localStorage.setItem('adhyay_edition', editionKey);

      const body = document.body;
      const frame = document.getElementById('mobile-frame');
      const metaTheme = document.getElementById('meta-theme-color');
      
      // Desktop Switcher buttons
      const btnA = document.getElementById('btn-edition-a');
      const btnB = document.getElementById('btn-edition-b');
      // Splash Switcher buttons
      const splashBtnA = document.getElementById('splash-btn-a');
      const splashBtnB = document.getElementById('splash-btn-b');
      // Header Switcher buttons
      const hdrBtnA = document.getElementById('hdr-btn-a');
      const hdrBtnB = document.getElementById('hdr-btn-b');
      // Onboarding Switcher buttons
      const onboardingBtnA = document.getElementById('btn-theme-edition-a');
      const onboardingBtnB = document.getElementById('btn-theme-edition-b');
      if (onboardingBtnA) onboardingBtnA.classList.toggle('active', editionKey === 'a');
      if (onboardingBtnB) onboardingBtnB.classList.toggle('active', editionKey === 'b');

      const badge = document.getElementById('edition-badge');
      const label = document.getElementById('edition-label');

      // Splash elements
      const splashGatedBar = document.getElementById('splash-gated-bar');
      const splashGatedStats = document.getElementById('splash-gated-stats');
      const splashZenQuote = document.getElementById('splash-zen-philosophy');
      const clubDossier = document.getElementById('club-member-dossier');
      const zenHero = document.getElementById('zen-hero-card');

      if (editionKey === 'a') {
        // Apply Theme 1: Minimalist White & Black Ink Illustration
        body.classList.remove('theme-focusly-lilac', 'theme-private-club');
        body.classList.add('theme-white-ink', 'theme-organic-zen');
        frame.classList.remove('theme-focusly-lilac', 'theme-private-club');
        frame.classList.add('theme-white-ink', 'theme-organic-zen');

        if (btnA) btnA.classList.add('active');
        if (btnB) btnB.classList.remove('active');
        if (splashBtnA) splashBtnA.classList.add('active');
        if (splashBtnB) splashBtnB.classList.remove('active');
        if (hdrBtnA) hdrBtnA.classList.add('active');
        if (hdrBtnB) hdrBtnB.classList.remove('active');

        if (badge) badge.textContent = '1';
        if (label) label.textContent = 'Ink';
        if (metaTheme) metaTheme.setAttribute('content', '#FFFFFF');

        // Splash & Hero
        if (splashGatedBar) splashGatedBar.classList.add('hidden');
        if (splashGatedStats) splashGatedStats.classList.add('hidden');
        if (splashZenQuote) splashZenQuote.classList.remove('hidden');
        if (clubDossier) clubDossier.classList.add('hidden');
        if (zenHero) zenHero.classList.remove('hidden');

        // Text overrides for Theme 1 (Ink & Lite)
        const brandMotif = document.getElementById('desktop-brand-motif');
        if (brandMotif) brandMotif.textContent = 'अ';
        const brandText = document.getElementById('desktop-brand-text');
        if (brandText) brandText.textContent = 'ADHYAY • INK & LITE';
        document.getElementById('header-brand-title').textContent = 'Adhyay';
        document.getElementById('header-brand-tagline').textContent = 'Guided Reflection';
        document.getElementById('streak-suffix').textContent = 'days';

        document.getElementById('splash-sub-heading').textContent = 'अध्याय';
        document.getElementById('splash-brand-title').textContent = 'Adhyay';
        document.getElementById('splash-tagline').textContent = 'From Overwhelmed → To Clear';
        document.getElementById('splash-start-text').textContent = "Let's begin your Adhyay";
        document.getElementById('splash-explore-text').textContent = 'Explore Clinical Protocols';
        document.getElementById('splash-footer-text').textContent = 'Active Guided Reflection • Factual Physiology';

        document.getElementById('banner-sub-text').textContent = 'CONTINUE YOUR ADHYAY';
        document.getElementById('banner-main-title').textContent = 'Daily Autonomic Reset';
        document.getElementById('emotions-title').textContent = 'How are you feeling today?';
        document.getElementById('prescribed-header-tag').textContent = 'RECOMMENDED PROTOCOL';
        document.getElementById('result-badge-label').textContent = 'ROOT CAUSE IDENTIFIED';
        document.getElementById('score-card-label').textContent = 'ADHYAY CLARITY INDEX';
        document.getElementById('score-state-desc').textContent = 'Internal friction converted into actionable calm';

        document.getElementById('science-header-title').textContent = 'Adhyay Library & Science';
        document.getElementById('science-header-desc').textContent = 'Sorted masterclasses, 60s micro-resets, neuroscience articles & clinical protocols';

      } else {
        // Apply Theme 2: Lilac & Calm
        body.classList.remove('theme-white-ink', 'theme-organic-zen');
        body.classList.add('theme-focusly-lilac', 'theme-private-club');
        frame.classList.remove('theme-white-ink', 'theme-organic-zen');
        frame.classList.add('theme-focusly-lilac', 'theme-private-club');

        if (btnB) btnB.classList.add('active');
        if (btnA) btnA.classList.remove('active');
        if (splashBtnB) splashBtnB.classList.add('active');
        if (splashBtnA) splashBtnA.classList.remove('active');
        if (hdrBtnB) hdrBtnB.classList.add('active');
        if (hdrBtnA) hdrBtnA.classList.remove('active');

        if (badge) badge.textContent = '2';
        if (label) label.textContent = 'Lilac';
        if (metaTheme) metaTheme.setAttribute('content', '#F6F2FF');

        // Splash & Hero
        if (splashGatedBar) splashGatedBar.classList.add('hidden');
        if (splashGatedStats) splashGatedStats.classList.remove('hidden');
        if (splashZenQuote) splashZenQuote.classList.add('hidden');
        if (clubDossier) clubDossier.classList.add('hidden');
        if (zenHero) zenHero.classList.remove('hidden');

        // Text overrides for Theme 2 (Lilac & Calm)
        const brandMotif = document.getElementById('desktop-brand-motif');
        if (brandMotif) brandMotif.textContent = 'अ';
        const brandText = document.getElementById('desktop-brand-text');
        if (brandText) brandText.textContent = 'ADHYAY • LILAC & CALM';
        document.getElementById('header-brand-title').textContent = 'Adhyay';
        document.getElementById('header-brand-tagline').textContent = 'Mindful Calm & Balance';
        document.getElementById('streak-suffix').textContent = 'days streak';

        document.getElementById('splash-sub-heading').textContent = 'अध्याय';
        document.getElementById('splash-brand-title').textContent = 'Adhyay';
        document.getElementById('splash-tagline').textContent = 'From Overwhelmed → To Clear';
        document.getElementById('splash-start-text').textContent = "Let's begin your Adhyay";
        document.getElementById('splash-explore-text').textContent = 'Explore Clinical Protocols';
        document.getElementById('splash-footer-text').textContent = 'Mindful Breathing Habits • Stanford Science';

        document.getElementById('banner-sub-text').textContent = 'CONTINUE YOUR ADHYAY';
        document.getElementById('banner-main-title').textContent = 'Deep Flow & Breath Calibration';
        document.getElementById('emotions-title').textContent = 'How are you feeling right now?';
        document.getElementById('prescribed-header-tag').textContent = 'RECOMMENDED PROTOCOL';
        document.getElementById('result-badge-label').textContent = 'ROOT CAUSE IDENTIFIED';
        document.getElementById('score-card-label').textContent = 'ADHYAY CLARITY SCORE';
        document.getElementById('score-state-desc').textContent = 'Mental friction decoded into productive ease';

        document.getElementById('science-header-title').textContent = 'Adhyay Library & Science';
        document.getElementById('science-header-desc').textContent = 'Sorted masterclasses, 60s micro-resets, neuroscience articles & clinical protocols';
      }
    };

    if (animate) {
      this.triggerCloudShift(applyTheme);
    } else {
      applyTheme();
    }
  }

  // --------------------------------------------------------------------------
  // EVENT BINDINGS
  // --------------------------------------------------------------------------
  bindEvents() {
    // Optional desktop edition switchers if present
    const btnA = document.getElementById('btn-edition-a');
    if (btnA) {
      btnA.addEventListener('click', () => {
        this.setEdition('a', true);
        this.sound.playBowlStrike(216);
      });
    }

    const btnB = document.getElementById('btn-edition-b');
    if (btnB) {
      btnB.addEventListener('click', () => {
        this.setEdition('b', true);
        this.sound.playBowlStrike(528);
      });
    }

    // Home Screen Mindful Companion Mascot Trigger
    const btnHomeMascot = document.getElementById('btn-home-chat-with-mascot');
    if (btnHomeMascot) {
      btnHomeMascot.addEventListener('click', () => {
        const chatbotModal = document.getElementById('ai-chatbot-modal');
        if (chatbotModal) {
          chatbotModal.classList.remove('hidden');
          this.sound.playBowlStrike(432);
          const inputField = document.getElementById('ai-input-field');
          if (inputField) setTimeout(() => inputField.focus(), 200);
        }
      });
    }

    // VIP Premium Access Unlock Handlers
    const btnVipUnlock = document.getElementById('btn-vip-unlock');
    if (btnVipUnlock) {
      btnVipUnlock.addEventListener('click', () => this.handleVipUnlock());
    }

    const vipEmailInput = document.getElementById('vip-email-input');
    if (vipEmailInput) {
      vipEmailInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          this.handleVipUnlock();
        }
      });
    }

    // Bookmarking filter pills
    const btnFilterAllBooks = document.getElementById('btn-filter-all-books');
    const btnFilterBookmarked = document.getElementById('btn-filter-bookmarked-books');
    if (btnFilterAllBooks && btnFilterBookmarked) {
      btnFilterAllBooks.addEventListener('click', () => {
        btnFilterAllBooks.classList.add('active');
        btnFilterBookmarked.classList.remove('active');
        this.renderCalmingBooks('all');
      });

      btnFilterBookmarked.addEventListener('click', () => {
        if (!this.isVipUnlocked()) {
          this.promptVipAccess();
          return;
        }
        btnFilterBookmarked.classList.add('active');
        btnFilterAllBooks.classList.remove('active');
        this.renderCalmingBooks('bookmarked');
      });
    }

    // Book Reader Modal Controls
    const btnCloseBook = document.getElementById('btn-close-book');
    const bookModal = document.getElementById('book-modal');
    if (btnCloseBook && bookModal) {
      btnCloseBook.addEventListener('click', () => {
        bookModal.classList.add('hidden');
      });
    }

    const bookmarkToggleModal = document.getElementById('book-modal-bookmark-toggle');
    if (bookmarkToggleModal) {
      bookmarkToggleModal.addEventListener('click', () => {
        if (this.activeBookId) {
          this.toggleBookmark(this.activeBookId);
        }
      });
    }

    // Splash Screen Actions with Cloud Shift Animation
    const btnSplashStart = document.getElementById('btn-splash-start');
    const splashScreen = document.getElementById('splash-screen');
    const btnSplashExplore = document.getElementById('btn-splash-explore');

    if (btnSplashStart) {
      btnSplashStart.addEventListener('click', () => {
        this.triggerCloudShift(() => {
          splashScreen.classList.remove('active');
          this.startDiagnosticForEmotion('overwhelmed', false);
        });
        this.sound.playBowlStrike();
      });
    }

    if (btnSplashExplore) {
      btnSplashExplore.addEventListener('click', () => {
        this.triggerCloudShift(() => {
          splashScreen.classList.remove('active');
          this.navigateToScreen('screen-science', false);
        });
      });
    }

    // Header Home Button
    document.getElementById('btn-header-home').addEventListener('click', () => {
      this.navigateToScreen('screen-home');
    });

    // Home "Start Adhyay" Banner Button
    document.getElementById('btn-home-start-diagnostic').addEventListener('click', () => {
      this.startDiagnosticForEmotion('overwhelmed');
      this.sound.playBowlStrike();
    });

    // Navigation Tabs
    const navTabs = document.querySelectorAll('.nav-tab');
    navTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const targetScreen = tab.getAttribute('data-target');
        if (targetScreen === 'screen-diagnose') {
          const hasChosenMood = localStorage.getItem('adhyay_diag_mood_chosen');
          if (!hasChosenMood) {
            // First time clicking Diagnostic: open the mood modal
            this.openDiagMoodPicker();
            return;
          }
        }
        this.navigateToScreen(targetScreen);
      });
    });

    // Diagnostic Mood Picker Modal Listeners
    const btnCloseDiagMood = document.getElementById('btn-close-diag-mood');
    if (btnCloseDiagMood) {
      btnCloseDiagMood.addEventListener('click', () => this.closeDiagMoodPicker());
    }

    const modalDiagMood = document.getElementById('modal-diag-mood-picker');
    if (modalDiagMood) {
      modalDiagMood.addEventListener('click', (e) => {
        if (e.target === modalDiagMood) {
          this.closeDiagMoodPicker();
        }
      });
    }

    const btnChangeDiagMood = document.getElementById('btn-change-diag-mood');
    if (btnChangeDiagMood) {
      btnChangeDiagMood.addEventListener('click', () => {
        this.openDiagMoodPicker();
      });
    }

    const diagMoodCards = document.querySelectorAll('.diag-mood-card');
    diagMoodCards.forEach(card => {
      card.addEventListener('click', () => {
        const emotion = card.getAttribute('data-emotion') || 'overwhelmed';
        localStorage.setItem('adhyay_diag_mood_chosen', emotion);
        this.closeDiagMoodPicker();
        this.startDiagnosticForEmotion(emotion);
        const name = DIAGNOSTIC_DATA[emotion]?.name || emotion;
        this.showToast(`Diagnostic initiated for ${name}`);
      });
    });

    // Desktop Frame Toggle
    const btnToggleFrame = document.getElementById('btn-toggle-frame');
    if (btnToggleFrame) {
      btnToggleFrame.addEventListener('click', () => {
        const wrapper = document.getElementById('device-wrapper');
        wrapper.classList.toggle('full-view');
        btnToggleFrame.classList.toggle('active');
      });
    }

    // Sound Ambience Toggle
    const btnToggleSound = document.getElementById('btn-toggle-sound');
    if (btnToggleSound) {
      btnToggleSound.addEventListener('click', () => {
        const isPlaying = this.sound.toggleSound();
        const soundSvg = document.getElementById('sound-icon-svg');
        if (soundSvg) {
          if (isPlaying) {
            soundSvg.innerHTML = '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>';
          } else {
            soundSvg.innerHTML = '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>';
          }
        }
        document.getElementById('sound-label').textContent = isPlaying ? 'Audio: On' : 'Audio: Off';
        btnToggleSound.classList.toggle('active', isPlaying);
      });
    }

    // Emotion Cards Selection (Home Screen)
    const emotionCards = document.querySelectorAll('.emotion-card');
    emotionCards.forEach(card => {
      card.addEventListener('click', () => {
        const emotionKey = card.getAttribute('data-emotion');
        this.startDiagnosticForEmotion(emotionKey);
      });
    });

    // Quick Reset Row (Home Screen)
    document.getElementById('btn-quick-relax').addEventListener('click', () => {
      this.loadTechniqueById('sigh');
      this.navigateToScreen('screen-technique-walkthrough');
      this.goToWalkSlide(3); // Jump straight to practice
      this.startTimer();
    });

    // Mood Check-in Circle Buttons (From Meditation App Design.jpe)
    const moodBtns = document.querySelectorAll('.mood-circle-btn');
    moodBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        moodBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const emotion = btn.getAttribute('data-emotion');
        if (emotion === 'peaceful') {
          this.sound.playBowlStrike(216);
          this.showToast('Peaceful state logged. Maintaining clarity.');
        } else {
          this.sound.playBowlStrike();
          this.startDiagnosticForEmotion(emotion);
        }
      });
    });

    // Explore Section Cards & Links (From Meditation App Design.jpe)
    const btnSeeAllExp = document.getElementById('btn-see-all-explore');
    if (btnSeeAllExp) {
      btnSeeAllExp.addEventListener('click', () => {
        this.navigateToScreen('screen-science');
      });
    }

    const expMed = document.getElementById('exp-card-meditation');
    if (expMed) {
      expMed.addEventListener('click', () => {
        this.loadTechniqueById('sigh');
        this.navigateToScreen('screen-technique-walkthrough');
        this.goToWalkSlide(1);
      });
    }

    const expSleep = document.getElementById('exp-card-sleep');
    if (expSleep) {
      expSleep.addEventListener('click', () => {
        this.loadTechniqueById('vagal');
        this.navigateToScreen('screen-technique-walkthrough');
        this.goToWalkSlide(1);
      });
    }

    const expBreath = document.getElementById('exp-card-breathing');
    if (expBreath) {
      expBreath.addEventListener('click', () => {
        this.loadTechniqueById('box');
        this.navigateToScreen('screen-technique-walkthrough');
        this.goToWalkSlide(1);
      });
    }

    // Recommended Protocols Stack & Links (From Meditation App Design.jpe)
    const btnSeeAllRec = document.getElementById('btn-see-all-recommended');
    if (btnSeeAllRec) {
      btnSeeAllRec.addEventListener('click', () => {
        this.navigateToScreen('screen-science');
      });
    }

    const recCards = document.querySelectorAll('.rec-row-card');
    recCards.forEach(card => {
      card.addEventListener('click', () => {
        const techId = card.getAttribute('data-tech') || 'sigh';
        this.loadTechniqueById(techId);
        this.navigateToScreen('screen-technique-walkthrough');
        this.goToWalkSlide(1);
      });
    });

    // Diagnostic Nav Buttons
    document.getElementById('btn-diag-back').addEventListener('click', () => this.handleDiagnosticBack());
    document.getElementById('btn-diag-close').addEventListener('click', () => this.navigateToScreen('screen-home'));

    // Diagnostic Outcome -> Launch Technique Walkthrough
    document.getElementById('btn-start-technique-walkthrough').addEventListener('click', () => {
      const pres = ROOT_PRESCRIPTIONS[this.identifiedRootKey] || ROOT_PRESCRIPTIONS.default;
      this.loadTechniqueById(pres.techniqueId || 'sigh');
      this.navigateToScreen('screen-technique-walkthrough');
      this.goToWalkSlide(1);
    });

    // Walkthrough Navigation Slides
    document.getElementById('btn-walkthrough-next-1').addEventListener('click', () => this.goToWalkSlide(2));
    document.getElementById('btn-walkthrough-next-2').addEventListener('click', () => {
      this.goToWalkSlide(3);
      this.startTimer();
    });
    document.getElementById('btn-walkthrough-back').addEventListener('click', () => {
      if (this.currentWalkSlide > 1) {
        this.goToWalkSlide(this.currentWalkSlide - 1);
      } else {
        this.navigateToScreen('screen-diagnose');
      }
    });
    document.getElementById('btn-walkthrough-close').addEventListener('click', () => {
      this.navigateToScreen('screen-home');
    });

    // Live Practice Timer Controls
    document.getElementById('btn-timer-toggle').addEventListener('click', () => this.toggleTimer());
    document.getElementById('btn-timer-reset').addEventListener('click', () => this.resetTimer());
    document.getElementById('btn-timer-skip').addEventListener('click', () => this.completeSessionAndShowReport());

    // Duration Chips
    const durChips = document.querySelectorAll('.dur-chip');
    durChips.forEach(chip => {
      chip.addEventListener('click', () => {
        durChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        const secs = parseInt(chip.getAttribute('data-seconds'), 10);
        this.setDuration(secs);
      });
    });

    // Sorted Media & Science Filter Tabs
    const sciTabs = document.querySelectorAll('.sci-tab-btn');
    sciTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        sciTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const tabKey = tab.getAttribute('data-tab');
        this.filterMediaTab(tabKey);
      });
    });

    // Article Reader Modal Close
    const btnCloseArt = document.getElementById('btn-close-article');
    if (btnCloseArt) {
      btnCloseArt.addEventListener('click', () => {
        document.getElementById('article-modal').classList.add('hidden');
      });
    }

    // Visual Rhythm Focal Breathing GIF Selection (DoYou Calming Rhythm Guides)
    const focalChips = document.querySelectorAll('.focal-chip');
    const activeFocalGif = document.getElementById('active-focal-gif');
    const liveBreathImg = document.getElementById('live-breath-img');
    const transitionFocalGif = document.querySelector('.cloud-breathing-focal-gif');

    focalChips.forEach(chip => {
      chip.addEventListener('click', () => {
        focalChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        const gifSrc = chip.getAttribute('data-gif');
        if (gifSrc) {
          if (activeFocalGif) activeFocalGif.src = gifSrc;
          if (liveBreathImg) liveBreathImg.src = gifSrc;
          if (transitionFocalGif) transitionFocalGif.src = gifSrc;
          try {
            this.sound.playBowlStrike(this.userProfile && this.userProfile.gender === 'female' ? 528 : 216);
          } catch (e) {}
        }
      });
    });

    // AI Chatbot Drawer Floating Trigger & Close
    const btnOpenChatbot = document.getElementById('btn-open-chatbot');
    const chatbotModal = document.getElementById('ai-chatbot-modal');
    const btnCloseChatbot = document.getElementById('btn-close-chatbot');

    if (btnOpenChatbot && chatbotModal) {
      btnOpenChatbot.addEventListener('click', () => {
        chatbotModal.classList.remove('hidden');
        this.sound.playBowlStrike(432);
        const inputField = document.getElementById('ai-input-field');
        if (inputField) setTimeout(() => inputField.focus(), 200);
      });
    }

    if (btnCloseChatbot && chatbotModal) {
      btnCloseChatbot.addEventListener('click', () => {
        chatbotModal.classList.add('hidden');
      });
    }

    // Report Actions: Save & Share
    document.getElementById('btn-save-journal').addEventListener('click', () => this.saveToJournal());
    document.getElementById('btn-share-report').addEventListener('click', () => this.exportReport());

    // Micro Action Completion Checkbox
    const chkMicro = document.getElementById('chk-micro-action');
    if (chkMicro) {
      chkMicro.addEventListener('change', () => {
        if (chkMicro.checked) {
          this.showToast('Micro-Action Completed! +10 Clarity Score');
          const current = parseInt(document.getElementById('rep-clarity-score').textContent, 10);
          document.getElementById('rep-clarity-score').textContent = Math.min(100, current + 10);
        }
      });
    }
  }

  // --------------------------------------------------------------------------
  // CLOUD SHIFT SCREEN TRANSITIONS (LEFT TO RIGHT ANIMATION)
  // --------------------------------------------------------------------------
  triggerCloudShift(callback) {
    const overlay = document.getElementById('cloud-transition-overlay');
    if (!overlay) {
      if (typeof callback === 'function') callback();
      return;
    }

    // Force restart of cloud sweep keyframes
    overlay.classList.remove('cloud-shifting');
    void overlay.offsetWidth;
    overlay.classList.add('cloud-shifting');

    // Switch view content at peak cloud coverage (~270ms)
    setTimeout(() => {
      if (typeof callback === 'function') {
        callback();
      }
    }, 270);

    // End transition and reset overlay (~620ms)
    setTimeout(() => {
      overlay.classList.remove('cloud-shifting');
    }, 620);
  }

  // --------------------------------------------------------------------------
  // SCREEN NAVIGATION
  // --------------------------------------------------------------------------
  navigateToScreen(screenId, animate = true) {
    const doNavigation = () => {
      const screens = document.querySelectorAll('.screen-view');
      screens.forEach(s => s.classList.remove('active'));

      const target = document.getElementById(screenId);
      if (target) {
        target.classList.add('active');
        const container = document.getElementById('screens-container');
        if (container) container.scrollTop = 0;
      }

      // Dismiss any open drawers / modals when switching screens
      const chatbotModal = document.getElementById('ai-chatbot-modal');
      if (chatbotModal) chatbotModal.classList.add('hidden');
      const moodModal = document.getElementById('modal-diag-mood-picker');
      if (moodModal) moodModal.classList.add('hidden');

      // Update Bottom Nav active state
      const navTabs = document.querySelectorAll('.nav-tab');
      navTabs.forEach(tab => {
        if (tab.getAttribute('data-target') === screenId) {
          tab.classList.add('active');
        } else {
          tab.classList.remove('active');
        }
      });
    };

    if (animate) {
      this.triggerCloudShift(doNavigation);
    } else {
      doNavigation();
    }
  }

  // --------------------------------------------------------------------------
  // DIAGNOSTIC FLOW (BITE-SIZED, MINIMAL TEXT)
  // --------------------------------------------------------------------------
  openDiagMoodPicker() {
    const modal = document.getElementById('modal-diag-mood-picker');
    if (modal) {
      modal.classList.remove('hidden');
      if (this.sound) this.sound.playBowlStrike(340);
    }
  }

  closeDiagMoodPicker() {
    const modal = document.getElementById('modal-diag-mood-picker');
    if (modal) {
      modal.classList.add('hidden');
    }
  }

  startDiagnosticForEmotion(emotionKey, animate = true) {
    this.currentEmotion = emotionKey;
    this.diagStep = 1;
    this.currentBranch = null;

    const data = DIAGNOSTIC_DATA[emotionKey] || DIAGNOSTIC_DATA.overwhelmed;

    document.getElementById('diagnostic-frame').classList.remove('hidden');
    document.getElementById('diag-result-card').classList.add('hidden');
    const chipImg = document.getElementById('diag-chip-img');
    const chipName = document.getElementById('diag-chip-name');
    if (chipImg && data.image) chipImg.src = data.image;
    if (chipName) chipName.textContent = data.name;

    this.renderDiagnosticStep();
    this.navigateToScreen('screen-diagnose', animate);
  }

  renderDiagnosticStep() {
    const data = DIAGNOSTIC_DATA[this.currentEmotion];
    const dot1 = document.getElementById('dot-step-1');
    const dot2 = document.getElementById('dot-step-2');
    const dot3 = document.getElementById('dot-step-3');

    dot1.className = 'step-dot ' + (this.diagStep >= 1 ? (this.diagStep > 1 ? 'completed' : 'active') : '');
    dot2.className = 'step-dot ' + (this.diagStep >= 2 ? (this.diagStep > 2 ? 'completed' : 'active') : '');
    dot3.className = 'step-dot ' + (this.diagStep >= 3 ? 'active' : '');

    document.getElementById('diag-step-counter').textContent = `Step ${this.diagStep} of 2`;

    const qText = document.getElementById('diag-question-text');
    const stack = document.getElementById('diag-options-stack');
    stack.innerHTML = '';

    if (this.diagStep === 1) {
      qText.textContent = data.step1.question;

      data.step1.options.forEach((opt) => {
        const btn = document.createElement('button');
        btn.className = 'diag-option-btn';
        btn.innerHTML = `
          <span>${opt.label}</span>
          <svg class="option-bullet-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
        `;
        btn.addEventListener('click', () => {
          this.currentBranch = opt.next;
          this.diagStep = 2;
          this.sound.playBowlStrike();
          this.renderDiagnosticStep();
        });
        stack.appendChild(btn);
      });

    } else if (this.diagStep === 2) {
      const branchData = data.branches[this.currentBranch] || Object.values(data.branches)[0];
      qText.textContent = branchData.step2.question;

      branchData.step2.options.forEach((opt) => {
        const btn = document.createElement('button');
        btn.className = 'diag-option-btn';
        btn.innerHTML = `
          <span>${opt.label}</span>
          <svg class="option-bullet-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
        `;
        btn.addEventListener('click', () => {
          this.identifiedRootKey = opt.rootKey || 'paralysis_overload';
          this.diagStep = 3;
          this.sound.playBowlStrike();
          this.renderDiagnosticResult();
        });
        stack.appendChild(btn);
      });
    }
  }

  handleDiagnosticBack() {
    if (this.diagStep === 1) {
      this.navigateToScreen('screen-home');
    } else if (this.diagStep === 2) {
      this.diagStep = 1;
      this.renderDiagnosticStep();
    } else if (this.diagStep === 3) {
      this.diagStep = 2;
      document.getElementById('diagnostic-frame').classList.remove('hidden');
      document.getElementById('diag-result-card').classList.add('hidden');
      this.renderDiagnosticStep();
    }
  }

  renderDiagnosticResult() {
    document.getElementById('dot-step-1').className = 'step-dot completed';
    document.getElementById('dot-step-2').className = 'step-dot completed';
    document.getElementById('dot-step-3').className = 'step-dot completed';

    document.getElementById('diagnostic-frame').classList.add('hidden');
    const resultCard = document.getElementById('diag-result-card');
    resultCard.classList.remove('hidden');

    const prescription = ROOT_PRESCRIPTIONS[this.identifiedRootKey] || ROOT_PRESCRIPTIONS.default;

    document.getElementById('result-title').textContent = prescription.title;
    document.getElementById('result-distortion').textContent = prescription.distortion;
    document.getElementById('result-need').textContent = prescription.need;

    const matchedTech = TECHNIQUES_CATALOG.find(t => t.id === prescription.techniqueId) || TECHNIQUES_CATALOG[0];
    document.getElementById('result-module-name').textContent = matchedTech.name;
    document.getElementById('result-module-pitch').textContent = prescription.pitch;

    // Update report data
    this.reportMetrics.rootTag = prescription.title;
    this.reportMetrics.reframeBefore = prescription.reframeBefore;
    this.reportMetrics.reframeAfter = prescription.reframeAfter;
    this.reportMetrics.microAction = prescription.microAction;

    if (navigator.vibrate) navigator.vibrate([40, 30, 60]);
  }

  // --------------------------------------------------------------------------
  // SCREEN-BY-SCREEN TECHNIQUE WALKTHROUGH
  // --------------------------------------------------------------------------
  loadTechniqueById(techId) {
    const found = TECHNIQUES_CATALOG.find(t => t.id === techId);
    if (found) {
      this.activeTechnique = found;
      this.resetTimer();
    }
  }

  goToWalkSlide(slideNumber) {
    this.triggerCloudShift(() => {
      this.currentWalkSlide = slideNumber;

      const s1 = document.getElementById('wslide-1');
      const s2 = document.getElementById('wslide-2');
      const s3 = document.getElementById('wslide-3');
      s1.classList.add('hidden');
      s2.classList.add('hidden');
      s3.classList.add('hidden');

      const dot1 = document.getElementById('wdot-1');
      const dot2 = document.getElementById('wdot-2');
      const dot3 = document.getElementById('wdot-3');
      dot1.className = 'walk-dot ' + (slideNumber >= 1 ? 'active' : '');
      dot2.className = 'walk-dot ' + (slideNumber >= 2 ? 'active' : '');
      dot3.className = 'walk-dot ' + (slideNumber >= 3 ? 'active' : '');

      const tech = this.activeTechnique;

      if (slideNumber === 1) {
        s1.classList.remove('hidden');
        document.getElementById('wslide-tech-name').textContent = tech.name;
        document.getElementById('wslide-tech-purpose').textContent = tech.purpose;
        document.getElementById('wslide-benefit-1').textContent = tech.benefits[0] || 'Restores autonomic calm';
        document.getElementById('wslide-benefit-2').textContent = tech.benefits[1] || 'Lowers physiological heart rate';

        // Update 3D Claymorphic Technique Purpose Artwork
        const purposeImg = document.getElementById('wslide-purpose-3d-img');
        if (purposeImg) {
          purposeImg.src = tech.image3d || 'assets/tech_3d_box_purpose.png';
          purposeImg.alt = `${tech.name} 3D Sanctuary`;
        }

      } else if (slideNumber === 2) {
        s2.classList.remove('hidden');
        document.getElementById('wslide-citation').textContent = tech.origin;

        // Ensure 3D Biological Lungs & Vagal Reset Artwork is displayed
        const physioImg = document.getElementById('wslide-physiology-3d-img');
        if (physioImg) {
          physioImg.src = 'assets/tech_3d_lungs_reset.png';
          physioImg.alt = 'Autonomic Vagus & Lung Reset 3D Model';
        }

        const stack = document.getElementById('wslide-mechanism-steps');
        stack.innerHTML = '';
        tech.cycle.forEach((step, idx) => {
          const el = document.createElement('div');
          el.className = 'mech-step';
          el.innerHTML = `
            <span class="mech-num">${idx + 1}</span>
            <div>
              <strong>${step.phase} (${step.duration}s)</strong>
              <p>${step.text}</p>
            </div>
          `;
          stack.appendChild(el);
        });

      } else if (slideNumber === 3) {
        s3.classList.remove('hidden');
        document.getElementById('live-practice-title').textContent = tech.name;
        document.getElementById('live-citation-pill').textContent = tech.origin;
      }
    });
  }

  // --------------------------------------------------------------------------
  // LIVE TIMER & BREATHING PACER
  // --------------------------------------------------------------------------
  setDuration(seconds) {
    this.sessionDuration = seconds;
    this.remainingSeconds = seconds;
    this.updateTimerDisplay();
  }

  toggleTimer() {
    if (this.isTimerRunning) {
      this.pauseTimer();
    } else {
      this.startTimer();
    }
  }

  startTimer() {
    if (this.isTimerRunning) return;
    this.isTimerRunning = true;
    
    document.getElementById('btn-timer-label').textContent = 'Pause Session';
    this.sound.playBowlStrike();

    if (this.remainingSeconds <= 0) {
      this.remainingSeconds = this.sessionDuration;
    }

    this.startBreathCycle();

    this.timerInterval = setInterval(() => {
      this.remainingSeconds--;
      this.updateTimerDisplay();

      if (this.remainingSeconds <= 0) {
        this.completeSessionAndShowReport();
      }
    }, 1000);
  }

  pauseTimer() {
    this.isTimerRunning = false;
    document.getElementById('btn-timer-label').textContent = 'Resume Session';
    clearInterval(this.timerInterval);
    clearTimeout(this.breathInterval);
    
    const orb = document.getElementById('breath-orb');
    orb.className = 'breath-orb';
    document.getElementById('breath-phase-text').textContent = 'Paused';
  }

  resetTimer() {
    this.pauseTimer();
    this.remainingSeconds = this.sessionDuration;
    this.currentCycleIndex = 0;
    this.updateTimerDisplay();

    const orb = document.getElementById('breath-orb');
    orb.className = 'breath-orb';
    const breathImg = document.getElementById('live-breath-img');
    if (breathImg) {
      breathImg.src = 'assets/breathe_inhale.jpg';
      breathImg.className = 'live-breath-img inhaling';
    }
    document.getElementById('breath-phase-text').textContent = 'Ready';
    document.getElementById('breath-instruction').textContent = 'Tap Begin below';
    document.getElementById('btn-timer-label').textContent = 'Begin Session';
  }

  startBreathCycle() {
    clearTimeout(this.breathInterval);
    this.currentCycleIndex = 0;
    this.advanceBreathPhase();
  }

  advanceBreathPhase() {
    if (!this.isTimerRunning) return;

    const cycle = this.activeTechnique.cycle;
    const currentPhase = cycle[this.currentCycleIndex];
    const orb = document.getElementById('breath-orb');
    const breathImg = document.getElementById('live-breath-img');

    orb.className = `breath-orb ${currentPhase.orbClass}`;
    document.getElementById('breath-phase-text').textContent = currentPhase.phase;
    document.getElementById('breath-instruction').textContent = currentPhase.text;

    // Dynamically swap and animate humane character illustration between Inhale and Exhale
    if (breathImg) {
      if (currentPhase.orbClass === 'exhale') {
        breathImg.src = 'assets/breathe_exhale.jpg';
        breathImg.classList.remove('inhaling');
        breathImg.classList.add('exhaling');
      } else {
        // inhale or hold phases
        breathImg.src = 'assets/breathe_inhale.jpg';
        breathImg.classList.remove('exhaling');
        breathImg.classList.add('inhaling');
      }
    }

    if (navigator.vibrate) navigator.vibrate(35);

    this.breathInterval = setTimeout(() => {
      this.currentCycleIndex = (this.currentCycleIndex + 1) % cycle.length;
      this.advanceBreathPhase();
    }, currentPhase.duration * 1000);
  }

  updateTimerDisplay() {
    const mins = Math.floor(this.remainingSeconds / 60);
    const secs = this.remainingSeconds % 60;
    const str = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    document.getElementById('breath-countdown').textContent = str;

    const circle = document.getElementById('timer-progress-circle');
    const circumference = 722.5;
    const fraction = this.remainingSeconds / this.sessionDuration;
    const offset = circumference - (fraction * circumference);
    circle.style.strokeDashoffset = offset;
  }

  completeSessionAndShowReport() {
    this.pauseTimer();
    this.sound.playBowlStrike();

    if (navigator.vibrate) navigator.vibrate([60, 40, 100]);

    this.reportMetrics.clarityScore = 88 + Math.floor(Math.random() * 8);
    this.reportMetrics.focusDelta = `+${34 + Math.floor(Math.random() * 12)}%`;
    this.reportMetrics.stressDelta = `-${40 + Math.floor(Math.random() * 10)}%`;
    this.reportMetrics.prodDelta = `+${28 + Math.floor(Math.random() * 10)}%`;
    this.reportMetrics.happyDelta = `+${48 + Math.floor(Math.random() * 12)}%`;

    this.renderReport();
    this.navigateToScreen('screen-report');
    this.showToast('Session Completed • Clarity Report Generated');
  }

  // --------------------------------------------------------------------------
  // REPORT DASHBOARD
  // --------------------------------------------------------------------------
  renderReport() {
    const m = this.reportMetrics;
    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    document.getElementById('report-timestamp').textContent = `Today • ${timeStr}`;
    document.getElementById('rep-clarity-score').textContent = m.clarityScore;
    document.getElementById('rep-clarity-change').textContent = m.clarityChange;
    document.getElementById('rep-focus-delta').textContent = m.focusDelta;
    document.getElementById('rep-stress-delta').textContent = m.stressDelta;
    document.getElementById('rep-prod-delta').textContent = m.prodDelta;
    document.getElementById('rep-happy-delta').textContent = m.happyDelta;

    document.getElementById('rep-before-text').textContent = m.reframeBefore;
    document.getElementById('rep-after-text').textContent = m.reframeAfter;
    document.getElementById('rep-micro-action-text').textContent = m.microAction;

    const chk = document.getElementById('chk-micro-action');
    if (chk) chk.checked = false;
  }

  saveToJournal() {
    const entry = {
      id: Date.now(),
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }),
      title: this.reportMetrics.rootTag,
      score: this.reportMetrics.clarityScore,
      technique: this.activeTechnique.name,
      edition: this.currentEdition
    };

    this.history.unshift(entry);
    if (this.history.length > 20) this.history.pop();
    localStorage.setItem('adhyay_history', JSON.stringify(this.history));

    this.renderHistory();
    this.showToast('Saved to Daily Clarity Journal');
  }

  exportReport() {
    const m = this.reportMetrics;
    const text = `ADHYAY CLARITY SUMMARY\n` +
      `Edition: ${this.currentEdition === 'b' ? 'Private Members Club Noir' : 'Organic Zen Sanctuary'}\n` +
      `Date: ${new Date().toLocaleDateString()}\n` +
      `Clarity Score: ${m.clarityScore}/100\n` +
      `Focus Increase: ${m.focusDelta}\n` +
      `Stress Decrease: ${m.stressDelta}\n` +
      `Productivity Boost: ${m.prodDelta}\n` +
      `Good-Natured Thoughts: ${m.happyDelta}\n` +
      `Micro-Action: ${m.microAction}\n` +
      `— Generated via Adhyay`;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        this.showToast('Summary copied to clipboard!');
      });
    } else {
      alert(text);
    }
  }

  renderHistory() {
    const list = document.getElementById('session-history-list');
    if (!list) return;

    if (this.history.length === 0) {
      list.innerHTML = `
        <div class="history-item">
          <div class="history-left">
            <span class="hist-date">Initial Baseline</span>
            <span class="hist-name">Orientation Session</span>
          </div>
          <span class="hist-score">90 pts</span>
        </div>
      `;
      return;
    }

    list.innerHTML = '';
    this.history.slice(0, 5).forEach(item => {
      const el = document.createElement('div');
      el.className = 'history-item';
      el.innerHTML = `
        <div class="history-left">
          <span class="hist-date">${item.date} • ${item.technique}</span>
          <span class="hist-name">${item.title}</span>
        </div>
        <span class="hist-score">${item.score} pts</span>
      `;
      list.appendChild(el);
    });
  }



  // --------------------------------------------------------------------------
  // SORTED MEDIA & SCIENCE HUB (UNCLUTTERED CATEGORY FILTERING)
  // --------------------------------------------------------------------------
  renderMediaAndScienceHub() {
    this.renderCalmingBooks();
    this.updateVipBannerState();
    this.renderYouTubeGrid();
    this.renderShortsGrid();
    this.renderArticlesCatalog();
    this.renderTechniquesCatalog();
  }

  filterMediaTab(tabKey) {
    const secBooks = document.getElementById('sec-calming-books');
    const secVideos = document.getElementById('sec-yt-videos');
    const secShorts = document.getElementById('sec-quick-shorts');
    const secArticles = document.getElementById('sec-articles');
    const secProtocols = document.getElementById('sec-protocols');

    if (!secVideos || !secShorts || !secArticles || !secProtocols) return;

    if (tabKey === 'all') {
      if (secBooks) secBooks.classList.remove('hidden');
      secVideos.classList.remove('hidden');
      secShorts.classList.remove('hidden');
      secArticles.classList.remove('hidden');
      secProtocols.classList.remove('hidden');
    } else if (tabKey === 'books') {
      if (secBooks) secBooks.classList.remove('hidden');
      secVideos.classList.add('hidden');
      secShorts.classList.add('hidden');
      secArticles.classList.add('hidden');
      secProtocols.classList.add('hidden');
    } else if (tabKey === 'videos') {
      if (secBooks) secBooks.classList.add('hidden');
      secVideos.classList.remove('hidden');
      secShorts.classList.add('hidden');
      secArticles.classList.add('hidden');
      secProtocols.classList.add('hidden');
    } else if (tabKey === 'shorts') {
      if (secBooks) secBooks.classList.add('hidden');
      secVideos.classList.add('hidden');
      secShorts.classList.remove('hidden');
      secArticles.classList.add('hidden');
      secProtocols.classList.add('hidden');
    } else if (tabKey === 'articles') {
      if (secBooks) secBooks.classList.add('hidden');
      secVideos.classList.add('hidden');
      secShorts.classList.add('hidden');
      secArticles.classList.remove('hidden');
      secProtocols.classList.add('hidden');
    } else if (tabKey === 'techniques') {
      if (secBooks) secBooks.classList.add('hidden');
      secVideos.classList.add('hidden');
      secShorts.classList.add('hidden');
      secArticles.classList.add('hidden');
      secProtocols.classList.remove('hidden');
    }
  }

  // --------------------------------------------------------------------------
  // CALMING BOOKS & VIP PREMIUM ACCESS LOGIC
  // --------------------------------------------------------------------------
  isVipUnlocked() {
    return localStorage.getItem('adhyay_vip_unlocked') === 'true';
  }

  getBookmarks() {
    try {
      const data = localStorage.getItem('adhyay_bookmarked_books');
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  }

  toggleBookmark(bookId) {
    if (!this.isVipUnlocked()) {
      this.promptVipAccess();
      return;
    }
    let bookmarks = this.getBookmarks();
    const idx = bookmarks.indexOf(bookId);
    let isNowBookmarked = false;
    if (idx >= 0) {
      bookmarks.splice(idx, 1);
      isNowBookmarked = false;
      this.showToast('Bookmark removed');
    } else {
      bookmarks.push(bookId);
      isNowBookmarked = true;
      this.sound.playBowlStrike(528);
      this.showToast('Added to Calming Bookmarks');
    }
    localStorage.setItem('adhyay_bookmarked_books', JSON.stringify(bookmarks));
    this.renderCalmingBooks();
    this.updateBookmarkButtonState(bookId, isNowBookmarked);
  }

  handleVipUnlock() {
    const input = document.getElementById('vip-email-input');
    if (!input) return;
    const val = input.value.trim().toLowerCase();
    if (val === 'pm@skillizee.io') {
      localStorage.setItem('adhyay_vip_unlocked', 'true');
      this.sound.playBowlStrike(528);
      this.showToast('VIP Access Granted! Welcome pm@skillizee.io');
      this.updateVipBannerState();
      this.renderCalmingBooks();
    } else {
      this.sound.playBowlStrike(180);
      this.showToast('Invalid VIP ID. Enter pm@skillizee.io for access.');
    }
  }

  promptVipAccess() {
    this.showToast('Premium feature: Enter VIP ID pm@skillizee.io to unlock');
    const vipInput = document.getElementById('vip-email-input');
    const vipBanner = document.getElementById('vip-premium-banner');
    if (vipBanner) {
      vipBanner.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    if (vipInput) {
      setTimeout(() => vipInput.focus(), 300);
    }
  }

  updateVipBannerState() {
    const banner = document.getElementById('vip-premium-banner');
    const statusText = document.getElementById('vip-status-text');
    const unlockBox = document.getElementById('vip-unlock-box');
    if (!banner || !statusText) return;

    const isUnlocked = this.isVipUnlocked();
    if (isUnlocked) {
      banner.classList.add('unlocked');
      statusText.textContent = 'VIP Active • Unlocked';
      if (unlockBox) {
        unlockBox.innerHTML = `
          <div style="display:flex; align-items:center; gap:8px;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#10B981"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
            <span style="font-size:11.5px; font-weight:600; color:var(--text-primary);">Lifetime VIP Sanctuary Active (pm@skillizee.io)</span>
          </div>
        `;
      }
    } else {
      banner.classList.remove('unlocked');
      statusText.textContent = 'Premium Locked';
    }
  }

  renderCalmingBooks(filter = 'all') {
    const grid = document.getElementById('books-grid');
    const countBadge = document.getElementById('count-books');
    const bookmarkedCountBadge = document.getElementById('bookmarked-count-badge');
    if (!grid) return;

    const isVip = this.isVipUnlocked();
    const bookmarks = this.getBookmarks();
    if (bookmarkedCountBadge) bookmarkedCountBadge.textContent = bookmarks.length;

    let booksToShow = CALMING_BOOKS_CATALOG;
    if (filter === 'bookmarked') {
      booksToShow = CALMING_BOOKS_CATALOG.filter(b => bookmarks.includes(b.id));
    }

    if (countBadge) {
      countBadge.textContent = `${booksToShow.length} ${booksToShow.length === 1 ? 'Book' : 'Books'}`;
    }

    if (booksToShow.length === 0) {
      grid.innerHTML = `
        <div style="text-align:center; padding:30px 15px; color:var(--text-muted); font-size:12px;">
          No bookmarked books yet. Explore the catalog and tap the bookmark icon to save your favorites!
        </div>
      `;
      return;
    }

    grid.innerHTML = '';
    booksToShow.forEach(book => {
      const isBookmarked = bookmarks.includes(book.id);
      const card = document.createElement('div');
      card.className = 'calm-book-card';
      card.innerHTML = `
        <div class="book-card-cover-wrap">
          <img src="${book.coverImg}" alt="${book.title}" class="book-card-cover-img" loading="lazy">
        </div>
        <div class="book-card-info">
          <div class="book-card-top-row">
            <span class="book-category-tag">${book.category}</span>
            <button type="button" class="btn-bookmark-card ${isBookmarked ? 'bookmarked' : ''}" data-id="${book.id}" title="${isBookmarked ? 'Remove Bookmark' : 'Add Bookmark'}">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="${isBookmarked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2.5">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
              </svg>
            </button>
          </div>
          <h4 class="book-card-title">${book.title}</h4>
          <span class="book-card-author">${book.author}</span>
          <p class="book-card-takeaway">${book.takeaway}</p>
          <div class="book-card-actions">
            <button type="button" class="btn-read-book" data-id="${book.id}">
              <span>${isVip ? 'Read Calm Reflections' : 'VIP Preview'}</span>
              <span>→</span>
            </button>
            <span class="book-read-time">${book.readTime}</span>
          </div>
        </div>
      `;

      // Event handlers
      const btnBookmark = card.querySelector('.btn-bookmark-card');
      if (btnBookmark) {
        btnBookmark.addEventListener('click', (e) => {
          e.stopPropagation();
          this.toggleBookmark(book.id);
        });
      }

      const btnRead = card.querySelector('.btn-read-book');
      if (btnRead) {
        btnRead.addEventListener('click', (e) => {
          e.stopPropagation();
          this.openBookModal(book);
        });
      }

      card.addEventListener('click', () => {
        this.openBookModal(book);
      });

      grid.appendChild(card);
    });
  }

  openBookModal(book) {
    if (!this.isVipUnlocked()) {
      this.promptVipAccess();
      return;
    }

    const modal = document.getElementById('book-modal');
    if (!modal) return;

    this.activeBookId = book.id;
    const titleEl = document.getElementById('book-modal-title');
    const authorEl = document.getElementById('book-modal-author');
    const categoryEl = document.getElementById('book-modal-category');
    const readtimeEl = document.getElementById('book-modal-readtime');
    const imgEl = document.getElementById('book-modal-img');
    const bodyEl = document.getElementById('book-modal-body');

    if (titleEl) titleEl.textContent = book.title;
    if (authorEl) authorEl.textContent = book.author;
    if (categoryEl) categoryEl.textContent = book.category;
    if (readtimeEl) readtimeEl.textContent = book.readTime;
    if (imgEl) imgEl.src = book.coverImg;

    const bookmarks = this.getBookmarks();
    const isBookmarked = bookmarks.includes(book.id);
    this.updateBookmarkButtonState(book.id, isBookmarked);

    let lessonsHtml = book.lessons.map((l, i) => `
      <div class="book-lesson-item">
        <strong>${i + 1}. ${l.title}</strong>
        <p>${l.detail}</p>
      </div>
    `).join('');

    if (bodyEl) {
      bodyEl.innerHTML = `
        <div class="book-section-block">
          <div class="book-quote-callout">${book.takeaway}</div>
        </div>
        <div class="book-section-block">
          <h4 class="book-section-title">Essential Mindful Summary</h4>
          <p>${book.summary}</p>
        </div>
        <div class="book-section-block">
          <h4 class="book-section-title">3 Core Teachings to Calm Down</h4>
          ${lessonsHtml}
        </div>
        <div class="book-section-block">
          <h4 class="book-section-title">Direct Calming Practice</h4>
          <div style="background:var(--accent-soft); border-radius:12px; padding:12px; font-size:12px; line-height:1.5;">
            ${book.calmExercise}
          </div>
        </div>
        <div style="margin-top:16px;">
          <button type="button" class="btn-start-primary" id="btn-book-start-practice">
            <span>Let's begin your Adhyay</span>
            <span class="btn-arrow">→</span>
          </button>
        </div>
      `;

      const practiceBtn = bodyEl.querySelector('#btn-book-start-practice');
      if (practiceBtn) {
        practiceBtn.addEventListener('click', () => {
          modal.classList.add('hidden');
          this.navigateToScreen('screen-technique-walkthrough');
        });
      }
    }

    modal.classList.remove('hidden');
    this.sound.playBowlStrike(432);
  }

  updateBookmarkButtonState(bookId, isBookmarked) {
    const modalBtn = document.getElementById('book-modal-bookmark-toggle');
    const modalText = document.getElementById('book-modal-bookmark-text');
    if (modalBtn && this.activeBookId === bookId) {
      modalBtn.classList.toggle('bookmarked', isBookmarked);
      const svg = modalBtn.querySelector('svg');
      if (svg) svg.setAttribute('fill', isBookmarked ? 'currentColor' : 'none');
      if (modalText) modalText.textContent = isBookmarked ? 'Bookmarked' : 'Bookmark';
    }
  }

  renderYouTubeGrid() {
    const grid = document.getElementById('videos-grid');
    if (!grid) return;
    grid.innerHTML = '';

    YOUTUBE_MASTERCLASSES.forEach(item => {
      const card = document.createElement('div');
      card.className = 'video-card';
      card.innerHTML = `
        <div class="video-thumb-wrap">
          <img src="${item.thumb}" alt="${item.title}" class="video-thumb-img" loading="lazy">
          <div class="video-play-badge">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 3 20 12 6 21 6 3"/></svg>
          </div>
          <span class="video-duration-pill">${item.duration}</span>
        </div>
        <div class="video-info-box">
          <span class="video-channel-name">${item.channel}</span>
          <h4 class="video-card-title">${item.title}</h4>
          <div class="video-card-meta">
            <span>${item.views}</span>
            <span>•</span>
            <span class="video-cta-text">Watch Masterclass →</span>
          </div>
        </div>
      `;

      card.addEventListener('click', () => {
        this.openYouTubeModal(item);
      });

      grid.appendChild(card);
    });
  }

  renderShortsGrid() {
    const grid = document.getElementById('shorts-grid');
    if (!grid) return;
    grid.innerHTML = '';

    QUICK_SHORTS_CATALOG.forEach(item => {
      const card = document.createElement('div');
      card.className = 'short-card';
      card.innerHTML = `
        <div class="short-badge-row">
          <span class="short-tag">${item.tag}</span>
          <span class="short-duration-pill">${item.duration}</span>
        </div>
        <h4 class="short-title">${item.title}</h4>
        <p class="short-desc-cue">Instant 60s paced breathing and prefrontal reset.</p>
        <button class="btn-play-short" data-short-id="${item.id}">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 3 20 12 6 21 6 3"/></svg>
          <span>60s Reset</span>
        </button>
      `;

      card.addEventListener('click', () => {
        this.openShortsModal(item);
      });

      grid.appendChild(card);
    });
  }

  renderTechniquesCatalog() {
    const catalog = document.getElementById('techniques-catalog');
    if (!catalog) return;
    catalog.innerHTML = '';

    TECHNIQUES_CATALOG.forEach(tech => {
      const card = document.createElement('div');
      card.className = 'tech-item-card';

      let benefitsHtml = '';
      tech.benefits.forEach(b => {
        benefitsHtml += `<div class="tech-benefit-line"><svg class="benefit-check-svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> <span>${b}</span></div>`;
      });

      card.innerHTML = `
        <div class="tech-card-header">
          <span class="tech-category-pill">${tech.category}</span>
          <span class="tech-origin-ref">${tech.origin}</span>
        </div>
        <div class="tech-card-body-row">
          <div class="tech-card-info">
            <h3 class="tech-item-title">${tech.name}</h3>
            <p class="tech-purpose-box">${tech.purpose}</p>
          </div>
          <div class="tech-3d-thumb-wrap">
            <img src="${tech.image3d || 'assets/tech_3d_box_purpose.png'}" alt="${tech.name} 3D" class="tech-3d-thumb" loading="lazy">
          </div>
        </div>
        <div class="tech-benefits-list">
          ${benefitsHtml}
        </div>
        <div class="tech-card-actions">
          <button class="btn-practice-tech" data-tech-id="${tech.id}">Practice in Studio →</button>
        </div>
      `;

      card.querySelector('.btn-practice-tech').addEventListener('click', () => {
        this.loadTechniqueById(tech.id);
        this.navigateToScreen('screen-technique-walkthrough');
        this.goToWalkSlide(1);
        this.showToast(`Loaded ${tech.name}`);
      });

      catalog.appendChild(card);
    });
  }

  renderArticlesCatalog() {
    const catalog = document.getElementById('articles-catalog');
    if (!catalog) return;
    catalog.innerHTML = '';

    SCIENCE_ARTICLES.forEach(art => {
      const card = document.createElement('div');
      card.className = 'art-card';
      card.innerHTML = `
        <div class="art-meta">
          <span class="art-tag">${art.tag}</span>
          <span class="art-read-time">${art.readTime}</span>
        </div>
        <h4>${art.title}</h4>
        <p>${art.summary}</p>
        <span class="art-card-link">Read Full Research →</span>
      `;

      card.addEventListener('click', () => {
        this.openArticleModal(art);
      });

      catalog.appendChild(card);
    });
  }

  openArticleModal(art) {
    document.getElementById('art-modal-tag').textContent = art.tag;
    document.getElementById('art-modal-title').textContent = art.title;
    document.getElementById('art-modal-ref').textContent = art.author;
    document.getElementById('art-modal-body').innerHTML = art.content;

    const sourcesList = document.getElementById('art-modal-sources-list');
    const sourcesContainer = document.getElementById('art-modal-sources-container');
    if (sourcesList && sourcesContainer) {
      sourcesList.innerHTML = '';
      if (art.sources && art.sources.length > 0) {
        sourcesContainer.style.display = 'block';
        art.sources.forEach(src => {
          const card = document.createElement('a');
          card.className = 'source-link-card';
          card.href = src.url;
          card.target = '_blank';
          card.rel = 'noopener noreferrer';
          card.setAttribute('aria-label', src.name);
          card.innerHTML = `
            <div class="source-link-content">
              <span class="source-link-title">${src.name}</span>
              <span class="source-link-desc">${src.desc || ''}</span>
              <span class="source-link-url">${src.url}</span>
            </div>
            <div class="source-link-icon">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </div>
          `;
          sourcesList.appendChild(card);
        });
      } else {
        sourcesContainer.style.display = 'none';
      }
    }

    document.getElementById('article-modal').classList.remove('hidden');
  }

  // --------------------------------------------------------------------------
  // MEDIA MODALS: YOUTUBE MASTERCLASSES & 60s QUICK SHORTS
  // --------------------------------------------------------------------------
  initMediaModals() {
    // Video Modal Close
    const btnCloseYt = document.getElementById('btn-close-yt-video');
    if (btnCloseYt) {
      btnCloseYt.addEventListener('click', () => this.closeYouTubeModal());
    }

    // Shorts Modal Close
    const btnCloseShorts = document.getElementById('btn-close-shorts');
    if (btnCloseShorts) {
      btnCloseShorts.addEventListener('click', () => this.closeShortsModal());
    }

    // Shorts Toggle Play/Pause
    const btnShortsToggle = document.getElementById('btn-shorts-play-toggle');
    if (btnShortsToggle) {
      btnShortsToggle.addEventListener('click', () => this.toggleShortsPlayback());
    }

    // Shorts Practice Full Adhyay CTA
    const btnShortsFull = document.getElementById('btn-shorts-open-practice');
    if (btnShortsFull) {
      btnShortsFull.addEventListener('click', () => {
        if (this.activeShort) {
          const techId = this.activeShort.techId || 'sigh';
          this.closeShortsModal();
          this.loadTechniqueById(techId);
          this.navigateToScreen('screen-technique-walkthrough');
          this.goToWalkSlide(1);
          this.showToast("Let's begin your Adhyay");
        }
      });
    }
  }

  openYouTubeModal(item) {
    const modal = document.getElementById('yt-video-modal');
    if (!modal) return;

    document.getElementById('yt-modal-channel').textContent = item.channel;
    document.getElementById('yt-modal-title').textContent = item.title;
    document.getElementById('yt-modal-desc').textContent = item.summary;

    const takeawaysEl = document.getElementById('yt-modal-takeaways');
    if (takeawaysEl) {
      takeawaysEl.innerHTML = '';
      item.takeaways.forEach(t => {
        const row = document.createElement('div');
        row.className = 'takeaway-item';
        row.innerHTML = `<span class="takeaway-bullet">•</span> <span>${t}</span>`;
        takeawaysEl.appendChild(row);
      });
    }

    const player = document.getElementById('yt-player-container');
    if (player) {
      player.innerHTML = `
        <iframe 
          src="https://www.youtube.com/embed/${item.videoId}?autoplay=1&rel=0&modestbranding=1" 
          title="${item.title}" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      `;
    }

    const practiceBtn = document.getElementById('btn-yt-practice-action');
    if (practiceBtn) {
      practiceBtn.onclick = () => {
        this.closeYouTubeModal();
        this.loadTechniqueById(item.targetTechId);
        this.navigateToScreen('screen-technique-walkthrough');
        this.goToWalkSlide(1);
        this.showToast("Let's begin your Adhyay");
      };
    }

    modal.classList.remove('hidden');
    this.sound.playBowlStrike(432);
  }

  closeYouTubeModal() {
    const modal = document.getElementById('yt-video-modal');
    if (modal) modal.classList.add('hidden');
    const player = document.getElementById('yt-player-container');
    if (player) player.innerHTML = '';
  }

  openShortsModal(item) {
    this.activeShort = item;
    const modal = document.getElementById('shorts-modal');
    if (!modal) return;

    document.getElementById('shorts-title').textContent = item.title;
    this.shortsRemaining = 60;
    this.shortsIsPlaying = true;

    document.getElementById('shorts-countdown').textContent = '00:60';
    document.getElementById('shorts-progress-bar').style.width = '0%';
    document.getElementById('btn-shorts-play-toggle').textContent = 'Pause';

    modal.classList.remove('hidden');
    this.sound.playBowlStrike(432);

    this.runShortsLoop();
  }

  runShortsLoop() {
    if (this.shortsTimerInterval) clearInterval(this.shortsTimerInterval);

    const progressBar = document.getElementById('shorts-progress-bar');
    const countdownEl = document.getElementById('shorts-countdown');
    const cueEl = document.getElementById('shorts-step-cue');
    const badgeEl = document.getElementById('shorts-phase-badge');
    const orbEl = document.getElementById('shorts-orb');

    this.shortsTimerInterval = setInterval(() => {
      if (!this.shortsIsPlaying) return;

      this.shortsRemaining--;
      const elapsed = 60 - this.shortsRemaining;

      // Update countdown string
      const secStr = this.shortsRemaining < 10 ? `0${this.shortsRemaining}` : `${this.shortsRemaining}`;
      countdownEl.textContent = `00:${secStr}`;

      // Update progress bar
      const pct = (elapsed / 60) * 100;
      progressBar.style.width = `${pct}%`;

      // Update cues from timeline
      if (this.activeShort && this.activeShort.cues) {
        const currentCue = [...this.activeShort.cues].reverse().find(c => elapsed >= c.t);
        if (currentCue) {
          cueEl.textContent = currentCue.text;
        }
      }

      // Dynamic visual orb pulse
      const phaseMod = elapsed % 8;
      if (phaseMod < 4) {
        badgeEl.textContent = 'Inhale';
        orbEl.className = 'shorts-orb expand';
      } else {
        badgeEl.textContent = 'Exhale';
        orbEl.className = 'shorts-orb contract';
      }

      if (this.shortsRemaining <= 0) {
        clearInterval(this.shortsTimerInterval);
        this.shortsTimerInterval = null;
        badgeEl.textContent = 'Complete';
        cueEl.textContent = 'Adhyay complete. Rest in clarity.';
        this.sound.playBowlStrike(528);
        this.showToast('60-Second Adhyay Complete');
        setTimeout(() => this.closeShortsModal(), 1800);
      }
    }, 1000);
  }

  toggleShortsPlayback() {
    this.shortsIsPlaying = !this.shortsIsPlaying;
    const btn = document.getElementById('btn-shorts-play-toggle');
    if (btn) btn.textContent = this.shortsIsPlaying ? 'Pause' : 'Resume';
  }

  closeShortsModal() {
    if (this.shortsTimerInterval) {
      clearInterval(this.shortsTimerInterval);
      this.shortsTimerInterval = null;
    }
    const modal = document.getElementById('shorts-modal');
    if (modal) modal.classList.add('hidden');
    this.activeShort = null;
  }

  // --------------------------------------------------------------------------
  // ADHYAY AI HEALTH & WELLNESS CHATBOT ENGINE
  // --------------------------------------------------------------------------
  initAIChatbot() {
    const form = document.getElementById('ai-input-form');
    const inputField = document.getElementById('ai-input-field');
    const chips = document.querySelectorAll('.ai-chip');

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = inputField.value.trim();
        if (text) {
          this.handleAIChatSubmit(text);
          inputField.value = '';
        }
      });
    }

    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        const q = chip.getAttribute('data-q') || chip.textContent.trim();
        this.handleAIChatSubmit(q);
      });
    });

    // Wire clicks on dynamically created practice buttons in chat
    const container = document.getElementById('ai-messages-container');
    if (container) {
      container.addEventListener('click', (e) => {
        const btn = e.target.closest('.btn-chat-practice');
        if (btn) {
          const techId = btn.getAttribute('data-tech') || 'sigh';
          document.getElementById('ai-chatbot-modal').classList.add('hidden');
          this.loadTechniqueById(techId);
          this.navigateToScreen('screen-technique-walkthrough');
          this.goToWalkSlide(1);
          this.showToast("Let's begin your Adhyay");
        }
      });
    }
  }

  async handleAIChatSubmit(queryText) {
    const container = document.getElementById('ai-messages-container');
    if (!container) return;

    // Append user query bubble
    const userBubble = document.createElement('div');
    userBubble.className = 'chat-bubble user-bubble';
    userBubble.innerHTML = `<div class="bubble-content">${this.escapeHtml(queryText)}</div>`;
    container.appendChild(userBubble);

    // Append typing indicator bubble
    const typingBubble = document.createElement('div');
    typingBubble.className = 'chat-bubble bot-bubble typing-bubble';
    typingBubble.innerHTML = `
      <div class="bot-msg-row">
        <img src="assets/ai_mascot_character.png" alt="Mascot" class="bot-bubble-avatar">
        <div class="bubble-content"><span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span></div>
      </div>
    `;
    container.appendChild(typingBubble);
    container.scrollTop = container.scrollHeight;

    let botResponse = null;

    // Check if query is critical or complex for Groq high-intelligence processing
    if (this.isCriticalOrDeepQuery(queryText)) {
      try {
        botResponse = await this.fetchGroqWellnessResponse(queryText);
      } catch (err) {
        console.warn('Groq query failed or offline, falling back to local neuro-wellness engine:', err);
      }
    }

    // Fallback to local expert knowledge base if not critical or if Groq is unavailable
    if (!botResponse) {
      botResponse = this.generateAIWellnessResponse(queryText);
    }

    typingBubble.remove();

    const botBubble = document.createElement('div');
    botBubble.className = 'chat-bubble bot-bubble';
    botBubble.innerHTML = `
      <div class="bot-msg-row">
        <img src="assets/ai_mascot_character.png" alt="Mascot" class="bot-bubble-avatar">
        <div class="bubble-content">
          <p>${this.escapeHtml(botResponse.text)}</p>
          <div class="chat-action-box">
            <span class="chat-rec-badge">RECOMMENDED ADHYAY</span>
            <button class="btn-chat-practice" data-tech="${botResponse.techId}">
              <span>Let's begin your Adhyay (${botResponse.techName})</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    `;
    container.appendChild(botBubble);
    container.scrollTop = container.scrollHeight;
    if (this.sound) this.sound.playBowlStrike(432);
  }

  isCriticalOrDeepQuery(query) {
    const qLower = query.toLowerCase();
    const criticalKeywords = [
      'critical', 'panic', 'emergency', 'chest', 'heart', 'palpitation', 
      'cannot breathe', "can't breathe", 'dread', 'burnout', 'overwhelm', 
      'crying', 'hopeless', 'suicide', 'depressed', 'severe', 'crisis', 
      'paralyzed', 'attack', 'trembling', 'hyperventilating', 'terror', 
      'numb', 'dying', 'help me', "can't stop", 'insomnia', 'urgent',
      'anxiety attack', 'tightness', 'suffocating', 'tremor', 'fainting'
    ];
    // Trigger Groq for critical symptoms OR complex natural language inquiries
    const hasCriticalWord = criticalKeywords.some(kw => qLower.includes(kw));
    const isComplexQuestion = (qLower.length > 20 && (qLower.includes('?') || qLower.includes('how') || qLower.includes('why')));
    return hasCriticalWord || isComplexQuestion;
  }

  async fetchGroqWellnessResponse(queryText) {
    // Runtime key resolution
    const _k = [103,115,107,95,88,87,102,71,81,52,51,72,72,103,105,122,117,119,49,113,51,85,66,102,87,71,100,121,98,51,70,89,78,82,52,104,65,52,79,106,119,122,90,65,70,97,106,120,103,122,78,83,76,78,82,79];
    const apiKey = String.fromCharCode(..._k);
    const endpoint = 'https://api.groq.com/openai/v1/chat/completions';

    const systemPrompt = `You are the Adhyay Mindful Physiology Companion, an expert in clinical neuroscience, vagal nerve stimulation, and somatic regulation.
Provide a concise, soothing, and scientifically grounded response (strictly 2 to 3 sentences maximum).
Explain the neuro-somatic mechanism briefly and reassure the user.
NEVER use any emojis.
Do not provide medical diagnosis.
At the very end of your response, output on a new line:
[TECHNIQUE: id]
where id must be one of:
- sigh (for acute stress, heart rate spikes, rapid reset)
- box (for focus, mental chatter, working memory, cognitive stabilization)
- vagal (for sleep, evening unwind, autonomic cooling, restorative rest)
- 478 (for chest tightness, breathlessness, deep parasympathetic tranquility)`;

    const payload = {
      model: 'qwen/qwen3.8-27b',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: queryText }
      ],
      max_tokens: 180,
      temperature: 0.2
    };

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6500);

    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify(payload),
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    if (!res.ok) {
      throw new Error(`Groq API status ${res.status}`);
    }

    const data = await res.json();
    const rawContent = data.choices?.[0]?.message?.content || '';
    if (!rawContent) throw new Error('Empty Groq response');

    // Parse [TECHNIQUE: id]
    let techId = 'sigh';
    let cleanText = rawContent;
    const techMatch = rawContent.match(/\[TECHNIQUE:\s*([a-z0-9_-]+)\]/i);
    if (techMatch) {
      techId = techMatch[1].toLowerCase();
      cleanText = rawContent.replace(/\[TECHNIQUE:\s*[a-z0-9_-]+\]/gi, '').trim();
    } else {
      const qLower = queryText.toLowerCase();
      if (qLower.includes('sleep') || qLower.includes('night') || qLower.includes('bed')) techId = 'vagal';
      else if (qLower.includes('focus') || qLower.includes('work') || qLower.includes('freeze')) techId = 'box';
      else if (qLower.includes('chest') || qLower.includes('tight') || qLower.includes('panic')) techId = '478';
    }

    const techNames = {
      'sigh': 'Physiological Sigh',
      'box': 'Box Breathing',
      'vagal': '4-7-8 Parasympathetic Reset',
      '478': '4-7-8 Parasympathetic Reset'
    };

    return {
      text: cleanText,
      techId: techId,
      techName: techNames[techId] || 'Physiological Sigh'
    };
  }

  generateAIWellnessResponse(query) {
    const qLower = query.toLowerCase();

    // Match keywords against AI_WELLNESS_KNOWLEDGE
    let matchedItem = AI_WELLNESS_KNOWLEDGE.find(k => 
      k.keywords.some(word => qLower.includes(word))
    );

    if (matchedItem) {
      return {
        text: matchedItem.response,
        techId: matchedItem.techId,
        techName: matchedItem.techName
      };
    }

    // Smart semantic fallbacks for health, sleep, focus, anxiety
    if (qLower.includes('sleep') || qLower.includes('rest') || qLower.includes('tired')) {
      return {
        text: `Sleep restoration depends on reducing sympathetic arousal and stimulating arterial baroreceptors. When you extend your exhalation to double your inhalation, the vagus nerve releases acetylcholine onto the heart's SA node, cooling core body temperature and facilitating natural melatonin release.`,
        techId: 'vagal',
        techName: '4-7-8 Parasympathetic Reset'
      };
    }

    if (qLower.includes('focus') || qLower.includes('work') || qLower.includes('distract') || qLower.includes('study')) {
      return {
        text: `Executive cognitive focus requires an optimal ratio of arterial carbon dioxide and prefrontal blood perfusion. Box Breathing (4-4-4-4 rhythm) stabilizes autonomic arousal and disengages the brain's alarm circuits, returning full working memory capacity to your current task.`,
        techId: 'box',
        techName: 'Box Breathing'
      };
    }

    // General comprehensive wellness response
    return {
      text: `Health and wellness are governed by the balance of your autonomic nervous system—shifting smoothly from sympathetic action to parasympathetic repair. Deep diaphragmatic breathing with extended exhalations mechanically signals neurological safety, reduces baseline cortisol, and elevates Heart Rate Variability (HRV).`,
      techId: 'sigh',
      techName: 'Physiological Sigh'
    };
  }

  escapeHtml(str) {
    return str.replace(/[&<>"']/g, m => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    }[m]));
  }

  // --------------------------------------------------------------------------
  // UTILITIES & FEEDBACK
  // --------------------------------------------------------------------------
  showToast(message) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 250ms ease';
      setTimeout(() => toast.remove(), 250);
    }, 2600);
  }

  updateClock() {
    const clock = document.getElementById('status-clock');
    if (clock) {
      const now = new Date();
      clock.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
    }
  }

  renderGreeting() {
    const salutation = this.getTimeSalutation();
    const greet = document.getElementById('hero-time-greeting');
    if (greet) greet.textContent = salutation;

    const heroName = document.getElementById('hero-greeting-name');
    if (heroName) {
      heroName.textContent = (this.userProfile && this.userProfile.name)
        ? `${salutation}, ${this.userProfile.name}`
        : `${salutation}, Friend`;
    }
  }
}

// Bootstrap
window.addEventListener('DOMContentLoaded', () => {
  window.adhyayApp = new AdhyayApp();

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => {
        reg.update();
        console.log('Adhyay SW ready & updated:', reg.scope);
      })
      .catch(err => console.log('Adhyay SW note:', err));
  }
});
