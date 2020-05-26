---
id: indie-web-game-development
title: Indie Game Development
author: Steven Rutherford
author_title: Senior Backend Engineer
author_url: https://github.com/stevenr152
author_image_url: https://avatars0.githubusercontent.com/u/2215023?v=4
tags: [craftyjs, web, "game development"]
---

### Where my journey began?
Winding back time through my several completed laps of the sun (birthdays) a primary school librarian introduced me to computer games, a world as exciting as middle-earth is to Frodo but all running on a now-iconic floppy disk from your living room.

After graduating I frequently tried and failed larger game adventures, but have now settled on short prototypical adventures in the game creation world; to keep the work, life, socializing, hiking and game dev pentagon balanced. 

Instead of spending an evening a week every week, I instead devote a few weekends a year to build a new game from scratch as an entrant in Ludum Dare.

### My first trip to the world of Ludum Dare 
Back in 2012 I had a University Tutor encourage me to make games on an upcoming weekend, I was dubious with university workload but the free pizza helped the student budget. In the true student spirit of "leave no pizza behind" I signed up naive to the total amount of sleep I was about to lose, I unfold on the unexpected journey of my first Ludum Dare; a tiresome journey much like that to Mount Doom filled with beauty, and many battles.

### So what is this Ludum dare world?
Ludum Dare is an event where you:
- Create a game from scratch in a weekend based on a theme.
- Themes are suggested and chosen by the community. 
- Theme Suggestions are accepted starting 5 weeks before the event. 
- The theme is revealed at the start of the event.
- Games are submitted to 1 of 2 categories: the Jam (groups) or the Compo (solo).
- Games are voted by you and the rest of the community.

https://ldjam.com/events/ludum-dare/rules

### I give you my axe, I give you my bow, I give you CraftyJS.
Lets use Unity - NO!
Lets use Unreal - NO!
CraftyJS - Yes!

http://craftyjs.com/

Why I don't use Unity/Unreal but choose the JS library CraftyJS instead?
- Pure code, there is not fancy UI. 
- I'm always coding, but the UI controls are forgotten between my 6 monthly game development projects.
- The framework is web focused, so highly playable for the community voting in ludum dare.
- The framework is small, less than 100 classes to be familiar, with clean docs.
- The team I enter with is usually beginners, or people without the experience required for unity/unreal.

But hang on, wouldn't that limit your usefulness in the industry if you wanted to join? 
Not so much, the underlying concepts are shared across most of the game industry, your groundwork is there with the UI familiarity to come via some tutorials.

### Forming the fellowship.
Let's build a fellowship of... you guessed it nine members set on a quest to destroy one ring.

You want to program an object class for each of them, each one can render to the screen move, swordfight, throw axes, shoot arrows, some cast magic, while others with the ability to trip over their own hobbit-sized feet.

You break into a dilemma, each fellow has its own characteristics they can move, swordfight, some shoot arrows etc. You fear each fellow will have a lot of duplicated code and seek a way to solve this. Let's explore some elven wisdom before we begin this coding journey.

Enter the one formation to rule them all in the game industry: The design pattern Entity Component System.
This design pattern helps break down the world into the Entities made up of Components and Systems interested in updating the Components.

An entity is essentially an empty object, so lets form ourselves a Gandalf the Grey:
```
var gandalf = new Entity();
gandalf.addComponent(new ImageRenderComponent("gandalf.png));
gandalf.addComponent(new PositionComponent({x: 10, y: 20}));
gandalf.addComponent(new MovementComponent({x: 5, y: 5}));
gandalf.addComponent(new HairComponent("grey"));
gandalf.addComponent(new StaffComponent(100));
...many more awe inspiring components.
```

So we have Gandalf but how does he work his magic or move fearlessly throughout the world?
We define a System that finds all game objects in the game based on a component and does actions on them.

```
class MovementUpdateSystem {
  var entitiesToMove = GameEngine.getAllEntitiesWithComponents(PositionComponent, MovementComponent);
  foreach (entitiesToMove as entity) {
          var position = entity.getComponent(PositionComponent)
          var movement = entity.getComponent(MovementComponent)
                position.x = position.x + movement.x;
                position.y = position.y + movement.y;
  }
}
```

Now when you build our the rest of your fellowship; be it your Legolas or Gimli simply defining they have both the PositionComponent and MovementComponent means the System will update their position within the world.

Let's think at scale:
- RenderSystem needs: RenderComponent, PositionComponent
- AttackSystem needs: PositionComponent, StaffComponent (or other Weapons)
- MovementSystem needs: PositionComponent and MovementComponent

### How do you start building your own Hobbits sized adventure?
- http://craftyjs.com/getting-started/
- http://steven-rutherford.com/docs/tracks/gamedevelopment/introduction-to-web-game-development


