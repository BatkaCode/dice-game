// Тоглоомын бүх газарт ашиглагдах глобал хувьсагчдыг энд зарлав.
var activePlayer;
var scores;
var roundScore;
var diceDom = document.querySelector(".dice");

initGame();

// Тоглоомыг шинээр эхлэхэд бэлтгэх функц
function initGame() {
    // Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж тэмдэглэе
    activePlayer = 0;

    // Тоглогчийн цуглуулсан оноог хадгалах хувьсагч
    scores = [0, 0];

    // Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
    roundScore = 0;

    // Шоны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг нь хувьсагчид санамсаргүй үүсгэж өгнө.

    document.getElementById("score-0").textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.getElementById('name-0').textContent.textContent = "Player 1";
    document.getElementById('name-1').textContent.textContent = "Player 2";

    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");

    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");

    document.querySelector(".player-0-panel").classList.add("active");

    diceDom.style.display = "none";
};

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

        switchToNextPlayer();
    }
});

// HOLD товчны Event Listener
document.querySelector('.btn-hold').addEventListener('click', function() {
    // Уг тоглогчийн цуглуулсан оноог үндсэн оноон дээр нэмж өгнө.

    scores[activePlayer] = scores[activePlayer] + roundScore;

    // Дэлгэц дээр оноог нь өөрчилнө.
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];   

    // Уг тоглогч хожсон эсэхийг шалгах
    if(scores[activePlayer] >= 100) {
        document.getElementById('name-' + activePlayer).textContent = 'Winner';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    } else {
        // Тоглогчийн ээлжийг солино.
        switchToNextPlayer();
    }
    
});

function switchToNextPlayer() {
    // Цуглуулсан оноог шилжүүлсний дараа 0 болгоно.
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;

     // Тоглогчийн ээлжийг солино.
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

    // Улаан цэгийг шилжүүлэх
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    // Шоог түр алга болгох
    diceDom.style.display = "none";
};

// Тоглоомыг шинээр эхлүүлэх товч
document.querySelector('.btn-new').addEventListener('click', initGame);
