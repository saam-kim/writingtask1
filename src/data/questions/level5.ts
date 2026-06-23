import type { Question } from '../../types/question';

export const level5Questions: Question[] = [
  {
    id: "L5-001",
    level: 5,
    context: "How did the researcher gather the data for the report?",
    sentenceTemplate: "The researcher gathered data by _____ _____ _____ _____ _____ willing to participate.",
    chunks: ["interviewing", "students", "enrolled", "in classes", "who were", "interview", "classes of", "enroll", "was"],
    answer: ["interviewing", "students", "enrolled", "in classes", "who were"],
    explanation: "The correct sentence is: 'The researcher gathered data by interviewing students enrolled in classes who were willing to participate.'",
    koreanExplanation: "연구원은 수업에 등록되어 있으며 기꺼이 참여하려는 학생들을 인터뷰함으로써 데이터를 수집했습니다. 전치사 'by' 뒤의 동명사('interviewing')와, 명사 'students'를 수식하는 과거분사('enrolled') 및 주격 관계절이 복합적으로 얽힌 고급 구조입니다.",
    grammarPoints: "수단 전치사 by + 동명사, 과거분사의 명사 수식, 관계대명사의 제한적 용법",
    paraphrases: [
      "Data collection involved surveying registered students who volunteered to help.",
      "The analyst sourced research material via interviewing class members eager to take part."
    ]
  },
  {
    id: "L5-002",
    level: 5,
    context: "Why did the department head reject the curriculum proposal?",
    sentenceTemplate: "He argued that the proposal _____ _____ _____ _____ _____ since it was poorly written.",
    chunks: ["lacked", "empirical", "evidence", "supporting", "its claims", "lack", "claim", "of supporting", "since that", "to lack"],
    answer: ["lacked", "empirical", "evidence", "supporting", "its claims"],
    explanation: "The correct sentence is: 'He argued that the proposal lacked empirical evidence supporting its claims.'",
    koreanExplanation: "그는 제안서가 그 주장을 뒷받침하는 실증적 증거가 부족하다고 주장했습니다. 명사 'evidence'를 현재분사구 'supporting its claims'가 뒤에서 수식하는 세련된 문장 구조를 가집니다.",
    grammarPoints: "동사 시제 일치 (lacked), 현재분사의 명사 후치수식",
    paraphrases: [
      "In his view, the syllabus draft failed to provide concrete data backup.",
      "He dismissed the plan on the grounds that its core statements lacked scientific proof."
    ]
  },
  {
    id: "L5-003",
    level: 5,
    context: "Why is the study of biodiversity so crucial?",
    sentenceTemplate: "It helps us understand _____ _____ _____ _____ _____ in turn affects preservation.",
    chunks: ["how", "ecosystems", "respond to", "climate change", "which", "responses", "environmental", "responds", "how to", "in where"],
    answer: ["how", "ecosystems", "respond to", "climate change", "which"],
    explanation: "The correct sentence is: 'It helps us understand how ecosystems respond to climate change, which in turn affects preservation.'",
    koreanExplanation: "그것은 생태계가 기후 변화에 어떻게 반응하는지 이해하도록 도우며, 이는 결국 환경 보존에 영향을 줍니다. 'understand'의 목적어 간접의문문 명사절('how + 주어 + 동사')과 계속적 용법의 관계대명사 'which'의 연결입니다.",
    grammarPoints: "간접의문문 명사절, 계속적 용법의 관계대명사, 구동사 respond to",
    paraphrases: [
      "Studying global warming reactions helps clarify ecosystem shifts, steering conservation policies.",
      "It sheds light on ecosystem adaptation to climate shifts, directly impacting habitat protection."
    ]
  },
  {
    id: "L5-004",
    level: 5,
    context: "What should students do before starting the history thesis?",
    sentenceTemplate: "They are advised to review _____ _____ _____ _____ _____ repeating previous studies.",
    chunks: ["the existing", "literature", "on the topic", "so as to", "avoid", "exist", "topics", "for avoiding", "that", "literary"],
    answer: ["the existing", "literature", "on the topic", "so as to", "avoid"],
    explanation: "The correct sentence is: 'They are advised to review the existing literature on the topic so as to avoid repeating previous studies.'",
    koreanExplanation: "이전 연구를 반복하는 것을 피하기 위해 그 주제에 대한 기존 문헌을 검토하도록 권고받습니다. 현재분사 'existing'이 명사를 수식하고, 목적을 나타내는 표현인 'so as to + 동사원형'을 결합합니다.",
    grammarPoints: "현재분사 형용사, 목적 부사구 (so as to)",
    paraphrases: [
      "Students should inspect previous academic works to prevent duplication of research.",
      "Conducting a thorough review of published papers helps ensure the originality of the dissertation."
    ]
  },
  {
    id: "L5-005",
    level: 5,
    context: "Why does the physics teacher insist on daily lab reports?",
    sentenceTemplate: "Writing reports helps students _____ _____ _____ _____ _____ improving skills.",
    chunks: ["internalize", "complex", "scientific", "concepts", "thereby", "internalizing", "concept", "which", "there", "to internalizing"],
    answer: ["internalize", "complex", "scientific", "concepts", "thereby"],
    explanation: "The correct sentence is: 'Writing reports helps students internalize complex scientific concepts, thereby improving their practical skills.'",
    koreanExplanation: "보고서를 작성하는 것은 학생들이 복잡한 과학적 개념을 내면화하도록 도우며, 그에 따라 실습 역량을 향상시킵니다. 'help + 목적어 + 동사원형(internalize)'과 부사 'thereby'(그로 인해)를 활용한 분사구문 유도 문장입니다.",
    grammarPoints: "help 준사역동사, 부사 thereby",
    paraphrases: [
      "Documenting experiments aids in comprehending difficult physical laws, consequently boosting laboratory mastery.",
      "The task facilitates deeper grasp of academic principles, thus honing analytical talents."
    ]
  },
  {
    id: "L5-006",
    level: 5,
    context: "Did the university committee approve the funding extension?",
    sentenceTemplate: "They rejected it, _____ _____ _____ _____ _____ milestones.",
    chunks: ["pointing out", "that", "the team", "failed to achieve", "its key", "points out", "what", "failing", "achieved", "to achieve"],
    answer: ["pointing out", "that", "the team", "failed to achieve", "its key"],
    explanation: "The correct sentence is: 'They rejected it, pointing out that the team failed to achieve its key milestones.'",
    koreanExplanation: "그들은 팀이 핵심 마일스톤을 달성하지 못했음을 지적하면서 그것을 거부했습니다. 분사구문 'pointing out'과 명사절 'that'절이 길게 결합되어 이유를 묘사합니다.",
    grammarPoints: "분사구문 (pointing out), 명사절 접속사 that, fail to 부정사",
    paraphrases: [
      "The refusal was justified by noting the researchers' inability to hit progress deadlines.",
      "They declined the application, arguing the team fell short of required objectives."
    ]
  },
  {
    id: "L5-007",
    level: 5,
    context: "Why was the student disqualified from the engineering competition?",
    sentenceTemplate: "It was discovered that the design _____ _____ _____ _____ _____.",
    chunks: ["copied", "another", "student's", "patented", "technology", "copying", "patents", "other", "patent", "technological"],
    answer: ["copied", "another", "student's", "patented", "technology"],
    explanation: "The correct sentence is: 'It was discovered that the design copied another student's patented technology.'",
    koreanExplanation: "그 디자인이 다른 학생의 특허 기술을 복제했음이 드러났습니다. 명사절 'that' 안의 동사 과거형 'copied'와 명사구를 이루는 'patented technology'(특허받은 기술) 구조입니다.",
    grammarPoints: "명사절 내의 동사 과거형, 분사 수식",
    paraphrases: [
      "The judges disqualified the project after finding clear evidence of patent theft.",
      "An investigation revealed the prototype integrated proprietary concepts belonging to a competitor."
    ]
  },
  {
    id: "L5-008",
    level: 5,
    context: "What was the main topic of the sociology panel discussion?",
    sentenceTemplate: "The speakers debated _____ _____ _____ _____ economic instability.",
    chunks: ["whether", "rising", "housing costs", "contribute to", "contributing", "that", "contribute", "costs of", "housed", "to contribute"],
    answer: ["whether", "rising", "housing costs", "contribute to"],
    explanation: "The correct sentence is: 'The speakers debated whether rising housing costs contribute to economic instability.'",
    koreanExplanation: "연사들은 치솟는 주거비가 경제적 불안정을 초래하는지 여부에 대해 토론했습니다. 'debate whether'(~인지 여부를 토론하다)와 현재분사 'rising', 그리고 수 일치 복수 동사 'contribute to'를 정렬합니다.",
    grammarPoints: "명사절 접속사 whether, 현재분사의 수식, 주어-동사 수 일치 (costs - contribute)",
    paraphrases: [
      "The panel explored the relationship between escalating rent prices and societal financial distress.",
      "Sociologists discussed whether increasingly expensive urban properties trigger wider recession."
    ]
  },
  {
    id: "L5-009",
    level: 5,
    context: "Why are you taking a statistics course this term?",
    sentenceTemplate: "I need to learn _____ _____ _____ _____ my survey data.",
    chunks: ["how to", "analyze", "the results", "obtained from", "obtaining", "how", "analysis", "from obtained", "for analyzing", "obtain"],
    answer: ["how to", "analyze", "the results", "obtained from"],
    explanation: "The correct sentence is: 'I need to learn how to analyze the results obtained from my survey data.'",
    koreanExplanation: "저는 설문 데이터로부터 얻은 결과를 분석하는 방법을 배워야 합니다. 'how to + 동사원형'과 명사 'the results'를 뒤에서 꾸미는 과거분사구 'obtained from'의 정렬을 묻습니다.",
    grammarPoints: "의문사 + to부정사 구문, 과거분사 후치수식 (obtained from)",
    paraphrases: [
      "My goal is to master statistical modeling techniques to evaluate field research findings.",
      "Enrolling in this class helps me understand mathematical evaluation of questionnaire responses."
    ]
  },
  {
    id: "L5-010",
    level: 5,
    context: "Why did the administration implement the new parking rules?",
    sentenceTemplate: "They aimed to address _____ _____ _____ _____ _____ .",
    chunks: ["growing", "concerns", "regarding", "limited", "parking spots", "grow", "concern", "regard", "limits", "spots of"],
    answer: ["growing", "concerns", "regarding", "limited", "parking spots"],
    explanation: "The correct sentence is: 'They aimed to address growing concerns regarding limited parking spots.'",
    koreanExplanation: "그들은 부족한 주차 공간과 관련해 커지는 우려를 해결하고자 했습니다. 현재분사 'growing', 전치사 'regarding'(~에 관한), 과거분사 'limited'가 차례로 명사를 수식하는 복합 명사구 구조입니다.",
    grammarPoints: "현재분사/과거분사의 전치 수식, 전치사 regarding",
    paraphrases: [
      "The policy was revised to resolve complaints about scarce vehicle spacing on campus.",
      "Advisors sought to mitigate the friction surrounding deficient vehicular parking accommodations."
    ]
  },
  {
    id: "L5-011",
    level: 5,
    context: "How should we construct our arguments for the debate?",
    sentenceTemplate: "We should focus _____ _____ _____ _____ _____ making emotional appeals.",
    chunks: ["on presenting", "solid", "empirical", "facts", "rather than", "presenting of", "present", "fact", "instead", "to present"],
    answer: ["on presenting", "solid", "empirical", "facts", "rather than"],
    explanation: "The correct sentence is: 'We should focus on presenting solid empirical facts rather than making emotional appeals.'",
    koreanExplanation: "우리는 감정적인 호소를 하기보다는 확실하고 실증적인 사실을 제시하는 데 집중해야 합니다. 'focus on + 동명사'와 대비를 나타내는 전치사적 표현 'rather than' 뒤의 동명사 병렬 구조입니다.",
    grammarPoints: "focus on -ing, 병렬 구조 (presenting - making), rather than",
    paraphrases: [
      "Instead of pleading emotionally, rely heavily on showcasing validated data sets.",
      "Prioritizing objective scientific metrics yields stronger debate leverage than emotional rhetoric."
    ]
  },
  {
    id: "L5-012",
    level: 5,
    context: "Did the archaeology department locate the ancient ruins?",
    sentenceTemplate: "The excavation team discovered _____ _____ _____ _____ thousands of years ago.",
    chunks: ["the remains of", "a settlement", "dating", "back to", "remain", "settled", "date", "to dating", "which dating", "of remain"],
    answer: ["the remains of", "a settlement", "dating", "back to"],
    explanation: "The correct sentence is: 'The excavation team discovered the remains of a settlement dating back to thousands of years ago.'",
    koreanExplanation: "발굴팀은 수천 년 전으로 거슬러 올라가는 정착지의 유적을 발견했습니다. 명사구 'the remains of a settlement'와 이를 수식하는 현재분사구 'dating back to'의 자연스러운 결합을 묻습니다.",
    grammarPoints: "명사 remains의 쓰임, 현재분사구의 후치수식 (dating back to)",
    paraphrases: [
      "Researchers uncovered ancient remnants of an old village from millennia past.",
      "The dig successfully unearthed structural basements belonging to a prehistoric community."
    ]
  },
  {
    id: "L5-013",
    level: 5,
    context: "Why is the geology department buying new equipment?",
    sentenceTemplate: "It is designed to measure _____ _____ _____ _____ seismological activity.",
    chunks: ["the slightest", "vibrations", "caused by", "recent", "slight", "vibrate", "causing", "by caused", "recent of", "vibrating"],
    answer: ["the slightest", "vibrations", "caused by", "recent"],
    explanation: "The correct sentence is: 'It is designed to measure the slightest vibrations caused by recent seismological activity.'",
    koreanExplanation: "그것은 최근 지진 활동에 의해 발생하는 가장 미세한 진동을 측정하도록 설계되었습니다. 최상급 'the slightest'와 명사를 뒤에서 꾸미는 'caused by' 수식 구조입니다.",
    grammarPoints: "형용사 최상급, 과거분사 후치수식 (caused by)",
    paraphrases: [
      "The sensor registers minute tremors triggered by nearby volcanic or seismic motion.",
      "Engineers built this device to track minor movements following recent tectonic shifts."
    ]
  },
  {
    id: "L5-014",
    level: 5,
    context: "Why did the student complain to the chemistry professor?",
    sentenceTemplate: "He claimed that the grade _____ _____ _____ _____ the class.",
    chunks: ["did not reflect", "the amount of", "effort", "he put into", "reflect", "effort of", "putting", "in which", "does not", "amount"],
    answer: ["did not reflect", "the amount of", "effort", "he put into"],
    explanation: "The correct sentence is: 'He claimed that the grade did not reflect the amount of effort he put into the class.'",
    koreanExplanation: "그는 점수가 자신이 수업에 쏟아부은 노력의 양을 반영하지 않는다고 주장했습니다. 타동사 'reflect'의 목적어 'the amount of effort'를 목적격 관계대명사가 생략된 관계절 'he put into'가 수식하는 구조입니다.",
    grammarPoints: "과거 시제 부정문, 목적격 관계대명사 생략 구조, 구동사 put A into B",
    paraphrases: [
      "He argued that his final evaluation fell short of acknowledging his diligent preparation.",
      "The student felt his mark was unfair given how hard he studied for the course."
    ]
  },
  {
    id: "L5-015",
    level: 5,
    context: "What was the dean's response to the student petition?",
    sentenceTemplate: "She promised to review _____ _____ _____ _____ _____ a compromise.",
    chunks: ["the requests", "submitted by", "students", "with the goal", "of finding", "request", "submitting", "student", "to find", "by submitting"],
    answer: ["the requests", "submitted by", "students", "with the goal", "of finding"],
    explanation: "The correct sentence is: 'She promised to review the requests submitted by students with the goal of finding a compromise.'",
    koreanExplanation: "그녀는 타협점을 찾겠다는 목표를 가지고 학생들이 제출한 요청사항을 검토할 것을 약속했습니다. 'requests'를 수식하는 'submitted by' 과거분사구와 'with the goal of -ing'(~라는 목표로)의 결합입니다.",
    grammarPoints: "과거분사 수식, 전치사 of + 동명사",
    paraphrases: [
      "She agreed to examine student appeals, aiming to reach a mutual agreement.",
      "In hopes of resolving the dispute, the office committed to auditing student demands."
    ]
  },
  {
    id: "L5-016",
    level: 5,
    context: "Why are some professors reluctant to adopt online textbooks?",
    sentenceTemplate: "They argue that online materials _____ _____ _____ _____ that traditional textbooks do.",
    chunks: ["fail to provide", "the same", "level of", "depth", "failing", "level", "depth of", "same as", "provide to", "traditionally"],
    answer: ["fail to provide", "the same", "level of", "depth"],
    explanation: "The correct sentence is: 'They argue that online materials fail to provide the same level of depth that traditional textbooks do.'",
    koreanExplanation: "그들은 온라인 자료들이 전통 서적들이 주는 것과 동일한 수준의 깊이를 제공하지 못한다고 주장합니다. 복수 주어(materials)에 맞는 복수 동사구 'fail to provide'와 'the same A of B' 형태의 어순 구성입니다.",
    grammarPoints: "주어-동사 수 일치, fail to 부정사, 비교 원급 표현 (the same)",
    paraphrases: [
      "Some teachers believe digital curricula lack the academic rigor found in printed editions.",
      "In their opinion, web publications fall short of matching the detailed analysis of physical library books."
    ]
  },
  {
    id: "L5-017",
    level: 5,
    context: "Why did you choose this complex research topic?",
    sentenceTemplate: "I wanted to investigate _____ _____ _____ _____ _____ has puzzled experts.",
    chunks: ["the underlying", "causes of", "economic", "recession", "which", "cause", "economy", "recess", "whose", "of causes"],
    answer: ["the underlying", "causes of", "economic", "recession", "which"],
    explanation: "The correct sentence is: 'I wanted to investigate the underlying causes of economic recession, which has puzzled experts.'",
    koreanExplanation: "저는 경제 침체의 근본적인 원인을 조사하고 싶었는데, 이는 전문가들을 당황하게 만들어 왔습니다. 현재분사가 형용사화된 'underlying'(근본적인)과 계속적 관계대명사 'which'를 연결하는 고급 구문입니다.",
    grammarPoints: "현재분사의 형용사적 용법, 계속적 관계대명사",
    paraphrases: [
      "I was interested in researching the core factors behind market downturns, a topic that remains highly debated.",
      "My study targets the root catalysts of recession, which continue to perplex economists globally."
    ]
  },
  {
    id: "L5-018",
    level: 5,
    context: "What is the purpose of the university budget hearing?",
    sentenceTemplate: "It is held to determine _____ _____ _____ _____ _____ will be distributed.",
    chunks: ["how", "the newly", "allocated", "academic", "funds", "how to", "allocate", "academic of", "funding", "was allocated"],
    answer: ["how", "the newly", "allocated", "academic", "funds"],
    explanation: "The correct sentence is: 'It is held to determine how the newly allocated academic funds will be distributed.'",
    koreanExplanation: "새롭게 할당된 학술 기금이 어떻게 분배될지 결정하기 위해 개최됩니다. 의문사 'how' 뒤에 '부사 + 과거분사 + 명사' 어순으로 이루어진 주어부('the newly allocated academic funds')가 위치하는 세련된 간접의문문입니다.",
    grammarPoints: "간접의문문 어순, 부사+분사+형용사+명사 결합구조",
    paraphrases: [
      "The assembly outlines the distribution scheme for next year's institutional grants.",
      "Administrators meet to decide the allotment of newly approved academic budgets."
    ]
  },
  {
    id: "L5-019",
    level: 5,
    context: "Why do student athletes struggles with their grades?",
    sentenceTemplate: "Balancing training schedules _____ _____ _____ _____ requires outstanding time management.",
    chunks: ["with rigorous", "academic", "coursework", "daily", "rigor", "academy", "rigorous of", "courses", "to rigorous", "balancing"],
    answer: ["with rigorous", "academic", "coursework", "daily"],
    explanation: "The correct sentence is: 'Balancing training schedules with rigorous academic coursework daily requires outstanding time management.'",
    koreanExplanation: "엄격한 학업 과정과 훈련 일정을 매일 균형 잡는 것은 뛰어난 시간 관리를 요구합니다. 'balance A with B' 구문이 동명사 주어부로 사용되어 단수 동사 'requires'와 이어집니다.",
    grammarPoints: "balance A with B 구문, 동명사 주어와 단수 동사 일치 (Balancing - requires)",
    paraphrases: [
      "Juggling intense sports routines alongside heavy homework requirements demands stellar organizational skills.",
      "To succeed in sports and grades concurrently, players must coordinate schedules meticulously."
    ]
  },
  {
    id: "L5-020",
    level: 5,
    context: "Why is the political science department canceling the seminar?",
    sentenceTemplate: "They announced the cancellation _____ _____ _____ _____ guest speaker who was scheduled.",
    chunks: ["due to", "the sudden", "illness of", "the", "due", "ill", "suddenly", "because", "owing", "illness"],
    answer: ["due to", "the sudden", "illness of", "the"],
    explanation: "The correct sentence is: 'They announced the cancellation due to the sudden illness of the guest speaker who was scheduled.'",
    koreanExplanation: "초청 연사의 갑작스러운 질병 때문에 취소를 발표했습니다. 명사구 앞이므로 이유 전치사 'due to'를 쓰고, 명사를 꾸미는 형용사 'sudden'과 소유격을 나타내는 'illness of'를 결합합니다.",
    grammarPoints: "이유 전치사 due to, 명사구 수식 어순",
    paraphrases: [
      "The presentation was postponed after the main lecturer unexpectedly fell sick.",
      "Owing to the speaker's sudden medical emergency, the lecture has been called off."
    ]
  },
  {
    id: "L5-021",
    level: 5,
    context: "What was the consequence of the lab accident?",
    sentenceTemplate: "The Dean declared that _____ _____ _____ _____ _____ safety protocols.",
    chunks: ["under no circumstances", "are students", "allowed to", "conduct experiments", "without", "circumstance", "is student", "conducting", "under no", "allow to"],
    answer: ["under no circumstances", "are students", "allowed to", "conduct experiments", "without"],
    explanation: "The correct sentence is: 'The Dean declared that under no circumstances are students allowed to conduct experiments without safety protocols.'",
    koreanExplanation: "학장은 어떤 상황에서도 학생들이 안전 프로토콜 없이 실험을 수행하는 것은 허용되지 않는다고 선언했습니다. 부정어구 'under no circumstances'가 절의 앞으로 나오며 주어와 조동사의 도치가 일어난 구조(are students allowed...)입니다.",
    grammarPoints: "부정어구 도치 (under no circumstances + are + 주어), be allowed to 부정사",
    paraphrases: [
      "The Dean stated that students are strictly prohibited from conducting laboratory tests unless they adhere to safety rules.",
      "Under no conditions may students perform lab procedures without complying with safety codes, according to the Dean."
    ]
  },
  {
    id: "L5-022",
    level: 5,
    context: "Why did the research team publish their findings early?",
    sentenceTemplate: "Having analyzed the data _____ _____ _____ _____ _____ shifting.",
    chunks: ["collected over", "three years", "the researchers", "concluded that", "the climate was", "collecting", "years of", "concluding", "was climate", "three year"],
    answer: ["collected over", "three years", "the researchers", "concluded that", "the climate was"],
    explanation: "The correct sentence is: 'Having analyzed the data collected over three years, the researchers concluded that the climate was shifting.'",
    koreanExplanation: "3년에 걸쳐 수집된 데이터를 분석한 후, 연구원들은 기후가 변화하고 있다는 결론을 내렸습니다. 완료분사구문('Having analyzed...')과 명사를 꾸미는 과거분사('collected'), 그리고 명사절 접속사 'that'이 이끄는 절이 결합된 형태입니다.",
    grammarPoints: "완료분사구문 (Having + p.p.), 과거분사 후치수식, 명사절 접속사 that",
    paraphrases: [
      "After studying the datasets compiled over a three-year period, the group determined that the climate was changing.",
      "Once they had analyzed the three years of collected records, the team of scientists established that the weather was shifting."
    ]
  },
  {
    id: "L5-023",
    level: 5,
    context: "How did they react to the proposal to change the grading system?",
    sentenceTemplate: "The professor suggested _____ _____ _____ _____ _____ adapt.",
    chunks: ["that the university", "establish a", "program aimed", "at helping", "international students", "establishing", "to establish", "aiming to", "student", "help"],
    answer: ["that the university", "establish a", "program aimed", "at helping", "international students"],
    explanation: "The correct sentence is: 'The professor suggested that the university establish a program aimed at helping international students adapt.'",
    koreanExplanation: "교수님은 대학이 유학생들의 적응을 돕기 위해 고안된 프로그램을 신설할 것을 제안했습니다. 제안 동사 'suggest' 뒤의 명사절 'that'절에서는 조동사 'should'가 생략되어 동사원형 'establish'를 쓰며, 과거분사구 'aimed at'과 'help + 목적어 + 동사원형(adapt)'이 복합적으로 얽혀 있습니다.",
    grammarPoints: "suggest + that 주어 + (should) 동사원형, 과거분사 aimed at + 동명사, help + O + v",
    paraphrases: [
      "The instructor recommended starting an orientation course with the goal of easing the transition for foreign scholars.",
      "It was suggested by the faculty head that the school launch a support project to assist overseas pupils with settling in."
    ]
  },
  {
    id: "L5-024",
    level: 5,
    context: "What was the significance of the botanical discovery?",
    sentenceTemplate: "Not only did _____ _____ _____ _____ _____ evolutionary theories.",
    chunks: ["the study", "reveal new", "behavior in", "primates but", "it also challenged", "revealing", "primate", "challenged of", "did study", "also challenge"],
    answer: ["the study", "reveal new", "behavior in", "primates but", "it also challenged"],
    explanation: "The correct sentence is: 'Not only did the study reveal new behavior in primates but it also challenged evolutionary theories.'",
    koreanExplanation: "이 연구는 영장류의 새로운 행동을 밝혔을 뿐만 아니라, 기존의 진화 이론에도 도전장을 내밀었습니다. 상관접속사 'Not only A but also B'가 문두에 올 때 일어나는 조동사 도치구문(did the study reveal...)입니다.",
    grammarPoints: "부정 상관접속사 도치 (Not only + did + 주어 + 동사원형), but also 구조",
    paraphrases: [
      "Besides showing novel primate actions, this research called historical evolutionary logic into question.",
      "The project not only uncovered unfamiliar traits in apes, but it also questioned traditional ideas on evolution."
    ]
  },
  {
    id: "L5-025",
    level: 5,
    context: "When is a student allowed to take the advanced physics seminar?",
    sentenceTemplate: "Only after completing _____ _____ _____ _____ _____ register.",
    chunks: ["the prerequisite", "courses is", "a student", "permitted to", "officially", "prerequisites", "student is", "permitting", "course", "official"],
    answer: ["the prerequisite", "courses is", "a student", "permitted to", "officially"],
    explanation: "The correct sentence is: 'Only after completing the prerequisite courses is a student permitted to officially register.'",
    koreanExplanation: "선이수 과목들을 이수한 후에야 비로소 학생들은 공식적으로 등록할 수 있는 허가를 받습니다. 'Only after' 부사절이 문두에 위치하여 주어와 be동사의 도치(is a student permitted...)가 발생한 고급 구조입니다.",
    grammarPoints: "Only after 도치 (Only after + is + 주어 + p.p.), be permitted to 부정사",
    paraphrases: [
      "Registration for the class is locked until you have successfully passed the preparatory modules.",
      "Students can sign up officially only when they have finished the required introductory courses."
    ]
  },
  {
    id: "L5-026",
    level: 5,
    context: "Is managing the department budget a simple task?",
    sentenceTemplate: "Far from being _____ _____ _____ _____ _____ strategic planning.",
    chunks: ["a simple", "administrative task", "managing the", "department budget", "requires", "simply", "administration", "require to", "to require", "budgeted"],
    answer: ["a simple", "administrative task", "managing the", "department budget", "requires"],
    explanation: "The correct sentence is: 'Far from being a simple administrative task, managing the department budget requires strategic planning.'",
    koreanExplanation: "단순한 행정 업무이기는커녕, 학과 예산을 관리하는 것은 전략적 계획을 필요로 합니다. 전치사구 'Far from -ing'와 동명사 주어부('managing the department budget')가 단수 동사 'requires'를 취하는 문장 구조입니다.",
    grammarPoints: "Far from + 동명사, 동명사 주어와 단수 동사 일치",
    paraphrases: [
      "Instead of being a minor clerical job, organizing the department's finances demands long-term strategy.",
      "Managing departmental funds is not a basic office duty; rather, it involves careful policy coordination."
    ]
  },
  {
    id: "L5-027",
    level: 5,
    context: "What is the committee's role in the new project?",
    sentenceTemplate: "The committee was _____ _____ _____ _____ _____ long-term goals.",
    chunks: ["tasked with", "evaluating the", "proposals while", "keeping in", "mind the", "tasking", "evaluate", "to evaluate", "kept", "minds"],
    answer: ["tasked with", "evaluating the", "proposals while", "keeping in", "mind the"],
    explanation: "The correct sentence is: 'The committee was tasked with evaluating the proposals while keeping in mind the long-term goals.'",
    koreanExplanation: "위원회는 장기적인 목표를 염두에 두면서 제안서들을 평가하는 임무를 맡았습니다. 'be tasked with + 동명사' 구문과 분사구문 'keeping in mind'가 결합되어 긴 수식 구조를 가집니다.",
    grammarPoints: "be tasked with + 동명사, 분사구문 (keeping in mind)",
    paraphrases: [
      "The board was responsible for assessing the bids, making sure to remember their core vision.",
      "They had the job of reviewing incoming ideas while staying aligned with the school's future targets."
    ]
  },
  {
    id: "L5-028",
    level: 5,
    context: "How would the student body respond to a tuition hike?",
    sentenceTemplate: "Were the university _____ _____ _____ _____ _____ the student body.",
    chunks: ["to increase", "tuition again", "it would", "face massive", "protests from", "increasing", "will face", "protested", "to increasing", "tuitions"],
    answer: ["to increase", "tuition again", "it would", "face massive", "protests from"],
    explanation: "The correct sentence is: 'Were the university to increase tuition again, it would face massive protests from the student body.'",
    koreanExplanation: "만약 대학이 등록금을 다시 인상한다면, 학생들로부터 거대한 항의에 직면할 것입니다. 가정법 미래(If the university were to...)에서 접속사 If가 생략되며 주어와 동사가 도치된 'Were the university to...' 구조입니다.",
    grammarPoints: "가정법 미래 도치 (Were + 주어 + to 부정사), 조동사 과거형 would",
    paraphrases: [
      "Should the school choose to raise fees once more, the undergraduates will demonstrate heavily.",
      "If tuition costs went up again, the administration would deal with major student demonstrations."
    ]
  },
  {
    id: "L5-029",
    level: 5,
    context: "Why did the biology class run so late?",
    sentenceTemplate: "The professor continued _____ _____ _____ _____ _____ had left.",
    chunks: ["explaining the", "cell division", "process even", "after most", "students", "explain", "cells", "processing", "student", "have left"],
    answer: ["explaining the", "cell division", "process even", "after most", "students"],
    explanation: "The correct sentence is: 'The professor continued explaining the cell division process even after most students had left.'",
    koreanExplanation: "교수님은 대부분의 학생들이 떠난 후에도 세포 분열 과정을 계속해서 설명했습니다. 'continue + 동명사(-ing)' 및 양보/시간의 부사절 'even after'가 이끄는 절의 주어 명사구 결합입니다.",
    grammarPoints: "continue + 동명사, 양보의 접속사 even after",
    paraphrases: [
      "Even when almost all class members had walked out, the lecture on cell structures kept going.",
      "The instructor went on explaining cell reproduction despite the classroom being nearly empty."
    ]
  },
  {
    id: "L5-030",
    level: 5,
    context: "Why are you focusing on this specific database error?",
    sentenceTemplate: "The technician wanted to determine _____ _____ _____ _____ _____ corrupted.",
    chunks: ["the degree to", "which the", "stored academic", "records had", "been", "records", "what", "which of", "were", "to what"],
    answer: ["the degree to", "which the", "stored academic", "records had", "been"],
    explanation: "The correct sentence is: 'The technician wanted to determine the degree to which the stored academic records had been corrupted.'",
    koreanExplanation: "기술자는 보관된 학업 기록이 어느 정도나 손상되었는지 확인하고자 했습니다. 'the degree to which'(~하는 정도)라는 관계사구와 전치사 + 관계대명사가 이끄는 절 내에 과거완료 수동태('had been corrupted')가 결합된 최상급 구문입니다.",
    grammarPoints: "전치사 + 관계대명사 (to which), 과거완료 수동태 (had been p.p.)",
    paraphrases: [
      "The specialist aimed to evaluate how badly the student database was altered.",
      "They checked the server to define the extent of the damage done to the archived files."
    ]
  },
  {
    id: "L5-031",
    level: 5,
    context: "What was the result of the new software deployment?",
    sentenceTemplate: "The department integrated _____ _____ _____ _____ _____ sorting.",
    chunks: ["the updated", "database", "system, thereby", "reducing time", "spent on", "integrate", "thereby to", "spent", "sort", "reducing of"],
    answer: ["the updated", "database", "system, thereby", "reducing time", "spent on"],
    explanation: "The correct sentence is: 'The department integrated the updated database system, thereby reducing time spent on sorting.'",
    koreanExplanation: "학과는 업데이트된 데이터베이스 시스템을 통합했고, 그 결과 분류 작업에 소요되는 시간을 단축했습니다. 부사 'thereby'와 결합된 분사구문('thereby reducing')과 명사를 뒤에서 꾸미는 과거분사('spent on')의 결합입니다.",
    grammarPoints: "결과의 분사구문 (thereby -ing), 과거분사의 명사 후치수식, 전치사 on + 동명사",
    paraphrases: [
      "By adopting the new software, they successfully lowered the hours needed for organizing data.",
      "The school installed a modern information tool, thus optimizing the file classification speed."
    ]
  },
  {
    id: "L5-032",
    level: 5,
    context: "How did they prevent plagiarized essays?",
    sentenceTemplate: "They implemented a system _____ _____ _____ _____ _____ check details.",
    chunks: ["designed to", "compare submitted", "essays with", "existing publications", "to quickly", "designing", "comparing", "exist", "publish", "quick to"],
    answer: ["designed to", "compare submitted", "essays with", "existing publications", "to quickly"],
    explanation: "The correct sentence is: 'They implemented a system designed to compare submitted essays with existing publications to quickly check details.'",
    koreanExplanation: "그들은 기존 출판물과 제출된 에세이를 비교하여 세부 사항을 신속하게 검사하도록 설계된 시스템을 도입했습니다. 과거분사구 'designed to'와 'compare A with B', 그리고 to부정사 사이에 부사를 넣는 분리부정사('to quickly check') 구조입니다.",
    grammarPoints: "과거분사 수식, compare A with B, 분리부정사 (to + 부사 + 동사원형)",
    paraphrases: [
      "They set up software that matches student drafts against printed books to spot theft fast.",
      "A platform was launched to cross-check new submissions with internet databases for rapid auditing."
    ]
  },
  {
    id: "L5-033",
    level: 5,
    context: "Why did you choose this specific thesis topic?",
    sentenceTemplate: "I aimed to explore _____ _____ _____ _____ _____ urban planning.",
    chunks: ["the underlying", "social factors", "influencing the", "development of", "modern", "factor", "influence", "developer", "underlie", "of modern"],
    answer: ["the underlying", "social factors", "influencing the", "development of", "modern"],
    explanation: "The correct sentence is: 'I aimed to explore the underlying social factors influencing the development of modern urban planning.'",
    koreanExplanation: "저는 현대 도시 계획의 발전에 영향을 미치는 근본적인 사회적 요인들을 탐구하고자 했습니다. 형용사로 굳어진 현재분사 'underlying'과 명사를 수식하는 현재분사구 'influencing the...', 그리고 'development of' 명사구의 결합입니다.",
    grammarPoints: "현재분사의 명사 수식, 현재분사구 후치수식, 전치사 of + 명사",
    paraphrases: [
      "I wanted to examine the core cultural elements affecting how modern cities are designed.",
      "My project researches the basic societal reasons that guide modern architectural layouts."
    ]
  },
  {
    id: "L5-034",
    level: 5,
    context: "What did the faculty say about the new policy?",
    sentenceTemplate: "Many teachers argued _____ _____ _____ _____ _____ negative feedback.",
    chunks: ["that modifying", "the curriculum", "without consulting", "them would", "generate", "modify", "without to", "generated", "consulted", "will generate"],
    answer: ["that modifying", "the curriculum", "without consulting", "them would", "generate"],
    explanation: "The correct sentence is: 'Many teachers argued that modifying the curriculum without consulting them would generate negative feedback.'",
    koreanExplanation: "많은 교사들은 자신들과 상의 없이 교육과정을 수정하는 것은 부정적인 피드백을 유발할 것이라고 주장했습니다. 명사절 'that'절 안에 동명사 주어 'modifying the curriculum'과 'without + 동명사' 구문이 결합된 고급 주어부 구조입니다.",
    grammarPoints: "명사절 접속사 that, 동명사 주어, 전치사 without + 동명사, 조동사 would + 동사원형",
    paraphrases: [
      "Several instructors protested that changing the courses without their input would cause backlash.",
      "The consensus among teachers was that rewriting syllabus terms without discussion would trigger complaints."
    ]
  },
  {
    id: "L5-035",
    level: 5,
    context: "Why is the archaeology lab closed?",
    sentenceTemplate: "They are classifying _____ _____ _____ _____ _____ historical value.",
    chunks: ["artifacts recovered", "from the", "ancient tomb", "which have", "immense", "recovering", "artifact", "who have", "tomb of", "immensely"],
    answer: ["artifacts recovered", "from the", "ancient tomb", "which have", "immense"],
    explanation: "The correct sentence is: 'They are classifying artifacts recovered from the ancient tomb which have immense historical value.'",
    koreanExplanation: "그들은 엄청난 역사적 가치를 지닌 고대 무덤에서 발굴된 유물들을 분류하고 있습니다. 과거분사 'recovered from'과 주격 관계대명사 'which'가 지닌 제한적 용법의 수식 구조입니다.",
    grammarPoints: "과거분사구 후치수식, 관계대명사 which 제한적 수식, 형용사 수식",
    paraphrases: [
      "Staff are sorting out ancient relics dug up from the ruins that possess high cultural importance.",
      "They are sorting tomb items that hold significant historical worth."
    ]
  },
  {
    id: "L5-036",
    level: 5,
    context: "Why did the research project take so long?",
    sentenceTemplate: "The team had to resolve _____ _____ _____ _____ _____ the simulation.",
    chunks: ["unforeseen technical", "difficulties arising", "from the", "complex design", "of", "difficulty", "arose", "complexity", "designing", "for"],
    answer: ["unforeseen technical", "difficulties arising", "from the", "complex design", "of"],
    explanation: "The correct sentence is: 'The team had to resolve unforeseen technical difficulties arising from the complex design of the simulation.'",
    koreanExplanation: "연구팀은 시뮬레이션의 복잡한 설계로 인해 발생하는 예상치 못한 기술적 어려움을 해결해야 했습니다. 명사를 수식하는 형용사들과 'arising from'(~에서 기인하는) 현재분사구의 고급 수식 구조입니다.",
    grammarPoints: "형용사 병렬 수식, 현재분사구 후치수식 (arising from), 전치사 of",
    paraphrases: [
      "Unanticipated coding errors originating from the complex model took days to fix.",
      "The scientists spent time resolving sudden computer bugs caused by a highly detailed simulation setup."
    ]
  },
  {
    id: "L5-037",
    level: 5,
    context: "What was the main criticism of the paper?",
    sentenceTemplate: "The reviewer remarked _____ _____ _____ _____ _____ its conclusions.",
    chunks: ["that the", "author failed", "to address", "alternative theories", "weakening", "author's", "failing to", "addressing", "weakened", "alternatively"],
    answer: ["that the", "author failed", "to address", "alternative theories", "weakening"],
    explanation: "The correct sentence is: 'The reviewer remarked that the author failed to address alternative theories weakening its conclusions.'",
    koreanExplanation: "심사위원은 저자가 결론을 약화시키는 대안적 이론들을 다루지 못했다고 지적했습니다. 명사절 접속사 'that', 'fail to + 동사원형', 그리고 명사를 뒤에서 수식하는 현재분사 'weakening'의 복합 배열입니다.",
    grammarPoints: "명사절 접속사 that, fail to 부정사, 현재분사 후치수식",
    paraphrases: [
      "The editor pointed out that the researcher overlooked other viewpoints that could undermine their thesis.",
      "It was noted that the paper did not analyze rival hypotheses, which weakens the final findings."
    ]
  },
  {
    id: "L5-038",
    level: 5,
    context: "Did the study prove the initial hypothesis?",
    sentenceTemplate: "The experiment yielded _____ _____ _____ _____ _____ was expected.",
    chunks: ["results contrary", "to what", "the researchers", "had initially", "hypothesized", "result", "to that", "researcher", "initially", "had hypothesized which"],
    answer: ["results contrary", "to what", "the researchers", "had initially", "hypothesized"],
    explanation: "The correct sentence is: 'The experiment yielded results contrary to what the researchers had initially hypothesized.'",
    koreanExplanation: "그 실험은 연구원들이 처음에 가설로 세웠던 것과 완전히 상반되는 결과를 낳았습니다. 'results contrary to' (~와 상반되는 결과) 형용사구 수식과 관계대명사 'what' 명사절 내의 과거완료 시제('had initially hypothesized') 결합입니다.",
    grammarPoints: "형용사구 후치수식, 관계대명사 what 명사절, 과거완료 시제",
    paraphrases: [
      "The trial produced outcomes opposite to the initial assumptions made by the scientists.",
      "They observed trends that contradicted what was originally projected in the plan."
    ]
  },
  {
    id: "L5-039",
    level: 5,
    context: "Why was the student council president replaced?",
    sentenceTemplate: "He was removed _____ _____ _____ _____ _____ department funds.",
    chunks: ["following allegations", "of his", "involvement in", "mismanaging the", "student", "follow", "alleged", "involved in", "mismanage", "funds of"],
    answer: ["following allegations", "of his", "involvement in", "mismanaging the", "student"],
    explanation: "The correct sentence is: 'He was removed following allegations of his involvement in mismanaging the student department funds.'",
    koreanExplanation: "그는 학생회비를 오용한 데 연루되었다는 의혹이 제기된 후 해임되었습니다. 전치사적 역할의 현재분사 'following'과 추상명사구 'allegations of...', 'involvement in + 동명사'가 줄지어 연결되는 고급 명사구입니다.",
    grammarPoints: "전치사적 분사 following, 추상명사구 결합, involvement in + 동명사",
    paraphrases: [
      "The president lost his seat after claims arose that he mishandled administration budgets.",
      "His discharge followed accusations regarding the abuse of campus union money."
    ]
  },
  {
    id: "L5-040",
    level: 5,
    context: "Why did the physics seminar get cancelled?",
    sentenceTemplate: "The speaker canceled _____ _____ _____ _____ _____ flight options.",
    chunks: ["on the", "grounds of", "illness although", "some suspected", "limited", "ground", "because", "suspecting", "limit", "although to"],
    answer: ["on the", "grounds of", "illness although", "some suspected", "limited"],
    explanation: "The correct sentence is: 'The speaker canceled on the grounds of illness although some suspected limited flight options.'",
    koreanExplanation: "일부 사람들은 제한적인 비행편 옵션을 의심했지만, 그 연사는 질병을 이유로 취소했습니다. '~라는 이유로'를 뜻하는 'on the grounds of'와 양보 접속사 'although' 뒤에 형용사 수식 구조를 묻습니다.",
    grammarPoints: "이유 표현 on the grounds of, 양보 접속사 although, 형용사 수식",
    paraphrases: [
      "The scientist called off the speech due to poor health, but many believed transport trouble was the real cause.",
      "Although flight cancellations were suspected by students, the official reason given was health issues."
    ]
  },
  {
    id: "L5-041",
    level: 5,
    context: "How did the department deal with the low enrollment?",
    sentenceTemplate: "They proposed restructuring _____ _____ _____ _____ _____ funding cuts.",
    chunks: ["the department", "with the", "intent of", "minimizing the", "impact of", "intending", "minimize", "departmental", "minimization", "impacted"],
    answer: ["the department", "with the", "intent of", "minimizing the", "impact of"],
    explanation: "The correct sentence is: 'They proposed restructuring the department with the intent of minimizing the impact of funding cuts.'",
    koreanExplanation: "그들은 예산 감축의 영향을 최소화하려는 의도를 가지고 학과를 재구조화할 것을 제안했습니다. 'restructure'의 목적어와 'with the intent of + 동명사(-ing)' 및 'impact of' 전치사구의 결합입니다.",
    grammarPoints: "동사-목적어 관계, 전치사구 with the intent of + 동명사, 전치사 of + 명사",
    paraphrases: [
      "The faculty planned a reorganization aiming to lessen the blow of financial reductions.",
      "With a view to reducing the side effects of budget loss, they recommended academic reforms."
    ]
  },
  {
    id: "L5-042",
    level: 5,
    context: "Why is the university introducing a strict attendance policy?",
    sentenceTemplate: "They aim to ensure _____ _____ _____ _____ _____ learning outcomes.",
    chunks: ["that students", "actively engage", "in lectures", "thereby achieving", "better", "student", "engage to", "achieving of", "thereby to", "good"],
    answer: ["that students", "actively engage", "in lectures", "thereby achieving", "better"],
    explanation: "The correct sentence is: 'They aim to ensure that students actively engage in lectures, thereby achieving better learning outcomes.'",
    koreanExplanation: "그들은 학생들이 강의에 적극적으로 참여하도록 보장하고, 그 결과 더 나은 학습 성과를 달성하도록 하는 것을 목표로 합니다. 명사절 'that'과 부사 'actively', 그리고 결과를 나타내는 분사구문 'thereby achieving'의 매칭입니다.",
    grammarPoints: "명사절 접속사 that, 부사 수식, 결과 분사구문 (thereby -ing)",
    paraphrases: [
      "They want to guarantee active class participation, which will consequently boost grades.",
      "The policy is intended to keep students focused during seminars, leading to improved academic metrics."
    ]
  },
  {
    id: "L5-043",
    level: 5,
    context: "Why was the proposal for a new athletic stadium rejected?",
    sentenceTemplate: "The board voted _____ _____ _____ _____ _____ massive debt.",
    chunks: ["against it", "fearing that", "the school", "would incur", "a", "fear", "incurring", "will incur", "feared", "debts"],
    answer: ["against it", "fearing that", "the school", "would incur", "a"],
    explanation: "The correct sentence is: 'The board voted against it fearing that the school would incur a massive debt.'",
    koreanExplanation: "이사회는 학교가 엄청난 부채를 짊어지게 될 것을 우려하여 반대표를 던졌습니다. 'vote against it'과 이유/상황의 분사구문 'fearing that'절 내부의 미래 가정 조동사 'would'를 연결하는 고난도 구조입니다.",
    grammarPoints: "vote against 표현, 분사구문 (fearing that), 조동사 과거형 would",
    paraphrases: [
      "Trustees rejected the project, worried that the campus might face heavy financial liabilities.",
      "Fearing huge deficit, the committee chose to deny the athletic building plan."
    ]
  },
  {
    id: "L5-044",
    level: 5,
    context: "What did the research on neural networks show?",
    sentenceTemplate: "The paper demonstrated _____ _____ _____ _____ _____ human recognition.",
    chunks: ["how algorithms", "can identify", "complex patterns", "surpassing the", "speed of", "surpassed", "algorithm", "surpassing to", "identification", "speedy"],
    answer: ["how algorithms", "can identify", "complex patterns", "surpassing the", "speed of"],
    explanation: "The correct sentence is: 'The paper demonstrated how algorithms can identify complex patterns surpassing the speed of human recognition.'",
    koreanExplanation: "그 논문은 알고리즘이 인간의 인지 속도를 능가하면서 복잡한 패턴을 어떻게 식별할 수 있는지 입증했습니다. 'demonstrate'의 목적어 간접의문문 명사절과 이를 부연설명하는 분사구문 'surpassing'의 결합입니다.",
    grammarPoints: "간접의문문 (how + S + V), 분사구문 (surpassing), 명사구 수식",
    paraphrases: [
      "The report illustrated algorithms tracking detailed trends faster than human cognitive abilities.",
      "It showed the way automated systems process intricate arrays, exceeding manual analysis rates."
    ]
  },
  {
    id: "L5-045",
    level: 5,
    context: "Why are some species facing extinction?",
    sentenceTemplate: "The study attributes _____ _____ _____ _____ _____ industrial development.",
    chunks: ["the decline", "in population", "to habitat", "loss caused", "by rapid", "declining", "to loss of", "causing", "rapidly", "habitat of"],
    answer: ["the decline", "in population", "to habitat", "loss caused", "by rapid"],
    explanation: "The correct sentence is: 'The study attributes the decline in population to habitat loss caused by rapid industrial development.'",
    koreanExplanation: "그 연구는 개체 수의 감소를 빠른 산업 발전으로 인해 발생한 서식지 파괴 탓으로 돌립니다. 'attribute A to B' 구문과 과거분사 'caused by'의 수식 관계를 파악해야 하는 복합 문장입니다.",
    grammarPoints: "attribute A to B 구문, 과거분사 후치수식 (caused by), 형용사 수식",
    paraphrases: [
      "Researchers blame demographic decreases on deforestation linked to swift factories growth.",
      "The report links wildlife drop directly to environmental destruction driven by industrial expansion."
    ]
  },
  {
    id: "L5-046",
    level: 5,
    context: "Why did you revise the chemical formula?",
    sentenceTemplate: "We modified it _____ _____ _____ _____ _____ the compound.",
    chunks: ["to ensure", "that the", "reaction remains", "stable under", "high temperatures", "ensuring", "reaction of", "stabilize", "remained", "temperature"],
    answer: ["to ensure", "that the", "reaction remains", "stable under", "high temperatures"],
    explanation: "The correct sentence is: 'We modified it to ensure that the reaction remains stable under high temperatures of the compound.'",
    koreanExplanation: "화합물이 고온에서 안정적인 반응을 유지하도록 보장하기 위해 수정했습니다. 목적의 'to ensure that'절과 주어의 상태를 설명하는 불완전 자동사 'remains' + 형용사 보어 'stable'의 문법적 연계입니다.",
    grammarPoints: "목적의 to부정사 + 명사절 that, 불완전자동사 remain + 형용사보어, 전치사 under",
    paraphrases: [
      "The formula was changed to guarantee that the mixture stays inert when heated.",
      "We adjusted elements so that the processes do not break down in extreme heat environments."
    ]
  },
  {
    id: "L5-047",
    level: 5,
    context: "What is the primary rule for the computer lab?",
    sentenceTemplate: "Under no circumstances _____ _____ _____ _____ _____ password to others.",
    chunks: ["should a", "student share", "their personal", "account details", "or", "student should", "sharing", "account of", "nor", "personally"],
    answer: ["should a", "student share", "their personal", "account details", "or"],
    explanation: "The correct sentence is: 'Under no circumstances should a student share their personal account details or password to others.'",
    koreanExplanation: "어떤 상황에서도 학생은 자신의 개인 계정 정보나 비밀번호를 다른 사람과 공유해서는 안 됩니다. 부정어구 'Under no circumstances'가 맨 앞에 나오며 조동사와 주어의 도치('should a student share')가 이루어진 문장입니다.",
    grammarPoints: "부정어구 도치 (Under no circumstances + should + 주어 + 동사원형), 대등접속사 or, 소유격 지시사",
    paraphrases: [
      "At no time are users permitted to disclose computer credentials or codes to peers.",
      "Sharing individual login data or access phrases is strictly banned under any condition."
    ]
  },
  {
    id: "L5-048",
    level: 5,
    context: "Why did the board select his project?",
    sentenceTemplate: "His design was _____ _____ _____ _____ _____ budget constraints.",
    chunks: ["chosen because", "of its", "innovative approach", "to solving", "complex", "choose", "innovatively", "approach of", "solver", "complexity"],
    answer: ["chosen because", "of its", "innovative approach", "to solving", "complex"],
    explanation: "The correct sentence is: 'His design was chosen because of its innovative approach to solving complex budget constraints.'",
    koreanExplanation: "그의 디자인은 예산 제약이라는 복잡한 문제를 해결하기 위한 혁신적인 접근법 덕분에 선택되었습니다. 수동태 'was chosen'과 이유 전치사구 'because of', 그리고 'approach to + 동명사(-ing)'가 결합된 고급 문장입니다.",
    grammarPoints: "수동태, 전치사 because of, 명사 수식, approach to + 동명사",
    paraphrases: [
      "The committee picked his blueprint owing to its creative methods for tackling tight financial limits.",
      "His model stood out because it offered a novel solution to dealing with capital shortages."
    ]
  },
  {
    id: "L5-049",
    level: 5,
    context: "What did the dean say about the budget deficit?",
    sentenceTemplate: "He announced that _____ _____ _____ _____ _____ academic staff.",
    chunks: ["layoffs would", "be avoided", "by cutting", "non-essential administrative", "expenses rather", "avoiding", "to lay off", "by cut", "administrative of", "expense"],
    answer: ["layoffs would", "be avoided", "by cutting", "non-essential administrative", "expenses rather"],
    explanation: "The correct sentence is: 'He announced that layoffs would be avoided by cutting non-essential administrative expenses rather than academic staff.'",
    koreanExplanation: "그는 비필수적인 행정 비용을 절감함으로써 학술진의 해고를 피할 것이라고 발표했습니다. 조동사 과거 수동태 'would be avoided'와 'by + 동명사' 및 대조를 뜻하는 'rather than'으로 이어지는 문장입니다.",
    grammarPoints: "명사절 내 조동사 과거 수동태, 수단 전치사 by + 동명사, 형용사 수식, expenses rather (than)",
    paraphrases: [
      "The administration declared they will secure jobs by reducing secondary office costs instead.",
      "He promised that personnel cuts are not planned, as they will reduce general office spending instead."
    ]
  },
  {
    id: "L5-050",
    level: 5,
    context: "Why is the environmental club planting trees?",
    sentenceTemplate: "They hope to create _____ _____ _____ _____ _____ urban pollution.",
    chunks: ["a green", "buffer zone", "aimed at", "reducing the", "effects of", "buffering", "aiming", "reduction", "effect", "of reducing"],
    answer: ["a green", "buffer zone", "aimed at", "reducing the", "effects of"],
    explanation: "The correct sentence is: 'They hope to create a green buffer zone aimed at reducing the effects of urban pollution.'",
    koreanExplanation: "그들은 도시 오염의 영향을 줄이기 위해 설계된 녹지 완충 지대를 조성하고자 합니다. 과거분사구 'aimed at'과 전치사 'at' 뒤의 동명사 'reducing', 그리고 'effects of' 명사구 결합입니다.",
    grammarPoints: "과거분사의 명사 후치수식 (aimed at), 전치사 at + 동명사, 전치사 of + 명사",
    paraphrases: [
      "The club wants to plant trees as barriers designed to lower city carbon impacts.",
      "Their goal is to establish forest areas targeting the mitigation of city waste problems."
    ]
  },
  {
    id: "L5-051",
    level: 5,
    context: "What did the history professor emphasize?",
    sentenceTemplate: "He stressed that _____ _____ _____ _____ _____ primary sources.",
    chunks: ["understanding the", "historical context", "requires analyzing", "various diaries", "and", "understand", "history", "requiring", "analyses", "various of"],
    answer: ["understanding the", "historical context", "requires analyzing", "various diaries", "and"],
    explanation: "The correct sentence is: 'He stressed that understanding the historical context requires analyzing various diaries and primary sources.'",
    koreanExplanation: "그는 역사적 맥락을 이해하기 위해서는 다양한 일기와 1차 사료를 분석해야 한다고 강조했습니다. 동명사 주어 'understanding the historical context'에 따른 단수동사 'requires'와 그 목적어로 쓰인 동명사 'analyzing'의 연속입니다.",
    grammarPoints: "동명사 주어와 수 일치, require + 동명사 목적어, 등위접속사 and, 형용사 수식",
    paraphrases: [
      "In his view, grabbing historical ideas demands evaluating multiple private logs and source texts.",
      "He explained that to grasp history properly, one must examine old letters and direct records."
    ]
  },
  {
    id: "L5-052",
    level: 5,
    context: "Why did the research project get suspended?",
    sentenceTemplate: "It was halted _____ _____ _____ _____ _____ safety standards.",
    chunks: ["on the", "grounds of", "suspected violations", "concerning student", "experimental", "ground", "violated", "concern to", "experiment", "of suspecting"],
    answer: ["on the", "grounds of", "suspected violations", "concerning student", "experimental"],
    explanation: "The correct sentence is: 'It was halted on the grounds of suspected violations concerning student experimental safety standards.'",
    koreanExplanation: "학생 실험 안전 기준에 관한 위반 혐의 때문에 중단되었습니다. '~라는 이유로'인 'on the grounds of'와 과거분사 수식 'suspected violations', 그리고 전치사적 분사 'concerning'(~에 관한)의 복잡한 연결입니다.",
    grammarPoints: "이유 전치사구 on the grounds of, 분사 수식, 전치사적 분사 concerning, 명사구 결합",
    paraphrases: [
      "The study was paused due to alleged neglect regarding classroom safety criteria.",
      "They shut down the work because of possible breaches of experimental guidelines."
    ]
  },
  {
    id: "L5-053",
    level: 5,
    context: "How did the university upgrade its system?",
    sentenceTemplate: "They improved security _____ _____ _____ _____ _____ encryption protocols.",
    chunks: ["by implementing", "a system", "capable of", "generating highly", "complex", "implement", "capability", "generated", "complexity", "to implement"],
    answer: ["by implementing", "a system", "capable of", "generating highly", "complex"],
    explanation: "The correct sentence is: 'They improved security by implementing a system capable of generating highly complex encryption protocols.'",
    koreanExplanation: "그들은 고도로 복잡한 암호화 프로토콜을 생성할 수 있는 시스템을 구현함으로써 보안을 강화했습니다. 수단 'by + 동명사', 명사를 뒤에서 꾸미는 형용사구 'capable of', 그리고 'of + 동명사' 및 부사-형용사 수식 구조입니다.",
    grammarPoints: "by + 동명사, 형용사구의 후치수식 (capable of), 전치사 of + 동명사, 부사-형용사 수식",
    paraphrases: [
      "They boosted data safety through installing software that can build extremely strong security keys.",
      "The IT team increased protection by running a program designed to set up advanced safety patterns."
    ]
  },
  {
    id: "L5-054",
    level: 5,
    context: "What did the investigation reveal about the database?",
    sentenceTemplate: "It showed that _____ _____ _____ _____ _____ security check.",
    chunks: ["someone had", "accessed the", "confidential records", "without undergoing", "proper", "access", "confidently", "without to", "properly", "had someone"],
    answer: ["someone had", "accessed the", "confidential records", "without undergoing", "proper"],
    explanation: "The correct sentence is: 'It showed that someone had accessed the confidential records without undergoing proper security check.'",
    koreanExplanation: "누군가 적절한 보안 확인을 거치지 않고 기밀 기록에 접근했음을 보여주었습니다. 명사절 내의 과거완료 시제('had accessed')와 'without + 동명사' 구문이 결합된 구조입니다.",
    grammarPoints: "과거완료 시제, 전치사 without + 동명사, 형용사 수식",
    paraphrases: [
      "The audit proved that private folders were opened without passing necessary authorization.",
      "It turned out that an intruder read restricted files without going through standard screening."
    ]
  },
  {
    id: "L5-055",
    level: 5,
    context: "Why did the department reject the course syllabus?",
    sentenceTemplate: "The committee claimed _____ _____ _____ _____ _____ key standards.",
    chunks: ["that the", "proposed schedule", "lacked sufficient", "details outlining", "the", "propose", "lack", "detail", "outline to", "that schedule"],
    answer: ["that the", "proposed schedule", "lacked sufficient", "details outlining", "the"],
    explanation: "The correct sentence is: 'The committee claimed that the proposed schedule lacked sufficient details outlining the key standards.'",
    koreanExplanation: "위원회는 제안된 일정이 핵심 기준을 요약하는 충분한 세부 정보를 결여하고 있다고 주장했습니다. 명사절 'that'절 안에 과거분사 'proposed'의 수식, 단수동사 'lacked', 그리고 현재분사구 'outlining the...'의 복치수식이 결합되었습니다.",
    grammarPoints: "명사절 접속사 that, 과거분사의 전치 수식, 현재분사구의 후치수식, 형용사 수식",
    paraphrases: [
      "Instructors complained that the draft plan was missing crucial descriptions about class goals.",
      "The review board argued the timeline did not specify how they plan to meet primary guidelines."
    ]
  },
  {
    id: "L5-056",
    level: 5,
    context: "What did they discover during the deep sea exploration?",
    sentenceTemplate: "Researchers found several _____ _____ _____ _____ _____ high pressure.",
    chunks: ["new species", "thriving near", "hydrothermal vents", "capable of", "enduring", "new of", "thrived", "capability", "endure", "venting"],
    answer: ["new species", "thriving near", "hydrothermal vents", "capable of", "enduring"],
    explanation: "The correct sentence is: 'Researchers found several new species thriving near hydrothermal vents capable of enduring high pressure.'",
    koreanExplanation: "연구원들은 고압을 견뎌낼 수 있는 열수구 근처에서 번성하는 몇 가지 새로운 종을 발견했습니다. 명사를 수식하는 현재분사구 'thriving near...'와 형용사구 'capable of + 동명사(enduring)'의 2중 후치수식 구조입니다. 매우 세련되고 복잡한 문장입니다.",
    grammarPoints: "현재분사구 후치수식, 형용사구 후치수식 (capable of), 동명사 목적어, 형용사 수식",
    paraphrases: [
      "Explorers discovered previously unknown organisms living around volcanic vents that tolerate extreme gravity.",
      "Marine biologists located new deep-sea creatures near underwater heaters that can survive heavy pressure."
    ]
  },
  {
    id: "L5-057",
    level: 5,
    context: "Why did you change the experiment duration?",
    sentenceTemplate: "We shortened the _____ _____ _____ _____ _____ temperature variations.",
    chunks: ["observation period", "in order", "to minimize", "the risk", "of", "observe", "minimizing", "risk of", "for", "periodically"],
    answer: ["observation period", "in order", "to minimize", "the risk", "of"],
    explanation: "The correct sentence is: 'We shortened the observation period in order to minimize the risk of temperature variations.'",
    koreanExplanation: "온도 변화의 위험을 최소화하기 위해 관찰 기간을 단축했습니다. 복합 명사구 'observation period' 뒤에 목적의 'in order to + 동사원형'과 'the risk of' 전치사구의 결합입니다.",
    grammarPoints: "명사구 수식, 목적 부사구 in order to, 명사 + 전치사구, 전치사 of + 명사",
    paraphrases: [
      "The testing window was reduced so we could avoid chances of heat fluctuations.",
      "We cut the monitoring time short to reduce potential errors from changing room temperatures."
    ]
  },
  {
    id: "L5-058",
    level: 5,
    context: "Did the team win the engineering competition?",
    sentenceTemplate: "They placed first, _____ _____ _____ _____ _____ energy efficiency.",
    chunks: ["having designed", "a prototype", "focused on", "maximizing renewable", "source", "designing", "focus", "maximization", "renewably", "source of"],
    answer: ["having designed", "a prototype", "focused on", "maximizing renewable", "source"],
    explanation: "The correct sentence is: 'They placed first, having designed a prototype focused on maximizing renewable source energy efficiency.'",
    koreanExplanation: "그들은 신재생 에너지 효율의 극대화에 초점을 맞춘 프로토타입을 설계하여 1위를 차지했습니다. 완료분사구문 'having designed'와 명사를 꾸미는 과거분사구 'focused on', 전치사 'on' 뒤의 동명사 'maximizing'이 겹친 고난도 구성입니다.",
    grammarPoints: "완료분사구문, 과거분사구 후치수식, 전치사 + 동명사, 형용사 수식",
    paraphrases: [
      "By building a model that prioritizes green power utilization, the group won the cup.",
      "They took the gold medal after creating a machine that optimizes green energy yields."
    ]
  },
  {
    id: "L5-059",
    level: 5,
    context: "Why did the administration delay the project?",
    sentenceTemplate: "They postponed execution _____ _____ _____ _____ _____ the project.",
    chunks: ["pending further", "investigation into", "the environmental", "impact of", "developing", "pend", "investigating", "environment", "impacted", "to develop"],
    answer: ["pending further", "investigation into", "the environmental", "impact of", "developing"],
    explanation: "The correct sentence is: 'They postponed execution pending further investigation into the environmental impact of developing the project.'",
    koreanExplanation: "그들은 프로젝트 개발의 환경적 영향에 관한 추가 조사가 있을 때까지 실행을 연기했습니다. 전치사처럼 쓰이는 현재분사 'pending'(~이 있을 때까지)과 명사구 'investigation into', 그리고 'impact of + 동명사'의 고급 결합입니다.",
    grammarPoints: "전치사적 분사 pending, 명사 + 전치사 into, 전치사 of + 동명사, 형용사 수식",
    paraphrases: [
      "They delayed the construction until a detailed study on ecological footprint is completed.",
      "The rollout was put on hold while they perform audits on the site's environmental consequences."
    ]
  },
  {
    id: "L5-060",
    level: 5,
    context: "How did the committee evaluate the applicants?",
    sentenceTemplate: "The candidates were _____ _____ _____ _____ _____ academic achievements.",
    chunks: ["assessed based", "on their", "portfolios as", "well as", "their", "assessing", "base", "portfolio", "also", "achievement of"],
    answer: ["assessed based", "on their", "portfolios as", "well as", "their"],
    explanation: "The correct sentence is: 'The candidates were assessed based on their portfolios as well as their academic achievements.'",
    koreanExplanation: "지원자들은 그들의 학업 성취도뿐만 아니라 포트폴리오를 기반으로 평가받았습니다. 수동태 'were assessed'와 분사구 'based on', 그리고 상관접속사 'as well as'가 결합된 병렬 명사구 구조입니다.",
    grammarPoints: "수동태, 분사구 based on, 상관접속사 as well as, 소유격 지시사, 형용사 수식",
    paraphrases: [
      "Evaluation depended on the students' project records in addition to their test grades.",
      "The board graded candidates using both their design archives and classroom performance."
    ]
  }
];
