document.addEventListener("DOMContentLoaded", function () {
    const ul = document.createElement('ul');
    ul.id = 'list';

          for (let i = 1; i <= 10; i++) {
              const li = document.createElement('li');
                   li.textContent = `Child ${i}`;
                      ul.appendChild(li);
    }

    const appendDiv = document.getElementById('append-div');
    appendDiv.appendChild(ul);
});
