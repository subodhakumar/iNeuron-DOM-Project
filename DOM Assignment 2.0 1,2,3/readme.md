# iNeuron DOM Assignment

<br>

## Task 1

<br>

### Question: The user to append a new element in the navigation menu named "Hire me" after the projects.

<br>

### Output

<br>

![Task 1](./firstAssignmentImage/task1Output.png)

<br>

### Solution

<br>

```Javascript
let ul = document.querySelector("header nav ul");
let li = document.createElement("li");
li.innerHTML = `<a href="#">Hire me</a>`;
ul.appendChild(li);

```

<br>

## Task 2

<br>

### Output