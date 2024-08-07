// The wave (known as the Mexican wave in the English-speaking world outside North America) is an example of metachronal rhythm achieved in a packed stadium when successive groups of spectators briefly stand, yell, and raise their arms. Immediately upon stretching to full height, the spectator returns to the usual seated position.

// The result is a wave of standing spectators that travels through the crowd, even though individual spectators never move away from their seats. In many large arenas the crowd is seated in a contiguous circuit all the way around the sport field, and so the wave is able to travel continuously around the arena; in discontiguous seating arrangements, the wave can instead reflect back and forth through the crowd. When the gap in seating is narrow, the wave can sometimes pass through it. Usually only one wave crest will be present at any given time in an arena, although simultaneous, counter-rotating waves have been produced. (Source Wikipedia)

function wave(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      // Ignore spaces
      let newStr = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
      result.push(newStr);
    }
  }
  return result;
}

//"hello" ->["Hello", "hEllo", "heLlo", "helLo", "hellO"]