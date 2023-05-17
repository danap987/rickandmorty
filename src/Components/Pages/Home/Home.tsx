import "./Home.css";

function Home(): JSX.Element {
    return (
        <div className="Home">
		<h2> this is home screen</h2>
        <div className="Home">
			<h1>this is home</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3383.2299091508744!2d34.942543475067055!3d32.00888537399401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d349c9fa2ee29%3A0xfd24f49f1c020f51!2sYasmin%2C%20Shoham!5e0!3m2!1sen!2sil!4v1684319706446!5m2!1sen!2sil" 
            width='600' height='450'  style={{ border: 0 }} allowFullScreen loading='lazy'
             referrerPolicy='no-referrer-when-downgrade'></iframe>

<iframe width="560" height="315" 
src="https://www.youtube.com/embed/38y_1EWIE9I"
 title="YouTube video player" frameBorder="0" 
 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen></iframe>
        </div>	
        </div>

        
    );
}

export default Home;
