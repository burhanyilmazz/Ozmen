export default class Speech {

  constructor(el, options) {

    this.$el = el;
    this.input = this.$el.find( "input:text" );
    this.value = "";

    const defaults = {
      progressClass: ".m-search__speech-progress",
      speechButton: ".m-search__speech"
    }

    this.options = $.extend({}, defaults, options);

    this.speech = this.$el.find( this.options.speechButton );

    const SpeechRecognition = window.speechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition;

    if (!SpeechRecognition) {
      this.speech.hide();
      return;
    }

    this.recognition = new SpeechRecognition();
    this.recognition.lang = "tr";
    this.recognizing = false;

    this.recognition.onstart = () => this.onRecognitionStart();
    this.recognition.onresult = event => this.onRecognitionResult(event);
    this.recognition.onend = (event) => this.onRecognitionEnd(event);
    this.recognition.onerror = () => this.onRecognitionError();

    this.$el.on("click", this.options.speechButton, event => this.onSpeechStart(event));

  }

  onSpeechStart(event) {
    if (event.detail == 0) {
      return;
    }
    event.preventDefault();
    if (this.recognizing) {
      this.recognition.stop();
      return;
    }
    this.recognition.start();
  }

  onRecognitionStart() {
    this.recognizing = true;
    this.value = this.input.val();
    this.input.val("Dinleniyor...");
    this.$el.addClass( this.options.progressClass );
  }

  onRecognitionResult(event) {
    this.input.val(event.results[0][0].transcript);
    this.input.trigger('input');
  }

  onRecognitionEnd(e) {
    this.$el.removeClass( this.options.progressClass );
    this.recognizing = false;
    if(this.input.val() == "Dinleniyor..."){
      this.input.val("")
    }
  }

  onRecognitionError() {
    this.$el.removeClass( this.options.progressClass );
    this.input.val( this.value );
  }

}
