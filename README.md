Cat Picture App 🐱

이 애플리케이션은 간단한 Express 서버를 통해 무작위 고양이 사진을 제공하며, Docker로 손쉽게 배포할 수 있습니다.

프로젝트 구조

cat-picture-app/
├── Dockerfile               # 애플리케이션 빌드를 위한 Docker 설정 파일
├── docker-compose.yml       # 여러 컨테이너 환경을 관리하는 Docker Compose 파일
├── src/                     # 소스 코드 디렉터리
│   ├── index.js             # Express 서버 메인 파일
│   ├── routes/              # API 경로
│   │   └── catRoutes.js     # 무작위 고양이 이미지를 위한 /cat 엔드포인트
│   ├── services/            # 비즈니스 로직 및 API 호출
│   │   └── catService.js    # 외부 API에서 무작위 고양이 이미지를 가져오는 로직
│   └── utils/               # 유틸리티 함수들
│       └── logger.js        # 로깅 유틸리티 함수
├── public/                  # 정적 파일 (예: HTML)
│   └── index.html           # 환영 페이지 HTML
├── package.json             # npm 의존성 및 스크립트 정보
└── README.md                # 프로젝트 설명 파일

시작하기

다음 설명은 Docker 환경에서 Cat Picture App을 설정하고 실행하는 방법을 안내합니다.

필요 사항

Docker: Docker가 설치되어 있어야 합니다. Docker 공식 웹사이트에서 다운로드할 수 있습니다.
Docker Compose: Docker Compose가 설치되어 있어야 합니다. 보통 Docker Desktop과 함께 설치되며, docker-compose --version 명령어로 확인할 수 있습니다.

설치 및 실행 방법

1. 이 저장소를 클론합니다. (GitHub에 올린 경우)

git clone https://github.com/dorikun/catapp.git
cd catapp

2. Docker 이미지 빌드:

프로젝트 루트 디렉터리에서 아래 명령어를 실행하여 Dockerfile을 기반으로 Docker 이미지를 빌드합니다.

docker-compose build

3. Docker 컨테이너 실행:

Docker Compose를 사용하여 애플리케이션을 실행합니다. 이 명령어는 docker-compose.yml 파일에 정의된 컨테이너를 생성하고 실행합니다.

docker-compose up

4. 애플리케이션 접근:

브라우저에서 http://localhost:8080으로 이동하여 환영 메시지를 확인합니다.
http://localhost:8080/cat 경로로 이동하면 랜덤 고양이 사진을 볼 수 있습니다.

API 엔드포인트

GET /: 환영 메시지를 반환합니다.
GET /cat: 외부 API에서 무작위로 고양이 이미지를 가져와 표시합니다.

기술 스택

Node.js: 백엔드 개발을 위한 JavaScript 런타임
Express: API 엔드포인트 구축을 위한 웹 프레임워크
Axios: 외부 API 요청을 위한 HTTP 클라이언트
Docker: 애플리케이션을 컨테이너로 배포하기 위한 플랫폼

폴더 구조 설명

src/index.js: Express 서버 설정 및 정적 파일을 제공합니다.
src/routes/catRoutes.js: /cat 경로를 정의하여 무작위 고양이 이미지를 반환합니다.
src/services/catService.js: 외부 API에서 고양이 이미지를 가져오는 로직을 포함합니다.
src/utils/logger.js: 서버 메시지를 기록하는 유틸리티 함수입니다.
public/index.html: 기본 루트 경로에서 제공되는 정적 HTML 파일입니다.

애플리케이션 중지 방법

터미널에서 Ctrl + C를 눌러 애플리케이션을 종료하고, 아래 명령어로 컨테이너를 정리합니다:

docker-compose down

라이선스

이 프로젝트는 MIT 라이선스에 따라 라이선스가 부여됩니다. 자세한 내용은 LICENSE 파일을 참조하세요.
