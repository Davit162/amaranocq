import React, { useEffect, useState } from "react";
import Skeleton from "./Skeleton";
import { useMarzStore } from "../Store/storeMarz";
import Likes from "./like";
import Arandznatan from "./Arandznatun";
import Houses from "./Framehouses";
import Tnak from "./Tnakner";
import Shuxur from "./Shuxur";
import Tesaran from "./Tesaran";
import Pahanj from "./Pahanj";
import New from "./New";
import Bnakaran from "./Bnakaran";
import Pull from "./swimingpull";
import Com1 from "./Component1";
import Com2 from "./Component2";
import Com3 from "./Component3";
import Com4 from "./Component4";
import Com5 from "./Component5";
import Com6 from "./Component6";
import Com7 from "./Component7";
import Com8 from "./Component8";
import Gisher1 from "./Gishersen1";
import Gisher2 from "./Gishersen2";
import Gisher3 from "./Gishersen3";
import Gisher4 from "./Gishersen4";
import Gisher5 from "./Gishersen5";
import Gisher6 from "./Gishersen6";
import Gisher7 from "./Gishersen7";
import Gisher8 from "./Gishersen8";
import Gisher9 from "./Gishersen9";
import Gisher10 from "./Gishersen10";
import Gisher11 from "./Gishersen11";
import Gisher12 from "./Gishersen12";

interface NkarData {
  src: string;
  tex: string;
  gin: string | number;
  people: number;
}

