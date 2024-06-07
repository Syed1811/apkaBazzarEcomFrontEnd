import React from "react";
import { useFav } from "../context/fav";
import { useCart } from "../context/cart";
import { NavLink } from "react-router-dom";
import { LuIndianRupee } from "react-icons/lu";
import { toast, Zoom } from "react-toastify";

const FavPage = () => {
  const [fav, setFav] = useFav();
  const [cart, setCart] = useCart();

  //total price
  const totalPrice = () => {
    try {
      let total = 0;
      for (let item of fav) {
        if (item.sales) {
          total += item.salePrice;
        } else {
          total += item.price;
        }
      }
      return total.toLocaleString("en-US", {
        style: "currency",
        currency: "INR",
      });
    } catch (error) {
      console.log(error);
    }
  };

  //detele item
  const removeFavItem = (pid) => {
    try {
      let myFav = [...fav];
      let index = myFav.findIndex((item) => item._id === pid);
      myFav.splice(index, 1);
      setFav(myFav);
      localStorage.setItem("fav", JSON.stringify(myFav));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="container">
        <div className="wrapper wrapper-content animated fadeInRight">
          <div className="row">
            <div className="col-md-9">
              <div className="ibox">
                <div className="ibox-title">
                  <span className="pull-right">
                    {fav?.length === 0 ? "" : fav?.length + " items"}
                  </span>
                  <h5>Items in your fav</h5>
                </div>
                <div className="ibox-content">
                  <div className="table-responsive">
                    <table className="table shoping-cart-table">
                      <tbody>
                        {fav?.map((p) => (
                          <tr>
                            <td width={90}>
                              <div className="cart-product-imitation">
                                <img
                                  src={`https://e-comm-2uyq.onrender.com/api/v1/product/product-photo/${p._id}`}
                                  alt="Product"
                                  style={{
                                    width: "90px",
                                  }}
                                />
                              </div>
                            </td>
                            <td className="desc" width={350}>
                              <h3>
                                <a
                                  href="#!"
                                  className="h4"
                                  style={{
                                    color: "#204969",
                                  }}
                                >
                                  {p.name}
                                </a>
                              </h3>

                              <div className="m-t-sm">{p.brand}</div>
                            </td>
                            <td>
                              <p
                                className={`h6Home ${
                                  p.sales === true
                                    ? "text-decoration-line-through text-muted"
                                    : ""
                                }`}
                              >
                                <LuIndianRupee />
                                {p.price}
                              </p>
                              {p.sales === true ? (
                                <p className="h6Home ms-1 text-danger">
                                  {p.salePrice}
                                </p>
                              ) : (
                                ""
                              )}
                            </td>
                            <td width={60}>
                              <input
                                type="text"
                                className="form-control"
                                style={{
                                  width: "50px",
                                  height: "30px",
                                  textAlign: "center",
                                }}
                                placeholder={1}
                                defaultValue={1}
                              />
                            </td>
                            <td>
                              <a
                                href="#!"
                                onClick={() => removeFavItem(p._id)}
                                className="remove text-danger"
                              >
                                <i className="fa fa-close" />
                              </a>
                            </td>
                            <td>
                              <a
                                href="#!"
                                onClick={() => {
                                  setCart([...cart, p]);
                                  toast.success("Added to cart", {
                                    position: "bottom-right",
                                    autoClose: 3000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "light",
                                    transition: Zoom,
                                  });
                                }}
                                className="remove text-danger"
                              >
                                <i className="fa fa-cart-plus" />
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="ibox-content">
                  <NavLink to="/" className="btn btn-white btn-jelly">
                    <i className="fa fa-arrow-left" /> Continue shopping
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="ibox">
                <div className="ibox-title">
                  <h5>Fav Summary</h5>
                </div>
                <div className="ibox-content">
                  <span>Total</span>
                  <h2 className="font-bold">{totalPrice()}</h2>
                  <hr />
                  <div className="m-t-sm text-center">
                    <div className="btn-group">
                      <a href="#!" className="btn btn-primary btn-jelly btn-sm">
                        <i className="fa fa-shopping-cart" /> Checkout
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FavPage;
