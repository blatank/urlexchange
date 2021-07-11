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
    const encodedText = encodeURI(text);
    
    // ③クリップボードにコピーする
    copyToClipboard(encodedText, chk.checked);
  }

  // クリップボードにコピー
  async function copyToClipboard(text, check) {
    let ret = true;
    try {
      await navigator.clipboard.writeText(text);

      // ④チェックボックスにチェックがあればアラートを出す
      if (check)
        alert(`クリップボードに\n${text}\nをコピーしました！`);
    }
    catch (error) {
      alert((error && error.message) || 'クリップボードの操作に失敗しました');
    }
    return ret;
  }
  
})();