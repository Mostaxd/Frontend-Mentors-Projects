const pics = document.querySelectorAll('.sample-pic');
const generate = document.querySelector('.generate');
let title = document.querySelector('.title')
let description = document.querySelector('.description');

const links = [
    'https://assets.hermes.com/is/image/hermesproduct/t-shirt-mit-h-stickerei--072025HA01-worn-5-0-0-800-800_b.jpg',
    'https://assets.adidas.com/images/w_600,f_auto,q_auto/9c7058d8677742ac8519ac3f009cdcf4_9366/Tiro_21_Track_Pants_Black_GH7305_21_model.jpg',
    'https://1.bp.blogspot.com/-wXtrAihforw/YPqlWvxrECI/AAAAAAAAC8k/73vT0xSUCYQMib4ED1I-tRDYeEQJ2ZXjgCNcBGAsYHQ/s800/221355891_508591433551347_1602399461076668327_n.jpg',
    '',
]

const titles =[
    'Shirt',
    'pants - Adidas',
    'طقم حجاب أنيق',
]

const descriptions = [
    `The core of every man's wardrobe, the short-sleeved t-shirt is always simple, but it must also bring a certain sophistication with it, so that it can be combined just as well with jeans, cotton trousers and a chic blazer. This model is pre-washed, which makes the cotton fiber even softer and more robust, while the double flat seams ensure comfort, elegance and a good fit.`,
    `Too good to limit to the pitch. The adidas Tiro pants debuted as training wear, but they're now a streetwear staple. Ankle zips allow you to pull these pants on over trainers. Moisture-absorbing AEROREADY ensures you stay dry no matter where life takes you.`,
    'اسلامي أحادي الطبقات كامل طويل السعودية النقاب الحجاب البرقع الحجاب العربي مسلم التفاف وشاح الرأس النساء عيد الصلاة أغطية الرأس أميرة خيمار',
]





generate.addEventListener('click', () => {
    let num = Math.floor(Math.random() * 3)


    pics.forEach(pic => {
        pic.setAttribute('src', links[num])
    });
    title.textContent = titles[num]
    description.textContent = descriptions[num];

})