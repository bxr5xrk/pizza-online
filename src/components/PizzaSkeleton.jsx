import React from "react";
import ContentLoader from "react-content-loader";
import st from "./PizzaList/PizzaList.module.scss";

const PizzaSkeleton = (props) => (
    <div className={st.item}>
        <ContentLoader
            speed={2}
            width={304}
            height={495}
            viewBox="0 0 304 495"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            {...props}
        >
            <circle cx="156" cy="135" r="120" />
            <rect x="26" y="310" rx="10" ry="10" width="260" height="126" />
            <rect x="27" y="450" rx="10" ry="10" width="260" height="48" />
            <rect x="26" y="265" rx="10" ry="10" width="260" height="36" />
        </ContentLoader>
    </div>
);

export default PizzaSkeleton;
