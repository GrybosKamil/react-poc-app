import { Route, Switch } from "react-router-dom"

import './PageContentContainer.scss';

import SettingsContainer from "./SettingsContainer"
import Sidebar from "./Sidebar"

const PageContentContainer = () => {
    return (
        <div className="page-content-container container">
            <div className="col-3  page-sidebar">
                <Sidebar />
            </div>

            <div className="col-9 page-content">
                <Switch>
                    <Route exact path="/">
                        <div>
                            Index
                            </div>
                    </Route>
                    <Route exact path="/settings">
                        <SettingsContainer />
                    </Route>
                    <Route path="*">
                        <div>
                            404 Not Found
                            </div>
                    </Route>
                </Switch>

            </div>
        </div>
    )
}

export default PageContentContainer;