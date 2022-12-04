import '../css-folder/TrackerList.css';
import { Link } from 'react-router-dom';

function TrackerList() {
    return (
        <div>
            <div className="header">
                <h1>
                    List of users
                </h1>
            </div>
            <ul className="trackerlist">
                {['Priya', 'Umang'].map(e => <li>
                    <Link to="/Child" state={{data: e}}>
                        <button className="child">
                            <label htmlFor='child'>{e}</label>
                        </button>
                    </Link>
                </li>)
                }
                <li>
                    <Link to='/AddChild'>
                        <button className="Add-child">
                            <label htmlFor='child'>Add Child</label>
                        </button>
                    </Link>
                </li>
            </ul >
        </div>
    )
}

export default TrackerList;