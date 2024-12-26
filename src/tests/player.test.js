import Player from "../classes/player";

const player = new Player("test1", "1")

test("check naming", () => {
  expect(player.name).toBe("test1");
});

test("check positioning", () => {
  expect(player.position).toBe("1")
});

test("editing the name", () => {
  player.editName("testare");
  expect(player.name).toBe("testare");
});
