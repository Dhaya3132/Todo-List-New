const addForm = document.querySelector('.add');
const list  = document.querySelector('.un-lis');
const search = document.querySelector('.search input');


const addinglist = Innertt =>
{
   const html = `
   <li class="list-group-item">
                <span> ${Innertt}</span>
                <i class="fa-solid fa-trash icons" style="color: #74C0FC;"></i>
            </li>
   `;

   list.innerHTML += html;
   
};
addForm.addEventListener('submit', e=>
{
    e.preventDefault();
    const Innertt = addForm.text.value.trim();
    addinglist(Innertt);
});


list.addEventListener('click', e=>
{
  if(e.target.classList.contains('icons'))
  {
    e.target.parentElement.remove();
  }
});

const filtertools = (trim) => {

  Array.from(list.children)
  .filter((todo) => !todo.textContent.toLowerCase().includes(trim))
  .forEach((todo) => todo.classList.add('filtered')); 

  Array.from(list.children)
  .filter((todo) => todo.textContent.toLowerCase().includes(trim))
  .forEach((todo) => todo.classList.remove('filtered'));
};

search.addEventListener('keyup', ()=>
{
  const trim = search.value.toLowerCase().trim();
  filtertools(trim);
});

