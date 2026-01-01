# 📒 Moment App

### 🗒️ 이루고 싶은 목표와 할 일들을 관리해 보세요!

![demo_image](/assets/demo.png)
🔗 **Demo:** [Moment App](https://moment-of-today.netlify.app/)

<br/>

## 📌 프로젝트 개요

- Moment App은 **사용자의 목표 관리와 생산성을 높이는 To-Do List 웹 애플리케이션**입니다.
- HTML, CSS, Javascript로 제작되어 **할 일 관리, D-Day, 랜덤 명언, 실시간 날씨 등의 기능을 제공**합니다.
- 또한 **Netlify Functions 기반 서버리스 구조를 적용**해 API Key 보안을 강화하고,
  **반응형 디자인**으로 모바일 환경에서도 매끄러운 UX를 제공합니다.

  <br/>

## 💡 주요 기능

### ✅ To-Do List

- 할 일의 추가, 삭제, 완료 체크 가능
- `localStorage`를 이용한 데이터의 저장 기능으로 새로고침을 해도 데이터가 유지됨

### ✅ D-day List

- 사용자가 지정한 날짜까지 남은 일 수를 자동으로 계산하여 D-day 형식으로 화면에 표시

### ✅ 시계와 날씨

- 초 단위로 갱신되는 실시간 시간을 표시
- `OpenWeather API`로 사용자 위치 기반 실시간 날씨 정보 제공

### ✅ 랜덤으로 바뀌는 배경화면과 명언

- 새로고침 시 배경화면과 명언이 랜덤으로 표시

### ✅ 반응형 디자인

- 다양한 디바이스 해상도에서 최적화된 인터페이스 제공
- CSS 미디어 쿼리(`@media`) 활용하여 화면 크기에 따라 레이아웃 조정

  <br/>

## 🔎 역할과 기여도

- 개인 프로젝트로 진행하여 **기획, 설계, 개발, 배포 전 과정**을 단독 수행
- 바닐라 Javascript만으로 **상태 관리(`localStorage`) 및 API 연동(`OpenWeather API`) 구조를 직접 설계**
- **Netlify Functions 기반 서버리스 구조를 적용**해, API 키 노출 문제를 해결하고 보안 수준을 강화
- **프로젝트 구조를 기능 단위로 분리**(`clock.js`, `todo.js`, `weather.js` 등)하여 유지보수성과 가독성 향상
- 단순 강의 복습을 넘어서 직접 기능을 추가/리팩토링하며 문제 해결 중심으로 확장

  <br/>

## 📁 프로젝트 구조

```
chrome-app-js
┣ css
┃ ┗ style.css
┣ js
┃ ┣ background.js
┃ ┣ clock.js
┃ ┣ dday.js
┃ ┣ greeting.js
┃ ┣ quotes.js
┃ ┣ todo.js
┃ ┗ weather.js
┣ netlify
┃ ┗ functions
┃ ┃ ┗ getWeather.js
┣ .env
┣ README.md
┣ index.html
┣ netlify.toml
┣ package-lock.json
┗ package.json
```

<br/>

## 🛠️ 사용한 기술 스택

| 분류                | 기술 / 도구                    | 설명                                    |
| ------------------- | ------------------------------ | --------------------------------------- |
| **Frontend**        | HTML, CSS, Javascript          | 구조 설계 및 동적 UI 구현               |
| **Storage**         | localStorage                   | 사용자 데이터(이름, D-Day, To-Do) 저장  |
| **API Integration** | OpenWeather API                | 실시간 날씨 데이터 연동                 |
| **Serverless**      | Netlify Functions              | API Key 보안 및 서버리스 프록시         |
| **Deployment**      | Netlify                        | GitHub 연동 자동 배포 및 환경 변수 관리 |

  <br/>

## 🚀 배포 방법

이 프로젝트는 GitHub와 연동되어있는 Netlify를 사용하여 자동 배포됩니다.
최신 코드를 GitHub에 push하면 **Netlify에서 자동으로 빌드 & 배포**됩니다.

### 🖥️ 로컬 실행 방법

이 프로젝트는 HTML, CSS, Javascript를 기반으로 동작하며,  
실시간 날씨 기능은 Netlify Functions를 통해 서버리스 API를 호출하는 구조로 구성되어 있습니다.

따라서 전체 기능을 테스트하려면 Netlify CLI를 사용해야 하며,  
정적 페이지 실행만 원하는 경우에는 Live Server로도 확인할 수 있습니다.  
📍 참고: 정적 페이지(Live Server)로 실행 시 Netlify Functions를 사용하는 날씨 기능은 작동하지 않습니다.

**1. 프로젝트 클론**

```bash
git clone https://github.com/eileen819/moment-app.git
cd moment-app
```

**2. 의존성 설치**

```bash
npm install
```

**3. `.env` 파일 생성**

```env
API_KEY=your_openweather_api_key
```

**4. Netlify CLI 실행 (로컬 서버 + 함수 통합 실행)**

```bash
netlify dev
```

> ✅ http://localhost:8888에서 모든 기능 확인 가능  
> (Functions 요청은 자동으로 /api/\*로 라우팅됨)

<br/>

## 🔄 개선 예정 기능 (업데이트 계획)

### ✔️ 할 일 수정 기능

- To-Do 항목 내부에 수정 아이콘 추가
- 모달 기반 편집 기능 추가

### ✔️ 카테고리별 필터링

- To-Do 항목을 분류할 수 있는 카테고리 기능을 추가하고 카테고리 별 필터링 기능 구현
- `localStorage와` 연동하여 카테고리 정보도 함께 유지할 수 있도록 구현

### ✔️ 디데이 추가 방식의 변경

- 캘린더 UI를 연동하여 달력에서 날짜를 직접 선택할 수 있도록 UX 개선
- 사용자의 입력 실수를 줄이고, 디데이 추가 과정을 보다 직관적으로 개선

<br />

## 📚 기술적 인사이트

### 📍 DOM 조작 & 이벤트 핸들링

- Javascript의 `addEventListener`, `querySelector` 등을 사용하여 동적인 UI를 구현

### 📍 로컬 스토리지를 활용한 데이터 저장 방법

- `localStorage`를 활용하여 사용자가 입력한 데이터를 브라우저에 저장
- 새로고침해도 데이터가 유지되도록 구현

### 📍 할 일 목록의 상태 관리 구현

- `push()`를 활용하여 새로운 To-Do 항목 추가
- `filter()`를 활용하여 기존 To-Do 항목을 삭제하는 기능을 구현

### 📍 비동기 처리

- `async/await`와 `try-catch`를 이용한 `OpenWeather API` 요청 및 에러 핸들링 경험
- 응답 데이터를 분석하고, 필요한 정보(온도, 날씨 상태)를 추출하여 UI에 반영

### 📍 Netlify Functions 기반 서버리스 API 프록시 구현

- 클라이언트 사이드에서 API Key가 노출되는 문제를 해결을 위해, `.env` 환경 변수와 Netlify Functions로 API Key를 보호하는 구조 설계

<br />
