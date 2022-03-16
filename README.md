Git Token
------------
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

Push New Project in to New Repository
----------------------------------------
1.create new repository in GITHUB
2.create folder name as repository name  in system
3.cd repository/foldername
4.git init
Initialized empty Git repository in /home/charles/React_JS_Reference/quizMern/.git/
5.touch readme.txt
6.git add .
7.git commit -m "new test file added"
To push from another repository
----------------------------------
8.git remote add origin gitpath
To push from same repository
--------------------------------
9.git push -u original master
Issue
-------
fatal: 'origin' does not appear to be a git repository
fatal: Could not read from remote repository.

Please make sure you have the correct access rights

Sol   
---- 
try this

git remote add origin git repo url 
then try to again

git push -u origin master

git push https://charles@getexcelsior.com:aey4be4u@excjolly/website.git --all


Change Username/Password GITHUB
-------------------------------
git config --list  // to check current username & email in your local repo
git config [--global] user.name "Full Name"
git config [--global] user.email "email@address.com"

or

git config user.email "email@example.com"
git config user.name  "user"


Git push ask Old Github Account password
----------------------------------------
git push https://charlesexcelsiar@github.com/charlesexcelsiar/website.git
git remote set-url origin https://hoge@github.com/hoge/abc.git
git push git@github.com:charlesexcelsiar/website.git master

Git Bash still pushes repo with old Username
Solution 1.Locally:
git config credential.username "new_username"

Globally:
git config --global credential.username  "new_username"
Solution 2. (In case solution 1 doesn’t work):

git remote set-url origin "https://new_username@github.com/new_username/github-repository-name.git" 
git remote set-url origin "https://charlesexcelsiar@github.com/charlesexcelsiar/website.git" 


To List all committed stages to revert to Old content
-----------------------------------------------------
git reflog

To revert to particular commit back
--------------------------------------
git reset --hard b9b3e7d //Head No

React pass data between Parent and Child
----------------------------------------
https://www.freecodecamp.org/news/pass-data-between-components-in-react/

Run Different Port
-----------------------

PORT=3001 npm start