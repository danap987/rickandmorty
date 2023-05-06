import "./Footer.css";

function Footer(): JSX.Element {
    const start = 1988;
    const end = new Date().getFullYear();

    return (
        <div className="Footer">
            <p>&copy; All right to Kobi Shasha {start}-{end} :)</p>

          
        </div>
    );
}

export default Footer;
