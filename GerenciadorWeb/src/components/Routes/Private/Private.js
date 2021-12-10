
import { Route, useHistory } from "react-router-dom";
import React, {useContext} from "react";
import StoreContext from "../../Store/Context";



export default ({ children, ...rest }) =>{

    const history = useHistory();
    const { token } = useContext(StoreContext);
    if(token == 'invalido'){
        history.push('/login');
        return null ;     
    }


    return <Route {... rest}> {children} </Route>
    


}