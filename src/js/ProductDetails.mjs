import { setLocalStorage, getLocalStorage } from "./utils.mjs";

export default class ProductDetails {
  constructor(productId, dataSource) {
    this.productId = productId;
    this.product = {};
    this.dataSource = dataSource;
  }

  async init() {
    this.product = await this.dataSource.findProductById(this.productId);

    this.renderProductDetails();

    // Note: This callback will not work without the bind(this).
    document
      .getElementById("addToCart")
      .addEventListener("click", this.addProductToCart.bind(this));
  }

  addProductToCart() {
    let cartItems = getLocalStorage("so-cart");

    // Make sure cartItems is an array. Make empty array if not.
    if (!Array.isArray(cartItems)) {
      cartItems = [];
    }
    cartItems.push(this.product);
    setLocalStorage("so-cart", cartItems);
  }

  renderProductDetails() {
    const product = this.product;

    document.querySelector("h2").textContent = product.Brand.Name;
    document.querySelector("h3").textContent = product.NameWithoutBrand;

    const productImage = document.getElementById("product-image");
    productImage.src = product.Image;
    productImage.alt = product.NameWithoutBrand;

    document.getElementById("product-price").textContent =
      "$" + product.FinalPrice;
    document.getElementById("product-color").textContent =
      product.Colors[0].ColorName;
    document.getElementById("product-desc").innerHTML =
      product.DescriptionHtmlSimple;

    document.getElementById("addToCart").dataset.id = product.Id;
  }
}
