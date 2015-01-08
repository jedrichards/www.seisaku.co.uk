'use strict';

module.exports = GlitchText;

var randomChars = 'jldfsifnJSODNBD~±§1234567890!@£$%^&*()-=_+,./<>?';

function easeOut (t,d,p) {
    return 1-Math.pow(1-(t/d),p);
}

function randomInt (min,max) {
    return Math.floor(Math.random()*(max-min+1))+min;
}

function limit (value,min,max) {
    return Math.min(max,Math.max(min,value));
}

function GlitchText (text,el,charDuration,numCharSteps,onComplete) {
    this.el = el;
    this.origText = text;
    this.duration = text.length * 80;
    this.charDuration = charDuration;
    this.numCharSteps = numCharSteps;
    this.textLength = this.origText.length;
    this.onComplete = onComplete;
    this.el.innerHTML = '';
    this.running = true;
}

GlitchText.prototype.start = function () {
    this.lettersArray = [];
    for ( var i=0; i<this.textLength; i++ ) {
        var letter = new GlitchTextLetter(
            randomChars,
            this.charDuration,
            this.numCharSteps,
            this.origText.charAt(i)
        );
        this.lettersArray.push(letter);
    }
    this.startTime = Date.now();
    requestAnimationFrame(this.step.bind(this));
};

GlitchText.prototype.stop = function () {
    this.running = false;
};

GlitchText.prototype.step = function (time) {
    var pos = easeOut(Date.now()-this.startTime,this.duration,3);
    var completeCount = 0;
    var index = Math.round(this.lettersArray.length*pos);
    var currString = '';
    for ( var i=0; i<this.textLength; i++ ) {
        if ( i < index ) {
            this.lettersArray[i].start();
        }
        currString += this.lettersArray[i].getCurrChar();
        if ( this.lettersArray[i].isComplete() ) {
            completeCount++;
        }
    }
    this.el.innerHTML = currString;
    if ( completeCount < this.textLength && this.running ) {
        requestAnimationFrame(this.step.bind(this));
    } else {
        if ( this.onComplete ) this.onComplete();
    }
};

function GlitchTextLetter (randomChars,duration,numSteps,finalChar) {
    this.value = '';
    this.started = false;
    this.complete = false;
    this.randomChars = randomChars;
    this.duration = duration;
    this.numSteps = numSteps;
    this.finalChar = finalChar;
    this.charArray = [];
    for ( var i=0; i<this.numSteps; i++ ) {
        this.charArray[i] = i === this.numSteps-1 ? this.finalChar :
            this.finalChar === ' ' ? ' ' :
                this.randomChars.charAt(randomInt(0,this.randomChars.length));
    }
}

GlitchTextLetter.prototype.start = function () {
    if ( this.started ) return;
    this.started = true;
    this.startTime = Date.now();
    requestAnimationFrame(this.step.bind(this));
};

GlitchTextLetter.prototype.step = function (time) {
    var progress = Date.now()-this.startTime;
    var pos = limit(easeOut(progress,this.duration,3),0,1);
    var index = Math.round((this.charArray.length-1)*pos);
    this.value = this.charArray[index];
    if ( progress < this.duration ) {
        requestAnimationFrame(this.step.bind(this));
    } else {
        this.complete = true;
        this.value = this.finalChar;
    }
};

GlitchTextLetter.prototype.getCurrChar = function () {
    return this.value;
};

GlitchTextLetter.prototype.isComplete = function () {
    return this.complete;
};
