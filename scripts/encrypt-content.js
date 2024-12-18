const CryptoJS = require('crypto-js');
const password = '';
const content = `
<article id="fullpage">
    <!-- NC Soft -->
    <section class="section active" data-tooltip="NC Soft" data-anchor="ncsoft">
      <div class="slide" data-anchor="index">
        <div class="fp-bg">
          <img class="image" src="/images/ncsoft.png" alt="NC Soft" />
        </div>
        <h2 class="index-title">NC Soft</h2>
        <ul class="index-list">
          <li class="item">
            <a class="link" href="#ncsoft/1">
              <h3 class="title">VARCO Studio</h3>
              <p class="date">2024년 6월 ~ 2024년 11월</p>
            </a>
          </li>
          <li class="item">
            <a class="link" href="#ncsoft/2">
              <h3 class="title">VARCO Art</h3>
              <p class="date">2023년 3월 ~ 2024년 6월</p>
            </a>
          </li>
          <li class="item">
            <a class="link" href="#ncsoft/3">
              <h3 class="title">Deeplift</h3>
              <p class="date">2022년 5월 ~ 2022년 10월</p>
            </a>
          </li>
          <li class="item">
            <a class="link" href="#ncsoft/4">
              <h3 class="title">AI 비디오 검색</h3>
              <p class="date">2022년 2월 ~ 2022년 4월</p>
            </a>
          </li>
          <li class="item">
            <a class="link" href="#ncsoft/5">
              <h3 class="title">AI 비디오 분석</h3>
              <p class="date">2021년 6월 ~ 2022년 2월</p>
            </a>
          </li>
          <li class="item">
            <a class="link" href="#ncsoft/6">
              <h3 class="title">블레이드 & 소울 2</h3>
              <p class="date">2021년 5월 ~ 2021년 6월</p>
            </a>
          </li>
          <li class="item">
            <a class="link" href="#ncsoft/7">
              <h3 class="title">아이온</h3>
              <p class="date">2020년 6월 ~ 2021년 6월</p>
            </a>
          </li>
          <li class="item">
            <a class="link" href="#ncsoft/8">
              <h3 class="title">트릭스터 M</h3>
              <p class="date">2020년 6월 ~ 2020년 10월</p>
            </a>
          </li>
          <li class="item">
            <a class="link" href="#ncsoft/9">
              <h3 class="title">공통 가이드북 서비스</h3>
              <p class="date">2020년 3월 ~ 2021년 6월</p>
            </a>
          </li>
          <li class="item">
            <a class="link" href="#ncsoft/10">
              <h3 class="title">리니지 2 M</h3>
              <p class="date">2019년 3월 ~ 2020년 11월</p>
            </a>
          </li>
        </ul>
      </div>
      <div class="slide" data-anchor="1">
        <div class="slide-wrap">
          <h3 class="slide-title">
            <span class="text">VARCO Studio</span>
            <span class="date">2024년 6월 ~ 2024년 11월</span>
          </h3>
          <p class="slide-role">마크업 (PC/모바일 반응형) 100% / 프론트엔드 (Vue 3) 100% / Node</p>
          <div class="swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img class="image" src="/images/Varco-Studio-1.png" alt="image">
              </div>
              <div class="swiper-slide">
                <img class="image" src="/images/Varco-Studio-2.png" alt="image">
              </div>
              <div class="swiper-slide">
                <img class="image" src="/images/Varco-Lora-1.png" alt="image">
              </div>
              <div class="swiper-slide">
                <img class="image" src="/images/Varco-Text-1.png" alt="image">
              </div>
              <div class="swiper-slide">
                <img class="image" src="/images/Varco-Text-2.png" alt="image">
              </div>
              <div class="swiper-slide">
                <img class="image" src="/images/Varco-Text-3.png" alt="image">
              </div>
              <div class="swiper-slide">
                <img class="image" src="/images/Varco-Chatbot-1.png" alt="image">
              </div>
              <div class="swiper-slide">
                <img class="image" src="/images/Varco-Gentle-1.png" alt="image">
              </div>
              <div class="swiper-slide">
                <img class="image" src="/images/Varco-Saas-1.png" alt="image">
              </div>
              <div class="swiper-slide">
                <img class="image" src="/images/Varco-Saas-2.png" alt="image">
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
          <ul class="slide-list">
            <li class="item">VARCO 개발실 프론트엔드 개발 팀장</li>
            <li class="item">VARCO 서비스 (스튜디오, 로라 학습, 텍스트, 챗봇 빌더, 어드민) 통합</li>
            <li class="item">pnpm 모노레포 구성 (UI 컴포넌트 통합)</li>
            <li class="item">[스튜디오] 스튜디오 무한 캔버스 형식의 UX 개발 (vue-flow, konva)</li>
            <li class="item">[로라학습] 이미지 생성 모델 학습 및 배포 서비스</li>
            <li class="item">[텍스트] 문장, 퀘스트, 캐릭터, 대화, 요약, 번역 등 생성 서비스</li>
            <li class="item">[챗봇빌더] 챗봇에 사용할 어드민 관리툴</li>
            <li class="item">[젠틀워즈] 금칙어 모니터링 및 패턴 어드민 관리툴</li>
            <li class="item">[사스어드민] 아트 서비스 구독/크레딧 차감 방식 적용, 연동 어드민 관리툴</li>
          </ul>
        </div>
      </div>
      <div class="slide" data-anchor="2">
        <div class="slide-wrap">
          <h3 class="slide-title">
            <span class="text">VARCO Art</span>
            <span class="date">2023년 3월 ~ 2024년 6월</span>
          </h3>
          <p class="slide-role">마크업 (PC/모바일 반응형) 100% / 프론트엔드 (Vue 3) 100% / Node</p>
          <div class="swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <a class="movie" href="/images/Varco-Art-1.mp4" target="_blank" rel="noopener noreferrer">
                  <video class="video" data-src="/images/Varco-Art-1.mp4" muted loop data-autoplay data-keepplaying></video>
                </a>
              </div>
              <div class="swiper-slide">
                <a class="movie" href="/images/Varco-Art-2.mp4" target="_blank" rel="noopener noreferrer">
                  <video class="video" data-src="/images/Varco-Art-2.mp4" muted loop data-autoplay data-keepplaying></video>
                </a>
              </div>
              <div class="swiper-slide">
                <a class="movie" href="/images/Varco-Art-3.mp4" target="_blank" rel="noopener noreferrer">
                  <video class="video" data-src="/images/Varco-Art-3.mp4" muted loop data-autoplay data-keepplaying></video>
                </a>
              </div>
              <div class="swiper-slide">
                <a class="movie" href="/images/Varco-Art-4.mp4" target="_blank" rel="noopener noreferrer">
                  <video class="video" data-src="/images/Varco-Art-4.mp4" muted loop data-autoplay data-keepplaying></video>
                </a>
              </div>
              <div class="swiper-slide">
                <a class="movie" href="/images/Varco-Art-5.mp4" target="_blank" rel="noopener noreferrer">
                  <video class="video" data-src="/images/Varco-Art-5.mp4" muted loop data-autoplay data-keepplaying></video>
                </a>
              </div>
              <div class="swiper-slide">
                <img class="image" src="/images/Varco-Art-6.png" alt="image">
              </div>
              <div class="swiper-slide">
                <img class="image" src="/images/Varco-Art-7.png" alt="image">
              </div>
              <div class="swiper-slide">
                <img class="image" src="/images/Varco-Art-8.png" alt="image">
              </div>
              <div class="swiper-slide">
                <img class="image" src="/images/Varco-Art-9.png" alt="image">
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
          <ul class="slide-list">
            <li class="item">Stable Diffusion 기반 사내용 웹 서비스로 시작</li>
            <li class="item">사용된 모든 UI 컴포넌트 신규 개발, 테마, 다국어</li>
            <li class="item">텍스트 위저드, 이미지 위저드 (멀티 컨트롤넷) 등 편의성 UI 제공</li>
            <li class="item">국내 패션업체 공급 계약 후 패션 모델 특화</li>
            <li class="item">인페인팅, 컨트롤넷 (캐니, 뎁스, 포즈, 스케치, IPA), 3D 모델, 이미지 블렌딩, 업스케일, 배경제거</li>
          </ul>
        </div>
      </div>
      <div class="slide" data-anchor="3">
        <div class="slide-wrap">
          <h3 class="slide-title">
            <span class="text">Deeplift</span>
            <span class="date">2022년 5월 ~ 2022년 10월</span>
          </h3>
          <p class="slide-role">디자인 100% / 마크업 (PC/모바일 반응형) 100% / 프론트엔드 (React 18) 100% / Python</p>
          <div class="swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <a class="movie" href="/images/Deeplift-1.mp4" target="_blank" rel="noopener noreferrer">
                  <video class="video" data-src="/images/Deeplift-1.mp4" muted loop data-autoplay data-keepplaying></video>
                </a>
              </div>
              <div class="swiper-slide">
                <a class="movie" href="/images/Deeplift-2.mp4" target="_blank" rel="noopener noreferrer">
                  <video class="video" data-src="/images/Deeplift-2.mp4" muted loop data-autoplay data-keepplaying></video>
                </a>
              </div>
              <div class="swiper-slide">
                <a class="movie" href="/images/Deeplift-3.mp4" target="_blank" rel="noopener noreferrer">
                  <video class="video" data-src="/images/Deeplift-3.mp4" muted loop data-autoplay data-keepplaying></video>
                </a>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
          <ul class="slide-list">
            <li class="item">python 으로 개발한 AI 코드를 Streamlit 으로 구동한 소스 코드 공유 플랫폼</li>
            <li class="item">Github repository API 연동 및 코드 에디터 개발</li>
            <li class="item">Websocket 을 적용하여 어플리케이션 상태 실시간 반영</li>
          </ul>
        </div>
      </div>
      <div class="slide" data-anchor="4">
        <div class="slide-wrap">
          <h3 class="slide-title">
            <span class="text">AI 비디오 검색</span>
            <span class="date">2022년 2월 ~ 2022년 4월</span>
          </h3>
          <p class="slide-role">디자인 100% / 마크업 (PC/모바일 반응형) 100% / 프론트엔드 (Vue 3) 100% / Python / Electron</p>
          <div class="swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <a class="movie" href="/images/VideoSearch.mp4" target="_blank" rel="noopener noreferrer">
                  <video class="video" data-src="/images/VideoSearch.mp4" muted loop data-autoplay data-keepplaying></video>
                </a>
              </div>
              <div class="swiper-slide">
                <a class="movie" href="/images/VideoSearchApp.mp4" target="_blank" rel="noopener noreferrer">
                  <video class="video" data-src="/images/VideoSearchApp.mp4" muted loop data-autoplay data-keepplaying></video>
                </a>
              </div>
              <div class="swiper-slide">
                <img class="image" src="/images/VideoSearch-1.jpg" alt="image">
              </div>
              <div class="swiper-slide">
                <img class="image" src="/images/VideoSearch-2.jpg" alt="image">
              </div>
              <div class="swiper-slide">
                <img class="image" src="/images/VideoSearch-3.jpg" alt="image">
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
          <ul class="slide-list">
            <li class="item">이미지와 매칭되는 비디오 샷을 AI 를 통해 검색</li>
            <li class="item">동영상 프레임 제어 및 localStorage/IndexedDB/File 캐시 기술 적용</li>
            <li class="item">버추얼 슬라이더 적용으로 성능 대폭 향상</li>
            <li class="item"><a class="link" href="https://www.npmjs.com/package/vue3-canvas-video-player" target="_blank">Vue3 캔버스 비디오 플레이어 라이브러리 개발 및 배포</a></li>
            <li class="item">일렉트론 데스크탑 어플리케이션 개발</li>
          </ul>
        </div>
      </div>
      <div class="slide" data-anchor="5">
        <div class="slide-wrap">
          <h3 class="slide-title">
            <span class="text">AI 비디오 분석</span>
            <span class="date">2021년 6월 ~ 2022년 2월</span>
          </h3>
          <p class="slide-role">디자인 100% / 마크업 (PC/모바일 반응형) 100% / 프론트엔드 (Vue 2) 100% / 백엔드 Python</p>
          <div class="swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <a class="movie" href="/images/VideoMetadataViewer.mp4" target="_blank" rel="noopener noreferrer">
                  <video class="video" data-src="/images/VideoMetadataViewer.mp4" muted loop data-autoplay data-keepplaying></video>
                </a>
              </div>
              <div class="swiper-slide">
                <img class="image" src="/images/VideoMetadataViewer-1.jpg" alt="image">
              </div>
              <div class="swiper-slide">
                <img class="image" src="/images/VideoMetadataViewer-2.jpg" alt="image">
              </div>
              <div class="swiper-slide">
                <img class="image" src="/images/VideoMetadataViewer-3.jpg" alt="image">
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
          <ul class="slide-list">
            <li class="item">AI 를 통해 비디오를 분석(Segmentation)한 메타 데이터를 관리 및 편집</li>
            <li class="item">바운딩 박스 및 포즈 데이터 처리</li>
            <li class="item">동영상 프레임 제어 및 localStorage/IndexedDB/File 캐시 기술 적용</li>
            <li class="item">대용량 데이터 (비디오/JSON) 처리 기술 적용</li>
            <li class="item">Python streamlit 데이터 연동</li>
          </ul>
        </div>
      </div>
      <div class="slide" data-anchor="6">
        <div class="slide-wrap">
          <h3 class="slide-title">
            <span class="text">블레이드 & 소울 2</span>
            <span class="date">2021년 5월 ~ 2021년 6월</span>
          </h3>
          <p class="slide-role">마크업 (PC/모바일 반응형) 100% / 프론트엔드 (Javascript) 100% / 백엔드 JSP</p>
          <div class="swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img class="image" src="/images/BladeSoul2-Worldmap-1.jpg" alt="image">
              </div>
              <div class="swiper-slide">
                <img class="image" src="/images/BladeSoul2-Worldmap-2.jpg" alt="image">
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
          <ul class="slide-list">
            <li class="item">월드맵, 그랜드 오픈 런칭</li>
            <li class="item">인트로 / 진입 / 진출 영상 모션 적용</li>
            <li class="item">드래그 UI / UX</li>
          </ul>
        </div>
      </div>
      <div class="slide" data-anchor="7">
        <div class="slide-wrap">
          <h3 class="slide-title">
            <span class="text">아이온</span>
            <span class="date">2020년 6월 ~ 2021년 6월</span>
          </h3>
          <p class="slide-role">마크업 (PC/모바일 반응형) 100% / 프론트엔드 (Javascript) 100% / 백엔드 JSP</p>
          <div class="swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img class="image" src="/images/Aion-Community.jpg" alt="image">
              </div>
              <div class="swiper-slide">
                <img class="image" src="/images/Aion-GameGuide.jpg" alt="image">
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
          <ul class="slide-list">
            <li class="item">자바 스프링 기반 커뮤니티 서스테이닝</li>
            <li class="item">게임소개 사이트 고도화</li>
          </ul>
        </div>
      </div>
      <div class="slide" data-anchor="8">
        <div class="slide-wrap">
          <h3 class="slide-title">
            <span class="text">트릭스터 M</span>
            <span class="date">2020년 6월 ~ 2020년 10월</span>
          </h3>
          <p class="slide-role">마크업 (PC/모바일 반응형) 100% / 프론트엔드 (Javascript) 100% / 백엔드 JSP</p>
          <div class="swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img class="image" src="/images/TricksterM-Luanching.jpg" alt="image">
              </div>
              <div class="swiper-slide">
                <img class="image" src="/images/TricksterM-GameGuide.jpg" alt="image">
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
          <ul class="slide-list">
            <li class="item">사전 예약, 그랜드 오픈 런칭</li>
            <li class="item">페럴렉스 스크롤 기반 게임 가이드 (iframe 간 데이터 연동 처리)</li>
          </ul>
        </div>
      </div>
      <div class="slide" data-anchor="9">
        <div class="slide-wrap">
          <h3 class="slide-title">
            <span class="text">공통 가이드북 서비스</span>
            <span class="date">2020년 3월 ~ 2021년 6월</span>
          </h3>
          <p class="slide-role">마크업 (PC/모바일 반응형) 100% / 프론트엔드 (Javascript, Vue 2) 100% / 백엔드 JSP</p>
          <div class="swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img class="image" src="/images/Guidebook-Community-1.jpg" alt="image">
              </div>
              <div class="swiper-slide">
                <img class="image" src="/images/Guidebook-Community-2.jpg" alt="image">
              </div>
              <div class="swiper-slide">
                <img class="image" src="/images/Guidebook-Admin.jpg" alt="image">
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
          <ul class="slide-list">
            <li class="item">각 커뮤니티에서 공통적으로 사용되는 게임 가이드 서비스</li>
            <li class="item">리니지 W, 블레이드 & 소울 2, 프로야구 H 3, 리니지 2 M, 리니지 M, 리니지 2, 아이온 적용</li>
            <li class="item">위지윅 컨텐츠 에디터 기능 개발</li>
            <li class="item">관리툴과 연동하여 운영 업무 간소화</li>
          </ul>
        </div>
      </div>
      <div class="slide" data-anchor="10">
        <div class="slide-wrap">
          <h3 class="slide-title">
            <span class="text">리니지 2 M</span>
            <span class="date">2019년 3월 ~ 2020년 11월</span>
          </h3>
          <p class="slide-role">마크업 (PC/모바일 반응형) 100% / 프론트엔드 (Javascript, JQuery) 100% / 백엔드 JSP</p>
          <div class="swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img class="image" src="/images/Lineage2M-Preorder.jpg" alt="image">
              </div>
              <div class="swiper-slide">
                <img class="image" src="/images/Lineage2M-Worldmap.jpg" alt="image">
              </div>
              <div class="swiper-slide">
                <img class="image" src="/images/Lineage2M-Oren.jpg" alt="image">
              </div>
              <div class="swiper-slide">
                <img class="image" src="/images/Lineage2M-Beora.jpg" alt="image">
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
          <ul class="slide-list">
            <li class="item">사전예약 및 프로모션 템플릿 (보일러플레이트 코드) 개발로 일정 단축</li>
            <li class="item">이펙트, 영상 제어, 모션 타임라인, 유튜브 API, 공유하기 기능 공통화</li>
            <li class="item">사전 예약, 월드맵, 그랜드 오픈 런칭</li>
            <li class="item">상아탑의 현자들 티저 / 업데이트</li>
            <li class="item">베오라의 유적 티저 / 업데이트</li>
            <li class="item">아프리카 TV 프로모션</li>
          </ul>
        </div>
      </div>
    </section>
    <!-- NHN Technology Service -->
    <section class="section" data-tooltip="NHN Technology Service" data-anchor="nts">
      <div class="slide" data-anchor="index">
        <div class="fp-bg">
          <video class="video" src="/images/nts.mp4" loop muted data-autoplay></video>
        </div>
        <h2 class="index-title">NHN Technology Service</h2>
        <ul class="index-list">
          <li class="item">
            <a class="link" href="#nts/1">
              <h3 class="title">네이버 쇼핑 윈도</h3>
              <p class="date">2015년 7월 ~ 2018년 9월</p>
            </a>
          </li>
          <li class="item">
            <a class="link" href="#nts/2">
              <h3 class="title">네이버 공통 좋아요 서비스</h3>
              <p class="date">2016년 12월 ~ 2017 4월</p>
            </a>
          </li>
        </ul>
      </div>
      <div class="slide" data-anchor="1">
        <div class="slide-wrap">
          <h3 class="slide-title">
            <span class="text">네이버 쇼핑 윈도</span>
            <span class="date">2015년 7월 ~ 2018년 9월</span>
          </h3>
          <p class="slide-role">마크업 (PC/모바일 반응형) 100% / 프론트엔드 (React) 50%</p>
          <div class="swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <a class="link" href="https://shopping.naver.com/department/home/" target="_blank" rel="noopener noreferrer">
                  <img class="image" src="/images/Naver-Shopping.jpg" alt="image">
                </a>
              </div>
              <div class="swiper-slide">
                <img class="image" src="/images/Naver-Shopping-01.jpg" alt="image">
              </div>
              <div class="swiper-slide">
                <img class="image" src="/images/Naver-Shopping-02.jpg" alt="image">
              </div>
              <div class="swiper-slide">
                <img class="image" src="/images/Naver-Shopping-03.jpg" alt="image">
              </div>
              <div class="swiper-slide">
                <img class="image" src="/images/Naver-Shopping-04.jpg" alt="image">
              </div>
              <div class="swiper-slide">
                <img class="image" src="/images/Naver-Shopping-05.jpg" alt="image">
              </div>
              <div class="swiper-slide">
                <img class="image" src="/images/Naver-Shopping-06.jpg" alt="image">
              </div>
              <div class="swiper-slide">
                <img class="image" src="/images/Naver-Shopping-07.jpg" alt="image">
              </div>
              <div class="swiper-slide">
                <img class="image" src="/images/Naver-Shopping-08.jpg" alt="image">
              </div>
              <div class="swiper-slide">
                <img class="image" src="/images/Naver-Shopping-09.jpg" alt="image">
              </div>
              <div class="swiper-slide">
                <img class="image" src="/images/Naver-Shopping-10.jpg" alt="image">
              </div>
              <div class="swiper-slide">
                <img class="image" src="/images/Naver-Shopping-11.jpg" alt="image">
              </div>
              <div class="swiper-slide">
                <img class="image" src="/images/Naver-Shopping-12.jpg" alt="image">
              </div>
              <div class="swiper-slide">
                <img class="image" src="/images/Naver-Shopping-13.jpg" alt="image">
              </div>
              <div class="swiper-slide">
                <img class="image" src="/images/Naver-Shopping-14.jpg" alt="image">
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
          <ul class="slide-list">
            <li class="item">네이버 쇼핑윈도 UI 개발 및 리딩</li>
            <li class="item">기존 윈도 리액트로 변환 작업, 신규 윈도 오픈 및 서스테이닝</li>
            <li class="item">버티컬 12 개 외 추가 프로젝트 진행</li>
          </ul>
        </div>
      </div>
      <div class="slide" data-anchor="2">
        <div class="slide-wrap">
          <h3 class="slide-title">
            <span class="text">네이버 공통 좋아요 서비스</span>
            <span class="date">2016년 12월 ~ 2017 4월</span>
          </h3>
          <p class="slide-role">마크업 (PC/모바일 반응형) 100% / 프론트엔드 (Javascript) 100%</p>
          <div class="swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <a class="link" href="https://terms.naver.com/entry.naver?docId=3377330&cid=43667&categoryId=43667" target="_blank" rel="noopener noreferrer">
                  <img class="image" src="/images/Naver-Like.jpg" alt="image">
                </a>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
          <ul class="slide-list">
            <li class="item">네이버에서 공통적으로 사용되는 인라인 서비스</li>
            <li class="item">쇼핑, 뉴스, 스포츠, 연예, 증권, 지식백과, 그라폴리오 등 각 서비스에서 사용</li>
          </ul>
        </div>
      </div>
    </section>
    <!-- The Uber Creative -->
    <section class="section" data-tooltip="The Uber Creative" data-anchor="uber">
      <div class="slide" data-anchor="index">
        <div class="fp-bg">
          <video class="video" src="/images/tuc.mp4" loop muted data-autoplay></video>
        </div>
        <h2 class="index-title">The Uber Creative</h2>
        <ul class="index-list">
          <li class="item">
            <a class="link" href="#uber/1">
              <h3 class="title">웹 에이전시</h3>
              <p class="date">2014년 11월</p>
            </a>
          </li>
          <li class="item">
            <a class="link" href="#uber/2">
              <h3 class="title">패럴렉스 교육</h3>
              <p class="date">2014년 9월</p>
            </a>
          </li>
          <li class="item">
            <a class="link" href="#uber/3">
              <h3 class="title">Angel in the sky</h3>
              <p class="date">2014년 7월</p>
            </a>
          </li>
          <li class="item">
            <a class="link" href="#uber/4">
              <h3 class="title">대우건설 산업단지</h3>
              <p class="date">2013년 12월 ~ 2014년 1월</p>
            </a>
          </li>
          <li class="item">
            <a class="link" href="#uber/5">
              <h3 class="title">쉐보레 오피셜 / DIK</h3>
              <p class="date">2013년 7월 ~ 2014년 12월</p>
            </a>
          </li>
          <li class="item">
            <a class="link" href="#uber/6">
              <h3 class="title">푸르지오 닷컴 / 분양 / 웹진</h3>
              <p class="date">2013년 7월 ~ 2014년 12월</p>
            </a>
          </li>
          <li class="item">
            <a class="link" href="#uber/7">
              <h3 class="title">삼성 제일모직 / 스타론</h3>
              <p class="date">2013년 7월 ~ 2014년 6월</p>
            </a>
          </li>
        </ul>
      </div>
      <div class="slide" data-anchor="1">
        <div class="slide-wrap">
          <h3 class="slide-title">
            <span class="text">웹 에이전시</span>
            <span class="date">2014년 11월</span>
          </h3>
          <p class="slide-role">마크업 (PC/모바일 반응형) 100% / 프론트엔드 (Javascript) 100%</p>
          <div class="swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <a class="link" href="https://theuber.co.kr/" target="_blank" rel="noopener noreferrer">
                  <img class="image" src="/images/The-Uber-Creative.jpg" alt="image">
                </a>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
          <ul class="slide-list">
            <li class="item">프론트엔드 개발 팀장</li>
            <li class="item">공식 홈페이지</li>
          </ul>
        </div>
      </div>
      <div class="slide" data-anchor="2">
        <div class="slide-wrap">
          <h3 class="slide-title">
            <span class="text">패럴렉스 교육</span>
            <span class="date">2014년 9월</span>
          </h3>
          <p class="slide-role">마크업 (PC/모바일 반응형) 100% / 프론트엔드 (Javascript) 100%</p>
          <div class="swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <a class="link" href="https://gronkout.github.io/external/prx/" target="_blank" rel="noopener noreferrer">
                  <img class="image" src="/images/Parallax.jpg" alt="image">
                </a>
              </div>
              <div class="swiper-slide">
                <a class="link" href="https://gronkout.github.io/external/skr/" target="_blank" rel="noopener noreferrer">
                  <img class="image" src="/images/Skrollr.jpg" alt="image">
                </a>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
          <ul class="slide-list">
            <li class="item">R&D 교육용 샘플 사이트 제작 (동작 원리 및 제작 가이드)</li>
            <li class="item">스크롤 기반 모션 트윈 / 백그라운드 제어 / 베지어 곡선 제어</li>
          </ul>
        </div>
      </div>
      <div class="slide" data-anchor="3">
        <div class="slide-wrap">
          <h3 class="slide-title">
            <span class="text">Angel in the sky</span>
            <span class="date">2014년 7월</span>
          </h3>
          <p class="slide-role">마크업 (PC/모바일 반응형) 100% / 프론트엔드 (Javascript) 100%</p>
          <div class="swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img class="image" src="/images/Angel-In-The-Sky.jpg" alt="image">
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
          <ul class="slide-list">
            <li class="item">해외 IPhone 배포용 웹 사이트</li>
          </ul>
        </div>
      </div>
      <div class="slide" data-anchor="4">
        <div class="slide-wrap">
          <h3 class="slide-title">
            <span class="text">대우건설 산업단지</span>
            <span class="date">2013년 12월 ~ 2014년 1월</span>
          </h3>
          <p class="slide-role">마크업 (PC/모바일 반응형) 100% / 프론트엔드 (Javascript) 100%</p>
          <div class="swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img class="image" src="/images/Daewoo.jpg" alt="image">
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
          <ul class="slide-list">
            <li class="item">대우건설 제안 참여 및 수주</li>
            <li class="item">프리젠테이션 모드, 맵 API 기능 구현</li>
            <li class="item">산단이슈 JSON 데이터 연동 시스템, 무한 스크롤링 UI 개발</li>
          </ul>
        </div>
      </div>
      <div class="slide" data-anchor="5">
        <div class="slide-wrap">
          <h3 class="slide-title">
            <span class="text">쉐보레 오피셜 / DIK</span>
            <span class="date">2013년 7월 ~ 2014년 12월</span>
          </h3>
          <p class="slide-role">마크업 (PC/모바일 반응형) 100% / 플래시 100% / 프론트엔드 (Javascript) 100%</p>
          <div class="swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <a class="link" href="http://www.chevrolet.co.kr/" target="_blank" rel="noopener noreferrer">
                  <img class="image" src="/images/Chevrolet.jpg" alt="image">
                </a>
              </div>
              <div class="swiper-slide">
                <img class="image" src="/images/Chevrolet-DIK.jpg" alt="image">
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
          <ul class="slide-list">
            <li class="item">쉐보레 글로벌 스타일가이드에 따른 3차 리뉴얼 및 고도화 작업 진행</li>
            <li class="item">플래시 컨텐츠를 웹베이스로 교체, 웹사이트 성능 최적화 작업</li>
            <li class="item">그 외 쉐보레 캠페인 사이트 약 10건 (카마로, 말리부, 등), 스타일북</li>
            <li class="item">영업소 DIK - Digital Interactive Kiosk 개발</li>
            <li class="item">터치스크린 UI, 영상플레이어 개발</li>
          </ul>
        </div>
      </div>
      <div class="slide" data-anchor="6">
        <div class="slide-wrap">
          <h3 class="slide-title">
            <span class="text">푸르지오 닷컴 / 분양 / 웹진</span>
            <span class="date">2013년 7월 ~ 2014년 12월</span>
          </h3>
          <p class="slide-role">마크업 (PC/모바일 반응형) 100% / 프론트엔드 (Javascript) 100%</p>
          <div class="swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <a class="link" href="http://www.prugio.com/" target="_blank" rel="noopener noreferrer">
                  <img class="image" src="/images/Prugio.jpg" alt="image">
                </a>
              </div>
              <div class="swiper-slide">
                <img class="image" src="/images/Prugio-Webzine.jpg" alt="image">
              </div>
              <div class="swiper-slide">
                <a class="link" href="http://www.prugio.com/sale/sale.aspx" target="_blank" rel="noopener noreferrer">
                  <img class="image" src="/images/Prugio-Sale.jpg" alt="image">
                </a>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
          <ul class="slide-list">
            <li class="item">접근성 인증마크 획득</li>
            <li class="item">웹 사이트 어워드 대상 수상</li>
            <li class="item">캐스트 JSON 데이터 연동 시스템 구축</li>
            <li class="item">분양 한눈에 보기 기능 개발 (다음맵 API 활용)</li>
            <li class="item">신규 사업 분양 PT 제안 참여 및 수주</li>
            <li class="item">VR 서비스 연계 관련 작업 진행</li>
          </ul>
        </div>
      </div>
      <div class="slide" data-anchor="7">
        <div class="slide-wrap">
          <h3 class="slide-title">
            <span class="text">삼성 제일모직 / 스타론</span>
            <span class="date">2013년 7월 ~ 2014년 6월</span>
          </h3>
          <p class="slide-role">마크업 (PC/모바일 반응형) 100% / 플래시 100% / 프론트엔드 (Javascript) 100%</p>
          <div class="swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img class="image" src="/images/Samsung-Chemical.jpg" alt="image">
              </div>
              <div class="swiper-slide">
                <a class="link" href="http://www.staron.com/" target="_blank" rel="noopener noreferrer">
                  <img class="image" src="/images/Samsung-Staron.jpg" alt="image">
                </a>
              </div>
              <div class="swiper-slide">
                <img class="image" src="/images/Samsung-Digital-Insight.jpg" alt="image">
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
          <ul class="slide-list">
            <li class="item">4차 고도화 진행, 웹사이트 성능 최적화 작업</li>
            <li class="item">JSON 데이터 연동 시스템 구축</li>
            <li class="item">무한 스크롤링 UI 개발 및 적용</li>
            <li class="item">웹접근성 2.0 업그레이드 및 크로스브라우징 확대</li>
            <li class="item">크로스브라우징 작업을 통해 호환 브라우저 확대</li>
            <li class="item">8개 다국어 언어 작업</li>
            <li class="item">삼성 디지털 키오스크 컨텐츠</li>
          </ul>
        </div>
      </div>
    </section>
    <!-- ETC -->
    <section class="section" data-tooltip="ETC" data-anchor="etc">
      <div class="slide" data-anchor="index">
        <div class="fp-bg">
          <img class="image" src="/images/etc.jpg" alt="ETC" />
        </div>
        <h2 class="index-title">ETC</h2>
        <ul class="index-list">
          <li class="item">
            <a class="link" href="#etc/1">
              <h3 class="title">AI 연계 프로젝트</h3>
              <p class="date">2022년 12월 ~ 2024년 11월</p>
            </a>
          </li>
          <li class="item">
            <a class="link" href="#etc/2">
              <h3 class="title">개인 프로젝트</h3>
              <p class="date">2018년 12월</p>
            </a>
          </li>
          <li class="item">
            <a class="link" href="#etc/3">
              <h3 class="title">아틀란티카 S</h3>
              <p class="date">2010년 10월 ~ 2013년 6월</p>
            </a>
          </li>
          <li class="item">
            <a class="link" href="#etc/4">
              <h3 class="title">프리랜서 프로젝트</h3>
              <p class="date">2010년 8월 ~ 2010년 9월</p>
            </a>
          </li>
          <li class="item">
            <a class="link" href="#etc/5">
              <h3 class="title">한국전력공사 KDN</h3>
              <p class="date">2008년 5월 ~ 2010년 7월</p>
            </a>
          </li>
        </ul>
      </div>
      <div class="slide" data-anchor="1">
        <div class="slide-wrap">
          <h3 class="slide-title">
            <span class="text">AI 연계 프로젝트</span>
            <span class="date">2022년 12월 ~ 2024년 11월</span>
          </h3>
          <p class="slide-role">마크업 (PC/모바일 반응형) 100% / 프론트엔드 (Vue, Native Javascript) 100%</p>
          <div class="swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img class="image" src="/images/Vue3-Canvas-Video-Player.png" alt="image">
              </div>
              <div class="swiper-slide">
                <img class="image" src="/images/Vue3-Canvas-Video-Player.gif" alt="image">
              </div>
              <div class="swiper-slide">
                <img class="image" src="/images/AI-Canny.png" alt="image">
              </div>
              <div class="swiper-slide">
                <img class="image" src="/images/AI-Remove-Background.png" alt="image">
              </div>
              <div class="swiper-slide">
                <img class="image" src="/images/AI-Auto-Pick.png" alt="image">
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
          <ul class="slide-list">
            <li class="item">비디오 플레이어 개발 및 NPM 배포 (프레임 단위 바운딩박스)</li>
            <li class="item">이미지 Canny 추출 (OpenCV)</li>
            <li class="item">이미지 배경 제거 (TensorFlow, OpenCV)</li>
            <li class="item">영역 자동 선택 (TensorFlow, ONNX, OpenCV)</li>
          </ul>
        </div>
      </div>
      <div class="slide" data-anchor="2">
        <div class="slide-wrap">
          <h3 class="slide-title">
            <span class="text">개인 프로젝트</span>
            <span class="date">2018년 12월</span>
          </h3>
          <p class="slide-role">마크업 (PC/모바일 반응형) 100% / 프론트엔드 (Vue, Nuxt, React) 100% / 서버 (KOA, MongoDB, Firebase) 100%</p>
          <div class="swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img class="image" src="/images/Movie-Manager.jpg" alt="image">
              </div>
              <div class="swiper-slide">
                <img class="image" src="/images/IT-News.jpg" alt="image">
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
          <ul class="slide-list">
            <li class="item">미드 관람용, IT 뉴스레터 스크랩용 앱 개발</li>
            <li class="item">일반 / 구글 로그인, 댓글 기능</li>
            <li class="item">Nuxt 서버사이드 렌더링 적용</li>
            <li class="item">파이어베이스 Auth, Database, Storage 사용</li>
            <li class="item">Koa + mongodb 노드 백엔드 서버 개발, Heroku 배포</li>
          </ul>
        </div>
      </div>
      <div class="slide" data-anchor="3">
        <div class="slide-wrap">
          <h3 class="slide-title">
            <span class="text">아틀란티카 S</span>
            <span class="date">2010년 10월 ~ 2013년 6월</span>
          </h3>
          <p class="slide-role">플래시 100%</p>
          <div class="swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <a class="link" href="http://www.youtube.com/watch?feature=player_embedded&v=54poesxw_i8" target="_blank" rel="noopener noreferrer">
                  <img class="image" src="/images/AtlanticaS.jpg" alt="image">
                </a>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
          <ul class="slide-list">
            <li class="item">페이스북 기반 소셜네트워크 게임</li>
            <li class="item">G-Star 2011 출품 (엔도어즈)</li>
            <li class="item">국내 최초 SNS 전략롤플레잉 카드 배틀 게임 (전세계 동시 서비스 진행)</li>
          </ul>
        </div>
      </div>
      <div class="slide" data-anchor="4">
        <div class="slide-wrap">
          <h3 class="slide-title">
            <span class="text">프리랜서 프로젝트</span>
            <span class="date">2010년 8월 ~ 2010년 9월</span>
          </h3>
          <p class="slide-role">마크업 100% / 프론트엔드 100% / 플래시 100%</p>
          <div class="swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <a class="link" href="http://zhtv.tving.com/zhtv/" target="_blank" rel="noopener noreferrer">
                  <img class="image" src="/images/ZH-TV.jpg" alt="image">
                </a>
              </div>
              <div class="swiper-slide">
                <img class="image" src="/images/Samsung-Printer.jpg" alt="image">
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
          <ul class="slide-list">
            <li class="item">중화 TV 인덱스 페이지 개편</li>
            <li class="item">삼성 사무용 복합기 CD 타이틀 개발</li>
          </ul>
        </div>
      </div>
      <div class="slide" data-anchor="5">
        <div class="slide-wrap">
          <h3 class="slide-title">
            <span class="text">한국전력공사 KDN</span>
            <span class="date">2008년 5월 ~ 2010년 7월</span>
          </h3>
          <p class="slide-role">마크업 100% / 프론트엔드 100% / 플래시 100%</p>
          <div class="swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img class="image" src="/images/Kepco.jpg" alt="image">
              </div>
              <div class="swiper-slide">
                <img class="image" src="/images/Kepco-Cyber.jpg" alt="image">
              </div>
              <div class="swiper-slide">
                <img class="image" src="/images/Kepco-Sports.jpg" alt="image">
              </div>
              <div class="swiper-slide">
                <img class="image" src="/images/Kepco-Energy.jpg" alt="image">
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
          <ul class="slide-list">
            <li class="item">메인 풀 플래시, 서브 메뉴 및 컨텐츠 플래시 개발</li>
            <li class="item">서브 페이지 마크업 및 UI 개발</li>
            <li class="item">플래시 UI 개발, XML 데이터 연동</li>
          </ul>
        </div>
      </div>
    </section>
  </article>
`;
const encryptedContent = CryptoJS.AES.encrypt(content, password).toString();

console.log(encryptedContent);
