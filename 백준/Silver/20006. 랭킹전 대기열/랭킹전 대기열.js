const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [p, m] = input.shift().split(" ").map(Number);
const players = input.map((v) => v.trim().split(" "));

const rooms = [];

players.forEach(([levelString, nickname]) => {
  const level = Number(levelString);

  const availableRoom = rooms.find(
    (room) =>
      room.players.length < m &&
      level >= room.level - 10 &&
      level <= room.level + 10
  );

  if (availableRoom) {
    availableRoom.players.push([level, nickname]);
  } else {
    rooms.push({ players: [[level, nickname]], level });
  }
});

const sol = [];

rooms.forEach((room) => {
  sol.push(room.players.length === m ? "Started!" : "Waiting!");
  sol.push(
    room.players
      .sort((one, another) => (one[1] < another[1] ? -1 : 1))
      .map((player) => player.join(" "))
      .join("\n")
  );
});

console.log(sol.join("\n"));
