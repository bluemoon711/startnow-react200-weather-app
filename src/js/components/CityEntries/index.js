import { connect } from 'react-redux';
import CityEntries from './CityEntries';

function mapStoreToProps(store){
    return {
       city: store.search.city
    };
}

export default connect(mapStoreToProps)(CityEntries);