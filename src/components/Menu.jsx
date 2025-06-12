import './Menu.css';

export const Menu=(props) =>{
    const {onSectionChange,menuOpened, setMenuOpened} = props;

    return(
        <>
        <button 
        onClick={()=> setMenuOpened(!menuOpened)}
        className="menu-button" 
        >
            <div className={`menu-lines ${menuOpened ? "rotate-45 translate-y" : ""}`} />
            <div className={`menu1 ${menuOpened ? "hidden" : ""}`} />

            <div className={`menu2 ${menuOpened ? "rotate-negative-45" : ""}`} />

        </button>
        <div className={`menu-open ${menuOpened ? "open" : " closed"}`} > 
            <div className={`menu-items `}>
                <MenuButton label="About" onClick={()=> onSectionChange(0)} />
                <MenuButton label="Skills" onClick={()=> onSectionChange(1)} />
                <MenuButton label="Projects" onClick={()=> onSectionChange(2)} />
                <MenuButton label="Contact" onClick={()=> onSectionChange(3)} />
            </div>
        </div>
        </>
    );
};
const MenuButton=(props) => {
    const {label, onClick} = props;
    return(
        <button
            onClick={onClick}
            className="menu-buttons2" 
            >{label}
        </button>
    )
}