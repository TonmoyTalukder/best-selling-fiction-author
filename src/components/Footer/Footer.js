import React from 'react';

const Footer = () => {
    return (
        <div>
            
		        <footer className="text-center text-lg-start text-muted">
			    {/* <!-- Copyright --> */}
			        <div className="text-center p-4"
			>
				    ©
				    <script>
					    document.write(new Date().getFullYear());
				    </script>
				    Copyright:&ensp;
				    <a
					    className="text-reset fw-bold"
					    href="https://www.linkedin.com/in/TonmoyTalukder/"
					    target="_blank"
				    >
					    Tonmoy Talukder
				    </a>
			    </div>
			    {/* <!-- Copyright --> */}
		    </footer>
        </div>
    );
};

export default Footer;