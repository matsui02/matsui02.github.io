// ドロワーメニュー
jQuery("#toggle").on("click", function () {
  jQuery(".toggle-list").slideToggle();
});

// トップへ戻るボタン
$(document).ready(function () {
  const $button = $('#js-button-top');
  const scrollThreshold = 80;
  const fadeDuration = 300;

  // スクロールイベント
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > scrollThreshold) {
      $button.fadeIn(fadeDuration);
    } else {
      $button.fadeOut(fadeDuration);
    }
  });

  $button.on('click', function () {
    $('html, body').animate({ scrollTop: 0}, 500);
  });
});

// モーダル
$(function () {
  const modal = $("#js-modal");
  const overlay = $("#js-overlay");
  const overImg = $('.open-img');
  const miniImg = $('.js-open');

  miniImg.click(function () {
    const index = miniImg.index(this);
    overImg.attr('src',$(miniImg[index]).attr('src'));
    modal.fadeIn('slow');
    overlay.fadeIn('slow');
    return false;
  });
  $(window).click(function () {
    modal.fadeOut('slow');
    overlay.fadeOut('slow');
    return false;
  });
});
