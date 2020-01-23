// Set Up
// 'DOMContentLoaded' →　アロー関数を実行
// DOMの構築が完了したら発火するイベント
//　Document Object Model
document.addEventListener('DOMContentLoaded', () => {
    // alert(window.innerWidth);
    
    // スライド要素取得
    var slideConts = document.querySelectorAll('.feature');
    // 要素の位置を入れる配列
    var slideContsTop = [];
    // ウィンドウのスクロール位置を取得
    var windowY = window.pageYOffset;
    // ウィンドウの高さを取得
    var windowH = window.innerHeight;
    // はみ出す部分
    var remainder = windowH * 0.3;

    // 要素の位置を取得
    for (var i = 0; i < slideConts.length; i++) {
        slideContsTop.push(slideConts[i].getBoundingClientRect().top + windowY);
    }
    console.log(slideContsTop);

    // ウィンドウがリサイズされたら，ウィンドウの高さを再取得
    window.addEventListener('resize', function() {
        windowH = window.innerHeight;
    });
    // ウィンドウがスクロールされたら，スクロール位置を取得
    window.addEventListener('scroll', function() {
        // スクロール位置を取得
        windowY = window.pageYOffset;

        for (var i = 0; i < slideConts.length; i++) {
            // 要素が下画面にかかったら
            if (windowY + windowH > slideContsTop[i] + remainder) {
                // .show を付加
                slideConts[i].classList.add('show');
            } else {
                // .show を削除
                // slideConts[i].classList.remove('show');
            }
        }
        console.log("scroll");
    });

});
