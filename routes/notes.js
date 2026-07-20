var express = require('express');
var router = express.Router();

// 接続情報を設定
const { MongoClient } = require("mongodb");
// ★ご自分のURI(今はダミー)
const uri = ""mongodb+srv://2301335026do_db_user:VbsQLEsEsPpPiJD4@cluster0.e4xlbmv.mongodb.net/?appName=Cluster0;
const client = new MongoClient(uri);

router.get('/', async (req, res) => {
  // データベース、コレクションを指定
  const database = client.db('notes');
  const notes = database.collection('notes');

  // idが2のドキュメントを取得
  const query = { id: 2 };
  const note = await notes.findOne(query);

  // ブラウザにJSON形式でレスポンスを返す
  res.json(note);
});

module.exports = router;
