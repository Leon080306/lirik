let baris = $("p");
let lirik = [
    "Karena kamu cantik",
    "Kan ku beri segalanya apa yang ku punya",
    "Dan hatimu baik",
    "Sempurnalah duniaku saat kau disisiku",
    "Bukan karena make up di wajahmu",
    "Atau lipstik merah itu",
    "Lembut hati tutur kata",
    "Terciptalah cinta yang ku puja"
];
let playing = false;
$(document).ready(function () {
    $("#button").click(function () {
        $("#load").addClass("playing");
        if(playing == false) {
            $("#play").animate({
                opacity: 0
            }, 500)
            $("#stop").animate({
                opacity: 1
            }, 500)
            playing = true;
            setTimeout(() => {
                playing = false;
                $("#play").animate({
                    opacity: 1
                }, 500)
                $("#stop").animate({
                    opacity: 0
                }, 500)
                $("#load").removeClass("playing");
            }, 32000);
            for(let i = 0; i < 8; i++) {
                baris[i].textContent = "";
            }
            const audio = $("#lagu")[0];
            setTimeout(() => {
                playLine();
            }, 3750);
            audio.play();
            function playLine() {
                for(let i = 0; i < 8; i++) {
                    setTimeout(() => {
                        play(i, 85);
                    }, i * 3500);
                }
            }
        }
    })
})
function play(index, speed) {
    let count = 0;
    let playChar = setInterval(function () {
        if(count == lirik[index].length) {
            clearInterval(playChar);
        }
        baris[index].textContent += lirik[index].charAt(count);
        count++;
    }, speed);
}