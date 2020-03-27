---
id: circuitbreaker
title: Circuit Breaker Pattern
author: Steven Rutherford
author_title: Senior Backend Engineer
author_url: https://github.com/stevenr152
author_image_url: https://avatars0.githubusercontent.com/u/2215023?v=4
tags: [circuitbreaker, architecture, "design patterns", "site reliability", "engineering"]
---

### What is the Circuit Breaker Pattern?
The name of this pattern is adopted from eletrical engineering. In this field a circuit breaker is an automatically operated electrical switch designed to protect an electrical circuit. Essentially if too much power goes through, the circuit triggers to break the loop. 

The circuit breaker pattern in software architecture is similarly an automated control mechanism to actively cut off a part of your system from the rest to preserve the integrity of the system or give a consistent customer experience. 

### When would I want to use the Circuit Breaker Pattern?
If you system relies heavily on another system and that system meets a few key characteristics you cannot control:
* The 3rd party system reoccuringly has performance issues (note: It's available, but slow to repond so your system doesn't see it as completely dead).
* Your system isn't handling the slow down well as connection pools, threads and other resources are blocked up waiting.
* You would rather prevent further calls from happening than have this degraded performance wripple through your system.

For example if your website is trying to place deliveries to a location, but the address lookup is handled externally to your organisation.
![alt text](img/blog/circuitbreaker.png "Circuit Breaker Example")

### Give me details, how does an implementation of Circuit Breaker work?
Essentially this can be setup using any metrics, when a percentage of those metrics show bad form, prevent future requests.
In practice it's usually looks at: 
* Given we have at least R number of requests over period of time T, make sure at least P percentage of requests came back successfully. 
* If this isn't met, the circuit gets set as open, meaning all future requests should automatically be rejected for a time window W.
* After time window W has happened send a few requests through to the malfunctioning system and determine if its meeting P percentage of successful requests before closing the circuit again.
* Constantly produce metrics throughout this process for 3rd party monitoring and alerting tools to hook into.

### How do I implement the circuit breaker pattern?
You should not be writing your own implementation of this pattern (and possibly all patterns) as its very complicated, but should leverage a library. In Java the Netflix Hystrix library adds the circuitbreaker and manages the complexities of:
* Statistical Monitoring of the requests that go through.
* Evaluation of when the circuit should break - once request rate exceeds a threadshold and a certain percentage of failure occur.
* Evaluation of how frequently to attempt to link the circuit back into normal operation.
* Metrics for your monitoring to report on the state of the system, and for your alerting to inform you (hopefully over Slack notifications, or albeit email)

### Hang on, what about the customer impact of rejecting requests?
It's annoying for a customer to see degraded performance, they get mixed experience throughout the time it takes them to achieve their goal on your site. For example, they might get 3 steps into registration process and degraded performance caused the 4th step to error and they need to start again. 

Using the circuit breaker pattern allows you to state when your system is having bad requests over X% of the time, to assume you're prefer to show a message to the customer that is informing them of issues. For example "We have detected the registration process isn't working, we're looking into it, please try again later". Customers understand this, and forgive you for the annoyance, but don't appreciate filling out 50 fields in a form that get lost.

### More reading material
* [Martin Fowlers Article on the theory behind Circuit Breaker States](https://martinfowler.com/bliki/CircuitBreaker.html)
* [Netflix implementation of the circuit breaker pattern which they use extensively, its well battle tested.](https://github.com/Netflix/Hystrix)