const Price = ({ price, inPromotion }) => {
    return (
        <>
            {inPromotion[0] ? (
                <>
                    <h2 className="text-lg inline sm:text-2xl align-middle text-violeta-01 mr-2 font-titulos">
                        R$
                        {(
                            price -
                            price * inPromotion[1]
                        ).toFixed(2)}
                    </h2><p className="line-through inline align-middle text-base text-lilas font-titulos">
                        R${price.toFixed(2)}
                    </p>
                    
                </>
            ) : (<h2 className="text-lg sm:text-2xl text-violeta-01 font-titulos">
                R$ {price.toFixed(2)}
                </h2>)
            }
        </>
    )
}

export default Price;