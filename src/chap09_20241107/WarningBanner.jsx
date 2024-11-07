import React from "react";

function WarningBanner(props)
{
    if(!props.warning)
    {
        return null;
    }

    return <h2>🚨🚨 초 비 상🚨🚨</h2>
}
export default WarningBanner;
