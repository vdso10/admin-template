import { iconeBell, iconeHome, iconeLogout, iconeSettings } from "../icons";
import MenuItem from "./MenuItem"

export default function MenuLateral(){
    return(
        <div>
            <aside>
                <ul>
                    <MenuItem url="/" texto="Inicio" icone={iconeHome}/>
                    <MenuItem url="/ajustes" texto="Ajustes" icone={iconeSettings}/>
                    <MenuItem url="/notificacoes" texto="Notificacoes" icone={iconeBell}/>
                    <MenuItem url="/sair" texto="Sair" icone={iconeLogout}/>
                </ul>
            </aside>
        </div>
    )

}