import { FC, useEffect } from "react";
import useActions from "./hooks/useActions";
import useTypedSelector from "./hooks/useTypedSelector";

const App: FC = () => {
    const store = useTypedSelector(store => store);
    const {refreshAction} = useActions();

    useEffect(() => {
        if(localStorage.getItem('accessToken')){
            refreshAction();
        }
    }, [])

    return (
        <div className="App">
            {store.auth.isAuth === true ? 'Приветик, ' + store.user.username : null}
        </div>
    );
};

export default App;
