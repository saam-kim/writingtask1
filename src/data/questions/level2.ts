import type { Question } from '../../types/question';

export const level2Questions: Question[] = [
  {
    id: "L2-001",
    level: 2,
    context: "Why did you submit the history essay late?",
    sentenceTemplate: "I _____ _____ _____ _____ my laptop broke down.",
    chunks: ["could", "not finish", "it", "because", "can", "why"],
    answer: ["could", "not finish", "it", "because"],
    explanation: "The correct sentence is: 'I could not finish it because my laptop broke down.'",
    koreanExplanation: "노트북이 고장 났기 때문에 끝낼 수 없었습니다. 과거의 능력을 부인하는 조동사 'could not' 뒤에 동사원형 'finish'를 쓰고 원인을 이끄는 접속사 'because'를 연결합니다.",
    grammarPoints: "과거 조동사 부정, 원인 접속사 because",
    paraphrases: [
      "Due to my computer malfunctioning, I was unable to complete the assignment.",
      "I failed to turn it in on time as my laptop crashed."
    ]
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
    grammarPoints: "추측 조동사 might, 조건 접속사 if",
    paraphrases: [
      "Should there be heavy traffic, his arrival could be slightly delayed.",
      "He may experience a delay in case road conditions are congested."
    ]
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
    grammarPoints: "미래 시제 will, 시간 접속사 before",
    paraphrases: [
      "Presenting your ID card is required prior to stepping inside.",
      "You must have your card ready to present upon entry."
    ]
  },
  {
    id: "L2-004",
    level: 2,
    context: "Why is the registration system not working?",
    sentenceTemplate: "It _____ _____ _____ _____ students logged in.",
    chunks: ["crashed", "because", "so", "many", "crash", "after", "too"],
    answer: ["crashed", "because", "so", "many"],
    explanation: "The correct sentence is: 'It crashed because so many students logged in.'",
    koreanExplanation: "너무 많은 학생들이 로그인했기 때문에 그것은 다운되었습니다. 원인 접속사 'because'와 'so many' 수식을 활용합니다.",
    grammarPoints: "과거동사 수식, 원인의 접속사 because, 형용사 수식",
    paraphrases: [
      "A sudden server crash occurred when student traffic spiked.",
      "It went down unexpectedly because a massive number of users logged on."
    ]
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
    grammarPoints: "조동사 should, 부사구 right after",
    paraphrases: [
      "Let's gather immediately once our presentation topic is assigned.",
      "We ought to assemble as soon as we receive the theme."
    ]
  },
  {
    id: "L2-006",
    level: 2,
    context: "Will you attend the astronomy seminar tonight?",
    sentenceTemplate: "No, I _____ _____ _____ _____ biology quiz.",
    chunks: ["must", "prepare", "for", "tomorrow's", "preparing", "at"],
    answer: ["must", "prepare", "for", "tomorrow's"],
    explanation: "The correct sentence is: 'No, I must prepare for tomorrow's biology quiz.'",
    koreanExplanation: "아니요, 저는 내일 생물 퀴즈를 준비해야 합니다. 의무의 'must' 뒤에 '~를 준비하다'라는 'prepare for' 구문을 씁니다.",
    grammarPoints: "must + prepare for 구문",
    paraphrases: [
      "I have to study for my upcoming biology test instead.",
      "No, preparing for my biology quiz tomorrow is my priority tonight."
    ]
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
    grammarPoints: "과거 의도 wanted to, 등위접속사 but",
    paraphrases: [
      "Although I intended to purchase the materials, stock had already run out.",
      "I attempted to get them, but they were no longer available."
    ]
  },
  {
    id: "L2-008",
    level: 2,
    context: "What are your plans for the winter break?",
    sentenceTemplate: "I _____ _____ _____ _____ local hospital.",
    chunks: ["plan", "to volunteer", "at", "a", "planning", "on"],
    answer: ["plan", "to volunteer", "at", "a"],
    explanation: "The correct sentence is: 'I plan to volunteer at a local hospital.'",
    koreanExplanation: "저는 지역 병원에서 봉사활동을 할 계획입니다. 'plan to + 동사원형'은 '~할 계획이다'라는 뜻이며 장소를 나타내는 전치사 'at'을 결합합니다.",
    grammarPoints: "plan to 부정사, 장소 전치사 at",
    paraphrases: [
      "My intention is to do community service at a nearby hospital during the break.",
      "I am organizing to work as a volunteer in a local clinic."
    ]
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
    grammarPoints: "조건 접속사 provided (that)",
    paraphrases: [
      "Access is granted only if you book the room beforehand.",
      "The study room remains open to you on the condition that you reserve it."
    ]
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
    grammarPoints: "not ... until 구문",
    paraphrases: [
      "Only after ticket sales closed did I become aware of the event.",
      "I was completely oblivious to the ticket release until they were sold out."
    ]
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
    grammarPoints: "미래 시제, 전치사 after + 동명사",
    paraphrases: [
      "I intend to complete the draft once I review the instructions.",
      "After consulting the rubric, I will finalize my work."
    ]
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
    grammarPoints: "decide to 부정사, 이유 접속사 since",
    paraphrases: [
      "The outstanding campus infrastructure convinced me to enroll here.",
      "I picked this college mainly because its equipment is top-notch."
    ]
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
    grammarPoints: "허가 조동사 may, 조건 접속사 as long as",
    paraphrases: [
      "Audio recording is permitted, provided the instructor gives consent.",
      "You are allowed to tape the class if the professor has no objections."
    ]
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
    grammarPoints: "미래 수동태, 완료 기한 전치사 by",
    paraphrases: [
      "You should receive your grades no later than next week.",
      "Your report cards are scheduled to arrive by next week."
    ]
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
    grammarPoints: "조동사 should, 시간 접속사 whenever",
    paraphrases: [
      "Proofreading for grammar mistakes every time you write is highly recommended.",
      "Ensure you review your writing for errors each time you compose an essay."
    ]
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
    grammarPoints: "과거시제 동사, 부사 수식, 접속사 before",
    paraphrases: [
      "Prior to sleeping, I had a short conversation with the dorm supervisor.",
      "I managed to have a quick chat with him before calling it a night."
    ]
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
    grammarPoints: "have to + 동사원형, 숙어 표현 (on our own)",
    paraphrases: [
      "No, we will be touring the exhibits independently without a guide.",
      "Unfortunately, we are required to navigate the science center by ourselves."
    ]
  },
  {
    id: "L2-018",
    level: 2,
    context: "Why is the research lab closed today?",
    sentenceTemplate: "They _____ _____ _____ _____ was under renovation.",
    chunks: ["announced", "last week", "that", "it", "announces", "because of"],
    answer: ["announced", "last week", "that", "it"],
    explanation: "The correct sentence is: 'They announced last week that it was under renovation.'",
    koreanExplanation: "그들은 지난주에 그것이 보수 공사 중이라고 발표했습니다. 과거 동사 'announced'에 명사절을 이끄는 접속사 'that'을 사용해 목적어절을 완성합니다.",
    grammarPoints: "과거 시제, 명사절 접속사 that",
    paraphrases: [
      "A notice was released last week stating the lab would undergo remodeling.",
      "Last week, they shared news regarding the lab's temporary closure for maintenance."
    ]
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
    grammarPoints: "조동사 can, 부사절 접속사 once",
    paraphrases: [
      "The equipment will be released to you as soon as you put on safety protection.",
      "Assuming you are wearing proper gear, you are permitted to borrow the tools."
    ]
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
    grammarPoints: "need to 부정사, 원인 접속사 because",
    paraphrases: [
      "I am remaining on campus over the break due to employment commitments.",
      "Since I have a part-time shift, staying in the dorms is necessary for me."
    ]
  },
  // ==========================================
  // ADDED L2 QUESTIONS (L2-021 ~ L2-060)
  // ==========================================
  {
    id: "L2-021",
    level: 2,
    context: "Student A: I submitted the sociology paper late.",
    sentenceTemplate: "Student B: You _____ _____ _____ _____ you talk to the professor.",
    chunks: ["will", "receive", "a penalty", "unless", "would", "if"],
    answer: ["will", "receive", "a penalty", "unless"],
    koreanExplanation: "교수님과 이야기하지 않는 한 벌점을 받게 될 것입니다. '~하지 않는 한'을 뜻하는 조건 부사절 'unless'와 미래 'will'을 엮습니다.",
    grammarPoints: "unless 부사절 접속사, 미래 시제 will",
    paraphrases: [
      "A score deduction is likely unless you explain the situation to the professor.",
      "You will get penalized if you do not consult the instructor."
    ]
  },
  {
    id: "L2-022",
    level: 2,
    context: "Student A: When can we print the color slides?",
    sentenceTemplate: "Student B: You _____ _____ _____ _____ before the lab closes.",
    chunks: ["should", "do", "it", "well", "should to", "after"],
    answer: ["should", "do", "it", "well"],
    explanation: "The correct sentence is: 'You should do it well before the lab closes.'",
    koreanExplanation: "실험실이 닫히기 훨씬 전에 그것을 인쇄해야 합니다. 'well before'는 '~하기 훨씬 전에'라는 강조의 시간 부사구입니다.",
    grammarPoints: "조동사 should, 시간 부사구 well before",
    paraphrases: [
      "It is best to complete printing long before the laboratory shuts down.",
      "You ought to finish it prior to the lab closing hour."
    ]
  },
  {
    id: "L2-023",
    level: 2,
    context: "Student A: Why didn't you attend the orientation?",
    sentenceTemplate: "Student B: I _____ _____ _____ _____ I was feeling unwell.",
    chunks: ["could", "not attend", "it", "because", "can", "as well"],
    answer: ["could", "not attend", "it", "because"],
    koreanExplanation: "몸이 안 좋았기 때문에 참석할 수 없었습니다. 과거의 불가능을 의미하는 'could not'과 인과의 접속사 'because'를 연결합니다.",
    grammarPoints: "과거 조동사 부정, 원인의 because",
    paraphrases: [
      "I was absent from the session due to a minor health issue.",
      "Because of physical discomfort, I failed to go to orientation."
    ]
  },
  {
    id: "L2-024",
    level: 2,
    context: "Student A: Will the library open during the vacation?",
    sentenceTemplate: "Student B: Yes, it _____ _____ _____ _____ we check the schedule.",
    chunks: ["will", "remain", "open", "provided", "would", "until"],
    answer: ["will", "remain", "open", "provided"],
    koreanExplanation: "네, 일정을 확인한다는 조건 하에 계속 열려 있을 것입니다. 'provided (that)'은 만약 ~라면의 뜻을 가진 조건 접속사입니다.",
    grammarPoints: "조건 접속사 provided (that), 미래 remain open",
    paraphrases: [
      "Yes, it stays accessible assuming we verify the calendar.",
      "The library keeps operating on the condition that we follow the schedule."
    ]
  },
  {
    id: "L2-025",
    level: 2,
    context: "Student A: Why are you rushing to the hall?",
    sentenceTemplate: "Student B: The lecture _____ _____ _____ _____ I get there late.",
    chunks: ["will", "start", "soon", "if", "would", "unless"],
    answer: ["will", "start", "soon", "if"],
    koreanExplanation: "만약 내가 늦게 도착한다면 강의가 곧 시작되어 버릴 것입니다. 'will'과 조건절 'if'가 결합된 1차 조건문 구조입니다.",
    grammarPoints: "조건 부사절 if, 미래 시제",
    paraphrases: [
      "Class will begin shortly if I do not arrive quickly.",
      "If I am delayed, the lecture might start before I sit down."
    ]
  },
  {
    id: "L2-026",
    level: 2,
    context: "Student A: Can we borrow laptops from the desk?",
    sentenceTemplate: "Student B: You _____ _____ _____ _____ they are all taken.",
    chunks: ["cannot", "borrow", "them", "if", "can", "unless"],
    answer: ["cannot", "borrow", "them", "if"],
    koreanExplanation: "만약 이미 다 대여되었다면 노트북을 빌릴 수 없습니다. 부정의 조동사 'cannot'과 조건 접속사 'if'의 조합입니다.",
    grammarPoints: "조동사 부정, 조건 접속사 if",
    paraphrases: [
      "Laptop rental is unavailable if they are currently checked out.",
      "In case all units are in use, you won't get one."
    ]
  },
  {
    id: "L2-027",
    level: 2,
    context: "Student A: When should we finalize the presentation?",
    sentenceTemplate: "Student B: We _____ _____ _____ _____ the slide designs are finished.",
    chunks: ["should", "do", "it", "after", "should to", "before"],
    answer: ["should", "do", "it", "after"],
    koreanExplanation: "슬라이드 디자인이 완료된 후에 최종 마무리해야 합니다. 조동사 'should' 뒤에 시간 접속사 'after'를 덧붙여 선후 관계를 표현합니다.",
    grammarPoints: "조동사 should, 시간 접속사 after",
    paraphrases: [
      "Once the slides are ready, we should complete the final edit.",
      "It is ideal to conclude our work after finishing slide drafts."
    ]
  },
  {
    id: "L2-028",
    level: 2,
    context: "Student A: Did you contact the registrar?",
    sentenceTemplate: "Student B: Yes, I _____ _____ _____ _____ I left the library.",
    chunks: ["called", "them", "right", "before", "call", "after that"],
    answer: ["called", "them", "right", "before"],
    koreanExplanation: "네, 도서관을 떠나기 직전에 그들에게 전화를 걸었습니다. 시간 부사구 'right before'(~하기 바로 전에)가 과거동사 'called'와 쓰였습니다.",
    grammarPoints: "과거 시제, 부사구 right before",
    paraphrases: [
      "Indeed, I phoned the office immediately prior to leaving.",
      "Yes, just before stepping out of the library, I contacted them."
    ]
  },
  {
    id: "L2-029",
    level: 2,
    context: "Student A: Can we register for the class tomorrow?",
    sentenceTemplate: "Student B: Yes, you _____ _____ _____ _____ system opens.",
    chunks: ["can", "sign up", "once", "the", "could", "before to"],
    answer: ["can", "sign up", "once", "the"],
    explanation: "The correct sentence is: 'Yes, you can sign up once the system opens.'",
    koreanExplanation: "네, 시스템이 일단 열리면 등록할 수 있습니다. 'once'는 시간/조건 부사절 접속사로 '일단 ~하면'을 뜻합니다.",
    grammarPoints: "조동사 can, 시간 접속사 once",
    paraphrases: [
      "Enrollment becomes possible as soon as the site opens.",
      "Yes, you are allowed to register the moment the portal is active."
    ]
  },
  {
    id: "L2-030",
    level: 2,
    context: "Student A: Did you find your science notes?",
    sentenceTemplate: "Student B: I _____ _____ _____ _____ they were under my desk.",
    chunks: ["finally", "found", "them", "although", "find", "because"],
    answer: ["finally", "found", "them", "although"],
    explanation: "The correct sentence is: 'I finally found them although they were under my desk.'",
    koreanExplanation: "책상 밑에 있었음에도 불구하고 마침내 그것들을 찾았습니다. 과거동사 'found'와 양보 접속사 'although'를 결합합니다.",
    grammarPoints: "부사 수식, 과거시제, 양보 접속사 although",
    paraphrases: [
      "After checking the entire room, I eventually located them.",
      "I managed to recover my notes once I looked through the room."
    ]
  },
  {
    id: "L2-031",
    level: 2,
    context: "Student A: Will you volunteer for the campus cleanup?",
    sentenceTemplate: "Student B: I _____ _____ _____ _____ my exams are over.",
    chunks: ["will", "participate", "if", "all", "shall", "participating"],
    answer: ["will", "participate", "if", "all"],
    koreanExplanation: "제 시험들이 모두 끝난다면 기꺼이 동참하겠습니다. 미래 계획 'will'과 조건의 접속사 'if'가 쓰인 부사절의 결합입니다.",
    grammarPoints: "미래 시제, 조건 부사절 if",
    paraphrases: [
      "I will join the team on the condition that my finals are finished.",
      "Assuming I have finished my exams, I'll definitely volunteer."
    ]
  },
  {
    id: "L2-032",
    level: 2,
    context: "Student A: Why did you stay up so late?",
    sentenceTemplate: "Student B: I _____ _____ _____ _____ finish the physics project.",
    chunks: ["had", "to", "study", "to", "has", "studying"],
    answer: ["had", "to", "study", "to"],
    koreanExplanation: "물리 프로젝트를 끝마치기 위해 공부해야만 했습니다. 과거의 의무 표현 'had to' 뒤에 목적의 to부정사('to finish')가 옵니다.",
    grammarPoints: "과거 의무 had to, 목적의 to부정사",
    paraphrases: [
      "Completing the physics lab required me to stay up and work.",
      "I was forced to study late in order to finalize the project."
    ]
  },
  {
    id: "L2-033",
    level: 2,
    context: "Student A: Can I talk to the dean now?",
    sentenceTemplate: "Student B: You _____ _____ _____ _____ she is in a meeting.",
    chunks: ["cannot", "meet", "her", "since", "can", "because of"],
    answer: ["cannot", "meet", "her", "since"],
    koreanExplanation: "그녀가 회의 중이기 때문에 만나실 수 없습니다. 'since'는 '~이기 때문에'라는 원인의 접속사로 쓰였습니다.",
    grammarPoints: "조동사 부정, 원인 접속사 since",
    paraphrases: [
      "She is unavailable at the moment because a meeting is underway.",
      "Since she is currently attending a conference, meeting her is impossible."
    ]
  },
  {
    id: "L2-034",
    level: 2,
    context: "Student A: When will they announce the winner?",
    sentenceTemplate: "Student B: They _____ _____ _____ _____ the grades are processed.",
    chunks: ["will", "announce", "it", "after", "shall", "announces"],
    answer: ["will", "announce", "it", "after"],
    koreanExplanation: "성적이 처리된 후에 발표가 날 것입니다. 미래 'will' 동사원형과 시간 접속사 'after'의 조합입니다.",
    grammarPoints: "미래 시제, 시간 접속사 after",
    paraphrases: [
      "Once grading is complete, the announcements will follow.",
      "They will share the results as soon as grades are finalized."
    ]
  },
  {
    id: "L2-035",
    level: 2,
    context: "Student A: Did you submit the lab results?",
    sentenceTemplate: "Student B: I _____ _____ _____ _____ before the deadline passed.",
    chunks: ["uploaded", "them", "online", "just", "upload", "on"],
    answer: ["uploaded", "them", "online", "just"], // template has "before" after the slots.
    koreanExplanation: "제출 마감 시간이 지나기 직전에 온라인으로 그것들을 업로드했습니다. 과거형 'uploaded'와 장소 부사 'online'을 배치합니다.",
    grammarPoints: "과거 시제 동사, 부사 결합",
    paraphrases: [
      "I submitted the digital files right before the time ran out.",
      "Just before the cutoff, I successfully uploaded the reports."
    ]
  },
  {
    id: "L2-036",
    level: 2,
    context: "Student A: Can we start the group research now?",
    sentenceTemplate: "Student B: We _____ _____ _____ _____ advisor approves.",
    chunks: ["must", "wait", "until", "our", "must to", "waiting"],
    answer: ["must", "wait", "until", "our"],
    explanation: "The correct sentence is: 'We must wait until our advisor approves.'",
    koreanExplanation: "지도 교수님이 승인해 주실 때까지 기다려야 합니다. 'must wait until' 구절을 사용하여 시점의 종결 조건을 명시합니다.",
    grammarPoints: "조동사 must, 시간 접속사/전치사 until",
    paraphrases: [
      "No research can begin prior to receiving the advisor's consent.",
      "We are required to hold off until the professor signs the form."
    ]
  },
  {
    id: "L2-037",
    level: 2,
    context: "Student A: Is the cafeteria closed today?",
    sentenceTemplate: "Student B: Yes, they _____ _____ _____ _____ they renovate the kitchen.",
    chunks: ["will", "stay", "closed", "while", "would", "closed to"],
    answer: ["will", "stay", "closed", "while"],
    koreanExplanation: "네, 부엌을 리모델링하는 동안 계속 닫혀 있을 것입니다. 'stay + 형용사' 구조에 진행 기간을 뜻하는 'while'을 연결합니다.",
    grammarPoints: "stay + 형용사 보어, 기간 접속사 while",
    paraphrases: [
      "They are keeping the doors shut during kitchen remodeling.",
      "It will remain closed as they work on kitchen upgrades."
    ]
  },
  {
    id: "L2-038",
    level: 2,
    context: "Student A: Did you study chemistry in high school?",
    sentenceTemplate: "Student B: I _____ _____ _____ _____ I entered this college.",
    chunks: ["never", "studied", "it", "before", "study", "after"],
    answer: ["never", "studied", "it", "before"],
    koreanExplanation: "이 대학에 들어오기 전에는 화학을 한 번도 공부해 본 적이 없습니다. 과거 이전을 표현하는 'never studied'에 시간의 'before'를 결합합니다.",
    grammarPoints: "부정 빈도부사, 과거시제, 시간 접속사 before",
    paraphrases: [
      "Prior to my college enrollment, chemistry was completely new to me.",
      "I had zero experience in chemistry before joining this university."
    ]
  },
  {
    id: "L2-039",
    level: 2,
    context: "Student A: Will we have another quiz soon?",
    sentenceTemplate: "Student B: The professor _____ _____ _____ _____ we finish chapter four.",
    chunks: ["might", "give", "one", "after", "give to", "before to"],
    answer: ["might", "give", "one", "after"],
    koreanExplanation: "우리가 4장을 끝마친 후에 교수님이 퀴즈를 하나 더 내실 수도 있습니다. 추측의 조동사 'might'와 시간 접속사 'after'의 매칭입니다.",
    grammarPoints: "추측 조동사 might, 시간 접속사 after",
    paraphrases: [
      "We could expect a test once we complete the fourth chapter.",
      "An upcoming quiz is likely scheduled after the next chapter review."
    ]
  },
  {
    id: "L2-040",
    level: 2,
    context: "Student A: Why are you packing your books?",
    sentenceTemplate: "Student B: I _____ _____ _____ _____ library closes.",
    chunks: ["must", "leave", "before", "the", "must to", "leaving"],
    answer: ["must", "leave", "before", "the"],
    explanation: "The correct sentence is: 'I must leave before the library closes.'",
    koreanExplanation: "도서관이 문을 닫기 전에 저는 나가야 합니다. 의무 조동사 'must' 뒤에 시간 접속사 'before'를 연결합니다.",
    grammarPoints: "조동사 must, 시간 접속사 before",
    paraphrases: [
      "I have to get going before the building is locked.",
      "Leaving before closing time is necessary for me."
    ]
  },
  {
    id: "L2-041",
    level: 2,
    context: "Student A: Did you check your homework grades?",
    sentenceTemplate: "Student B: I _____ _____ _____ _____ the online system crashed.",
    chunks: ["checked", "them", "right", "before", "check", "after that"],
    answer: ["checked", "them", "right", "before"],
    koreanExplanation: "온라인 시스템이 다운되기 바로 직전에 확인했습니다. 과거동사 'checked'와 시점을 묘사하는 'right before'의 결합입니다.",
    grammarPoints: "과거시제 동사, 부사구 right before",
    paraphrases: [
      "I managed to view my scores immediately before the portal went offline.",
      "Just before the server crashed, I logged in and checked my marks."
    ]
  },
  {
    id: "L2-042",
    level: 2,
    context: "Student A: Can we take this book home?",
    sentenceTemplate: "Student B: You _____ _____ _____ _____ you return it tomorrow.",
    chunks: ["can", "borrow", "it", "provided", "could", "unless"],
    answer: ["can", "borrow", "it", "provided"],
    koreanExplanation: "내일 반납하신다는 조건 하에 빌려 가실 수 있습니다. 조건부 승인을 나타내는 'provided' 접속사를 결합합니다.",
    grammarPoints: "조동사 can, 조건 접속사 provided",
    paraphrases: [
      "Borrowing is allowed on the condition that it comes back tomorrow.",
      "You are welcome to take it, as long as it is returned by tomorrow."
    ]
  },
  {
    id: "L2-043",
    level: 2,
    context: "Student A: Why didn't you join the field trip?",
    sentenceTemplate: "Student B: I _____ _____ _____ _____ I had no money.",
    chunks: ["could", "not", "go", "because", "can", "why"],
    answer: ["could", "not", "go", "because"],
    explanation: "The correct sentence is: 'I could not go because I had no money.'",
    koreanExplanation: "돈이 없었기 때문에 갈 수 없었습니다. 과거의 능력을 부정하는 'could not'과 절을 이끄는 접속사 'because'를 씁니다.",
    grammarPoints: "조동사 과거형 부정, 원인 접속사 because",
    paraphrases: [
      "I had to skip the trip as I lacked the necessary funds.",
      "Due to financial reasons, I was unable to participate."
    ]
  },
  {
    id: "L2-044",
    level: 2,
    context: "Student A: Where will you stay this winter?",
    sentenceTemplate: "Student B: I _____ _____ _____ _____ in Boston.",
    chunks: ["will", "stay", "with", "family", "shall", "staying"],
    answer: ["will", "stay", "with", "family"],
    explanation: "The correct sentence is: 'I will stay with family in Boston.'",
    koreanExplanation: "저는 보스턴의 가족들과 함께 머무를 계획입니다. 미래를 뜻하는 조동사 'will'과 함께 동반의 전치사 'with'를 활용합니다.",
    grammarPoints: "미래 시제 조동사, 전치사 with",
    paraphrases: [
      "I am going to spend the break staying with relatives in Boston.",
      "My winter plan is to live with my family in Boston."
    ]
  },
  {
    id: "L2-045",
    level: 2,
    context: "Student A: Why are you studying so hard tonight?",
    sentenceTemplate: "Student B: I _____ _____ _____ _____ I want to pass.",
    chunks: ["must", "study", "hard", "because", "must to", "why"],
    answer: ["must", "study", "hard", "because"],
    koreanExplanation: "통과하고 싶기 때문에 정말 열심히 공부해야 합니다. 의무 조동사 'must' 뒤에 동사를 수식하는 부사 'hard'와 'because'를 연결합니다.",
    grammarPoints: "의무 조동사, 부사 수식, 원인 접속사",
    paraphrases: [
      "Since passing is my goal, putting in extra effort is necessary.",
      "I need to focus deeply tonight as I am determined to pass."
    ]
  },
  {
    id: "L2-046",
    level: 2,
    context: "Student A: Can we enter the lab now?",
    sentenceTemplate: "Student B: You _____ _____ _____ _____ the light turns green.",
    chunks: ["must", "wait", "here", "until", "must to", "waiting"],
    answer: ["must", "wait", "here", "until"],
    koreanExplanation: "표시등이 녹색으로 바뀔 때까지 여기에서 대기하셔야 합니다. 'wait here until' (~할 때까지 여기서 기다리다) 구문을 형성합니다.",
    grammarPoints: "조동사 + wait + 부사 + until",
    paraphrases: [
      "Please remain outside until the signal changes to green.",
      "You are required to stand by here until the indicator turns green."
    ]
  },
  {
    id: "L2-047",
    level: 2,
    context: "Student A: When should I email my advisor?",
    sentenceTemplate: "Student B: You _____ _____ _____ _____ you draft the project.",
    chunks: ["should", "email", "her", "before", "should to", "after that"],
    answer: ["should", "email", "her", "before"],
    koreanExplanation: "프로젝트 초안을 작성하기 전에 그녀에게 이메일을 보내야 합니다. 충고 조동사 'should'와 시간 접속사 'before'의 연동입니다.",
    grammarPoints: "조동사 should, 시간 접속사 before",
    paraphrases: [
      "It is recommended to contact her prior to writing the proposal.",
      "Ensure you reach out to your advisor before starting the draft."
    ]
  },
  {
    id: "L2-048",
    level: 2,
    context: "Student A: Is the scholarship application hard?",
    sentenceTemplate: "Student B: Yes, you _____ _____ _____ _____ you submit it.",
    chunks: ["must", "proofread", "it", "before", "must to", "proofreading"],
    answer: ["must", "proofread", "it", "before"],
    explanation: "The correct sentence is: 'Yes, you must proofread it before you submit it.'",
    koreanExplanation: "네, 신청서를 제출하기 전에 꼭 오타를 교정(검토)해야 합니다. 조동사 'must' 뒤에 동사원형과 시간 접속사 'before'를 결합합니다.",
    grammarPoints: "의무 조동사, 시간 접속사 before",
    paraphrases: [
      "Yes, proofreading the document prior to submission is required.",
      "You need to review the application carefully before turning it in."
    ]
  },
  {
    id: "L2-049",
    level: 2,
    context: "Student A: Will you buy the chemistry kit?",
    sentenceTemplate: "Student B: I _____ _____ _____ _____ I get my allowance.",
    chunks: ["will", "buy", "it", "once", "would", "before to"],
    answer: ["will", "buy", "it", "once"],
    koreanExplanation: "용돈을 받으면 바로 그것을 구매할 것입니다. 'once' 접속사를 활용해 '일단 ~하면 즉시'라는 조건의 상황을 묘사합니다.",
    grammarPoints: "미래 시제, 조건/시간 접속사 once",
    paraphrases: [
      "I am purchasing the kit as soon as my funds arrive.",
      "Once I receive my pocket money, I will go buy the kit."
    ]
  },
  {
    id: "L2-050",
    level: 2,
    context: "Student A: Why is the campus theater closed?",
    sentenceTemplate: "Student B: They _____ _____ _____ _____ the show was over.",
    chunks: ["closed", "the", "doors", "after", "close", "before to"],
    answer: ["closed", "the", "doors", "after"],
    koreanExplanation: "공연이 끝난 후에 그들은 문을 닫았습니다. 과거형 동사 'closed'와 과거의 행위를 연결해 주는 접속사 'after'를 씁니다.",
    grammarPoints: "과거 시제, 시간 접속사 after",
    paraphrases: [
      "They locked the hall doors once the performance concluded.",
      "After the play ended, the facility was shut down."
    ]
  },
  {
    id: "L2-051",
    level: 2,
    context: "Student A: Will we visit the main library today?",
    sentenceTemplate: "Student B: Yes, we _____ _____ _____ _____ the tour ends.",
    chunks: ["will", "go", "there", "when", "would", "before to"],
    answer: ["will", "go", "there", "when"],
    koreanExplanation: "네, 투어가 끝날 때 그곳으로 이동할 것입니다. 미래 동사구와 시점을 나타내는 접속사 'when'을 결합합니다.",
    grammarPoints: "미래 시제, 시간 접속사 when",
    paraphrases: [
      "We will head to the library as soon as the tour is completed.",
      "When the tour wrap-up occurs, we will visit the central library."
    ]
  },
  {
    id: "L2-052",
    level: 2,
    context: "Student A: Did you finish the math assignment?",
    sentenceTemplate: "Student B: I _____ _____ _____ _____ I went to sleep.",
    chunks: ["completed", "the", "exercises", "before", "complete", "after that"],
    answer: ["completed", "the", "exercises", "before"],
    koreanExplanation: "잠자리에 들기 전에 수학 문제를 다 풀었습니다. 과거동사 'completed'와 시간 순서를 밝히는 'before'의 정렬입니다.",
    grammarPoints: "과거 시제 타동사, 시간 접속사 before",
    paraphrases: [
      "Prior to resting, I finished all the math homework.",
      "I managed to wrap up the math problems before sleeping."
    ]
  },
  {
    id: "L2-053",
    level: 2,
    context: "Student A: Can I use this software without a code?",
    sentenceTemplate: "Student B: You _____ _____ _____ _____ you have the license.",
    chunks: ["cannot", "run", "it", "unless", "can", "if"],
    answer: ["cannot", "run", "it", "unless"],
    koreanExplanation: "라이센스를 가지고 있지 않은 한 이 소프트웨어를 실행할 수 없습니다. '~하지 않는 한'을 의미하는 부정 조건 접속사 'unless'를 씁니다.",
    grammarPoints: "조동사 부정, 조건 접속사 unless",
    paraphrases: [
      "Running this program is impossible without a valid product key.",
      "Unless you possess the official license, the software remains locked."
    ]
  },
  {
    id: "L2-054",
    level: 2,
    context: "Student A: When should I pay the library fine?",
    sentenceTemplate: "Student B: You _____ _____ _____ _____ you register for classes.",
    chunks: ["should", "pay", "it", "before", "should to", "after that"],
    answer: ["should", "pay", "it", "before"],
    koreanExplanation: "수강 신청을 하기 전에 연체료를 납부해야 합니다. 조동사 'should'와 수강신청 전의 시점을 가리키는 접속사 'before'를 배치합니다.",
    grammarPoints: "조동사 should, 시간 접속사 before",
    paraphrases: [
      "Settling your library fee prior to course registration is highly advised.",
      "You ought to pay the fines before signing up for classes."
    ]
  },
  {
    id: "L2-055",
    level: 2,
    context: "Student A: Why did you take the online course?",
    sentenceTemplate: "Student B: I _____ _____ _____ _____ I could work remotely.",
    chunks: ["chose", "the", "class", "because", "choose", "why"],
    answer: ["chose", "the", "class", "because"],
    koreanExplanation: "원격으로 일할 수 있었기 때문에 그 강좌를 선택했습니다. 과거의 선택 'chose'와 이유를 묘사하는 'because'의 조합입니다.",
    grammarPoints: "동사의 불규칙 과거형 (choose - chose), 원인의 because",
    paraphrases: [
      "I opted for this online class to enable remote work flexibility.",
      "The reason I enrolled was the ability to study from home."
    ]
  },
  {
    id: "L2-056",
    level: 2,
    context: "Student A: Will you buy the computer today?",
    sentenceTemplate: "Student B: I _____ _____ _____ _____ I get my paycheck.",
    chunks: ["will", "order", "it", "after", "shall", "ordering"],
    answer: ["will", "order", "it", "after"],
    koreanExplanation: "월급을 받은 후에 그것을 주문할 예정입니다. 미래 조동사 'will' 뒤에 시점 접속사 'after'를 연결합니다.",
    grammarPoints: "미래 시제, 시간 접속사 after",
    paraphrases: [
      "I am purchasing the laptop once my salary is deposited.",
      "After receiving my payment, I will order the computer."
    ]
  },
  {
    id: "L2-057",
    level: 2,
    context: "Student A: Did you submit the survey form?",
    sentenceTemplate: "Student B: I _____ _____ _____ _____ the deadline passed.",
    chunks: ["sent", "it", "in", "before", "send", "after"],
    answer: ["sent", "it", "in", "before"],
    koreanExplanation: "마감일이 지나기 전에 제출했습니다. 구동사 'send A in' (A를 제출하다)의 과거 형태인 'sent it in'을 구성합니다.",
    grammarPoints: "이어동사의 대명사 목적어 위치 (sent it in), 접속사 before",
    paraphrases: [
      "My survey sheet was turned in prior to the cutoff date.",
      "I completed and handed in the form before the deadline."
    ]
  },
  {
    id: "L2-058",
    level: 2,
    context: "Student A: Can we access the student records?",
    sentenceTemplate: "Student B: You _____ _____ _____ _____ you have password clearance.",
    chunks: ["can", "view", "them", "provided", "could", "unless"],
    answer: ["can", "view", "them", "provided"],
    koreanExplanation: "비밀번호 권한을 가지고 있다는 조건 하에 그것들을 열람할 수 있습니다. 조건의 'provided (that)'을 활용합니다.",
    grammarPoints: "조동사 can, 조건 접속사 provided",
    paraphrases: [
      "Access is granted on the condition that you enter the passkey.",
      "You are permitted to read the files, assuming you have clearance."
    ]
  },
  {
    id: "L2-059",
    level: 2,
    context: "Student A: Why did you drop the biology class?",
    sentenceTemplate: "Student B: I _____ _____ _____ _____ I fell ill.",
    chunks: ["dropped", "the", "course", "since", "drop", "because of"],
    answer: ["dropped", "the", "course", "since"],
    koreanExplanation: "제가 아팠기 때문에 강좌를 철회했습니다. 과거 사실 'dropped' 뒤에 이유를 나타내는 접속사 'since'를 붙입니다.",
    grammarPoints: "과거 시제 동사, 이유 접속사 since",
    paraphrases: [
      "I withdrew from the module because of health problems.",
      "Since I got sick, I was forced to cancel my biology class."
    ]
  },
  {
    id: "L2-060",
    level: 2,
    context: "Student A: Will we meet the professor today?",
    sentenceTemplate: "Student B: We _____ _____ _____ _____ she arrives on campus.",
    chunks: ["will", "meet", "her", "when", "would", "before to"],
    answer: ["will", "meet", "her", "when"],
    koreanExplanation: "그녀가 캠퍼스에 도착할 때 만날 예정입니다. 미래 조동사 'will'과 시간의 접속사 'when'의 기본적인 배치입니다.",
    grammarPoints: "미래 시제, 시간 접속사 when",
    paraphrases: [
      "We plan to consult her as soon as she arrives on campus.",
      "When she reaches her office, we will hold our meeting."
    ]
  },
  {
    id: "L2-061",
    level: 2,
    context: "Student A: Do you know the student who is leading the study group?",
    sentenceTemplate: "Student B: Yes, she is the one _____ _____ _____ _____ the chemistry sessions.",
    chunks: ["who", "organizes", "all", "of", "whom", "organizing", "at"],
    answer: ["who", "organizes", "all", "of"],
    explanation: "The correct sentence is: 'Yes, she is the one who organizes all of the chemistry sessions.'",
    koreanExplanation: "예, 그녀가 화학 세션을 모두 조직하는 사람입니다. 주격 관계대명사 'who'를 사용하여 선행사 'the one'을 수식합니다.",
    grammarPoints: "주격 관계대명사 who",
    paraphrases: [
      "Yes, she is the person responsible for setting up all the chemistry study groups.",
      "Indeed, she is the student who coordinates the chemistry review sessions."
    ]
  },
  {
    id: "L2-062",
    level: 2,
    context: "Student A: Are you interested in joining the photography club?",
    sentenceTemplate: "Student B: Yes, I really enjoy _____ _____ _____ _____ campus events.",
    chunks: ["taking", "pictures", "of", "various", "to take", "picture", "with"],
    answer: ["taking", "pictures", "of", "various"],
    explanation: "The correct sentence is: 'Yes, I really enjoy taking pictures of various campus events.'",
    koreanExplanation: "네, 저는 다양한 캠퍼스 행사의 사진을 찍는 것을 정말 즐깁니다. 타동사 'enjoy' 뒤에는 목적어로 동명사 'taking'이 와야 합니다.",
    grammarPoints: "동명사를 목적어로 취하는 동사 enjoy",
    paraphrases: [
      "Yes, taking photos of different school activities is something I truly like.",
      "Indeed, I love photographing different events happening around campus."
    ]
  },
  {
    id: "L2-063",
    level: 2,
    context: "Student A: Where should we put our bags during the chemistry experiment?",
    sentenceTemplate: "Student B: All personal bags _____ _____ _____ _____ the lockers outside.",
    chunks: ["must", "be", "kept", "in", "keep", "been", "at"],
    answer: ["must", "be", "kept", "in"],
    explanation: "The correct sentence is: 'All personal bags must be kept in the lockers outside.'",
    koreanExplanation: "모든 개인 가방은 외부 사물함에 보관되어야 합니다. 'must be + 과거분사(p.p.)' 형태의 조동사 수동태를 사용합니다.",
    grammarPoints: "조동사 수동태 must be p.p.",
    paraphrases: [
      "You have to store all your personal belongings in the lockers outside.",
      "Every bag needs to be placed in the outdoor lockers before starting."
    ]
  },
  {
    id: "L2-064",
    level: 2,
    context: "Student A: Did you join the calculus study group?",
    sentenceTemplate: "Student B: I joined it _____ _____ _____ _____ have much free time.",
    chunks: ["although", "I", "do", "not", "because", "did", "to"],
    answer: ["although", "I", "do", "not"],
    explanation: "The correct sentence is: 'I joined it although I do not have much free time.'",
    koreanExplanation: "비록 여유 시간이 많지는 않지만 가입했습니다. 양보를 나타내는 부사절 접속사 'although' 뒤에 주어와 동사구를 연결합니다.",
    grammarPoints: "양보 접속사 although",
    paraphrases: [
      "Even though my schedule is busy, I decided to join the calculus group.",
      "I signed up for the study group despite not having a lot of spare time."
    ]
  },
  {
    id: "L2-065",
    level: 2,
    context: "Student A: Why are you going to the student union building?",
    sentenceTemplate: "Student B: I need _____ _____ _____ _____ the hiking club.",
    chunks: ["to", "sign", "up", "for", "signing", "down", "at"],
    answer: ["to", "sign", "up", "for"],
    explanation: "The correct sentence is: 'I need to sign up for the hiking club.'",
    koreanExplanation: "저는 등산 동아리에 가입해야 합니다. 'need to + 동사원형' (~해야 한다)과 구동사 'sign up for' (~에 가입/등록하다)를 결합합니다.",
    grammarPoints: "need to 부정사, 구동사 sign up for",
    paraphrases: [
      "I have to register my name for the hiking club today.",
      "My goal is to enroll in the outdoor hiking group."
    ]
  },
  {
    id: "L2-066",
    level: 2,
    context: "Student A: When can we start the lab experiment?",
    sentenceTemplate: "Student B: We can start _____ _____ _____ _____ wear safety goggles.",
    chunks: ["only", "if", "we", "all", "unless", "they", "always"],
    answer: ["only", "if", "we", "all"],
    explanation: "The correct sentence is: 'We can start only if we all wear safety goggles.'",
    koreanExplanation: "우리 모두가 보안경을 착용하는 경우에만 시작할 수 있습니다. 조건의 부사절을 이끄는 'only if' (~해야만)를 사용합니다.",
    grammarPoints: "조건 접속사 only if",
    paraphrases: [
      "Wearing safety goggles is a strict requirement before we can begin.",
      "We are not allowed to start the experiment unless everyone puts on safety goggles."
    ]
  },
  {
    id: "L2-067",
    level: 2,
    context: "Student A: Did you find the textbook for our study group?",
    sentenceTemplate: "Student B: Yes, I bought the book _____ _____ _____ _____ yesterday.",
    chunks: ["which", "our", "professor", "recommended", "who", "recommends", "retaining"],
    answer: ["which", "our", "professor", "recommended"],
    explanation: "The correct sentence is: 'Yes, I bought the book which our professor recommended yesterday.'",
    koreanExplanation: "네, 교수님께서 어제 추천해주신 책을 샀습니다. 사물 선행사 'the book'을 수식하는 목적격 관계대명사 'which'를 사용합니다.",
    grammarPoints: "목적격 관계대명사 which",
    paraphrases: [
      "I purchased the textbook recommended by our teacher yesterday.",
      "Yes, the book that the professor suggested yesterday has been bought by me."
    ]
  },
  {
    id: "L2-068",
    level: 2,
    context: "Student A: Did you decide which club to join this semester?",
    sentenceTemplate: "Student B: I finally decided _____ _____ _____ _____ coding club.",
    chunks: ["to", "join", "the", "new", "joining", "for", "at"],
    answer: ["to", "join", "the", "new"],
    explanation: "The correct sentence is: 'I finally decided to join the new coding club.'",
    koreanExplanation: "저는 마침내 새로운 코딩 동아리에 가입하기로 결정했습니다. 'decide' 동사는 미래지향적 의미의 to부정사를 목적어로 취합니다.",
    grammarPoints: "decide + to 부정사",
    paraphrases: [
      "I have made up my mind to sign up for the newly established coding club.",
      "My final decision is to become a member of the new coding group."
    ]
  },
  {
    id: "L2-069",
    level: 2,
    context: "Student A: Why can't we enter the physics lab right now?",
    sentenceTemplate: "Student B: The room _____ _____ _____ _____ the safety officers.",
    chunks: ["is", "being", "inspected", "by", "inspected", "been", "to"],
    answer: ["is", "being", "inspected", "by"],
    explanation: "The correct sentence is: 'The room is being inspected by the safety officers.'",
    koreanExplanation: "그 방은 안전요원들에 의해 점검받는 중입니다. 현재 진행형 수동태 'is being + 과거분사'를 사용하여 동작이 진행 중임을 나타냅니다.",
    grammarPoints: "현재진행 수동태 is being p.p.",
    paraphrases: [
      "Safety staff are currently checking the lab room.",
      "The laboratory is undergoing an inspection by the safety team at the moment."
    ]
  },
  {
    id: "L2-070",
    level: 2,
    context: "Student A: Why do you want to study in the library?",
    sentenceTemplate: "Student B: We should study there _____ _____ _____ _____ quiet rooms.",
    chunks: ["because", "it", "has", "many", "because of", "having", "much"],
    answer: ["because", "it", "has", "many"],
    explanation: "The correct sentence is: 'We should study there because it has many quiet rooms.'",
    koreanExplanation: "도서관에 조용한 방이 많기 때문에 우리는 거기서 공부해야 합니다. 이유를 나타내는 접속사 'because' 뒤에 완전한 절을 씁니다.",
    grammarPoints: "원인 접속사 because",
    paraphrases: [
      "Since the library provides numerous quiet study areas, we ought to go there.",
      "We had better study in the library as there are plenty of silent spaces."
    ]
  },
  {
    id: "L2-071",
    level: 2,
    context: "Student A: Who should I talk to about the drama club auditions?",
    sentenceTemplate: "Student B: You should meet the student _____ _____ _____ _____ auditions.",
    chunks: ["who", "is", "running", "the", "which", "run", "at"],
    answer: ["who", "is", "running", "the"],
    explanation: "The correct sentence is: 'You should meet the student who is running the auditions.'",
    koreanExplanation: "오디션을 운영하고 있는 학생을 만나야 합니다. 사람 선행사 'the student'를 수식하는 주격 관계대명사 'who'와 진행 시제를 사용합니다.",
    grammarPoints: "주격 관계대명사 who",
    paraphrases: [
      "You need to speak to the person in charge of organizing the auditions.",
      "Please contact the student coordinator who manages the drama trials."
    ]
  },
  {
    id: "L2-072",
    level: 2,
    context: "Student A: Can we leave the chemistry lab after finishing the experiment?",
    sentenceTemplate: "Student B: No, you must clean the desk _____ _____ _____ _____ the laboratory.",
    chunks: ["before", "you", "actually", "leave", "after", "actual", "leaving"],
    answer: ["before", "you", "actually", "leave"],
    explanation: "The correct sentence is: 'No, you must clean the desk before you actually leave the laboratory.'",
    koreanExplanation: "아니요, 실험실을 실제로 떠나기 전에 실험대를 청소해야 합니다. 시간 접속사 'before' 뒤에 주어와 동사구를 넣어 표현합니다.",
    grammarPoints: "시간 접속사 before",
    paraphrases: [
      "Cleaning your workstation is mandatory prior to exiting the laboratory.",
      "You must tidy up the desk area before you can leave the lab."
    ]
  },
  {
    id: "L2-073",
    level: 2,
    context: "Student A: Did your group members agree on the meeting time?",
    sentenceTemplate: "Student B: Yes, they all agreed _____ _____ _____ _____ every Saturday.",
    chunks: ["to", "meet", "at", "noon", "meeting", "for", "on"],
    answer: ["to", "meet", "at", "noon"],
    explanation: "The correct sentence is: 'Yes, they all agreed to meet at noon every Saturday.'",
    koreanExplanation: "네, 그들은 모두 매주 토요일 정오에 만나기로 합의했습니다. 'agree' 동사는 to부정사를 목적어로 취하여 향후의 행동을 나타냅니다.",
    grammarPoints: "agree + to 부정사",
    paraphrases: [
      "Indeed, everyone consented to hold our weekly sessions at 12 PM on Saturdays.",
      "Yes, the members decided on meeting at midday each Saturday."
    ]
  },
  {
    id: "L2-074",
    level: 2,
    context: "Student A: Which club booth did you visit today?",
    sentenceTemplate: "Student B: I visited the booth of the club _____ _____ _____ _____ join.",
    chunks: ["which", "I", "wanted", "to", "who", "wanting", "for"],
    answer: ["which", "I", "wanted", "to"],
    explanation: "The correct sentence is: 'I visited the booth of the club which I wanted to join.'",
    koreanExplanation: "제가 가입하고 싶었던 동아리의 부스를 방문했습니다. 사물 선행사 'the club'을 수식하는 목적격 관계대명사 'which'와 to부정사 구조를 결합합니다.",
    grammarPoints: "목적격 관계대명사 which, want to 부정사",
    paraphrases: [
      "I went to the booth of the club that I was interested in joining.",
      "The club exhibition I visited today was the one I hoped to sign up for."
    ]
  },
  {
    id: "L2-075",
    level: 2,
    context: "Student A: Can we touch the chemicals with our bare hands?",
    sentenceTemplate: "Student B: No, protective gloves _____ _____ _____ _____ all times.",
    chunks: ["must", "be", "worn", "at", "wear", "been", "on"],
    answer: ["must", "be", "worn", "at"],
    explanation: "The correct sentence is: 'No, protective gloves must be worn at all times.'",
    koreanExplanation: "아니요, 보호 장갑은 항상 착용해야 합니다. 의무의 조동사 'must' 뒤에 수동태 'be worn'을 쓰고, 빈도를 나타내는 'at all times' (항상)를 연결합니다.",
    grammarPoints: "조동사 수동태 must be worn, 부사구 at all times",
    paraphrases: [
      "Wearing safety gloves is mandatory throughout the experiment.",
      "You are required to put on protective gloves at any time in the lab."
    ]
  },
  {
    id: "L2-076",
    level: 2,
    context: "Student A: Will the study room be available this afternoon?",
    sentenceTemplate: "Student B: We can book the room _____ _____ _____ _____ it is empty.",
    chunks: ["if", "we", "confirm", "that", "unless", "confirming", "because of"],
    answer: ["if", "we", "confirm", "that"],
    explanation: "The correct sentence is: 'We can book the room if we confirm that it is empty.'",
    koreanExplanation: "방이 비어 있다는 것을 확인하면 우리는 예약할 수 있습니다. 조건의 접속사 'if'와 명사절을 이끄는 접속사 'that'을 함께 사용한 복문 구조입니다.",
    grammarPoints: "조건 접속사 if, 명사절 접속사 that",
    paraphrases: [
      "Provided we verify the room is vacant, we are allowed to reserve it.",
      "We are able to secure the study room if we make sure nobody is using it."
    ]
  },
  {
    id: "L2-077",
    level: 2,
    context: "Student A: How can we submit our application forms for the music club?",
    sentenceTemplate: "Student B: You can register _____ _____ _____ _____ the form online.",
    chunks: ["by", "simply", "emailing", "us", "to email", "email", "for"],
    answer: ["by", "simply", "emailing", "us"],
    explanation: "The correct sentence is: 'You can register by simply emailing us the form online.'",
    koreanExplanation: "온라인으로 우리에게 신청서를 이메일로 간단히 보내 가입할 수 있습니다. 수단/방법을 뜻하는 'by + 동명사' 구문을 활용합니다.",
    grammarPoints: "전치사 by + 동명사",
    paraphrases: [
      "To register, you just need to email the completed document to us.",
      "Signing up is done by sending the form to our email address."
    ]
  },
  {
    id: "L2-078",
    level: 2,
    context: "Student A: Why do we have to report minor injuries in the lab?",
    sentenceTemplate: "Student B: It is important _____ _____ _____ _____ safety in the laboratory.",
    chunks: ["to", "ensure", "our", "personal", "ensuring", "for", "us"],
    answer: ["to", "ensure", "our", "personal"],
    explanation: "The correct sentence is: 'It is important to ensure our personal safety in the laboratory.'",
    koreanExplanation: "실험실에서 우리의 개인적인 안전을 보장하는 것이 중요합니다. 가주어 'It'과 진주어 'to부정사' 구문을 사용합니다.",
    grammarPoints: "가주어-진주어 It ~ to 부정사",
    paraphrases: [
      "Keeping ourselves safe while in the lab is highly crucial.",
      "Ensuring our individual safety during lab work is of great importance."
    ]
  },
  {
    id: "L2-079",
    level: 2,
    context: "Student A: Are there any students who want to join our science study group?",
    sentenceTemplate: "Student B: There are two classmates _____ _____ _____ _____ join our group.",
    chunks: ["who", "would", "like", "to", "which", "likes", "for"],
    answer: ["who", "would", "like", "to"],
    explanation: "The correct sentence is: 'There are two classmates who would like to join our group.'",
    koreanExplanation: "우리 그룹에 가입하고 싶어하는 두 명의 반 친구들이 있습니다. 주격 관계대명사 'who'와 소망을 나타내는 조동사구 'would like to'를 함께 사용합니다.",
    grammarPoints: "주격 관계대명사 who, would like to 부정사",
    paraphrases: [
      "Two of our classmates have expressed their desire to become members of the study group.",
      "We have two fellow students who want to participate in our study circle."
    ]
  },
  {
    id: "L2-080",
    level: 2,
    context: "Student A: Did you sign up for the debate club today?",
    sentenceTemplate: "Student B: I submitted my application _____ _____ _____ _____ a bit nervous.",
    chunks: ["although", "I", "was", "feeling", "because", "am", "felt"],
    answer: ["although", "I", "was", "feeling"],
    explanation: "The correct sentence is: 'I submitted my application although I was feeling a bit nervous.'",
    koreanExplanation: "비록 약간 긴장이 되었지만 지원서를 제출했습니다. 양보를 나타내는 접속사 'although'와 과거진행형 시제를 결합합니다.",
    grammarPoints: "양보 접속사 although, 과거진행형 시제",
    paraphrases: [
      "Even though I felt somewhat anxious, I still handed in my signup form.",
      "Despite my nervousness, I went ahead and applied for the debate club."
    ]
  }
];
