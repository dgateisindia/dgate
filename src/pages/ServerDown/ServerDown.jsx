import "./ServerDown.css";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import {
  FaHome,
  FaRedoAlt,
} from "react-icons/fa";

import {
  Link,
} from "react-router-dom";

/*
 * CHANGE ONLY THIS PATH
 * if your actual DGATE logo is stored somewhere else.
 */
import dgateLogo 
  from "../../assets/images/dgate-logo.png";


/* =========================================================
   GAME HELPERS
========================================================= */

const GAME_HEIGHT = 150;
const GROUND_Y = 113;


function roundedRect(
  ctx,
  x,
  y,
  width,
  height,
  radius
) {
  const r = Math.min(
    radius,
    width / 2,
    height / 2
  );

  ctx.beginPath();

  ctx.moveTo(
    x + r,
    y
  );

  ctx.arcTo(
    x + width,
    y,
    x + width,
    y + height,
    r
  );

  ctx.arcTo(
    x + width,
    y + height,
    x,
    y + height,
    r
  );

  ctx.arcTo(
    x,
    y + height,
    x,
    y,
    r
  );

  ctx.arcTo(
    x,
    y,
    x + width,
    y,
    r
  );

  ctx.closePath();
}


/* =========================================================
   COTTON CHARACTER
========================================================= */

function drawCotton(
  ctx,
  player,
  groundY
) {
  const {
    x,
    y,
    width,
    height,
  } = player;


  /* SHADOW */

  ctx.save();

  ctx.fillStyle =
    "rgba(21, 41, 65, 0.08)";

  ctx.beginPath();

  ctx.ellipse(
    x + width / 2,
    groundY + 3,
    22,
    4,
    0,
    0,
    Math.PI * 2
  );

  ctx.fill();


  /* LEGS */

  ctx.strokeStyle = "#526a83";
  ctx.lineWidth = 2;
  ctx.lineCap = "round";

  ctx.beginPath();

  ctx.moveTo(
    x + 14,
    y + height - 5
  );

  ctx.lineTo(
    x + 12,
    y + height + 3
  );


  ctx.moveTo(
    x + 30,
    y + height - 5
  );

  ctx.lineTo(
    x + 33,
    y + height + 3
  );

  ctx.stroke();


  /* COTTON BODY */

  ctx.fillStyle = "#ffffff";

  ctx.strokeStyle = "#d7e1eb";

  ctx.lineWidth = 1.4;


  const circles = [
    [8, 20, 9],
    [16, 11, 11],
    [28, 9, 12],
    [39, 17, 10],
    [31, 25, 11],
    [18, 26, 10],
  ];


  circles.forEach(
    ([cx, cy, radius]) => {

      ctx.beginPath();

      ctx.arc(
        x + cx,
        y + cy,
        radius,
        0,
        Math.PI * 2
      );

      ctx.fill();

      ctx.stroke();

    }
  );


  /* EYES */

  ctx.fillStyle = "#203651";

  ctx.beginPath();

  ctx.arc(
    x + 19,
    y + 18,
    1.8,
    0,
    Math.PI * 2
  );

  ctx.arc(
    x + 29,
    y + 18,
    1.8,
    0,
    Math.PI * 2
  );

  ctx.fill();


  /* SMILE */

  ctx.strokeStyle = "#203651";

  ctx.lineWidth = 1.4;

  ctx.beginPath();

  ctx.arc(
    x + 24,
    y + 21,
    4,
    0.2,
    Math.PI - 0.2
  );

  ctx.stroke();


  /* DGATE ORANGE SCARF */

  ctx.fillStyle = "#ff6500";

  roundedRect(
    ctx,
    x + 7,
    y + 25,
    13,
    4,
    2
  );

  ctx.fill();


  ctx.restore();
}


/* =========================================================
   STONE
========================================================= */

