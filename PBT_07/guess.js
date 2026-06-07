const secretNumber = Math.floor(Math.random() * 100) + 1;

const guessedNumbers = [];

let attempts = 0;
const maxAttempts = 7;

while (attempts < maxAttempts) {

    let input = prompt(
        `Lượt ${attempts + 1}/${maxAttempts}\nNhập số từ 1 đến 100:`
    );

    let guess = Number(input);

    // Kiểm tra dữ liệu nhập
    if (
        input === null ||
        input.trim() === "" ||
        isNaN(guess) ||
        guess < 1 ||
        guess > 100
    ) {
        alert("Lỗi: Chỉ được nhập số từ 1 đến 100!");
        continue;
    }

    // Kiểm tra nhập trùng
    let duplicated = false;

    for (let i = 0; i < guessedNumbers.length; i++) {
        if (guessedNumbers[i] === guess) {
            duplicated = true;
            break;
        }
    }

    if (duplicated) {
        alert("Bạn đã đoán số này rồi!");
        continue;
    }

    guessedNumbers.push(guess);
    attempts++;

    if (guess === secretNumber) {
        alert("Đúng rồi!");
        alert(`Bạn đoán đúng sau ${attempts} lần!`);
        break;
    }
    else if (guess < secretNumber) {
        alert("Cao hơn");
    }
    else {
        alert("Thấp hơn");
    }
}

if (
    attempts === maxAttempts &&
    guessedNumbers.indexOf(secretNumber) === -1
) {
    alert(
        `Bạn đã thua!\nĐáp án là: ${secretNumber}`
    );
}