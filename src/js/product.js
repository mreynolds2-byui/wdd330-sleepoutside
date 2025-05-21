import { getParam } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";

const dataSource = new ProductData("tents");
const productId = getParam("product");

const product = new ProductDetails(productId, dataSource);
product.init();

// // add to cart button event handler
// async function addToCartHandler(e) {
//   const product = await dataSource.findProductById(e.target.dataset.id);
//   addProductToCart(product);
// }

// // add listener to Add to Cart button
// document
//   .getElementById("addToCart")
//   .addEventListener("click", addToCartHandler);

/*
      <section class="product-detail">
        <h3>Marmot</h3>

        <h2 class="divider">Ajax Tent - 3-Person, 3-Season</h2>

        <img
          class="divider"
          src="../images/tents/marmot-ajax-tent-3-person-3-season-in-pale-pumpkin-terracotta~p~880rr_01~320.jpg"
          alt="Marmot Ajax tent"
        />

        <p class="product-card__price">$199.99</p>

        <p class="product__color">Pale Pumpkin/Terracotta</p>

        <p class="product__description">
          Get out and enjoy nature with Marmot&#39;s Ajax tent, featuring a
          smart design with durable, waterproof construction and two doors for
          easy access.
        </p>

        <div class="product-detail__add">
          <button id="addToCart" data-id="880RR">Add to Cart</button>
        </div>
      </section>
*/
