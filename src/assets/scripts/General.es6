const shrinkHeader = 520;
const $transparent = $(".o-header--transparent");

function getCurrentScroll() {
  return window.pageYOffset || document.documentElement.scrollTop;
}
$(window).scroll(function () {
  const e = getCurrentScroll();
  const windowWidth = $(window).width();

  if ($transparent.length && windowWidth < 1025) {
    shrinkHeader <= e ?
      $(".o-header").removeClass("o-header--transparent").removeClass("o-header--white") :
      $(".o-header").addClass("o-header--transparent").addClass("o-header--white");
  }

  const $historyImg = $(".p-history-block-1__img");
  if ($historyImg.length) {
    const st = $(this).scrollTop();
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
