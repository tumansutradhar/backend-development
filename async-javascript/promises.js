const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
]

function getPosts() {
    setTimeout(() => {
        let output = "";

        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        });

        document.body.innerHTML = output;
    }, 1000);
}

getPosts();

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;

            if (!error) {
                resolve();
            } else {
                reject("Error");
            }
        }, 2000);
    });
}

createPost({ title: 'Post Three', body: 'This is post three' })
    .then(getPosts)
    .catch(error => console.log(error));

async function myFunction() {
    await createPost({ title: 'Post Four', body: 'This is post four' });

    getPosts();
}

myFunction();

async function fetchUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    console.log(data);
}

fetchUsers();

const promise1 = Promise.resolve("Hello World!");
const promise2 = 45;

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "Goodbye!");
});

const fetchPromise = fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json());

Promise.all([promise1, promise2, promise3, fetchPromise])
    .then(value => console.log(value));
