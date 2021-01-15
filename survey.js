const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// rl.question('How is your name? ', (answer) => {
//   console.log(`Thank you for telling me about your name: ${answer}`);
//   rl.question('How is week so far? ', (answer) => {
//     console.log(`Thank you for sharing: ${answer}`);
//     rl.question('How is your day so far? ', (answer) => {
//       console.log(`Thank you for sharing: ${answer}`);
//       rl.question('How is your mood today? ', (answer) => {
//         console.log(`Thank you for telling me about your mood: ${answer}`);
//         rl.close();
//       });
//     });
//   });
// });
rl.question('How is your name? ', (answer1) => {
  rl.question('How is week so far? ', (answer2) => {
    rl.question('Do you enjoy your day?: I___', (answer3) => {
      rl.question('How is your mood today? ', (answer4) => {
        console.log(`Hi ${answer1}, \n\nIt's good to know you think about your week is ${answer2}, \nMoreover, I'm glad to know that you ${answer3} enjoy your day.\nYour mood is ${answer4}.\nDuring covid-19 phrase, it is important to stay claim, enjoy your life and find your own peace.\nEnjoy the rest of the day!\n\nLove you so much  \nMiss Robot`);
        rl.close();
      });
    });
  });
});




