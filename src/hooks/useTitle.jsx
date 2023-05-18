import React, { useEffect } from "react";

const useTitle = (title) =>
    useEffect(() => {
        document.title = `Lego Sets${title && " | "}${title}`;
    }, [title]);

export default useTitle;
