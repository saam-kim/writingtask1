import type { Question } from '../../types/question';

export const level4Questions: Question[] = [
  {
    id: "L4-001",
    level: 4,
    context: "Why did you choose to live off-campus this year?",
    sentenceTemplate: "I decided to rent _____ _____ _____ _____ the high dorm fees.",
    chunks: ["an apartment", "outside", "campus", "despite", "although", "in spite", "with"],
    answer: ["an apartment", "outside", "campus", "despite"],
    explanation: "The correct sentence is: 'I decided to rent an apartment outside campus despite the high dorm fees.'",
    koreanExplanation: "기스크의 높은 요금에도 불구하고 학교 밖에 아파트를 빌리기로 결정했습니다. 양보를 나타내는 전치사 'despite' 뒤에는 명사구(the high dorm fees)가 위치해야 합니다.",
    grammarPoints: "전치사 despite vs. 접속사 although, 명사구 결합",
    paraphrases: [
      "Notwithstanding the high dormitory pricing, I secured housing off-campus.",
      "I signed a lease for an apartment off-campus because dormitory housing was too expensive."
    ]
  },
  {
    id: "L4-002",
    level: 4,
    context: "Can we still enroll in the biology class?",
    sentenceTemplate: "You cannot enroll _____ _____ _____ _____ permission.",
    chunks: ["in the course", "unless", "the instructor", "gives", "to course", "if", "give"],
    answer: ["in the course", "unless", "the instructor", "gives"],
    explanation: "The correct sentence is: 'You cannot enroll in the course unless the instructor gives permission.'",
    koreanExplanation: "강사가 허가를 주지 않는 한 강좌에 등록할 수 없습니다. '~하지 않는 한'을 뜻하는 부사절 접속사 'unless'가 주어와 3인칭 단수 동사 'gives'를 이끕니다.",
    grammarPoints: "enroll in 표현, 접속사 unless",
    paraphrases: [
      "Without the professor's written approval, registration for this class is locked.",
      "Enrolling in the biology module requires explicit consent from the teacher."
    ]
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
    grammarPoints: "이유 전치사구 owing to, 명사 수식 구조",
    paraphrases: [
      "Budgetary constraints at the university level have forced the library to reduce operation hours.",
      "Due to major financial cutbacks, the library will be shortening its daily schedule."
    ]
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
    grammarPoints: "반면 접속사 while, try to 부정사",
    paraphrases: [
      "A portion of the student body demonstrated against the hike, whereas others sought dialog with officials.",
      "While some students actively opposed the tuition raise, others pursued negotiations with the Dean."
    ]
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
    grammarPoints: "조건 접속사 unless, 현재완료 완료상",
    paraphrases: [
      "Prior completion of safety training is required before performing lab procedures.",
      "You are prohibited from conducting research unless you obtain lab certification first."
    ]
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
    grammarPoints: "이유 전치사구 on account of, 부사 수식",
    paraphrases: [
      "Unexpected software glitches were partially responsible for delaying the curriculum catalog.",
      "The delay was caused in part by unforeseen database server crashes."
    ]
  },
  {
    id: "L4-007",
    level: 4,
    context: "Which books should we read for the literature seminar?",
    sentenceTemplate: "The professor assigned three novels _____ _____ _____ _____.",
    chunks: ["written by", "famous", "nineteenth-century", "authors", "writing by", "who", "author"],
    answer: ["written by", "famous", "nineteenth-century", "authors"],
    explanation: "The correct sentence is: 'The professor assigned three novels written by famous nineteenth-century authors.'",
    koreanExplanation: "교수님은 19세기 유명 작가들이 쓴 소설 세 권을 과제로 내주셨습니다. 'written by' 과거분사구가 선행 명사인 'novels'를 후치수식합니다.",
    grammarPoints: "과거분사의 명사 후치수식 (written by)",
    paraphrases: [
      "We are required to read three books authored by prominent nineteenth-century figures.",
      "The syllabus features three novels originating from nineteenth-century literature stars."
    ]
  },
  {
    id: "L4-008",
    level: 4,
    context: "Why is there a delay in scholarship payments?",
    sentenceTemplate: "The office is processing applications _____ _____ _____ _____ order they were submitted.",
    chunks: ["strictly", "in the", "exact", "chronological", "strict", "at the", "chronology"],
    answer: ["strictly", "in the", "exact", "chronological"],
    explanation: "The correct sentence is: 'The office is processing applications strictly in the exact chronological order they were submitted.'",
    koreanExplanation: "사무실에서는 철저하게 신청서가 접수된 순서대로(시간 순으로) 처리하고 있습니다. 부사 'strictly'가 동사를 수식하고, 형용사 'chronological'이 'order'를 꾸밉니다.",
    grammarPoints: "부사 수식, 형용사-명사 조합",
    paraphrases: [
      "Applications are handled in the precise order they were received.",
      "The review board adheres strictly to a first-come, first-served sequence based on date."
    ]
  },
  {
    id: "L4-009",
    level: 4,
    context: "What was the result of the student council election?",
    sentenceTemplate: "The candidate won the election _____ _____ _____ _____ the negative publicity.",
    chunks: ["in spite of", "all the", "criticism", "about", "despite of", "although", "criticize"],
    answer: ["in spite of", "all the", "criticism", "about"],
    explanation: "The correct sentence is: 'The candidate won the election in spite of all the criticism about the negative publicity.'",
    koreanExplanation: "후보는 부정적인 소문에 대한 모든 비판에도 불구하고 선거에서 이겼습니다. 'in spite of'는 'despite'와 같은 전치사구로 뒤에 명사구('all the criticism')가 옵니다.",
    grammarPoints: "양보 전치사구 in spite of, 전치사 about 목적어 수식",
    paraphrases: [
      "Despite severe backlash regarding recent rumors, the campaign was successful.",
      "The student secured the victory regardless of critiques focusing on negative media reports."
    ]
  },
  {
    id: "L4-010",
    level: 4,
    context: "Why did the lecture hall lose electricity?",
    sentenceTemplate: "The power went out _____ _____ _____ _____.",
    chunks: ["just", "as the", "professor", "started", "right", "when to", "starting"],
    answer: ["just", "as the", "professor", "started"],
    explanation: "The correct sentence is: 'The power went out just as the professor started the lecture.'",
    koreanExplanation: "교수가 막 시작하려는 순간에 전기가 나갔습니다. 'just as'는 '~하는 바로 그 순간에'를 뜻하는 시간 부사절 접속사입니다.",
    grammarPoints: "시간 접속사 just as, 과거시제 일치",
    paraphrases: [
      "At the very moment the class began, the building experienced a blackout.",
      "The electricity shut off precisely when the professor began speaking."
    ]
  },
  {
    id: "L4-011",
    level: 4,
    context: "Are there any requirements for joining the research team?",
    sentenceTemplate: "Students must have basic knowledge _____ _____ _____ _____ biology.",
    chunks: ["not only", "of chemistry", "but also", "of molecular", "only of", "also", "with molecular"],
    answer: ["not only", "of chemistry", "but also", "of molecular"],
    explanation: "The correct sentence is: 'Students must have basic knowledge not only of chemistry but also of molecular biology.'",
    koreanExplanation: "학생들은 화학뿐만 아니라 분자 생물학에 대한 기본 지식도 가지고 있어야 합니다. 상관접속사 'not only A but also B' 구조가 대등한 전치사구(of chemistry / of molecular)를 연결합니다.",
    grammarPoints: "상관접속사 (not only A but also B), 병렬 구조",
    paraphrases: [
      "A foundational understanding of both chemistry and molecular biology is required.",
      "Applicants should be well-versed in chemistry, alongside molecular biology principles."
    ]
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
    grammarPoints: "주어-동사 일치, 숙어 place emphasis on",
    paraphrases: [
      "The program's focus on intercultural dynamics strongly appealed to me.",
      "I selected this major because it prioritizes global cultural understanding."
    ]
  },
  {
    id: "L4-013",
    level: 4,
    context: "Is the final exam cumulative?",
    sentenceTemplate: "Yes, the test covers everything _____ _____ _____ _____ the beginning of the semester.",
    chunks: ["taught", "in class", "since", "the very", "teached", "from", "verily"],
    answer: ["taught", "in class", "since", "the very"],
    explanation: "The correct sentence is: 'Yes, the test covers everything taught in class since the very beginning of the semester.'",
    koreanExplanation: "네, 그 시험은 학기 아주 극초반부터 수업 시간에 가르친 모든 것을 다룹니다. 과거분사 'taught'가 'everything'을 뒤에서 꾸미고, 'since the very beginning'에서 'very'는 '바로 그(강조)'의 형용사로 쓰였습니다.",
    grammarPoints: "과거분사 수식, 강조어 very의 형용사 용법",
    paraphrases: [
      "Yes, the examination is comprehensive, spanning all lectures given from day one.",
      "Indeed, you will be tested on all material presented since the start of class."
    ]
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
    grammarPoints: "상관접속사 as well as, 병렬 구조 (preparing - studying)",
    paraphrases: [
      "My time was fully occupied by presentation slide design and general midterm review.",
      "I was caught up in preparing my speech in addition to reviewing lecture notes."
    ]
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
    grammarPoints: "전치사구 along with, 분사의 형용사적 수식",
    paraphrases: [
      "Your application package must contain the portfolio plus two official letters of recommendation.",
      "Include a pair of signed academic references alongside your design files."
    ]
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
    grammarPoints: "because of vs because, 주격 관계대명사, 과거형 동사",
    paraphrases: [
      "A technical bug during the enrollment period prevented me from signing up.",
      "I missed the registration deadline due to system errors encountered on the site."
    ]
  },
  {
    id: "L4-017",
    level: 4,
    context: "Can the team finish the proposal today?",
    sentenceTemplate: "It is unlikely _____ _____ _____ _____ we receive the approval.",
    chunks: ["that we", "can finish", "it unless", "first", "unless to", "finish", "firstly"],
    answer: ["that we", "can finish", "it unless", "first"],
    explanation: "The correct sentence is: 'It is unlikely that we can finish it unless first we receive the approval.'",
    koreanExplanation: "먼저 승인을 받지 못하는 한 오늘 제안서를 끝마치기는 어려울 것 같습니다. 가주어-진주어 'It is unlikely that' 구문과 부사절 조건접속사 'unless'의 연동입니다.",
    grammarPoints: "가주어-진주어 구문 (It is ... that), 조건 접속사 unless",
    paraphrases: [
      "Without securing consent beforehand, wrapping up the draft tonight is highly improbable.",
      "Unless we obtain approval first, finishing the document today is not feasible."
    ]
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
    grammarPoints: "목적 부사구 (in order to), help + 목적어 + 동사원형 구조",
    paraphrases: [
      "To facilitate a more equitable grading system, the scaling was revised.",
      "The adjustment was implemented to support fair scoring criteria for the class."
    ]
  },
  {
    id: "L4-019",
    level: 4,
    context: "What happens if I miss the chemistry lab orientation?",
    sentenceTemplate: "You will be banned _____ _____ _____ _____ you complete the training.",
    chunks: ["from entering", "the laboratory", "until", "after", "to enter", "since", "after that"],
    answer: ["from entering", "the laboratory", "until", "after"],
    explanation: "The correct sentence is: 'You will be banned from entering the laboratory until after you complete the training.'",
    koreanExplanation: "교육을 완료한 이후가 될 때까지 실험실 입장이 금지될 것입니다. 'ban A from B(동명사)' 구문과 복합 접속 표현인 'until after'를 사용합니다.",
    grammarPoints: "구동사 수동태 (be banned from -ing), 접속사 until after",
    paraphrases: [
      "Lab access is restricted until you fully complete safety orientation lectures.",
      "You cannot step inside the chemistry lab until after you finish the required course."
    ]
  },
  {
    id: "L4-020",
    level: 4,
    context: "Why is the university investing in green energy?",
    sentenceTemplate: "They hope to reduce _____ _____ _____ _____ promoting environmental protection.",
    chunks: ["energy consumption", "significantly", "on campus", "while", "consuming", "significant", "during"],
    answer: ["energy consumption", "significantly", "on campus", "while"],
    explanation: "The correct sentence is: 'They hope to reduce energy consumption significantly on campus while promoting environmental protection.'",
    koreanExplanation: "그들은 환경 보호를 홍보하는 동시에 캠퍼스 내 에너지 소비를 대폭 줄이고자 합니다. 부사 'significantly'의 위치와 대조/동시동작을 뜻하는 분사구문 접속사 'while'의 연결을 묻습니다.",
    grammarPoints: "명사 목적어구, 부사 수식, 접속사 + 분사구문 (while -ing)",
    paraphrases: [
      "Their objective is to lower utility usage on campus while advocating ecological sustainability.",
      "While fostering green policies, the trustees aim to cut carbon footprints drastically."
    ]
  },
  {
    id: "L4-021",
    level: 4,
    context: "Why did you submit the paper late?",
    sentenceTemplate: "I could not finish _____ _____ _____ _____ multiple electricity blackouts.",
    chunks: ["the report", "on time", "because of", "experiencing", "because", "timely", "experience"],
    answer: ["the report", "on time", "because of", "experiencing"],
    explanation: "The correct sentence is: 'I could not finish the report on time because of experiencing multiple electricity blackouts.'",
    koreanExplanation: "여러 차례의 정전 때문에 보고서를 제때 끝마칠 수 없었습니다. 'because of'는 전치사이므로 명사구 또는 동명사('experiencing')를 이끌어야 합니다.",
    grammarPoints: "전치사 because of + 동명사",
    paraphrases: [
      "A series of power outages prevented me from completing the paper by the deadline.",
      "I failed to finish the report on schedule due to experiencing several blackouts."
    ]
  },
  {
    id: "L4-022",
    level: 4,
    context: "How did the university fund the new campus library?",
    sentenceTemplate: "They raised money _____ _____ _____ _____ alumni network.",
    chunks: ["by organizing", "a campaign", "through the", "extensive", "with organize", "campaigning", "throughout"],
    answer: ["by organizing", "a campaign", "through the", "extensive"],
    explanation: "The correct sentence is: 'They raised money by organizing a campaign through the extensive alumni network.'",
    koreanExplanation: "그들은 광범위한 동문 네트워크를 통한 캠페인을 구성하여 자금을 모았습니다. 수단/방법의 'by + 동명사'와 형용사 및 전치사의 어순 결합입니다.",
    grammarPoints: "수단 전치사 by + 동명사, 전치사구 명사 수식",
    paraphrases: [
      "Funding for the new facility was secured by launching a campaign utilizing their broad alumni network.",
      "They gathered the necessary capital by running a fundraising campaign through the university's large alumni base."
    ]
  },
  {
    id: "L4-023",
    level: 4,
    context: "Why are you taking an extra course this semester?",
    sentenceTemplate: "I want to gain _____ _____ _____ _____ my graduation requirements.",
    chunks: ["practical experience", "before", "completing all", "of", "practically", "prior to", "completed"],
    answer: ["practical experience", "before", "completing all", "of"],
    explanation: "The correct sentence is: 'I want to gain practical experience before completing all of my graduation requirements.'",
    koreanExplanation: "졸업 요건을 모두 마치기 전에 실무 경험을 쌓고 싶습니다. 시간 접속사/전치사 'before' 뒤에 동명사구 'completing all of'가 이어집니다.",
    grammarPoints: "전치사/접속사 before + 동명사구",
    paraphrases: [
      "My aim is to acquire hands-on experience prior to satisfying my degree requirements.",
      "I wish to build real-world skills before finally finishing all graduation criteria."
    ]
  },
  {
    id: "L4-024",
    level: 4,
    context: "Why did the professor cancel the afternoon lecture?",
    sentenceTemplate: "He cancelled it _____ _____ _____ _____ catch a flight.",
    chunks: ["in order", "to have", "enough time", "to", "for have", "to having", "timely"],
    answer: ["in order", "to have", "enough time", "to"],
    explanation: "The correct sentence is: 'He cancelled it in order to have enough time to catch a flight.'",
    koreanExplanation: "비행기를 탈 충분한 시간을 갖기 위해 강의를 취소했습니다. 목적의 'in order to + 동사원형'과 명사를 수식하는 to부정사의 형용사적 용법의 결합입니다.",
    grammarPoints: "목적 부사구 (in order to), 형용사적 용법의 to부정사",
    paraphrases: [
      "The lecture was called off so the professor would have sufficient time to make his flight.",
      "He dismissed class early to ensure he had ample time to arrive at the airport."
    ]
  },
  {
    id: "L4-025",
    level: 4,
    context: "Did you attend the optional seminar?",
    sentenceTemplate: "No, I did not go _____ _____ _____ _____ the schedule clash.",
    chunks: ["mainly due", "to what", "seemed like", "a", "mainly of", "seeming", "what seemed"],
    answer: ["mainly due", "to what", "seemed like", "a"],
    explanation: "The correct sentence is: 'No, I did not go mainly due to what seemed like a schedule clash.'",
    koreanExplanation: "아니요, 주로 일정 충돌처럼 보이는 현상 때문에 가지 못했습니다. 전치사 'due to' 뒤에 명사절을 이끄는 관계대명사 'what'과 'seem like' 구문이 결합되었습니다.",
    grammarPoints: "전치사 due to, 관계대명사 what 명사절",
    paraphrases: [
      "I was absent primarily because of an apparent conflict in my schedule.",
      "A scheduling dispute was the chief reason I was unable to attend the workshop."
    ]
  },
  {
    id: "L4-026",
    level: 4,
    context: "Why is the chemistry department purchasing new safety gear?",
    sentenceTemplate: "They must protect _____ _____ _____ _____ hazardous fumes.",
    chunks: ["researchers from", "accidentally", "inhaling the", "extremely", "researcher to", "accidental", "inhale"],
    answer: ["researchers from", "accidentally", "inhaling the", "extremely"],
    explanation: "The correct sentence is: 'They must protect researchers from accidentally inhaling the extremely hazardous fumes.'",
    koreanExplanation: "연구원들이 극도로 위험한 유독가스를 실수로 흡입하는 것을 방지해야 합니다. 'protect A from B(-ing)'와 동명사를 수식하는 부사 'accidentally'의 배열입니다.",
    grammarPoints: "구동사 protect A from B(-ing), 부사의 동명사구 수식",
    paraphrases: [
      "The equipment is necessary to prevent staff from breathing in toxic fumes by accident.",
      "They need to safeguard scientists against the unintentional inhalation of dangerous gases."
    ]
  },
  {
    id: "L4-027",
    level: 4,
    context: "Will we get our lab results by Friday?",
    sentenceTemplate: "It depends on _____ _____ _____ _____ the computer model.",
    chunks: ["how quickly", "the software", "can process", "all", "quick", "processing", "how quick"],
    answer: ["how quickly", "the software", "can process", "all"],
    explanation: "The correct sentence is: 'It depends on how quickly the software can process all the computer model.'",
    koreanExplanation: "소프트웨어가 얼마나 빨리 처리하느냐에 달려 있습니다. 전치사 'depends on' 뒤에 의문부사 'how quickly'가 이끄는 간접의문문 명사절을 구성합니다.",
    grammarPoints: "depends on 전치사 목적어, 간접의문문 (의문사 + 주어 + 동사)",
    paraphrases: [
      "Receiving the data on time relies on the software's processing speed.",
      "It hinges upon the capability of the program to run the simulation rapidly."
    ]
  },
  {
    id: "L4-028",
    level: 4,
    context: "Why is the university hiring more career counselors?",
    sentenceTemplate: "They want to help _____ _____ _____ _____ graduates.",
    chunks: ["students prepare", "for job", "interviews after", "they", "student preparing", "interview", "after which"],
    answer: ["students prepare", "for job", "interviews after", "they"],
    explanation: "The correct sentence is: 'They want to help students prepare for job interviews after they graduate.'",
    koreanExplanation: "학생들이 졸업 후 취업 인터뷰를 준비하는 것을 돕고 싶어 합니다. 'help + 목적어 + 동사원형(prepare)' 및 시간 부사절 접속사 'after'가 이끄는 문장 구조입니다.",
    grammarPoints: "help 준사역동사 구조, 시간 부사절 접속사 after",
    paraphrases: [
      "Their goal is to assist students in preparing for career interviews once they finish school.",
      "They aim to guide undergraduates through employment interviews upon graduation."
    ]
  },
  {
    id: "L4-029",
    level: 4,
    context: "Why did you rewrite the introduction paragraph?",
    sentenceTemplate: "The editor recommended _____ _____ _____ _____ clarity.",
    chunks: ["modifying the", "first sentence", "to improve", "overall", "modify of", "sentences", "improvement"],
    answer: ["modifying the", "first sentence", "to improve", "overall"],
    explanation: "The correct sentence is: 'The editor recommended modifying the first sentence to improve overall clarity.'",
    koreanExplanation: "편집자는 전반적인 명확성을 높이기 위해 첫 문장을 수정할 것을 권장했습니다. 'recommend'는 동명사 'modifying'을 목적어로 취하며, 목적을 나타내는 to부정사를 연결합니다.",
    grammarPoints: "recommend + 동명사, 목적을 나타내는 to부정사",
    paraphrases: [
      "The advisor suggested rewriting the opening sentence for better readability.",
      "To enhance overall clarity, it was recommended that the first sentence be revised."
    ]
  },
  {
    id: "L4-030",
    level: 4,
    context: "Can we use the main hall for the exhibition?",
    sentenceTemplate: "You cannot reserve _____ _____ _____ _____ the student dean.",
    chunks: ["the hall", "unless you", "obtain permission", "from", "hall if", "obtaining", "permissions"],
    answer: ["the hall", "unless you", "obtain permission", "from"],
    explanation: "The correct sentence is: 'You cannot reserve the hall unless you obtain permission from the student dean.'",
    koreanExplanation: "학생 처장으로부터 허가를 받지 않는 한 홀을 예약할 수 없습니다. 조건 접속사 'unless' 뒤에 주어 'you'와 타동사구 'obtain permission from'을 배치합니다.",
    grammarPoints: "조건 접속사 unless, 구동사 obtain from",
    paraphrases: [
      "Booking the auditorium is prohibited without receiving approval from the dean.",
      "Unless the dean authorizes it, reserving the main hall is not allowed."
    ]
  },
  {
    id: "L4-031",
    level: 4,
    context: "Why are they closing the student lounge early?",
    sentenceTemplate: "The lounge is closing _____ _____ _____ _____ clean the area.",
    chunks: ["in order", "to allow", "staff to", "thoroughly", "for allowing", "staffs", "thorough"],
    answer: ["in order", "to allow", "staff to", "thoroughly"],
    explanation: "The correct sentence is: 'The lounge is closing in order to allow staff to thoroughly clean the area.'",
    koreanExplanation: "직원들이 그 구역을 철저히 청소할 수 있도록 하기 위해 라운지 문을 일찍 닫습니다. 'in order to + 동사원형'과 'allow + 목적어 + to부정사' 구문이 결합되었습니다.",
    grammarPoints: "목적 부사구 (in order to), allow A to-v, 부사 thoroughly",
    paraphrases: [
      "They are closing early to give the cleaning crew enough time to sanitize the room.",
      "To permit staff to perform deep cleaning, the lounge schedule has been cut short."
    ]
  },
  {
    id: "L4-032",
    level: 4,
    context: "Why did she receive a warning letter?",
    sentenceTemplate: "She was warned _____ _____ _____ _____ assignments on time.",
    chunks: ["for repeatedly", "failing to", "submit her", "weekly", "repeated", "fail to", "submitting"],
    answer: ["for repeatedly", "failing to", "submit her", "weekly"],
    explanation: "The correct sentence is: 'She was warned for repeatedly failing to submit her weekly assignments on time.'",
    koreanExplanation: "그녀는 매주 주어지는 과제를 반복적으로 제출하지 않아 경고를 받았습니다. 원인 전치사 'for' 뒤에 부사 'repeatedly'와 동명사 'failing to'가 옵니다.",
    grammarPoints: "전치사 목적어 동명사, fail to 부정사",
    paraphrases: [
      "Missing several weekly homework deadlines resulted in an official warning.",
      "She got flagged because she consistently failed to turn in her weekly papers."
    ]
  },
  {
    id: "L4-033",
    level: 4,
    context: "How can we increase the response rate of the survey?",
    sentenceTemplate: "We should offer _____ _____ _____ _____ participate.",
    chunks: ["a small", "incentive to", "students who", "agree to", "incentives", "student", "agreeing"],
    answer: ["a small", "incentive to", "students who", "agree to"],
    explanation: "The correct sentence is: 'We should offer a small incentive to students who agree to participate.'",
    koreanExplanation: "우리는 참여에 동의하는 학생들에게 작은 보상을 제공해야 합니다. 'incentive to + 명사'와 관계대명사 'who'가 선행사 'students'를 꾸미고, 'agree to + 동사원형'이 뒤따릅니다.",
    grammarPoints: "명사 수식, 관계대명사 who, agree to 부정사",
    paraphrases: [
      "Providing minor rewards to participants might encourage more students to take the survey.",
      "We ought to compensate students who volunteer to fill out the questionnaire."
    ]
  },
  {
    id: "L4-034",
    level: 4,
    context: "Why did the research team change their hypothesis?",
    sentenceTemplate: "They modified it _____ _____ _____ _____ by the analysis.",
    chunks: ["based on", "the new", "evidence revealed", "recently", "base of", "evidences", "revealing"],
    answer: ["based on", "the new", "evidence revealed", "recently"],
    explanation: "The correct sentence is: 'They modified it based on the new evidence revealed recently by the analysis.'",
    koreanExplanation: "그들은 최근 분석을 통해 밝혀진 새로운 증거를 토대로 가설을 수정했습니다. '~에 기하여'를 뜻하는 분사구 'based on'과 명사 'evidence'를 수식하는 과거분사 'revealed'의 나열입니다.",
    grammarPoints: "분사구 based on, 과거분사 후치수식, 부사 recently",
    paraphrases: [
      "The change in thesis was prompted by fresh data brought to light during the examination.",
      "They adjusted their theory following new findings uncovered in the recent study."
    ]
  },
  {
    id: "L4-035",
    level: 4,
    context: "Can we drop this class after the second week?",
    sentenceTemplate: "You cannot drop _____ _____ _____ _____ Dean's signature.",
    chunks: ["the class", "without obtaining", "the academic", "department", "class unless", "obtain", "departments"],
    answer: ["the class", "without obtaining", "the academic", "department"],
    explanation: "The correct sentence is: 'You cannot drop the class without obtaining the academic department Dean's signature.'",
    koreanExplanation: "학과장의 서명을 받지 않고는 수업을 철회할 수 없습니다. 전치사 'without' 뒤에 동명사 'obtaining'을 쓰고 명사구 목적어를 연결합니다.",
    grammarPoints: "전치사 without + 동명사, 복합 명사구 수식",
    paraphrases: [
      " Dropping this course requires official approval and signature from the department head.",
      "You are unable to withdraw unless you get the signature from the academic dean."
    ]
  },
  {
    id: "L4-036",
    level: 4,
    context: "Why is the university upgrading the server?",
    sentenceTemplate: "They want to prevent _____ _____ _____ _____ peak hours.",
    chunks: ["the system", "from crashing", "during the", "critical", "systems", "to crash", "for crashing"],
    answer: ["the system", "from crashing", "during the", "critical"],
    explanation: "The correct sentence is: 'They want to prevent the system from crashing during the critical peak hours.'",
    koreanExplanation: "그들은 중요한 피크 시간대 동안 시스템이 오작동하는 것을 예방하고 싶어 합니다. 'prevent A from B(-ing)' 구문과 전치사 'during'의 매핑입니다.",
    grammarPoints: "prevent A from -ing, 전치사 during",
    paraphrases: [
      "The upgrade is meant to stop system outages during peak registration periods.",
      "They aim to secure the network against database failure when traffic is highest."
    ]
  },
  {
    id: "L4-037",
    level: 4,
    context: "Did you apply for the summer residency?",
    sentenceTemplate: "Yes, I submitted _____ _____ _____ _____ the priority deadline.",
    chunks: ["my application", "weeks before", "the official", "announcement of", "applications", "weekly", "announcing"],
    answer: ["my application", "weeks before", "the official", "announcement of"],
    explanation: "The correct sentence is: 'Yes, I submitted my application weeks before the official announcement of the priority deadline.'",
    koreanExplanation: "네, 우선 마감일 공식 발표가 있기 몇 주 전에 지원서를 제출했습니다. 명사구 'weeks before'와 전치사구 및 명사 수식어의 조화로운 구성입니다.",
    grammarPoints: "명사구 수식, 전치사 before",
    paraphrases: [
      "I turned in my paperwork well in advance of the priority deadline release.",
      "My file was sent in weeks prior to the date they declared the early deadline."
    ]
  },
  {
    id: "L4-038",
    level: 4,
    context: "Why did the council postpone the vote?",
    sentenceTemplate: "They decided to wait _____ _____ _____ _____ consensus.",
    chunks: ["until they", "could reach", "a clear", "majority", "unless", "reaching", "major"],
    answer: ["until they", "could reach", "a clear", "majority"],
    explanation: "The correct sentence is: 'They decided to wait until they could reach a clear majority consensus.'",
    koreanExplanation: "그들은 확실한 다수의 의견 일치에 도달할 수 있을 때까지 기다리기로 결정했습니다. 접속사 'until' 뒤에 주어+조동사 과거 'could reach'가 이끄는 절이 결합됩니다.",
    grammarPoints: "접속사 until, 조동사 could, 형용사 수식",
    paraphrases: [
      "The vote was delayed to allow the board to build a stronger consensus.",
      "They postponed the ballot until a distinct majority agreed on the motion."
    ]
  },
  {
    id: "L4-039",
    level: 4,
    context: "Why are you writing a research proposal?",
    sentenceTemplate: "It is required _____ _____ _____ _____ the funding.",
    chunks: ["in order", "to secure", "sufficient university", "grants for", "for", "securing", "sufficiently"],
    answer: ["in order", "to secure", "sufficient university", "grants for"],
    explanation: "The correct sentence is: 'It is required in order to secure sufficient university grants for the funding.'",
    koreanExplanation: "충분한 대학 지원금을 확보하기 위해 그것이 필요합니다. 목적의 부사구 'in order to + 동사원형'과 명사를 수식하는 형용사 및 전치사의 연계입니다.",
    grammarPoints: "목적 부사구 in order to, 형용사-명사 수식",
    paraphrases: [
      "Drafting a proposal is necessary to guarantee funding from the university board.",
      "I must write this plan to secure adequate institutional grants for my study."
    ]
  },
  {
    id: "L4-040",
    level: 4,
    context: "Why did you choose this university?",
    sentenceTemplate: "I was attracted _____ _____ _____ _____ program.",
    chunks: ["by its", "excellent reputation", "in the", "scientific", " reputation of", "scientist", "to its"],
    answer: ["by its", "excellent reputation", "in the", "scientific"],
    explanation: "The correct sentence is: 'I was attracted by its excellent reputation in the scientific program.'",
    koreanExplanation: "과학 프로그램 영역에서 이 대학이 지닌 훌륭한 명성에 끌렸습니다. 수동태를 구성하는 전치사 'by'와 소유격 'its', 그리고 형용사들이 명사구를 수식합니다.",
    grammarPoints: "수동태 전치사 by, 소유격 지시사, 명사구 수식",
    paraphrases: [
      "The university's stellar standing in science was what drew me here.",
      "I selected this school owing to its famous reputation for scientific disciplines."
    ]
  },
  {
    id: "L4-041",
    level: 4,
    context: "What did the professor say about the final essay?",
    sentenceTemplate: "He emphasized that _____ _____ _____ _____ allowed.",
    chunks: ["no late", "submissions will", "be accepted", "unless prior", "submission", "accepting", "without"],
    answer: ["no late", "submissions will", "be accepted", "unless prior"],
    explanation: "The correct sentence is: 'He emphasized that no late submissions will be accepted unless prior approval is allowed.'",
    koreanExplanation: "그는 사전 승인이 없는 한 늦은 제출물은 받아들여지지 않을 것임을 강조했습니다. 부정 형용사 'no'가 주어 'submissions'를 꾸미고, 미래 수동태 'will be accepted'와 접속사 'unless'가 옵니다.",
    grammarPoints: "부정 형용사 no, 수동태 will be accepted, 조건 접속사 unless",
    paraphrases: [
      "Late essays will not be evaluated unless you get permission beforehand.",
      "The instructor made it clear that overdue work is rejected unless authorized in advance."
    ]
  },
  {
    id: "L4-042",
    level: 4,
    context: "Why was the laboratory locked yesterday?",
    sentenceTemplate: "It was closed _____ _____ _____ _____ maintenance.",
    chunks: ["on account", "of urgent", "and unscheduled", "facility", "because", "facilities", "urgently"],
    answer: ["on account", "of urgent", "and unscheduled", "facility"],
    explanation: "The correct sentence is: 'It was closed on account of urgent and unscheduled facility maintenance.'",
    koreanExplanation: "긴급하고 예정에 없던 시설 유지 보수 때문에 폐쇄되었습니다. 전치사구 'on account of' 뒤에 병렬 연결된 형용사구 'urgent and unscheduled'가 명사를 꾸밉니다.",
    grammarPoints: "전치사구 on account of, 등위접속사 and의 형용사 수식 병렬",
    paraphrases: [
      "The lab shut down because they had to perform emergency facilities repairs.",
      "It was locked due to unexpected and pressingly required system checks."
    ]
  },
  {
    id: "L4-043",
    level: 4,
    context: "Are we allowed to work individually on the project?",
    sentenceTemplate: "No, you must work _____ _____ _____ _____ team members.",
    chunks: ["collaboratively with", "your assigned", "group of", "four", "collaborative", "assigning", "groups"],
    answer: ["collaboratively with", "your assigned", "group of", "four"],
    explanation: "The correct sentence is: 'No, you must work collaboratively with your assigned group of four team members.'",
    koreanExplanation: "아니요, 지정된 4명의 그룹 팀원들과 협동하여 작업해야 합니다. 부사 'collaboratively'가 동사를 수식하고, 전치사 'with' 및 과거분사 'assigned'가 명사구를 수식합니다.",
    grammarPoints: "부사 수식, 과거분사의 명사 수식, 수량 형용사",
    paraphrases: [
      "Collaborative teamwork inside your allocated four-person group is mandatory.",
      "You are required to work together in the assigned squad of four members."
    ]
  },
  {
    id: "L4-044",
    level: 4,
    context: "Why is the registration system so slow?",
    sentenceTemplate: "It is struggling _____ _____ _____ _____ users.",
    chunks: ["to cope with", "the sudden", "influx of", "online", "to coping", "suddenly", "influge"],
    answer: ["to cope with", "the sudden", "influx of", "online"],
    explanation: "The correct sentence is: 'It is struggling to cope with the sudden influx of online users.'",
    koreanExplanation: "그것은 온라인 사용자의 갑작스러운 유입에 대처하느라 어려움을 겪고 있습니다. 'struggle + to부정사' 구문과 구동사 'cope with', 명사를 꾸미는 형용사의 배치입니다.",
    grammarPoints: "struggle to부정사, 구동사 cope with, 명사 수식",
    paraphrases: [
      "The server is having trouble managing the abrupt rise in web traffic.",
      "It is barely handling the unexpected wave of students logging in at the same time."
    ]
  },
  {
    id: "L4-045",
    level: 4,
    context: "Why was the student disqualified from the contest?",
    sentenceTemplate: "He was disqualified _____ _____ _____ _____ guidelines.",
    chunks: ["for failing", "to follow", "the strict", "presentation", "to fail", "following", "strictly"],
    answer: ["for failing", "to follow", "the strict", "presentation"],
    explanation: "The correct sentence is: 'He was disqualified for failing to follow the strict presentation guidelines.'",
    koreanExplanation: "그는 엄격한 발표 가이드라인을 따르지 않아서 자격이 박탈되었습니다. 원인의 전치사 'for' + 동명사 'failing', 그리고 'fail to + 동사원형'의 연동입니다.",
    grammarPoints: "원인의 전치사 for + 동명사, fail to 부정사",
    paraphrases: [
      "Neglecting to adhere to the rigid tournament rules led to his disqualification.",
      "His dismissal was caused by his failure to satisfy the submission standards."
    ]
  },
  {
    id: "L4-046",
    level: 4,
    context: "How did the department improve student satisfaction?",
    sentenceTemplate: "They did so _____ _____ _____ _____ complaints.",
    chunks: ["by actively", "listening to", "individual student", "academic", "actively to", "listen", "individually"],
    answer: ["by actively", "listening to", "individual student", "academic"],
    explanation: "The correct sentence is: 'They did so by actively listening to individual student academic complaints.'",
    koreanExplanation: "그들은 개별 학생들의 학업 관련 불만 사항을 적극적으로 경청함으로써 이를 해결했습니다. 수단의 'by + 동명사'와 동명사를 수식하는 부사 'actively', 전치사 'listening to'의 결합입니다.",
    grammarPoints: "수단 전치사 by + 동명사, 부사의 동명사 수식, 구동사 listen to",
    paraphrases: [
      "Satisfaction rates rose because they paid close attention to personal class complaints.",
      "They resolved the issue through active monitoring of feedback from students."
    ]
  },
  {
    id: "L4-047",
    level: 4,
    context: "Why did you choose to take the online course?",
    sentenceTemplate: "It is convenient _____ _____ _____ _____ lectures from home.",
    chunks: ["because it", "allows me", "to watch", "recorded", "allowing", "to watching", "record"],
    answer: ["because it", "allows me", "to watch", "recorded"],
    explanation: "The correct sentence is: 'It is convenient because it allows me to watch recorded lectures from home.'",
    koreanExplanation: "집에서 녹화된 강의를 볼 수 있게 해주기 때문에 편리합니다. 이유 접속사 'because'가 절을 이끌고, 'allow A to-v' 구문과 과거분사 'recorded'가 명사를 수식합니다.",
    grammarPoints: "이유 접속사 because, allow + 목적어 + to부정사, 과거분사의 전치 수식",
    paraphrases: [
      "The course is highly convenient as it grants access to video lectures at home.",
      "I enrolled online because the system enables viewing saved presentations remotely."
    ]
  },
  {
    id: "L4-048",
    level: 4,
    context: "Why was the team project grade so low?",
    sentenceTemplate: "We failed to cooperate _____ _____ _____ _____ roles.",
    chunks: ["effectively despite", "having clearly", "defined", "individual", "effective", "have", "definitely"],
    answer: ["effectively despite", "having clearly", "defined", "individual"],
    explanation: "The correct sentence is: 'We failed to cooperate effectively despite having clearly defined individual roles.'",
    koreanExplanation: "개별 역할이 명확하게 규정되어 있었음에도 불구하고 효과적으로 협력하는 데 실패했습니다. 부사 'effectively'와 양보 전치사 'despite' 뒤에 동명사구 'having clearly defined'가 결합된 세련된 구조입니다.",
    grammarPoints: "부사 수식, 전치사 despite + 동명사 완료형/수동형 구조",
    paraphrases: [
      "Although each member's duties were well established, we didn't work together well.",
      "We didn't coordinate tasks successfully in spite of having structured duties."
    ]
  },
  {
    id: "L4-049",
    level: 4,
    context: "Why did the board reject the campus expansion plan?",
    sentenceTemplate: "They rejected it _____ _____ _____ _____ space.",
    chunks: ["mainly because", "the university", "lacks sufficient", "physical", "because of", "lack", "sufficiently"],
    answer: ["mainly because", "the university", "lacks sufficient", "physical"],
    explanation: "The correct sentence is: 'They rejected it mainly because the university lacks sufficient physical space.'",
    koreanExplanation: "대학 측에 물리적 공간이 충분하지 않기 때문에 주로 거부되었습니다. 접속사 'because'가 이끄는 절에 주어 수 일치 단수동사 'lacks'와 명사를 꾸미는 형용사의 수식 구조입니다.",
    grammarPoints: "접속사 because, 주어-동사 수 일치 (university - lacks), 형용사 수식",
    paraphrases: [
      "A primary reason for the rejection was the campus's lack of adequate ground area.",
      "They declined the layout mostly because the school does not have enough land."
    ]
  },
  {
    id: "L4-050",
    level: 4,
    context: "Can we check out reference books from the library?",
    sentenceTemplate: "You cannot check them out _____ _____ _____ _____ librarian.",
    chunks: ["unless you", "obtain special", "permission from", "the head", "if", "obtaining", "specially"],
    answer: ["unless you", "obtain special", "permission from", "the head"],
    explanation: "The correct sentence is: 'You cannot check them out unless you obtain special permission from the head librarian.'",
    koreanExplanation: "수석 사서로부터 특별 허가를 얻지 못하는 한 책들을 대출할 수 없습니다. 조건 접속사 'unless'와 명사구를 목적어로 취하는 타동사구의 결합입니다.",
    grammarPoints: "조건 접속사 unless, 구동사 obtain from, 형용사 수식",
    paraphrases: [
      "Reference materials are not available for loan unless the chief librarian approves it.",
      "You must secure a specific waiver from the library head to take those volumes out."
    ]
  },
  {
    id: "L4-051",
    level: 4,
    context: "Why did the research fail to yield results?",
    sentenceTemplate: "The study failed _____ _____ _____ _____ incorrect parameters.",
    chunks: ["primarily due", "to using", "a set of", "entirely", "primary", "to use", "entire"],
    answer: ["primarily due", "to using", "a set of", "entirely"],
    explanation: "The correct sentence is: 'The study failed primarily due to using a set of entirely incorrect parameters.'",
    koreanExplanation: "그 연구는 주로 전적으로 잘못된 매개변수 세트를 사용한 탓에 실패했습니다. 부사 'primarily'의 수식과 이유 전치사구 'due to' 뒤에 동명사 'using'을 배치한 형태입니다.",
    grammarPoints: "부사 수식, 전치사 due to + 동명사, 부사-형용사 수식",
    paraphrases: [
      "The main catalyst for the failed study was applying completely faulty calculations.",
      "It fell short of success mostly because they relied on wholly erroneous criteria."
    ]
  },
  {
    id: "L4-052",
    level: 4,
    context: "Why is the department changing the curriculum?",
    sentenceTemplate: "They modified it _____ _____ _____ _____ modern trends.",
    chunks: ["in order", "to integrate", "more practical", "courses on", "for", "integrating", "practically"],
    answer: ["in order", "to integrate", "more practical", "courses on"],
    explanation: "The correct sentence is: 'They modified it in order to integrate more practical courses on modern trends.'",
    koreanExplanation: "현대적 경향에 대한 더 실용적인 강좌들을 통합하기 위해 교과과정을 수정했습니다. 목적의 'in order to + 동사원형'과 비교급 형용사 수식 명사구의 결합입니다.",
    grammarPoints: "목적 부사구 in order to, 형용사 비교급 수식, 전치사 on",
    paraphrases: [
      "The adjustment was implemented to incorporate highly applicable classes regarding modern styles.",
      "They revised the syllabus so they could include hands-on training for current topics."
    ]
  },
  {
    id: "L4-053",
    level: 4,
    context: "Why did she cancel her research presentation?",
    sentenceTemplate: "She postponed it _____ _____ _____ _____ data discrepancies.",
    chunks: ["in spite of", "having already", "resolved the", "minor", "despite of", "have", "resolving"],
    answer: ["in spite of", "having already", "resolved the", "minor"],
    explanation: "The correct sentence is: 'She postponed it in spite of having already resolved the minor data discrepancies.'",
    koreanExplanation: "사소한 데이터 불일치를 이미 해결했음에도 불구하고 발표를 연기했습니다. 양보 전치사구 'in spite of' 뒤에 완료형 동명사 'having already resolved'를 연결한 고난도 패턴입니다.",
    grammarPoints: "양보 전치사구 in spite of, 완료형 동명사구, 형용사 수식",
    paraphrases: [
      "She put off the talk even though the small database errors had already been fixed.",
      "Although she had sorted out the slight calculations issues, she chose to delay the event."
    ]
  },
  {
    id: "L4-054",
    level: 4,
    context: "How did the professor respond to the noise?",
    sentenceTemplate: "He stopped lecturing _____ _____ _____ _____ classroom behavior.",
    chunks: ["to voice", "his strong", "disapproval of", "disruptive", "for voicing", "strongly", "disapproval for"],
    answer: ["to voice", "his strong", "disapproval of", "disruptive"],
    explanation: "The correct sentence is: 'He stopped lecturing to voice his strong disapproval of disruptive classroom behavior.'",
    koreanExplanation: "그는 수업을 방해하는 교실 행동에 강한 반대의 뜻을 나타내기 위해 강의를 멈췄습니다. 목적의 to부정사 'to voice'와 명사구 'disapproval of', 그리고 형용사 'disruptive'가 연결됩니다.",
    grammarPoints: "목적의 to부정사, 구동사 voice disapproval of, 형용사 수식",
    paraphrases: [
      "He paused the class to express heavy complaints about the noisy students.",
      "The instructor halted speaking to register his objection to classroom disturbance."
    ]
  },
  {
    id: "L4-055",
    level: 4,
    context: "Why is the math department offering free tutoring?",
    sentenceTemplate: "They aim to assist _____ _____ _____ _____ basic algebra.",
    chunks: ["students who", "have difficulty", "comprehending the", "most", "student", "having", "difficulty of"],
    answer: ["students who", "have difficulty", "comprehending the", "most"],
    explanation: "The correct sentence is: 'They aim to assist students who have difficulty comprehending the most basic algebra.'",
    koreanExplanation: "그들은 가장 기초적인 대수학을 이해하는 데 어려움을 느끼는 학생들을 돕고자 합니다. 주격 관계대명사 'who'가 이끄는 절 내에 'have difficulty -ing' 구문이 배치되었습니다.",
    grammarPoints: "주격 관계대명사 who, have difficulty + 동명사(comprehending), 최상급 수식",
    paraphrases: [
      "The program helps undergraduates who struggle to grasp elementary mathematical rules.",
      "They target support for students finding it hard to comprehend core calculus topics."
    ]
  },
  {
    id: "L4-056",
    level: 4,
    context: "Did the university cancel the outdoor concert?",
    sentenceTemplate: "Yes, they cancelled it _____ _____ _____ _____ warning.",
    chunks: ["because of", "the severe", "weather alert", "issued by", "because", "severely", "issuing"],
    answer: ["because of", "the severe", "weather alert", "issued by"],
    explanation: "The correct sentence is: 'Yes, they cancelled it because of the severe weather alert issued by the government.'",
    koreanExplanation: "네, 정부가 발령한 심각한 기상 경보 때문에 취소했습니다. 'because of' 전치사구 뒤에 명사구와 이를 수식하는 과거분사구 'issued by'가 이어집니다.",
    grammarPoints: "전치사 because of, 과거분사구 후치수식 (issued by)",
    paraphrases: [
      "The festival was called off due to a major storm warnings announced by officials.",
      "In light of a harsh weather bulletin sent out by experts, the show was canceled."
    ]
  },
  {
    id: "L4-057",
    level: 4,
    context: "Why did you rewrite the research methodology?",
    sentenceTemplate: "I updated it _____ _____ _____ _____ previous errors.",
    chunks: ["so as", "to prevent", "repeating the", "same", "so that", "preventing", "repeat"],
    answer: ["so as", "to prevent", "repeating the", "same"],
    explanation: "The correct sentence is: 'I updated it so as to prevent repeating the same previous errors.'",
    koreanExplanation: "이전의 동일한 실수를 반복하는 것을 막기 위해 업데이트했습니다. 목적의 'so as to + 동사원형'과 'prevent + 동명사(-ing)'가 자연스럽게 결합된 문장입니다.",
    grammarPoints: "목적 부사구 so as to, prevent + 동명사, 지시형용사 same",
    paraphrases: [
      "The section was revised in order to avoid replicating previous mistakes.",
      "I changed the text so that I would not fall into making the identical faults again."
    ]
  },
  {
    id: "L4-058",
    level: 4,
    context: "Why is the school introducing code of conduct?",
    sentenceTemplate: "It was designed _____ _____ _____ _____ conflicts.",
    chunks: ["to help", "students resolve", "interpersonal", "disputes and", "for helping", "resolving", "dispute"],
    answer: ["to help", "students resolve", "interpersonal", "disputes and"],
    explanation: "The correct sentence is: 'It was designed to help students resolve interpersonal disputes and conflicts.'",
    koreanExplanation: "학생들이 대인 관계의 분쟁과 갈등을 해결하는 것을 돕기 위해 그것이 설계되었습니다. 준사역동사 'help + 목적어 + 동사원형(resolve)'과 명사 병렬 및 형용사 수식 구조입니다.",
    grammarPoints: "목적의 to부정사, help + 목적어 + 동사원형, 형용사 수식, 명사 병렬",
    paraphrases: [
      "The policy was created to guide undergraduates through settling personal arguments.",
      "It aims to assist students in finding solutions to peer relationship disagreements."
    ]
  },
  {
    id: "L4-059",
    level: 4,
    context: "Why was the graduation ceremony shifted indoors?",
    sentenceTemplate: "It was moved _____ _____ _____ _____ rain forecast.",
    chunks: ["partly on", "account of", "an unexpected", "heavy", "part", "account", "unexpectedly"],
    answer: ["partly on", "account of", "an unexpected", "heavy"],
    explanation: "The correct sentence is: 'It was moved partly on account of an unexpected heavy rain forecast.'",
    koreanExplanation: "부분적으로 예상치 못한 폭우 예보로 인해 이동했습니다. 전치사구 'on account of'를 수식하는 부사 'partly'와 명사구의 배치입니다.",
    grammarPoints: "부사 수식, 전치사구 on account of, 형용사 중첩 수식",
    paraphrases: [
      "The venue was changed in part because they expected sudden rainstorms.",
      "We relocated the commencement mostly due to predictions of sudden heavy rain."
    ]
  },
  {
    id: "L4-060",
    level: 4,
    context: "Did you manage to join the biology project?",
    sentenceTemplate: "No, I was rejected _____ _____ _____ _____ requirements.",
    chunks: ["since I", "could not", "satisfy the", "strict prerequisite", "since", "satisfying", "strictly"],
    answer: ["since I", "could not", "satisfy the", "strict prerequisite"],
    explanation: "The correct sentence is: 'No, I was rejected since I could not satisfy the strict prerequisite requirements.'",
    koreanExplanation: "아니요, 엄격한 선이수 요구 조건을 충족할 수 없었기 때문에 거절당했습니다. 이유 접속사 'since'가 주어와 조동사 과거 부정형 'could not'이 이끄는 절을 연결합니다.",
    grammarPoints: "이유 접속사 since, 조동사 부정형 + 동사원형, 형용사 수식",
    paraphrases: [
      "I was denied entry because I failed to meet the rigid requirements beforehand.",
      "They turned me down as I was unable to fulfill the mandatory qualifications."
    ]
  }
];
