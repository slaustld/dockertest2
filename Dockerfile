# Node.js 14 이미지를 기반으로 사용
FROM node:14

# 작업 디렉터리 설정
WORKDIR /app

# package.json과 package-lock.json을 복사하여 의존성 설치
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# 애플리케이션 소스 코드 복사
COPY . .

# 애플리케이션이 사용할 포트
EXPOSE 8080

# 앱 시작
CMD ["node", "src/index.js"]
