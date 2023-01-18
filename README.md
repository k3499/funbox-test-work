# Тестовое задание FunBox

## Ссылки

[Готовый проект](https://k3499.github.io/funbox-test-work/)
[Задание](https://dl.funbox.ru/qt-html-css-js.zip)

## Теоретическое задание

**Q1**

> Расскажите, чем, на ваш взгляд, отличается хорошая верстка от плохой с
> точки зрения , пользователя, менеджера проекта, дизайнера,
> верстальщика, клиентского программиста, серверного программиста.

- Хорошая верстка для пользователя - это удобство в доступности. UI должен быть понятен интуитивно, глубоких вложений должно быть минимум, а скорость загрузки должна быть такой, чтобы пользователь не задумывался о времени, которое он ждет после клика по ссылке. Кроме этого, важна доступность для людей с ограниченными возможностями. Верстка должна быть семантически верной. Например такая верстка позволит незрячим пользоваться сайтом с помощью специальных программных средств.
- Для менеджера проекта важно чтобы верстка была максимально блочной и переиспользуемой. Так Менеджер может ускорить разработку новых модулей и расширять программный продукт меньшими силами.
- Хорошая верстка для дизайнера та, которая максимально соответствует его макету (pixel pefect)
- Идеальная верстка для верстальщика - это все, что я уже перечислил и еще больше. Чистый код, правильная табуляция, деление кода на смысловые переиспользуемые блоки, семантичность, поддержка современных стандартов, отсутствие уж очень древнего легаси кода. Идеальная верстка, это та, к которой все мы стремимся.
- Для клиентского программиста важно чтобы верстка отдавалась с сервера максимально готовой, чтобы уменьшить влияние на клиентский рендеринг.
- Хорошая верстка для серверного программиста весит мало, отдается с сервера быстро и в ней грамотно продумано разделение сторон рендеринга.

**Q2**

> Опишите основные особенности верстки крупных многостраничных сайтов,
> дизайн которых может меняться в процессе реализации и поддержки.
> Расскажите о своем опыте верстки подобных сайтов: какие методологии,
> инструменты и технологии вы применяли на практике.

При верстке крупных многостраничных сайтов важно заранее выработать стандарты и методологии, которых будут придерживаться все разработчики. Идеально использовать блоки и компоненты, которые можно использовать повторно. Хорошая практика использовать препроцессоры css ( lass, sass) для увеличения абстракции методом ввода функций и переменных. Обязательно должна быть внедрена система контроля версий. Идеально еще покрывать всю разработку тестами.
Я на практике применяю методологию БЭМ, которая позволяет увеличить переиспользуемость блоков.

**Q3**

> Опишите основные особенности верстки сайтов, которые должны одинаково
> хорошо отображаться как на любом современном компьютере, так и на
> смартфонах и планшетах под управлением iOS и Android. Расскажите о
> своем опыте верстки подобных сайтов: какие инструменты и технологии вы
> применяли, как проверяли результат на различных устройствах, какие
> именно устройства требовалось поддерживать.

Есть несколько способов адаптировать сайт к различным платформам. Резиновый сайт, мобильная версия, адаптивный сайт и т.д. почти все эти способы или перестали использоваться или ушли в очень нишевые решения. На данный момент хороший вариант - адаптивный сайт. Чтобы построить хороший адаптивный сайт идеально на ранней стадии задуматься об уровне изменения блоков на разных разрешениях экранов.
Достичь хорошей адаптивности позволяют медиазапросы, относительные величины в параметрах и размерах блоков, крупные картинки для запаса в расширение, векторный формат изображений.
В верстке я всегда работаю с адаптивными сайтами. В основном работать приходится под планшет, мобильный телефон и десктоп, но возможны случаи специальной поддержки 4к десктопа, малы и больших планшетов и альбомных версий. Тестирую адаптивность в device toolbar в google chrome, но был опыт работы с ie tester, когда активно использовали IE.

**Q4**

> Расскажите, какие инструменты помогают вам экономить время в процессе
> написания, проверки и отладки кода.

Я использую Figma для разбора макета. Это быстрее, чем использовать PS. Картинки редактирую или подправляю в фотошопе. Так получается быстрее.
С гит командами работаю в консоли git bash, это так же быстрее чем в графической системе. Так же стараюсь максимально использовать консольные команды при работе с файловой системой. Отладка кода происходит в браузере элементов в chrome, а так же с помощью реакт плагина chrome.

**Q5**

> Вам нужно понять, почему страница отображается некорректно в Safari на
> iOS и в IE на Windows. Код писали не вы, доступа к исходникам у вас
> нет. Ваши действия? Сталкивались ли вы с подобными проблемами на
> практике?

С такими проблемами я не сталкивался. Думаю если доступа к исходникам нет, то нужно сэмулировать платформы на которых происходит баг и отловить ошибку в просмотре кода chrome.

**Q6**

> Дизайнер отдал вам макет, в котором не показано, как должны выглядеть
> интерактивные элементы при наведении мыши. Ваши действия?

Я уточню у дизайнера. Возможно он забыл внести эту информацию. Если по какой либо причине он не делает такую отрисовку, то я сообщу менеджеру проекта или тим лиду и с разрешения руководства самостоятельно реализую несколько вариантов и согласую их с руководством.

**Q7**

> Какие ресурсы вы используете для развития в профессиональной сфере?
> Приведите несколько конкретных примеров (сайты, блоги и так далее).
> Какое направление развития вам более близко: JS-программирование,
> HTML/CSS верстка или что-то ещё? Какие ещё области знаний, кроме тех,
> что непосредственно относятся к работе, вам интересны?

Для развития я конечно использую https://stackoverflow.com/, https://qna.habr.com/, документацию реакт, сайт консорциума https://w3.org/.
Читаю новости и статьи на habr.com, reddit.com/r/webdev/, reddit.com/r/javascript/, reddit.com/r/reactjs/
Мне более близка HTML/CSS верстка, но и js программирование (особенно реакт) вызывает удовольствие.
Кроме профессиональных знаний мне интересно seo и рекламный маркетинг.

**Q8**

> Расскажите нам о себе и предоставьте несколько ссылок на последние
> работы, выполненные вами.

Я всегда хотел заниматься веб-разработкой. Отучился в двух профильных учебных заведениях, но получил предложение по работе в другой сфере и на протяжении почти шести лет я работал в другой сфере. Веб-разработкой занимался в качестве хобби или решал небольшие задачи в этой сфере на работе. В 2022 решил пройти курс Yandex Practicum "Веб-разработчик". Уже во время курса я пришел к выводу, что хочу заниматься программированием на постоянной коммерческой основе. Сейчас активно продолжаю оттачивать те знания, которые получил на курсе и изучаю новое.

Проекты
Сервис Movie Explorer  
Стек: HTML, CSS (Grid разметка, Flex разметка), БЭМ методология, JavaScript, React.JS, Node, Express.JS, Mongo DB, Nginx.  
Описание и функциональность: Сервис предоставляет возможность искать фильмы через внешний API и добавлять в избранное понравившиеся картины через внутренний самописный API.  
Frontend - [https://github.com/k3499/movies-explorer-frontend](https://github.com/k3499/movies-explorer-frontend)Backend - [https://github.com/k3499/movies-explorer-api](https://github.com/k3499/movies-explorer-api)Проект сайта "Место"  
Стек: HTML, CSS (Grid разметка, Flex разметка), БЭМ методология, JavaScript, React JS, Node, Express JS, Mongo DB, Nginx.  
Описание и функциональность: Сайт для публикации карточек с примечательными местами в профиле личности. Верстка и структура файловой системы соответствует методологии БЭМ. Верстка выполнялась из Figma макета. Реализован как Frontend, так и Backend.  
Репозиторий - [https://github.com/k3499/movies-explorer-frontend](https://github.com/k3499/movies-explorer-frontend)

Проект сайта "Russian travel"  
Стек: HTML, CSS (Grid разметка, Flex разметка),БЭМ методология  
Описание и функциональность: Одностраничный адаптивный сайт про путешествие по России с галереей изображений и постами. Верстка и структура файловой системы соответствует методологии БЭМ. Верстка выполнялась из Figma макета. При верстке использовал Grid и Flex разметку. Сайт полностью адаптивен  
[https://github.com/k3499/russian-travel](https://github.com/k3499/russian-travel)
