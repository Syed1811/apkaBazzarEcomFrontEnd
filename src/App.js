import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import Policy from "./pages/Policy.js";
import RefundPolicy from "./pages/RefundPolicy.js";
import PageNotFound from "./pages/PageNotFound.js";
import CautionNotice from "./pages/CautionNotice";
import Register from "./pages/Register.js";
import Login from "./pages/Login.js";
import React, { useState } from "react";
import Header from "./component/layout/Header.js";
import Footer from "./component/layout/Footer.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./component/layout/Routes/Private.js";
import MyProfile from "./pages/MyProfile.js";
import EditProfile from "./pages/EditProfile.js";
import ForgetPass from "./pages/ForgetPass.js";
import OtpEnter from "./pages/OtpEnter.js";
import ChangePassword from "./pages/ChangePassword.js";
import VerifyEmailComp from "./pages/VerifyEmailComp.js";
import AdminRoute from "./component/layout/Routes/AdminRoute.js";
import UsersDashboard from "./pages/Admin/UsersDashboard.js";
import AdminsDashboard from "./pages/Admin/AdminsDashboard";
import CreateCategory from "./pages/Admin/CreateCategory";
import YourOrder from "./pages/YourOrder";
import PasswordChange from "./pages/PasswordChange.js";
import AboutUs from "./pages/AboutUs.js";
import Product from "./pages/Admin/Product.js";
import UpdateProduct from "./pages/Admin/UpdateProduct.js";
import CreateProduct from "./pages/Admin/CreateProduct.js";
import SearchProduct from "./pages/SearchProduct.js";
import Electronic from "./pages/Electronic.js";
import Fashion from "./pages/Fashion";
import Beauty from "./pages/Beauty";
import HomeandKitchen from "./pages/HomeandKitchen";
import Stationary from "./pages/Stationary";
import Furniture from "./pages/Furniture";
import Fresh from "./pages/Fresh";
import Grocery from "./pages/Grocery";
import Categories from "./pages/Categories.js";
import FemaleFashion from "./pages/FemaleFashion";
import FemaleDresses from "./pages/FemaleDresses.js";
import FemaleShoes from "./pages/FemaleShoes.js";
import Jewellery from "./pages/Jewellery.js";
import FemaleWatches from "./pages/FemaleWatches.js";
import FemaleEyewear from "./pages/FemaleEyewear.js";
import Western from "./pages/Western.js";
import JeansAndJeggins from "./pages/JeansAndJeggins.js";
import FemaleKurtas from "./pages/FemaleKurtas.js";
import SalwarKameez from "./pages/SalwarKameez.js";
import Sarees from "./pages/Sarees.js";
import Lahnga from "./pages/Lahnga.js";
import LongWear from "./pages/LongWear.js";
import FemaleSports from "./pages/FemaleSports.js";
import Heels from "./pages/Heels.js";
import FemaleSandals from "./pages/FemaleSandals.js";
import FemaleBoots from "./pages/FemaleBoots.js";
import FemaleSportsShoes from "./pages/FemaleSportsShoes";
import FemaleFormalShoe from "./pages/FemaleFormalShoe";
import FemaleSunglasses from "./pages/FemaleSunglasses.js";
import FemaleReadingGlasses from "./pages/FemaleReadingGlasses.js";
import FemaleSpectacleFrames from "./pages/FemaleSpectacleFrames.js";
import Leness from "./pages/Leness.js";
import GlassesCase from "./pages/GlassesCase.js";
import FemaleClassicWatches from "./pages/FemaleClassicWatches";
import FemaleSmartWatch from "./pages/FemaleSmartWatch";
import FemaleGoldWatch from "./pages/FemaleGoldWatch";
import FemaleMetalWatch from "./pages/FemaleMetalWatch";
import FemaleLeatherWatch from "./pages/FemaleLeatherWatch";
import ArtificialJewellery from "./pages/ArtificialJewellery";
import SilverJewellery from "./pages/SilverJewellery";
import DiamondJewellery from "./pages/DiamondJewellery";
import GoldJewellery from "./pages/GoldJewellery";
import MensFashion from "./pages/MensFashion.js";
import MenDresses from "./pages/MenDresses.js";
import MenShoes from "./pages/MenShoes.js";
import MenEyewear from "./pages/MenEyewear.js";
import Wallets from "./pages/Wallets.js";
import MenWatches from "./pages/MenWatches.js";
import DetialPage from "./pages/DetialPage.js";
import CartPage from "./pages/CartPage.js";
import FavPage from "./pages/FavPage.js";
import CheckOut from "./pages/CheckOut.js";
import Orders from "./pages/Admin/Orders.js";

