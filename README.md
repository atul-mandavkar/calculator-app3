# calculator-app3
Check out the result on github pages #[result](https://atul-mandavkar.github.io/calculator-app3/)
<pre>
Step to note:-
Firstly, in e: drive or any other in computer create app with react and make it work properly as you want and for that do whatever changes in that from vs code and keep vs code with that file open
Secondly, create a public repository with same name in github with no readme file and no licence.
Then, create same name react app in git bash that is in c drive origial drive in c://users/username
Then, after creating react app, in cmd go to same path in c://users/username In that go to app folder and open it in vs code from cmd
Then, change the content of files of c: drive app  to same as content of e: drive app and then close that e: drive part from vs code
Then, install all necessary packages for c: drive app from git bash not cmd
Then also in install gh-pages, npm install gh-pages --save-dev
Then after that go to vs code, and in package.json file add homepage attribute like "homepage": "http://userName.github.io/repositoryName"
Then in package.json file also add some propeties in script attribute like "predeploy": "npm run build", "deploy": "gh-pages -d build" and then save it
After in git bash, to initialise app type,<strong><code> git init </code></strong>and press enter
After, add origin url for that type in gitbash <strong><code> git remote add origin http://github.com/userName/repositoryName.git </code></strong>
If already origin url is set then type in git bash <strong><code> git remote set-url origin http://github.com/userName/repositoryName.git </strong></code>
After setting origin to check origin url type <strong><code> git remote -v </code></strong>
Then to deploy the repository in github, type in git bash, <strong><code> npm run deploy </code></strong>  Then to check in github.com  refresh page and check url in pages in setting
To add commit in master branch, 
type in git bash , <strong><code> git add . </code></strong> and press enter
Then <strong><code>git commit -m "commitment line"</code></strong> and press enter
Then <strong><code>git push origin master</code></strong> and press enter


</pre>