export default function Nkar() {
  const [data, setData] = useState<NkarData[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [columns, setColumns] = useState(3);


  const {
    selected,
    count,
    minPrice,
    maxPrice,
    selectedOrinak,
    setSelectedOrinak,
    search,
    active,
    nightActive,
    senyakActive
  } = useMarzStore();


  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://amaranocfirebasa-default-rtdb.firebaseio.com/dbimg.json");

    xhr.onreadystatechange = () => {
      if (xhr.status === 200 && xhr.readyState === 4) {
        const parsed: NkarData[] = JSON.parse(xhr.responseText);
        setData(parsed);
        setTimeout(() => setLoading(false), 2500);
      }
    };

    xhr.send();
  }, []);

  const filteredData = data?.filter((el) => {
    const price = Number(el.gin);
    return (
      (selected.length > 0 ? selected.includes(el.tex) : true) &&
      el.tex.toLowerCase().includes(search.toLowerCase()) &&
      el.people >= count &&
      (minPrice === "" || price >= minPrice) &&
      (maxPrice === "" || price <= maxPrice)
    );
  });

  if (selectedOrinak) {
    if (selectedOrinak === "Առանձնատներ") {
      return (
        <div>
          <Arandznatan />
          <button
            className="ml-20 mt-14 mb-4 px-4 py-2 bg-black text-white rounded-lg"
            onClick={() => setSelectedOrinak(null)}
          >
            Վերադառնալ
          </button>
        </div>
      );
    } else if (selectedOrinak === "Frame houses") {
      return (
        <div>
          <Houses />
          <button
            className="ml-20 mt-14 mb-4 px-4 py-2 bg-black text-white rounded-lg"
            onClick={() => setSelectedOrinak(null)}
          >
            Վերադառնալ
          </button>
        </div>
      );
    } else if (selectedOrinak === "Տնակներ") {
      return (
        <div>
          <Tnak />
          <button
            className="ml-20 mt-14 mb-4 px-4 py-2 bg-black text-white rounded-lg"
            onClick={() => setSelectedOrinak(null)}
          >
            Վերադառնալ
          </button>
        </div>
      );
    } else if (selectedOrinak === "Աղմուկից հեռո") {
      return (
        <div>
          <Shuxur />
          <button
            className="ml-20 mt-14 mb-4 px-4 py-2 bg-black text-white rounded-lg"
            onClick={() => setSelectedOrinak(null)}
          >
            Վերադառնալ
          </button>
        </div>
      );
    } else if (selectedOrinak === "Շքեղ տեսարան") {
      return (
        <div>
          <Tesaran />
          <button
            className="ml-20 mt-14 mb-4 px-4 py-2 bg-black text-white rounded-lg"
            onClick={() => setSelectedOrinak(null)}
          >
            Վերադառնալ
          </button>
        </div>
      );
    } else if (selectedOrinak === "Պահանջված") {
      return (
        <div>
          <Pahanj />
          <button
            className="ml-20 mt-14 mb-4 px-4 py-2 bg-black text-white rounded-lg"
            onClick={() => setSelectedOrinak(null)}
          >
            Վերադառնալ
          </button>
        </div>
      );
    } else if (selectedOrinak === "Նոր") {
      return (
        <div>
          <New />
          <button
            className="ml-20 mt-14 mb-4 px-4 py-2 bg-black text-white rounded-lg"
            onClick={() => setSelectedOrinak(null)}
          >
            Վերադառնալ
          </button>
        </div>
      );
    } else if (selectedOrinak === "Բնակարաններ") {
      return (
        <div>
          <Bnakaran />
          <button
            className="ml-20 mt-14 mb-4 px-4 py-2 bg-black text-white rounded-lg"
            onClick={() => setSelectedOrinak(null)}
          >
            Վերադառնալ
          </button>
        </div>
      );
    } else if (selectedOrinak === "Փակ լողավազան") {
      return (
        <div>
          <Pull />
          <button
            className="ml-20 mt-14 mb-4 px-4 py-2 bg-black text-white rounded-lg"
            onClick={() => setSelectedOrinak(null)}
          >
            Վերադառնալ
          </button>
        </div>
      );
    }
  }

  if (nightActive === "Այո" && active === "Բաց") {
    return <div>
      <Com1 />
    </div>
  }

  if (nightActive === "Այո" && active === "Փակ") {
    return <div>
      <Com2 />
    </div>
  }

  if (nightActive === "Այո" && active === "Տաքացվող") {
    return <div>
      <Com3 />
    </div>
  }

  if (nightActive === "Այո" && active === "Առանց լողավազանի") {
    return <div>
      <Com4 />
    </div>
  }

  if (nightActive === "Ոչ" && active === "Բաց") {
    return <div>
      <Com5 />
    </div>
  }

  if (nightActive === "Ոչ" && active === "Փակ") {
    return <div>
      <Com6 />
    </div>
  }

  if (nightActive === "Ոչ" && active === "Տաքացվող") {
    return <div>
      <Com7 />
    </div>
  }

  if (nightActive === "Ոչ" && active === "Առանց լողավազանի") {
    return <div>
      <Com8 />
    </div>
  }

  if (nightActive === "Այո" && senyakActive === "1") {
    return <div>
      <Gisher1 />
    </div>
  }

  if (nightActive === "Այո" && senyakActive === "2") {
    return <div>
      <Gisher2 />
    </div>
  }

  if (nightActive === "Այո" && senyakActive === "3") {
    return <div>
      <Gisher3 />
    </div>
  }

  if (nightActive === "Այո" && senyakActive === "4") {
    return <div>
      <Gisher4 />
    </div>
  }

  if (nightActive === "Այո" && senyakActive === "5") {
    return <div>
      <Gisher5 />
    </div>
  }

  if (nightActive === "Այո" && senyakActive === "6 և ավելի") {
    return <div>
      <Gisher6 />
    </div>
  }

  if (nightActive === "Ոչ" && senyakActive === "1") {
    return <div>
      <Gisher7 />
    </div>
  }

  if (nightActive === "Ոչ" && senyakActive === "2") {
    return <div>
      <Gisher8 />
    </div>
  }

  if (nightActive === "Ոչ" && senyakActive === "3") {
    return <div>
      <Gisher9 />
    </div>
  }

  if (nightActive === "Ոչ" && senyakActive === "4") {
    return <div>
      <Gisher10 />
    </div>
  }

  if (nightActive === "Ոչ" && senyakActive === "5") {
    return <div>
      <Gisher11 />
    </div>
  }

  if (nightActive === "Ոչ" && senyakActive === "6 և ավելի") {
    return <div>
      <Gisher12 />
    </div>
  }

  if (active === "Բաց" && senyakActive === "1") return <div><Com1 /></div>;
  if (active === "Բաց" && senyakActive === "2") return <div><Com2 /></div>;
  if (active === "Բաց" && senyakActive === "3") return <div><Com3 /></div>;
  if (active === "Բաց" && senyakActive === "4") return <div><Com4 /></div>;
  if (active === "Բաց" && senyakActive === "5") return <div><Com5 /></div>;
  if (active === "Բաց" && senyakActive === "6 և ավելի") return <div><Com6 /></div>;

  if (active === "Փակ" && senyakActive === "1") return <div><Gisher7 /></div>;
  if (active === "Փակ" && senyakActive === "2") return <div><Gisher8 /></div>;
  if (active === "Փակ" && senyakActive === "3") return <div><Gisher9 /></div>;
  if (active === "Փակ" && senyakActive === "4") return <div><Gisher10 /></div>;
  if (active === "Փակ" && senyakActive === "5") return <div><Gisher11 /></div>;
  if (active === "Փակ" && senyakActive === "6 և ավելի") return <div><Gisher12 /></div>;

  if (active === "Տաքացվող" && senyakActive === "1") return <div><Com1 /></div>;
  if (active === "Տաքացվող" && senyakActive === "2") return <div><Com2 /></div>;
  if (active === "Տաքացվող" && senyakActive === "3") return <div><Com3 /></div>;
  if (active === "Տաքացվող" && senyakActive === "4") return <div><Com4 /></div>;
  if (active === "Տաքացվող" && senyakActive === "5") return <div><Com5 /></div>;
  if (active === "Տաքացվող" && senyakActive === "6 և ավելի") return <div><Com6 /></div>;

  if (active === "Առանց լողավազանի" && senyakActive === "1") return <div><Gisher7 /></div>;
  if (active === "Առանց լողավազանի" && senyakActive === "2") return <div><Gisher8 /></div>;
  if (active === "Առանց լողավազանի" && senyakActive === "3") return <div><Gisher9 /></div>;
  if (active === "Առանց լողավազանի" && senyakActive === "4") return <div><Gisher10 /></div>;
  if (active === "Առանց լողավազանի" && senyakActive === "5") return <div><Gisher11 /></div>;
  if (active === "Առանց լողավազանի" && senyakActive === "6 և ավելի") return <div><Gisher12 /></div>;

  if (nightActive === "Այո" && active === "Բաց" && senyakActive === "1") return <div><Gisher1 /></div>;
  if (nightActive === "Այո" && active === "Բաց" && senyakActive === "2") return <div><Gisher2 /></div>;
  if (nightActive === "Այո" && active === "Բաց" && senyakActive === "3") return <div><Gisher3 /></div>;
  if (nightActive === "Այո" && active === "Բաց" && senyakActive === "4") return <div><Gisher4 /></div>;
  if (nightActive === "Այո" && active === "Բաց" && senyakActive === "5") return <div><Gisher5 /></div>;
  if (nightActive === "Այո" && active === "Բաց" && senyakActive === "6 և ավելի") return <div><Gisher6 /></div>;

  if (nightActive === "Այո" && active === "Փակ" && senyakActive === "1") return <div><Gisher1 /></div>;
  if (nightActive === "Այո" && active === "Փակ" && senyakActive === "2") return <div><Gisher2 /></div>;
  if (nightActive === "Այո" && active === "Փակ" && senyakActive === "3") return <div><Gisher3 /></div>;
  if (nightActive === "Այո" && active === "Փակ" && senyakActive === "4") return <div><Gisher4 /></div>;
  if (nightActive === "Այո" && active === "Փակ" && senyakActive === "5") return <div><Gisher5 /></div>;
  if (nightActive === "Այո" && active === "Փակ" && senyakActive === "6 և ավելի") return <div><Gisher6 /></div>;

  if (nightActive === "Այո" && active === "Տաքացվող" && senyakActive === "1") return <div><Gisher1 /></div>;
  if (nightActive === "Այո" && active === "Տաքացվող" && senyakActive === "2") return <div><Gisher2 /></div>;
  if (nightActive === "Այո" && active === "Տաքացվող" && senyakActive === "3") return <div><Gisher3 /></div>;
  if (nightActive === "Այո" && active === "Տաքացվող" && senyakActive === "4") return <div><Gisher4 /></div>;
  if (nightActive === "Այո" && active === "Տաքացվող" && senyakActive === "5") return <div><Gisher5 /></div>;
  if (nightActive === "Այո" && active === "Տաքացվող" && senyakActive === "6 և ավելի") return <div><Gisher6 /></div>;

  if (nightActive === "Այո" && active === "Առանց լողավազանի" && senyakActive === "1") return <div><Gisher1 /></div>;
  if (nightActive === "Այո" && active === "Առանց լողավազանի" && senyakActive === "2") return <div><Gisher2 /></div>;
  if (nightActive === "Այո" && active === "Առանց լողավազանի" && senyakActive === "3") return <div><Gisher3 /></div>;
  if (nightActive === "Այո" && active === "Առանց լողավազանի" && senyakActive === "4") return <div><Gisher4 /></div>;
  if (nightActive === "Այո" && active === "Առանց լողավազանի" && senyakActive === "5") return <div><Gisher5 /></div>;
  if (nightActive === "Այո" && active === "Առանց լողավազանի" && senyakActive === "6 և ավելի") return <div><Gisher6 /></div>;

  if (nightActive === "Ոչ" && active === "Բաց" && senyakActive === "1") return <div><Gisher7 /></div>;
  if (nightActive === "Ոչ" && active === "Բաց" && senyakActive === "2") return <div><Gisher8 /></div>;
  if (nightActive === "Ոչ" && active === "Բաց" && senyakActive === "3") return <div><Gisher9 /></div>;
  if (nightActive === "Ոչ" && active === "Բաց" && senyakActive === "4") return <div><Gisher10 /></div>;
  if (nightActive === "Ոչ" && active === "Բաց" && senyakActive === "5") return <div><Gisher11 /></div>;
  if (nightActive === "Ոչ" && active === "Բաց" && senyakActive === "6 և ավելի") return <div><Gisher12 /></div>;

  if (nightActive === "Ոչ" && active === "Փակ" && senyakActive === "1") return <div><Gisher7 /></div>;
  if (nightActive === "Ոչ" && active === "Փակ" && senyakActive === "2") return <div><Gisher8 /></div>;
  if (nightActive === "Ոչ" && active === "Փակ" && senyakActive === "3") return <div><Gisher9 /></div>;
  if (nightActive === "Ոչ" && active === "Փակ" && senyakActive === "4") return <div><Gisher10 /></div>;
  if (nightActive === "Ոչ" && active === "Փակ" && senyakActive === "5") return <div><Gisher11 /></div>;
  if (nightActive === "Ոչ" && active === "Փակ" && senyakActive === "6 և ավելի") return <div><Gisher12 /></div>;

  if (nightActive === "Ոչ" && active === "Տաքացվող" && senyakActive === "1") return <div><Gisher7 /></div>;
  if (nightActive === "Ոչ" && active === "Տաքացվող" && senyakActive === "2") return <div><Gisher8 /></div>;
  if (nightActive === "Ոչ" && active === "Տաքացվող" && senyakActive === "3") return <div><Gisher9 /></div>;
  if (nightActive === "Ոչ" && active === "Տաքացվող" && senyakActive === "4") return <div><Gisher10 /></div>;
  if (nightActive === "Ոչ" && active === "Տաքացվող" && senyakActive === "5") return <div><Gisher11 /></div>;
  if (nightActive === "Ոչ" && active === "Տաքացվող" && senyakActive === "6 և ավելի") return <div><Gisher12 /></div>;

  if (nightActive === "Ոչ" && active === "Առանց լողավազանի" && senyakActive === "1") return <div><Gisher7 /></div>;
  if (nightActive === "Ոչ" && active === "Առանց լողավազանի" && senyakActive === "2") return <div><Gisher8 /></div>;
  if (nightActive === "Ոչ" && active === "Առանց լողավազանի" && senyakActive === "3") return <div><Gisher9 /></div>;
  if (nightActive === "Ոչ" && active === "Առանց լողավազանի" && senyakActive === "4") return <div><Gisher10 /></div>;
  if (nightActive === "Ոչ" && active === "Առանց լողավազանի" && senyakActive === "5") return <div><Gisher11 /></div>;
  if (nightActive === "Ոչ" && active === "Առանց լողավազանի" && senyakActive === "6 և ավելի") return <div><Gisher12 /></div>;


  if (active === "Բաց") {
    return <div>
      <New />
      <h1 className="m-5">Սովորական առաջարկներ</h1>
      <div
        style={{
          width: "50vw",
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: "20px",
        }}
      >
        {loading ? (
          <>
            {(data?.length ? data : new Array(3).fill(null)).map((_, i) => (
              <div key={i}>
                <Skeleton margin="5px" width="300px" height="300px" />
              </div>
            ))}
          </>
        ) : filteredData && filteredData.length > 0 ? (
          filteredData.map((el, index) => (
            <div
              key={index}
              className="mainnkardiv max-w-sm bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
            >
              <div onClick={() => window.open(`/maininfo/${el.tex}`, "_blank")}>
                <div className="w-full h-56 overflow-hidden">
                  <img
                    src={el.src}
                    alt={el.tex}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-4 space-y-2">
                  <div className="flex items-center justify-between text-gray-600 text-sm">
                    <div className="flex items-center gap-1">
                      <i className="fa-solid fa-location-dot text-orange-500"></i>
                      <span>{el.tex}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <i className="fa-solid fa-user-group text-orange-500"></i>
                      <span>{el.people}</span>
                    </div>
                    <div className="flex items-center gap-1 bg-orange-100 px-2 py-0.5 rounded-lg">
                      <i className="fa-solid fa-star text-orange-500"></i>
                      <span className="font-medium text-orange-600">5</span>
                    </div>
                  </div>
                  <p className="text-xl font-bold text-gray-800">
                    {el.gin} <span className="text-orange-500">֏</span>
                  </p>
                </div>
              </div>
              <div className="flex justify-end">
                <Likes nkar={el} />
              </div>
            </div>
          ))
        ) : (
          <p>Առաջարկներ չեն գտնվել</p>
        )}
      </div>
    </div>;
  }
  if (active === "Փակ") {
    return <div>
      <Houses />
      <h1 className="m-5">Սովորական առաջարկներ</h1>
      <div
        style={{
          width: "50vw",
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: "20px",
        }}
      >
        {loading ? (
          <>
            {(data?.length ? data : new Array(3).fill(null)).map((_, i) => (
              <div key={i}>
                <Skeleton margin="5px" width="300px" height="300px" />
              </div>
            ))}
          </>
        ) : filteredData && filteredData.length > 0 ? (
          filteredData.map((el, index) => (
            <div
              key={index}
              className="mainnkardiv max-w-sm bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
            >
              <div onClick={() => window.open(`/maininfo/${el.tex}`, "_blank")}>
                <div className="w-full h-56 overflow-hidden">
                  <img
                    src={el.src}
                    alt={el.tex}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-4 space-y-2">
                  <div className="flex items-center justify-between text-gray-600 text-sm">
                    <div className="flex items-center gap-1">
                      <i className="fa-solid fa-location-dot text-orange-500"></i>
                      <span>{el.tex}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <i className="fa-solid fa-user-group text-orange-500"></i>
                      <span>{el.people}</span>
                    </div>
                    <div className="flex items-center gap-1 bg-orange-100 px-2 py-0.5 rounded-lg">
                      <i className="fa-solid fa-star text-orange-500"></i>
                      <span className="font-medium text-orange-600">5</span>
                    </div>
                  </div>
                  <p className="text-xl font-bold text-gray-800">
                    {el.gin} <span className="text-orange-500">֏</span>
                  </p>
                </div>
              </div>
              <div className="flex justify-end">
                <Likes nkar={el} />
              </div>
            </div>
          ))
        ) : (
          <p>Առաջարկներ չեն գտնվել</p>
        )}
      </div>
    </div>;
  }
  if (active === "Տաքացվող") {
    return <div>
      <Pahanj />
      <h1 className="m-5">Սովորական առաջարկներ</h1>
      <div
        style={{
          width: "50vw",
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: "20px",
        }}
      >
        {loading ? (
          <>
            {(data?.length ? data : new Array(3).fill(null)).map((_, i) => (
              <div key={i}>
                <Skeleton margin="5px" width="300px" height="300px" />
              </div>
            ))}
          </>
        ) : filteredData && filteredData.length > 0 ? (
          filteredData.map((el, index) => (
            <div
              key={index}
              className="mainnkardiv max-w-sm bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
            >
              <div onClick={() => window.open(`/maininfo/${el.tex}`, "_blank")}>
                <div className="w-full h-56 overflow-hidden">
                  <img
                    src={el.src}
                    alt={el.tex}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-4 space-y-2">
                  <div className="flex items-center justify-between text-gray-600 text-sm">
                    <div className="flex items-center gap-1">
                      <i className="fa-solid fa-location-dot text-orange-500"></i>
                      <span>{el.tex}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <i className="fa-solid fa-user-group text-orange-500"></i>
                      <span>{el.people}</span>
                    </div>
                    <div className="flex items-center gap-1 bg-orange-100 px-2 py-0.5 rounded-lg">
                      <i className="fa-solid fa-star text-orange-500"></i>
                      <span className="font-medium text-orange-600">5</span>
                    </div>
                  </div>
                  <p className="text-xl font-bold text-gray-800">
                    {el.gin} <span className="text-orange-500">֏</span>
                  </p>
                </div>
              </div>
              <div className="flex justify-end">
                <Likes nkar={el} />
              </div>
            </div>
          ))
        ) : (
          <p>Առաջարկներ չեն գտնվել</p>
        )}
      </div>
    </div>;
  }
  if (active === "Առանց լողավազանի") {
    return <div>
      <Tesaran />
      <h1 className="m-5">Սովորական առաջարկներ</h1>
      <div
        style={{
          width: "50vw",
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: "20px",
        }}
      >
        {loading ? (
          <>
            {(data?.length ? data : new Array(3).fill(null)).map((_, i) => (
              <div key={i}>
                <Skeleton margin="5px" width="300px" height="300px" />
              </div>
            ))}
          </>
        ) : filteredData && filteredData.length > 0 ? (
          filteredData.map((el, index) => (
            <div
              key={index}
              className="mainnkardiv max-w-sm bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
            >
              <div onClick={() => window.open(`/maininfo/${el.tex}`, "_blank")}>
                <div className="w-full h-56 overflow-hidden">
                  <img
                    src={el.src}
                    alt={el.tex}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-4 space-y-2">
                  <div className="flex items-center justify-between text-gray-600 text-sm">
                    <div className="flex items-center gap-1">
                      <i className="fa-solid fa-location-dot text-orange-500"></i>
                      <span>{el.tex}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <i className="fa-solid fa-user-group text-orange-500"></i>
                      <span>{el.people}</span>
                    </div>
                    <div className="flex items-center gap-1 bg-orange-100 px-2 py-0.5 rounded-lg">
                      <i className="fa-solid fa-star text-orange-500"></i>
                      <span className="font-medium text-orange-600">5</span>
                    </div>
                  </div>
                  <p className="text-xl font-bold text-gray-800">
                    {el.gin} <span className="text-orange-500">֏</span>
                  </p>
                </div>
              </div>
              <div className="flex justify-end">
                <Likes nkar={el} />
              </div>
            </div>
          ))
        ) : (
          <p>Առաջարկներ չեն գտնվել</p>
        )}
      </div>
    </div>;
  }

  if (nightActive === "Այո") {
    return <div>
      <Pull />
      <h1 className="m-5">Սովորական առաջարկներ</h1>
      <div
        style={{
          width: "50vw",
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: "20px",
        }}
      >
        {loading ? (
          <>
            {(data?.length ? data : new Array(3).fill(null)).map((_, i) => (
              <div key={i}>
                <Skeleton margin="5px" width="300px" height="300px" />
              </div>
            ))}
          </>
        ) : filteredData && filteredData.length > 0 ? (
          filteredData.map((el, index) => (
            <div
              key={index}
              className="mainnkardiv max-w-sm bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
            >
              <div onClick={() => window.open(`/maininfo/${el.tex}`, "_blank")}>
                <div className="w-full h-56 overflow-hidden">
                  <img
                    src={el.src}
                    alt={el.tex}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-4 space-y-2">
                  <div className="flex items-center justify-between text-gray-600 text-sm">
                    <div className="flex items-center gap-1">
                      <i className="fa-solid fa-location-dot text-orange-500"></i>
                      <span>{el.tex}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <i className="fa-solid fa-user-group text-orange-500"></i>
                      <span>{el.people}</span>
                    </div>
                    <div className="flex items-center gap-1 bg-orange-100 px-2 py-0.5 rounded-lg">
                      <i className="fa-solid fa-star text-orange-500"></i>
                      <span className="font-medium text-orange-600">5</span>
                    </div>
                  </div>
                  <p className="text-xl font-bold text-gray-800">
                    {el.gin} <span className="text-orange-500">֏</span>
                  </p>
                </div>
              </div>
              <div className="flex justify-end">
                <Likes nkar={el} />
              </div>
            </div>
          ))
        ) : (
          <p>Առաջարկներ չեն գտնվել</p>
        )}
      </div>
    </div>;
  }
  if (nightActive === "Ոչ") {
    return <div>
      <Tesaran />
      <h1 className="m-5">Սովորական առաջարկներ</h1>
      <div
        style={{
          width: "50vw",
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: "20px",
        }}
      >
        {loading ? (
          <>
            {(data?.length ? data : new Array(3).fill(null)).map((_, i) => (
              <div key={i}>
                <Skeleton margin="5px" width="300px" height="300px" />
              </div>
            ))}
          </>
        ) : filteredData && filteredData.length > 0 ? (
          filteredData.map((el, index) => (
            <div
              key={index}
              className="mainnkardiv max-w-sm bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
            >
              <div onClick={() => window.open(`/maininfo/${el.tex}`, "_blank")}>
                <div className="w-full h-56 overflow-hidden">
                  <img
                    src={el.src}
                    alt={el.tex}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-4 space-y-2">
                  <div className="flex items-center justify-between text-gray-600 text-sm">
                    <div className="flex items-center gap-1">
                      <i className="fa-solid fa-location-dot text-orange-500"></i>
                      <span>{el.tex}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <i className="fa-solid fa-user-group text-orange-500"></i>
                      <span>{el.people}</span>
                    </div>
                    <div className="flex items-center gap-1 bg-orange-100 px-2 py-0.5 rounded-lg">
                      <i className="fa-solid fa-star text-orange-500"></i>
                      <span className="font-medium text-orange-600">5</span>
                    </div>
                  </div>
                  <p className="text-xl font-bold text-gray-800">
                    {el.gin} <span className="text-orange-500">֏</span>
                  </p>
                </div>
              </div>
              <div className="flex justify-end">
                <Likes nkar={el} />
              </div>
            </div>
          ))
        ) : (
          <p>Առաջարկներ չեն գտնվել</p>
        )}
      </div>
    </div>;
  }

  if (senyakActive === "1") {
    return <div>
      <Tesaran />
      <Pahanj />
      <h1 className="m-5">Սովորական առաջարկներ</h1>
      <div
        style={{
          width: "50vw",
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: "20px",
        }}
      >
        {loading ? (
          <>
            {(data?.length ? data : new Array(3).fill(null)).map((_, i) => (
              <div key={i}>
                <Skeleton margin="5px" width="300px" height="300px" />
              </div>
            ))}
          </>
        ) : filteredData && filteredData.length > 0 ? (
          filteredData.map((el, index) => (
            <div
              key={index}
              className="mainnkardiv max-w-sm bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
            >
              <div onClick={() => window.open(`/maininfo/${el.tex}`, "_blank")}>
                <div className="w-full h-56 overflow-hidden">
                  <img
                    src={el.src}
                    alt={el.tex}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-4 space-y-2">
                  <div className="flex items-center justify-between text-gray-600 text-sm">
                    <div className="flex items-center gap-1">
                      <i className="fa-solid fa-location-dot text-orange-500"></i>
                      <span>{el.tex}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <i className="fa-solid fa-user-group text-orange-500"></i>
                      <span>{el.people}</span>
                    </div>
                    <div className="flex items-center gap-1 bg-orange-100 px-2 py-0.5 rounded-lg">
                      <i className="fa-solid fa-star text-orange-500"></i>
                      <span className="font-medium text-orange-600">5</span>
                    </div>
                  </div>
                  <p className="text-xl font-bold text-gray-800">
                    {el.gin} <span className="text-orange-500">֏</span>
                  </p>
                </div>
              </div>
              <div className="flex justify-end">
                <Likes nkar={el} />
              </div>
            </div>
          ))
        ) : (
          <p>Առաջարկներ չեն գտնվել</p>
        )}
      </div>
    </div>;
  }
  if (senyakActive === "2") {
    return <div>
      <Houses />
      <h1 className="m-5">Սովորական առաջարկներ</h1>
      <div
        style={{
          width: "50vw",
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: "20px",
        }}
      >
        {loading ? (
          <>
            {(data?.length ? data : new Array(3).fill(null)).map((_, i) => (
              <div key={i} >
                <Skeleton margin="5px" width="300px" height="300px" />
              </div>
            ))}
          </>
        ) : filteredData && filteredData.length > 0 ? (
          filteredData.map((el, index) => (
            <div
              key={index}
              className="mainnkardiv max-w-sm bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
            >
              <div onClick={() => window.open(`/maininfo/${el.tex}`, "_blank")}>
                <div className="w-full h-56 overflow-hidden">
                  <img
                    src={el.src}
                    alt={el.tex}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-4 space-y-2">
                  <div className="flex items-center justify-between text-gray-600 text-sm">
                    <div className="flex items-center gap-1">
                      <i className="fa-solid fa-location-dot text-orange-500"></i>
                      <span>{el.tex}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <i className="fa-solid fa-user-group text-orange-500"></i>
                      <span>{el.people}</span>
                    </div>
                    <div className="flex items-center gap-1 bg-orange-100 px-2 py-0.5 rounded-lg">
                      <i className="fa-solid fa-star text-orange-500"></i>
                      <span className="font-medium text-orange-600">5</span>
                    </div>
                  </div>
                  <p className="text-xl font-bold text-gray-800">
                    {el.gin} <span className="text-orange-500">֏</span>
                  </p>
                </div>
              </div>
              <div className="flex justify-end">
                <Likes nkar={el} />
              </div>
            </div>
          ))
        ) : (
          <p>Առաջարկներ չեն գտնվել</p>
        )}
      </div>
    </div>;
  }
  if (senyakActive === "3") {
    return <div>
      <Tesaran />
      <h1 className="m-5">Սովորական առաջարկներ</h1>
      <div
        style={{
          width: "50vw",
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: "20px",
        }}
      >
        {loading ? (
          <>
            {(data?.length ? data : new Array(3).fill(null)).map((_, i) => (
              <div key={i}>
                <Skeleton margin="5px" width="300px" height="300px" />
              </div>
            ))}
          </>
        ) : filteredData && filteredData.length > 0 ? (
          filteredData.map((el, index) => (
            <div
              key={index}
              className="mainnkardiv max-w-sm bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
            >
              <div onClick={() => window.open(`/maininfo/${el.tex}`, "_blank")}>
                <div className="w-full h-56 overflow-hidden">
                  <img
                    src={el.src}
                    alt={el.tex}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-4 space-y-2">
                  <div className="flex items-center justify-between text-gray-600 text-sm">
                    <div className="flex items-center gap-1">
                      <i className="fa-solid fa-location-dot text-orange-500"></i>
                      <span>{el.tex}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <i className="fa-solid fa-user-group text-orange-500"></i>
                      <span>{el.people}</span>
                    </div>
                    <div className="flex items-center gap-1 bg-orange-100 px-2 py-0.5 rounded-lg">
                      <i className="fa-solid fa-star text-orange-500"></i>
                      <span className="font-medium text-orange-600">5</span>
                    </div>
                  </div>
                  <p className="text-xl font-bold text-gray-800">
                    {el.gin} <span className="text-orange-500">֏</span>
                  </p>
                </div>
              </div>
              <div className="flex justify-end">
                <Likes nkar={el} />
              </div>
            </div>
          ))
        ) : (
          <p>Առաջարկներ չեն գտնվել</p>
        )}
      </div>
    </div>;
  }
  if (senyakActive === "4") {
    return <div>
      <Arandznatan />
      <h1 className="m-5">Սովորական առաջարկներ</h1>
      <div
        style={{
          width: "50vw",
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: "20px",
        }}
      >
        {loading ? (
          <>
            {(data?.length ? data : new Array(3).fill(null)).map((_, i) => (
              <div key={i}>
                <Skeleton margin="5px" width="300px" height="300px" />
              </div>
            ))}
          </>
        ) : filteredData && filteredData.length > 0 ? (
          filteredData.map((el, index) => (
            <div
              key={index}
              className="mainnkardiv max-w-sm bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
            >
              <div onClick={() => window.open(`/maininfo/${el.tex}`, "_blank")}>
                <div className="w-full h-56 overflow-hidden">
                  <img
                    src={el.src}
                    alt={el.tex}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-4 space-y-2">
                  <div className="flex items-center justify-between text-gray-600 text-sm">
                    <div className="flex items-center gap-1">
                      <i className="fa-solid fa-location-dot text-orange-500"></i>
                      <span>{el.tex}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <i className="fa-solid fa-user-group text-orange-500"></i>
                      <span>{el.people}</span>
                    </div>
                    <div className="flex items-center gap-1 bg-orange-100 px-2 py-0.5 rounded-lg">
                      <i className="fa-solid fa-star text-orange-500"></i>
                      <span className="font-medium text-orange-600">5</span>
                    </div>
                  </div>
                  <p className="text-xl font-bold text-gray-800">
                    {el.gin} <span className="text-orange-500">֏</span>
                  </p>
                </div>
              </div>
              <div className="flex justify-end">
                <Likes nkar={el} />
              </div>
            </div>
          ))
        ) : (
          <p>Առաջարկներ չեն գտնվել</p>
        )}
      </div>
    </div>;
  }
  if (senyakActive === "5") {
    return <div>
      <Tesaran />
      <Pahanj />
      <New />
      <h1 className="m-5">Սովորական առաջարկներ</h1>
      <div
        style={{
          width: "50vw",
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: "20px",
        }}
      >
        {loading ? (
          <>
            {(data?.length ? data : new Array(3).fill(null)).map((_, i) => (
              <div key={i}>
                <Skeleton margin="5px" width="300px" height="300px" />
              </div>
            ))}
          </>
        ) : filteredData && filteredData.length > 0 ? (
          filteredData.map((el, index) => (
            <div
              key={index}
              className="mainnkardiv max-w-sm bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
            >
              <div onClick={() => window.open(`/maininfo/${el.tex}`, "_blank")}>
                <div className="w-full h-56 overflow-hidden">
                  <img
                    src={el.src}
                    alt={el.tex}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-4 space-y-2">
                  <div className="flex items-center justify-between text-gray-600 text-sm">
                    <div className="flex items-center gap-1">
                      <i className="fa-solid fa-location-dot text-orange-500"></i>
                      <span>{el.tex}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <i className="fa-solid fa-user-group text-orange-500"></i>
                      <span>{el.people}</span>
                    </div>
                    <div className="flex items-center gap-1 bg-orange-100 px-2 py-0.5 rounded-lg">
                      <i className="fa-solid fa-star text-orange-500"></i>
                      <span className="font-medium text-orange-600">5</span>
                    </div>
                  </div>
                  <p className="text-xl font-bold text-gray-800">
                    {el.gin} <span className="text-orange-500">֏</span>
                  </p>
                </div>
              </div>
              <div className="flex justify-end">
                <Likes nkar={el} />
              </div>
            </div>
          ))
        ) : (
          <p>Առաջարկներ չեն գտնվել</p>
        )}
      </div>
    </div>;
  }
  if (senyakActive === "6 և ավելի") {
    return <div>
      <Pull />
      <New />
      <Arandznatan />
      <h1 className="m-5">Սովորական առաջարկներ</h1>
      <div
        style={{
          width: "50vw",
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: "20px",
        }}
      >
        {loading ? (
          <>
            {(data?.length ? data : new Array(3).fill(null)).map((_, i) => (
              <div key={i}>
                <Skeleton margin="5px" width="300px" height="300px" />
              </div>
            ))}
          </>
        ) : filteredData && filteredData.length > 0 ? (
          filteredData.map((el, index) => (
            <div
              key={index}
              className="mainnkardiv max-w-sm bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
            >
              <div onClick={() => window.open(`/maininfo/${el.tex}`, "_blank")}>
                <div className="w-full h-56 overflow-hidden">
                  <img
                    src={el.src}
                    alt={el.tex}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-4 space-y-2">
                  <div className="flex items-center justify-between text-gray-600 text-sm">
                    <div className="flex items-center gap-1">
                      <i className="fa-solid fa-location-dot text-orange-500"></i>
                      <span>{el.tex}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <i className="fa-solid fa-user-group text-orange-500"></i>
                      <span>{el.people}</span>
                    </div>
                    <div className="flex items-center gap-1 bg-orange-100 px-2 py-0.5 rounded-lg">
                      <i className="fa-solid fa-star text-orange-500"></i>
                      <span className="font-medium text-orange-600">5</span>
                    </div>
                  </div>
                  <p className="text-xl font-bold text-gray-800">
                    {el.gin} <span className="text-orange-500">֏</span>
                  </p>
                </div>
              </div>
              <div className="flex justify-end">
                <Likes nkar={el} />
              </div>
            </div>
          ))
        ) : (
          <p>Առաջարկներ չեն գտնվել</p>
        )}
      </div>
    </div>
  }

  return (
    <div className="p-5 bg-gray-50 min-h-screen">
  <div className="flex justify-between items-center mb-5">
    <h1 className="text-2xl font-bold text-gray-800">Լավագույն առաջարկներ</h1>
    <div className="flex gap-2">
      <button
        onClick={() => setColumns(2)}
        className={`px-4 py-2 rounded-md border border-gray-300 cursor-pointer transition-colors ${
          columns === 2 ? "bg-gray-800 text-white" : "bg-white text-gray-700"
        }`}
      >
        🭿🭿
      </button>
      <button
        onClick={() => setColumns(3)}
        className={`px-4 py-2 rounded-md border border-gray-300 cursor-pointer transition-colors ${
          columns === 3 ? "bg-gray-800 text-white" : "bg-white text-gray-700"
        }`}
      >
        🭿🭿🭿
      </button>
    </div>
  </div>

  <div
    className={`grid gap-5`}
    style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`, width: "50vw" }}
  >
    {loading ? (
      <>
        {(data?.length ? data : new Array(3).fill(null)).map((_, i) => (
          <div key={i}>
            <Skeleton margin="5px" width="300px" height="300px" />
          </div>
        ))}
      </>
    ) : filteredData && filteredData.length > 0 ? (
      filteredData.map((el, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden max-w-sm transition-transform hover:scale-105"
        >
          <div onClick={() => window.open(`/maininfo/${el.tex}`, "_blank")}>
            <div className="w-full h-56 overflow-hidden">
              <img
                src={el.src}
                alt={el.tex}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-4 space-y-2">
              <div className="flex items-center justify-between text-gray-500 text-sm">
                <div className="flex items-center gap-1">
                  <i className="fa-solid fa-location-dot text-orange-400"></i>
                  <span>{el.tex}</span>
                </div>
                <div className="flex items-center gap-1">
                  <i className="fa-solid fa-user-group text-orange-400"></i>
                  <span>{el.people}</span>
                </div>
                <div className="flex items-center gap-1 bg-orange-100 px-2 py-0.5 rounded-lg">
                  <i className="fa-solid fa-star text-orange-400"></i>
                  <span className="font-medium text-orange-500">5</span>
                </div>
              </div>
              <p className="text-lg font-semibold text-gray-800">
                {el.gin} <span className="text-orange-500">֏</span>
              </p>
            </div>
          </div>
          <div className="flex justify-end p-2">
            <Likes nkar={el} />
          </div>
        </div>
      ))
    ) : (
      <p className="text-gray-600">Առաջարկներ չեն գտնվել</p>
    )}
  </div>
</div>


  );
}
