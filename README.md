# MSUB

청소년 프로그래밍 팀 <b>MSUB</b>의 간단한 소개 설명이 적힌 웹 페이지입니다.

React로 개발하였으며 TypeScript로 작성되었습니다.

개발해오라고 협박받아 급히 만들었습dmqdmq\
디자인은 Figma로 제공받은 크기부터 위치까지 전부 그대로 만들었습니다.

중앙 정렬은 몇번 시도해봤는데 안 돼서 포기합니다(?)

이 프로젝트는 [GitHub Pages](https://WhiteKr.github.io/MSUB)에서 확인하실 수 있습니다.



## `src/components/`
해당 경로 안쪽의 `.tsx` 파일들에 대한 설명입니다.\
해당 경로의 모든 파일(컴포넌트)들은 `src/App.tsx` 파일에서 import로 취합됩니다.


### `EndArea.tsx`

페이지의 가장 하단에 위치한 그림 구역 컴포넌트입니다.\
단색 배경에 \<div>를 올려 background에 이미지를 첨부하였습니다.

\<img> 태그를 사용할 수 있었지만 위치 잡기가 귀찮아서 \<div>로 했습니다.


### `Header.tsx`

헤더입니다.\
페이지 최상단의 <b>MSUB</b> 텍스트가 박힌 구역 컴포넌트입니다.


### `ImageBox.tsx`

헤더 아래에 위치한 블러 이미지와 문구 구역 컴포넌트입니다.\
원래 원본 이미지에 직접 blur 효과를 넣으려 했으나 Figma에서 제공받은 이미지 자체에 블러 처리가 되어있어 그냥 썼습니다.

### `MainContent.tsx`

메인 콘텐츠가 담긴 구역 컴포넌트입니다.\
Figma에서 배경이 없이 문구만 있었기에, 웹사이트에서도 그대로 따로 배경을 넣지 않고 문구만 삽입하였습니다.



## `src/fonts/`
해당 경로 안쪽의 `.otf` 파일들에 대한 설명입니다.

글꼴은 사용되지 않더라도 이후에 편하게 가져다 쓰기 위해 같은 이름의 글꼴을 종류별로 모두 모아두었습니다.\
그 외 이유는 딱히 없습니다.

### `SCDream[NUM].otf`

[S-Core Dream](https://www.s-core.co.kr/company/font/) 글꼴입니다.

`[NUM]`에는 1부터 9까지의 숫자 중 하나가 대입됩니다.\
해당 숫자가 커질수록 글꼴의 굵기가 굵어집니다.

### `Wemakeprice.otf-[TYPE]`

[위메프](http://company.wemakeprice.com/wmp/brand) 글꼴입니다.

`[TYPE]`에는 `Bold`, `Regular`, `SemiBold` 중 하나가 대입됩니다.\
순서대로 `굵음`, `기본`, `약간 굵음` 입니다.

### `Noto Sans.otf`

[Noto Sans KR](https://fonts.google.com/specimen/Noto+Sans+KR) 글꼴입니다.

이 글꼴은 `src/fonts/`에 없습니다.\
`src/styles/MainContent.css`에서 직접 import로 사용하였습니다.
