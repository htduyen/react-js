# react-js

# Set up dev environment

Install extensions in VS code:

    + Prettier
    + Material Icon Theme
    + Path Intellisense
    + HTML CSS Support

In this module, I provided a brief introduction into some core next-gen JavaScript features, of course focusing on the ones you'll see the most in this course. Here's a quick summary!

# let & const
Read more about let : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let

Read more about const : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const

let  and const  basically replace var . You use let  instead of var  and const  instead of var  if you plan on never re-assigning this "variable" (effectively turning it into a constant therefore).

# ES6 Arrow Functions
Read more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

Arrow functions are a different way of creating functions in JavaScript. Besides a shorter syntax, they offer advantages when it comes to keeping the scope of the this  keyword (see here).

``Arrow function syntax may look strange but it's actually simple.``

    function callMe(name) { 
        console.log(name);
    }
which you could also write as:

    const callMe = function(name) { 
        console.log(name);
    }
becomes: 

    const callMe = (name) => { 
        console.log(name);
    }
Important: 

When having no arguments, you have to use empty parentheses in the function declaration:

    const callMe = () => { 
        console.log('Max!');
    }
When having exactly one argument, you may omit the parentheses:

    const callMe = name => { 
        console.log(name);
    }
When just returning a value, you can use the following shortcut:

const returnMe = name => name
That's equal to:

    const returnMe = name => { 
        return name;
    }
# Exports & Imports

In React projects (and actually in all modern JavaScript projects), you split your code across multiple JavaScript files - so-called modules. You do this, to keep each file/ module focused and manageable.

To still access functionality in another file, you need export  (to make it available) and import  (to get access) statements.

You got two different types of exports: default (unnamed) and named exports:

    default => export default ...; 

    named => export const someData = ...; 

You can import default exports like this:

    import someNameOfYourChoice from './path/to/file.js'; 

Surprisingly, someNameOfYourChoice  is totally up to you.

Named exports have to be imported by their name:

    import { someData } from './path/to/file.js'; 

A file can only contain one default and an unlimited amount of named exports. You can also mix the one default with any amount of named exports in one and the same file.

When importing named exports, you can also import all named exports at once with the following syntax:

    import * as upToYou from './path/to/file.js'; 

`upToYou`  is - well - up to you and simply bundles all exported variables/functions in one JavaScript object. For example, if you `export const someData = ...  (/path/to/file.js )` you can access it on `upToYou`  like this: `upToYou.someData` .

# Classes

Classes are a feature which basically replace constructor functions and prototypes. You can define blueprints for JavaScript objects with them. 

Like this:

    class Person {
        constructor () {
            this.name = 'Max';
        }
    }
 
    const person = new Person();
    console.log(person.name); // prints 'Max'

In the above example, not only the class but also a property of that class (=> name ) is defined. The syntax you see there, is the "old" syntax for defining properties. In modern JavaScript projects (as the one used in this course), you can use the following, more convenient way of defining class properties:

    class Person {
        name = 'Max';
    }
 
    const person = new Person();
    console.log(person.name); // prints 'Max'
You can also define methods. Either like this:

    class Person {
        name = 'Max';
        printMyName () {
            console.log(this.name); // this is required to refer to the class!
        }
    }
 
    const person = new Person();
    person.printMyName();

Or like this:

    class Person {
        name = 'Max';
        printMyName = () => {
            console.log(this.name);
        }
    }
 
    const person = new Person();
    person.printMyName();

The second approach has the same advantage as all arrow functions have: The this  keyword doesn't change its reference.

You can also use inheritance when using classes:

    class Human {
        species = 'human';
    }
 
    class Person extends Human {
        name = 'Max';
        printMyName = () => {
            console.log(this.name);
        }
    }
 
    const person = new Person();
    person.printMyName();
    console.log(person.species); // prints 'human'

# Spread & Rest Operator

The spread and rest operators actually use the same syntax: ... 

Yes, that is the operator - just three dots. It's usage determines whether you're using it as the spread or rest operator.

Using the Spread Operator:

The spread operator allows you to pull elements out of an array (=> split the array into a list of its elements) or pull the properties out of an object. Here are two examples:

    const oldArray = [1, 2, 3];
    const newArray = [...oldArray, 4, 5]; // This now is [1, 2, 3, 4, 5];
