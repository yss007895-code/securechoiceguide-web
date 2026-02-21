# SecureChoiceGuide - Claude Code Agent

## 프로젝트 개요
VPN/사이버보안 리뷰 사이트. Amazon Associates + Skimlinks로 수익화.
사이트: https://securechoiceguide.com

## 에이전트 명령어

### /generate-post
새 보안 리뷰를 자동 생성해서 GitHub에 push합니다.
```
node scripts/agent-generate.js
```

### /update-trends
Google Trends에서 VPN/보안 트렌드를 수집합니다.
```
node scripts/update-trends.js
```

### /seo-check
Search Console 데이터로 SEO를 분석합니다.
```
node scripts/optimize-seo.js
```

### /full-auto
트렌드 수집 → 리뷰 생성 → SEO 최적화 → push 전체 자동 실행
```
node scripts/agent-generate.js --full
```

## 포스트 생성 규칙
- 타겟: 미국 프라이버시/보안 관심 사용자
- 언어: 영어
- 길이: 800-1200 단어
- Amazon/제휴 제품 3-5개 포함
- SEO 키워드 자연스럽게 포함
- guides-content-new.ts 파일에 추가

## 파일 구조
- `src/lib/guides-data.ts` - 가이드 메타데이터
- `src/lib/guides-content-new.ts` - 최신 콘텐츠
- `scripts/` - 자동화 스크립트

## 필수 규칙
- 파일 수정 후 반드시 git add, git commit, git push까지 완료할 것
- push 없이 작업 완료 보고 금지
- 커밋 메시지 형식: "[SecureChoiceGuide] 변경 내용 요약"
