let currentColor = '';

document.addEventListener('keydown', function (event) {
  if (event.key === 'a') {
    currentColor = 'pink';
  } else if (event.key === 's') {
    currentColor = 'orange';
  } else if (event.key === 'd') {
    currentColor = 'lightblue';
  }


  document.getElementById('key').style.backgroundColor = currentColor;
});

document.addEventListener('keydown', function (event) {
  let nuevoColor;
  switch (event.key) {
    case 'q':
      nuevoColor = 'purple';
      break;
    case 'w':
      nuevoColor = 'gray';
      break;
    case 'e':
      nuevoColor = 'brown';
      break;
  }


  const nuevoDiv = document.createElement('div');
  nuevoDiv.style.width = '200px';
  nuevoDiv.style.height = '200px';
  nuevoDiv.style.border= 'solid 1px';
  nuevoDiv.style.backgroundColor = nuevoColor;
  document.body.appendChild(nuevoDiv);
});
