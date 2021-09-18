$(window).scroll(() => {
  const $historyImg = $(".p-history-block-1__img");
  if ($historyImg.length) {
    const st = $(window).scrollTop();
    $historyImg.css({
      bottom: st * 0.2
    });
  }
})

window.Parsley.addValidator('maxFileSize', {
  validateString: function (_value, maxSize, parsleyInstance) {
    if (!window.FormData) {
      return true;
    }
    var files = parsleyInstance.$element[0].files;
    return files.length != 1 || files[0].size <= maxSize * 1024;
  },
  requirementType: 'integer',
  messages: {
    tr: 'Max. dosya boyutu %s Kb. olamalıdır'
  }
});

window.onload = () => {
  lax.setup({
    breakpoints: {
      small: 0,
      large: 768
    }
  })

  const updateLax = () => {
    lax.update(window.scrollY)
    window.requestAnimationFrame(updateLax)
  }

  window.requestAnimationFrame(updateLax)
}

$(document).on('click', '.p-contact-bottom__button a[href^="#"]', (event) => {
  event.preventDefault();

  $('html, body').animate({
    scrollTop: $($(event.currentTarget).attr("href")).offset().top
  }, 500);
});

$('[data-fancybox]').fancybox({
	toolbar  : false,
	smallBtn : true,
})