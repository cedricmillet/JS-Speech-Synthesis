/**
 *  A simple speechSynthesis implementation
 *  Check compatibility :     https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speaking#Browser_compatibility
 */
class SpeakerJS {

    //  >> Properties
    synth;
    text;

    voiceCfg = {
        pitch: 1.0,
        rate: 1.0,
        volume: 1.0,
        voice: null
    };


    //  >> Constructor
    constructor() {
        this.synth = window.speechSynthesis;
    }
    
    //  >> Public Methods
    speak() {
        const utt = this.getSynthesisUTT(this.text);
        this.synth.speak(utt);
    }
    pause()         {   this.synth.pause();             }       //  Pause synthesis
    resume()        {   this.synth.resume();            }       //  Resume synthesis
    isSpeaking()    {   return this.synth.speaking;     }       //  Return true if is speaking
    isPaused()      {   return this.synth.paused;       }       //  Return true if is paused
    getVoices()     {   return this.synth.getVoices();  }       //  Return avalaible voices list
    setVoice(v)     {   this.voiceCfg.voice = v;        }       //  Set specific voice

    //  >> Private Methods

    getSynthesisUTT(txtToSynth) {
        let utt = new SpeechSynthesisUtterance(txtToSynth);
        utt.pitch = this.voiceCfg.pitch;
        utt.rate = this.voiceCfg.rate;
        utt.volume = this.voiceCfg.volume;
        utt.voice = this.voiceCfg.voice;
        return utt;
    }

    
}