import React from "react";

const Footer = () => {
    return (
        <div className="w-full block bg-amarelo-03">
            <footer className="flex flex-wrap m-auto gap-4 p-5 md:px-6 justify-center items-center md:justify-between max-w-5xl">
                <img
                    src="/img/SS-logo-amarela.svg"
                    alt="Logo Switch 'n Sweet"
                    width="90px"
                />
                <p className="text-rosa-01 font-textos">
                    Desenvolvido por{" "}
                    <a
                        className="font-medium"
                        href="https://linkedin.com/in/mirellanaspolini-12768322b"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Mirella Naspolini
                    </a>
                </p>
            </footer>
        </div>
    );
};

export default Footer;
