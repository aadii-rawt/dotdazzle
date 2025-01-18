import { Helmet } from "react-helmet-async";

const SEO = ({metadata}) => (
    <Helmet>
        <title>{metadata.title}</title>
            <meta name="description" content={metadata.description} />
            <meta name="keywords" content={metadata.keywords} />
            <meta name="robots" content={metadata.robots} />
            <link rel="canonical" href={metadata.canonical} />
            {metadata.icons.map((icon, index) => (
                <link
                    key={index}
                    rel="icon"
                    href={icon.href}
                    sizes={icon.sizes || undefined}
                    type={icon.type}
                />
            ))}
    </Helmet>

);

export default SEO;
