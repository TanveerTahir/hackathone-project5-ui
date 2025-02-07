"use client";
import { Product } from "@/types/products";
import { useEffect, useState } from "react";
import { getCartItems } from "@/app/actions/action";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { CgChevronRight } from "react-icons/cg";
// import Product from '../product/page';

const CheckOut = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    zipCode: "",
    city: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    address: false,
    zipCode: false,
    city: false,
  });

  useEffect(() => {
    setCartItems(getCartItems());
    const appliedDiscount = localStorage.getItem("appliedDiscount");
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount));
    }
  }, []);

  const subTotal = cartItems.reduce(
    (total, item) => total + item.price * item.inventory,
    0
  );

  const total = Math.max(subTotal - discount, 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = {
      firstName: !formValues.firstName,
      lastName: !formValues.lastName,
      email: !formValues.email,
      phone: !formValues.phone,
      address: !formValues.address,
      zipCode: !formValues.zipCode,
      city: !formValues.city,
    };
    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  const handlePlaceOrder = () => {
    if (validateForm()) {
      localStorage.removeItem("appliedDiscount");
    } else {

    }
  };
  return (
    <div className="min-h-screen">
      <div className="mt-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 py-4">
            <Link
              href={"/cart"}
              className="text-secnavitemcol hover:text-black transition text-sm"
            >
              Cart
            </Link>
            <CgChevronRight />
            <span className="text-xs">Check-Out</span>
          </nav>
        </div>
      </div>


 {/* cart items Information */}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 shadow-md bg-footbar">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="border rounded-lg p-6 space-y-6">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-4 py-3 border-b"
                >
                  <div className="w-16 h-16 rounded overflow-hidden">
                    {item.productImage && (
                      <Image
                        src={urlFor(item.productImage).url()}
                        alt={item.title}
                        width={64}
                        height={64}
                        className="object-cover w-full h-full"
                      />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium">{item.title}</h3>
                    <p className="text-xs text-secnavitemcol">
                      Quantity : {item.inventory}
                    </p>
                  </div>
                  <p className="text-xs font-medium">
                    ${item.price * item.inventory}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-xs text-secnavitemcol font-medium">No items in cart</p>
            )}

            {/* toatl amount information is here */}

            <div className="text-right pt-4">
              <p className="text-sm">
                Sub Total : <span className="font-medium">${subTotal}</span>
              </p>
              <p className="text-sm">
                Discount : <span className="font-medium">${discount}</span>
              </p>
              <p className="text-lg font-semibold">
                {" "}
                Total :{" "}
                <span className="font-medium ">${subTotal.toFixed(2)}</span>
              </p>
            </div>
          </div>
          
          
          {/* Billing form infornation is here */}


          <div className="border rounded-lg p-6 space-y-6">
            <h2 className="text-xl font-semibold text-center">
              Billing Information
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
              <div>
                <label htmlFor="firstName"> First Name : </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="Enter First Name Here!"
                  value={formValues.firstName}
                  onChange={handleInputChange}
                  className="w-full h-12 rounded-lg border"
                />
                {formErrors.firstName && (
                  <p className="text-red-500 text-xs font-bold">
                    First Name is Required
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="lastName"> Last Name : </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Enter Last Name Here!"
                  value={formValues.lastName}
                  onChange={handleInputChange}
                  className="w-full h-12 rounded-lg border"
                />
                {formErrors.firstName && (
                  <p className="text-red-500 text-xs font-bold">
                    Last Name is Required
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email"> Email : </label>
                <input
                  type="text"
                  id="email"
                  placeholder="Enter E-Mail Here!"
                  value={formValues.email}
                  onChange={handleInputChange}
                  className="w-full h-12 rounded-lg border"
                />
                {formErrors.email && (
                  <p className="text-red-500 text-xs font-bold">
                    Email is Required
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="phone"> Phone : </label>
                <input
                  type="text"
                  id="phone"
                  placeholder="Enter Phone Number Here!"
                  value={formValues.phone}
                  onChange={handleInputChange}
                  className="w-full h-12 rounded-lg border"
                />
                {formErrors.phone && (
                  <p className="text-red-500 text-xs font-bold">
                    Phone Number is Required
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="address"> Address : </label>
                <input
                  type="text"
                  id="address"
                  placeholder="Enter adress Name Here!"
                  value={formValues.address}
                  onChange={handleInputChange}
                  className="w-full h-12 rounded-lg border"
                />
                {formErrors.address && (
                  <p className="text-red-500 text-xs font-bold">
                    Address Name is Required Here!
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="zipCode"> Zip Code : </label>
                <input
                  type="text"
                  id="zipCode"
                  placeholder="Enter Zip Code Here!"
                  value={formValues.zipCode}
                  onChange={handleInputChange}
                  className="w-full h-12 rounded-lg border"
                />
                {formErrors.zipCode && (
                  <p className="text-red-500 text-xs font-bold">
                    Zip Code is Required
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="city"> City : </label>
                <input
                  type="text"
                  id="city"
                  placeholder="Enter City Here!"
                  value={formValues.city}
                  onChange={handleInputChange}
                  className="w-full h-12 rounded-lg border"
                />
                {formErrors.city && (
                  <p className="text-red-500 text-xs font-bold">
                    City is Required
                  </p>
                )}
              </div>

              <button
                className="w-full h-12  rounded-lg bg-primery hover:bg-snbtn text-white"
                onClick={handlePlaceOrder}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
