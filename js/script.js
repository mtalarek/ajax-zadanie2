document.getElementById('btn').addEventListener('click', getData);

function getData() {
    fetch('https://akademia108.pl/api/ajax/get-post.php')
    .then(response => response.json())
    .then((data) => {
        let pUser = document.createElement('p');
        let pId = document.createElement('p');
        let pTitle = document.createElement('p');
        let pBody = document.createElement('p');
        let hr = document.createElement('hr');

        pUser.innerText = `User ID: ${data.userId}`;
        pId.innerText = `ID: ${data.id}`;
        pTitle.innerText = `Title: ${data.title}`;
        pBody.innerText = `Body: ${data.body}`;

        document.body.appendChild(pUser);
        document.body.appendChild(pId);
        document.body.appendChild(pTitle);
        document.body.appendChild(pBody);
        document.body.appendChild(hr);
    });
};