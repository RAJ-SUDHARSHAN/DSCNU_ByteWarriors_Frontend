import '../css-folder/TrackerList.css';
import {Link} from 'react-router-dom';

function TrackerList() {
    return (
        <div>
            <div className="header">
                <h1>
                    List of users
                </h1>
            </div>
            <ul className="trackerlist">
                {Array(2).fill(0).map(e => <li>
                    <Link to="/">
                    <button className="child">
                        <label htmlFor='child'>Priya</label>
                    </button>
                    </Link>
                </li>)
                }
                {/* <li>
                    <button className="child">
                        <label htmlFor="child">Ferran</label>
                    </button>
                </li>
                <li>
                    <button className="child">
                        <label htmlFor="child">Umang</label>
                    </button>
                </li> */}
                <li>
                    <button className="child">
                        <label htmlFor='child'>Add Child</label>
                    </button>
                </li>
            </ul >
        </div>
    )
}

export default TrackerList;