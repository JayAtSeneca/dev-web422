// function generateList(listItems) {
//   let list = document.createElement('ul');
//   for (let i = 0; i < listItems.length; i++) {
//     let listItem = document.createElement('li');
//     listItem.innerHTML = listItems[i];
//     list.appendChild(listItem);
//   }
//   return list;
// }

function generateList(listObj) {
  let generateList = `
  <ul class="list-group">
    ${listObj
      .map(
        (elem) => `
      <li class="list-group-item">
        ${elem.body}<br /><br />
        <strong>Name:</strong> ${elem.name}<br />,
        <strong>Email:</strong> ${elem.studentName}<br />
        <strong>Email:</strong> ${elem.campus}<br />
      </li>
    `
      )}
  </ul>
`;
return generateList;
}
