"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";

const boardSize = 20;
const initialSnake: Point[] = [
  { x: 6, y: 10 },
  { x: 5, y: 10 },
  { x: 4, y: 10 },
];
const initialFood: Point = { x: 14, y: 10 };

interface Point {
  x: number;
  y: number;
}

type Direction = "up" | "right" | "down" | "left";
type GameStatus = "ready" | "running" | "paused" | "game-over" | "won";

interface GameState {
  snake: Point[];
  food: Point;
  score: number;
  status: GameStatus;
}

interface PythonLesson {
  title: string;
  summary: string;
  code: string;
  explanation: string;
}

const directionVectors: Record<Direction, Point> = {
  up: { x: 0, y: -1 },
  right: { x: 1, y: 0 },
  down: { x: 0, y: 1 },
  left: { x: -1, y: 0 },
};

const oppositeDirection: Record<Direction, Direction> = {
  up: "down",
  right: "left",
  down: "up",
  left: "right",
};

const lessons: PythonLesson[] = [
  {
    title: "The game loop",
    summary: "Repeat input, update, and drawing at a steady pace.",
    code: [
      "while running:",
      "    handle_input()",
      "    update_game()",
      "    draw_screen()",
      "    clock.tick(10)",
    ].join("\n"),
    explanation:
      "A game loop keeps the game alive. Each pass reads input, updates the game state, draws the new frame, and waits so the game runs at a controlled speed. This browser version uses a timer for those repeated updates.",
  },
  {
    title: "Grid coordinates",
    summary: "Represent the snake as positions on a board.",
    code: [
      "head_x, head_y = snake[0]",
      "dx, dy = direction",
      "next_head = (head_x + dx, head_y + dy)",
    ].join("\n"),
    explanation:
      "The board is a grid. Each segment has an x column and y row. A direction is a small change: right adds one to x, while down adds one to y. The next head position is calculated before moving the snake.",
  },
  {
    title: "Keyboard input",
    summary: "Turn the snake in response to arrow keys.",
    code: [
      "if key == 'UP' and direction != (0, 1):",
      "    direction = (0, -1)",
      "elif key == 'RIGHT' and direction != (-1, 0):",
      "    direction = (1, 0)",
    ].join("\n"),
    explanation:
      "Input changes the direction used on the next game update. Preventing an immediate reverse turn stops the head from turning directly into the segment behind it. In this game, use the arrow keys or W, A, S, and D.",
  },
  {
    title: "Wall and body collisions",
    summary: "Check whether the next move is safe before applying it.",
    code: [
      "hit_wall = not (0 <= x < board_width",
      "               and 0 <= y < board_height)",
      "hit_body = next_head in snake[:-1]",
      "if hit_wall or hit_body:",
      "    running = False",
    ].join("\n"),
    explanation:
      "Check the proposed head position before changing the snake. It must stay inside the board and avoid the body. The last segment normally moves away on the same tick, so it is excluded from the body check unless food is being eaten.",
  },
  {
    title: "Food and score",
    summary: "Grow the snake and increase the score when food is reached.",
    code: [
      "snake.insert(0, next_head)",
      "if next_head == food:",
      "    score += 1",
      "    food = place_food(snake)",
      "else:",
      "    snake.pop()",
    ].join("\n"),
    explanation:
      "Adding the new head moves the snake forward. If it reaches food, keep the old tail too, which makes the snake grow, and add one point. Otherwise remove the tail so the snake stays the same length.",
  },
];

function createInitialGame(): GameState {
  return {
    snake: initialSnake.map((point) => ({ ...point })),
    food: { ...initialFood },
    score: 0,
    status: "ready",
  };
}

function isSamePoint(first: Point, second: Point): boolean {
  return first.x === second.x && first.y === second.y;
}

function findFood(snake: Point[], seed: number): Point | null {
  const occupied = new Set(snake.map((point) => `${point.x},${point.y}`));
  const cellCount = boardSize * boardSize;
  const start = (seed * 73) % cellCount;

  for (let offset = 0; offset < cellCount; offset += 1) {
    const cell = (start + offset) % cellCount;
    const point = { x: cell % boardSize, y: Math.floor(cell / boardSize) };
    if (!occupied.has(`${point.x},${point.y}`)) return point;
  }

  return null;
}

function advanceGame(game: GameState, direction: Direction): GameState {
  if (game.status !== "running") return game;

  const vector = directionVectors[direction];
  const head = game.snake[0];
  const nextHead = { x: head.x + vector.x, y: head.y + vector.y };
  const ateFood = isSamePoint(nextHead, game.food);
  const collisionBody = ateFood ? game.snake : game.snake.slice(0, -1);
  const hitWall =
    nextHead.x < 0 ||
    nextHead.x >= boardSize ||
    nextHead.y < 0 ||
    nextHead.y >= boardSize;
  const hitBody = collisionBody.some((point) => isSamePoint(point, nextHead));

  if (hitWall || hitBody) {
    return { ...game, status: "game-over" };
  }

  const snake = [
    nextHead,
    ...game.snake.slice(0, ateFood ? undefined : -1),
  ];
  if (!ateFood) return { ...game, snake };

  const score = game.score + 1;
  const food = findFood(snake, score);
  return {
    snake,
    food: food ?? game.food,
    score,
    status: food ? "running" : "won",
  };
}

