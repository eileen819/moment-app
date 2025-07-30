# 📒 Moment App

사이트 주소와 화면캡처 넣기  
🔗 [Moment App](https://moment-of-today.netlify.app/)

<br/>

## 📌 프로젝트 개요

- Moment App은 **사용자의 목표 관리와 생산성을 높이는 To-Do List 웹 애플리케이션**입니다.
- HTML, CSS, JavaScript 학습을 위해 개발되었으며, 기존의 **할 일 관리 기능**뿐만 아니라, **D-Day 기능, 랜덤 명언, 실시간 날씨 정보**를 추가하여 **동기부여를 제공하는 기능**을 포함하고 있습니다. 또한, **반응형 디자인을 적용**하여 모바일에서도 편리하게 사용할 수 있도록 설계되었습니다.

  <br/>

## 💡 주요 기능

### ✅ To-Do List

- 사용자가 **해야할 일을 입력**해서 **목록에 추가**할 수 있음
- **체크박스를 클릭**해서 할 일의 **완료 체크**가 가능
- **휴지통 아이콘을 클릭**하여 할 일을 목록에서 **삭제**할 수 있음
- **`localStorage`를 활용한 데이터의 저장 기능**으로 새로고침을 해도 데이터가 유지됨

### ✅ D-day List

- 특정 날짜를 입력하면 해당 날짜까지 남은 기간을 계산해서 D-day 형식으로 화면에 보여줌

### ✅ 시계와 날씨

- 초 단위로 갱신되는 **실시간 시간**을 보여줌
- **OpenWeather API를 활용**하여 사용자의 위치 기반 날씨 정보 제공

### ✅ 랜덤으로 바뀌는 배경화면과 명언

- 새로고침 시 **배경화면과 명언이 랜덤으로 변경**됨

### ✅ 반응형 디자인

- 모바일 및 데스크탑 화면에서 최적화된 UI 제공
- CSS **미디어 쿼리(`@media`) 활용**하여 화면 크기에 따라 레이아웃 조정

  <br/>

## 🔎 역할과 기여도

- **개인 프로젝트**
- 기획, 설계, 개발 및 배포까지 **전 과정을 담당**
- 강의를 통해 배운 것들을 바탕으로 기본 기능을 구현한 후, **추가적인 기능을 직접 개발**하여 확장

  <br/>

## 🛠️ 사용한 기술 스택

- **HTML**: 웹 페이지 구조 및 설계
- **CSS**: 레이아웃 및 반응형 스타일링
- **JavaScript**: 동적 UI 기능 구현
- **localStorage**: 사용자 이름, D-Day 정보, To-Do 항목 저장 및 상태 관리
- **OpenWeather API**: 실시간 날씨 정보 제공
- **Netlify**: 정적 페이지 배포 및 Netlify Functions 기반 서버리스 API 프록시 구현, 환경 변수 설정을 통한 API 키 보안 관리

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

## 🚀 배포 방법

이 프로젝트는 GitHub와 연동되어있는 Netlify를 사용하여 자동 배포됩니다.
최신 코드를 GitHub에 push하면 **Netlify에서 자동으로 빌드 & 배포**됩니다.

---

### 🖥️ 로컬 실행 방법

이 프로젝트는 HTML, CSS, JavaScript를 기반으로 동작하며,  
**실시간 날씨 기능은 Netlify Functions를 통해 서버리스 API를 호출하는 구조**로 구성되어 있습니다.

따라서 **전체 기능을 테스트하려면 Netlify CLI를 사용해야** 하며,  
**정적 페이지 실행만 원하는 경우에는 Live Server로도 확인할 수 있습니다.**  
📍 참고: 정적 페이지(Live Server)로 실행 시 Netlify Functions를 사용하는 **날씨 기능은 작동하지 않습니다.**

---

**1. 프로젝트 클론**

```bash
$ git clone https://github.com/eileen819/moment-app.git
$ cd moment-app
```

**2. 의존성 설치**

```bash
$ npm install
```

**3. `.env` 파일 생성**

```env
API_KEY=your_openweather_api_key
```

**4. Netlify CLI 실행 (로컬 서버 + 함수 통합 실행)**

```bash
$ netlify dev
```

> ✅ http://localhost:8888에서 모든 기능 확인 가능  
> (Functions 요청은 자동으로 /api/\*로 라우팅됨)

<br/>

## 🔄 개선 예정 기능 (업데이트 계획)

### ✔️ 작성한 할 일의 내용을 수정

📍 문제  
현재 사용자가 한 번 입력한 할 일은 삭제만 가능하며, 수정 기능이 없음

👉 해결

- To-Do 목록의 **수정 아이콘을 클릭**하면 **수정 모드로 전환**되도록 UI를 개선할 예정
- 추가적으로, To-Do 내용의 수정은 **모달창을 띄우는 스타일을 적용하여 사용자 경험(UX)을 개선**할 계획

---

### ✔️ 카테고리 기능 추가

📍 문제  
현재 입력한 할 일을 카테고리별로 분류할 수 없어서, 사용자가 많은 할 일을 관리할 때 비효율적임.

👉 해결

- 사용자가 직접 **할 일의 카테고리를 추가 & 수정**할 수 있도록 UI를 개선할 예정
- **localStorage에 저장하여 카테고리 정보도 함께 유지**하도록 구현
- 필터링 기능 추가 → 특정 카테고리만 보기 기능 추가 예정

<br />

## 📚 기술적 학습 및 인사이트

- **DOM 조작 & 이벤트 핸들링**

  - JavaScript에서 `addEventListener`, `querySelector` 등을 사용하여 동적인 UI를 구현하는 방법을 학습

- **로컬 스토리지를 활용한 데이터 저장 방법**

  - `localStorage`를 활용하여 사용자가 입력한 데이터를 브라우저에 저장하고, 새로고침해도 유지되도록 하는 방법을 학습

- **할 일 목록의 상태 관리 구현**

  - JavaScript에서 `push()`를 활용하여 새로운 할 일을 배열에 추가하고, `filter()`를 활용하여 삭제하는 기능을 구현하는 방법을 학습

- **OpenWeather API 데이터 처리**

  - API 호출을 통해 받아온 JSON 데이터를 `async/await`를 이용하여 **비동기코드를 처리하는 방법**을 학습
  - 응답 데이터를 분석하고, 필요한 정보(온도, 날씨 상태)를 추출하여 UI에 반영함
  - `try-catch`를 이용한 에러 핸들링과 로딩 상태 관리 방법에 대해서 학습

- **Netlify Functions 기반 서버리스 API 프록시 구현**

  - **클라이언트 사이드에서 API Key가 노출되는 문제**를 해결을 위해 **`.env` 파일에 API Key를 숨기고 Netlify Functions 서버리스 함수를 사용하는 방법**을 학습
