Movie_Project
with React, TypeScripts
============
2021-07-30
-----------
프로젝트 시작 TMDB에서 api를 가져와 기본적인 틀을 갖춤   
현재 가장 인기있는 영화를 메인이미지로 나타나게 하며   
인기순으로 정렬된 영화들을 grid형식으로 나열함   
테스트용으로 github page에 업로드 하였으나 404에러가 발생함   
여러 방법들을 시도했으나 아직 해결하지 못함   

2021-07-31
----------
github page 404에러를 해결하였다   
react로 배포할때 주로 뜨는 문제라하며 루트경로가 올바르게 build되지 않는 문제라한다.   
index.tsx에   
ReactDOM.render(
<!-- <Router basename={process.env.PUBLIC_URL}>
  < App /></Router>,
  document.getElementById('root')); -->   
를 입력하여 해결하였다.