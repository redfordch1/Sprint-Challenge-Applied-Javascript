// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
let topics = [];

let tabs = document.querySelector('.topics');

axios.get("https://lambda-times-backend.herokuapp.com/topics").then(response => {
  response.data.topics.forEach(item => {
    topics.push(item);
  });
  topics.forEach(item => {
    tabs.appendChild(newTab(item));
  });
});

function newTab(obj) {

    const tab1 = document.createElement('div');

    tab1.textContent = obj; 

    tab1.classList.add('tab');

  return tab1;
};


    




