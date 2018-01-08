# 打上花火ゲーム version1.0
## 概要
* HTML5,CSS3,jQueryを使用し作成したwebサイトで出来る2Dゲームになります
* レスポンシブル非対応
* ポートフォリオ用サイト
## 説明
本サイトはポートフォリオ用の自分の技術を紹介するためのサイトになります。   
フレームワーク無でターゲット（花火）をクリックすると得点がUPする2Dゲームを作成してみました。  
jQueryでCSSの表示を切替える事でカウントダウン後ゲームが開始される仕組みにしました。  
ターゲット自体（花火の玉）もクリック後に花火が開裂するように表示を切替えました。  
.data()関数を利用し、花火クリック位置によって得点が変わるように関数を組みました。  
javascriptの条件分岐式でターゲットの得点合計値より結果画像を切替え、面白さを追加してみました。  
ターゲット（花火の玉）のアニメーションのスピードをMath.random()関数で設定する事で、ターゲット毎に打上速度を変えて単調にならない仕組みにしました。  
HTMLに音楽を埋込み、javascriptを利用し、音量調節、自動再生、ランダムで音楽を選曲出来る仕組みにしました。  
フリーですので必要な方はご自由に使用願います。   
## ファイルの構成
```
ファイルの構成/
├─ README.md
├─ jQuery_base                                               # jQuery保存フォルダー
├─ fonts                                                     # webフォント(Font Awesome)保存フォルダー
├─ img                                                       # 画像保存フォルダー
├─ fireworks_game_ver1.0.html                                # トップページ（自身でコーディング）
├─ css/
|    └─ fireworks_game_ver1.0                                # CSS保存フォルダー(Font Awesomeのcss保存)
|           ├─ img                                           # 画像保存フォルダー（cssに埋込む用）
|           └─ fireworks_game_ver1.0.css                     # CSSファイル（自身でコーディング）
└─ js/
    └─ fireworks_game_ver1.0                                 # jsファイル保存フォルダー
           └─ fireworks_game_ver1.0.js                       # jsファイル（自身でコーディング）   
```
## インストール方法
1、全てのファイルをフォークし、ローカルにクローンを作成。  
2、ローカルに保存したHTMLファイルをウェブブラウザで開く。  
## デモサイトURL（ポートフォリオURL）
[http://s-fukushima.sakura.ne.jp/fireworks_game_ver1.0.html](http://s-fukushima.sakura.ne.jp/fireworks_game_ver1.0.html "ポートフォリオURL")

***
***

# Website of fireworks game version1.0
## Overview
* this this website concept is easy 2D game.
* use HTML5,CSS3,jQuery.
* not correspondence of responsive design.
* my web design skill is this web site.
## Description
if you click target, points up.  
result page change according to your get points.  
use Math.random() of javascript function to can target position be random.  
use .data() of javascript function to can change points at target click position.  
Let's start this game!!
## Component file
```
Component file/
├─ README.md
├─ jQuery_base                                               # folder of jQuery files.
├─ fonts                                                     # folder of web fonts.(saving in this folder at Font Awesome.)
├─ img                                                       # folder of images. 
├─ fireworks_game_ver1.0.html                                # Top page.（my coding）
├─ css/
|   └─ fireworks_game_ver1.0                                 # folder of css(saving in this folder at css of Font Awesome.)
|          ├─ img                                            # folder of images.（image of this folder enter to css.）
|          └─ fireworks_game_ver1.0.css                      # file of top page css.（my coding）
└─ js/
    └─ fireworks_game_ver1.0                                 # folder of js.
           └─ fireworks_game_ver1.0.js                       # file of top page js.(my coding)
```
## Install
1、all files do fork and this all files do clone in local.  
2、this local files open to web browser.  
## URL of Demo site(URL of my portfolio site)
[http://s-fukushima.sakura.ne.jp/fireworks_game_ver1.0.html](http://s-fukushima.sakura.ne.jp/fireworks_game_ver1.0.html "URL of my portfolio site")
