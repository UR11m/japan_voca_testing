# 일본어 퀴즈 (日本語クイズ)

일본어 학습을 위한 퀴즈 웹사이트 + 문의하기(Resend 이메일) 기능입니다.

## 사용 방법

1. 퀴즈: 퀴즈 유형(히라가나 / 가타카나 / 기초 어휘)과 문제 수를 선택한 뒤 퀴즈를 시작합니다.
2. 문의하기: 푸터의 **문의하기** 버튼을 누르면 이름·전화번호·이메일 입력 폼이 뜹니다. 제출하면 설정한 이메일(59274daf@gmail.com)로 문의 내용이 Resend를 통해 전송됩니다.

## 퀴즈 유형

- **히라가나**: 히라가나 문자 → 로마자 읽기 선택
- **가타카나**: 가타카나 문자 → 로마자 읽기 선택
- **기초 어휘**: 일본어 단어/문장 → 한국어 뜻 선택

## 문의하기 + Resend 설정

문의 제출 시 **Resend**로 이메일이 전송됩니다.

1. [Resend](https://resend.com)에서 가입 후 API 키를 발급받습니다.
2. 프로젝트 루트에 `.env` 파일을 만들고 아래처럼 설정합니다.

```env
RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_TO_EMAIL=59274daf@gmail.com
CONTACT_FROM_EMAIL=onboarding@resend.dev
```

- `CONTACT_TO_EMAIL`: 문의를 받을 이메일 (기본: 59274daf@gmail.com)
- `CONTACT_FROM_EMAIL`: Resend 테스트용은 `onboarding@resend.dev` 사용. 본인 도메인을 인증하면 `contact@yourdomain.com` 등으로 변경 가능합니다.

3. 서버를 실행한 뒤 브라우저에서 `http://localhost:3000`으로 접속해 문의하기를 사용합니다.

## 실행

### 퀴즈만 사용 (문의 전송 없음)

- `index.html`을 브라우저에서 직접 열면 퀴즈만 사용할 수 있습니다. 문의하기 제출 시 서버가 없으면 "네트워크 오류"가 납니다.

### 퀴즈 + 문의하기 (이메일 전송)

```bash
npm install
cp .env.example .env
# .env에 RESEND_API_KEY 등 입력
npm start
```

브라우저에서 **http://localhost:3000** 으로 접속하면 퀴즈와 문의하기가 모두 동작합니다.

## Vercel 배포

이 프로젝트는 **정적 사이트 + 서버리스 API** 구조로 Vercel에 배포됩니다.

- **루트(/)**: `index.html`, `styles.css`, `quiz.js`가 정적 파일로 제공됩니다.
- **문의 API**: `/api/contact`는 `api/contact.js` 서버리스 함수로 동작합니다.
- `vercel.json`에서 `framework: null`, `buildCommand: ""`로 설정해 Express 서버 대신 정적 호스팅이 되도록 했습니다.

**배포 후 문의 이메일을 받으려면** Vercel 대시보드 → 프로젝트 → Settings → Environment Variables에 다음을 추가하세요.

- `RESEND_API_KEY` (필수)
- `CONTACT_TO_EMAIL` (선택, 기본값: 59274daf@gmail.com)
- `CONTACT_FROM_EMAIL` (선택, 기본값: onboarding@resend.dev)

GitHub 저장소 연결 후 푸시하면 자동 배포됩니다. **Root Directory**는 비워 두세요.

## 파일 구성

- `index.html` - 메인 페이지 (퀴즈 + 문의 모달)
- `styles.css` - 스타일
- `quiz.js` - 퀴즈 + 문의 폼 클라이언트 로직
- `api/contact.js` - Vercel 서버리스 함수 (문의 시 Resend로 이메일 전송)
- `vercel.json` - Vercel 배포 설정 (정적 + API)
- `server.js` - 로컬용 Express 서버 (선택, `npm start` 시 사용)
- `package.json` - Node 의존성
- `.env.example` - 환경 변수 예시 (복사해 `.env`로 사용)