function App() {
  const [mode, setMode] = useState("light");
  const [userMail, setuserMail] = useState("");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0B1423";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Header toggleMode={toggleMode} mode={mode} />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage mode={mode} />} />
        <Route path="/policy" element={<Policy mode={mode} />} />
        <Route path="/login" element={<Login mode={mode} />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/fav" element={<FavPage />} />
        <Route
          path="/forgetPassword"
          element={<ForgetPass mode={mode} setuserMail={setuserMail} />}
        />
        <Route
          path="/otpEnter"
          element={<OtpEnter mode={mode} userMail={userMail} />}
        />
        <Route
          path="/changePassword"
          element={<ChangePassword mode={mode} userMail={userMail} />}
        />

        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="updateprofile" element={<EditProfile mode={mode} />} />
        </Route>

        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="profile" element={<MyProfile mode={mode} />} />
        </Route>

        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route
            path="updatepassword"
            element={<PasswordChange mode={mode} />}
          />
        </Route>

        <Route path="/register" element={<Register mode={mode} />} />
        <Route path="/refundpolicy" element={<RefundPolicy mode={mode} />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="yourorder" element={<YourOrder />} />
        </Route>

        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="users" element={<UsersDashboard />}></Route>
        </Route>

        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admins" element={<AdminsDashboard />}></Route>
        </Route>

        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="orders" element={<Orders />}></Route>
        </Route>

        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="product" element={<Product />}></Route>
        </Route>

        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="updateProduct/:slug" element={<UpdateProduct />}></Route>
        </Route>

        <Route path="/electronicItems" element={<Electronic />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/beauty" element={<Beauty />} />
        <Route path="/homeandkitchen" element={<HomeandKitchen />} />
        <Route path="/stationary" element={<Stationary />} />
        <Route path="/furniture" element={<Furniture />} />
        <Route path="/fresh" element={<Fresh />} />
        <Route path="/grocery" element={<Grocery />} />

        <Route path="/search/:query" element={<SearchProduct mode={mode} />} />

        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="createproduct" element={<CreateProduct />}></Route>
        </Route>
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="createCategory" element={<CreateCategory />}></Route>
        </Route>

        <Route path="/categories" element={<Categories />} />

        <Route path="/femaleFashion" element={<FemaleFashion />} />

        <Route path="/female-dresses" element={<FemaleDresses />} />
        <Route path="/western" element={<Western />} />
        <Route path="/jeansandjeggings" element={<JeansAndJeggins />} />
        <Route path="/famale-kurtas" element={<FemaleKurtas />} />
        <Route path="/salwarKameez" element={<SalwarKameez />} />
        <Route path="/sarees" element={<Sarees />} />
        <Route path="/lehnga" element={<Lahnga />} />
        <Route path="/femaleLong-wear" element={<LongWear />} />
        <Route path="/female-Sports" element={<FemaleSports />} />

        <Route path="/female-shoes" element={<FemaleShoes />} />
        <Route path="/heels" element={<Heels />} />
        <Route path="/female-sandals" element={<FemaleSandals />} />
        <Route path="/female-boots" element={<FemaleBoots />} />
        <Route path="/female-sports-shoes" element={<FemaleSportsShoes />} />
        <Route path="/female-formal-shoes" element={<FemaleFormalShoe />} />

        <Route path="/female-eyewear" element={<FemaleEyewear />} />
        <Route path="/female-sunglasses" element={<FemaleSunglasses />} />
        <Route
          path="/female-reading-glasses"
          element={<FemaleReadingGlasses />}
        />
        <Route
          path="/female-spectacle-frames"
          element={<FemaleSpectacleFrames />}
        />
        <Route path="/lenses" element={<Leness />} />
        <Route path="/glasses-case" element={<GlassesCase />} />

        <Route path="/female-watches" element={<FemaleWatches />} />
        <Route
          path="/female-classic-watches"
          element={<FemaleClassicWatches />}
        />
        <Route path="/female-smart-watches" element={<FemaleSmartWatch />} />
        <Route path="/female-gold-watches" element={<FemaleGoldWatch />} />
        <Route path="/female-metal-watches" element={<FemaleMetalWatch />} />
        <Route
          path="/female-leather-watches"
          element={<FemaleLeatherWatch />}
        />

        <Route path="/jewellery" element={<Jewellery />} />
        <Route path="/gold-jewellery" element={<GoldJewellery />} />

        <Route path="/diamond-jewellery" element={<DiamondJewellery />} />
        <Route path="/silver-jewellery" element={<SilverJewellery />} />
        <Route path="/artificial-jewellery" element={<ArtificialJewellery />} />

        <Route path="/aboutus" element={<AboutUs mode={mode} />} />
        <Route path="/cautionNotice" element={<CautionNotice mode={mode} />} />
        <Route path="/*" element={<PageNotFound mode={mode} />} />
        <Route path="/verifyEmail" element={<VerifyEmailComp mode={mode} />} />

        <Route path="/mensFashion" element={<MensFashion />} />
        <Route path="/mens-dresses" element={<MenDresses />} />
        <Route path="/mens-shoes" element={<MenShoes />} />
        <Route path="/mens-watches" element={<MenWatches />} />
        <Route path="/mens-eyewear" element={<MenEyewear />} />
        <Route path="/wallets" element={<Wallets />} />

        <Route path="/detailPage/:slug" element={<DetialPage />} />
        <Route path="/checkOut" element={<CheckOut />} />
      </Routes>
      <Footer mode={mode} />
    </>
  );
}

export default App;
