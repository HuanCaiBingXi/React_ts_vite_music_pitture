import React, { useEffect, useState } from "react";
import AudioPlayer from "./AudioPlayer";
import Content from "./content";
import UpArrow from "./UpArrow";
import DownArrow from "./DownArrow";
import Bgfilter from "./Bgfilter";
import { BGhooks } from "./hookBgFilters";
import { hookMusic } from "./hooksMusic";
import style from "./HeaderContent.module.less"
interface Props {
    isSmallWidth: boolean;
}

const index: React.FC<Props> = ({ isSmallWidth }) => {
    const [time, _setTime] = useState<number>(1500);
    const { isloading, BgUrl } = BGhooks(time);
    const { MusicUrl } = hookMusic();

    return (
        <div
            className={`${style.Onces}`}
            style={{ width: isSmallWidth ? "90vw" : "75vw" }}
        >
            <Content isloading={isloading} BgUrl={BgUrl} />
            <UpArrow isloading={isloading} />
            <AudioPlayer time={time} MusicUrl={MusicUrl} />
            <DownArrow isloading={isloading} />
            <Bgfilter BgUrl={BgUrl} isloading={isloading} time={time} />
        </div>
    );
};

export default index;
