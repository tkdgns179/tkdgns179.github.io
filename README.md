#### 작업예정 : jQuery 제이쿼리 JSON data parsing
- 외부data.js 파일에서 json data를 저장한 이후에 html에서 불러와서 parsing
- 외부 사이트에서 제공하는(RestAPI) json data를 html에서 불러온 후 parsing
- RestAPI서버 중 코로나19 확진자 데이터를 받아서 html에서 parsing(데이터를 분해해서 화면에 뿌려주는 작업)
- RestAPI서버 주소 (빅데이터) : https://coroname.me/getdata
- 1개월 간, 주로 UI 계속진행(VS Code) 하면서 // front-end
- 피곤할 때, 자바|스프링 기본 (eclipse) - egov 전자정부 프레임워크 개발환경 기본실습 진행 // program-language
- 피곤할 때, 오라클DB(SQL developer 개발 환경) - Ansi-SQL(Standard SQL) 기본 언어 실습 진행 CRUD // program-language
- 2개월 후, 주로 스프링으로 실습이 진행(납품용 - for portfolio) // back-end

#### 20210510(월) 작업내역
- Git에서 'user.email' 'user.name'을 구성하라고 떠요!
- 업로드 절차 : 1. 커밋(commit) 2. 푸쉬(push) <교실에서 작업한 결과를 올릴 때>
- 다운로드 절차 : 1. 풀(pull) <교실에서 작업한 결과를 집에서 이어서 작업할 상황>
- 레포지토리(저장소) : git init
- 개발PC(html) 와 깃 저장소와 연동시킵니다.
- 포트의 역할이 트랜드로 많이 사용됩니다.
- port : 포트번호로 서비스를 만드는 것이 트랜드
- 이전에는 80포트에 모든 서비스를 묶어놓았습니다.
- 모든 서비스를 개별로 분리하는 트랜드. : 마이크로 서비스라고 합니다. == Rest API로 구현이 됩니다.
- 도메인(https://naver.com:1451241/ 네이버 인증서비스) 
- 외부 인원(네이버 직원이 아닌) 위 포트기준으로 제작한 서비스를 갖다가 사용
- html : Hyper Text MarkUp Language 태그를 사용하는 언어
- md : MarkDown Langauage 태그를 사용하지 않는 언어

#### 20210511(화) 작업내역
-로렘 입숨 한글 : http://guny.kr/stuff/klorem/#/dl-html
-로렘 입숨 영어URL : https://loremipsum.io/generator/
- http://127.0.0.1:80[8000|9000|5500|6500]
- PC의 네트워크 내부주소(공통) : 127.0.0.1 => 로컬호스트(localhost)
- yahoo.com(도메인) == 74.6.143.25(IP주소) == 주민번호 [*cmd 명령어 nslookup domain_name]
- 서버(Server 응답하는 프로그램, 공간 == Request) 아파치 Apache sever, 톰캣 Tomcat sever
- 클라이언트(Client 요청하는 프로그램 == Response) = 웹 브라우저
- HTML은 마크업이 태그로 구성됩니다.<의미있는 문자>...</의미있는 문자>
- IP주소버전 : IPv4, IPv6
- HTML버전 : HTML5(NEW), HTML4.01(OLD)
- HTML5의 레이아웃 구조 제작합니다.
- URL 경로(path) : /Root, /test/html5.html

#### 20210512(수) 작업내역
- 다른 곳에서 작업해 보았습니다.
- pull 확인 (git hub 사이트에서 수정하고 pull로 받기)
- git config --list 확인에서 user.name, user.email 없으면 추가.
- 터미널에서 아래 2가지 실행
- git config --local user.name 영문 이름
- git config --local user.email 영문 이메일
- 프로젝트를 1명이 제작하는 경우가 없기 때문에, 2명일 때 소스 수정한 사람 확인용 정보입니다.

#### 20210513(목) 작업내역
- 애니데스크(독일산) : 팀뷰어(독일산)
- html5.html, css.html, js.html 여기까지
- jQuery 기본 구조만 실습했습니다.
- jQuery 미처리 작업은 다음주 오늘 부터는 모바일 메인페이지 1개 만들어서 과제물로 제출 -> 스프링에서 프로그램 입히는 소스로 사용하게 됩니다.
- jQuery Core 다운받기 : min버전(압축된 버전 속도빠름), 일반버전(개발 속도 normal)
- 작업폴더를 나누는 이유 : 시청(관공서), 대학, 기업의 웹 프로그램(사이트) 제작할 때, 1년간 무상 유지보수 이후 유지보수 비용 2,000만원, 리뉴얼 4,000만원 비용이 책정
- home폴더 기존 작업물, 리뉴얼 home에 덮어쓰는 방식이 아니고, home2022 폴더에 작업을 하시게 됩니다.
- 픽사베이 이미지 3개 : 로고 1개, 슬라이드 이미지 1개, NoImage 1개, 받고 경로 적어놓기
- 로고 : https://pixabay.com/ko/vectors/%EB%A1%9C%EC%BC%93-%EC%95%84%EC%9D%B4%EC%BD%98-%EC%83%81%EC%A7%95-gui-1976107/

- 슬라이드 이미지
슬라이드 1 : https://pixabay.com/ko/photos/%EC%84%9C%EB%A8%B8%ED%95%84%EB%93%9C-%EC%97%AC%EC%9E%90-%EC%86%8C%EB%85%80-%EC%84%A0%EC%85%8B-336672/
슬라이드 2 : https://pixabay.com/ko/photos/%EC%95%84%EC%9D%B4%EC%8A%A4-%ED%81%AC%EB%A6%BC-%EB%94%94%EC%A0%80%ED%8A%B8-%EC%9D%8C%EC%8B%9D-1274894/
슬라이드 3 : https://pixabay.com/ko/photos/%EC%8B%9C%EA%B3%A8-%EC%88%98%ED%99%95-%EB%86%8D%EC%97%85-%ED%8C%9C-%EC%9E%90%EC%97%B0-2326787/

- NoImage : https://pixabay.com/ko/vectors/%EA%B8%B0%ED%98%B8-%EC%97%86%EC%9D%8C-%EA%B8%88%EC%A7%80-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EA%B8%B0%ED%98%B8-39767/

#### 20210514(금) 작업내역
- CSS3 검사 (http://www.css-validator.org/) HTML5 검사 (https://validator.w3.org/)
- 사용자단 모바일 메인페이지 footer영역 CSS입히기
- jQuery Json 데이터 파싱 실습
- 과제물 제출 준비
- 8교시에 과제물 다음카페로 제출
- 구문 오류 : syntax 신텍스 오류(문법오류)

#### 20210517(월) 작업내역
- 메인페이지에 자바스크립트(jQuery)적용 메뉴, 슬라이드 이미지처리, top상단이동 (VS code + HTML5 + CSS3 + JQuery)
- 제이쿼리 적용 부분 : 메뉴, 슬라이드 이미지 3개 처리 : 모바일 메인 페이지만 마무리
- 보통 이미지 슬라이드 처리는 외부 라이브러리(Lib) 사용 (니보 슬라이드, 캐로셀 슬라이드)
- 외부 Lib 사용하지 않고, 직접 만들기
- 수업시작전, jsonData 파싱부분에서 append 사용에 2번 반복되는 부분 확인예정.

#### 20210518(화) 작업내역
- 반응형 페이지의 핵심기술은 미디어쿼리 명령어 사용, 가로 크기를 100%(100px 고정 크기가 아닌 비율로 내부 컨텐츠 크기를 지정하는 방법)
- 미디어(PC, 스마트폰, 프린터, 태블릿화면...) + 쿼리Query(질의어 - 질문)
- 사용법 : @media 미디어타입(screen, print, ..etc = all) and (min-width : 801px) { 스타일 구현내용 }

#### 20210520(목) 작업내역
- 테블릿 메인 CSS 스타일 처리, PC용 메인 CSS 스타일 처리
- 테블릿, 모바일은 마우스 오버 기능을 넣을 필요가 없습니다. (터치 스크린 방식이기 때문에)
- 배치1 : jQuery core import 이후에 사용자가 지정한 js 배치를 해야함.
- 배치2 : reset.css, mobile.css import 이후에 사용자가 지정한 tablet.css, pc.css 배치해야 레이아웃이 깨지지 않음
- 메인페이지 시간이 걸리는 부분 (front-end) : 메뉴처리, 슬라이딩 처리
- 메인페이지 시간이 걸리는 부분 (back-end)  : 최근 갤러리, 최근 공지사항 DB데이터 출력
- ↑ 보통 1주일 정도 걸림 
- 모바일 서브페이지 CSS 스타일 처리
- 테블릿 + PC용 CSS 스타일 처리
- 모바일 게시판 페이지(CRUD) CSS 처리
- camel notation (낙타등 표기법 e.g. .bbsListTbl), underscore notation (e.g. .bbs_title)
- href(헤르프) : hypertext reference (웹 문서 참조)
- 정적(static) 콘텐츠 : html, css, js
- 동적(dynamic) 콘텐츠 : jsp(java spring), py(python Django), PHP, C#(.net), Nodejs(express)
- (데이터 변수) 바인딩 : 동적인 데이터를 정적인 데이터를 넣어주는 것을 바인딩 이라고 함 (묶어주는 역할)
- 오후에 자바(spring) 개발환경 설치예정 (eclipse : 전자정부표준프레임워크 개발환경 설치)
- 전자정부표준프레임워크를 제작한 업체 : 삼성SDS, LG CNS, SK C&C 협업으로 제작
- 게시물 타이블 넘치는 부분 CSS 처리했음, 스프링가선는 jsp에서 프로그램을 처리할 예정
- 테블릿 + PC용 CSS 스타일 처리
- 모바일 + 테블릿 + PC 댓글 CSS + jQuery + Bootstrap 처리
- AdminLTE(부트스트랩 기반 템플릿 - 반응형)를 이용해서 관리자단 디자인 만들기
- UI 디자인 끝 -----------------------------------
- UI 구현 시작 ----------------------------------- 스프링 프로젝트 (Java + Eclipse + Oracle + Spring) 시작
- UI 구현 ... 위 에서 제작한 UI디자인 이용해서 프로그램을 입히게 됩니다.

