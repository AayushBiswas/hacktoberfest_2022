<H1><center><B>HACTOBERFEST 2022</B> </center> </H1>

  <img src ='https://uno-website-assets.s3.amazonaws.com/wp-content/uploads/2022/09/28094927/Uno_HackFest22_Hero_V1-1200x463.jpg'>

 <H2>REGISTRATION</h2>

Register anytime between September 26 and October 31

  - Registration Link :https://hacktoberfest.com/ </h2>

  <h2> Follow Rules</h2>


  - Every program/file must be in correct folder</h3>

  - Star my repo </h3>
 
  - For other programming languages than html, css, js must upload screenshot or video </h3>

  - only genuine contributions are accepted</h3>

  - Have 4 pull/merge requests accepted between October 1 and October 31 to complete Hacktoberfest</h3>

## Steps to follow :scroll:

### Tip : Complete this process in GitHub (in your browser)

```mermaid
flowchart LR
    Fork[Fork the project]-->branch[Create a New Branch]
    branch-->Edit[Edit file]
    Edit-->commit[Commit the changes]
    commit -->|Finally|creatpr((Create a Pull Request))
    
 ```
 

### 0. Star The Repository :star2:

Star the repository by pressing the topmost-right button to start your wonderful journey.

### 1. Fork it :fork_and_knife:

You can get your own fork/copy of [HacktoberFest-2022](https://github.com/AayushBiswas/hacktoberfest_2022) by using the <a href="https://github.com/AayushBiswas/hacktoberfest_2022/new/master?readme=1#fork-destination-box"><kbd><b>Fork</b></kbd></a> button.


### 2. Clone it :busts_in_silhouette:

`NOTE: commands are to be executed on Linux, Mac, and Windows(using Powershell)`

You need to clone or (download) it to local machine using

```sh
$ git clone https://github.com/Your_Username/hacktoberfest_2022.git
```

> This makes a local copy of the repository in your machine.

Once you have cloned the `Hacktoberfest-2022` repository in Github, move to that folder first using change directory command on Linux, Mac, and Windows(PowerShell to be used).

```sh
# This will change directory to a folder hacktoberfest_2022
$ cd hacktoberfest_2022
```

Move to this folder for all other commands.

### 3. Set it up :arrow_up:

Run the following commands to see that *your local copy* has a reference to *your forked remote repository* in Github :octocat:

```sh
$ git remote -v
origin  https://github.com/Your_Username/hacktoberfest_2022.git (fetch)
origin  https://github.com/Your_Username/hacktoberfest_2022.git (push)
```

Now, let's add a reference to the original [hacktoberfest_2022](https://github.com/AayushBiswas/hacktoberfest_2022) repository using

```sh
$ git remote add upstream https://github.com/AayushBiswas/hacktoberfest_2022.git
```

> This adds a new remote named ***upstream***.

See the changes using

```sh
$ git remote -v
origin    https://github.com/Your_Username/hacktoberfest_2022.git (fetch)
origin    https://github.com/Your_Username/hacktoberfest_2022.git (push)
upstream  https://github.com/Remote_Username/hacktoberfest_2022.git (fetch)
upstream  https://github.com/Remote_Username/hacktoberfest_2022.git (push)
```
`In your case, you will see`
```sh
$ git remote -V
origin    https://github.com/Your_Username/hacktoberfest_2022.git (fetch)
origin    https://github.com/Your_Username/hacktoberfest_2022.git (push)
upstream  https://github.com/AayushBiswas/hacktoberfest_2022.git (fetch)
upstream  https://github.com/AayushBiswas/hacktoberfest_2022.git (push)
```

### 4. Sync it :recycle:

Always keep your local copy of the repository updated with the original repository.
Before making any changes and/or in an appropriate interval, run the following commands *carefully* to update your local repository.

```sh
# Fetch all remote repositories and delete any deleted remote branches
$ git fetch --all --prune

# Switch to `main` branch
$ git checkout main

# Reset local `main` branch to match the `upstream` repository's `main` branch
$ git reset --hard upstream/main

# Push changes to your forked `hacktoberfest_2022` repo
$ git push origin main
```

### 5. Ready Steady Go... :turtle: :rabbit2:

Once you have completed these steps, you are ready to start contributing by checking our `Good First Issue` Issues and creating [pull requests](https://github.com/AayushBiswas/hacktoberfest_2022/pulls).

### 6. Create a new branch :bangbang:

Whenever you are going to contribute. Please create a separate branch using command and keep your `main` branch clean (i.e. synced with remote branch).

```sh
# It will create a new branch with name Branch_Name and switch to branch Folder_Name
$ git checkout -b BranchName
```

Create a separate branch for contribution and try to use the same name of the branch as of folder.

To switch to the desired branch

```sh
# To switch from one folder to other
$ git checkout BranchName
```

To add the changes to the branch. Use

```sh
# To add all files to branch Folder_Name
$ git add .
```

Type in a message relevant for the code reviewer using

```sh
# This message get associated with all files you have changed
$ git commit -m 'relevant message'
```

Now, Push your awesome work to your remote repository using

```sh
# To push your work to your remote repository
$ git push -u origin BranchName
```

Finally, go to your repository in the browser and click on `compare and pull requests`.
Then add a title and description to your pull request that explains your precious effort.

 
 

Star the repository by pressing the topmost-right button to start your wonderful journey.


# Contributors 😄

## HAPPY HACKING!!🥳

 <a href="https://github.com/AayushBiswas/hacktoberfest_2022/graphs/contributors">

 <img src="https://contrib.rocks/image?repo=AayushBiswas/hacktoberfest_2022" />

</a>
