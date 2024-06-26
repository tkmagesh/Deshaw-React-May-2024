# React

## Magesh Kuppan
- tkmagesh77@gmail.com

## Break
- Lunch Break : 1:30 PM (30 mins)

## Software Requirements
- VS Code (or any editor)
- Node.js (LTS)
- Chrome Browser

## Methodology
- No powerpoint
- Discuss & Code

## Reference
- https://bit.ly/react-videos

## Repository
- https://github.com/tkmagesh/Deshaw-React-May-2024

## Rich Internet Applications
- Apps that are loaded in the browser
- The view is manipulated in the browser (NO server side view(html) generation)
- Same user experience as that of desktop applications
- RIA built using HTML/CSS/JS are called as Single Page Applications (SPA)

## Salary Calculator
- basic + hra + da - tax = salary

## View
- Has to be dumb
- React to user actions or react to model changes

## JSX vs HTML
- Every element MUST have a corrensponding close element (in jsx)
- Use 'htmlFor' in place of 'for'
- Use 'className' in place of 'class'
- All dynamic expressions have to be enclosed within '{}' (interpolation)

## Event Loop
- https://www.youtube.com/watch?v=i3T_x-F64sM&list=PL2OMOVtxSKThVeJJQjDPj5uAzsgIowF6x&index=1

## Views
- Component = Presentation (VDOM) + UI Behaviour + State (UI)
- Component will be automatically re-rendered when the state changes
- Components can be composed of other component

## React Hooks
- Used to handle side-effects in functional components
- Hooks are functions whose name should start with 'use'
- Hooks can be used ONLY either in a functional component or in another hook

## State
### Application State
- Any state that is domain specific
- It is highly likely change in this data need to be detected across the application
- DO NOT maintain this in the component

### UI State
- Any state that is UI specific
- It is highly unlikely change in this state need to be detected in other parts of the application
- Feel free to maintain this in the component itself (React.useState)

## State Management
## Unidirectional Data Flow

![image](./images/udf.png)

## Components
### Container / Smart Component
- Collects the data from the store
- Creates 'action dispatchers'
- Passes the data & action dispatchers to the presentation components
- Ideally, should not handle any user interaction responsibilities
- fewer container components are preferred
### Presentation / Dumb Component
- Receives data from the container component and displays to the user
- Receives inputs from the user and invokes the given action dispatchers
- SHOULD NOT communicate with 'store'
- Can has as many presentation components as needed

## Build Tasks (Webpack tool)
- Bundle all js files into 1 file
- Minify the js file (remove comments & whitespaces)
- Uglify the js file ( replace all readable variable names with short ones)
- Versing the js file
- Bundle the css files into 1 file
- Minify the css file
- Version the css file
- Update the reference of the generated js & css file in the index.html file
- Minify the index.html file

## Tools for application setup
- create-react-app
- vite
- next.js
- remix


## Creating an application
```
npx create-react-app bug-tracker-app
cd bug-tracker-app
npm install redux
```
## Folder structure for bug tracker app
```
/src
    /bugs
        /actions
            - createNew.js
            - toggle.js
            - remove.js
            - removeClosed.js
            - index.js
        /reducers
            - bugsReducer.js
        /views
            - BugStats.jsx
            - BugEdit.jsx
            - BugSort.jsx
            - BugItem.jsx
            - BugList.jsx
        - index.js
    /store
        - index.js
```

## react-redux
```
installation:
npm install react-redux
```
- Provider
- useSelector
    - used to retrieve the state from the store
- useDispatch
    - to get access to the 'dispatch' from the store

## Redux Middleware
- Cross cutting concerns across actions
```js
//Example
function dispatch(action){
    console.log('[@store.dispatch] action dispatched :', action)
}

function logMiddleware(next){
    return function(action){
        console.log('[@log] action:', action)
        next(action)
    }
}

function TestMiddleware(next){
    return function(action){
        console.log('[@test] action:', action);
        next(action);
    }
}

function applyMiddleware(dispatch, ...middlewares){
    for(let middleware of middlewares){
        dispatch = middleware(dispatch);
    }
    return dispatch;
}

dispatch = applyMiddleware(dispatch, logMiddleware, TestMiddleware)
dispatch('MyAction')
```

## Server Communication
### Data Server
```
make sure you are in the folder that has the data file (db.json)
npx json-server@0.17.4 db.json -p 3030

```

### Tool for server communication in react app
```
npm install axios
```

### GET
```js
// axios usage
const p1 = axios.get('http://localhost:3030/projects');
const p2 = p1.then(function(response){
    return response.data;
});
p2.then(function(projects){
    console.table(projects);
});

// OR
axios
    .get('http://localhost:3030/projects')
    .then(function(response){
        return response.data;
    })
    .then(function(projects){
        console.table(projects);
    });

// OR
axios
    .get('http://localhost:3030/projects')
    .then(response => response.data)
    .then(projects => console.table(projects))

// OR
const response = await axios.get('http://localhost:3030/projects')
const projects = response.data    
console.table(projects);

```

### POST
```js
const newProjectData = { id : 0, name : 'Ticketing System' }
const response = await axios.post('http://localhost:3030/projects', newProjectData)
const newProject = response.data
console.log('new project :', newProject)
```