# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**LernQuest** - 딸아이를 위한 라틴어 & 수학 학습 게임 (독일어 UI)
- 원본: Lovable로 제작 (lateinmathe.lovable.app)
- GitHub: Newsdaddy/lateinmathe
- 기술 스택: Vite + React + TypeScript + Tailwind + shadcn/ui

## Commands

```bash
npm run dev      # 개발 서버 (기본 포트 5173, 사용 중이면 자동 변경)
npm run build    # 프로덕션 빌드
npm run preview  # 빌드된 버전 미리보기
npm run test     # Vitest 테스트
```

## 사용자 작업 방식

**중요: Lovable 토큰이 없음 → 로컬에서 작업**

1. 로컬에서 `npm run dev`로 프리뷰 보면서 수정
2. 수정 완료 후 GitHub에 푸시
3. 배포는 별도 진행 (Vercel 등)

Lovable 대시보드에서 Pull 기능 없음 (Push만 가능)

## Architecture

### 핵심 파일

```
src/
├── lib/
│   ├── useGameState.ts   # 게임 상태 관리 (localStorage 저장)
│   └── gameData.ts       # 문제 데이터, 캐릭터 진화 단계
├── pages/
│   ├── Index.tsx         # 메인 화면 (XP, Streak, 미션 카드)
│   ├── LearningSession.tsx  # 학습 세션 (라틴어 5문제 → 수학 5문제)
│   └── CharacterWorld.tsx   # 캐릭터 진화 확인
└── components/
    ├── QuestionCard.tsx  # 문제 카드 UI
    ├── XPBar.tsx         # XP 진행바
    └── StreakBadge.tsx   # 연속 학습 배지
```

### 게임 상태 (localStorage)

키: `rpg-learn-state`

```typescript
interface GameState {
  xp: number;                    // 경험치
  streak: number;                // 연속 학습 일수
  todayCompleted: boolean;       // 오늘 미션 완료 여부
  correctToday: number;          // 오늘 맞춘 문제 수
  totalToday: number;            // 오늘 푼 문제 수
  lastPlayedDate: string | null; // 마지막 플레이 날짜
  completedQuestionIds: string[]; // 완료한 문제 ID들
}
```

### 캐릭터 진화 단계

| 레벨 | XP | 이름 | 이모지 |
|------|-----|------|--------|
| 1 | 0 | Magisches Ei | 🥚 |
| 2 | 100 | Funkelnder Keim | ✨ |
| 3 | 250 | Kleiner Schüler | 🐣 |
| 4 | 500 | Wissenswanderer | 🦊 |
| 5 | 800 | Magisches Wesen | 🐉 |
| 6 | 1200 | Runenleser | 📖 |
| 7 | 1700 | Zauberlehrling | 🧙 |
| 8 | 2300 | Weiser Gelehrter | 🦉 |
| 9 | 3000 | Meistermagier | ⭐ |
| 10 | 4000 | Lateinischer Wächter | 🏛️ |

### XP 시스템

- 정답 1개: +10 XP
- 일일 미션 완료 보너스: +30 XP
- 미션: 라틴어 5문제 + 수학 5문제

## 현재 진행 상황 (2026-03-13)

### 완료된 작업
- localStorage 저장/로드에 디버깅 로그 추가
- 에러 발생 시 console.error로 출력 (기존엔 조용히 무시)

### 딸아이가 보고한 문제들
1. **Streak이 항상 깨짐** - 저장이 안 됨
2. **XP가 사라짐** - 저장이 안 됨
3. **똑같은 문제만 나옴** - 문제 중복

### 분석 결과
코드 로직은 올바름. 문제는 **Lovable preview 환경**에서 발생 가능:
- Preview URL이 변경될 때마다 localStorage가 리셋됨
- 해결책: 고정 URL로 배포 (Vercel 등)

### 다음 할 일
1. 로컬에서 테스트하여 localStorage 작동 확인
2. 문제 없으면 Vercel 등에 배포
3. 고정 URL로 딸아이에게 공유

## 문제 데이터

- 라틴어: 21문제 (단어, 문법, 번역)
- 수학: 24문제 (분수, 방정식, 기하학, 제곱근)
- 난이도: Gymnasium 5-7학년 수준

## Language

- UI: 독일어 (Deutsch)
- 코드 주석: 영어/한국어
- 문서: 한국어
