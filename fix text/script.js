'use strict';

// Data needed for a later exercise
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  console.log(rows);

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLocaleLowerCase().trim().split('_');

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'☂'.repeat(i + 1)}`);
  }
});

//put below text in textarea and prees the button and see what happen

//   first_name
// Some_variable
//    calculate_AGE
//  delayed_departure
