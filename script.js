//MAKING THE MODAL FUNCTIONAL:-

let rulesBtn = document.querySelector(".rules-btn");
let crossBtn = document.querySelector(".cross-btn");
rulesBtn.addEventListener("click", () => {
  document.querySelector(".rules").classList.toggle("disable");
});
crossBtn.addEventListener("click", () => {
  document.querySelector(".rules").classList.toggle("disable");
});

// MAKING THE TRY AGAIN BTN :-
document.querySelector(".try-again-btn").addEventListener("click", () => {
  document.querySelector(".try-again-btn").classList.toggle("disable");
  document.querySelector(".try-again-btn").classList.toggle("blink");
});

// MAKING THE PLAY AGAIN BTN:-
// document.querySelector(".play-again-btn").addEventListener("click", () => {
//   document
//     .querySelector(".container-bottom-secondry")
//     .classList.toggle("disable");

//   document.querySelector(".container-bottom").classList.toggle("disable");
// });

// MAKING THE GAME WORK:-

let scoreBoard = document.querySelector(".score");
scoreBoard.innerHTML = 0;
let score = 0;
let scissorBtn = document.querySelector(".scissor");
let rockBtn = document.querySelector(".rock");
let paperBtn = document.querySelector(".paper");

let arr = ["rock", "paper", "scissor"];

scissorBtn.addEventListener("click", () => {
  let randomIndex = Math.floor(Math.random() * arr.length);
  console.log(arr[randomIndex]);
  if (arr[randomIndex] === "paper") {
    score += 1;
    scoreBoard.innerHTML = score;
    document.querySelector(".container-bottom").classList.toggle("disable");

    document.querySelector(
      ".container-bottom-secondry"
    ).innerHTML = ` <div class="scissor-secondry-box">
    <p class="scissor-secondry-text font-17 white font-5">YOU PICKED</p>
    <div class="scissor-secondry ripple">
      <img src="/images/scissor.png" alt="" />
    </div>
  </div>
  <div class="message">
    <p class="message-text white font-40 font-7" style="z-index: 100">
      YOU WIN <br /><span class="font-21 div">AGAINST PC</span>
    </p>
    <button class="play-again-btn">PLAY AGAIN</button>
  </div>
  <div class="${arr[randomIndex]}-secondry-box">
    <p
      class="${arr[randomIndex]}-secondry-text font-17 font-5 white"
      style="z-index: 100"
    >
      PC PICKED
    </p>
    <div class="${arr[randomIndex]}-secondry">
      <img src="/images/${arr[randomIndex]}.png" alt="" />
    </div>
  </div>`;

    document
      .querySelector(".container-bottom-secondry")
      .classList.toggle("disable");
  } else if (arr[randomIndex] === "rock") {
    document.querySelector(".container-bottom").classList.toggle("disable");

    document.querySelector(
      ".container-bottom-secondry"
    ).innerHTML = ` <div class="scissor-secondry-box">
    <p class="scissor-secondry-text font-17 white font-5">YOU PICKED</p>
    <div class="scissor-secondry">
      <img src="/images/scissor.png" alt="" />
    </div>
  </div>
  <div class="message">
    <p class="message-text white font-40 font-7" style="z-index: 100">
      YOU LOST <br /><span class="font-21 div">AGAINST PC</span>
    </p>
    <button class="play-again-btn">PLAY AGAIN</button>
  </div>
  <div class="rock-secondry-box">
    <p
      class="rock-secondry-text font-17 font-5 white"
      style="z-index: 100"
    >
      PC PICKED
    </p>
    <div class="rock-secondry ripple">
      <img src="/images/rock.png" alt="" />
    </div>
  </div>`;

    document
      .querySelector(".container-bottom-secondry")
      .classList.toggle("disable");
  } else {
    document.querySelector(".try-again-btn").classList.toggle("disable");
    document.querySelector(".try-again-btn").classList.toggle("blink");
    document.querySelector(".scissor").classList.toggle("no-click");
    document.querySelector(".rock").classList.toggle("no-click");
    document.querySelector(".paper").classList.toggle("no-click");
  }

  // PLAY AGAIN BTN

  document.querySelector(".play-again-btn").addEventListener("click", () => {
    document
      .querySelector(".container-bottom-secondry")
      .classList.toggle("disable");

    document.querySelector(".container-bottom").classList.toggle("disable");
  });

  //   TRY AGAIN BTN

  document.querySelector(".try-again-btn").addEventListener("click", () => {
    document.querySelector(".try-again-btn").classList.add("disable");
    document.querySelector(".try-again-btn").classList.remove("blink");
    document.querySelector(".scissor").classList.remove("no-click");
    document.querySelector(".rock").classList.remove("no-click");
    document.querySelector(".paper").classList.remove("no-click");
  });
});

