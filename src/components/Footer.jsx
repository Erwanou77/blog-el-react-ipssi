const Footer = () => {
    const phone = "0612345678";
    const site = "https://ecole-ipssi.com/";
    return (
        <footer>
            <ul>
                <li><a href={"tel:" + phone}>{phone}</a></li>
                <li><a href={site} target="_blank">{site}</a></li>
            </ul>
        </footer>
    );
};

export default Footer;