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
http://ghcksdk.com/gh-pages-neterr_aborted-404/   
해당 게시글을 참고하여 해결하였다.   
페이지의 맽 밑에 다음페이지와 이전페이지로 이동하는 버튼을 만들고 현재페이지를 표기하였다.   
각 영화의 이미지를 클릭하면 상세사항을 보기위해 router를 설정하였으며 match를 활용하기 위해   
https://wooooooak.github.io/frontend/2018/11/02/Typescript%EC%99%80-React%EC%97%90%EC%84%9C-match-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0/   
https://gongbu-ing.tistory.com/45   
해당 게시글을 참고하였다.   