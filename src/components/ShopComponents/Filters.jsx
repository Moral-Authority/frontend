import React, { useState, useEffect } from "react";
import { useLazyQuery, useQuery } from "@apollo/client";
import {
  GET_SUB_DEPARTMENT_FILTERS,
  FILTER_PRODUCTS,
} from "../../graphql/Queries.js";
import FilterDiv from "./FilterDiv";
import FilterToggle from "./FilterToggle";
import FilterLabel from "./FilterLabel";
import ChildFilterLabel from "./ChildFilterLabel";
import { StarIcon } from "@heroicons/react/24/outline";
import { StarIcon as StarFilled } from "@heroicons/react/24/solid";
import { useStateValue, actionTypes } from "@/utils/stateProvider/useStateValue";

const Filters = ({ department, subDepartment }) => {
  const [{ shopFiltersToggle }, dispatch] = useStateValue();

  // Fetch filters immediately when the page is loaded or reloaded
  const { loading, error, data } = useQuery(GET_SUB_DEPARTMENT_FILTERS, {
    variables: { department, subDepartment },
  });

  // State for filters
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedProductCerts, setSelectedProductCerts] = useState([]);
  const [rating, setRating] = useState(0);
  const [selectedCompany, setSelectedCompany] = useState([]);
  const [selectedCertificates, setSelectedCertificates] = useState([]);

  // Expansion states for various filter sections
  const [expandProductFilters, setExpandProductFilters] = useState(false);
  const [expandRatings, setExpandRatings] = useState(false);
  const [expandCompany, setExpandCompany] = useState(false);
  const [isCertificatesExpanded, setIsCertificatesExpanded] = useState(false);

  // Fetch products by filters (Lazy Query to trigger when filters are applied)
  const [getProductsByFilter, { data: filteredProductsData }] =
    useLazyQuery(FILTER_PRODUCTS);

  // Set initial price range when data is first available, and don't reset after.
  useEffect(() => {
    if (data?.getSubDepartmentFilters?.Price) {
      setMinPrice((prevMinPrice) => prevMinPrice || data.getSubDepartmentFilters.Price.min);
      setMaxPrice((prevMaxPrice) => prevMaxPrice || data.getSubDepartmentFilters.Price.max);
    }
  }, [data]);

  // Dispatch the filtered products to global state only when the applyFilters function is triggered
  useEffect(() => {
    if (filteredProductsData) {
      const filteredProducts =
        filteredProductsData?.getProductsByFilter?.filter((product) => {
          return (
            product?.PurchaseInfo?.[0]?.Price >= parseFloat(minPrice) &&
            product?.PurchaseInfo?.[0]?.Price <= parseFloat(maxPrice)
          );
        }) || [];

      dispatch({
        type: actionTypes.SET_FILTERED_PRODUCTS,
        filteredProducts: filteredProducts,
      });
    }
  }, [filteredProductsData, minPrice, maxPrice, dispatch]);

  if (loading) return <p>Loading...</p>;

  // Handle price input changes
  const handleMinPriceChange = (e) => {
    const value = e.target.value;
    setMinPrice(value === "" ? "" : value);
  };

  const handleMaxPriceChange = (e) => {
    const value = e.target.value;
    setMaxPrice(value === "" ? "" : value);
  };

  // Safely check if data is available before attempting to render filters
  const subDepartmentFilters = data?.getSubDepartmentFilters || {};

  // Handle applying the filters
  const applyFilters = () => {
    const min = parseFloat(minPrice);
    const max = parseFloat(maxPrice);

    if (isNaN(min) || isNaN(max)) {
      return;
    }

    const filterInput = {
      priceRange: { min, max },
      productCertifications: selectedProductCerts,
      companyCertifications: selectedCertificates,
      companies: selectedCompany,
    };

    getProductsByFilter({
      variables: {
        filter: filterInput,
        department: department,
        subDepartment: subDepartment,
      },
    });

    dispatch({ type: actionTypes.TOGGLE_SHOP_FILTERS });
  };

  return (
    <div
      className={`absolute z-30 bg-white w-11/12 xl:relative ${
        shopFiltersToggle ? "block" : "hidden"
      } xl:block border border-[#EDEFF6] h-fit xl:h-full xl:w-1/4`}
    >
      <section className="h-full px-4 py-10 flex flex-col space-y-10">
        <div className="w-full xl:hidden flex justify-between items-center pb-4 border-b border-b-[#E7EAF5]">
          <p className="font-semibold">Filter</p>
          <button
            onClick={() => dispatch({ type: actionTypes.TOGGLE_SHOP_FILTERS })}
            className="text-sm text-red-500"
          >
            Cancel
          </button>
        </div>

        {/* Price Range */}
        <FilterDiv>
          <div className="flex justify-between items-center">
            <FilterLabel label={"Price Range"} />
          </div>
          <div className="flex space-x-2 px-6">
            <div className="py-1 px-3 bg-[#EDEFF6]">
              <label>$</label>
              <input
                type="text"
                className="bg-[#EDEFF6] w-1/2 focus:border-none focus:outline-none"
                value={minPrice}
                onChange={handleMinPriceChange}
                onBlur={() => {
                  if (minPrice === "") {
                    setMinPrice(data?.getSubDepartmentFilters?.Price?.min || "");
                  }
                }}
              />
            </div>
            <span>-</span>
            <div className="py-1 px-3 bg-[#EDEFF6]">
              <label>$</label>
              <input
                type="text"
                className="bg-[#EDEFF6] w-1/2 focus:border-none focus:outline-none"
                value={maxPrice}
                onChange={handleMaxPriceChange}
                onBlur={() => {
                  if (maxPrice === "") {
                    setMaxPrice(data?.getSubDepartmentFilters?.Price?.max || "");
                  }
                }}
              />
            </div>
          </div>
        </FilterDiv>

        {/* Ratings */}
        {/* <FilterDiv>
          <FilterLabel label={"Ratings (Feature in Progress)"} />
          <div className="flex flex-col w-full space-y-5 ml-6 pt-1">
            <div className="flex space-x-2">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  index + 1 <= rating ? (
                    <StarFilled
                      key={index}
                      onClick={() => setRating(index + 1)}
                      className="h-6 w-6 text-[#FFB33E] cursor-pointer"
                    />
                  ) : (
                    <StarIcon
                      key={index}
                      onClick={() => setRating(index + 1)}
                      className="h-6 w-6 text-gray-400 cursor-pointer"
                    />
                  )
                ))}
            </div>
          </div>
        </FilterDiv> */}

        {/* Product Filters */}
        <FilterDiv>
          <div
            onClick={() => setExpandProductFilters(!expandProductFilters)}
            className="cursor-pointer flex justify-between items-center"
          >
            <FilterToggle label={"Product Certifications"} />
          </div>
          {expandProductFilters && (
            <div>
              <div className="flex flex-col space-y-5 pl-3 pt-5 space-x-3">
                <ChildFilterLabel label={"Product Certs"} />
                <div className="flex flex-col text-[#798086] space-y-2 w-full justify-start">
                  {subDepartmentFilters?.ProductCertifications?.map(
                    (item, index) => (
                      <div className="flex space-x-2" key={index}>
                        <input
                          type="checkbox"
                          className="accent-[#D6AD60]"
                          onChange={(e) =>
                            e.target.checked
                              ? setSelectedProductCerts([
                                  ...selectedProductCerts,
                                  item,
                                ])
                              : setSelectedProductCerts(
                                  selectedProductCerts?.filter(
                                    (ele) => ele !== item
                                  )
                                )
                          }
                        />
                        <label className="text-sm">{item}</label>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          )}
        </FilterDiv>

        {/* Company */}
        <FilterDiv>
          <div
            onClick={() => setExpandCompany(!expandCompany)}
            className="cursor-pointer flex justify-between items-center"
          >
            <FilterToggle label={"Company"} />
          </div>
          {expandCompany && (
            <div className="flex flex-col w-full space-y-2 ml-6 pt-5">
              {subDepartmentFilters?.Companies?.map((item, index) => (
                <div className="flex space-x-2" key={index}>
                  <input
                    type="checkbox"
                    className="accent-[#D6AD60]"
                    onChange={(e) =>
                      e.target.checked
                        ? setSelectedCompany([...selectedCompany, item])
                        : setSelectedCompany(
                            selectedCompany?.filter((ele) => ele !== item)
                          )
                    }
                  />
                  <label className="text-sm">{item}</label>
                </div>
              ))}
            </div>
          )}
        </FilterDiv>

        {/* Company Certifications */}
        <FilterDiv>
          <div
            onClick={() => setIsCertificatesExpanded(!isCertificatesExpanded)}
            className="cursor-pointer flex justify-between items-center"
          >
            <FilterToggle label={"Company Certifications"} />
          </div>
          {isCertificatesExpanded && (
            <div className="flex flex-col w-full text-[#798086] space-y-2 ml-6 pt-5">
              {subDepartmentFilters?.CompanyCertifications?.map((item, index) => (
                <div className="flex space-x-2" key={index}>
                  <input
                    type="checkbox"
                    className="accent-[#D6AD60]"
                    onChange={(e) =>
                      e.target.checked
                        ? setSelectedCertificates([
                            ...selectedCertificates,
                            item,
                          ])
                        : setSelectedCertificates(
                            selectedCertificates?.filter(
                              (ele) => ele !== item
                            )
                          )
                    }
                  />
                  <label className="text-sm">{item}</label>
                </div>
              ))}
            </div>
          )}
        </FilterDiv>

        {/* Apply Filters Button */}
        <button
          onClick={applyFilters}
          className="w-full bg-[#8F8E63] text-white px-8 py-4 rounded-md"
        >
          Apply Filters
        </button>
      </section>
    </div>
  );
};

export default Filters;
