import React, { useState } from "react";
import ChildFilterLabel from "./ChildFilterLabel";
import FilterDiv from "./FilterDiv";
import FilterLabel from "./FilterLabel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import colors from "@/utils/testAPIs/colorsAPI.json";
import navItems from "@/utils/testAPIs/navItems.json";
import companyCertificates from "@/utils/testAPIs/companyCertificates.json";
import recentlyViewed from "@/utils/testAPIs/recentlyViewed.json";
import companyAPI from "@/utils/testAPIs/companyAPI.json";
import productCerts from "@/utils/testAPIs/productCerts.json";
import { faToggleOff, faToggleOn } from "@fortawesome/free-solid-svg-icons";
import { StarIcon } from "@heroicons/react/24/outline";
import { StarIcon as StarFilled } from "@heroicons/react/24/solid";
import { useStateValue } from "@/utils/stateProvider/useStateValue";

const Filters = () => {
  const [{ shopFiltersToggle }, dispatch] = useStateValue();
  const [selectedColors, setselectedColors] = useState([]);
  const [selectedSizes, setselectedSizes] = useState([]);
  const [selectedProductCerts, setselectedProductCerts] = useState([]);
  const [toggleButton, settoggleButton] = useState(false);
  const [rating, setrating] = useState(0);
  const [selectedCompany, setselectedCompany] = useState([]);
  const [selectedCertificates, setselectedCertificates] = useState([]);

  return (
    <div
      className={`absolute z-30 bg-white w-11/12 opacity-100 xl:relative
      ${
        shopFiltersToggle ? "block" : "hidden"
      } xl:block border border-[#EDEFF6] h-fit xl:h-full xl:w-1/4`}
    >
      <section className=" h-full px-4 py-10 flex flex-col space-y-10">
        <div className="w-full xl:hidden flex justify-between items-center pb-4 border-b border-b-[#E7EAF5]">
          <p className="font-semibold">Filters</p>
          <button
            onClick={() =>
              dispatch({
                type: "SHOP_FILTERS_TOGGLE",
              })
            }
            className="text-sm text-red-500"
          >
            Cancel
          </button>
        </div>
        {/* Price Range */}
        <FilterDiv>
          <FilterLabel label={"Price Range"} />
          <div className="flex space-x-2 px-6">
            <div className="py-1 px-3 bg-[#EDEFF6]">
              <label>$</label>
              <input
                type="text"
                className="bg-[#EDEFF6] w-1/2 focus:border-none focus:outline-none"
              />
            </div>
            <span>-</span>
            <div className="py-1 px-3 bg-[#EDEFF6]">
              <label>$</label>
              <input
                type="text"
                className="bg-[#EDEFF6] w-1/2 focus:border-none focus:outline-none"
              />
            </div>
          </div>
        </FilterDiv>

        {/* Product Filters */}
        <FilterDiv>
          <FilterLabel label={"Product Filters"} />
          {/* Colors */}
          <div className="flex flex-col space-y-5 pl-3 pt-5 space-x-3">
            <ChildFilterLabel label={"Colors"} />
            <div
              className="flex xl:flex-nowrap
             justify-start space-x-2 items-center "
            >
              {colors.colors.map((item, index) => (
                <div
                  key={index}
                  onClick={() =>
                    selectedColors.includes(item.title)
                      ? setselectedColors(
                          selectedColors.filter((ele) => ele !== item.title)
                        )
                      : setselectedColors([...selectedColors, item.title])
                  }
                  style={{ borderColor: item.value }}
                  className={`${
                    selectedColors.includes(item.title)
                      ? "p-1 border"
                      : "p-0 border-none"
                  } w-8 h-8 rounded-full`}
                >
                  <div
                    style={{ backgroundColor: item.value }}
                    className="w-full h-full rounded-full"
                  ></div>
                </div>
              ))}
            </div>
          </div>
          {/* Size */}
          <div className="flex flex-col space-y-5 pl-3 pt-5 space-x-3">
            <ChildFilterLabel label={"Size"} />
            <div className="flex w-full justify-start space-x-4 items-center ">
              <div
                className={`border ${
                  selectedSizes.includes("S")
                    ? "bg-black text-white"
                    : "text-black bg-transparent"
                }  border-[#E3E7F4] select-none  w-8 h-8 flex items-center justify-center`}
                onClick={() =>
                  selectedSizes.includes("S")
                    ? setselectedSizes(
                        selectedSizes.filter((item) => item !== "S")
                      )
                    : setselectedSizes([...selectedSizes, "S"])
                }
              >
                <span className="cursor-default">S</span>
              </div>
              <div
                className={`border ${
                  selectedSizes.includes("M")
                    ? "bg-black text-white"
                    : "text-black bg-transparent"
                }  border-[#E3E7F4] select-none  w-8 h-8 flex items-center justify-center`}
                onClick={() =>
                  selectedSizes.includes("M")
                    ? setselectedSizes(
                        selectedSizes.filter((item) => item !== "M")
                      )
                    : setselectedSizes([...selectedSizes, "M"])
                }
              >
                <span className="cursor-default">M</span>
              </div>
              <div
                className={`border ${
                  selectedSizes.includes("L")
                    ? "bg-black text-white"
                    : "text-black bg-transparent"
                }  border-[#E3E7F4] select-none   w-8 h-8 flex items-center justify-center`}
                onClick={() =>
                  selectedSizes.includes("L")
                    ? setselectedSizes(
                        selectedSizes.filter((item) => item !== "L")
                      )
                    : setselectedSizes([...selectedSizes, "L"])
                }
              >
                <span className="cursor-default">L</span>
              </div>
              <div
                className={`border ${
                  selectedSizes.includes("XL")
                    ? "bg-black text-white"
                    : "text-black bg-transparent"
                }  border-[#E3E7F4] select-none  w-8 h-8 flex items-center justify-center`}
                onClick={() =>
                  selectedSizes.includes("XL")
                    ? setselectedSizes(
                        selectedSizes.filter((item) => item !== "XL")
                      )
                    : setselectedSizes([...selectedSizes, "XL"])
                }
              >
                <span className="cursor-default">XL</span>
              </div>
            </div>
          </div>

          {/* Product Certs */}
          <div className="flex flex-col space-y-5 pl-3 pt-5 space-x-3">
            <ChildFilterLabel label={"Product Certs"} />
            <div className="flex flex-col text-[#798086] space-y-2 w-full justify-start">
              {productCerts.productCerts.map((item, index) => (
                <div className="flex space-x-2" key={index}>
                  <input
                    type="checkbox"
                    className="accent-[#D6AD60]"
                    onChange={(e) =>
                      e.target.checked
                        ? setselectedProductCerts([
                            ...selectedProductCerts,
                            item,
                          ])
                        : setselectedProductCerts(
                            selectedProductCerts.filter((ele) => ele !== item)
                          )
                    }
                  />
                  <label className="text-sm">{item}</label>
                </div>
              ))}
            </div>
          </div>
        </FilterDiv>

        {/* Verified Button */}
        {/* <FilterDiv>
          <div className="flex space-x-2">
            <FilterLabel label={"Verified"} />
            <div>
              <FontAwesomeIcon
                onClick={() => settoggleButton(!toggleButton)}
                icon={toggleButton ? faToggleOn : faToggleOff}
                size="2xl"
                className={`${
                  toggleButton ? "text-[#D6AD60]" : "text-[#DADBDD]"
                }`}
              />
            </div>
          </div>
        </FilterDiv> */}

        {/* Location */}
        {/* <FilterDiv>
          <FilterLabel label={"Location (state/zipcode)"} />
          <div className="flex flex-col w-full space-y-5 ml-6 pt-5">
            <select
              name=""
              id=""
              className="bg-white w-3/4 text-[#798086] px-4 py-2
               border border-[#EDEFF6] text-sm"
            >
              <option value="Select Location">Select Location</option>
            </select>
            <input
              type="text"
              placeholder="Enter your zipcode"
              className="py-2 w-3/4  px-4 bg-[#EDEFF6] focus:outline-none"
              name=""
              id=""
            />
          </div>
        </FilterDiv> */}

        {/* Rating */}
        <FilterDiv>
          <FilterLabel label={"Ratings"} />
          <div className="flex flex-col w-full space-y-5 ml-6 pt-5">
            <div className="flex space-x-2">
              {Array(5)
                .fill(0)
                .map((item, index) =>
                  index + 1 <= rating ? (
                    <StarFilled
                      key={index}
                      onClick={() => setrating(index + 1)}
                      className="h-6 w-6 text-[#FFB33E]"
                    />
                  ) : (
                    <StarIcon
                      key={index}
                      onClick={() => setrating(index + 1)}
                      className="h-6 w-6"
                    />
                  )
                )}
            </div>
          </div>
        </FilterDiv>

        {/* Company */}
        <FilterDiv>
          <FilterLabel label={"Company"} />
          <div className="flex flex-col w-full space-y-2 ml-6 pt-5">
            {companyAPI.company.map((item, index) => (
              <div className="flex space-x-2" key={index}>
                <input
                  type="checkbox"
                  className="accent-[#D6AD60]"
                  onChange={(e) =>
                    e.target.checked
                      ? setselectedCompany([...selectedCompany, item])
                      : setselectedCompany(
                          selectedCompany.filter((ele) => ele !== item)
                        )
                  }
                />
                <label className="text-sm">{item}</label>
              </div>
            ))}
          </div>
        </FilterDiv>

        {/* Company Certificates */}
        <FilterDiv>
          <FilterLabel label={"Company Certificates"} />
          <div className="flex flex-col w-full text-[#798086] space-y-2 ml-6 pt-5">
            {companyCertificates.companyCertificates.map((item, index) => (
              <div className="flex space-x-2" key={index}>
                <input
                  type="checkbox"
                  className="accent-[#D6AD60]"
                  onChange={(e) =>
                    e.target.checked
                      ? setselectedCertificates([...selectedCertificates, item])
                      : setselectedCertificates(
                          selectedCertificates.filter((ele) => ele !== item)
                        )
                  }
                />
                <label className="text-sm">{item}</label>
              </div>
            ))}
          </div>
        </FilterDiv>

        {/* Categories */}
        <div className="hidden xl:block">
          <FilterDiv>
            <FilterLabel label={"Categories"} />
            <div className="flex flex-col w-full text-[#798086] space-y-2 ml-6 pt-5">
              {navItems.navItems.map((item, index) => (
                <div className="flex space-x-2" key={index}>
                  <label className="text-sm cursor-pointer hover:text-black">
                    {item.title}
                  </label>
                </div>
              ))}
            </div>
          </FilterDiv>
        </div>

        {/* Recently viewed */}
        <div className="hidden xl:block">
          <FilterDiv>
            <FilterLabel label={"Recently viewed"} />
            <div className="flex flex-col w-full text-[#798086] space-y-2 ml-6 pt-5">
              {recentlyViewed.items.map((item, index) => (
                <div className="flex space-x-2" key={index}>
                  <div key={index} className=" h-24 w-24 bg-[#D9D9D9]/10">
                    <img src={item.imgSrc} className="" alt="" />
                  </div>
                  <div className="text-xs flex flex-col space-y-1">
                    <p>{item.category}</p>
                    <p className="text-black text-sm">{item.title}</p>
                    <p>${item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </FilterDiv>
        </div>

        <button
          onClick={() =>
            dispatch({
              type: "SHOP_FILTERS_TOGGLE",
            })
          }
          className="w-full bg-[#D6AD60] text-black px-8 py-4 xl:hidden"
        >
          Apply Filters
        </button>
      </section>
    </div>
  );
};

export default Filters;
