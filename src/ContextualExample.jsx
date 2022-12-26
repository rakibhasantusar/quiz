import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function ContextualExample() {

    const now = 60;
    return <ProgressBar now={now} label={`${now}%`} />;

}

export default ContextualExample;