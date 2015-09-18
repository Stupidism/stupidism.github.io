'use strict';
Handlebars.registerHelper('step', function (data) {
    var ret = '';
    for (var key in data) {
        ret = ret + ' data-' + key + '="' + data[key] + '"';
    }
    return ret;
});

var curStep = "";

var appendSlides = function (data) {

    var steps = data;
    var htmltemplate = $('#step-template').html();
    var htmltempl = Handlebars.compile(htmltemplate);
    steps.forEach(function (step) {
        var templ = htmltempl;
        $.ajax({
            url: './steps/' + step.uri,
            success: function (data) {
                $('.steps').append(templ({
                  file: data,
                  data: step.data,
                  class: step.class,
                  id: step.id,
                  next: step.next,
                }));
            },
            async: false
        });
    });
};

function resizeIframe(obj) {
  obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
  obj.contentWindow.document.body.style.backgroundColor = 'transparent';
  obj.contentWindow.onclick = function(){
    obj.click();
  }
}
