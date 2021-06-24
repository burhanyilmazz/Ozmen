$(document).ready(() => {

  $(".m-copyright-nav .a-btn-icon").on('click', (event) => {
    event.preventDefault()

    $('html,body').animate({
      scrollTop: 0
    }, 'slow');
  })

  const $woman1 = $(".p-homepage-history__woman--leaf-1");
  const $woman2 = $(".p-homepage-history__woman--leaf-2");
  const $woman3 = $(".p-homepage-history__woman--leaf-3");

  function moved(x, y, duration, el) {
    el.animate({
      textIndent: 0
    }, {
      step: (now, fx) => {
        $(".p-homepage__history").mousemove((e) => {
          const amountMovedX = (e.pageX * -1 / x);
          const amountMovedY = (e.pageY * -1 / y);
          el.css({
            '-webkit-transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
            '-moz-transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
            '-ms-transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
            '-o-transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
            'transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)'
          });
        });
      },
      duration
    }, 'easeOutCubic');
  }

  moved(74, 75, 200, $woman1);
  moved(-86, 92, 200, $woman2);
  moved(-96, 66, 200, $woman3);

});

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