function drawStone(
  ctx,
  obstacle
) {
  const {
    x,
    y,
    width,
    height,
  } = obstacle;


  const gradient =
    ctx.createLinearGradient(
      x,
      y,
      x,
      y + height
    );


  gradient.addColorStop(
    0,
    "#9caab8"
  );

  gradient.addColorStop(
    1,
    "#788797"
  );


  ctx.fillStyle = gradient;

  ctx.beginPath();

  ctx.moveTo(
    x + 3,
    y + height
  );

  ctx.quadraticCurveTo(
    x + 5,
    y + 5,
    x + width * 0.38,
    y + 2
  );

  ctx.quadraticCurveTo(
    x + width * 0.7,
    y - 1,
    x + width - 3,
    y + height
  );

  ctx.closePath();

  ctx.fill();


  /* STONE HIGHLIGHT */

  ctx.fillStyle =
    "rgba(255,255,255,0.25)";

  ctx.beginPath();

  ctx.arc(
    x + 10,
    y + 7,
    3,
    0,
    Math.PI * 2
  );

  ctx.fill();
}


/* =========================================================
   TREE STUMP
========================================================= */

function drawStump(
  ctx,
  obstacle
) {
  const {
    x,
    y,
    width,
    height,
  } = obstacle;


  /* BODY */

  const gradient =
    ctx.createLinearGradient(
      x,
      y,
      x + width,
      y
    );


  gradient.addColorStop(
    0,
    "#9d6b45"
  );

  gradient.addColorStop(
    0.5,
    "#bd865a"
  );

  gradient.addColorStop(
    1,
    "#93613f"
  );


  ctx.fillStyle = gradient;


  roundedRect(
    ctx,
    x + 3,
    y + 5,
    width - 6,
    height - 5,
    5
  );

  ctx.fill();


  /* TOP */

  ctx.fillStyle = "#d3a278";

  ctx.beginPath();

  ctx.ellipse(
    x + width / 2,
    y + 6,
    width / 2 - 2,
    5,
    0,
    0,
    Math.PI * 2
  );

  ctx.fill();


  /* TREE RING */

  ctx.strokeStyle = "#9d6b45";
  ctx.lineWidth = 1;

  ctx.beginPath();

  ctx.ellipse(
    x + width / 2,
    y + 6,
    5,
    2.5,
    0,
    0,
    Math.PI * 2
  );

  ctx.stroke();


  /* GRASS */

  ctx.strokeStyle = "#82ad79";

  ctx.lineWidth = 1.3;

  ctx.beginPath();

  ctx.moveTo(
    x,
    y + height
  );

  ctx.lineTo(
    x - 3,
    y + height - 7
  );


  ctx.moveTo(
    x + width,
    y + height
  );

  ctx.lineTo(
    x + width + 4,
    y + height - 7
  );

  ctx.stroke();
}


/* =========================================================
   BACKGROUND TREE
========================================================= */

function drawSmallTree(
  ctx,
  x,
  ground,
  scale = 1
) {
  ctx.save();


  /* TRUNK */

  ctx.fillStyle = "#d7b28d";

  roundedRect(
    ctx,
    x,
    ground - 19 * scale,
    5 * scale,
    19 * scale,
    3
  );

  ctx.fill();


  /* LEAVES */

  ctx.fillStyle = "#dcefd9";

  ctx.beginPath();

  ctx.arc(
    x + 2,
    ground - 25 * scale,
    10 * scale,
    0,
    Math.PI * 2
  );

  ctx.fill();


  ctx.restore();
}


/* =========================================================
   COMPONENT
========================================================= */

