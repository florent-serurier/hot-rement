import { useEffect, useState } from "react";
import { BaseType } from "../type"
import { Logo } from "./Logo";

type PopupProps = {
    item?: BaseType,
    cbClose: () => void
}

export default function Popup({item, cbClose}: PopupProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [className, setClassName] = useState('');

    useEffect(() => {
        if(item) {
        setClassName('isOpen');
        }
    }, [item]);
    
    function handleClose(e: React.MouseEvent<HTMLElement>) {
        e.preventDefault();
        setClassName('isClose')
    }

    function togglePopup()
    {
        setIsVisible(!isVisible);
        
        if(isVisible) {
            cbClose();
            setClassName('');
        }
    }

    return <>{item && <div className={'popup ' + className} onAnimationEnd={togglePopup}>
        <div className="popup__container">
            <div className="popup__logo">
                <Logo />
            </div>
            <div className="popup__content">
                <p className="popup__text">{item.label}</p>
                {item.gif && <img className="popup__gif" src={item.gif} />}
            </div>
            <a className="button-2" onClick={handleClose} href="#">Fermer</a>
        </div>
    </div>}</>;
}