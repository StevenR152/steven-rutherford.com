---
id: circuitbreaker
title: Demystifying the puzzle of fitting Platform tools together.
author: Steven Rutherford
author_title: Senior Backend Engineer
author_url: https://github.com/stevenr152
author_image_url: https://avatars0.githubusercontent.com/u/2215023?v=4
tags: [ansible, terraform,, circleci, "platform engineering", "deployment", "DevOps"]
---

### Backend and Platform Engineering Buzz word tool bingo?
Terraform, Docker, Ansible, CircleCI, Jenkins, Kubernetes.... and so you're mistified how they all fit together?

### What is each of these?
#### Terraform / Cloudformation / Serverless (framework)
These are grouped together under the name of Infrastructure as code tools.
They allows you to obtain infrastructure resources. 
In the good old days a Operations team member would ring up / email for a server to be installed in the datacenter they use. 
Since the advent of the cloud the server is already available in the cloud, Infrastructure as Code tools are an suite of automation tools to allow you to write code and get a cloud resource like a machine provided to you.

#### Ansible / Chef / Puppet
Are configuration management tools but what is this?
So you have a machine, how do you install Java, PHP or whatever else you need on it reliably and repeatibly? You could write a bash script, or you could write ansible configuration management.
If you know Bash scripting a little, its hard to deal with failure, for example when the Java download you are obtaining fails halfway because the network cuts out. You might think, that wont happen often but at scale this is a frequent problem.
At scale you have tens or hundreds or thousands of machines spin up and automate the install of software onto, with this many machines the likelihood of failure to download a package of software you need increases and you need to handle failure better, ansible handles this.

#### CircleCI / Jenkins / TravisCI / ConcourseCI / GitlabCI ...
So if you've requested your machine with Infrastructure as code, and Installed Java onto it using Configuration management how do you get your application installed?
You want to use a task runner to deploy it. Every time you commit to master (or tag it for production it whatever way you feel is right), you want it automatically promoted into your server.
To deploy your app you need to take the code, check it compiles, run some tests, package it up and then send it to your server, then restart the application - the exact same every time.






### Reading Material