function directionForKey(key: string): Direction | null {
  switch (key.toLowerCase()) {
    case "arrowup":
    case "w":
      return "up";
    case "arrowright":
    case "d":
      return "right";
    case "arrowdown":
    case "s":
      return "down";
    case "arrowleft":
    case "a":
      return "left";
    default:
      return null;
  }
}

export default function SnakeGame() {
  const [game, setGame] = useState<GameState>(createInitialGame);
  const [selectedLesson, setSelectedLesson] = useState(0);
  const boardRef = useRef<HTMLDivElement>(null);
  const directionRef = useRef<Direction>("right");
  const queuedDirectionRef = useRef<Direction>("right");
  const lesson = lessons[selectedLesson];
  const occupiedCells = new Set(
    game.snake.map((point) => `${point.x},${point.y}`),
  );

  function changeDirection(nextDirection: Direction) {
    if (nextDirection === oppositeDirection[directionRef.current]) return;
    queuedDirectionRef.current = nextDirection;
  }

  function startGame() {
    if (game.status === "paused") {
      setGame((current) => ({ ...current, status: "running" }));
      return;
    }

    directionRef.current = "right";
    queuedDirectionRef.current = "right";
    setGame({ ...createInitialGame(), status: "running" });
  }

  function handleBoardKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const direction = directionForKey(event.key);
    if (!direction) return;
    event.preventDefault();
    changeDirection(direction);
  }

  useEffect(() => {
    if (game.status !== "running") return;

    const timer = window.setInterval(() => {
      const direction = queuedDirectionRef.current;
      directionRef.current = direction;
      setGame((current) => advanceGame(current, direction));
    }, Math.max(85, 150 - game.score * 3));

    return () => window.clearInterval(timer);
  }, [game.score, game.status]);

  const statusMessage = {
    ready: "Press Start to play. Use the arrow keys or WASD.",
    running: "Game in progress. Focus the board to use your keyboard.",
    paused: "Game paused.",
    "game-over": "Game over. Start again to try for a higher score.",
    won: "You filled the board. Amazing run!",
  }[game.status];

  return (
    <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.9fr)]">
      <section
        aria-labelledby="snake-board-title"
        className="rounded-2xl border border-card-border bg-card p-4 shadow-sm sm:p-6"
      >
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 id="snake-board-title" className="text-xl font-semibold">
              Snake
            </h2>
            <p className="mt-1 text-sm text-muted-foreground" aria-live="polite">
              {statusMessage}
            </p>
          </div>
          <div className="flex gap-3 text-sm">
            <p className="rounded-lg bg-muted px-3 py-2">
              <span className="text-muted-foreground">Score </span>
              <span className="font-semibold tabular-nums">{game.score}</span>
            </p>
          </div>
        </div>

        <div
          ref={boardRef}
          role="group"
          className="relative mx-auto w-full max-w-[32rem] rounded-xl bg-muted p-2 sm:p-3"
          onKeyDown={handleBoardKeyDown}
          tabIndex={0}
          aria-label={`Snake game board. ${statusMessage}`}
        >
          <div
            className="grid aspect-square w-full overflow-hidden rounded-lg border border-card-border bg-background"
            style={{
              gridTemplateColumns: `repeat(${boardSize}, minmax(0, 1fr))`,
              gridTemplateRows: `repeat(${boardSize}, minmax(0, 1fr))`,
            }}
            aria-hidden="true"
          >
            {Array.from({ length: boardSize * boardSize }, (_, index) => {
              const x = index % boardSize;
              const y = Math.floor(index / boardSize);
              const key = `${x},${y}`;
              const isSnake = occupiedCells.has(key);
              const isHead = game.snake[0]?.x === x && game.snake[0]?.y === y;
              const isFood = game.food.x === x && game.food.y === y;

              return (
                <div
                  key={key}
                  className={`flex items-center justify-center ${
                    isSnake
                      ? isHead
                        ? "rounded-[35%] bg-emerald-500"
                        : "rounded-[25%] bg-emerald-400"
                      : ""
                  }`}
                >
                  {isFood && (
                    <span className="h-[65%] w-[65%] rounded-full bg-rose-500 shadow-sm" />
                  )}
                </div>
              );
            })}
          </div>
          {game.status !== "running" && (
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <p className="rounded-xl border border-card-border bg-card/95 px-5 py-3 text-center text-sm font-semibold shadow-lg">
                {game.status === "ready" && "Ready when you are"}
                {game.status === "paused" && "Paused"}
                {game.status === "game-over" && "Game over"}
                {game.status === "won" && "Board cleared!"}
              </p>
            </div>
          )}
        </div>

        <div className="mt-4 flex flex-wrap justify-center gap-3">
          {game.status === "running" ? (
            <button
              type="button"
              onClick={() =>
                setGame((current) => ({ ...current, status: "paused" }))
              }
              className="min-h-11 rounded-lg border border-card-border px-5 py-2.5 text-sm font-semibold hover:bg-muted"
            >
              Pause
            </button>
          ) : (
            <button
              type="button"
              onClick={() => {
                startGame();
                boardRef.current?.focus();
              }}
              className="min-h-11 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
            >
              {game.status === "paused"
                ? "Resume"
                : game.status === "ready"
                  ? "Start game"
                  : "Play again"}
            </button>
          )}
        </div>

        <div className="mx-auto mt-5 grid w-40 grid-cols-3 gap-2 sm:hidden">
          <span />
          <DirectionButton
            label="Up"
            symbol="↑"
            onClick={() => changeDirection("up")}
          />
          <span />
          <DirectionButton
            label="Left"
            symbol="←"
            onClick={() => changeDirection("left")}
          />
          <DirectionButton
            label="Down"
            symbol="↓"
            onClick={() => changeDirection("down")}
          />
          <DirectionButton
            label="Right"
            symbol="→"
            onClick={() => changeDirection("right")}
          />
        </div>
        <p className="mt-4 hidden text-center text-xs text-muted-foreground sm:block">
          Click the board to focus it, then use the arrow keys or WASD.
        </p>
        <p className="mt-3 text-center text-xs text-muted-foreground sm:hidden">
          Use the direction buttons to steer.
        </p>
      </section>

      <section
        aria-labelledby="python-lessons-title"
        className="rounded-2xl border border-card-border bg-card p-4 shadow-sm sm:p-6"
      >
        <div className="mb-5">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Learn the ideas
          </p>
          <h2 id="python-lessons-title" className="mt-1 text-2xl font-bold">
            Snake in Python
          </h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Follow five short lessons that explain how a Python version of this
            game can work. These examples are for learning and are not executed
            by the browser game.
          </p>
        </div>

        <ol className="space-y-2">
          {lessons.map((item, index) => (
            <li key={item.title}>
              <button
                type="button"
                aria-pressed={selectedLesson === index}
                onClick={() => setSelectedLesson(index)}
                className={`flex min-h-12 w-full items-center gap-3 rounded-lg border px-3 py-2 text-left text-sm transition-colors ${
                  selectedLesson === index
                    ? "border-primary bg-primary/5"
                    : "border-card-border hover:bg-muted"
                }`}
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-semibold">
                  {index + 1}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-semibold">{item.title}</span>
                  <span className="mt-0.5 block text-xs text-muted-foreground">
                    {item.summary}
                  </span>
                </span>
                <span aria-hidden="true" className="text-muted-foreground">
                  {selectedLesson === index ? "−" : "+"}
                </span>
              </button>
            </li>
          ))}
        </ol>

        <article className="mt-4 rounded-xl border border-card-border bg-muted/50 p-4">
          <h3 className="font-semibold">
            Lesson {selectedLesson + 1}: {lesson.title}
          </h3>
          <pre className="mt-3 overflow-x-auto rounded-lg border border-card-border bg-background p-3 text-xs leading-5 sm:text-sm">
            <code>{lesson.code}</code>
          </pre>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            {lesson.explanation}
          </p>
        </article>

        <div className="mt-4 flex justify-between gap-3">
          <button
            type="button"
            onClick={() => setSelectedLesson((current) => Math.max(0, current - 1))}
            disabled={selectedLesson === 0}
            className="min-h-10 rounded-lg border border-card-border px-3 text-sm font-medium hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50"
          >
            Previous
          </button>
          <span className="self-center text-xs text-muted-foreground">
            {selectedLesson + 1} of {lessons.length}
          </span>
          <button
            type="button"
            onClick={() =>
              setSelectedLesson((current) =>
                Math.min(lessons.length - 1, current + 1),
              )
            }
            disabled={selectedLesson === lessons.length - 1}
            className="min-h-10 rounded-lg border border-card-border px-3 text-sm font-medium hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50"
          >
            Next lesson
          </button>
        </div>
      </section>
    </div>
  );
}

function DirectionButton({
  label,
  symbol,
  onClick,
}: {
  label: string;
  symbol: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={`Move ${label.toLowerCase()}`}
      onClick={onClick}
      className="flex h-12 items-center justify-center rounded-lg border border-card-border bg-card text-xl font-semibold hover:bg-muted"
    >
      {symbol}
    </button>
  );
}
