import React, { useState } from 'react'

export default function LazyBackgroundImg({
    img,
    children,
    className,
    style,
    isDarkened,
}) {
    const [loaded, setLoaded] = useState(false)

    const handleLoad = () => {
        setLoaded(true)
    }

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                height: '100vh',
                backgroundImage: `${
                    isDarkened
                        ? 'linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ),'
                        : ''
                }url(${img})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPositionY: '5%',
                filter: loaded ? 'none' : 'blur(20px)',
                transition: 'filter 0.5s',
                ...style,
            }}
        >
            <img
                src={img}
                alt=""
                onLoad={handleLoad}
                style={{ display: 'none' }}
            />
            {loaded && children}
        </div>
    )
}
