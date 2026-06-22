# TOEFL iBT Writing Task 1 Build-a-Sentence Touch Practice App

아이패드 미니 6세대에 최적화된 터치 조작식 TOEFL iBT Writing Task 1 (Build a Sentence) 대비 모바일 연습 애플리케이션입니다. 키보드 입력 없이, 화면의 청크들을 순서대로 터치하여 정답 문장을 완성할 수 있습니다.

---

## 1. 실행 방법

로컬 개발 서버를 실행하려면 아래 단계를 따르세요.

### 필수 요구사항
- Node.js (v18 이상 권장)

### 패키지 설치 및 실행
1. 프로젝트 루트 디렉토리에서 패키지를 설치합니다.
   ```bash
   npm install
   ```
2. 로컬 개발 서버를 실행합니다.
   ```bash
   npm run dev
   ```
3. 브라우저에서 `http://localhost:5173`으로 접속합니다.
   - Chrome/Safari 개발자 도구(F12)에서 모바일 기기 보기 -> **iPad Mini** 해상도(768x1024) 세로 모드로 설정하여 테스트하시는 것을 권장합니다.

### 윈도우 PowerShell 실행 정책 오류 해결 방법
만약 `npm` 또는 `pnpm` 실행 시 스크립트 실행 권한 오류(`PSSecurityException`)가 발생한다면, 명령 프롬프트(CMD)를 사용하거나 명령어 뒤에 `.cmd`를 직접 붙여 실행해 주세요:
```powershell
npm.cmd install
npm.cmd run dev
```

---

## 2. 주요 파일 구조

```txt
src/
  components/
    HomeScreen.tsx       # 학습 설정(난이도, 문제 수, 타이머) 및 학습 통계 대시보드
    PracticeScreen.tsx   # 본 학습 화면 (문장 드래그/탭 빌더, 청크 뱅크, 타이머 및 정답 피드백)
    ResultScreen.tsx     # 학습 결과 리포트 (성취 점수 및 오답 복습 유도)
    ProgressBar.tsx      # 학습 진척도 바 컴포넌트
    StatsCard.tsx        # 홈 화면 누적 통계 표시 카드
  data/
    questions.ts         # 자체 제작한 100개의 고품질 TOEFL 학습 데이터베이스
  types/
    question.ts          # TypeScript 주요 데이터 구조 선언 (Question, Stats, Settings 등)
  utils/
    storage.ts           # localStorage를 이용한 학습 성적 기록 및 오답 복습용 유틸리티
    shuffle.ts           # Fisher-Yates 알고리즘 기반 청크 배열 셔플 유틸리티
  App.tsx                # 전역 상태 관리 및 라우팅 컨트롤러
  index.css              # iPad mini 6세대 최적화 및 프리미엄 터치 테마 CSS
  main.tsx               # Entry Point
index.html               # PWA 지원 및 모바일 뷰포트 설정
public/
  manifest.json          # PWA 홈 화면 추가 설정 파일
```

---

## 3. 구현된 핵심 기능

1. **난이도별 맞춤 학습**: Level 1부터 Level 5까지 점진적으로 복잡해지는 어순 문제(chunks)를 제공합니다.
2. **랜덤 출제 및 셔플**: 선택한 난이도 내에서 무작위로 추출하여 출제되며, 매번 청크 뱅크의 순서가 셔플되어 기억력에 의존하지 않도록 돕습니다.
3. **타이머 옵션**: 제한시간(30초, 45초, 60초, Off)을 적용해 실전 긴장감을 부여하되, 시간이 초과되더라도 자동 탈락 없이 학습을 계속할 수 있습니다.
4. **상세 피드백**: 정답/오답 결과 시 시각적 알림을 제공하며, 틀린 경우 `Try Again` 또는 `Show Answer`를 선택할 수 있습니다. 정답 해설에는 한국어 해석과 핵심 문법 포인트가 포함됩니다.
5. **학습 통계 대시보드**: 누적 풀이 수, 전체 정확도, 난이도별 정답률을 한눈에 차트로 볼 수 있습니다.
6. **오답 노트 (복습 모드)**: 틀린 문제가 자동으로 `reviewList`에 누적되어, 홈 화면의 "오답 복습" 버튼을 통해 틀린 문제만 모아 재학습할 수 있습니다. 복습 학습 시 다시 정답을 맞히면 오답 리스트에서 영구 제거할지 묻는 대화창이 노출됩니다.
7. **PWA 최적화**: iPad 홈 화면에 바로가기로 추가하여 네이티브 앱처럼 여백 없이 깔끔하게 몰입할 수 있도록 Manifest 및 Viewport를 튜닝했습니다.

---

## 4. 문제 데이터를 추가하는 방법

`src/data/questions.ts` 파일의 `questions` 배열에 아래 형식에 맞춰 새로운 문제 객체를 추가할 수 있습니다:

```typescript
{
  id: "L3-021",                               // 고유 ID (중복 불가능)
  level: 3,                                   // 난이도 (1 ~ 5)
  context: "Student A: I cannot locate the main hall.", // 대화 맥락 또는 질문
  sentenceTemplate: "Student B: It is _____ _____ _____ _____ the gym.", // 빈칸이 뚫린 문장 템플릿
  chunks: ["located", "directly", "opposite", "to", "stands", "in"], // 청크 뱅크에 표시할 단어들 (오답 포함 가능)
  answer: ["located", "directly", "opposite", "to"], // 템플릿의 _____ 순서대로 채워질 정확한 청크 배열
  koreanExplanation: "그것은 체육관 바로 맞은편에 위치해 있습니다.", // 한국어 해설
  grammarPoints: "위치 분사구 (located opposite to)" // 주요 타겟 문법 포인트
}
```
*주의: `sentenceTemplate` 내의 `_____`(언더바 5개) 개수와 `answer` 배열의 크기는 반드시 일치해야 합니다.*

---

## 5. iPad에서 사용하는 방법 (Safari 홈 화면 추가)

1. 로컬 환경에서 실행한 서버의 IP 주소(예: `http://192.168.x.x:5173`)를 알아냅니다.
2. iPad mini 6세대의 **Safari 브라우저**를 열고 해당 주소로 접속합니다.
3. 주소창 우측의 **공유 버튼(네모 안의 화살표 아이콘)**을 탭합니다.
4. 메뉴에서 **'홈 화면에 추가(Add to Home Screen)'**를 선택합니다.
5. 홈 화면에 생성된 앱 아이콘을 통해 진입하면 Safari의 주소창 및 하단바 없이 독립적인 전체 화면으로 매끄럽게 학습할 수 있습니다.
6. 모든 버튼은 최소 44px 이상의 터치 타겟과 충분한 여백으로 구성되어 터치 오동작이 최소화됩니다.

---

## 6. 향후 추가하면 좋은 기능

- **실제 iBT 채점 가이드라인과의 대조**: 문장이 구성된 직후 원어민 스타일의 패러프레이징 선택지를 추가 제공.
- **클라우드 동기화**: localStorage 대신 Firebase 등의 가벼운 데이터베이스를 엮어 기기 간 성적 연동.
- **사운드 피드백**: 정오답 판정 시 청각적 연출을 더해 학습 몰입감 극대화.
