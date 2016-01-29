# What's bad

- A general lack of structure; almost everything happens in a $(document).ready() callback, and then in anonymous functions that can’t be tested because they aren’t exposed.
- Complex functions; if a function is more than 10 lines, like the submit handler, it’s highly likely that it’s doing too much.
- Hidden or shared state; for example, since pending is in a closure, there’s no way to test whether the pending state is set correctly.
- Tight coupling; for example, a $.ajax success handler shouldn’t need direct access to the DOM.

We must now break up the following area of responsibilities:

- Presentation and interaction
- Data management and persistence
- Overall application state
- Setup and glue code to make the pieces work together
