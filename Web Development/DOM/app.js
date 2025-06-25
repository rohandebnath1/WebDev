// const links = document.querySelectorAll('p a');

// for (let link of links){
//     console.log(link.href); //Prints all the links
// }

const anchor = document.querySelectorAll('a');

for (let links of  anchor){
    links.style.color = 'purple';
    links.style.textDecorationColor = 'red';
    links.style.textDecorationStyle = 'wavy';
}