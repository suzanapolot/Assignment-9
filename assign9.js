let main = document.querySelector('div');
let eggs = document.createElement('div')
eggs.className='egg-div';

let heading1 = document.createElement('h3')
heading1.textContent='Eggs'
let image1 = document.createElement('img')
image1.src='Eggs_A4.jpg'
let par1 = document.createElement('p')
par1.textContent='We have very good quality eggs for local, kroiler or exotic chicken. All these can be got at very affordable prices'

let chicken = document.createElement('div')
chicken.className='chicken-div';

let heading2 = document.createElement('h3')
heading2.textContent='Chicken'
let image2 = document.createElement('img')
image2.src='Chicken_A4.jpg'
let par2 = document.createElement('p')
par2.textContent='We sell chicken of all types. Kroilers, broilers, Layers and also local chicken all at affordable prices.'

eggs.appendChild(heading1);
eggs.appendChild(image1);
eggs.appendChild(par1);

chicken.appendChild(heading2);
chicken.appendChild(image2);
chicken.appendChild(par2);

main.appendChild(eggs);
main.appendChild(chicken);