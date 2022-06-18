// JavaScript
// イベントハンドラ（ファイルがドロップされたら起動する）
function conversion(event) {
    event.preventDefault();
    var res = event.target.result;
    var d = res.split('\n'); // 1行ごとに分割
    var jsonArray = csv2json(d); // JSON形式に変換
}

function csv2json(csvArray) {
    var jsonArray = [];

    // 1行目から「項目名」の配列を生成
    var items = csvArray[0].split(',');

    // CSVデータの配列の各行をループ処理
    //// 配列の先頭要素（行）は項目名のための処理対象外
    //// 配列の最終要素（行）は空のため処理対象外
    for (var i = 1; i < csvArray.length - 1; i++) {
        var a_line = new Object();

        // カンマで区切られた各データに分割
        var csvArrayD = csvArray[i].split(',');

        //// 各データをループ処理
        for (var j = 0; j < items.length; j++) {
            
            // 要素名：items[j]
            // データ：csvArrayD[j]
            a_line[items[j]] = csvArray[j];
        }
        jsonArray.push(a_line);
    }
    // console.debug(jsonArray);
    return jsonArray;
}
