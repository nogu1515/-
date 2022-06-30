const FS = require('fs')
const PATH = require('path')

const csvPath = PATH.join(__dirname, '20220325.csv')

//csvの中身が１つの文字列として表示される。これを配列に変換する。
const csvData = FS.readFileSync(csvPath).toString()
console.log(csvData)

//1つの文字列からデータを分けるために、配列に変換する。改行コードで区切るようにする
const rows = csvData.split('\r\n')
console.log(rows)

//区切ったものを配列に入れていく。
const prefectures = rows.map(row => {
  const cols = row.split(',')
    return {
    "type": "Feature",
    "geometry": {
    "type": "Point",
    "coordinates": [
    cols[11]  
    ]
  },
    "properties": {
    No: cols[0],
    ID: cols[1],
    業態: cols[2],
    店舗支店イベント施設名: cols[3],
    特典等: cols[4],
    感染予防対策PR: cols[5],
    北海道飲食店感染防止対策認証制度: cols[6],
    市町村: cols[7],
    住所: cols[8],
    電話番号: cols[9],
    URL: cols[10],
    "allowedQueriesPerSecond": 150.0
  }}
})
console.log(prefectures)

//writeFileSyncを用いてJSONファイルを作成する
const jsonPath = PATH.join(__dirname, '20220325.json')
FS.writeFileSync(jsonPath, JSON.stringify(prefectures))
