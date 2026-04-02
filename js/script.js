window.addEventListener('DOMContentLoaded', () => {





    // すべての .js-scrollin 要素を取得
    const scrollInElements = document.querySelectorAll('.js-scrollin');

    // 判定のオプション設定
    const scrollInOptions = {
        root: null, // ビューポート（画面）を基準にする
        rootMargin: '0px 0px -25% 0px', // 下から25%の位置を判定ラインにする
        threshold: 0 // 要素が1pxでも判定ラインに乗ったら発火
    };

    // 実行する関数
    const scrollInObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 画面内（25%ラインより上）に入った時
                entry.target.classList.add('js-scrollin-active');

                // 一度アニメーションしたら監視を止める場合（ニコン風）は下の行を有効にする
                // obs.unobserve(entry.target);
            }
        });
    }, scrollInOptions);

    // 各要素を監視対象に登録
    scrollInElements.forEach(el => {
        scrollInObserver.observe(el);
    });



    // --- 40%バージョンの設定 ---
    const scrollIn40Elements = document.querySelectorAll('.js-scrollin-40');

    const scrollIn40Options = {
        root: null,
        rootMargin: '0px 0px -40% 0px', // 下から40%の位置
        threshold: 0
    };

    const scrollIn40Observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('js-scrollin-40-active');
                // 一度だけ動かしたい場合は unobserve を有効に
                // obs.unobserve(entry.target);
            }
        });
    }, scrollIn40Options);

    scrollIn40Elements.forEach(el => {
        scrollIn40Observer.observe(el);
    });













    const video = document.getElementById('fv-video');
    const visual = document.getElementById('fv-visual');
    const searchBtn = document.getElementById('search-btn');
    const copyWrapper = document.querySelector('.fv-copy-wrapper'); // 追加
    const fvSection = document.querySelector('.fv');

    // ====== 設定値（カスタマイズ可能） ======
    const VIDEO_END_THRESHOLD = 400;   // ビデオが消えるしきい値
    const COPY_START_THRESHOLD = 600;  // コピーのクラスを付与するしきい値
    const SCALE_START_THRESHOLD = 800; // ★スケールダウンを開始する地点 (600 + 200)
    const UNLOCK_THRESHOLD = 1100;     // ロックを解除する合計量
    const MAX_BLUR = 20;               // ブラーの最大値
    const MIN_SCALE = 0.9;             // ★最終的なスケール倍率 (10%減)
    // =====================================






    if (!video || !visual || !fvSection) return;








});

window.addEventListener('load', () => {
    scrollInElements.forEach(el => {
        el.classList.remove('js-scrollin-active');
    });
});






// 1. ブラウザの自動スクロール復元機能を「手動」に変更する
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

// 2. ページ読み込み（リロード）時に先頭へ移動
window.addEventListener('load', () => {
    // アンカー（#）がついている場合はその位置へ、なければ先頭へ
    if (!window.location.hash) {
        window.scrollTo(0, 0);
    }











    const wrapper = document.querySelector('.fv-video-wrapper');
    const videos = wrapper.querySelectorAll('video');

    // 両方のビデオに対してイベントを設定
    videos.forEach(video => {
        video.addEventListener('timeupdate', () => {
            // 表示されている（displayがnoneではない）ビデオのみを対象にする
            if (getComputedStyle(video).display !== 'none') {
                const timeLeft = video.duration - video.currentTime;

                if (timeLeft <= 4) {
                    wrapper.classList.add('is-fading');
                } else {
                    wrapper.classList.remove('is-fading');
                }
            }
        });
    });


});

