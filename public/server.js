const http = require('http');
const path = require('path');

let state = {
    users: [
        { id: 0, name: 'Dima', followed: true, status: 'hey', location: { country: 'Germany', city: 'Munich' } },
        { id: 1, name: 'Max', followed: false, status: 'hey', location: { country: 'Africa', city: 'Dakar' } },
        { id: 2, name: 'Oleg', followed: false, status: 'hey', location: { country: 'Ukraine', city: 'Kyiv' } },
        { id: 3, name: 'Sonja', followed: true, status: 'hey', location: { country: 'Germany', city: 'Munich' } }
    ],
    posts: [
        { id: 0, message: 'This is some news', countLikes: 14937},
        { id: 1, message: 'Heyyy its Oleg Post', countLikes: 9458}
    ],
    auth:{
        login:'oleg',
        password:'qwerty'
    }
}
const server = http.createServer((req, res) => {
    if (req.url === '/api/getUsers') {
        res.writeHeader(200, { "Content-Type": "text/html" });
        res.write(JSON.stringify(
            {
                users: state.users
            }
        ));
        res.end();
    }

    if (req.url === '/api/setPosts') {
        res.writeHeader(200, { "Content-Type": "text/html" });
        res.write(JSON.stringify(
            {
                posts: state.posts
            }
        ));
        res.end();
    }

    if (req.url === '/api/addPost') {
        req.on('data', data => {
            state.posts = JSON.parse(data.toString('utf-8')).posts;
            console.log(state.posts)
        });
        req.on('end', () => {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end('post received')
        })
    }

    if (req.url === '/api/addLikes') {
        req.on('data', data => {
            state.posts.countLikes = JSON.posts.countLikes;
            console.log(state.posts.countLikes)
        });
        req.on('end', () => {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end('like received')
        })
    }

    if (req.url === '/api/auth') {
        let login
        let password
        req.on('data', data => {
            login = JSON.parse(data.toString('utf-8')).login;
            
            password = JSON.parse(data.toString('utf-8')).password;
            
        });
        req.on('end', () => {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            if (login === state.auth.login && password === state.auth.password)
            res.write(JSON.stringify({
                userId:427
            }))
            else 
                res.write(JSON.stringify({
                    userId:-1
                }))
            res.end()
        })
    }
})
server.listen(8080);
