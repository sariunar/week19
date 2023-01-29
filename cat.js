/*    2. Помните наше практическое задание с опросником для владельцев котиков? Он нам снова пригодится! Напишите класс `Cat` со свойствами, соответствующими полям вашего опросника (например, кличка, корм и пр.), и по нажатию на кнопку "Ок" создайте экземпляр этого класса, заполнив его свойства ответами из опросника. В этом классе будут только свойства и конструктор, без методов. Выведите результат (заполненный объект класса `Cat`) в консоль при помощи console.log. */

let btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    class Cat {
        constructor() {
            this.nickname_cat = nickname_cat;
            this.name_owner = name_owner;
            this.phone = phone;
            this.breed = breed;
            this.food = food;
            this.sex = sex;
            this.comment = comment;
        }
    }
    let nickname_cat = document.querySelector('#nickname_cat').value;
    let name_owner = document.querySelector('#name_owner').value;
    let phone = document.querySelector('#phone').value;
    let selectBreed = document.querySelector('#selectBreed');
    let breed = selectBreed.options[selectBreed.selectedIndex].value;
    let food = '';
    let male = document.querySelector('#male');
    let female = document.querySelector('#female');
    let selectSex = document.querySelectorAll('input[name="sex"]');
    let sex = '';
    let comment = document.querySelector('#comment').value;

    if (dry.checked) { food += 'сухой корм ' }
    if (wet.checked) { food += 'влажный корм ' }
    if (natural.checked) { food += 'натуральный корм' }

    for (const element of selectSex) {
        if (element.checked) {
            sex = element.value;
        }
    }

    let cat1 = new Cat(nickname_cat, name_owner, phone, breed, food, sex, comment);
    console.log(cat1);
});
