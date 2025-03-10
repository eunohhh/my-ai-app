# AI 채팅 애플리케이션

Next.js와 Vercel AI SDK를 사용하여 제작된 AI 채팅 애플리케이션으로, GPT 및 Grok을 포함한 여러 AI 모델을 지원합니다.

## 주요 기능

- 실시간 스트리밍 채팅 인터페이스
- 다양한 AI 모델 지원:
  - GPT-4 (OpenAI)
  - Grok (xAI)
- Supabase를 이용한 채팅 기록 저장
- Tailwind CSS 기반의 최신 UI
- Next.js 15을 활용한 서버 사이드 렌더링

## 기술 스택

- **프레임워크**: Next.js 15
- **AI SDK**: Vercel AI SDK
- **데이터베이스**: Supabase
- **스타일링**: Tailwind CSS
- **UI 컴포넌트**: shadcn/ui
- **인증**: Supabase Auth

## 시작하기

1. 저장소를 클론합니다.
2. 의존성을 설치합니다:

```bash
   pnpm install
```

3. 환경 변수를 .env.local 파일에 설정합니다:

```
   OPENAI_API_KEY=your_openai_api_key
   XAI_API_KEY=your_xai_api_key
   SUPABASE_URL=your_supabase_url
   SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. 개발 서버를 시작합니다:

```bash
   pnpm dev
```

5. 브라우저에서 http://localhost:3000 을 엽니다.

## 프로젝트 구조

- /app - Next.js 앱 라우터 페이지 및 API 라우트
- /components - React 컴포넌트
- /lib - 유틸리티 함수 및 AI 제공자
- /types - TypeScript 타입 정의