rockBtn.addEventListener("click", () => {
  let randomIndex = Math.floor(Math.random() * arr.length);
  console.log(arr[randomIndex]);
  if (arr[randomIndex] === "scissor") {
    score += 1;
    scoreBoard.innerHTML = score;
    document.querySelector(".container-bottom").classList.toggle("disable");

    document.querySelector(
      ".container-bottom-secondry"
    ).innerHTML = ` <div class="rock-secondry-box">
      <p class="rock-secondry-text font-17 white font-5">YOU PICKED</p>
      <div class="rock-secondry ripple">
        <img src="/images/rock.png" alt="" />
      </div>
    </div>
    <div class="message">
      <p class="message-text white font-40 font-7" style="z-index: 100">
        YOU WIN <br /><span class="font-21 div">AGAINST PC</span>
      </p>
      <button class="play-again-btn">PLAY AGAIN</button>
    </div>
    <div class="${arr[randomIndex]}-secondry-box">
      <p
        class="${arr[randomIndex]}-secondry-text font-17 font-5 white"
        style="z-index: 100"
      >
        PC PICKED
      </p>
      <div class="${arr[randomIndex]}-secondry">
        <img src="/images/${arr[randomIndex]}.png" alt="" />
      </div>
    </div>`;

    document
      .querySelector(".container-bottom-secondry")
      .classList.toggle("disable");
  } else if (arr[randomIndex] === "paper") {
    document.querySelector(".container-bottom").classList.toggle("disable");

    document.querySelector(
      ".container-bottom-secondry"
    ).innerHTML = ` <div class="rock-secondry-box">
      <p class="rock-secondry-text font-17 white font-5">YOU PICKED</p>
      <div class="rock-secondry">
        <img src="/images/rock.png" alt="" />
      </div>
    </div>
    <div class="message">
      <p class="message-text white font-40 font-7" style="z-index: 100">
        YOU LOST <br /><span class="font-21 div">AGAINST PC</span>
      </p>
      <button class="play-again-btn">PLAY AGAIN</button>
    </div>
    <div class="paper-secondry-box">
      <p
        class="paper-secondry-text font-17 font-5 white"
        style="z-index: 100"
      >
        PC PICKED
      </p>
      <div class="paper-secondry ripple">
        <img src="/images/paper.png" alt="" />
      </div>
    </div>`;

    document
      .querySelector(".container-bottom-secondry")
      .classList.toggle("disable");
  } else {
    document.querySelector(".try-again-btn").classList.toggle("disable");
    document.querySelector(".try-again-btn").classList.toggle("blink");
    document.querySelector(".scissor").classList.toggle("no-click");
    document.querySelector(".rock").classList.toggle("no-click");
    document.querySelector(".paper").classList.toggle("no-click");
  }

  // PLAY AGAIN BTN

  document.querySelector(".play-again-btn").addEventListener("click", () => {
    document
      .querySelector(".container-bottom-secondry")
      .classList.toggle("disable");

    document.querySelector(".container-bottom").classList.toggle("disable");
  });

  //   TRY AGAIN BTN

  document.querySelector(".try-again-btn").addEventListener("click", () => {
    document.querySelector(".try-again-btn").classList.add("disable");
    document.querySelector(".try-again-btn").classList.remove("blink");
    document.querySelector(".scissor").classList.remove("no-click");
    document.querySelector(".rock").classList.remove("no-click");
    document.querySelector(".paper").classList.remove("no-click");
  });
});

