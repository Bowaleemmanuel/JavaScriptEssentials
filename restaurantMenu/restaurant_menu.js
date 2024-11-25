const breakfastMenu = ['Pancakes - $12', 'Eggs Benedict - $35', 'Oatmeal - $43', 'Frittata - $60'];
const mainCourseMenu = ['Steak - $14', 'Pasta - $18', 'Burger - $15', 'Salmon - $52'];
const dessertMenu = ['Cake - $10', 'Ice Cream - $5', 'Pudding - $5', 'Fruit Salad - $15'];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

 let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;