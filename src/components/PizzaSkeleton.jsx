import React from "react";
import ContentLoader from "react-content-loader";
import st from "./PizzaList/PizzaList.module.scss";

const PizzaSkeleton = (props) => (
    <div className={st.item}>
        <ContentLoader
            speed={2}
            width={365}
            height={480}
            viewBox="0 0 365 480"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            {...props}
        >
            <circle cx="178" cy="127" r="125" />
            <rect x="34" y="259" rx="5" ry="5" width="280" height="36" />
            <rect x="34" y="301" rx="5" ry="5" width="280" height="126" />
            <rect x="34" y="435" rx="0" ry="0" width="280" height="48" />
        </ContentLoader>
    </div>
);

export default PizzaSkeleton;
