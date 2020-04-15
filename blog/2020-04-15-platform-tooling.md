---
id: platformtoolsdemystified
title: Demystifying the puzzle of fitting Platform tools together.
author: Steven Rutherford
author_title: Senior Backend Engineer
author_url: https://github.com/stevenr152
author_image_url: https://avatars0.githubusercontent.com/u/2215023?v=4
tags: [ansible, terraform,, circleci, "platform engineering", "deployment", "DevOps"]
---

### Demystifying the puzzle of fitting Platform tools together.
You've heard of the following: Terraform, Ansible, Travis, Puppet, Gitlab, CircleCI, Jenkins.... and so you're mistified how they all fit together and why we use them?

### Firstly what are developers trying to achieve with these tools in the combination they choose to use?
You need to run your software on a machine somewhere, how to get that machine?
You need that machine to have the right software installed, how to install that software?
You need your application built, tested and deployed along side the software you use, how to do this?

In combination these questions are together: How do I automate the process of obtaining machines, installing software and deploying my application so I write this process once, then its setup forever.

### What is each of these?
#### Terraform / Cloudformation / Serverless (framework)
_ToolSet Mission: They allows you to obtain infrastructure resources._
These are grouped together under the name of Infrastructure as code tools.
They allows you to obtain infrastructure resources. 
In the good old days a Operations team member would ring up / email for a server to be installed in the datacenter they use. 
Since the advent of the cloud the server is already available in the cloud, Infrastructure as Code tools are an suite of automation tools to allow you to write code and get a cloud resource like a machine provided to you.

#### Ansible / Chef / Puppet
_ToolSet Mission: They allows you to reliably and repeatibly install software onto infrastructure resources._
Are configuration management tools but what is this?
So you have a machine, how do you install Java, Ruby, PHP or whatever else you need on it reliably and repeatibly? You could write a bash script, or you could write ansible configuration management.
If you know Bash scripting a little, its hard to deal with failure, for example when the Java download you are obtaining fails halfway because the network cuts out. You might think, that wont happen often but at scale this is a frequent problem.
At scale you have tens or hundreds or thousands of machines spin up and automate the install of software onto, with this many machines the likelihood of failure to download a package of software you need increases and you need to handle failure better, ansible handles this.

#### CircleCI / Jenkins / TravisCI / ConcourseCI / GitlabCI ...
_ToolSet Mission: They allows you to run tasks - usually the multiple steps to deploy your software._
So if you've requested your machine with Infrastructure as code, and Installed Java onto it using Configuration management how do you get your application installed?
You want to use a Continuous Integration tool, AKA a Task Runner to do multiple steps required to deploy it.
Every time you commit to master (or tag it for production it whatever way you feel is right), you want it automatically promoted into your server.
To deploy your app you need to take the code, check it compiles, run some tests, package it up and then send it to your server, then restart the application - the exact same every time.

### Explained as an example
Gary has written an Ruby application and wants to launch it for his website to integrate with.
He needs a server, he needs the required software installed and then he needs all future changes to this to update the system reliably.
His friend Bob has heard of Terraform, Ansible and CircleCI in his previous job, so offers to help figuring he'll learn on the go!

#### Step 1: Get a machine
He looks up terraform to write an Infrastructure request in code:
```terraform
# Get a Ubuntu Machine image
data "aws_ami" "ubuntu" {
  most_recent = true

  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-trusty-14.04-amd64-server-*"]
  }
  ... details omitted...
}

# Create a AWS Elastic Compute 2 instance - AKA a virtual machine
resource "aws_instance" "web" {
  ami           = "${data.aws_ami.ubuntu.id}"
  instance_type = "t2.micro"

  tags = {
    Name = "HelloWorld"
  }
}
```
Once he runs this using terraform he'll have a machine in the cloud.

#### Step 2 Install software onto machine
Now he look up the documentation to finds how to install Java onto that machine using Ansible:
```Ansible
- name: Latest version of Ruby is installed
  apt: pkg={{ item }} state=latest
  with_items:
    - ruby2.0
    - ruby2.0-dev
```
He copies this script onto the machine and runs it to install java onto the machine.

#### Step 3 Deploy the application
He know the machine is ready to run the application, but how to get the application from Github code onto the machine.
He finds that CircleCI looks a great simple task runner - a Continuous Integration tool.
As he clicks through the setup guide, CircleCI provides him the configuration he needs - and he thinks this is fantastic!
Looking confusingly at it he can see the jobs section defines a job called "deploy" this goes through steps of checking out code, and bundles that code up. From here he'll just need to workout the steps required to deploy the code to his machine in the cloud - which will be custom depending on the companies security mechanisms so he'll have to liase with Gary.
```CircleCI
version: 2.1
orbs:
  ruby: circleci/ruby@0.1.2 

jobs:
  deploy:
    docker:
      - image: circleci/ruby:2.6.3-stretch-node
    executor: ruby/default
    steps:
      - checkout
      - ruby/bundle-install
```

### Reference to Tools mentioned
#### Infrastructure as code tools
* [https://aws.amazon.com/cloudformation/](https://aws.amazon.com/cloudformation/)
* [https://serverless.com/](https://serverless.com/)
* [https://www.terraform.io/](https://www.terraform.io/)

#### Configuration management tools
* [https://www.ansible.com/](https://www.ansible.com/)
* [https://puppet.com/](https://puppet.com/)
* [https://www.chef.io/products/chef-infra/](https://www.chef.io/products/chef-infra/)

#### Continuous Integration tools
* [https://circleci.com/](https://circleci.com/)
* [https://travis-ci.com/](https://travis-ci.com/)
* [https://concourse-ci.org/](https://concourse-ci.org/)
* [https://github.com/features/actions](https://github.com/features/actions)
* [https://about.gitlab.com/stages-devops-lifecycle/continuous-integration/](https://about.gitlab.com/stages-devops-lifecycle/continuous-integration/)
