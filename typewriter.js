const sentence = "hello there from lighthouse labs";
speed = 50;
  for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => process.stdout.write(sentence[i]), speed += 50);
};

setTimeout(() => process.stdout.write("\n"), speed + 50);

