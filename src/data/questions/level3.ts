import type { Question } from '../../types/question';

export const level3Questions: Question[] = [
  {
    id: "L3-001",
    level: 3,
    context: "Do you know why the biology professor canceled the class?",
    sentenceTemplate: "The advisor _____ _____ _____ _____ he had an urgent meeting.",
    chunks: ["explained", "to", "the students", "that", "explain", "why", "because of"],
    answer: ["explained", "to", "the students", "that"],
    explanation: "The correct sentence is: 'The advisor explained to the students that he had an urgent meeting.'",
    koreanExplanation: "지도교수님은 학생들에게 긴급 회의가 있어서 그렇다고 설명해 주셨습니다. 'explain to 대상 that절' 구조를 사용하여 문장을 만듭니다.",
    grammarPoints: "explain to sb that절 구조",
    paraphrases: [
      "The students were told by the advisor that an urgent meeting came up.",
      "The academic advisor clarified to the class that the professor was attending an emergency meeting."
    ]
  },
  {
    id: "L3-002",
    level: 3,
    context: "Student A: I cannot log into the registration site.",
    sentenceTemplate: "Student B: Do _____ _____ _____ _____ is down for maintenance?",
    chunks: ["you", "know", "if", "the server", "does", "what", "that"],
    answer: ["you", "know", "if", "the server"],
    explanation: "The correct sentence is: 'Do you know if the server is down for maintenance?'",
    koreanExplanation: "서버가 점검 중으로 다운되었는지 알고 계신가요? 'Do you know' 뒤에 '~인지 아닌지'라는 불확실한 사실을 묻는 명사절 접속사 'if'를 배치합니다.",
    grammarPoints: "간접 의문문, 명사절 접속사 if",
    paraphrases: [
      "Are you aware whether the portal has shut down for temporary repairs?",
      "Could you tell me whether server maintenance is currently underway?"
    ]
  },
  {
    id: "L3-003",
    level: 3,
    context: "Which student won the chemistry scholarship?",
    sentenceTemplate: "The student _____ _____ _____ _____ was very happy.",
    chunks: ["who", "received", "the highest", "score", "whom", "which", "score of"],
    answer: ["who", "received", "the highest", "score"],
    explanation: "The correct sentence is: 'The student who received the highest score was very happy.'",
    koreanExplanation: "가장 높은 점수를 받은 학생이 매우 기뻐했습니다. 관계대명사 주격 'who'가 선행사인 'The student'를 수식하는 형용사절을 구성합니다.",
    grammarPoints: "주격 관계대명사 who, 최상급 표현",
    paraphrases: [
      "The top-scoring individual in the chemistry class was delighted to win.",
      "Great joy was felt by the student who achieved the top marks on the exam."
    ]
  },
  {
    id: "L3-004",
    level: 3,
    context: "Where did you put the reference book I lent you?",
    sentenceTemplate: "I placed the book _____ _____ _____ _____ cannot lose it.",
    chunks: ["where", "other", "students", "surely", "which", "in where", "can"],
    answer: ["where", "other", "students", "surely"],
    explanation: "The correct sentence is: 'I placed the book where other students surely cannot lose it.'",
    koreanExplanation: "저는 다른 학생들이 절대 잃어버릴 수 없는 장소에 그 책을 두었습니다. 관계부사 'where'가 쓰인 부사절/형용사절(생략된 place 수식) 구조입니다.",
    grammarPoints: "관계부사 where",
    paraphrases: [
      "I put the volume in a safe spot so that fellow peers won't misplace it.",
      "The book was set down in a location where it remains easily accessible yet safe."
    ]
  },
  {
    id: "L3-005",
    level: 3,
    context: "What did the Dean say during the orientation?",
    sentenceTemplate: "He promised _____ _____ _____ _____ the student lounge.",
    chunks: ["that", "the university", "would", "improve", "to", "what", "improved"],
    answer: ["that", "the university", "would", "improve"],
    explanation: "The correct sentence is: 'He promised that the university would improve the student lounge.'",
    koreanExplanation: "그는 대학이 학생 휴게실을 개선할 것이라고 약속했습니다. 'promise that 주어 + would + 동사원형' 시제 일치 구조입니다.",
    grammarPoints: "명사절 접속사 that, 시제 일치 (would)",
    paraphrases: [
      "A commitment was made by the Dean to upgrade the student recreation room.",
      "He assured us that plans were underway to enhance the student lounge facilities."
    ]
  },
  {
    id: "L3-006",
    level: 3,
    context: "Can you tell me how to check my graduation credits?",
    sentenceTemplate: "The website _____ _____ _____ _____ shows all credits clearly.",
    chunks: ["which", "you", "need to", "visit", "whom", "where", "visiting"],
    answer: ["which", "you", "need to", "visit"],
    explanation: "The correct sentence is: 'The website which you need to visit shows all credits clearly.'",
    koreanExplanation: "당신이 방문해야 하는 웹사이트는 모든 학점을 명확하게 보여줍니다. 선행사가 사물('The website')이므로 목적격 관계대명사 'which' 또는 'that'을 사용합니다.",
    grammarPoints: "목적격 관계대명사 which, 주어-동사 수 일치",
    paraphrases: [
      "The portal you have to log onto details your academic progress fully.",
      "All graduation requirements are listed transparently on the designated webpage."
    ]
  },
  {
    id: "L3-007",
    level: 3,
    context: "Why is the professor worried about the research project?",
    sentenceTemplate: "He doubts _____ _____ _____ _____ finish it on time.",
    chunks: ["whether", "the team", "members", "can", "that", "could to", "member"],
    answer: ["whether", "the team", "members", "can"],
    explanation: "The correct sentence is: 'He doubts whether the team members can finish it on time.'",
    koreanExplanation: "그는 팀원들이 제시간에 그것을 끝낼 수 있을지 의심스러워합니다. 의심을 뜻하는 동사 'doubt' 뒤에 '~인지 아닌지'의 의미를 가진 'whether'절을 이끕니다.",
    grammarPoints: "명사절 접속사 whether",
    paraphrases: [
      "He has reservations about the group's ability to meet the deadline.",
      "The professor is uncertain if the researchers will complete the work on schedule."
    ]
  },
  {
    id: "L3-008",
    level: 3,
    context: "What did you think of the new campus dormitories?",
    sentenceTemplate: "The dorms _____ _____ _____ _____ were surprisingly spacious.",
    chunks: ["that", "we", "visited", "yesterday", "which of", "who", "visiting"],
    answer: ["that", "we", "visited", "yesterday"],
    explanation: "The correct sentence is: 'The dorms that we visited yesterday were surprisingly spacious.'",
    koreanExplanation: "우리가 어제 방문했던 기숙사는 놀라울 정도로 넓었습니다. 선행사 사물을 가리키는 목적격 관계대명사 'that'을 사용해 수식하는 문장을 만듭니다.",
    grammarPoints: "목적격 관계대명사 that, 부사 수식",
    paraphrases: [
      "We toured the new dorm facilities yesterday and found them exceptionally large.",
      "The residential halls we inspected recently offered much more space than expected."
    ]
  },
  {
    id: "L3-009",
    level: 3,
    context: "How can I join the student council?",
    sentenceTemplate: "Do you know _____ _____ _____ _____ the selection committee?",
    chunks: ["who", "is", "in charge", "of", "whom", "responsible", "at"],
    answer: ["who", "is", "in charge", "of"],
    explanation: "The correct sentence is: 'Do you know who is in charge of the selection committee?'",
    koreanExplanation: "누가 선발위원회를 담당하고 있는지 아십니까? 'be in charge of'(~를 담당하다) 숙어와 간접의문문 주어 역할을 하는 'who'를 사용합니다.",
    grammarPoints: "간접 의문문 어순, 숙어 be in charge of",
    paraphrases: [
      "Do you happen to know the head of the recruitment board?",
      "Who leads the selection process for student government applicants?"
    ]
  },
  {
    id: "L3-010",
    level: 3,
    context: "Why is the registration deadline being extended?",
    sentenceTemplate: "The notice explains _____ _____ _____ _____ extension is necessary.",
    chunks: ["why", "the", "system", "needed", "because", "need", "that"],
    answer: ["why", "the", "system", "needed"],
    explanation: "The correct sentence is: 'The notice explains why the system needed extension is necessary.'",
    koreanExplanation: "공지사항은 왜 시스템 연장이 필요한지 설명해 줍니다. 'explain'의 목적어로 의문사 'why'가 이끄는 간접의문문절을 배치합니다.",
    grammarPoints: "명사절 간접의문문 (why + 주어 + 동사)",
    paraphrases: [
      "The bulletin board details the reasons for extending the enrollment period.",
      "According to the memo, technical system demands forced the deadline push."
    ]
  },
  {
    id: "L3-011",
    level: 3,
    context: "Which major requirements did you struggle with?",
    sentenceTemplate: "The requirement _____ _____ _____ _____ was the programming lab.",
    chunks: ["that", "was", "most", "challenging", "which of", "very", "were"],
    answer: ["that", "was", "most", "challenging"],
    explanation: "The correct sentence is: 'The requirement that was most challenging was the programming lab.'",
    koreanExplanation: "가장 까다로웠던 요구사항은 프로그래밍 실습이었습니다. 주격 관계대명사 'that'과 주어(The requirement)에 일치하는 단수 동사 'was'를 씁니다.",
    grammarPoints: "주격 관계대명사, 단수 동사 일치",
    paraphrases: [
      "The most difficult course milestone turned out to be the computer programming workshop.",
      "I found the practical coding lab to be the toughest prerequisite in my major."
    ]
  },
  {
    id: "L3-012",
    level: 3,
    context: "Where should I submit the scholarship application?",
    sentenceTemplate: "Please ask _____ _____ _____ _____ the office receptionist.",
    chunks: ["if", "you", "should", "give it to", "that", "must to", "giving"],
    answer: ["if", "you", "should", "give it to"],
    explanation: "The correct sentence is: 'Please ask if you should give it to the office receptionist.'",
    koreanExplanation: "그것을 사무실 접수원에게 제출해야 하는지 물어보세요. 타동사 'ask' 뒤에 여부를 묻는 'if'절과 조동사 'should'를 배치합니다.",
    grammarPoints: "ask + if 명사절, 조동사 + 구동사",
    paraphrases: [
      "Inquire at the front desk whether you should hand the papers directly to the receptionist.",
      "Check with the reception staff regarding where to drop off your application."
    ]
  },
  {
    id: "L3-013",
    level: 3,
    context: "Why did you choose to study environmental science?",
    sentenceTemplate: "I want a career _____ _____ _____ _____ planet's ecosystem.",
    chunks: ["which", "helps", "to protect", "our", "whom", "helping", "of"],
    answer: ["which", "helps", "to protect", "our"],
    explanation: "The correct sentence is: 'I want a career which helps to protect our planet's ecosystem.'",
    koreanExplanation: "저는 우리 행성의 생태계를 보호하는 데 도움이 되는 직업을 원합니다. 선행사 사물('a career')을 받는 주격 관계대명사 'which' 뒤에 3인칭 단수 동사 'helps'가 옵니다.",
    grammarPoints: "주격 관계대명사, 동사원형/to부정사 목적어 (help to protect)",
    paraphrases: [
      "My goal is to find a job focused on conserving global biodiversity.",
      "I aspire to work in a field that actively safeguards the environment."
    ]
  },
  {
    id: "L3-014",
    level: 3,
    context: "Is the new fitness center open to all students?",
    sentenceTemplate: "The flyer says _____ _____ _____ _____ pay a fee.",
    chunks: ["that", "nobody", "has to", "actually", "what", "have to", "actual"],
    answer: ["that", "nobody", "has to", "actually"],
    explanation: "The correct sentence is: 'The flyer says that nobody has to actually pay a fee.'",
    koreanExplanation: "전단지에는 실제로는 아무도 비용을 낼 필요가 없다고 적혀 있습니다. 명사절 'that'절 내부의 주어 'nobody'는 단수 취급이므로 'has to'를 씁니다.",
    grammarPoints: "명사절 접속사 that, 단수 대명사 일치 (nobody - has to)",
    paraphrases: [
      "According to the poster, student membership is completely free of charge.",
      "The brochure clarifies that no payment is required to use the facilities."
    ]
  },
  {
    id: "L3-015",
    level: 3,
    context: "Do you know who will teach the statistics course?",
    sentenceTemplate: "I wonder _____ _____ _____ _____ take over the class.",
    chunks: ["which", "instructor", "is", "going to", "who", "go to", "are"],
    answer: ["which", "instructor", "is", "going to"],
    explanation: "The correct sentence is: 'I wonder which instructor is going to take over the class.'",
    koreanExplanation: "어떤 강사님이 그 수업을 맡게 될지 궁금합니다. 'wonder' 뒤에 의문형용사 'which'가 명사 'instructor'를 수식하여 간접의문문절을 형성합니다.",
    grammarPoints: "의문형용사 which, be going to 표현",
    paraphrases: [
      "I am curious about who has been assigned to teach the stats lecture this semester.",
      "I would like to know which professor will inherit the statistics curriculum."
    ]
  },
  {
    id: "L3-016",
    level: 3,
    context: "Why didn't the student pass the chemistry test?",
    sentenceTemplate: "The professor stated _____ _____ _____ _____ the safety test.",
    chunks: ["that", "the student", "failed to", "pass", "who", "fails", "passing"],
    answer: ["that", "the student", "failed to", "pass"],
    explanation: "The correct sentence is: 'The professor stated that the student failed to pass the safety test.'",
    koreanExplanation: "교수님은 그 학생이 안전 시험을 통과하지 못했다고 언급하셨습니다. 'fail to + 동사원형'은 '~하는 데 실패하다'라는 필수 표현입니다.",
    grammarPoints: "명사절 접속사 that, fail to 부정사",
    paraphrases: [
      "The student did not satisfy the requirements of the safety exam, according to the advisor.",
      "We were informed by the lecturer that the safety test score was insufficient."
    ]
  },
  {
    id: "L3-017",
    level: 3,
    context: "Who should I contact about the dorm key replacement?",
    sentenceTemplate: "You need to find _____ _____ _____ _____ the keys.",
    chunks: ["the manager", "who", "is responsible", "for", "whom", "respond", "with"],
    answer: ["the manager", "who", "is responsible", "for"],
    explanation: "The correct sentence is: 'You need to find the manager who is responsible for the keys.'",
    koreanExplanation: "열쇠들을 책임지고 있는 매니저를 찾아야 합니다. 'be responsible for'(~에 책임을 지다) 표현과 주격 관계대명사 'who'를 결합합니다.",
    grammarPoints: "주격 관계대명사, 형용사 전치사구 (responsible for)",
    paraphrases: [
      "You should contact the housing supervisor in charge of key distribution.",
      "Identify the staff member overseeing key replacements in the dorm."
    ]
  },
  {
    id: "L3-018",
    level: 3,
    context: "Why did you buy that expensive textbook?",
    sentenceTemplate: "It was the only book _____ _____ _____ _____ recommended.",
    chunks: ["that", "the chemistry", "department", "highly", "which", "who", "high"],
    answer: ["that", "the chemistry", "department", "highly"],
    explanation: "The correct sentence is: 'It was the only book that the chemistry department highly recommended.'",
    koreanExplanation: "그것은 화학과에서 적극 추천했던 유일한 책이었습니다. 선행사에 'the only'가 붙으면 주로 관계대명사 'that'을 관습적으로 사용합니다.",
    grammarPoints: "관계대명사 선택 (the only + that), 부사 위치",
    paraphrases: [
      "This particular volume was specifically endorsed by chemistry faculty members.",
      "No other book was strongly suggested by the department advisors."
    ]
  },
  {
    id: "L3-019",
    level: 3,
    context: "Student A: I cannot locate the main administration building.",
    sentenceTemplate: "Student B: Let's ask the staff _____ _____ _____ _____ map.",
    chunks: ["where", "we", "can get", "a", "which", "can to", "getting"],
    answer: ["where", "we", "can get", "a"],
    explanation: "The correct sentence is: 'Let's ask the staff where we can get a map.'",
    koreanExplanation: "직원에게 우리가 어디서 지도를 얻을 수 있는지 물어봅시다. ask 뒤에 간접 목적어(the staff)와 직접 목적어 명사절(where + 주어 + 동사)이 온 형태입니다.",
    grammarPoints: "수여동사 ask 구조, 간접의문문 명사절",
    paraphrases: [
      "We should query the information desk to secure a campus guide map.",
      "Let's inquire with the clerks about obtaining a campus brochure."
    ]
  },
  {
    id: "L3-020",
    level: 3,
    context: "Why did the university cancel the outdoor concert?",
    sentenceTemplate: "The weather forecast warned _____ _____ _____ _____ would rain.",
    chunks: ["that", "it", "most", "likely", "what", "they", "liking"],
    answer: ["that", "it", "most", "likely"],
    explanation: "The correct sentence is: 'The weather forecast warned that it most likely would rain.'",
    koreanExplanation: "일기예보에서 비가 올 확률이 높다고 경고했습니다. 'warn that절' 구조에 부사구 'most likely'를 삽입한 자연스러운 구조입니다.",
    grammarPoints: "warn that절, 부사구 삽입",
    paraphrases: [
      "The meteorologist predicted a high probability of precipitation tonight.",
      "We were cautioned by forecasts that rain was highly anticipated."
    ]
  },
  // ==========================================
  // ADDED L3 QUESTIONS (L3-021 ~ L3-060)
  // ==========================================
  {
    id: "L3-021",
    level: 3,
    context: "Student A: Who won the chemistry lab contest?",
    sentenceTemplate: "Student B: I know the student _____ _____ _____ _____ the first prize.",
    chunks: ["who", "was", "awarded", "the", "whom", "which", "award"],
    answer: ["who", "was", "awarded", "the"],
    koreanExplanation: "저는 1등 상을 수상한 그 학생을 알고 있습니다. 관계대명사 주격 'who' 뒤에 수동형 동사 'was awarded'를 배치하여 형용사절을 구성합니다.",
    grammarPoints: "주격 관계대명사, 수동태 (be awarded)",
    paraphrases: [
      "I am acquainted with the student who took home the first prize.",
      "I know which researcher won the top spot in the lab contest."
    ]
  },
  {
    id: "L3-022",
    level: 3,
    context: "Student A: Why did you go to the main hall?",
    sentenceTemplate: "Student B: The lecture _____ _____ _____ _____ was exceptionally interesting.",
    chunks: ["that", "I", "attended", "there", "which of", "who", "attending"],
    answer: ["that", "I", "attended", "there"],
    koreanExplanation: "제가 그곳에서 참석했던 강의는 예외적으로 흥미로웠습니다. 목적격 관계대명사 'that'을 사용해 명사 'lecture'를 수식합니다.",
    grammarPoints: "목적격 관계대명사 that, 부사 수식",
    paraphrases: [
      "The speech I listened to in the hall was very engaging.",
      "I attended a lecture there which proved to be highly educational."
    ]
  },
  {
    id: "L3-023",
    level: 3,
    context: "Student A: I cannot find the dormitory regulation sheet.",
    sentenceTemplate: "Student B: Read the bulletin board _____ _____ _____ _____ all key policies.",
    chunks: ["which", "displays", "the", "details of", "whom", "where", "displaying"],
    answer: ["which", "displays", "the", "details of"],
    koreanExplanation: "모든 주요 정책들의 상세 정보가 나와 있는 게시판을 읽어보세요. 사물 선행사 뒤에 'which + 단수 동사'의 관계절을 구성합니다.",
    grammarPoints: "주격 관계대명사 which, 주어-동사 수 일치",
    paraphrases: [
      "Check the notice board that features the rules for residents.",
      "Review the flyer detailing the residential policies on the board."
    ]
  },
  {
    id: "L3-024",
    level: 3,
    context: "Student A: Why is the campus theater so crowded today?",
    sentenceTemplate: "Student B: The play _____ _____ _____ _____ is extremely popular.",
    chunks: ["that", "they", "are performing", "tonight", "whom", "which of", "performed"],
    answer: ["that", "they", "are performing", "tonight"],
    koreanExplanation: "그들이 오늘 밤에 공연하는 그 연극은 극도로 대중적입니다. 선행사 'play'를 수식하는 관계절 안에 진행형 동사 'are performing'이 옵니다.",
    grammarPoints: "목적격 관계대명사, 현재진행 시제",
    paraphrases: [
      "The drama staged tonight is attracting a massive audience.",
      "Tonight's performance is highly anticipated by campus students."
    ]
  },
  {
    id: "L3-025",
    level: 3,
    context: "Student A: What did the science department change?",
    sentenceTemplate: "Student B: They announced a policy _____ _____ _____ _____ student research labs.",
    chunks: ["which", "affects", "the use", "of", "whom", "affect", "to affect"],
    answer: ["which", "affects", "the use", "of"],
    koreanExplanation: "그들은 학생 연구실 사용에 영향을 미치는 정책을 발표했습니다. 주격 관계대명사 'which' 뒤에 3인칭 단수 동사 'affects'가 어울립니다.",
    grammarPoints: "주격 관계대명사, 수 일치 (policy - affects)",
    paraphrases: [
      "New guidelines concerning lab access have been released.",
      "They declared new regulations that govern student lab usage."
    ]
  },
  {
    id: "L3-026",
    level: 3,
    context: "Student A: Why are you taking the online calculus class?",
    sentenceTemplate: "Student B: The class, _____ _____ _____ _____ easy, is actually difficult.",
    chunks: ["which", "many", "students", "considered", "whom", "that", "considering"],
    answer: ["which", "many", "students", "considered"],
    koreanExplanation: "많은 학생들이 쉽다고 여겼던 그 수업은 실제로는 어렵습니다. 관계대명사의 계속적 용법 `which`가 주어와 동사 사이에 삽입절 형태로 들어갑니다.",
    grammarPoints: "계속적 용법의 관계대명사 which (삽입 관계절)",
    paraphrases: [
      "Although widely rumored to be simple, the math course is very tough.",
      "The class, which had a reputation for being easy, is proving challenging."
    ]
  },
  {
    id: "L3-027",
    level: 3,
    context: "Student A: Who did you talk to at the registrar?",
    sentenceTemplate: "Student B: I met the officer _____ _____ _____ _____ the registration database.",
    chunks: ["who", "is responsible", "for", "maintaining", "whom", "respond", "at maintaining"],
    answer: ["who", "is responsible", "for", "maintaining"],
    koreanExplanation: "등록 데이터베이스를 관리하는 책임을 가진 직원을 만났습니다. 'be responsible for + 동명사' 숙어가 주격 관계대명사 뒤에 이어집니다.",
    grammarPoints: "관계대명사 who, 숙어 be responsible for + -ing",
    paraphrases: [
      "I spoke with the system administrator managing class databases.",
      "The officer overseeing the registration records helped me out."
    ]
  },
  {
    id: "L3-028",
    level: 3,
    context: "Student A: Why did you buy this specific computer model?",
    sentenceTemplate: "Student B: It has the GPU _____ _____ _____ _____ my design software.",
    chunks: ["which", "is", "required", "for", "whom", "require", "to require"],
    answer: ["which", "is", "required", "for"],
    koreanExplanation: "그것은 제 디자인 소프트웨어에 요구되는 GPU를 가지고 있습니다. 선행사가 사물('the GPU')이므로 주격 관계대명사 'which'와 수동태 'is required for'가 결합됩니다.",
    grammarPoints: "주격 관계대명사, 수동태 (be required for)",
    paraphrases: [
      "This system features the exact graphics specs recommended for my design app.",
      "The hardware comes equipped with the GPU required by my modeling tools."
    ]
  },
  {
    id: "L3-029",
    level: 3,
    context: "Student A: Do you know why she resigned from the student senate?",
    sentenceTemplate: "Student B: I wonder _____ _____ _____ _____ made her leave.",
    chunks: ["what", "kind", "of", "reasons", "which", "how", "that"],
    answer: ["what", "kind", "of", "reasons"],
    koreanExplanation: "어떤 종류의 이유들이 그녀를 떠나게 만들었는지 궁금합니다. 타동사 'wonder'의 목적어절로 'what + 명사구'가 쓰인 간접의문문입니다.",
    grammarPoints: "간접의문문 명사절 (의문형용사 what)",
    paraphrases: [
      "I am curious about the factors behind her sudden resignation.",
      "I wonder what issues forced her to quit the student council."
    ]
  },
  {
    id: "L3-030",
    level: 3,
    context: "Student A: Is the final exam outline posted?",
    sentenceTemplate: "Student B: Yes, check the document _____ _____ _____ _____ our class dashboard.",
    chunks: ["that", "the professor", "uploaded", "to", "which of", "who", "uploading"],
    answer: ["that", "the professor", "uploaded", "to"],
    koreanExplanation: "네, 교수님이 우리 클래스 대시보드에 올리신 문서를 확인해 보세요. 목적격 관계대명사 'that'과 함께 방향 전치사 'to'가 동사 'uploaded'와 세트로 작용합니다.",
    grammarPoints: "목적격 관계대명사, 전치사의 목적어 결합",
    paraphrases: [
      "You can find the exam overview PDF uploaded on our portal.",
      "Check the syllabus updates the lecturer posted to the board."
    ]
  },
  {
    id: "L3-031",
    level: 3,
    context: "Student A: Why did you ask the lab assistant for help?",
    sentenceTemplate: "Student B: I wanted to ask _____ _____ _____ _____ the chemistry tools.",
    chunks: ["where", "he", "had placed", "all", "which", "places", "in where"],
    answer: ["where", "he", "had placed", "all"],
    koreanExplanation: "그가 모든 화학 장비들을 어디에 두었는지 물어보고 싶었습니다. ask 뒤에 직접목적어로 쓰인 간접의문문 명사절이며 과거완료시제 'had placed'가 쓰였습니다.",
    grammarPoints: "간접의문문 (where + 주어 + 동사), 과거완료 시제",
    paraphrases: [
      "I inquired about the storage location of the laboratory gear.",
      "I needed to know where the chemistry apparatus had been stored."
    ]
  },
  {
    id: "L3-032",
    level: 3,
    context: "Student A: Is the professor ready to evaluate our papers?",
    sentenceTemplate: "Student B: She explained _____ _____ _____ _____ grade them by Friday.",
    chunks: ["that", "she", "would", "try to", "to", "what", "trying"],
    answer: ["that", "she", "would", "try to"],
    koreanExplanation: "그녀는 금요일까지 그것들을 채점하도록 노력하겠다고 설명했습니다. 주절 동사가 과거('explained')이므로 명사절 대동사 조동사를 과거형 'would'로 시제 일치 시킵니다.",
    grammarPoints: "명사절 that, 시제 일치 (would), try to + 동사원형",
    paraphrases: [
      "She assured the class of her intention to finish grading before the weekend.",
      "The professor stated she would endeavor to release scores by Friday."
    ]
  },
  {
    id: "L3-033",
    level: 3,
    context: "Student A: Did they hire the new economics lecturer?",
    sentenceTemplate: "Student B: I want to know _____ _____ _____ _____ join the department.",
    chunks: ["whether", "the new", "lecturer", "will", "that", "if to", "willing"],
    answer: ["whether", "the new", "lecturer", "will"],
    koreanExplanation: "새로운 강사님이 학과에 합류하실 것인지 알고 싶습니다. 'know' 뒤에 확실하지 않은 사실에 대한 의문 명사절 'whether'를 활용합니다.",
    grammarPoints: "명사절 접속사 whether, 미래 시제",
    paraphrases: [
      "I am keen to discover if the new professor is indeed joining us.",
      "Let's check if the department has successfully signed the candidate."
    ]
  },
  {
    id: "L3-034",
    level: 3,
    context: "Student A: Which library books were recalled?",
    sentenceTemplate: "Student B: The books _____ _____ _____ _____ must be returned immediately.",
    chunks: ["which", "are", "currently", "overdue", "whom", "where", "is"],
    answer: ["which", "are", "currently", "overdue"],
    koreanExplanation: "현재 대출 기간이 만료된 도서들은 즉시 반납되어야 합니다. 복수 선행사를 꾸미는 주격 관계대명사 'which' 뒤에 복수 be동사 'are'가 옵니다.",
    grammarPoints: "주격 관계대명사, 복수 주어 일치 (books - are)",
    paraphrases: [
      "Any materials that are past their return date require immediate drop-off.",
      "Overdue publications are subject to instant recall by the desk."
    ]
  },
  {
    id: "L3-035",
    level: 3,
    context: "Student A: Who did the sociology club choose as leader?",
    sentenceTemplate: "Student B: The candidate _____ _____ _____ _____ is the senior student.",
    chunks: ["whom", "the members", "unanimously", "selected", "which", "who of", "select"],
    answer: ["whom", "the members", "unanimously", "selected"],
    koreanExplanation: "회원들이 만장일치로 선출한 후보자는 고학년(4학년) 학생입니다. 사람 목적어를 수식하므로 목적격 관계대명사 'whom'과 부사 'unanimously'를 배치합니다.",
    grammarPoints: "목적격 관계대명사 whom, 부사 수식",
    paraphrases: [
      "The person chosen by consensus to lead the club is a senior.",
      "They unanimously voted for a senior student to run the organization."
    ]
  },
  {
    id: "L3-036",
    level: 3,
    context: "Student A: Why did the university buy new server hardware?",
    sentenceTemplate: "Student B: The notice states _____ _____ _____ _____ crash during registration.",
    chunks: ["that", "the server", "no longer", "will", "what", "which", "would to"],
    answer: ["that", "the server", "no longer", "will"],
    koreanExplanation: "공지사항에 따르면 서버가 수강신청 동안 더 이상 다운되지 않을 것이라고 합니다. 명사절 'that' 안의 부정 조동사구 'no longer will' 구조를 완성합니다.",
    grammarPoints: "명사절 접속사 that, 부정 부사구 (no longer)",
    paraphrases: [
      "The statement promises that server congestion won't trigger crashes anymore.",
      "According to the IT desk, the new hardware guarantees system stability."
    ]
  },
  {
    id: "L3-037",
    level: 3,
    context: "Student A: Where can I get feedback on my essay?",
    sentenceTemplate: "Student B: Find a tutor _____ _____ _____ _____ your writing style.",
    chunks: ["who", "can", "help you", "refine", "whom", "which", "helping"],
    answer: ["who", "can", "help you", "refine"],
    koreanExplanation: "당신의 글쓰기 스타일을 다듬는 데 도움을 줄 수 있는 튜터를 찾으십시오. 'help + 목적어 + 동사원형(refine)'의 사역 구조가 주격 관계절 내에 사용되었습니다.",
    grammarPoints: "주격 관계대명사, 준사역동사 help",
    paraphrases: [
      "Look for an academic advisor capable of polishing your essays.",
      "Get assistance from a writing mentor who can help improve your structure."
    ]
  },
  {
    id: "L3-038",
    level: 3,
    context: "Student A: Did you hear about the student council change?",
    sentenceTemplate: "Student B: I wonder _____ _____ _____ _____ the next president.",
    chunks: ["who", "is", "going to", "be", "whom", "go to", "are"],
    answer: ["who", "is", "going to", "be"],
    koreanExplanation: "누가 다음 회장이 될 것인지 궁금합니다. 'wonder'의 목적어로 의문사 'who'가 이끄는 명사절을 구성합니다.",
    grammarPoints: "간접의문문 명사절 (who), 미래형 be going to",
    paraphrases: [
      "I am curious about the identity of the incoming council president.",
      "I wonder who will take the helm of the student government next."
    ]
  },
  {
    id: "L3-039",
    level: 3,
    context: "Student A: Why did the dean call for a campus meeting?",
    sentenceTemplate: "Student B: The memo indicates _____ _____ _____ _____ discuss the budget.",
    chunks: ["that", "we", "need to", "collectively", "what", "needed", "collection"],
    answer: ["that", "we", "need to", "collectively"],
    koreanExplanation: "회람에 따르면 우리가 집단적으로 예산안에 대해 논의해야 한다고 합니다. 명사절 'that'과 함께 부사 'collectively'가 조동사를 수식합니다.",
    grammarPoints: "명사절 접속사 that, 부사 수식",
    paraphrases: [
      "The message states we must assemble to talk about campus finances.",
      "According to the memo, a collective discussion on budget cuts is required."
    ]
  },
  {
    id: "L3-040",
    level: 3,
    context: "Student A: Did the professor explain the term paper requirements?",
    sentenceTemplate: "Student B: Yes, she explained _____ _____ _____ _____ format the bibliography.",
    chunks: ["how", "we", "ought to", "properly", "which", "how to", "proprely"],
    answer: ["how", "we", "ought to", "properly"],
    koreanExplanation: "네, 그녀는 우리가 참고문헌 양식을 어떻게 올바르게 포맷해야 하는지 설명해 주었습니다. 의무 표현인 'ought to'와 부사 'properly'가 결합된 간접의문문입니다.",
    grammarPoints: "간접의문문, 조동사 ought to, 부사 수식",
    paraphrases: [
      "Yes, she demonstrated the correct way to cite our academic sources.",
      "She provided clear instructions on bibliographical formatting rules."
    ]
  },
  {
    id: "L3-041",
    level: 3,
    context: "Student A: Which dormitory room did they allocate to you?",
    sentenceTemplate: "Student B: I received the room _____ _____ _____ _____ the campus lake.",
    chunks: ["which", "directly", "overlooks", "the", "whom", "where", "overlooking"],
    answer: ["which", "directly", "overlooks", "the"],
    koreanExplanation: "저는 캠퍼스 호수가 바로 내려다보이는 방을 배정받았습니다. 선행사 'room' 단수에 맞추어 주격 관계대명사 'which'와 단수형 동사 'overlooks'를 배치합니다.",
    grammarPoints: "주격 관계대명사, 주어-동사 수 일치 (room - overlooks)",
    paraphrases: [
      "I was assigned a room that offers a clear view of the campus lake.",
      "My dorm window faces directly toward the lake on campus."
    ]
  },
  {
    id: "L3-042",
    level: 3,
    context: "Student A: Why did you report the computing center glitch?",
    sentenceTemplate: "Student B: The bug, _____ _____ _____ _____ login processes, is critical.",
    chunks: ["which", "is", "affecting", "all", "whom", "that", "affected"],
    answer: ["which", "is", "affecting", "all"],
    koreanExplanation: "모든 로그인 과정에 영향을 주고 있는 그 버그는 심각한 상태입니다. 관계대명사의 계속적 용법 `which` 뒤에 현재진행 시제 `is affecting`을 구성합니다.",
    grammarPoints: "계속적 관계대명사, 현재진행 시제",
    paraphrases: [
      "The system error, which impacts every login attempt, is quite severe.",
      "This technical glitch affecting our database logins needs urgent repair."
    ]
  },
  {
    id: "L3-043",
    level: 3,
    context: "Student A: Who won the scholarship for history?",
    sentenceTemplate: "Student B: It was the student _____ _____ _____ _____ high GPA.",
    chunks: ["who", "maintained", "an", "exceptionally", "whom", "which", "exceptional"],
    answer: ["who", "maintained", "an", "exceptionally"],
    koreanExplanation: "유난히 높은 평점을 계속 유지해 온 그 학생이 받았습니다. 주격 관계대명사 'who'와 평점(GPA)을 꾸미는 수식 구조를 엮습니다.",
    grammarPoints: "주격 관계대명사, 부사-형용사 수식구조",
    paraphrases: [
      "The award went to the individual who kept outstanding academic grades.",
      "The history scholarship was won by a student holding top marks."
    ]
  },
  {
    id: "L3-044",
    level: 3,
    context: "Student A: What did the academic counselor say?",
    sentenceTemplate: "Student B: She suggested _____ _____ _____ _____ double major early.",
    chunks: ["that", "we", "should", "declare a", "to", "what", "declaring"],
    answer: ["that", "we", "should", "declare a"],
    koreanExplanation: "그녀는 우리가 일찍 복수전공을 신청해야 한다고 제안했습니다. 'suggest that 주어 + should + 동사원형' 당위성 동사의 명사절 구조입니다.",
    grammarPoints: "suggest that 주어 should 동사원형 구조",
    paraphrases: [
      "Her advice was to register our second major choice early in the program.",
      "She recommended that students choose their double major path soon."
    ]
  },
  {
    id: "L3-045",
    level: 3,
    context: "Student A: Why is the physics lab closed to undergraduates?",
    sentenceTemplate: "Student B: The board explains _____ _____ _____ _____ the safety gear.",
    chunks: ["why", "undergraduates", "must", "always wear", "because", "must to", "wearing"],
    answer: ["why", "undergraduates", "must", "always wear"],
    koreanExplanation: "게시판에는 왜 학부생들이 항상 안전 장비를 착용해야 하는지 설명되어 있습니다. 의문사 'why'가 이끄는 간접의문문 명사절을 배치합니다.",
    grammarPoints: "간접의문문 명사절 (why + 주어 + 동사)",
    paraphrases: [
      "The sign lists the reasons why safety equipment is mandatory for students.",
      "It details the safety regulations that undergraduates are required to follow."
    ]
  },
  {
    id: "L3-046",
    level: 3,
    context: "Student A: Which chemistry professor did you talk with?",
    sentenceTemplate: "Student B: I spoke to the lecturer _____ _____ _____ _____ chemistry course.",
    chunks: ["who", "is", "teaching", "the organic", "whom", "which", "teach"],
    answer: ["who", "is", "teaching", "the organic"],
    koreanExplanation: "유기화학 코스를 가르치고 계시는 강사님과 대화를 나눴습니다. 사람 주격 관계대명사 'who'에 진행 수식절을 결합합니다.",
    grammarPoints: "주격 관계대명사, 현재진행 시제",
    paraphrases: [
      "I had a conversation with the organic chemistry instructor.",
      "The professor teaching the advanced organic module helped me."
    ]
  },
  {
    id: "L3-047",
    level: 3,
    context: "Student A: Is the university database secure?",
    sentenceTemplate: "Student B: The IT department doubts _____ _____ _____ _____ hack the portal.",
    chunks: ["whether", "external", "parties", "can", "that", "could to", "party"],
    answer: ["whether", "external", "parties", "can"],
    koreanExplanation: "IT 부서는 외부인들이 포털을 해킹할 수 있을지 의구심을 가지고 있습니다. 의심을 나타내는 명사절 'whether'와 조동사 'can'을 정렬합니다.",
    grammarPoints: "doubt + whether 명사절",
    paraphrases: [
      "Security staff are skeptical about hackers penetrating the system.",
      "The IT desk doubts if outsiders have the ability to breach our servers."
    ]
  },
  {
    id: "L3-048",
    level: 3,
    context: "Student A: Which exhibition did the art class visit?",
    sentenceTemplate: "Student B: We visited the gallery _____ _____ _____ _____ displaying modern art.",
    chunks: ["which", "was", "actively", "displaying", "whom", "where", "active"], // Let's check: "which was actively displaying modern art."
    answer: ["which", "was", "actively", "displaying"],
    koreanExplanation: "현대 미술을 적극적으로 전시하고 있던 갤러리를 방문했습니다. 주격 관계대명사 'which'와 수식 부사 'actively'가 포함된 관계절입니다.",
    grammarPoints: "주격 관계대명사, 부사 수식 진행형",
    paraphrases: [
      "We toured a gallery showcasing modern art exhibits.",
      "The class visited the local museum currently hosting modern art."
    ]
  },
  {
    id: "L3-049",
    level: 3,
    context: "Student A: Do you know who coordinates the exchange program?",
    sentenceTemplate: "Student B: I need to ask _____ _____ _____ _____ the study abroad office.",
    chunks: ["who", "is", "managing", "the", "whom", "manages", "to manage"], // Let's check: "who is managing the study abroad office."
    answer: ["who", "is", "managing", "the"],
    koreanExplanation: "누가 해외 유학 사무실을 관리하고 있는지 물어보아야 합니다. 직접목적어 명사절에 진행형 'is managing'을 사용해 구성합니다.",
    grammarPoints: "간접의문문 명사절 (who), 진행 시제",
    paraphrases: [
      "I have to inquire about the coordinator of the international department.",
      "I need to identify the administrator in charge of exchange programs."
    ]
  },
  {
    id: "L3-050",
    level: 3,
    context: "Student A: Why did you buy that specific graphing calculator?",
    sentenceTemplate: "Student B: It was the model _____ _____ _____ _____ recommended for physics class.",
    chunks: ["that", "the", "department", "officially", "which", "who", "official"],
    answer: ["that", "the", "department", "officially"],
    koreanExplanation: "그것은 물리학 수업을 위해 학과에서 공식적으로 추천한 모델이었습니다. 특정 선행사 'the model'을 한정하는 관계대명사 'that'을 사용합니다.",
    grammarPoints: "관계대명사 that, 부사 수식",
    paraphrases: [
      "This calculator is the exact type endorsed by our physics faculty.",
      "It is the model recommended officially by course advisors."
    ]
  },
  {
    id: "L3-051",
    level: 3,
    context: "Student A: Did the committee extend the project deadline?",
    sentenceTemplate: "Student B: The memo explains _____ _____ _____ _____ grant the request.",
    chunks: ["why", "they", "decided", "not to", "because", "deciding"],
    answer: ["why", "they", "decided", "not to"],
    explanation: "The correct sentence is: 'The memo explains why they decided not to grant the request.'",
    koreanExplanation: "회람에는 왜 그들이 그 요청을 승인하지 않기로 결정했는지 적혀 있습니다. 'decide not to + 동사원형' (~하지 않기로 결정하다) 구조의 간접의문문입니다.",
    grammarPoints: "decide not to 부정사 부정, 간접의문문",
    paraphrases: [
      "The note clarifies the reasons behind rejecting our extension request.",
      "The memo explains the decision to deny the project deadline extension."
    ]
  },
  {
    id: "L3-052",
    level: 3,
    context: "Student A: Which student received the research grant?",
    sentenceTemplate: "Student B: The researcher _____ _____ _____ _____ the biology lab is very proud.",
    chunks: ["who", "leads", "the project", "in", "whom", "leading", "at"],
    answer: ["who", "leads", "the project", "in"],
    koreanExplanation: "생물학 실험실에서 프로젝트를 이끄는 그 연구원이 매우 자랑스러워합니다. 주격 관계대명사 'who'에 이끄는 현재시제 동사 'leads'를 붙여 명사를 수식합니다.",
    grammarPoints: "주격 관계대명사, 전치사구 수식",
    paraphrases: [
      "The student conducting the main lab experiments won the grant.",
      "The project leader in the biology section is delighted with the funding."
    ]
  },
  {
    id: "L3-053",
    level: 3,
    context: "Student A: Why is the registrar's office so crowded today?",
    sentenceTemplate: "Student B: They are helping students _____ _____ _____ _____ register for classes.",
    chunks: ["who", "failed", "to", "successfully", "whom", "failing", "success"],
    answer: ["who", "failed", "to", "successfully"],
    koreanExplanation: "수강신청을 성공적으로 마치지 못한 학생들을 그들이 도와주고 있습니다. 'fail to + 동사원형' 구문에 부사 'successfully'가 결합된 주격 관계절입니다.",
    grammarPoints: "주격 관계대명사, fail to 부정사, 부사 위치",
    paraphrases: [
      "They are assisting those who encountered registration errors.",
      "Staff are resolving issues for students unable to submit schedules online."
    ]
  },
  {
    id: "L3-054",
    level: 3,
    context: "Student A: Is the campus bookstore open during lunch?",
    sentenceTemplate: "Student B: I want to check _____ _____ _____ _____ closes for lunch.",
    chunks: ["if", "the", "store", "actually", "that", "actual", "shut"],
    answer: ["if", "the", "store", "actually"],
    koreanExplanation: "그 상점이 실제로 점심시간에 문을 닫는지 확인하고 싶습니다. 타동사 'check' 뒤에 여부를 묻는 명사절 접속사 'if'와 부사 'actually'를 사용합니다.",
    grammarPoints: "check + if 명사절, 부사 수식",
    paraphrases: [
      "I need to verify whether they close during the noon hour.",
      "Let's see if the shop stays open for employees' lunch breaks."
    ]
  },
  {
    id: "L3-055",
    level: 3,
    context: "Student A: Did the history professor accept your late essay?",
    sentenceTemplate: "Student B: Yes, she understood _____ _____ _____ _____ my laptop crashed.",
    chunks: ["that", "I", "could not", "work since", "what", "because of", "work"],
    answer: ["that", "I", "could not", "work since"],
    explanation: "The correct sentence is: 'Yes, she understood that I could not work since my laptop crashed.'",
    koreanExplanation: "네, 그녀는 제 노트북이 고장 났기 때문에 작업할 수 없었다는 점을 이해해 주셨습니다. 명사절 'that' 안의 시간 접속사 'since'(~이래로)가 쓰인 문맥입니다.",
    grammarPoints: "명사절 접속사 that, 조동사 과거형 부정, 시간 접속사 since",
    paraphrases: [
      "She recognized that my computer crash prevented any study progress.",
      "The instructor accepted it since she understood my hardware malfunction."
    ]
  },
  {
    id: "L3-056",
    level: 3,
    context: "Student A: Where can I submit my housing preference form?",
    sentenceTemplate: "Student B: Ask the staff _____ _____ _____ _____ the dormitory desk.",
    chunks: ["who", "are", "working", "at", "whom", "which", "works"],
    answer: ["who", "are", "working", "at"],
    koreanExplanation: "기숙사 안내 데스크에서 일하고 있는 직원에게 물어보세요. 복수 선행사 'staff'에 맞춘 주격 관계절 진행형 'are working at'입니다.",
    grammarPoints: "주격 관계대명사, 복수 주어 일치 (staff - are)",
    paraphrases: [
      "Consult the housing coordinators stationed at the dorm desk.",
      "Ask the employees managing the dormitory reception desk."
    ]
  },
  {
    id: "L3-057",
    level: 3,
    context: "Student A: Why did you buy this expensive camera lens?",
    sentenceTemplate: "Student B: It was the only lens _____ _____ _____ _____ for my photography class.",
    chunks: ["that", "was", "fully", "compatible", "which", "who", "full"],
    answer: ["that", "was", "fully", "compatible"],
    koreanExplanation: "그것은 제 사진 수업에 완전히 호환되는 유일한 렌즈였습니다. 최상수식어 'the only'를 받아 관계대명사 'that'과 형용사구 'fully compatible'이 결합합니다.",
    grammarPoints: "관계대명사 선택 (the only - that), 부사-형용사 수식",
    paraphrases: [
      "This lens was the sole model compatible with my course requirements.",
      "It is the only gear that works properly with my class camera."
    ]
  },
  {
    id: "L3-058",
    level: 3,
    context: "Student A: Will the guest lecturer speak in English?",
    sentenceTemplate: "Student B: I wonder _____ _____ _____ _____ translate his speech.",
    chunks: ["whether", "we", "will need", "to", "that", "if to", "needing"],
    answer: ["whether", "we", "will need", "to"],
    koreanExplanation: "우리가 그의 강연을 번역해야 할 필요가 있을지 궁금합니다. 'wonder'의 목적어로 쓰인 명사절 'whether'와 'need to + 동사원형' 구조입니다.",
    grammarPoints: "명사절 접속사 whether, need to 부정사",
    paraphrases: [
      "I am uncertain if translation services will be required tonight.",
      "I wonder if a translator will be needed for the audience."
    ]
  },
  {
    id: "L3-059",
    level: 3,
    context: "Student A: Who won the student election?",
    sentenceTemplate: "Student B: The committee announced _____ _____ _____ _____ won the vote.",
    chunks: ["that", "the", "popular", "candidate", "what", "which", "popularly"],
    answer: ["that", "the", "popular", "candidate"],
    koreanExplanation: "위원회는 대중적인 후보가 투표에서 승리했다고 발표했습니다. 타동사 'announced' 뒤에 명사절 접속사 'that'을 붙여 완전한 문장을 이끕니다.",
    grammarPoints: "명사절 접속사 that, 형용사-명사 수식",
    paraphrases: [
      "The official board declared that the favorite nominee won the election.",
      "It was announced that the lead candidate secured the victory."
    ]
  },
  {
    id: "L3-060",
    level: 3,
    context: "Student A: Did the university renovate the gym?",
    sentenceTemplate: "Student B: They built a center _____ _____ _____ _____ modern equipment.",
    chunks: ["which", "is", "filled", "with", "whom", "where", "filling"],
    answer: ["which", "is", "filled", "with"],
    koreanExplanation: "그들은 현대적인 장비들로 가득 찬 센터를 지었습니다. 'be filled with' (~로 가득 차다) 수동형 구문이 관계절 내에 사용되었습니다.",
    grammarPoints: "주격 관계대명사, 수동태 (be filled with)",
    paraphrases: [
      "They constructed a facility equipped with modern fitness gear.",
      "A new gym packed with state-of-the-art machines was opened."
    ]
  }
];
