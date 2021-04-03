import './Content.scss';

function Content() {
    return (
        <div className="content-container container">
            <div className="row">
                <div className="content-sidebar col-2">
                    Sidebar
                </div>
                <div className="content-page col-10">
                    Content
                </div>
            </div>
        </div>
    )
}

export default Content;