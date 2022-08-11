const loop = new Tone.Loop(repeat, "8n").start(0);
let musicBtn = document.getElementById('musicBtn');
let index=0;

musicBtn.onclick = function() {
    if(musicBtn.innerHTML =='Play') {
        musicBtn.innerHTML = 'Stop';
        Tone.Transport.start();
    }
    else {
        musicBtn.innerHTML = 'Play';
        Tone.Transport.stop();
    }
}
function repeat() {
    console.log(index%8);
    const sound1 = new Tone.Player("Samples/clap-808.wav").toDestination();
    let sound1CurrNote = 's1n' + (index%8+1);
    const sound2 = new Tone.Player('Samples/hihat-808.wav').toDestination();
    let sound2CurrNote = 's2n' + (index%8+1);
    const sound3 = new Tone.Player('Samples/tom-acoustic01.wav').toDestination();
    let sound3CurrNote = 's3n' + (index%8+1);
    const sound4 = new Tone.Player('Samples/ride-acoustic02.wav').toDestination();
    let sound4CurrNote = 's4n' + (index%8+1);
    const sound5 = new Tone.Player('Samples/snare-lofi01.wav').toDestination();
    let sound5CurrNote = 's5n' + (index%8+1);
    const sound6 = new Tone.Player('Samples/perc-metal.wav').toDestination();
    let sound6CurrNote = 's6n' + (index%8+1);
    const sound7 = new Tone.Player('Samples/kick-heavy.wav').toDestination();
    let sound7CurrNote = 's7n' + (index%8+1);

    if (document.getElementById(sound1CurrNote).checked) {
        sound1.autostart = true;
    }
    if(document.getElementById(sound2CurrNote).checked) {
        sound2.autostart = true;
    }
    if(document.getElementById(sound3CurrNote).checked) {
        sound3.autostart = true;
    }
    if(document.getElementById(sound4CurrNote).checked) {
        sound4.autostart = true;
    }
    if(document.getElementById(sound5CurrNote).checked) {
        sound5.autostart = true;
    }
    if(document.getElementById(sound6CurrNote).checked) {
        sound6.autostart = true;
    }
    if(document.getElementById(sound7CurrNote).checked) {
        sound7.autostart = true;
    }
    index++;
}
   