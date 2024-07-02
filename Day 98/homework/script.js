// 1
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => console.log(data));

// 2
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data));

// 3
fetch('https://jsonplaceholder.typicode.com/invalid-url')
    .then(response => response.json())
    .catch(error => console.error('Error:', error));

// 4
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error))
    .finally(() => console.log('Request completed'));

// 5
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('data-container');
        container.innerHTML = JSON.stringify(data, null, 2);
    });

// 6
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => data.slice(0, 5))
    .then(filteredData => console.log(filteredData));

// 7
fetch('https://jsonplaceholder.typicode.com/photos/1')
    .then(response => response.blob())
    .then(imageBlob => {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(imageBlob);
        document.body.appendChild(img);
    });

// 8
setTimeout(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => console.log(data));
}, 2000);

// 9
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => setTimeout(() => console.log(data), 2000));

// 10
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data1 => {
        console.log(data1);
        return new Promise(resolve => setTimeout(resolve, 2000));
    })
    .then(() => fetch('https://jsonplaceholder.typicode.com/posts/2'))
    .then(response => response.json())
    .then(data2 => console.log(data2));

// 11
fetch('https://jsonplaceholder.typicode.com/invalid-url')
    .then(response => response.json())
    .catch(error => setTimeout(() => console.error('Delayed Error:', error), 2000));

// 12
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    .finally(() => setTimeout(() => console.log('Delayed completion message'), 2000));

// 13
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => setTimeout(() => alert(JSON.stringify(data)), 2000));

// 14
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => {
        if (data.userId === 1) {
            setTimeout(() => {
                const container = document.getElementById('data-container');
                container.innerHTML = JSON.stringify(data, null, 2);
            }, 2000);
        }
    });

// 15
document.getElementById('form').addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(event.target);
    setTimeout(() => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(Object.fromEntries(formData)),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => response.json())
        .then(data => console.log(data));
    }, 2000);
});
