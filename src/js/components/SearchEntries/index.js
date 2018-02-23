import { connect } from 'react-redux';
import SearchEntries from './SearchEntries';

function mapStoreToProps(store){
    return {
        input: store.search.input,
        city: store.search.city,
        history: store.search.listItems
    };
}

export default connect(mapStoreToProps)(SearchEntries);