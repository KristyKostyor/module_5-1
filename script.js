'use strict';
document.querySelector('.ads').remove();
const title = document.querySelectorAll('h2');
const content = document.querySelectorAll('.content');
const pics = document.querySelectorAll('.item__image');
const item = document.querySelectorAll('.item');
const propsList = document.querySelectorAll('.props__list');
const propsItems = document.querySelectorAll('.props__item');

pics[5].after(title[2]);
pics[4].after(title[5]);
pics[2].after(title[4]);

const newTitle = document.createElement('h2');
newTitle.className = 'item__title';
newTitle.innerHTML = 'This и прототипы объектов';
title[3].remove();
pics[3].after(newTitle);
content[2].append(propsItems[43]);
content[2].append(propsItems[44]);
propsItems[2].after(propsItems[14]);
content[3].append(propsList[4]);
content[4].append(propsList[3]);
item[3].after(item[0]);


