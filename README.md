# FineDust Map💨

오픈 API를 활용한 각 시도별 미세먼지 데이터를 검색할 수 있는 미세먼지 알리미 앱

- 데모사이트 : [DEMO](https://whimsical-sfogliatella-62bbe0.netlify.app/)
- 작업기간 : 총 3일
- 작업인원 : 1인
- 사용언어 : `React`
- 라이브러리 : `redux`, `axios`, `react-router-dom`, `styled-component`

- 작업목표 :

  - redux를 활용하여 데이터를 관리한다
  - 주어진 api를 가공하여 출력한다
  - 즐겨찾기를 등록하고, 해제하는 기능을 구현한다

  ***

  ## 🧡앱 소개

  ### ✨지역 전체 데이터

![1](https://user-images.githubusercontent.com/112364408/227930641-69938732-4eff-4d82-9ec7-66951c7d610d.png)'

전체보기 탭에서는 원하는 지역을 선택하여, 해당 지역의 전체 미세먼지 데이터를 조회 할 수 있습니다

### ✨내 지역

![2](https://user-images.githubusercontent.com/112364408/227931138-12ebc47f-73aa-481d-878a-cab989f2ef3f.png)

내 지역보기 탭에서는 내가 선택한 하나의 지역을 고정적으로 보여줍니다

### ✨즐겨찾기

![3](https://user-images.githubusercontent.com/112364408/227932095-e5bcec2c-6667-4b31-a9a5-1ca0cc9d3f1e.png)

각 카드의 북마크 아이콘을 클릭하여 즐겨찾기 지역으로 설정이 가능합니다

![4](https://user-images.githubusercontent.com/112364408/227932314-eec27993-26a9-40e5-a323-ec7783c88176.png)

즐겨찾기로 등록 된 지역은 즐겨찾기 탭에서 모아볼 수 있습니다

### ✨로딩아이콘

![loading](https://user-images.githubusercontent.com/112364408/227932890-f7cd1a59-b249-4165-ac75-b3525135ddc5.png)

데이터를 불러오는 동안 로딩 아이콘이 나타납니다

### ✨local storage

![image](https://user-images.githubusercontent.com/112364408/227933230-dcbe2343-33ea-4d7b-a0b4-e0dd37d7517c.png)

각 페이지에서 불러 온 지역은 로컬에 저장되어 화면이 새로고침 되어도 유지됩니다
