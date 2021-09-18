github.io 개인 블로그 가이드
(기준: Windows x64 + gitbash)

# 개요
github.io용 프로젝트를 생성한다.
프로젝트는 반드시 'mulder3062.github.io'으로 한다.
이후 프로젝트 Root에 index.html을 만들면 끝.

이후 https://mulder3062.github.io 으로 접속하면 된다.

# git

## github에 ssh키 등록
참고: https://www.lainyzine.com/ko/article/creating-ssh-key-for-github/#github%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%A0-%EB%95%8C-ssh-%ED%82%A4%EB%8A%94-%EC%99%9C-%ED%95%84%EC%9A%94%ED%95%9C%EA%B0%80%EC%9A%94

1. ssh 키 생성
```
$ ssh-keygen -t ed25519 -C 'mulder3062@gmail.com'
```

2. ~/.ssh/id_ed25519.pub 내용을 클립보드에 복사
3. github > settings > SSH and GPG keys
4. New SSH key 클릭
5. ssh 키 설정
    * title: 적당한 이름 (현재 'global sshkey'으로 등록됨)
    * key: 클립보드 내용 붙여넣기
6. ~/.ssh/config 파일 수정
```
Host github.com
  IdentityFile ~/.ssh/id_ed25519
  User git
```
7. ssh 접속 테스트
```
$ ssh -T git@github.com
Warning: Permanently added the RSA host key for IP address '52.78.231.108' to the list of known hosts.
Hi mulder3062! You've successfully authenticated, but GitHub does not provide shell access.
```

여러 계정 사용시 참고: https://www.lainyzine.com/ko/article/useful-git-settings-when-using-github-multi-account/

8. clone
github.io는 github pro 계정이 아니면 private으로 할 수 없다.
그래서 별도 개발용 repository를 만들었다.
```
$ git clone git@github.com:mulder3062/mulder3062.github.io.dev.git
```

# Jekyll?
매번 블로그 작성시 html을 만드는 것은 비효율적이다.
Jekyll을 이용하면 Markdown 문법으로 블로그 페이지를 만들 수 있다.


# 로컬 개발환경 구성 
* 참고: https://jekyllrb.com/docs/installation/


## 1. Ruby+Devkit 설치
https://rubyinstaller.org/downloads/
https://github.com/oneclick/rubyinstaller2/releases/download/RubyInstaller-2.7.4-1/rubyinstaller-devkit-2.7.4-1-x64.exe

## 2. Jekyll 설치
```gem install bundler jekyll```

## 3. 로컬 서버 실행
github에 올리지 않아도 로컬에서 바로 수정된 내용을 서버를 띄워 확인할 수 있다.
단, _config.yml과 Gemfile 등의 변경사항은 실시간으로 반영되지 않는 듯 하다.

```
$ bundle
```

```
$ bundle exec jekyll serve
```

# 배포
타겟: git@github.com:mulder3062/mulder3062.github.io.git

아래 방법으로 commit하지 않으면 https://mulder3062.github.io 접속시 404 오류가 뜬다.
```
$ git commit --allow-empty -m "rebuild"
$ git push origin master
```


# Theme
대충 찾아보니 jekyll-theme-chirpy 테마가 좋은 것 같아. 기존 테마에서 변경했다.
Tag, Category 기능이 있고 반응형으로 되니 좋다.

_config.yml과 Gemfile을 수정하려니 다른 부분이 많아 https://github.com/cotes2020/jekyll-theme-chirpy/releases/tag/v4.2.1 을 Fork 한 후 파일을 덮어써서 적용했다.
