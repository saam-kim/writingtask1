import type { Question } from '../types/question';

export const questions: Question[] = [
  // ==========================================
  // LEVEL 1 (20 Questions: chunks 4~5, simple sentences)
  // ==========================================
  {
    id: "L1-001",
    level: 1,
    context: "Student A: I need to find the chemistry lab.",
    sentenceTemplate: "Student B: The lab _____ _____ _____ _____ the library.",
    chunks: ["is", "located", "next", "to", "are", "at"],
    answer: ["is", "located", "next", "to"],
    explanation: "The correct sentence is: 'The lab is located next to the library.'",
    koreanExplanation: "실험실은 도서관 옆에 위치해 있습니다. 주어가 단수(The lab)이므로 'is'를 사용하고, 위치를 나타내는 표현인 'located next to'를 구성합니다.",
    grammarPoints: "단수 주어 일치 (is), 전치사구 (next to)"
  },
  {
    id: "L1-002",
    level: 1,
    context: "Student A: Do you know when the museum opens?",
    sentenceTemplate: "Student B: It _____ _____ _____ _____ 10 AM.",
    chunks: ["usually", "opens", "doors", "at", "open", "on"],
    answer: ["usually", "opens", "doors", "at"],
    explanation: "The correct sentence is: 'It usually opens doors at 10 AM.'",
    koreanExplanation: "박물관은 보통 오전 10시에 문을 엽니다. 빈도부사(usually)는 일반동사 앞에 위치하며, 주어 'It'에 맞춰 일반동사에 's'가 붙은 'opens'를 사용합니다.",
    grammarPoints: "빈도부사 위치, 3인칭 단수 동사 일치"
  },
  {
    id: "L1-003",
    level: 1,
    context: "What was the highlight of your field trip?",
    sentenceTemplate: "The _____ _____ _____ _____ fantastic.",
    chunks: ["tour guides", "we met", "were", "absolutely", "was", "is"],
    answer: ["tour guides", "we met", "were", "absolutely"],
    explanation: "The correct sentence is: 'The tour guides we met were absolutely fantastic.'",
    koreanExplanation: "우리가 만난 투어 가이드들은 정말 환상적이었습니다. 주어가 복수(The tour guides)이므로 복수 과거형 be동사인 'were'를 선택해야 합니다.",
    grammarPoints: "주어-동사 수 일치 (복수 주어 - were), 부사 수식"
  },
  {
    id: "L1-004",
    level: 1,
    context: "Where can I find the biology textbook?",
    sentenceTemplate: "You _____ _____ _____ _____ bookstore.",
    chunks: ["can", "buy", "it", "at the", "buying", "in"],
    answer: ["can", "buy", "it", "at the"],
    explanation: "The correct sentence is: 'You can buy it at the bookstore.'",
    koreanExplanation: "당신은 그것을 서점에서 살 수 있습니다. 조동사 'can' 뒤에는 동사원형 'buy'가 오고, 장소를 나타내는 전치사는 'at the'를 사용합니다.",
    grammarPoints: "조동사 + 동사원형, 장소 전치사 at"
  },
  {
    id: "L1-005",
    level: 1,
    context: "I missed the dormitory meeting last night.",
    sentenceTemplate: "You _____ _____ _____ _____ important information.",
    chunks: ["should", "ask", "about the", "most", "asking", "for"],
    answer: ["should", "ask", "about the", "most"],
    explanation: "The correct sentence is: 'You should ask about the most important information.'",
    koreanExplanation: "가장 중요한 정보에 대해 물어보는 것이 좋겠습니다. 의무/충고의 조동사 'should' 뒤에 동사원형 'ask'를 사용하며, '~에 대해 묻다'는 'ask about'입니다.",
    grammarPoints: "조동사 should, 구동사 ask about"
  },
  {
    id: "L1-006",
    level: 1,
    context: "Why is the classroom so quiet today?",
    sentenceTemplate: "The _____ _____ _____ _____ studying.",
    chunks: ["students", "are", "busy", "with", "is", "at"],
    answer: ["students", "are", "busy", "with"],
    explanation: "The correct sentence is: 'The students are busy with studying.'",
    koreanExplanation: "학생들은 공부하느라 바쁩니다. 'be busy with + 명사/동명사'는 '~로 바쁘다'라는 표현이며 복수 주어이므로 'are'를 씁니다.",
    grammarPoints: "be busy with 표현, 수 일치"
  },
  {
    id: "L1-007",
    level: 1,
    context: "I cannot log in to the student portal.",
    sentenceTemplate: "Please _____ _____ _____ _____ office.",
    chunks: ["visit", "the", "student", "support", "visiting", "to"],
    answer: ["visit", "the", "student", "support"],
    explanation: "The correct sentence is: 'Please visit the student support office.'",
    koreanExplanation: "학생 지원 사무실을 방문해 주세요. Please 뒤에는 명령문 형태의 동사원형 'visit'이 오고 목적어로 특정 사무실을 가리키는 명사구가 옵니다.",
    grammarPoints: "명령문 동사원형, 명사 수식"
  },
  {
    id: "L1-008",
    level: 1,
    context: "Did you talk to Professor Smith?",
    sentenceTemplate: "Yes, I _____ _____ _____ _____ office.",
    chunks: ["met", "him", "in", "his", "meet", "at"],
    answer: ["met", "him", "in", "his"],
    explanation: "The correct sentence is: 'Yes, I met him in his office.'",
    koreanExplanation: "네, 저는 그의 사무실에서 그를 만났습니다. 과거 질문에 대한 답이므로 과거동사 'met'을 쓰고, 공간 내부를 뜻하는 전치사 'in'을 씁니다.",
    grammarPoints: "과거시제 동사, 전치사 in"
  },
  {
    id: "L1-009",
    level: 1,
    context: "How often do you study in the library?",
    sentenceTemplate: "I _____ _____ _____ _____ times a week.",
    chunks: ["go", "there", "at least", "three", "goes", "on"],
    answer: ["go", "there", "at least", "three"],
    explanation: "The correct sentence is: 'I go there at least three times a week.'",
    koreanExplanation: "저는 일주일에 최소한 세 번 그곳에 갑니다. 'at least'는 '최소한'이라는 뜻의 부사구이며, 주어 'I'에 어울리는 동사원형 'go'를 사용합니다.",
    grammarPoints: "수량 표현 (at least)"
  },
  {
    id: "L1-010",
    level: 1,
    context: "Are you ready for the presentation?",
    sentenceTemplate: "We _____ _____ _____ _____ ready.",
    chunks: ["are", "already", "more than", "half", "is", "most"],
    answer: ["are", "already", "more than", "half"],
    explanation: "The correct sentence is: 'We are already more than half ready.'",
    koreanExplanation: "우리는 이미 절반 이상 준비되었습니다. 비교급 수식어구인 'more than half'를 형용사 'ready' 앞에 위치시킵니다.",
    grammarPoints: "비교 수식구 (more than)"
  },
  {
    id: "L1-011",
    level: 1,
    context: "When is the project deadline?",
    sentenceTemplate: "The _____ _____ _____ _____ Friday.",
    chunks: ["due date", "is", "set", "for", "are", "on"],
    answer: ["due date", "is", "set", "for"],
    explanation: "The correct sentence is: 'The due date is set for Friday.'",
    koreanExplanation: "제출일은 금요일로 정해졌습니다. 'be set for + 날짜'는 '~로 정해지다'라는 숙어입니다.",
    grammarPoints: "수동태 표현 (is set for)"
  },
  {
    id: "L1-012",
    level: 1,
    context: "Who is the contact person for the photography club?",
    sentenceTemplate: "You _____ _____ _____ _____ team leader.",
    chunks: ["can", "email", "the", "current", "could", "to"],
    answer: ["can", "email", "the", "current"],
    explanation: "The correct sentence is: 'You can email the current team leader.'",
    koreanExplanation: "현재 팀 리더에게 이메일을 보내시면 됩니다. email은 타동사로 쓰여 뒤에 전치사 없이 목적어(the current team leader)가 바로 옵니다.",
    grammarPoints: "조동사 + 타동사 구조"
  },
  {
    id: "L1-013",
    level: 1,
    context: "Where do we submit the lab report?",
    sentenceTemplate: "You _____ _____ _____ _____ bin.",
    chunks: ["must", "drop", "it in the", "assignment", "must to", "on the"],
    answer: ["must", "drop", "it in the", "assignment"],
    explanation: "The correct sentence is: 'You must drop it in the assignment bin.'",
    koreanExplanation: "과제물 수거함에 보고서를 넣어야 합니다. 'drop A in B' 구문을 이용하며, 조동사 'must' 뒤에 동사원형 'drop'을 씁니다.",
    grammarPoints: "조동사 + 동사원형, drop A in B"
  },
  {
    id: "L1-014",
    level: 1,
    context: "Is the dorm cafeteria serving dinner now?",
    sentenceTemplate: "Yes, they _____ _____ _____ _____.",
    chunks: ["are", "serving", "hot", "meals", "is", "served"],
    answer: ["are", "serving", "hot", "meals"],
    explanation: "The correct sentence is: 'Yes, they are serving hot meals food.'",
    koreanExplanation: "네, 그들은 뜨거운 식사를 서빙하고 있습니다. 복수 주어 'they'에 맞게 진행형 'are serving'을 구성하고, 형용사 'hot'이 'meals'를 수식합니다.",
    grammarPoints: "현재진행형, 형용사-명사 수식"
  },
  {
    id: "L1-015",
    level: 1,
    context: "Can I leave my bag in this locker?",
    sentenceTemplate: "This _____ _____ _____ _____ anyone.",
    chunks: ["locker", "does", "not belong", "to", "belongs", "for"],
    answer: ["locker", "does", "not belong", "to"],
    explanation: "The correct sentence is: 'This locker does not belong to anyone.'",
    koreanExplanation: "이 사물함은 누구의 것도 아닙니다. '~에 속하다'는 'belong to'이며, 부정문 'does not belong to'를 완성합니다.",
    grammarPoints: "일반동사 부정문, belong to 전치사"
  },
  {
    id: "L1-016",
    level: 1,
    context: "Where is the student center?",
    sentenceTemplate: "It _____ _____ _____ _____ the gym.",
    chunks: ["stands", "directly", "across", "from", "standing", "to"],
    answer: ["stands", "directly", "across", "from"],
    explanation: "The correct sentence is: 'It stands directly across from the gym.'",
    koreanExplanation: "그것은 체육관 바로 맞은편에 서 있습니다. 'across from'은 '~의 맞은편에'라는 뜻이며, 부사 'directly'가 이를 강조합니다.",
    grammarPoints: "방향 전치사구 (across from), 부사 위치"
  },
  {
    id: "L1-017",
    level: 1,
    context: "Student A: I want to join the soccer club.",
    sentenceTemplate: "Student B: You _____ _____ _____ _____ online application.",
    chunks: ["need", "to", "fill out", "the", "needs", "filling"],
    answer: ["need", "to", "fill out", "the"],
    explanation: "The correct sentence is: 'You need to fill out the online application.'",
    koreanExplanation: "온라인 신청서를 작성해야 합니다. 'need to + 동사원형'은 '~해야 한다'는 의미이며, 신청서를 작성하다는 'fill out'을 씁니다.",
    grammarPoints: "need to 부정사, 이어동사 fill out"
  },
  {
    id: "L1-018",
    level: 1,
    context: "Why does the library close so early on Saturday?",
    sentenceTemplate: "They _____ _____ _____ _____ the building.",
    chunks: ["have", "to", "deep", "clean", "has", "for"],
    answer: ["have", "to", "deep", "clean"],
    explanation: "The correct sentence is: 'They have to deep clean the building.'",
    koreanExplanation: "그들은 건물 대청소를 해야 합니다. 복수 주어 'They'에 어울리는 의무 표현 'have to'를 사용하고 동사원형 'deep clean'을 결합합니다.",
    grammarPoints: "have to + 동사원형"
  },
  {
    id: "L1-019",
    level: 1,
    context: "How do I get my student ID card?",
    sentenceTemplate: "You _____ _____ _____ _____ registrar's office.",
    chunks: ["should", "visit", "the", "main", "should to", "at the"],
    answer: ["should", "visit", "the", "main"],
    explanation: "The correct sentence is: 'You should visit the main registrar's office.'",
    koreanExplanation: "본 등록처 사무실을 방문하셔야 합니다. 충고 조동사 'should' 다음 동사원형 'visit'과 목적어구 'the main'이 들어갑니다.",
    grammarPoints: "조동사 should"
  },
  {
    id: "L1-020",
    level: 1,
    context: "Does the professor take attendance?",
    sentenceTemplate: "Yes, he _____ _____ _____ _____ of the class.",
    chunks: ["checks", "it", "at the start", "of", "check", "on"],
    answer: ["checks", "it", "at the start", "of"],
    explanation: "The correct sentence is: 'Yes, he checks it at the start of the class.'",
    koreanExplanation: "네, 교수님은 수업 시작 시점에 그것(출석)을 확인합니다. 3인칭 단수 주어 'he'에 맞게 일반동사 'checks'를 쓰고, 시점을 나타내는 구인 'at the start of'를 배치합니다.",
    grammarPoints: "3인칭 단수 일치, 시점 전치사구"
  },

  // ==========================================
  // LEVEL 2 (20 Questions: chunks 5~6, basic connectors, past/future/modal verbs)
  // ==========================================
  {
    id: "L2-001",
    level: 2,
    context: "Why did you submit the history essay late?",
    sentenceTemplate: "I _____ _____ _____ _____ my laptop broke down.",
    chunks: ["could", "not finish", "it", "because", "can", "why"],
    answer: ["could", "not finish", "it", "because"],
    explanation: "The correct sentence is: 'I could not finish it because my laptop broke down.'",
    koreanExplanation: "노트북이 고장 났기 때문에 끝낼 수 없었습니다. 과거의 능력을 부인하는 조동사 'could not' 뒤에 동사원형 'finish'를 쓰고 원인을 이끄는 접속사 'because'를 연결합니다.",
    grammarPoints: "과거 조동사 부정, 원인 접속사 because"
  },
  {
    id: "L2-002",
    level: 2,
    context: "Will the guest speaker arrive before noon?",
    sentenceTemplate: "He _____ _____ _____ _____ the traffic is heavy.",
    chunks: ["might", "be", "a bit late", "if", "be to", "because of"],
    answer: ["might", "be", "a bit late", "if"],
    explanation: "The correct sentence is: 'He might be a bit late if the traffic is heavy.'",
    koreanExplanation: "교통이 혼잡하면 그는 약간 늦을 수도 있습니다. 약한 추측을 나타내는 'might' 뒤에 be동사 원형과 조건절을 나타내는 접속사 'if'를 사용합니다.",
    grammarPoints: "추측 조동사 might, 조건 접속사 if"
  },
  {
    id: "L2-003",
    level: 2,
    context: "Student A: I cannot find my student ID card anywhere.",
    sentenceTemplate: "Student B: You _____ _____ _____ _____ you enter the building.",
    chunks: ["will", "need", "to show it", "before", "needs", "after that"],
    answer: ["will", "need", "to show it", "before"],
    explanation: "The correct sentence is: 'You will need to show it before you enter the building.'",
    koreanExplanation: "건물에 들어가기 전에 신분증을 보여주어야 할 것입니다. 미래 예측을 뜻하는 'will need to' 표현에 시간 접속사 'before'를 결합합니다.",
    grammarPoints: "미래 시제 will, 시간 접속사 before"
  },
  {
    id: "L2-004",
    level: 2,
    context: "Why is the registration system not working?",
    sentenceTemplate: "It _____ _____ _____ _____ too many students logged in.",
    chunks: ["crashed", "suddenly", "after", "so", "crash", "because of"],
    answer: ["crashed", "suddenly", "after", "so"],
    explanation: "The correct sentence is: 'It crashed suddenly after so many students logged in.'",
    koreanExplanation: "그것은 너무 많은 학생들이 로그인한 후에 갑자기 다운되었습니다. 과거 사건에 대해 동사 'crashed'와 부사 'suddenly'를 배치하고 시간 접속사 'after'를 연결합니다.",
    grammarPoints: "과거동사 수식, 시간 접속사 after"
  },
  {
    id: "L2-005",
    level: 2,
    context: "When should we start working on the group presentation?",
    sentenceTemplate: "We _____ _____ _____ _____ we get the topic.",
    chunks: ["should", "meet", "right", "after", "meeting", "before"],
    answer: ["should", "meet", "right", "after"],
    explanation: "The correct sentence is: 'We should meet right after we get the topic.'",
    koreanExplanation: "주제를 받은 직후에 만나야 합니다. 'should meet' 뒤에 시간의 부사구 'right after'(~직후에)를 활용해 문장을 구성합니다.",
    grammarPoints: "조동사 should, 부사구 right after"
  },
  {
    id: "L2-006",
    level: 2,
    context: "Will you attend the astronomy seminar tonight?",
    sentenceTemplate: "No, I _____ _____ _____ _____ my biology quiz.",
    chunks: ["must", "prepare", "for", "tomorrow's", "preparing", "at"],
    answer: ["must", "prepare", "for", "tomorrow's"],
    explanation: "The correct sentence is: 'No, I must prepare for tomorrow's biology quiz.'",
    koreanExplanation: "아니요, 저는 내일 생물 퀴즈를 준비해야 합니다. 의무의 'must' 뒤에 '~를 준비하다'라는 'prepare for' 구문을 씁니다.",
    grammarPoints: "must + prepare for 구문"
  },
  {
    id: "L2-007",
    level: 2,
    context: "Did you buy the biology class materials?",
    sentenceTemplate: "I _____ _____ _____ _____ they were sold out.",
    chunks: ["wanted to", "buy", "them", "but", "wanting", "because"],
    answer: ["wanted to", "buy", "them", "but"],
    explanation: "The correct sentence is: 'I wanted to buy them but they were sold out.'",
    koreanExplanation: "그것들을 사고 싶었지만 매진되었습니다. 과거 사실의 의도('wanted to buy')와 대조를 의미하는 등위접속사 'but'을 사용합니다.",
    grammarPoints: "과거 의도 wanted to, 등위접속사 but"
  },
  {
    id: "L2-008",
    level: 2,
    context: "What are your plans for the winter break?",
    sentenceTemplate: "I _____ _____ _____ _____ a local hospital.",
    chunks: ["plan", "to volunteer", "at", "a", "planning", "on"],
    answer: ["plan", "to volunteer", "at", "a"],
    explanation: "The correct sentence is: 'I plan to volunteer at a local hospital.'",
    koreanExplanation: "저는 지역 병원에서 봉사활동을 할 계획입니다. 'plan to + 동사원형'은 '~할 계획이다'라는 뜻이며 장소를 나타내는 전치사 'at'을 결합합니다.",
    grammarPoints: "plan to 부정사, 장소 전치사 at"
  },
  {
    id: "L2-009",
    level: 2,
    context: "Can we use the study room on the weekend?",
    sentenceTemplate: "You _____ _____ _____ _____ make a reservation.",
    chunks: ["can", "use it", "provided", "you", "could", "unless"],
    answer: ["can", "use it", "provided", "you"],
    explanation: "The correct sentence is: 'You can use it provided you make a reservation.'",
    koreanExplanation: "예약을 하신다면 사용하실 수 있습니다. 'provided (that)'은 만약 ~라면(조건)을 뜻하는 접속사입니다.",
    grammarPoints: "조건 접속사 provided (that)"
  },
  {
    id: "L2-010",
    level: 2,
    context: "Why didn't you buy the campus event ticket?",
    sentenceTemplate: "I _____ _____ _____ _____ the sales ended.",
    chunks: ["did not know", "about", "it", "until", "was not", "before"],
    answer: ["did not know", "about", "it", "until"],
    explanation: "The correct sentence is: 'I did not know about it until the sales ended.'",
    koreanExplanation: "판매가 끝날 때까지 저는 그것에 대해 몰랐습니다. 'not ... until' 구문을 활용해 특정 시점까지 몰랐음을 나타냅니다.",
    grammarPoints: "not ... until 구문"
  },
  {
    id: "L2-011",
    level: 2,
    context: "Are you going to submit the draft tonight?",
    sentenceTemplate: "I _____ _____ _____ _____ checking the guidelines.",
    chunks: ["will", "finish", "the work", "after", "finishing", "before to"],
    answer: ["will", "finish", "the work", "after"],
    explanation: "The correct sentence is: 'I will finish the work after checking the guidelines.'",
    koreanExplanation: "가이드라인을 확인한 후에 작업을 끝마칠 것입니다. 미래의 일을 나타내는 'will finish'와 전치사로 쓰인 'after' 뒤의 동명사('checking') 패턴입니다.",
    grammarPoints: "미래 시제, 전치사 after + 동명사"
  },
  {
    id: "L2-012",
    level: 2,
    context: "Why did you choose this university?",
    sentenceTemplate: "I _____ _____ _____ _____ it has great facilities.",
    chunks: ["decided", "to study", "here", "since", "deciding", "because of"],
    answer: ["decided", "to study", "here", "since"],
    explanation: "The correct sentence is: 'I decided to study here since it has great facilities.'",
    koreanExplanation: "훌륭한 시설을 가지고 있기 때문에 이곳에서 공부하기로 결정했습니다. 'since'는 원인/이유(~이므로)를 나타내는 접속사로 사용되었습니다.",
    grammarPoints: "decide to 부정사, 이유 접속사 since"
  },
  {
    id: "L2-013",
    level: 2,
    context: "Is it okay if I record the lecture today?",
    sentenceTemplate: "You _____ _____ _____ _____ the professor agrees.",
    chunks: ["may", "record", "the audio", "as long as", "maybe", "provided to"],
    answer: ["may", "record", "the audio", "as long as"],
    explanation: "The correct sentence is: 'You may record the audio as long as the professor agrees.'",
    koreanExplanation: "교수님께서 동의하시는 한 녹음을 해도 좋습니다. 허가를 나타내는 조동사 'may'와 조건 접속사인 'as long as'(~하는 한)를 사용합니다.",
    grammarPoints: "허가 조동사 may, 조건 접속사 as long as"
  },
  {
    id: "L2-014",
    level: 2,
    context: "When will the grade reports be released?",
    sentenceTemplate: "They _____ _____ _____ _____ the next week.",
    chunks: ["will be", "sent", "to you", "by", "is", "at"],
    answer: ["will be", "sent", "to you", "by"],
    explanation: "The correct sentence is: 'They will be sent to you by the next week.'",
    koreanExplanation: "그것들은 다음 주까지 당신에게 발송될 것입니다. 미래의 수동 사건을 표현하는 'will be sent'와 완료 기한을 뜻하는 전치사 'by'의 조합입니다.",
    grammarPoints: "미래 수동태, 완료 기한 전치사 by"
  },
  {
    id: "L2-015",
    level: 2,
    context: "How can I improve my academic writing skills?",
    sentenceTemplate: "You _____ _____ _____ _____ you write essays.",
    chunks: ["should", "check", "for errors", "whenever", "should to", "after"],
    answer: ["should", "check", "for errors", "whenever"],
    explanation: "The correct sentence is: 'You should check for errors whenever you write essays.'",
    koreanExplanation: "에세이를 쓸 때마다 오류가 있는지 점검해야 합니다. 충고의 'should'와 '~할 때마다'라는 뜻의 복합관계부사 접속사 'whenever'를 활용합니다.",
    grammarPoints: "조동사 should, 시간 접속사 whenever"
  },
  {
    id: "L2-016",
    level: 2,
    context: "Did you talk to the dormitory manager?",
    sentenceTemplate: "I _____ _____ _____ _____ I went to bed.",
    chunks: ["spoke", "with him", "briefly", "before", "speak", "after that"],
    answer: ["spoke", "with him", "briefly", "before"],
    explanation: "The correct sentence is: 'I spoke with him briefly before I went to bed.'",
    koreanExplanation: "잠자리에 들기 전에 그와 짧게 이야기를 나눴습니다. 과거동사 'spoke'와 부사 'briefly', 그리고 시간 접속사 'before'를 적절히 배치합니다.",
    grammarPoints: "과거시제 동사, 부사 수식, 접속사 before"
  },
  {
    id: "L2-017",
    level: 2,
    context: "Will we get a guide during the science museum tour?",
    sentenceTemplate: "No, we _____ _____ _____ _____ our own.",
    chunks: ["have to", "explore", "the museum", "on", "has to", "by"],
    answer: ["have to", "explore", "the museum", "on"],
    explanation: "The correct sentence is: 'No, we have to explore the museum on our own.'",
    koreanExplanation: "아니요, 우리는 스스로 박물관을 탐방해야 합니다. 'on one's own'은 '스스로, 자력으로'라는 뜻의 중요한 전치사구 표현입니다.",
    grammarPoints: "have to + 동사원형, 숙어 표현 (on one's own)"
  },
  {
    id: "L2-018",
    level: 2,
    context: "Why is the research lab closed today?",
    sentenceTemplate: "They _____ _____ _____ _____ it was under renovation.",
    chunks: ["announced", "last week", "that", "it", "announces", "because of"],
    answer: ["announced", "last week", "that", "it"],
    explanation: "The correct sentence is: 'They announced last week that it was under renovation.'",
    koreanExplanation: "그들은 지난주에 그것이 보수 공사 중이라고 발표했습니다. 과거 동사 'announced'에 명사절을 이끄는 접속사 'that'을 사용해 목적어절을 완성합니다.",
    grammarPoints: "과거 시제, 명사절 접속사 that"
  },
  {
    id: "L2-019",
    level: 2,
    context: "When can we borrow the chemistry equipment?",
    sentenceTemplate: "You _____ _____ _____ _____ you wear safety gear.",
    chunks: ["can", "take", "the tools", "once", "could", "before to"],
    answer: ["can", "take", "the tools", "once"],
    explanation: "The correct sentence is: 'You can take the tools once you wear safety gear.'",
    koreanExplanation: "안전 장비를 착용하면 장비를 가져갈 수 있습니다. 'once'는 일단 ~하면(조건/시간)의 의미를 가진 접속사입니다.",
    grammarPoints: "조동사 can, 부사절 접속사 once"
  },
  {
    id: "L2-020",
    level: 2,
    context: "Why are you staying on campus during the break?",
    sentenceTemplate: "I _____ _____ _____ _____ I have a part-time job.",
    chunks: ["need", "to stay", "here", "because", "needs", "so"],
    answer: ["need", "to stay", "here", "because"],
    explanation: "The correct sentence is: 'I need to stay here because I have a part-time job.'",
    koreanExplanation: "저는 아르바이트가 있기 때문에 여기에 머물러야 합니다. 'need to + 동사원형'과 원인의 접속사 'because'를 연결합니다.",
    grammarPoints: "need to 부정사, 원인 접속사 because"
  },

  // ==========================================
  // LEVEL 3 (20 Questions: chunks 6~7, relative clauses, indirect questions, object clauses)
  // ==========================================
  {
    id: "L3-001",
    level: 3,
    context: "Do you know why the biology professor canceled the class?",
    sentenceTemplate: "The advisor _____ _____ _____ _____ he had an urgent meeting.",
    chunks: ["explained", "to", "the students", "that", "explain", "why", "because of"],
    answer: ["explained", "to", "the students", "that"],
    explanation: "The correct sentence is: 'The advisor explained to the students that he had an urgent meeting.'",
    koreanExplanation: "지도교수님은 학생들에게 긴급 회의가 있어서 그렇다고 설명해 주셨습니다. 'explain to 대상 that절' 구조를 사용하여 문장을 만듭니다.",
    grammarPoints: "explain to sb that절 구조"
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
    grammarPoints: "간접 의문문, 명사절 접속사 if"
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
    grammarPoints: "주격 관계대명사 who, 최상급 표현"
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
    grammarPoints: "관계부사 where"
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
    grammarPoints: "명사절 접속사 that, 시제 일치 (would)"
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
    grammarPoints: "목적격 관계대명사 which, 주어-동사 수 일치"
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
    grammarPoints: "명사절 접속사 whether"
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
    grammarPoints: "목적격 관계대명사 that, 부사 수식"
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
    grammarPoints: "간접 의문문 어순, 숙어 be in charge of"
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
    grammarPoints: "명사절 간접의문문 (why + 주어 + 동사)"
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
    grammarPoints: "주격 관계대명사, 단수 동사 일치"
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
    grammarPoints: "ask + if 명사절, 조동사 + 구동사"
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
    grammarPoints: "주격 관계대명사, 동사원형/to부정사 목적어 (help to protect)"
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
    grammarPoints: "명사절 접속사 that, 단수 대명사 일치 (nobody - has to)"
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
    grammarPoints: "의문형용사 which, be going to 표현"
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
    grammarPoints: "명사절 접속사 that, fail to 부정사"
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
    grammarPoints: "주격 관계대명사, 형용사 전치사구 (responsible for)"
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
    grammarPoints: "관계대명사 선택 (the only + that), 부사 위치"
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
    grammarPoints: "수여동사 ask 구조, 간접의문문 명사절"
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
    grammarPoints: "warn that절, 부사구 삽입"
  },

  // ==========================================
  // LEVEL 4 (20 Questions: chunks 7~8, complex connectors, parentheticals, long noun phrases)
  // ==========================================
  {
    id: "L4-001",
    level: 4,
    context: "Why did you choose to live off-campus this year?",
    sentenceTemplate: "I decided to rent _____ _____ _____ _____ the high dorm fees.",
    chunks: ["an apartment", "outside", "campus", "despite", "although", "in spite", "with"],
    answer: ["an apartment", "outside", "campus", "despite"],
    explanation: "The correct sentence is: 'I decided to rent an apartment outside campus despite the high dorm fees.'",
    koreanExplanation: "기숙사의 높은 요금에도 불구하고 학교 밖에 아파트를 빌리기로 결정했습니다. 양보를 나타내는 전치사 'despite' 뒤에는 명사구(the high dorm fees)가 위치해야 합니다.",
    grammarPoints: "전치사 despite vs. 접속사 although, 명사구 결합"
  },
  {
    id: "L4-002",
    level: 4,
    context: "Can we still enroll in the biology class?",
    sentenceTemplate: "You cannot enroll _____ _____ _____ _____ permission.",
    chunks: ["in the course", "unless", "the instructor", "gives", "to course", "if", "give"],
    answer: ["in the course", "unless", "the instructor", "gives"],
    explanation: "The correct sentence is: 'You cannot enroll in the course unless the instructor gives permission.' (Template context requires matching chunks)",
    koreanExplanation: "강사가 허가를 주지 않는 한 강좌에 등록할 수 없습니다. '~하지 않는 한'을 뜻하는 부사절 접속사 'unless'가 주어와 3인칭 단수 동사 'gives'를 이끕니다.",
    grammarPoints: "enroll in 표현, 접속사 unless"
  },
  {
    id: "L4-003",
    level: 4,
    context: "Why is the school library reducing its hours?",
    sentenceTemplate: "They are closing early _____ _____ _____ _____ cuts.",
    chunks: ["owing to", "significant", "university", "budget", "because", "due", "university's"],
    answer: ["owing to", "significant", "university", "budget"],
    explanation: "The correct sentence is: 'They are closing early owing to significant university budget cuts.'",
    koreanExplanation: "그들은 상당한 대학 예산 감축으로 인해 일찍 문을 닫습니다. 원인을 뜻하는 전치사구 'owing to'(~ 때문에) 뒤에 명사 수식 단어들을 나열합니다.",
    grammarPoints: "이유 전치사구 owing to, 명사 수식 구조"
  },
  {
    id: "L4-004",
    level: 4,
    context: "How did the students react to the tuition increase?",
    sentenceTemplate: "Many students protested _____ _____ _____ _____ the administration.",
    chunks: ["against the policy", "while", "some tried", "to talk with", "during", "although", "to talking"],
    answer: ["against the policy", "while", "some tried", "to talk with"],
    explanation: "The correct sentence is: 'Many students protested against the policy while some tried to talk with the administration.'",
    koreanExplanation: "많은 학생들이 정책에 대항해 시위한 반면, 일부는 대학 행정처와 대화하려고 시도했습니다. 'while'은 대조/반면의 의미를 나타내며, 'try to + 동사원형'을 결합합니다.",
    grammarPoints: "반면 접속사 while, try to 부정사"
  },
  {
    id: "L4-005",
    level: 4,
    context: "Student A: Is the laboratory training mandatory?",
    sentenceTemplate: "Student B: Yes, you cannot perform _____ _____ _____ _____.",
    chunks: ["any experiments", "unless", "you have completed", "the training", "if", "without", "completed"],
    answer: ["any experiments", "unless", "you have completed", "the training"],
    explanation: "The correct sentence is: 'Yes, you cannot perform any experiments unless you have completed the training.'",
    koreanExplanation: "네, 교육을 완료하지 않으면 어떤 실험도 수행할 수 없습니다. 'unless'와 현재완료형 'have completed'를 사용해 조건 상황을 강하게 명시합니다.",
    grammarPoints: "조건 접속사 unless, 현재완료 완료상"
  },
  {
    id: "L4-006",
    level: 4,
    context: "Why was the new course catalog delayed?",
    sentenceTemplate: "The publication was delayed _____ _____ _____ _____ unexpected technical issues.",
    chunks: ["partly", "on account of", "the", "system's", "part", "owing", "system"],
    answer: ["partly", "on account of", "the", "system's"],
    explanation: "The correct sentence is: 'The publication was delayed partly on account of the system's unexpected technical issues.'",
    koreanExplanation: "출판은 부분적으로 시스템의 예기치 않은 기술적 문제 때문에 지연되었습니다. 'on account of'는 '~ 때문에'를 의미하는 전치사구로, 부사 'partly'가 이를 수식합니다.",
    grammarPoints: "이유 전치사구 on account of, 부사 수식"
  },
  {
    id: "L4-007",
    level: 4,
    context: "Which books should we read for the literature seminar?",
    sentenceTemplate: "The professor assigned three novels _____ _____ _____ _____.",
    chunks: ["written by", "famous", "nineteenth-century", "authors", "writing by", "who", "author"],
    answer: ["written by", "famous", "nineteenth-century", "authors"],
    explanation: "The correct sentence is: 'The professor assigned three novels written by famous nineteenth-century authors...'",
    koreanExplanation: "교수님은 19세기 유명 작가들이 쓴 소설 세 권을 과제로 내주셨습니다. 'written by' 과거분사구가 선행 명사인 'novels'를 후치수식합니다.",
    grammarPoints: "과거분사의 명사 후치수식 (written by)"
  },
  {
    id: "L4-008",
    level: 4,
    context: "Why is there a delay in scholarship payments?",
    sentenceTemplate: "The office is processing applications _____ _____ _____ _____ order they _____ _____ _____.",
    chunks: ["strictly", "in the", "exact", "chronological", "strict", "at the", "chronology"],
    answer: ["strictly", "in the", "exact", "chronological"],
    explanation: "The correct sentence is: 'The office is processing applications strictly in the exact chronological order...'",
    koreanExplanation: "사무실에서는 철저하게 신청서가 접수된 순서대로(시간 순으로) 처리하고 있습니다. 부사 'strictly'가 동사를 수식하고, 형용사 'chronological'이 'order'를 꾸밉니다.",
    grammarPoints: "부사 수식, 형용사-명사 조합"
  },
  {
    id: "L4-009",
    level: 4,
    context: "What was the result of the student council election?",
    sentenceTemplate: "The candidate won the election _____ _____ _____ _____ the negative publicity.",
    chunks: ["in spite of", "all the", "criticism", "about", "despite of", "although", "criticize"],
    answer: ["in spite of", "all the", "criticism", "about"],
    explanation: "The correct sentence is: 'The candidate won the election in spite of all the criticism about the negative publicity...'",
    koreanExplanation: "후보는 부정적인 소문에 대한 모든 비판에도 불구하고 선거에서 이겼습니다. 'in spite of'는 'despite'와 같은 전치사구로 뒤에 명사구('all the criticism')가 옵니다.",
    grammarPoints: "양보 전치사구 in spite of, 전치사 about 목적어 수식"
  },
  {
    id: "L4-010",
    level: 4,
    context: "Why did the lecture hall lose electricity?",
    sentenceTemplate: "The power went out _____ _____ _____ _____.",
    chunks: ["just", "as the", "professor", "started", "right", "when to", "starting"],
    answer: ["just", "as the", "professor", "started"],
    explanation: "The correct sentence is: 'The power went out just as the professor started a heavy storm...' (Template syntax matches 'just as')",
    koreanExplanation: "교수가 막 시작하려는 순간에 전기가 나갔습니다. 'just as'는 '~하는 바로 그 순간에'를 뜻하는 시간 부사절 접속사입니다.",
    grammarPoints: "시간 접속사 just as, 과거시제 일치"
  },
  {
    id: "L4-011",
    level: 4,
    context: "Are there any requirements for joining the research team?",
    sentenceTemplate: "Students must have basic knowledge _____ _____ _____ _____ biology.",
    chunks: ["not only", "of chemistry", "but also", "of molecular", "only of", "also", "with molecular"],
    answer: ["not only", "of chemistry", "but also", "of molecular"],
    explanation: "The correct sentence is: 'Students must have basic knowledge not only of chemistry but also of molecular biology...'",
    koreanExplanation: "학생들은 화학뿐만 아니라 분자 생물학에 대한 기본 지식도 가지고 있어야 합니다. 상관접속사 'not only A but also B' 구조가 대등한 전치사구(of chemistry / of molecular)를 연결합니다.",
    grammarPoints: "상관접속사 (not only A but also B), 병렬 구조"
  },
  {
    id: "L4-012",
    level: 4,
    context: "Why did you decide to major in international relations?",
    sentenceTemplate: "I chose it because _____ _____ _____ _____ understanding different cultures.",
    chunks: ["it", "places", "strong", "emphasis on", "place", "emphasize", "strongly"],
    answer: ["it", "places", "strong", "emphasis on"],
    explanation: "The correct sentence is: 'I chose it because it places strong emphasis on understanding different cultures.'",
    koreanExplanation: "그것이 다른 문화를 이해하는 데 강한 강조를 두기 때문에 선택했습니다. 'place emphasis on'(~를 강조하다) 숙어를 사용하며, 'strong'이 명사 'emphasis'를 수식합니다.",
    grammarPoints: "주어-동사 일치, 숙어 place emphasis on"
  },
  {
    id: "L4-013",
    level: 4,
    context: "Is the final exam cumulative?",
    sentenceTemplate: "Yes, the test covers everything _____ _____ _____ _____ the beginning of the semester.",
    chunks: ["taught", "in class", "since", "the very", "teached", "from", "verily"],
    answer: ["taught", "in class", "since", "the very"],
    explanation: "The correct sentence is: 'Yes, the test covers everything taught in class since the very beginning of...'",
    koreanExplanation: "네, 그 시험은 학기 아주 극초반부터 수업 시간에 가르친 모든 것을 다룹니다. 과거분사 'taught'가 'everything'을 뒤에서 꾸미고, 'since the very beginning'에서 'very'는 '바로 그(강조)'의 형용사로 쓰였습니다.",
    grammarPoints: "과거분사 수식, 강조어 very의 형용사 용법"
  },
  {
    id: "L4-014",
    level: 4,
    context: "Why didn't you get the course materials beforehand?",
    sentenceTemplate: "I was busy preparing _____ _____ _____ _____ the midterm exams.",
    chunks: ["for my", "presentation", "as well as", "studying for", "to my", "and", "study for"],
    answer: ["for my", "presentation", "as well as", "studying for"],
    explanation: "The correct sentence is: 'I was busy preparing for my presentation as well as studying for the midterm exams.'",
    koreanExplanation: "저는 중간고사 공부를 하는 것뿐만 아니라 발표를 준비하느라 바빴습니다. 'A as well as B'는 'B뿐만 아니라 A도'를 뜻하며, 분사구문/동명사 'preparing'과 'studying'이 병렬 구조를 이루고 있습니다.",
    grammarPoints: "상관접속사 as well as, 병렬 구조 (preparing - studying)"
  },
  {
    id: "L4-015",
    level: 4,
    context: "How can I apply for the exchange student program?",
    sentenceTemplate: "You must submit your portfolio _____ _____ _____ _____ letters of recommendation.",
    chunks: ["along with", "two", "signed", "academic", "together", "double", "signing"],
    answer: ["along with", "two", "signed", "academic"],
    explanation: "The correct sentence is: 'You must submit your portfolio along with two signed academic letters of recommendation.'",
    koreanExplanation: "두 장의 서명된 교수 추천서와 함께 포트폴리오를 제출해야 합니다. 'along with'는 '~와 함께'를 뜻하는 전치사구이며, 과거분사 'signed'가 뒤의 명사를 수식합니다.",
    grammarPoints: "전치사구 along with, 분사의 형용사적 수식"
  },
  {
    id: "L4-016",
    level: 4,
    context: "Why didn't you register for the seminar?",
    sentenceTemplate: "I could not register _____ _____ _____ _____ the registration window.",
    chunks: ["because of", "a glitch", "that occurred", "during", "because", "which occurring", "in"],
    answer: ["because of", "a glitch", "that occurred", "during"],
    explanation: "The correct sentence is: 'I could not register because of a glitch that occurred during the registration window.'",
    koreanExplanation: "등록 기간 중에 발생한 전산 오류 때문에 등록을 하지 못했습니다. 명사 앞이므로 전치사 'because of'를 쓰고, 'glitch'를 꾸미는 주격 관계절 'that occurred'를 배치합니다.",
    grammarPoints: "because of vs because, 주격 관계대명사, 과거형 동사"
  },
  {
    id: "L4-017",
    level: 4,
    context: "Can the team finish the proposal today?",
    sentenceTemplate: "It is unlikely _____ _____ _____ _____ we receive the approval.",
    chunks: ["that we", "can finish", "it unless", "first", "unless to", "finish", "firstly"],
    answer: ["that we", "can finish", "it unless", "first"],
    explanation: "The correct sentence is: 'It is unlikely that we can finish it unless first we receive the...'",
    koreanExplanation: "먼저 승인을 받지 못하는 한 오늘 제안서를 끝마치기는 어려울 것 같습니다. 가주어-진주어 'It is unlikely that' 구문과 부사절 조건접속사 'unless'의 연동입니다.",
    grammarPoints: "가주어-진주어 구문 (It is ... that), 조건 접속사 unless"
  },
  {
    id: "L4-018",
    level: 4,
    context: "Why did the professor change the grading scale?",
    sentenceTemplate: "The change was made _____ _____ _____ _____ ensure fair evaluation.",
    chunks: ["in order", "to", "help", "students", "for", "to help to", "student"],
    answer: ["in order", "to", "help", "students"],
    explanation: "The correct sentence is: 'The change was made in order to help students ensure fair evaluation.'",
    koreanExplanation: "학생들이 공정한 평가를 보장받을 수 있도록 변경이 가해졌습니다. 목적을 뜻하는 'in order to + 동사원형'을 배치합니다.",
    grammarPoints: "목적 부사구 (in order to), help + 목적어 + 동사원형 구조"
  },
  {
    id: "L4-019",
    level: 4,
    context: "What happens if I miss the chemistry lab orientation?",
    sentenceTemplate: "You will be banned _____ _____ _____ _____ you complete the training.",
    chunks: ["from entering", "the laboratory", "until", "after", "to enter", "since", "after that"],
    answer: ["from entering", "the laboratory", "until", "after"],
    explanation: "The correct sentence is: 'You will be banned from entering the laboratory until after you complete the...'",
    koreanExplanation: "교육을 완료한 이후가 될 때까지 실험실 입장이 금지될 것입니다. 'ban A from B(동명사)' 구문과 복합 접속 표현인 'until after'를 사용합니다.",
    grammarPoints: "구동사 수동태 (be banned from -ing), 접속사 until after"
  },
  {
    id: "L4-020",
    level: 4,
    context: "Why is the university investing in green energy?",
    sentenceTemplate: "They hope to reduce _____ _____ _____ _____ promoting environmental protection.",
    chunks: ["energy consumption", "significantly", "on campus", "while", "consuming", "significant", "during"],
    answer: ["energy consumption", "significantly", "on campus", "while"],
    explanation: "The correct sentence is: 'They hope to reduce energy consumption significantly on campus while promoting environmental...'",
    koreanExplanation: "그들은 환경 보호를 홍보하는 동시에 캠퍼스 내 에너지 소비를 대폭 줄이고자 합니다. 부사 'significantly'의 위치와 대조/동시동작을 뜻하는 분사구문 접속사 'while'의 연결을 묻습니다.",
    grammarPoints: "명사 목적어구, 부사 수식, 접속사 + 분사구문 (while -ing)"
  },

  // ==========================================
  // LEVEL 5 (20 Questions: chunks 8~10, complex academic/campus syntax, modifiers, parallel structures, distractors)
  // ==========================================
  {
    id: "L5-001",
    level: 5,
    context: "How did the researcher gather the data for the report?",
    sentenceTemplate: "The researcher gathered data by _____ _____ _____ _____ _____ willing to participate.",
    chunks: ["interviewing", "students", "enrolled", "in classes", "who were", "interview", "classes of", "enroll", "was"],
    answer: ["interviewing", "students", "enrolled", "in classes", "who were"],
    explanation: "The correct sentence is: 'The researcher gathered data by interviewing students enrolled in classes who were willing to participate.'",
    koreanExplanation: "연구원은 수업에 등록되어 있으며 기꺼이 참여하려는 학생들을 인터뷰함으로써 데이터를 수집했습니다. 전치사 'by' 뒤의 동명사('interviewing')와, 명사 'students'를 수식하는 과거분사('enrolled') 및 주격 관계절이 복합적으로 얽힌 고급 구조입니다.",
    grammarPoints: "수단 전치사 by + 동명사, 과거분사의 명사 수식, 관계대명사의 제한적 용법"
  },
  {
    id: "L5-002",
    level: 5,
    context: "Why did the department head reject the curriculum proposal?",
    sentenceTemplate: "He argued that the proposal _____ _____ _____ _____ _____ since it was poorly written.",
    chunks: ["lacked", "empirical", "evidence", "supporting", "its claims", "lack", "claim", "of supporting", "since that", "to lack"],
    answer: ["lacked", "empirical", "evidence", "supporting", "its claims"],
    explanation: "The correct sentence is: 'He argued that the proposal lacked empirical evidence supporting its claims...'",
    koreanExplanation: "그는 제안서가 그 주장을 뒷받침하는 실증적 증거가 부족하다고 주장했습니다. 명사 'evidence'를 현재분사구 'supporting its claims'가 뒤에서 수식하는 세련된 문장 구조를 가집니다.",
    grammarPoints: "동사 시제 일치 (lacked), 현재분사의 명사 후치수식"
  },
  {
    id: "L5-003",
    level: 5,
    context: "Why is the study of biodiversity so crucial?",
    sentenceTemplate: "It helps us understand _____ _____ _____ _____ _____ in turn affects preservation.",
    chunks: ["how", "ecosystems", "respond to", "climate change", "which", "responses", "environmental", "responds", "how to", "in where"],
    answer: ["how", "ecosystems", "respond to", "climate change", "which"],
    explanation: "The correct sentence is: 'It helps us understand how ecosystems respond to climate change, which in turn...'",
    koreanExplanation: "그것은 생태계가 기후 변화에 어떻게 반응하는지 이해하도록 도우며, 이는 결국 환경 보존에 영향을 줍니다. 'understand'의 목적어 간접의문문 명사절('how + 주어 + 동사')과 계속적 용법의 관계대명사 'which'의 연결입니다.",
    grammarPoints: "간접의문문 명사절, 계속적 용법의 관계대명사, 구동사 respond to"
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
    grammarPoints: "현재분사 형용사, 목적 부사구 (so as to)"
  },
  {
    id: "L5-005",
    level: 5,
    context: "Why does the physics teacher insist on daily lab reports?",
    sentenceTemplate: "Writing reports helps students _____ _____ _____ _____ _____ improving skills.",
    chunks: ["internalize", "complex", "scientific", "concepts", "thereby", "internalizing", "concept", "which", "there", "to internalizing"],
    answer: ["internalize", "complex", "scientific", "concepts", "thereby"],
    explanation: "The correct sentence is: 'Writing reports helps students internalize complex scientific concepts, thereby improving...'",
    koreanExplanation: "보고서를 작성하는 것은 학생들이 복잡한 과학적 개념을 내면화하도록 도우며, 그에 따라 실습 역량을 향상시킵니다. 'help + 목적어 + 동사원형(internalize)'과 부사 'thereby'(그로 인해)를 활용한 분사구문 유도 문장입니다.",
    grammarPoints: "help 준사역동사, 부사 thereby"
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
    grammarPoints: "분사구문 (pointing out), 명사절 접속사 that, fail to 부정사"
  },
  {
    id: "L5-007",
    level: 5,
    context: "Why was the student disqualified from the engineering competition?",
    sentenceTemplate: "It was discovered that the design _____ _____ _____ _____ _____.",
    chunks: ["copied", "another", "student's", "patented", "technology", "copying", "patents", "other", "patent", "technological"],
    answer: ["copied", "another", "student's", "patented", "technology"],
    explanation: "The correct sentence is: 'It was discovered that the design copied another student's patented technology...'",
    koreanExplanation: "그 디자인이 다른 학생의 특허 기술을 복제했음이 드러났습니다. 명사절 'that' 안의 동사 과거형 'copied'와 명사구를 이루는 'patented technology'(특허받은 기술) 구조입니다.",
    grammarPoints: "명사절 내의 동사 과거형, 분사 수식"
  },
  {
    id: "L5-008",
    level: 5,
    context: "What was the main topic of the sociology panel discussion?",
    sentenceTemplate: "The speakers debated _____ _____ _____ _____ economic instability.",
    chunks: ["whether", "rising", "housing costs", "contribute to", "contributing", "that", "contribute", "costs of", "housed", "to contribute"],
    answer: ["whether", "rising", "housing costs", "contribute to"],
    explanation: "The correct sentence is: 'The speakers debated whether rising housing costs contribute to economic instability...'",
    koreanExplanation: "연사들은 치솟는 주거비가 경제적 불안정을 초래하는지 여부에 대해 토론했습니다. 'debate whether'(~인지 여부를 토론하다)와 현재분사 'rising', 그리고 수 일치 복수 동사 'contribute to'를 정렬합니다.",
    grammarPoints: "명사절 접속사 whether, 현재분사의 수식, 주어-동사 수 일치 (costs - contribute)"
  },
  {
    id: "L5-009",
    level: 5,
    context: "Why are you taking a statistics course this term?",
    sentenceTemplate: "I need to learn _____ _____ _____ _____ my survey data.",
    chunks: ["how to", "analyze", "the results", "obtained from", "obtaining", "how", "analysis", "from obtained", "for analyzing", "obtain"],
    answer: ["how to", "analyze", "the results", "obtained from"],
    explanation: "The correct sentence is: 'I need to learn how to analyze the results obtained from my survey data...'",
    koreanExplanation: "저는 설문 데이터로부터 얻은 결과를 분석하는 방법을 배워야 합니다. 'how to + 동사원형'과 명사 'the results'를 뒤에서 꾸미는 과거분사구 'obtained from'의 정렬을 묻습니다.",
    grammarPoints: "의문사 + to부정사 구문, 과거분사 후치수식 (obtained from)"
  },
  {
    id: "L5-010",
    level: 5,
    context: "Why did the administration implement the new parking rules?",
    sentenceTemplate: "They aimed to address _____ _____ _____ _____ _____ complaints.",
    chunks: ["growing", "concerns", "regarding", "limited", "parking spots", "grow", "concern", "regard", "limits", "spots of"],
    answer: ["growing", "concerns", "regarding", "limited", "parking spots"],
    explanation: "The correct sentence is: 'They aimed to address growing concerns regarding limited parking spots complains...'",
    koreanExplanation: "그들은 부족한 주차 공간과 관련해 커지는 우려를 해결하고자 했습니다. 현재분사 'growing', 전치사 'regarding'(~에 관한), 과거분사 'limited'가 차례로 명사를 수식하는 복합 명사구 구조입니다.",
    grammarPoints: "현재분사/과거분사의 전치 수식, 전치사 regarding"
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
    grammarPoints: "focus on -ing, 병렬 구조 (presenting - making), rather than"
  },
  {
    id: "L5-012",
    level: 5,
    context: "Did the archaeology department locate the ancient ruins?",
    sentenceTemplate: "The excavation team discovered _____ _____ _____ _____ thousands of years ago.",
    chunks: ["the remains of", "a settlement", "dating", "back to", "remain", "settled", "date", "to dating", "which dating", "of remain"],
    answer: ["the remains of", "a settlement", "dating", "back to"],
    explanation: "The correct sentence is: 'The excavation team discovered the remains of a settlement dating back to...'",
    koreanExplanation: "발굴팀은 수천 년 전으로 거슬러 올라가는 정착지의 유적을 발견했습니다. 명사구 'the remains of a settlement'와 이를 수식하는 현재분사구 'dating back to'의 자연스러운 결합을 묻습니다.",
    grammarPoints: "명사 remains의 쓰임, 현재분사구의 후치수식 (dating back to)"
  },
  {
    id: "L5-013",
    level: 5,
    context: "Why is the geology department buying new equipment?",
    sentenceTemplate: "It is designed to measure _____ _____ _____ _____ seismological activity.",
    chunks: ["the slightest", "vibrations", "caused by", "recent", "slight", "vibrate", "causing", "by caused", "recent of", "vibrating"],
    answer: ["the slightest", "vibrations", "caused by", "recent"],
    explanation: "The correct sentence is: 'It is designed to measure the slightest vibrations caused by recent seismological activity...'",
    koreanExplanation: "그것은 최근 지진 활동에 의해 발생하는 가장 미세한 진동을 측정하도록 설계되었습니다. 최상급 'the slightest'와 명사를 뒤에서 꾸미는 'caused by' 수식 구조입니다.",
    grammarPoints: "형용사 최상급, 과거분사 후치수식 (caused by)"
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
    grammarPoints: "과거 시제 부정문, 목적격 관계대명사 생략 구조, 구동사 put A into B"
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
    grammarPoints: "과거분사 수식, 전치사 of + 동명사"
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
    grammarPoints: "주어-동사 수 일치, fail to 부정사, 비교 원급 표현 (the same)"
  },
  {
    id: "L5-017",
    level: 5,
    context: "Why did you choose this complex research topic?",
    sentenceTemplate: "I wanted to investigate _____ _____ _____ _____ _____ has puzzled experts.",
    chunks: ["the underlying", "causes of", "economic", "recession", "which", "cause", "economy", "recess", "whose", "of causes"],
    answer: ["the underlying", "causes of", "economic", "recession", "which"],
    explanation: "The correct sentence is: 'I wanted to investigate the underlying causes of economic recession, which has puzzled experts...'",
    koreanExplanation: "저는 경제 침체의 근본적인 원인을 조사하고 싶었는데, 이는 전문가들을 당황하게 만들어 왔습니다. 현재분사가 형용사화된 'underlying'(근본적인)과 계속적 관계대명사 'which'를 연결하는 고급 구문입니다.",
    grammarPoints: "현재분사의 형용사적 용법, 계속적 관계대명사"
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
    grammarPoints: "간접의문문 어순, 부사+분사+형용사+명사 결합구조"
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
    grammarPoints: "balance A with B 구문, 동명사 주어와 단수 동사 일치 (Balancing - requires)"
  },
  {
    id: "L5-020",
    level: 5,
    context: "Why is the political science department canceling the seminar?",
    sentenceTemplate: "They announced the cancellation _____ _____ _____ _____ guest speaker who was scheduled.",
    chunks: ["due to", "the sudden", "illness of", "the", "due", "ill", "suddenly", "because", "owing", "illness"],
    answer: ["due to", "the sudden", "illness of", "the"],
    explanation: "The correct sentence is: 'They announced the cancellation due to the sudden illness of the guest speaker who was...'",
    koreanExplanation: "초청 연사의 갑작스러운 질병 때문에 취소를 발표했습니다. 명사구 앞이므로 이유 전치사 'due to'를 쓰고, 명사를 꾸미는 형용사 'sudden'과 소유격을 나타내는 'illness of'를 결합합니다.",
    grammarPoints: "이유 전치사 due to, 명사구 수식 어순"
  }
];
