// Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж тэмдэглэе

var activePlayer = 0;

// Тоглогчийн цуглуулсан оноог хадгалах хувьсагч

var scores = [0, 0];

// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч

var roundScore = 0;

// Шоны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг нь хувьсагчид санамсаргүй үүсгэж өгнө.

document.getElementById("score-0").textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

// Шоог шидэх эвент листенер
document.querySelector(".btn-roll").addEventListener("click", function() {
    // 1-6 хүртэлх санамсаргүй тоо гаргаж авах
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    // Шооны зургыг гаргаж ирэх
    diceDom.style.display = "block";

    // Буусан санамсаргүй тооноос хамаарч шооны зургийг вэб дээр гаргаж ирэх
    diceDom.src = 'dice-' + diceNumber + '.png'; 

    // Шоо буусанаас хамаарч оноог өөрчилнө
    if(diceNumber !== 1) {
        // 1-ээс ялгаатай тоо буулаа. Буусан тоог тоглогчид нэмж өгнө.
        roundScore = roundScore + diceNumber;
        document.getElementById("current-" + activePlayer).textContent = roundScore;
    } else {
        // 1 буусан тул тоглогчийн ээлжийг энэ хэсэгт сольж өгнө.

        // Энэ тоглогчийн ээлжиндээ цуглуулсан оноог 0 болгоно.

        roundScore = 0;
        document.getElementById("current-" + activePlayer).textContent = 0;
        // Хэрэв идэвхтэй тоглогч 0 байвал идэвхтэй тоглогчийг 1 болго
        // Үгүй бол идэвхтэй тоглогч 0 байвал идэвхтэй тоглогчийг 1 болго

        activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

        // Улаан цэгийг шилжүүлэх
        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active");

        // Шоог түр алга болгох
        diceDom.style.display = "none";

        // if(activePlayer == 0) {
        //     activePlayer = 1;
        // } else [
        //     activePlayer = 0;
        // }
    }
});
