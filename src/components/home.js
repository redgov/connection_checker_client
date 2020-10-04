import { makeStyles, Paper } from '@material-ui/core';
import React from 'react'


const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
  },
}));


const Home = () => {

  const classes = useStyles()

  return (
    <Paper className={classes.paper}>
      <h2>Connection Checkerへようこそ</h2>

      <h3>アプリ概要</h3>
      <p><b>Connection Checker</b>は、<b>サーバーの死活管理</b>を効率的に行うためのツールです</p>

      <h3>アプリ詳細</h3>
      <p>このアプリの使い方を簡単に説明します。</p>

      <p>まず、メールアドレスを紐付けたグループをアプリケーション内で作成していただき、<br />
      作成したグループに死活監視の対象としたいサーバーを登録します。</p>
      <p>マシン登録が完了したら自動で<b>3時間おきにpingコマンドを利用し、死活監視を自動で行い</b>ます。</p>
      <p>pingが通らなかった場合には、そのグループに登録してあるメールアドレスに対して、<br />
      お知らせメールが飛びます。</p>

      <p>また3時間おきの実行のみでなく、<b>即時実行</b>も可能です。</p>
      <p>サイドバーからグループを選択するとそのグループに属すサーバー一覧が表示され、<br />
      その一覧の最も右の列にある三角のボタンを押すと即座に通信を実行できます。</p>

      <h3>利用技術</h3>
      <p> 当アプリケーションでは下記技術を用いており、各サービスの仕様変更ならびに障害発生時には、本アプリの提供・公開を中断する場合もございます。予めご了承下さい。</p>

      <ul>
        <li>FastAPI (python)</li>
        <li>React・Redux・Material-UI</li>
      </ul>

    </Paper>

  )
}

export default Home