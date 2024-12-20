import { Helmet } from "react-helmet-async";

const SEO = () => (
    <Helmet>
        <title>dotdazzle - Your Idea, Our Code | Web Development & Design Solutions</title>
        <meta
            name="description"
            content="dotdazzle is your trusted software agency offering top-notch web development, graphic design, SEO, logo creation, and branding services. Turn your ideas into reality with us!"
        />
        <meta
            name="keywords"
            content="DotDazzle, web development, graphic design, SEO services, logo creation, branding, software agency, website building, digital marketing, design solutions"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://dotdazzle.in" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/Favicon/favicon.png" sizes="32x32" type="image/png" />
    </Helmet>

);

export default SEO;
