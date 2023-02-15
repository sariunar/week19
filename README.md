# week19
1. Создайте класс Работник, который будет иметь следующие свойства: name (имя), surname (фамилия), rate (ставка за день работы), days (количество отработанных дней). Также класс должен иметь метод getSalary(), который будет выводить зарплату работника. Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.
2. Помните наше практическое задание с опросником для владельцев котиков? Он нам снова пригодится! Напишите класс `Cat` со свойствами, соответствующими полям вашего опросника (например, кличка, корм и пр.), и по нажатию на кнопку "Ок" создайте экземпляр этого класса, заполнив его свойства ответами из опросника. В этом классе будут только свойства и конструктор, без методов. Выведите результат (заполненный объект класса `Cat`) в консоль при помощи console.log.
3. Создайте класс `Калькулятор`, который будет содержать 4 **статических** метода - *Сложение*, *Умножение*, *Вычитание* и *Деление*. Доработайте свою страничку с калькулятором, чтобы в ней использовались методы этого класса.
4. Реализуйте класс `Валидатор`, который будет проверять строки. К примеру, у него будет метод `isEmail`, который параметром принимает строку и проверяет, является ли она корректным емейлом или нет. Если является - возвращает true, если не является - то false. Кроме того, класс будет иметь следующие методы: метод `isDomain` для проверки домена, метод `isDate` для проверки даты и метод `isPhone` для проверки телефона.
    
    Сделайте 2 версии этого класса - стандартную и статическую.
