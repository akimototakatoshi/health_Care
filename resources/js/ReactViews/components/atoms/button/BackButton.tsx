import React, { FC } from "react";
import { ButtonFunc2 } from "../../../types/button";

const BackButton: FC<ButtonFunc2> = (props) => {
    const { children } = props;

    return (
        <span className='material-symbols-outlined back mt-5 mx-3'>
            {children}
        </span>
    );
};

export default BackButton;
