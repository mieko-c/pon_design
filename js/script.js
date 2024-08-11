// --ハンバーガーメニュー--
$('.sp_btn, .sp_nav Li').on('click', function () {
    //ここの中に記述
    $(".sp_nav").fadeToggle();
    $(".sp_btn").toggleClass("open");
  });
// ---

// --worksスライダー--
$(document).ready(function() {
    function initSlider() {
        $('.works_slider').slick({
            autoplay: true,
            autoplaySpeed: 2500,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            //画面幅766px以下で矢印を消す↓
            responsive: [
              {
                breakpoint: 766,
                settings: {
                  arrows: false,
                },
              },
            ],
        });
    }

    // function destroySlider() {
    //     $('.works_slider').slick('unslick');
    // }
// ---

// ドットナビゲーションのホバー時の色変更
 $('.slick-dots li button').hover(function() {
    $(this).css('color', '#031179'); // ホバー時の色
  }, function() {
    $(this).css('color', '#c0c0c0'); // デフォルトの色
  });

    // 初期化時にスライダーを設定
    initSlider();
});
// ---

// --pagination--
$(document).ready(function() {
    // 初期ページの設定
    showPage(1);
  
    // ページネーションのクリックイベント
    $('.pagination a').click(function(e) {
      e.preventDefault();
      var page = $(this).data('page');
      showPage(page);
    });
  
    // ページ表示関数
    function showPage(page) {
      // ここにページごとの内容の表示処理を記述する
      // 例えば、ページ番号に応じて異なるコンテンツを表示する
      // 以下はサンプルとしてコンソールに表示するだけの例
      console.log("Showing page: " + page);
  
      // ここに実際の表示内容の更新処理を追加する
    }
  });
// ---

//ナビゲーションバースクロールで背景色変化
$(function(){
  $(window).scroll(function() {
      if ($(this).scrollTop() > 0) {
          $('.header_wrap').css('background-color', '#031179'); /* htmlファイルのnavタグの背景色変更 */
      } else {
          $('.header_wrap').css('background', 'none'); /* htmlファイルのnavタグの背景色変更 */
      }
  });
});

//トップページボタンスクロールで出現
$(function() {

  $(window).on("scroll", function() {
      if ($(this).scrollTop() > 400) {
          $(".pagetop").fadeIn(300);
          } else {
          $(".pagetop").fadeOut(300);
      }
  });
});

// #page-topをクリックした際の設定
$('.pagetop').click(function () {
  $('body,html').animate({
      scrollTop: 0//ページトップまでスクロール
  }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
  return false;//リンク自体の無効化
});
