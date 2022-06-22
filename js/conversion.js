// Form要素を取得
var form = document.forms.inputform;

// ファイルが読み込まれた時の処理
form.inputfile.addEventListener('change', function(e) {
    // 読み込んだファイル情報を取得
    var result = e.target.files[0];

    // FileReaderのインスタンス生成
    var reader = new FileReader();

    // 読み込んだファイルの中身を取得
    reader.readAsText(result);

    // ファイルの中身を取得後に処理
    reader.addEventListener('load', function() {

        // ファイルの中身をテキストエリアに表示
        form.output_csv.textContent = reader.result;
    })
})