paperBtn.addEventListener("click", () => {
  let randomIndex = Math.floor(Math.random() * arr.length);
  console.log(arr[randomIndex]);
  if (arr[randomIndex] === "rock") {
    score += 1;
    scoreBoard.innerHTML = score;
    document.querySelector(".container-bottom").classList.toggle("disable");

    document.querySelector(
      ".container-bottom-secondry"
    ).innerHTML = ` <div class="paper-secondry-box">
      <p class="paper-secondry-text font-17 white font-5">YOU PICKED</p>
      <div class="paper-secondry ripple">
        <img src="/images/paper.png" alt="" />
      </div>
    </div>
    <div class="message">
      <p class="message-text white font-40 font-7" style="z-index: 100">
        YOU WIN <br /><span class="font-21 div">AGAINST PC</span>
      </p>
      <button class="play-again-btn">PLAY AGAIN</button>
    </div>
    <div class="${arr[randomIndex]}-secondry-box">
      <p
        class="${arr[randomIndex]}-secondry-text font-17 font-5 white"
        style="z-index: 100"
      >
        PC PICKED
      </p>
      <div class="${arr[randomIndex]}-secondry">
        <img src="/images/${arr[randomIndex]}.png" alt="" />
      </div>
    </div>`;

    document
      .querySelector(".container-bottom-secondry")
      .classList.toggle("disable");
  } else if (arr[randomIndex] === "scissor") {
    document.querySelector(".container-bottom").classList.toggle("disable");

    document.querySelector(
      ".container-bottom-secondry"
    ).innerHTML = ` <div class="paper-secondry-box">
      <p class="paper-secondry-text font-17 white font-5">YOU PICKED</p>
      <div class="paper-secondry">
        <img src="/images/paper.png" alt="" />
      </div>
    </div>
    <div class="message">
      <p class="message-text white font-40 font-7" style="z-index: 100">
        YOU LOST <br /><span class="font-21 div">AGAINST PC</span>
      </p>
      <button class="play-again-btn">PLAY AGAIN</button>
    </div>
    <div class="scissor-secondry-box">
      <p
        class="scissor-secondry-text font-17 font-5 white"
        style="z-index: 100"
      >
        PC PICKED
      </p>
      <div class="scissor-secondry ripple">
        <img src="/images/scissor.png" alt="" />
      </div>
    </div>`;

    document
      .querySelector(".container-bottom-secondry")
      .classList.toggle("disable");
  } else {
    document.querySelector(".try-again-btn").classList.toggle("disable");
    document.querySelector(".try-again-btn").classList.toggle("blink");
    document.querySelector(".scissor").classList.toggle("no-click");
    document.querySelector(".rock").classList.toggle("no-click");
    document.querySelector(".paper").classList.toggle("no-click");
  }

  // PLAY AGAIN BTN

  document.querySelector(".play-again-btn").addEventListener("click", () => {
    document
      .querySelector(".container-bottom-secondry")
      .classList.toggle("disable");

    document.querySelector(".container-bottom").classList.toggle("disable");
  });

  //   TRY AGAIN BTN

  document.querySelector(".try-again-btn").addEventListener("click", () => {
    document.querySelector(".try-again-btn").classList.add("disable");
    document.querySelector(".try-again-btn").classList.remove("blink");
    document.querySelector(".scissor").classList.remove("no-click");
    document.querySelector(".rock").classList.remove("no-click");
    document.querySelector(".paper").classList.remove("no-click");
  });
});
