var http = require ('http');

var server = http.createServer(function(req,res){

  if (req.url == '/'){

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Home page</title>
</head>
<body style="text-align:center;">
            <h1 style="color:green;">Home Page</h1>
            <h2>My Bio Data</h2>
<div>
<p>
            <ul>
              <li>Name: Sheidu Onoruoiza Halilu</li>
              <li>Occupation: Tech recruiter</li>
              <li>Location: Canada</li>
              <li>Religion: Muslim</li>
              <li>Gender: Male</li>
            </ul>
</p>
</div>        
</body>
</html>

`);
    res.end();
  }
  else if(req.url == "/about"){
     res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>About</title>
</head>
<body style="text-align:center;">
            <h1 style="color:green;">Welcome</h1>
            <h2>About Me</h2>
            <p>I am by name Sheidu Onoruoiza Halilu, a software engineer and also a tech recruiter, apart from teaching programming language and learning, I love hiring software engineers for jobs.
I am fund of reading and praying, I am a muslim, not just a muslim but a practicing one.</p>
</body>
</html>

`);
    res.end();
  }
  else if (req.url == "/contact"){
     res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact</title>
</head>
<body style="text-align:center;">
            <h1 style="color:green;">Contact Page</h1>
            <h2>Reach out to us here:</h2>
<p>
for more information about me, you can reach out to me at:
<a href = "https://www.linkedin.com/in/halilus">
Linkedin
</a>

or you can search google for my name:
<a href="https://www.google.com/search?q=sheidu+halilu&oq=she&aqs=chrome.1.69i60j69i59j69i57j35i39j0i131i433i512j46i433i512j69i61l2.3506j0j4&sourceid=chrome&ie=UTF-8">Sheidu Halilu
</a>
</p>
</body>
</html>

`);
    res.end();
  }
  else
    res.end('Invalid request, this page cannot be found on the server');
}).listen(3000, ()=>console.log('Server running on port 3000'));