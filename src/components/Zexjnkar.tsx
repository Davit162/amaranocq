import React, { useEffect, useState } from "react";
import Likes from "./like";
import { useMarzStore } from "../Store/storeMarz";
import Skeleton from "./Skeleton";

interface NkarData {
    src: string;
    tex: string;
    gin: string | number;
    people: number;
}

export default function NkarZexj() {
    const [data, setData] = useState<NkarData[] | null>(null);
    const [loading, setLoading] = useState(true);

    const { selected, count, minPrice, maxPrice } = useMarzStore();

    useEffect(() => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "https://amaranocfirebasa-default-rtdb.firebaseio.com/dbnkar.json");

        xhr.onreadystatechange = () => {
            if (xhr.status === 200 && xhr.readyState === 4) {
                const parsed: NkarData[] = JSON.parse(xhr.responseText);
                setData(parsed);
                setTimeout(() => setLoading(false), 1500);
            }
        };

        xhr.send();
    }, []);

    const filteredData = data?.filter((el) => {
        const price = Number(el.gin);
        return (
            (selected.length > 0 ? selected.includes(el.tex) : true) &&
            el.people >= count &&
            (minPrice === "" || price >= minPrice) &&
            (maxPrice === "" || price <= maxPrice)
        );
    });

    return (
        <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {loading ? (
                    (data?.length ? data : new Array(3).fill(null)).map((_, i) => (
                        <Skeleton key={i} margin="5px" width="100%" height="300px" />
                    ))
                ) : filteredData && filteredData.length > 0 ? (
                    filteredData.map((el, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
                        >
                            <div className="w-full h-56 overflow-hidden">
                                <img
                                    src={el.src}
                                    alt={el.tex}
                                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                />
                            </div>
                            <div className="p-4 space-y-3">
                                <div className="flex justify-between items-center text-gray-600 text-sm">
                                    <div className="flex items-center gap-2">
                                        <i className="fa-solid fa-location-dot text-orange-500"></i>
                                        <span>{el.tex}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <i className="fa-solid fa-user-group text-orange-500"></i>
                                        <span>{el.people}</span>
                                    </div>
                                    <div className="flex items-center gap-1 bg-orange-100 px-2 py-1 rounded-xl">
                                        <i className="fa-solid fa-star text-orange-500"></i>
                                        <span className="font-semibold text-orange-600">5</span>
                                    </div>
                                </div>
                                <p className="text-2xl font-bold text-gray-800">
                                    {el.gin} <span className="text-orange-500">֏</span>
                                </p>
                                <div className="flex justify-end">
                                    <Likes nkar={el} />
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-400 col-span-full mt-10 text-lg">
                        Առաջարկներ չեն գտնվել
                    </p>
                )}
            </div>
        </div>
    );
}