Here's the spread operator used on an object:

    const oldObject = {
        name: 'Max'
    };

    const newObject = {
        ...oldObject,
        age: 28
    };

newObject  would then be

    {
        name: 'Max',
        age: 28
    }
The spread operator is extremely useful for cloning arrays and objects. Since both are reference types (and not primitives), copying them safely (i.e. preventing future mutation of the copied original) can be tricky. With the spread operator you have an easy way of creating a (shallow!) clone of the object or array. 

# Destructuring

Destructuring allows you to easily access the values of arrays or objects and assign them to variables.

Here's an example for an array:

    const array = [1, 2, 3];
    const [a, b] = array;
    console.log(a); // prints 1
    console.log(b); // prints 2
    console.log(array); // prints [1, 2, 3]

And here for an object:

    const myObj = {
        name: 'Max',
        age: 28
    }
    const {name} = myObj;
    console.log(name); // prints 'Max'
    console.log(age); // prints undefined
    console.log(myObj); // prints {name: 'Max', age: 28}
Destructuring is very useful when working with function arguments. Consider this example:

    const printName = (personObj) => {
        console.log(personObj.name);
    }

    printName({name: 'Max', age: 28}); // prints 'Max'

Here, we only want to print the name in the function but we pass a complete person object to the function. Of course this is no issue but it forces us to call personObj.name inside of our function. We can condense this code with destructuring:

    const printName = ({name}) => {
        console.log(name);
    }
    printName({name: 'Max', age: 28}); // prints 'Max')

We get the same result as above but we save some code. By destructuring, we simply pull out the name  property and store it in a variable/ argument named name  which we then can use in the function body.

# JS Array Functions

Not really next-gen JavaScript, but also important: JavaScript array functions like map() , filter() , reduce()  etc.

You'll see me use them quite a bit since a lot of React concepts rely on working with arrays (in immutable ways).

The following page gives a good overview over the various methods you can use on the array prototype - feel free to click through them and refresh your knowledge as required: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

Particularly important in this course are:

map()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

find()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

findIndex()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex

filter()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

reduce()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b

concat()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b

slice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

splice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice



## REACT BASIC 

- Install nodejs:

    + sudo apt update
    + sudo apt install nodejs
    + node -v

- Create react app:

    + npx create-react-app my-app
    + cd my-app
    + npm start
    + sudo apt install npm


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

**Reinstall** or **redownload** packages in package.json

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


## Composition - section 40 - Card composition


    function Card(props) {

        const classes = 'card ' + props.className;
        return(
            <div className={classes}>
                {props.children}
            </div>
        );
    };

Note: Using **{props.children}**

## userState in hook

    const [userInput, setUserInput] = useState({
        enterTitle: "",
        enterAmount: "",
        enterDate: "",
    });

    const titleChangeHandler = (event) => {
        // setEnterTitle(event.target.value)
        
        // Opt 2
        // setUserInput({
        //   ...userInput,
        //   enterTitle: event.target.value,
        // });

        //Opt 3: Good way
        // setUserInput((prevState) => {
        //   return {...prevState, enterTitle: event.target.value}
        // })
    };
    
## Style in CSS


[**styled-components**](https://styled-components.com/docs/basics): allows you to write actual CSS code to style your components. It also removes the mapping between components and styles – using components as a low-level styling construct could not be easier!

[**CSS module**](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/): This project supports CSS Modules alongside regular stylesheets using the [name].module.css file naming convention.
    

   + styled-components:
    
    const FormControl = styled.div`
      margin: 0.5rem 0;
      & label {
        font-weight: bold;
        display: block;
        margin-bottom: 0.5rem;
        color: ${props => (props.invalid ? 'red' : 'black')};
      }
      & input {
        display: block;
        width: 100%;
        border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
        backgroud: ${(props) => (props.invalid ? "#ffd7d7" : "transparent")};
        font: inherit;
        line-height: 1.5rem;
        padding: 0 0.25rem;
      }
    `;

    <form onSubmit={formSubmitHandler}>
      <FormControl invalid={!isValid}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>


   + CSS module:

    import styles from "./CourseInput.module.css";
    
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
      >
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>


