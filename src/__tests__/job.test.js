import job from "../job";
global.score = 1;

function doAsync(c) {
  setTimeout(() => {
    c(true);
  }, 2000);
}

test("Function should return the 1st promise.resolve Hello", async () => {
  return job().then((data) => {
    expect(data).toBe("Hello");
    global.score += 3;
  });
});

test("Function should return the 2nd promise.resolve I am From after 2 seconds", () => {
  function callback1(data) {
    expect(data).resolves.toBe(true);
  }
  global.score += 3;
  doAsync(callback1);
  jest.advanceTimersByTime(2000);
});

test("Function should return the 2nd promise.resolve I am From after 2 seconds", () => {
  function callback2(data) {
    expect(data).resolves.toBe(true);
  }
  global.score += 3;
  doAsync(callback2);
  jest.advanceTimersByTime(2000);
});

afterAll(() => {
  console.log("Final Score is", global.score);
});
