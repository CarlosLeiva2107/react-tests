import { useState } from "react"

export function TwitterfollowCard ({userName, name, initiaIsFollowing}) {

    //Estado para el boton de seguimiento y funcion de cambio
    const [isFollowing, setIsFollowing] = useState(initiaIsFollowing)
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    //Constante url imagen
    const imgSrc = `https://unavatar.io/${userName}`

    //Constantes para el estilo del boton dependiendo de su estado
    const buttonText = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClass = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'
    
    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img
                className="tw-followCard-avatar" 
                alt= 'Avatar de usuario' 
                src={imgSrc} />
            <div className="tw-followCard-info">
                <strong>{name}</strong>
                <span className="tw-followCard-infoUserName">@{userName}</span>
            </div>
            </header>

            <aside>
                <button className={buttonClass} onClick={handleClick}>
                    <span className="tw-followCard-follow">{buttonText}</span>
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}