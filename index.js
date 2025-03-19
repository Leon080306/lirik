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
$(document).ready(function () {
    $("#button").click(function () {
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