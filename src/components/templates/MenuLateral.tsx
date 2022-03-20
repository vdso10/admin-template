import { iconeBell, iconeHome, iconeLogout, iconeSettings } from "../icons";
import MenuItem from "./MenuItem"
import Logo from "./Logo";
import useAuth from "../../data/hook/useAuth";

export default function MenuLateral(){

    const { logout } = useAuth()

    return(
        <div>
            <aside className={`
                flex flex-col
                bg-gray-200 dark:text-gray-700
                dark:bg-gray-900 
                `}>
                <div className="flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-800 h-20 w-20">
                    
                    <Logo />

                </div>
                <ul className="flex-grow">
                    <MenuItem url="/" texto="Inicio" icone={iconeHome}/>
                    <MenuItem url="/ajustes" texto="Ajustes" icone={iconeSettings}/>
                    <MenuItem url="/notificacoes" texto="Notificacoes" icone={iconeBell}/>
                    
                </ul>

                <ul>                    
                    <MenuItem 
                        texto="Sair" 
                        icone={iconeLogout}
                        onClick={logout}
                        className={`
                        text-red-600 dark:text-red-400
                        hover:bg-red-400 hover:text-white
                        dark:hover:text-white                  
                        `}
                        
                        />
                </ul>
            </aside>
        </div>
    )

}