const works = {
    "task1" : {"title" : "Project 1", "url" : "works/task1/index.html"},
    "task2" : {"title" : "Project 2", "url" : "works/task2/index.html"},
    "task3" : {"title" : "Project 3", "url" : "works/task3/index.html"},
};

const buttons = document.querySelectorAll('.project-button');
    const contents = document.querySelectorAll('.project-content');

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const project = button.dataset.project;

        
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        
        contents.forEach(content => content.style.display = 'none');
        document.getElementById(project).style.display = 'flex';
      });
    });
    
// write your code here 
// you need to display the list of work titles in a navigation panel 
// if a work title is clicked, the body section should display the work without reloading the page
