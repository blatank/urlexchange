(function() {
  'use strict';
  const btn = document.getElementById('exchange');
  const edit = document.getElementById('urlEdit');
  const chk = document.getElementById('check');

  // ボタンクリックしたときの処理
  btn.onclick = function(){
    // ①Editボックスのデータを取得
    const text = edit.value;

    // ②URLエンコード
    const encodedText = encodeURIComponent(text);
    
    // ③クリップボードにコピーする
    const ret = setClipboard(encodedText);

    // ④チェックボックスにチェックがあればアラートを出す
    if (chk.checked === true) {
      if (ret === true) {
        alert(`クリップボードに#{encodedText}をコピーしました！`);
      }
      else {
        alert(`クリップボードにコピーするのに失敗しました!!`);
      }
    }
  }

  // クリップボードにコピー
  function setClipboard(text) {
    let ret;
    navigator.clipboard.writeText(text).then(function() {
      /* clipboard successfully set */
      ret = true;
    }, function() {
      /* clipboard write failed */
      ret = false;
    });
    return ret;
  }
  
})();