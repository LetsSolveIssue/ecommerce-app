import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionOverview from './collection-overview.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
})

// const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)
// const CollectionOverviewContainer = connect(mapStateToProps)(CollectionOverviewWithSpinner);

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview); //curring

export default CollectionOverviewContainer;