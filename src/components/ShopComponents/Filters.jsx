import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_SUB_DEPARTMENT_FILTERS } from '../../graphql/Queries.js';
import FilterDiv from "./FilterDiv";
import FilterLabel from "./FilterLabel";
import ChildFilterLabel from "./ChildFilterLabel";
import { StarIcon } from "@heroicons/react/24/outline";
import { StarIcon as StarFilled } from "@heroicons/react/24/solid";
import { useStateValue } from "@/utils/stateProvider/useStateValue";

const Filters = ({ department, subDepartment }) => {
  // Log the received subDepartment value
  console.log("Received SubDepartment:", subDepartment);

  const { loading, error, data } = useQuery(GET_SUB_DEPARTMENT_FILTERS, {
    variables: { input: department },  // Only pass department to the query
  });

  // Make sure hooks are called at the top level
  const [{ shopFiltersToggle }, dispatch] = useStateValue();
  const [selectedProductCerts, setselectedProductCerts] = useState([]);
  const [rating, setrating] = useState(0);
  const [selectedCompany, setselectedCompany] = useState([]);
  const [selectedCertificates, setselectedCertificates] = useState([]);

  // States to manage expansion for each section
  const [expandPriceRange, setExpandPriceRange] = useState(false);
  const [expandProductFilters, setExpandProductFilters] = useState(false);
  const [expandProductCerts, setExpandProductCerts] = useState(false);
  const [expandRatings, setExpandRatings] = useState(false);
  const [expandCompany, setExpandCompany] = useState(false);
  const [isCertificatesExpanded, setIsCertificatesExpanded] = useState(false);

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error("GraphQL Error:", error);
    return <p>Error: {error.message}</p>;
  }

  return (
    <div
      className={`absolute z-30 bg-white w-11/12 opacity-100 xl:relative
      ${shopFiltersToggle ? "block" : "hidden"} xl:block border border-[#EDEFF6] h-fit xl:h-full xl:w-1/4`}
    >
      <section className="h-full px-4 py-10 flex flex-col space-y-10">
        <div className="w-full xl:hidden flex justify-between items-center pb-4 border-b border-b-[#E7EAF5]">
          <p className="font-semibold">Filters</p>
          <button
            onClick={() => dispatch({ type: "SHOP_FILTERS_TOGGLE" })}
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
              <input type="text" className="bg-[#EDEFF6] w-1/2 focus:border-none focus:outline-none" />
            </div>
            <span>-</span>
            <div className="py-1 px-3 bg-[#EDEFF6]">
              <label>$</label>
              <input type="text" className="bg-[#EDEFF6] w-1/2 focus:border-none focus:outline-none" />
            </div>
          </div>
        </FilterDiv>

        {/* Product Filters */}
        <FilterDiv>
          <div onClick={() => setExpandProductFilters(!expandProductFilters)} className="cursor-pointer flex justify-between items-center">
            <FilterLabel label={"Product Certifications"} />
          </div>
          {expandProductFilters && (
            <div>
              <div className="flex flex-col space-y-5 pl-3 pt-5 space-x-3">
                <ChildFilterLabel label={"Product Certs"} />
                <div className="flex flex-col text-[#798086] space-y-2 w-full justify-start">
                  {data.getSubDepartmentFilters.ProductCertifications.map((item, index) => (
                    <div className="flex space-x-2" key={index}>
                      <input
                        type="checkbox"
                        className="accent-[#D6AD60]"
                        onChange={(e) =>
                          e.target.checked
                            ? setselectedProductCerts([...selectedProductCerts, item])
                            : setselectedProductCerts(selectedProductCerts.filter((ele) => ele !== item))
                        }
                      />
                      <label className="text-sm">{item}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </FilterDiv>

        {/* Ratings */}
        <FilterDiv>
          <div onClick={() => setExpandRatings(!expandRatings)} className="cursor-pointer flex justify-between items-center">
            <FilterLabel label={"Ratings"} />
          </div>
          {expandRatings && (
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
          )}
        </FilterDiv>

        {/* Company */}
        <FilterDiv>
          <div onClick={() => setExpandCompany(!expandCompany)} className="cursor-pointer flex justify-between items-center">
            <FilterLabel label={"Company"} />
          </div>
          {expandCompany && (
            <div className="flex flex-col w-full space-y-2 ml-6 pt-5">
              {data.getSubDepartmentFilters.Companies.map((item, index) => (
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
          )}
        </FilterDiv>

        {/* Company Certificates */}
        <FilterDiv>
          <div onClick={() => setIsCertificatesExpanded(!isCertificatesExpanded)} className="cursor-pointer flex justify-between items-center">
            <FilterLabel label={"Company Certifications"} />
          </div>
          {isCertificatesExpanded && (
            <div className="flex flex-col w-full text-[#798086] space-y-2 ml-6 pt-5">
              {data.getSubDepartmentFilters.CompanyCertifications.map((item, index) => (
                <div className="flex space-x-2" key={index}>
                  <input
                    type="checkbox"
                    className="accent-[#D6AD60]"
                    checked={selectedCertificates.includes(item)}
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
          )}
        </FilterDiv>

        <button
          onClick={() => dispatch({ type: "SHOP_FILTERS_TOGGLE" })}
          className="w-full bg-[#D6AD60] text-black px-8 py-4 xl:hidden"
        >
          Apply Filters
        </button>
      </section>
    </div>
  );
};

export default Filters;
