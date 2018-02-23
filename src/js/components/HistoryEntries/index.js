import { connect } from 'react-redux';
import HistoryEntries from './HistoryEntries.jsx';

function mapStoreToProps(store){
    return {
       listItems: store.search.listItems
    };
}

export default connect(mapStoreToProps)(HistoryEntries);