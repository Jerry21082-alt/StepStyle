"use client";

import React, { useEffect, useRef, useState } from "react";

export default function TopBrands() {
  const [viewElement, setViewElement] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setViewElement(true);
          observer.unobserve(entry.target);
        }
      });
    });

    if (elementRef.current) observer.observe(elementRef.current);

    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, []);

  return (
    <div className="w-full h-full mt-8">
      <h2 className="mb-5 ml-2">Shop Our Top Brands</h2>

      <div className="grid container">
        <div className={`grid-item relative ${viewElement ? 'slide-up' : ''}`} ref={elementRef}>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="w-16 h-16 left-2 top-2 absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 40 40"
                id="puma"
                className="w-full h-full"
                fill="#FFFFFF"
              >
                <path d="M21.17 12.59c-.1 0-.19.38-.38.57s-.32.13-.41.29 0 .17-.06.28-.32.27-.32.44.23.29.42.46.17.24.36.31.4-.13.61-.06.34.09.38.27 0 .42-.21.39a2.31 2.31 0 0 0-.77-.07c-.46 0-1 .2-1 .71a.59.59 0 0 0 .67.56c.23 0 .12-.32.25-.46s1.13.61 2 .61a1.15 1.15 0 0 0 .93-.39s.06-.07.1-.07a.39.39 0 0 1 .13.05 4.61 4.61 0 0 0 3.9 1.75 1.82 1.82 0 0 1 1.14.5 3 3 0 0 1 .66 1.18A6.4 6.4 0 0 0 31 22l.68.53v.17c0 .44-.08 1.71.87 1.77.23 0 .17-.15.17-.27a1.31 1.31 0 0 1 .08-.67c.16-.31-.34-.45-.33-1.13 0-.5-.41-.42-.62-.8a1 1 0 0 1-.23-.61 5.29 5.29 0 0 0-.51-2.78c-.15-.19-.27-.26-.13-.35a2.42 2.42 0 0 0 1-1 6.08 6.08 0 0 1 1.32-2.29 3.89 3.89 0 0 1 .54-.36 3.64 3.64 0 0 0 .89-.51c.22-.22.4-.68.18-.95s-.73-.07-.93 0c-1.46.86-1.67 2.39-2.18 3.26a2.33 2.33 0 0 1-1.64 1.26 3 3 0 0 1-1.39-.27 7.13 7.13 0 0 1-1.92-1.27c-.31-.24-2.69-2.58-4.63-2.68 0 0-.24-.48-.3-.48s-.29.28-.39.32-.26-.33-.36-.32m-8.52 14.02a.36.36 0 0 1-.34-.34v-6h-2v6.65a.6.6 0 0 0 .59.6h3.48a.59.59 0 0 0 .59-.6v-6.69H13v6a.36.36 0 0 1-.34.34m6.65-6.34h-3a.65.65 0 0 0-.65.65v6.6h2v-6.05a.35.35 0 0 1 .34-.34.34.34 0 0 1 .34.33v6.06h2V21.4a.34.34 0 0 1 .68 0v6.05h2v-6.6a.65.65 0 0 0-.65-.65h-3M9 25.64H7v1.82H5v-7.25h4a.64.64 0 0 1 .64.65V25a.65.65 0 0 1-.64.64zm-1.34-4.22a.34.34 0 0 0-.33-.35H7v3.67h.34a.34.34 0 0 0 .33-.34v-3"></path>
                <path d="M26.31 27.46v-1.82h-.68v1.82h-2v-6.6a.65.65 0 0 1 .65-.65h3.36a.65.65 0 0 1 .64.65v6.6Zm0-2.72V21.4a.34.34 0 0 0-.34-.32.34.34 0 0 0-.34.33v3.33h.68"></path>
              </svg>
            </div>

            <div className="p-5 absolute top-1/2">
              <h2 className="text-snow">
                <span className="text-secondaryColor">Elevate Your Style:</span>{" "}
                Discover Premium Sneaker from Puma
              </h2>

              <button className="mt-12 border-2 border-snow py-1 px-4 rounded-3xl text-snow">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div className={`grid-item relative ${viewElement ? 'slide-up' : ''}`}>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="w-16 h-16 left-2 top-2 absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                id="adidas"
                fill="#FFFFFF"
              >
                <path d="M13.387 7.647 16 12h-4.197L9.308 7.841l-1.89-3.147 1.89-1.136 1.19-.716zM9.308 10.288 10.332 12H6.138L3.809 8.124l-.102-.169.102-.06L6.791 6.1zM3.809 10.568 4.668 12H.471L0 11.214l3.083-1.852z"></path>
              </svg>
            </div>

            <div className="p-5 absolute top-1/2">
              <h2 className="text-snow">
                <span className="text-secondaryColor">Iconic Designs:</span>{" "}
                Shop Classic and Trendsetting Sneakers by Adidas
              </h2>

              <button className="mt-12 border-2 border-snow py-1 px-4 rounded-3xl text-snow">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div className={`grid-item relative ${viewElement ? 'slide-up' : ''}`}>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="w-16 h-16 left-2 top-2 absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                id="nike"
              >
                <path
                  fill="#FFFFFF"
                  d="m7.998 7.567-2.758.722c-.974.241-1.826.562-2.647.281-1.116-.482-1.096-1.736-.264-3.07-1.471 1.214-4.118 5.096-.538 5.488.456.06 1.268-.1 2.15-.471l4.057-1.665L16 5.58 8.992 7.306l-.994.261z"
                ></path>
              </svg>
            </div>

            <div className="p-5 absolute top-1/2">
              <h2 className="text-snow">
                <span className="text-secondaryColor">Unlock Performance:</span>{" "}
                Find Your Perfect Pair of Nike Sneakers
              </h2>

              <button className="mt-12 border-2 border-snow py-1 px-4 rounded-3xl text-snow">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div className={`grid-item relative ${viewElement ? 'slide-up' : ''}`}>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="w-16 h-16 left-2 top-2 absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="800"
                width="1200"
                viewBox="-44.7 -40.826 387.4 244.956"
                className="w-full h-full"
              >
                <g
                  transform="matrix(3.0315 0 0 -3.0315 -167.824 2292.362)"
                  fill="#e21836"
                >
                  <path d="M55.36 702.611h2.203v4.374c0 .78 0 1.74.399 2.303.397.612 1.11.811 1.508.811 1.856 0 1.856-2.188 1.856-2.948v-4.54h2.202v4.97c0 .714 0 2.253-.844 3.263-.761.93-1.972 1.28-2.766 1.28-1.393 0-2.155-.766-2.519-1.114v.798H55.36v-9.197" />
                  <path d="M73.547 706.223a5.3 5.3 0 01.132 1.11c0 2.317-1.84 4.84-4.756 4.84-2.834 0-4.838-2.389-4.838-4.989 0-2.683 2.121-4.872 4.855-4.872 2.154 0 3.91 1.54 4.44 3.197h-2.32c-.414-.762-1.142-1.175-2.12-1.175-1.574 0-2.436 1.292-2.536 1.89zm-7.209 1.773c.414 1.707 1.79 2.154 2.602 2.154 1.094 0 2.236-.679 2.485-2.154h-5.087" />
                  <path d="M76.507 702.611h1.356l1.74 5.964h.033l1.725-5.964h1.358l3.363 9.197H83.73l-1.692-5.618h-.032l-1.493 5.618h-1.754l-1.508-5.618h-.033l-1.673 5.618h-2.353z" />
                  <path d="M90.347 702.611h2.02v1.11c.545-.614 1.327-1.409 3.1-1.409 3.362 0 4.572 3.098 4.572 4.94 0 2.432-1.822 4.871-4.622 4.871-1.028 0-2.106-.383-2.868-1.146v3.895h-2.202zm2.069 4.721c0 1.342 1.044 2.767 2.734 2.767 1.393 0 2.686-1.075 2.686-2.867 0-1.787-1.21-2.899-2.652-2.899-1.292 0-2.768.961-2.768 3m17.91 4.475h-2.023v-1.163h-.033c-.067.134-1.178 1.479-3.048 1.479-2.551 0-4.607-2.039-4.607-4.858 0-3.064 2.105-4.954 4.475-4.954 1.158 0 2.518.615 3.213 1.439v-1.14h2.023zm-2.087-4.576c0-1.706-1.162-2.898-2.687-2.898-1.573 0-2.734 1.276-2.734 2.833 0 1.375.928 2.932 2.734 2.932 1.31 0 2.687-.96 2.687-2.867" />
                  <path d="M113.7 714.872h-2.203v-12.261h2.203z" />
                  <path d="M124.071 711.808h-2.02v-1.163h-.035c-.067.134-1.178 1.479-3.048 1.479-2.554 0-4.607-2.039-4.607-4.858 0-3.064 2.105-4.954 4.474-4.954 1.16 0 2.517.615 3.215 1.439v-1.14h2.021zm-2.088-4.576c0-1.706-1.159-2.898-2.684-2.898-1.575 0-2.734 1.276-2.734 2.833 0 1.375.928 2.932 2.734 2.932 1.31 0 2.684-.96 2.684-2.867" />
                  <path d="M125.244 702.611h2.202v4.374c0 .78 0 1.74.4 2.303.396.612 1.111.811 1.507.811 1.855 0 1.855-2.188 1.855-2.948v-4.54h2.205v4.97c0 .714 0 2.253-.847 3.263-.762.93-1.97 1.28-2.766 1.28-1.393 0-2.153-.766-2.519-1.114v.798h-2.037v-9.197m15.998 2.999c-.58-.928-1.308-1.276-2.037-1.276-1.659 0-2.768 1.309-2.768 2.883 0 1.889 1.326 2.883 2.667 2.883 1.36 0 1.874-.878 2.138-1.341h2.487c-.945 2.834-3.466 3.365-4.625 3.365-2.535 0-4.87-2.058-4.87-4.872 0-3.05 2.532-4.94 4.888-4.94 2.154 0 3.86 1.244 4.607 3.298h-2.487" />
                  <path d="M153.53 706.223c.065.297.131.68.131 1.11 0 2.317-1.838 4.84-4.754 4.84-2.834 0-4.839-2.389-4.839-4.989 0-2.683 2.121-4.872 4.855-4.872 2.153 0 3.911 1.54 4.44 3.197h-2.319c-.415-.762-1.142-1.175-2.12-1.175-1.576 0-2.437 1.292-2.534 1.89zm-7.208 1.773c.415 1.707 1.79 2.154 2.601 2.154 1.095 0 2.237-.679 2.485-2.154h-5.086m-53.459 25.099l-2.945-5.086-16.3.917 1.631 2.833zm11.784 16.206l1.477-5.613-23.13 1.52 1.631 2.832zm-15.334 6.88l13.54-.01 1.021-3.838-16.19 1.016zm-1.19-31.335l-2.35-4.042-16.844-.018 1.631 2.83zm29.571 10.905l-4.077-7.067h3.883c1.8 0 5.023.898 6.015 3.46.92 2.38-.77 3.61-1.949 3.61zm3.888 6.76l3.387.02c2.254.013 4.605 1.044 5.465 3.136.793 1.94-.273 3.594-1.686 3.588l-3.276.004zm-15.33 1.177l3.42 5.933 11.574.743.404.72-10.707.749 2.504 4.348h19.856c6.106 0 10.623-2.182 8.867-8.602-.528-1.945-3.01-6.841-10.289-8.892 1.545-.184 5.393-1.89 4.73-6.31-1.178-7.837-11.326-11.568-16.97-11.57l-23.443-.011-1.155 4.535 12.278.866.417.718-13.317.81-1.435 5.377 18.95 1.106.411.712-34.043 2.148 1.631 2.83 36.644 2.38.415.713-10.743.697" />
                </g>
              </svg>
            </div>

            <div className="p-5 absolute top-1/2">
              <h2 className="text-snow">
                <span className="text-secondaryColor">Step into Comfort:</span>{" "}
                Explore the Latest New Balance Sneaker Collection
              </h2>

              <button className="mt-12 border-2 border-snow py-1 px-4 rounded-3xl text-snow ">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
