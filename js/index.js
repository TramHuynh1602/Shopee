import products from "./products.js"
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const app = {
    // tao key để lưu mảng lưu prodcut 
    products: [...products],
    render: function() {
       
       const productsPresent = $('.grid__row.home-product');
        var htmls = this.products.map(function(product) {
            return ` 
            <div class="grid__column-2-5">
            <div class="home-product-item">
                <div class="home-product-item__img" style="background-image: url(${product.img})"></div>
                <h4 class="home-product-item__name">${product.name}</h4>
                <div class="home-product-item__price">
                    <span class="home-product-item__price-old">${product.oldPrice}</span>
                    <spam class="home-product-item__price-current">${product.newPrice}</span>
                </div>
                <div class="home-product-item__action">
                    <!-- home-product-item__liked : đổi màu tim-->
                    <span class="home-product-item__like ">
                        <i class="home-product-item__like-empty far fa-heart"></i>
                        <i class="home-product-item__like-fill fas fa-heart"></i>
                    </span>
                    <div class="home-product-item__raiting">
                        <i class="home-product-item__star--gold fa-solid fa-star"></i>
                        <i class="home-product-item__star--gold fa-solid fa-star"></i>
                        <i class="home-product-item__star--gold fa-solid fa-star"></i>
                        <i class="home-product-item__star--gold fa-solid fa-star"></i>
                        <i class=" fa-solid fa-star"></i>
                    </div>
                    <span class="home-product-item__sold">${product.sold}</span>
                </div>
                <div class="home-product-item__origin">
                    <span class="home-product-item__brand">who</span>
                    <span class="home-product-item__origin-name">${product.local}</span>
                </div>
                <div class="home-product-item__favourite ${product.liked ? 'active' : '' }">
                    <i class="fa-solid fa-check"></i>
                    <span>Yêu thích</span>
                </div>
                <div class="home-product-item__sale-off">
                    <span class="home-product-item__sale-of-percent">${product.sale}</span>
                    <span class="home-product-item__sale-of-label">GIẢM</span>
                </div>
            </div>
        </div>
            `
        })

        productsPresent.innerHTML = htmls.join('');
    },
    start: function() {
        this.render();
        console.log(this.products);
    }
}

app.start();
