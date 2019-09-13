# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is a JavaScript Library that is component based. It allows you to write the code once and change elements on the page in real time, without refreshing the page. 
This is evident in how we learned to build out 1 card component and then populate with dynamic data which will display many cards filled with different data.

1. What does it mean to think in react?

Thinking in React means thinking in terms of components. Looking at a website and breaking it down into components, then viewing those components as a tree that can pass down data from parent to children.

1. Describe state.

State is how we can change data inside our components. State determines how an object will render and behave. It allows dynamic and interactive applications. 

1. Describe props.

Props is === properties. Declaring props as an attribute in our React element we can pass data into our components so they "inherit" the data.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

Side Effects are when an effect continues to excute even when it should have been unmounted, or stopped. It can cause mulitple instances of the effect to run and decreases performance. This is called a memory leak and can be "cleaned up" with the useEffect hook.
