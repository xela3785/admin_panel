const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler")

// Показать сайдбар
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})

// Закрыть сайдбар
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})

// Смена темы
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span').classList.toggle('active');
})

// Наполнение заказов
Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent =  `<td>${order.productName}</td>
                        <td>${order.productNumber}</td>
                        <td>${order.paymentStatus}</td>
                        <td class="${order.shipping === 'Отменен' ? 'danger' : order.shipping === 'Ожидается отправка' ? 'warning' : 'primary'}">${order.shipping}</td>
                        <td class="primary">Детали</td>`;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
})