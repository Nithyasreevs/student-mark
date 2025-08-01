document.getElementById('marksForm').addEventListener('submit', function(e) {
  e.preventDefault();

  let name = document.getElementById('name').value;
  let m1 = parseInt(document.getElementById('m1').value);
  let m2 = parseInt(document.getElementById('m2').value);
  let m3 = parseInt(document.getElementById('m3').value);

  let total = m1 + m2 + m3;
  let avg = total / 3;
  let grade = '';

  if (avg >= 90) grade = 'A';
  else if (avg >= 75) grade = 'B';
  else if (avg >= 60) grade = 'C';
  else if (avg >= 40) grade = 'D';
  else grade = 'F';

  document.getElementById('output').innerHTML = 
    `Name: ${name}<br>Total: ${total}<br>Average: ${avg.toFixed(2)}<br>Grade: ${grade}`;
});
