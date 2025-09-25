const Banner = (Props) => {
    /*O children permite que você passe e renderize 
    o conteúdo dinâmico de um componente em React*/

    console.log(Props)
    return (
        <section>
            {Props.children}
        </section>
    )

}

export default Banner;
