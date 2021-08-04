Movie_Project
with React, TypeScripts
============

작업일지
-------
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

2021-08-02
----------
영화이미지를 클릭하면 새로운 창으로 이동하면서 해당 영화에 대한 정보가 나타나도록 하였다.   
또한 기존에 정렬된 영화를 보여주는 컴포넌트인 Contents를 이용하여 해당 영화에 등장한 배우들의 사진과 이름 역할이 나타나도록 하였다.   
사진이 없는 배우는 noneprofile.png로 대체하였다   

2021-08-03
----------
json-server를 사용하여 했으나 오류가 발생   
+ json-server --watch data.json   
+ ~~~~~~~~~~~   
    + CategoryInfo          : 보안 오류: (:) [], PSSecurityException   
    + FullyQualifiedErrorId : UnauthorizedAccess  
https://cishome.tistory.com/138   
해당 사이트를 참고하여 해결하였다.   
json-server를 이용하여 영화의 즐겨찾기에 대한 간단한 CRUD를 구현   
github page는 정적인 방식이라 구현이 불가능 하므로 heroku를 이용하기로 하였다   
https://velog.io/@ansfls/Heroku%EB%A1%9C-%EA%B0%84%EB%8B%A8%ED%95%98%EA%B2%8C-%EC%9B%B9-%EC%82%AC%EC%9D%B4%ED%8A%B8-%EB%B0%B0%ED%8F%AC%ED%95%98%EA%B8%B0   
json-server를 이용하여 CRUD를 구현하던 중 DELETE에서 404에러가 발생하였다.   
아직 해결 방법은 모르겠다.   

2021-08-04
----------
Delete를 할 때 url을 http://localhost:3001/favorite?id={id} 가 아닌    
http://localhost:3001/favorite/{id} 로 하니 해결되었다.   
어떤 차이인지는 마저 공부해야하겠다.   
https://heeyeonjeong.tistory.com/102   
를 참고하여 Heroku에 프로젝트를 업로드 하였다.   