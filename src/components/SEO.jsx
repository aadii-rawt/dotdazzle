import { Helmet } from "react-helmet-async";

const SEO = () => (
    <Helmet>
    <title>DotDazzle - Your Idea, Our Code | Web Development & Design Solutions</title>
    <meta 
        name="description" 
        content="DotDazzle is your trusted software agency offering top-notch web development, graphic design, SEO, logo creation, and branding services. Turn your ideas into reality with us!" 
    />
    <meta 
        name="keywords" 
        content="DotDazzle, web development, graphic design, SEO services, logo creation, branding, software agency, website building, digital marketing, design solutions" 
    />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://dotdazzle.in" />
    <link rel="shortcut icon" href="./Favicon/dotdazzle-logo.png" type="image/x-icon" />
</Helmet>

);

export default SEO;
