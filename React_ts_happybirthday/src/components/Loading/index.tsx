import React, { useEffect } from "react";
import { imageArr } from "@/App/pages/Onces/HeaderContent/OnePageModel/imageArr";
import "./Loading.less";
const index = () => {
    useEffect(() => {
        imageArr.map((img) => {
            new Image().src = img;
        });
        return () => {};
    }, []);

    return <div className="Loading"></div>;
};

export default index;
