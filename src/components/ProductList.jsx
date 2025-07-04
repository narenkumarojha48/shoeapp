const ProductList = ({ products, addTocart, removeFromcart }) => {
  return (
    <>
      {products?.map((product) => (
        <article className="card" key={product.id}>
          <div className="img">
            <img src={product.image} width={"100px"} height={"100px"} alt="Shoe Item Loading"/>
          </div>
          <div>{product.title}</div>
          <div>Price :- ${product.price}</div>
          <div>
            <button onClick={() => addTocart(product)}>Add to cart</button>
            <button onClick={() => removeFromcart(product.id)}>
              Remove cart
            </button>
          </div>
        </article>
      ))}
    </>
  );
};

export default ProductList;