function ServerDown() {
  const canvasRef =
    useRef(null);

  const gameAreaRef =
    useRef(null);

  const animationRef =
    useRef(null);


  const [score, setScore] =
    useState(0);

  const [status, setStatus] =
    useState("idle");


  const gameRef = useRef({
    width: 680,

    height: GAME_HEIGHT,

    status: "idle",

    lastTime: 0,

    score: 0,

    speed: 5,

    gravity: 0.68,

    jumpPower: -10.8,

    player: {
      x: 56,

      y:
        GROUND_Y -
        34,

      width: 44,

      height: 34,

      velocityY: 0,

      jumping: false,
    },

    obstacle: {
      x: 720,

      y:
        GROUND_Y -
        19,

      width: 30,

      height: 19,

      type: "stone",
    },
  });


  /* =========================================================
     PAGE RETRY
  ========================================================= */

  const handleRetry = () => {
    window.location.reload();
  };


  /* =========================================================
     RANDOM OBSTACLE
  ========================================================= */

  const createObstacle =
    useCallback(() => {

      const game =
        gameRef.current;


      const stump =
        Math.random() >
        0.52;


      if (stump) {

        game.obstacle = {
          x:
            game.width +
            90 +
            Math.random() *
              130,

          width: 27,

          height: 30,

          y:
            GROUND_Y -
            30,

          type: "stump",
        };

      } else {

        game.obstacle = {
          x:
            game.width +
            90 +
            Math.random() *
              130,

          width: 31,

          height: 19,

          y:
            GROUND_Y -
            19,

          type: "stone",
        };

      }

    }, []);


  /* =========================================================
     RESET GAME
  ========================================================= */

  const resetGame =
    useCallback(
      (
        jumpImmediately = false
      ) => {

        const game =
          gameRef.current;


        game.status =
          "running";

        game.lastTime = 0;

        game.score = 0;

        game.speed = 5;


        game.player.y =
          GROUND_Y -
          game.player.height;


        game.player.velocityY =
          jumpImmediately
            ? game.jumpPower
            : 0;


        game.player.jumping =
          jumpImmediately;


        createObstacle();


        setScore(0);

        setStatus(
          "running"
        );

      },
      [createObstacle]
    );


  /* =========================================================
     JUMP
  ========================================================= */

  const jump =
    useCallback(() => {

      const game =
        gameRef.current;


      if (
        game.status ===
          "idle" ||
        game.status ===
          "over"
      ) {

        resetGame(true);

        return;

      }


      if (
        !game.player
          .jumping
      ) {

        game.player.velocityY =
          game.jumpPower;

        game.player.jumping =
          true;

      }

    }, [resetGame]);


  /* =========================================================
     COLLISION
  ========================================================= */

  const collided = (
    player,
    obstacle
  ) => {
    const horizontalPadding =
      7;

    const verticalPadding =
      5;


    return (
      player.x +
        horizontalPadding <
        obstacle.x +
          obstacle.width -
          4 &&

      player.x +
        player.width -
        horizontalPadding >
        obstacle.x +
          4 &&

      player.y +
        verticalPadding <
        obstacle.y +
          obstacle.height &&

      player.y +
        player.height -
        verticalPadding >
        obstacle.y
    );
  };


  /* =========================================================
     DRAW GAME
  ========================================================= */

  const drawGame =
    useCallback(
      (ctx) => {

        const game =
          gameRef.current;


        const {
          width,
          height,
          player,
          obstacle,
        } = game;


        ctx.clearRect(
          0,
          0,
          width,
          height
        );


        /* =============================================
           SKY
        ============================================= */

        const background =
          ctx.createLinearGradient(
            0,
            0,
            0,
            height
          );


        background.addColorStop(
          0,
          "#ffffff"
        );

        background.addColorStop(
          1,
          "#f8fbfd"
        );


        ctx.fillStyle =
          background;


        ctx.fillRect(
          0,
          0,
          width,
          height
        );


        /* =============================================
           FAR LANDSCAPE
        ============================================= */

        ctx.fillStyle =
          "#f1f7f0";


        ctx.beginPath();

        ctx.moveTo(
          0,
          GROUND_Y + 3
        );


        ctx.quadraticCurveTo(
          width * 0.18,
          GROUND_Y - 10,
          width * 0.35,
          GROUND_Y + 2
        );


        ctx.quadraticCurveTo(
          width * 0.56,
          GROUND_Y + 13,
          width * 0.7,
          GROUND_Y - 3
        );


        ctx.quadraticCurveTo(
          width * 0.84,
          GROUND_Y - 12,
          width,
          GROUND_Y + 4
        );


        ctx.lineTo(
          width,
          height
        );


        ctx.lineTo(
          0,
          height
        );


        ctx.closePath();

        ctx.fill();


        /* BACKGROUND TREES */

        drawSmallTree(
          ctx,
          width - 105,
          GROUND_Y,
          0.75
        );


        drawSmallTree(
          ctx,
          width - 68,
          GROUND_Y,
          0.55
        );


        /* =============================================
           GROUND
        ============================================= */

        ctx.strokeStyle =
          "#dce5ec";

        ctx.lineWidth = 1.5;


        ctx.beginPath();

        ctx.moveTo(
          16,
          GROUND_Y
        );

        ctx.lineTo(
          width - 16,
          GROUND_Y
        );

        ctx.stroke();


        /* SMALL GRASS */

        ctx.strokeStyle =
          "#dbe9da";

        ctx.lineWidth = 1;


        for (
          let x = 24;
          x < width;
          x += 37
        ) {

          ctx.beginPath();

          ctx.moveTo(
            x,
            GROUND_Y
          );

          ctx.lineTo(
            x + 3,
            GROUND_Y - 5
          );

          ctx.lineTo(
            x + 6,
            GROUND_Y
          );

          ctx.stroke();

        }


        /* =============================================
           CHARACTER
        ============================================= */

        drawCotton(
          ctx,
          player,
          GROUND_Y
        );


        /* =============================================
           OBSTACLE
        ============================================= */

        if (
          obstacle.type ===
          "stone"
        ) {

          drawStone(
            ctx,
            obstacle
          );

        } else {

          drawStump(
            ctx,
            obstacle
          );

        }


        /* =============================================
           INITIAL MESSAGE
        ============================================= */

        if (
          game.status ===
          "idle"
        ) {

          ctx.fillStyle =
            "#607286";


          ctx.font =
            "600 12px Inter, Arial";


          ctx.textAlign =
            "center";


          ctx.fillText(
            "Tap or press SPACE to jump",
            width / 2,
            40
          );

        }


        /* =============================================
           GAME OVER
        ============================================= */

        if (
          game.status ===
          "over"
        ) {

          ctx.fillStyle =
            "rgba(255,255,255,0.82)";


          ctx.fillRect(
            0,
            0,
            width,
            height
          );


          ctx.fillStyle =
            "#172942";


          ctx.font =
            "700 15px Inter, Arial";


          ctx.textAlign =
            "center";


          ctx.fillText(
            "Almost! Try again",
            width / 2,
            59
          );


          ctx.fillStyle =
            "#7f8d9b";


          ctx.font =
            "500 11px Inter, Arial";


          ctx.fillText(
            "Tap or press SPACE",
            width / 2,
            79
          );

        }

      },
      []
    );


  /* =========================================================
     RESIZE
  ========================================================= */

  useEffect(() => {

    const canvas =
      canvasRef.current;

    const wrapper =
      gameAreaRef.current;


    if (
      !canvas ||
      !wrapper
    ) {
      return undefined;
    }


    const resize = () => {

      const width =
        Math.max(
          280,
          Math.min(
            680,
            wrapper.clientWidth
          )
        );


      const dpr =
        Math.min(
          window.devicePixelRatio ||
            1,
          2
        );


      canvas.width =
        width * dpr;


      canvas.height =
        GAME_HEIGHT *
        dpr;


      canvas.style.width =
        `${width}px`;


      canvas.style.height =
        `${GAME_HEIGHT}px`;


      const context =
        canvas.getContext(
          "2d"
        );


      context.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0
      );


      gameRef.current.width =
        width;


      gameRef.current.height =
        GAME_HEIGHT;


      gameRef.current.player.x =
        Math.max(
          42,
          width * 0.09
        );


      drawGame(
        context
      );

    };


    resize();


    const observer =
      new ResizeObserver(
        resize
      );


    observer.observe(
      wrapper
    );


    return () => {
      observer.disconnect();
    };

  }, [drawGame]);


  /* =========================================================
     GAME LOOP
  ========================================================= */

  useEffect(() => {

    const canvas =
      canvasRef.current;


    if (!canvas) {
      return undefined;
    }


    const context =
      canvas.getContext(
        "2d"
      );


    const animate = (
      timestamp
    ) => {

      const game =
        gameRef.current;


      if (
        game.status ===
        "running"
      ) {

        const delta =
          game.lastTime
            ? Math.min(
                (
                  timestamp -
                  game.lastTime
                ) /
                  16.67,
                2
              )
            : 1;


        game.lastTime =
          timestamp;


        /* PLAYER */

        game.player.velocityY +=
          game.gravity *
          delta;


        game.player.y +=
          game.player.velocityY *
          delta;


        const floor =
          GROUND_Y -
          game.player.height;


        if (
          game.player.y >=
          floor
        ) {

          game.player.y =
            floor;


          game.player.velocityY =
            0;


          game.player.jumping =
            false;

        }


        /* OBSTACLE */

        game.obstacle.x -=
          game.speed *
          delta;


        if (
          game.obstacle.x <
          -game.obstacle.width -
            10
        ) {

          game.score += 10;


          game.speed =
            Math.min(
              8.5,
              game.speed +
                0.13
            );


          setScore(
            game.score
          );


          createObstacle();

        }


        /* COLLISION */

        if (
          collided(
            game.player,
            game.obstacle
          )
        ) {

          game.status =
            "over";


          setStatus(
            "over"
          );

        }

      }


      drawGame(
        context
      );


      animationRef.current =
        requestAnimationFrame(
          animate
        );

    };


    animationRef.current =
      requestAnimationFrame(
        animate
      );


    return () => {

      cancelAnimationFrame(
        animationRef.current
      );

    };

  }, [
    createObstacle,
    drawGame,
  ]);


  /* =========================================================
     KEYBOARD
  ========================================================= */

  useEffect(() => {

    const handleKeyDown = (
      event
    ) => {

      if (
        event.code !==
          "Space" &&
        event.code !==
          "ArrowUp"
      ) {
        return;
      }


      const element =
        document.activeElement;


      if (
        element?.tagName ===
          "A" ||
        element?.tagName ===
          "BUTTON"
      ) {

        if (
          element !==
          gameAreaRef.current
        ) {
          return;
        }

      }


      event.preventDefault();

      jump();

    };


    window.addEventListener(
      "keydown",
      handleKeyDown
    );


    return () => {

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );

    };

  }, [jump]);


  /* =========================================================
     INTERACTION
  ========================================================= */

  const handleGameClick = () => {

    gameAreaRef.current?.focus();

    jump();

  };


  return (
    <main className="server-down">

      {/* =====================================================
          SUBTLE BACKGROUND
      ===================================================== */}

      <div
        className="server-down__background"
        aria-hidden="true"
      >

        <div className="server-down__glow server-down__glow--orange" />

        <div className="server-down__glow server-down__glow--navy" />

      </div>


      <section className="server-down__content">


        {/* =================================================
            ACTUAL DGATE LOGO
        ================================================= */}

        <Link
          to="/"
          className="server-down__logo"
          aria-label="DGATE Integrated Services home"
        >

          <img
            src={dgateLogo}
            alt="DGATE Integrated Services"
          />

        </Link>


        {/* =================================================
            STATUS
        ================================================= */}

        <div className="server-down__status">

          <span />

          Service temporarily unavailable

        </div>


        {/* =================================================
            MAIN INFORMATION
        ================================================= */}

        <h1>
          We'll be back shortly.
        </h1>


        <p className="server-down__message">
          Our services are temporarily unavailable.
          Please try again in a few moments.
        </p>


        {/* =================================================
            SMALL HORIZONTAL GAME
        ================================================= */}

        <section className="server-game">

          <header className="server-game__header">

            <div className="server-game__title">

              <strong>
                Cotton Jump
              </strong>

              <span>
                A quick game while you wait
              </span>

            </div>


            <div className="server-game__score">

              <span>
                SCORE
              </span>

              <strong>
                {score
                  .toString()
                  .padStart(
                    4,
                    "0"
                  )}
              </strong>

            </div>

          </header>


          <button
            ref={gameAreaRef}
            type="button"
            className="server-game__area"
            onClick={
              handleGameClick
            }
            aria-label={
              status === "over"
                ? "Cotton Jump game over. Tap to play again."
                : "Cotton Jump game. Tap to jump."
            }
          >

            <canvas
              ref={canvasRef}
              className="server-game__canvas"
            />

          </button>


          <div className="server-game__footer">

            <span>
              SPACE / ↑ / TAP
            </span>

            <p>
              Jump over stones and tree stumps
            </p>

          </div>

        </section>


        {/* =================================================
            ONLY NECESSARY ACTIONS
        ================================================= */}

        <div className="server-down__actions">

          <button
            type="button"
            className="
              server-down__button
              server-down__button--primary
            "
            onClick={
              handleRetry
            }
          >

            <FaRedoAlt />

            <span>
              Try Again
            </span>

          </button>


          <Link
            to="/"
            className="
              server-down__button
              server-down__button--secondary
            "
          >

            <FaHome />

            <span>
              Return Home
            </span>

          </Link>

        </div>

      </section>

    </main>
  );
}


export default ServerDown;