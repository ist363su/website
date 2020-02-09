---
id: 1-2
title: Lab 1
lab: 1
step: 2
start: false
last: false
---

### Prepping The First Commit

1. Save the changes you made to index.html and go back to your command prompt or terminal window
Check the status of the local repository and see how Git tracks all the files inside your Lab1 folder by running **git status**

```
git status
```

You should see output similar to:

```
On branch master
Your branch is up to date with 'origin/master'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        index.html

nothing added to commit but untracked files present (use "git add" to track)
```

2. Tell git to start tracking index.html and add it to the staging area by running **git add .**
Run **git status** and see what's changed

```
 git add .
```

 You will then see git status output

```
On branch master
Your branch is up to date with 'origin/master'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   index.html

```

index.html is now in the staging area, ready to be committed

3. Now commit your code:

```
git commit -a -m "Added index.html"
```
The message (in "") can be whatever you want, it should describe the work that you did.

The output should look similar to the following:

```
[master 16aad75] Added index.html
 1 file changed, 12 insertions(+)
 create mode 100644 index.html
```

4. Now push your code to github but using **git push [REMOTE] [BRANCH]**

```
git push origin master
```

You will see output similar to:

```
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Delta compression using up to 12 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 462 bytes | 462.00 KiB/s, done.
Total 3 (delta 1), reused 0 (delta 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/ist363sp20/lab-1-html-css-ndlygaSyr.git
   f0c07f0..16aad75  master -> master
```

5. Now check github and you should see your work!

![Github Check](/lab1/github_check.png)
