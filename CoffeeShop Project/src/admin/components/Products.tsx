import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";

type Product = {
  id: number;
  title: string;
  description: string;
  ingredients: string[];
  image: string;
  category: string;
  price: number;
};

function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const [newProduct, setNewProduct] = useState<Product>({
    id: 0,
    title: "",
    description: "",
    ingredients: [],
    image: "",
    category: "",
    price: 0,
  });

  useEffect(() => {
    const savedProducts = JSON.parse(
      localStorage.getItem("products") || "[]"
    );

    setProducts(savedProducts);
  }, []);

  const handleDelete = (id: number) => {
    fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",
    }).then(() => {
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== id)
      );

      const updatedProducts = products.filter(
        (product) => product.id !== id
      );

      localStorage.setItem(
        "products",
        JSON.stringify(updatedProducts)
      );
    });
  };


  const handleEdit = () => {
    if (!editingProduct) return;

    fetch(`http://localhost:3000/products/${editingProduct.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editingProduct),
    })
      .then((res) => res.json())
      .then((updatedProduct) => {
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product.id === updatedProduct.id
              ? updatedProduct
              : product
          )
        );

        const updatedProducts = products.map((product) =>
          product.id === updatedProduct.id
            ? updatedProduct
            : product
        );

        localStorage.setItem(
          "products",
          JSON.stringify(updatedProducts)
        );

        setEditingProduct(null);
      });
  };

  const handleAddProduct = () => {
    const product = {
    ...newProduct,
    id: Date.now(),
  };

  fetch("http://localhost:3000/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  })
    .then((res) => res.json())
    .then((savedProduct) => {
      console.log("SAVED PRODUCT:", savedProduct);

      setProducts((prevProducts) => [
        ...prevProducts,
        savedProduct,
      ]);

      const updatedProducts = [
        ...products,
        savedProduct,
      ];

      localStorage.setItem(
        "products",
        JSON.stringify(updatedProducts)
      );

      setIsAddingProduct(false);

      setNewProduct({
        id: 0,
        title: "",
        description: "",
        ingredients: [],
        image: "",
        category: "",
        price: 0,
      });
    })
    .catch((error) => {
      console.error("PRODUCT ADD ERROR:", error);
    });
};
  return (
    <>
      <div className="px-8 py-8 ml-5 dark:bg-gray-950">

        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#b8860b]">
              E-commerce
            </p>

            <h1 className="mt-2 text-3xl font-bold text-[#4a2c20]">
              Products
            </h1>

            <p className="mt-2 text-sm text-[#9a8477]">
              Manage your coffee shop products
            </p>
          </div>

    
          <button
            onClick={() => {
              setIsAddingProduct(true);
              setEditingProduct(null);

              setNewProduct({
                id: 0,
                title: "",
                description: "",
                ingredients: [],
                image: "",
                category: "",
                price: 0,
              });
            }}
            className="rounded-xl bg-[#5a3425] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(90,52,37,0.18)] transition-all duration-300 hover:bg-[#b8860b] hover:shadow-lg"
          >
            + Add Product
          </button>
        </div>

  {isAddingProduct && (
  <div className="mb-10 rounded-2xl bg-white p-8 shadow-xl">
    <h2 className="mb-6 text-2xl font-bold text-amber-950">
      Add New Product
    </h2>

    <input
      type="text"
      placeholder="Product Name"
      value={newProduct.title}
      onChange={(e) =>
        setNewProduct({
          ...newProduct,
          title: e.target.value,
        })
      }
      className="mb-4 w-full rounded-lg border p-3"
    />

    <input
      type="number"
      placeholder="Price"
      value={newProduct.price}
      onChange={(e) =>
        setNewProduct({
          ...newProduct,
          price: Number(e.target.value),
        })
      }
      className="mb-4 w-full rounded-lg border p-3"
    />

    <input
      type="text"
      placeholder="Category"
      value={newProduct.category}
      onChange={(e) =>
        setNewProduct({
          ...newProduct,
          category: e.target.value,
        })
      }
      className="mb-4 w-full rounded-lg border p-3"
    />

    <input
      type="text"
      placeholder="Image URL"
      value={newProduct.image}
      onChange={(e) =>
        setNewProduct({
          ...newProduct,
          image: e.target.value,
        })
      }
      className="mb-4 w-full rounded-lg border p-3"
    />

    <textarea
      placeholder="Description"
      value={newProduct.description}
      onChange={(e) =>
        setNewProduct({
          ...newProduct,
          description: e.target.value,
        })
      }
      className="mb-4 w-full rounded-lg border p-3"
    />

    <div className="flex gap-3">
      <button
        onClick={() => setIsAddingProduct(false)}
        className="rounded-lg bg-gray-200 px-5 py-2"
      >
        Cancel
      </button>

      <button
        onClick={handleAddProduct}
        className="rounded-lg bg-amber-800 px-5 py-2 text-white"
      >
        Save Product
      </button>
    </div>
  </div>
)}

        {editingProduct && (
          <div className="mb-10 rounded-3xl border border-[#eadfd4] bg-white p-8 shadow-[0_15px_40px_rgba(74,44,32,0.10)]">

            <div className="mb-8 flex items-center justify-between border-b border-[#f0e7df] pb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b8860b]">
                  Product Management
                </p>

                <h2 className="mt-2 text-2xl font-bold text-[#4a2c20]">
                  Edit Product
                </h2>

                <p className="mt-1 text-sm text-[#9a8477]">
                  Update the information of your product
                </p>
              </div>
              <button
                onClick={() => setEditingProduct(null)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#eadfd4] text-xl text-[#9a8477] transition hover:bg-[#fff8ed] hover:text-[#b8860b]"
              >
                <IoMdClose />
              </button>

            </div>


            <div className="grid gap-6 md:grid-cols-2">

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#5a3425]">
                  Product Name
                </label>

                <input
                  type="text"
                  value={editingProduct.title}
                  onChange={(e) =>
                    setEditingProduct({
                      ...editingProduct,
                      title: e.target.value,
                    })
                  }
                  className="w-full rounded-xl border border-[#eadfd4] bg-[#fffdfb] px-4 py-3 text-sm text-[#4a2c20] outline-none transition focus:border-[#b8860b] focus:ring-2 focus:ring-[#b8860b]/10"
                  placeholder="Enter product name"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#5a3425]">
                  Price
                </label>

                <div className="relative">

                  <span className="absolute left-4 top-1/2 -translate-y-1/2 font-semibold text-[#b8860b]">
                    $
                  </span>

                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    value={editingProduct.price}
                    onChange={(e) =>
                      setEditingProduct({
                        ...editingProduct,
                        price: Number(e.target.value),
                      })
                    }
                    className="w-full rounded-xl border border-[#eadfd4] bg-[#fffdfb] py-3 pl-9 pr-4 text-sm text-[#4a2c20] outline-none transition focus:border-[#b8860b] focus:ring-2 focus:ring-[#b8860b]/10"
                    placeholder="0.00"
                  />

                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#5a3425]">
                  Category
                </label>

                <input
                  type="text"
                  value={editingProduct.category}
                  onChange={(e) =>
                    setEditingProduct({
                      ...editingProduct,
                      category: e.target.value,
                    })
                  }
                  className="w-full rounded-xl border border-[#eadfd4] bg-[#fffdfb] px-4 py-3 text-sm text-[#4a2c20] outline-none transition focus:border-[#b8860b] focus:ring-2 focus:ring-[#b8860b]/10"
                  placeholder="Coffee / Dessert"
                />
              </div>


              <div>
                <label className="mb-2 block text-sm font-semibold text-[#5a3425]">
                  Image URL
                </label>

                <input
                  type="text"
                  value={editingProduct.image}
                  onChange={(e) =>
                    setEditingProduct({
                      ...editingProduct,
                      image: e.target.value,
                    })
                  }
                  className="w-full rounded-xl border border-[#eadfd4] bg-[#fffdfb] px-4 py-3 text-sm text-[#4a2c20] outline-none transition focus:border-[#b8860b] focus:ring-2 focus:ring-[#b8860b]/10"
                  placeholder="https://..."
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-semibold text-[#5a3425]">
                  Description
                </label>

                <textarea
                  value={editingProduct.description}
                  onChange={(e) =>
                    setEditingProduct({
                      ...editingProduct,
                      description: e.target.value,
                    })
                  }
                  rows={5}
                  className="w-full resize-none rounded-xl border border-[#eadfd4] bg-[#fffdfb] px-4 py-3 text-sm leading-6 text-[#4a2c20] outline-none transition focus:border-[#b8860b] focus:ring-2 focus:ring-[#b8860b]/10"
                  placeholder="Write product description..."
                />
              </div>

            </div>

            <div className="mt-8 flex justify-end gap-3 border-t border-[#f0e7df] pt-6">

              <button
                onClick={() => setEditingProduct(null)}
                className="rounded-xl border border-[#eadfd4] bg-white px-6 py-3 text-sm font-semibold text-[#5a3425] transition hover:bg-[#fff8ed]"
              >
                Cancel
              </button>

              <button
                onClick={handleEdit}
                className="rounded-xl bg-[#5a3425] px-7 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(90,52,37,0.18)] transition hover:bg-[#b8860b] hover:shadow-lg"
              >
                Save Changes
              </button>

            </div>

          </div>
        )}

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">

          {products.map((product) => (

            <div
              key={product.id}
              className="group overflow-hidden rounded-2xl border border-[#eadfd4] bg-white shadow-[0_8px_25px_rgba(74,44,32,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(74,44,32,0.12)]"
            >

              <div className="relative h-56 overflow-hidden">

                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <span className="absolute left-4 top-4 rounded-full bg-[#d4a72c] px-3 py-1 text-xs font-semibold text-white">
                  {product.category}
                </span>

              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-xl font-bold text-[#4a2c20]">
                    {product.title}
                  </h2>

                  <span className="whitespace-nowrap text-lg font-bold text-[#b8860b]">
                    ${product.price.toFixed(2)}
                  </span>

                </div>

                <p className="mt-3 line-clamp-2 text-sm leading-6 text-[#9a8477]">
                  {product.description}
                </p>


                <div className="mt-6 flex gap-3 border-t border-[#f0e7df] pt-5">

                  <button
                    onClick={() => {
                      setEditingProduct(product);
                      setIsAddingProduct(false);
                    }}
                    className="flex-1 rounded-xl border border-[#eadfd4] px-4 py-2.5 text-sm font-semibold text-[#5a3425] transition hover:border-[#b8860b] hover:bg-[#fff8ed] hover:text-[#b8860b]"
                  >
                    Edit
                  </button>


                  <button
                    onClick={() => handleDelete(product.id)}
                    className="flex-1 rounded-xl bg-red-50 px-4 py-2.5 text-sm font-semibold text-red-500 transition hover:bg-red-500 hover:text-white"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;