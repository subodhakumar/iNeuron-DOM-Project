# iNeuron DOM Assignment 1

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

### Question: The user to change the search input placeholder text to "search" ==> "Search My Project"

<br>

### Output

![Output 2](./firstAssignmentImage/task2Output.png)

<br>

### Solution

<br>

```javascript
let searchInput = document.querySelector(".search-field input");
searchInput.placeholder = "Search My Project";
```

<br>

## Task 3

<br>

### Question: The user to change the "a freelancer " to "an employee"and also change the company name to "iNeuron intelligence Pvt Ltd" in hero text section

<br>

### Output

![Output 3](./firstAssignmentImage/task3Output.png)

<br>

### Solution

<br>

```javascript
let employee = document.querySelectorAll("span")[2];
employee.innerText = "An Employee";
```

<br>

## Task 4

<br>

### Question: The user to change the hero avtar image to new avatar image 

<br>

### Output

![Task 4](./Screenshot%20(33).png)

<br>

### Solution

```javascript
let img = document.querySelector(".hero-right-section img");
img.src = "./1677471918634.png";
```

## Task 5

<br>

### Question: The user to append a new btn element in the hero-right-section-btns class btn named "Support me"

<br>

### Output 

![Task 5](./firstAssignmentImage/task5Output.png)

### Solution

<br>

```javascript
let btn = document.querySelector(".hero-right-section-btns");
let createBtn = document.createElement("button");
createBtn.innerText = "Support Me";
btn.appendChild(createBtn);
```
<br>

# Assignment 2

<br>

## Task 1

<br>

### Question: The user write the faq section javascript code

<br>



