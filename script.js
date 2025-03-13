const works = {
    "task1": {"title": "Project 1", "url": "works/task1/index.html"},
    "task2": {"title": "Project 2", "url": "works/task2/index.html"},
    "task3": {"title": "Project 3", "url": "works/task3/index.html"},
};

const navContainer = document.getElementById('navigation');
const iframeElement = document.getElementById('content_frame');

function createNavItems() {
    for (const task in works) {
        if (works.hasOwnProperty(task)) {
            const taskDetails = works[task];
            const anchor = document.createElement('a');
            anchor.href = '#';
            anchor.innerText = taskDetails.title;
            anchor.classList.add('nav-item');
            anchor.addEventListener('click', function(event) {
                event.preventDefault();
                changeIframeContent(taskDetails.url);
            });
            navContainer.appendChild(anchor);
        }
    }
}

function changeIframeContent(filePath) {
    iframeElement.src = filePath;
}

createNavItems();
