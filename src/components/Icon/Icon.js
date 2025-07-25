import { useEffect, useState } from "react";

const Icon = (props) => {
    const { name, fillColor, height, width, ...rest } = props;
    const [Component, setComponent] = useState(null);

    useEffect(() => {
        const loadIcon = async () => {
            try {
                const iconModule = await import(`./icons/${name}.js`);
                const IconComponent = iconModule.default;
                setComponent(() => IconComponent);
            }catch(e){
                console.error(`Icon ${name} not found`, e);
                setComponent(() => <span>{name}</span>);
            }
        }
        loadIcon();
    }, [name]);
    
    if (!Component) {
        return null; // or a loading spinner
    }
    return <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      viewBox="0 -960 960 960"
      width={width}
      fill={fillColor}
    >
        <Component {...rest} />
    </svg>
}

export default Icon;